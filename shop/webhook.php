<?php
/**
 * Webhook de Stripe para Beekonz
 * Crea tareas en ClickUp cuando se recibe un pago
 * 
 * URL: https://beekonz.shop/webhook.php
 */

// Configuración
$STRIPE_SECRET_KEY = getenv('STRIPE_SECRET_KEY') ?: 'sk_live_...';
$CLICKUP_API_TOKEN = getenv('CLICKUP_API_TOKEN') ?: 'pk_...';
$CLICKUP_LIST_ID = '901710483647';

// Obtener el payload de Stripe
$payload = @file_get_contents('php://input');
$sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'] ?? '';

// Verificar que el payload no esté vacío
if (empty($payload)) {
    http_response_code(400);
    exit('Empty payload');
}

// Parsear el evento
$event = json_decode($payload, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    exit('Invalid JSON');
}

// Solo procesar eventos de checkout completados
if ($event['type'] !== 'checkout.session.completed') {
    http_response_code(200);
    exit('Event not processed: ' . $event['type']);
}

// Extraer datos del cliente
$session = $event['data']['object'];
$customer_email = $session['customer_details']['email'] ?? '';
$customer_name = $session['customer_details']['name'] ?? '';
$amount_total = $session['amount_total'] ?? 0;
$currency = $session['currency'] ?? 'mxn';
$payment_intent = $session['payment_intent'] ?? '';

// Obtener los items de la línea
$line_items = [];
if (function_exists('stripe_get_line_items')) {
    // Si tenemos la SDK de Stripe
    $line_items = $session['line_items']['data'] ?? [];
} else {
    // Usar la API de Stripe directamente
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://api.stripe.com/v1/checkout/sessions/{$session['id']}/line_items");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_USERPWD, $STRIPE_SECRET_KEY . ':');
    $response = curl_exec($ch);
    curl_close($ch);
    
    if ($response) {
        $items_data = json_decode($response, true);
        $line_items = $items_data['data'] ?? [];
    }
}

// Determinar el paquete basado en el monto
$paquete = 'starter';
$cantidad = 6;
$sensor = 'lsm6dsv';

if ($amount_total >= 899900) {
    $paquete = 'pro';
    $cantidad = 10;
} elseif ($amount_total >= 749900) {
    $paquete = 'advanced';
    $cantidad = 8;
} elseif ($amount_total >= 599900) {
    $paquete = 'starter';
    $cantidad = 6;
} elseif ($amount_total >= 249900) {
    $paquete = 'face_tracking';
    $cantidad = 1;
}

// Generar Order ID (usar timestamp + random)
$order_id = date('Ymd') . rand(100, 999);

// Determinar país (por defecto MX)
$pais = 'MX';
$bandera = '🇲🇽';

// Crear la tarea en ClickUp
$tags = [];
if ($sensor === 'lsm6dsv') {
    $tags[] = 'lsm6dsv';
} elseif ($sensor === 'icm-45686') {
    $tags[] = 'icm-45686';
} else {
    $tags[] = 'lsm6dsv';
}
$tags[] = 'x' . $cantidad;

$task_data = [
    'name' => "#{$order_id} ✈️ {$bandera} 📦",
    'description' => "Pedido de {$cantidad} trackers {$sensor} para {$pais}\nCliente: {$customer_name}\nEmail: {$customer_email}\nMonto: $" . number_format($amount_total / 100, 2) . " {$currency}\nPayment Intent: {$payment_intent}",
    'tags' => $tags
];

// Llamar a ClickUp API
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, "https://api.clickup.com/api/v2/list/{$CLICKUP_LIST_ID}/task");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($task_data));
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Authorization: ' . $CLICKUP_API_TOKEN,
    'Content-Type: application/json'
]);

$response = curl_exec($ch);
$http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
curl_close($ch);

if ($http_code === 200 || $http_code === 201) {
    http_response_code(200);
    echo 'Task created successfully';
} else {
    http_response_code(500);
    echo 'Failed to create task: ' . $response;
}
