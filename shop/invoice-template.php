<?php
/**
 * Template de Invoice para Beekonz
 * Genera un HTML profesional similar al invoice de Stripe
 */

function generateInvoiceHTML($order_id, $customer_name, $customer_email, $amount_total, $currency, $paquete, $cantidad, $sensor, $payment_intent) {
    $fecha_emision = date('F j, Y');
    $fecha_vencimiento = date('F j, Y', strtotime('+7 days'));
    $subtotal = $amount_total / 100;
    $total = $subtotal;
    
    // Determinar descripción del producto
    $descripcion = '';
    $precio_unitario = 0;
    
    if ($paquete === 'face_tracking') {
        $descripcion = 'Beekonz Face Tracking - Dispositivo de tracking facial';
        $precio_unitario = 2499;
    } elseif ($paquete === 'starter') {
        $descripcion = 'Beekonz Starter Pack - 6 Trackers LSM6DSV';
        $precio_unitario = 5999;
    } elseif ($paquete === 'advanced') {
        $descripcion = 'Beekonz Advanced Pack - 8 Trackers LSM6DSV';
        $precio_unitario = 7499;
    } elseif ($paquete === 'pro') {
        $descripcion = 'Beekonz Pro Pack - 10 Trackers LSM6DSV';
        $precio_unitario = 8999;
    }
    
    $html = '
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Invoice #' . $order_id . ' - Beekonz</title>
        <style>
            body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; margin: 0; padding: 40px; background: #f5f5f5; }
            .invoice-container { max-width: 800px; margin: 0 auto; background: white; padding: 60px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
            .header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 40px; }
            .logo { width: 60px; height: 60px; background: #1A070E; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #f3cc80; font-size: 24px; font-weight: bold; }
            .invoice-title { font-size: 36px; font-weight: bold; color: #1A070E; margin: 0; }
            .invoice-details { display: flex; justify-content: space-between; margin-bottom: 40px; }
            .invoice-details-left, .invoice-details-right { flex: 1; }
            .invoice-details-right { text-align: right; }
            .detail-label { font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
            .detail-value { font-size: 14px; color: #1A070E; margin-bottom: 15px; }
            .amount-due { background: #f9f9f9; padding: 20px; border-radius: 8px; text-align: center; margin: 30px 0; }
            .amount-due-label { font-size: 14px; color: #666; margin-bottom: 5px; }
            .amount-due-value { font-size: 32px; font-weight: bold; color: #1A070E; }
            .amount-due-date { font-size: 14px; color: #666; margin-top: 5px; }
            .items-table { width: 100%; border-collapse: collapse; margin: 30px 0; }
            .items-table th { background: #f9f9f9; padding: 12px; text-align: left; font-size: 12px; color: #666; text-transform: uppercase; letter-spacing: 1px; border-bottom: 2px solid #eee; }
            .items-table td { padding: 12px; border-bottom: 1px solid #eee; font-size: 14px; color: #1A070E; }
            .items-table .text-right { text-align: right; }
            .totals { margin-top: 20px; }
            .total-row { display: flex; justify-content: space-between; padding: 10px 0; font-size: 14px; }
            .total-row.grand-total { border-top: 2px solid #1A070E; font-weight: bold; font-size: 18px; margin-top: 10px; padding-top: 15px; }
            .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; text-align: center; }
            .footer strong { color: #1A070E; }
        </style>
    </head>
    <body>
        <div class="invoice-container">
            <!-- Header -->
            <div class="header">
                <div>
                    <p class="invoice-title">Invoice</p>
                </div>
                <div class="logo">🐝</div>
            </div>
            
            <!-- Invoice Details -->
            <div class="invoice-details">
                <div class="invoice-details-left">
                    <div>
                        <p class="detail-label">Invoice number</p>
                        <p class="detail-value">' . $order_id . '</p>
                    </div>
                    <div>
                        <p class="detail-label">Date of issue</p>
                        <p class="detail-value">' . $fecha_emision . '</p>
                    </div>
                    <div>
                        <p class="detail-label">Date due</p>
                        <p class="detail-value">' . $fecha_vencimiento . '</p>
                    </div>
                </div>
                <div class="invoice-details-right">
                    <div>
                        <p class="detail-label">From</p>
                        <p class="detail-value">
                            <strong>Beekonz</strong><br>
                            Carlos Merida 8512<br>
                            32696 Ciudad Juarez, Chih., Mexico<br>
                            +52 656 133 5732
                        </p>
                    </div>
                    <div>
                        <p class="detail-label">Bill to</p>
                        <p class="detail-value">
                            <strong>' . htmlspecialchars($customer_name) . '</strong><br>
                            ' . htmlspecialchars($customer_email) . '
                        </p>
                    </div>
                </div>
            </div>
            
            <!-- Amount Due -->
            <div class="amount-due">
                <p class="amount-due-label">MXN$' . number_format($total, 2) . ' due ' . $fecha_vencimiento . '</p>
            </div>
            
            <!-- Items Table -->
            <table class="items-table">
                <thead>
                    <tr>
                        <th>Description</th>
                        <th class="text-right">Qty</th>
                        <th class="text-right">Unit price</th>
                        <th class="text-right">Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>' . $descripcion . '</td>
                        <td class="text-right">1</td>
                        <td class="text-right">MXN$' . number_format($precio_unitario, 2) . '</td>
                        <td class="text-right">MXN$' . number_format($precio_unitario, 2) . '</td>
                    </tr>
                </tbody>
            </table>
            
            <!-- Totals -->
            <div class="totals">
                <div class="total-row">
                    <span>Subtotal</span>
                    <span>MXN$' . number_format($subtotal, 2) . '</span>
                </div>
                <div class="total-row grand-total">
                    <span>Total</span>
                    <span>MXN$' . number_format($total, 2) . '</span>
                </div>
                <div class="total-row">
                    <span>Amount due</span>
                    <span><strong>MXN$' . number_format($total, 2) . '</strong></span>
                </div>
            </div>
            
            <!-- Footer -->
            <div class="footer">
                <p><strong>' . $order_id . '</strong> - MXN$' . number_format($total, 2) . ' due ' . $fecha_vencimiento . '</p>
                <p style="margin-top: 10px;">Thank you for your purchase! - Beekonz Trackers</p>
            </div>
        </div>
    </body>
    </html>';
    
    return $html;
}
