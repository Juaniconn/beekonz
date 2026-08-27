<?php
/**
 * Configuración del Webhook - Beekonz
 * Este archivo está gitignored por seguridad
 */

// Credenciales de Stripe
define('STRIPE_SECRET_KEY', 'sk_live_NN...');          // Reemplazar con tu Secret Key
define('STRIPE_SIGNING_SECRET', 'whsec_...');          // Reemplazar con tu Signing Secret del webhook

// Credenciales de ClickUp
define('CLICKUP_API_TOKEN', 'pk_1922031...');          // Reemplazar con tu API Token
define('CLICKUP_LIST_ID', '901710483647');             // Lista "Seguimientos Pedidos"

// País por defecto
define('DEFAULT_COUNTRY', 'MX');
define('DEFAULT_FLAG', '🇲🇽');
