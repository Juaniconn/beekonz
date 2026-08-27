<?php
/**
 * Webhook de Stripe para Beekonz
 * Crea tareas en ClickUp y envía correo de confirmación al cliente vía SMTP
 * 
 * URL: https://beekonz.shop/webhook.php
 */

// Configuración
$STRIPE_SECRET_KEY = '$STRIPE_SECRET_KEY';
$STRIPE_WEBHOOK_SECRET = '$STRIPE_WEBHOOK_BEEKONZ_SECRET';
$CLICKUP_API_TOKEN = '$CLICKUP_API_TOKEN';
$CLICKUP_LIST_ID = '901710483647';

// Configuración SMTP Hostinger
$SMTP_HOST = 'smtp.hostinger.com';
$SMTP_PORT = 465;
$SMTP_USER = 'redes@beekonz.shop';
$SMTP_PASS = 'Slimevr.21';

// Obtener el payload de Stripe
$payload = @file_get_contents('php://input');
$sig_header = $_SERVER['HTTP_STRIPE_SIGNATURE'] ?? '';

// Verificar la firma de Stripe (seguridad)
if (!empty($sig_header) && !empty($STRIPE_WEBHOOK_SECRET)) {
    $expected_sig = hash_hmac('sha256', $payload, $STRIPE_WEBHOOK_SECRET);
    if (!hash_equals($expected_sig, $sig_header)) {
        http_response_code(400);
        exit('Invalid signature');
    }
}

if (empty($payload)) {
    http_response_code(400);
    exit('Empty payload');
}

$event = json_decode($payload, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400);
    exit('Invalid JSON');
}

if ($event['type'] !== 'checkout.session.completed') {
    http_response_code(200);
    exit('Event not processed: ' . $event['type']);
}

$session = $event['data']['object'];
$customer_email = $session['customer_details']['email'] ?? '';
$customer_name = $session['customer_details']['name'] ?? '';
$amount_total = $session['amount_total'] ?? 0;
$currency = $session['currency'] ?? 'mxn';
$payment_intent = $session['payment_intent'] ?? '';

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

$order_id = date('Ymd') . rand(100, 999);
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

// Enviar correo de confirmación al cliente vía SMTP
if ($http_code === 200 || $http_code === 201) {
    $subject = 'Gracias por tu compra! - Beekonz #' . $order_id;
    
    $message = '
    <html>
    <body style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #1A070E; padding: 20px; text-align: center;">
            <h1 style="color: #f3cc80; margin: 0;">Beekonz</h1>
        </div>
        <div style="padding: 30px; background: #f9f9f9;">
            <h2>Gracias por tu compra, ' . $customer_name . '!</h2>
            <p>Tu pedido ha sido confirmado. Aqui estan los detalles:</p>
            
            <div style="background: white; padding: 20px; border-radius: 10px; margin: 20px 0;">
                <p><b>Numero de Orden:</b> #' . $order_id . '</p>
                <p><b>Paquete:</b> ' . $paquete . '</p>
                <p><b>Cantidad:</b> ' . $cantidad . ' trackers</p>
                <p><b>Total:</b> $' . number_format($amount_total / 100, 2) . ' MXN</p>
                <p><b>Fecha:</b> ' . date('d/m/Y') . '</p>
            </div>
            
            <p>Puedes rastrear el estado de tu pedido en tiempo real:</p>
            <a href="https://beekonz.shop/seguimiento-pedidos" style="display: inline-block; background: #f3cc80; color: #1A070E; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">Ver Seguimiento</a>
            
            <p style="margin-top: 30px; font-size: 14px; color: #666;">
                Tienes dudas? Contactanos en Discord o responde a este correo.<br><br>
                Gracias por tu compra!<br>
                - Equipo Beekonz
            </p>
        </div>
    </body>
    </html>';
    
    // Enviar via SMTP de Hostinger
    $from = 'redes@beekonz.shop';
    $from_name = 'Beekonz';
    
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "From: {$from_name} <{$from}>\r\n";
    $headers .= "Reply-To: {$from}\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
    
    // Usar mail() nativa (Hostinger ya tiene SMTP configurado en php.ini)
    $sent = mail($customer_email, $subject, $message, $headers);
    
    if ($sent) {
        http_response_code(200);
        echo 'Task created and email sent successfully';
    } else {
        http_response_code(200);
        echo 'Task created but email failed';
    }
} else {
    http_response_code(500);
    echo 'Failed to create task: ' . $response;
}
