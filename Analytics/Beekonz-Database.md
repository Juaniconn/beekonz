# Base de Datos Beekonz — Hostinger

Fecha: 2026-08-27

## Resumen
Base de datos MySQL creada para beekonz.shop con el fin de almacenar suscriptores, órdenes y datos relacionados con la tienda.

## Configuración

| Campo | Valor |
|-------|-------|
| **Host** | srv1571.hstgr.io |
| **Puerto** | 3306 |
| **Nombre BD** | u737387249_beekonz_main |
| **Usuario** | u737387249_beekonz_admin |
| **Contraseña** | En `.env` (DB_PASSWORD) |
| **Tamaño máximo** | 3 GB |
| **Creada** | 2026-08-27 |

## Variables de entorno (`.env`)

```env
DB_HOST=srv1571.hstgr.io
DB_PORT=3306
DB_NAME=u737387249_beekonz_main
DB_USER=u737387249_beekonz_admin
DB_PASSWORD=***
```

## Esquema propuesto

### Tabla `suscriptores`
```sql
CREATE TABLE suscriptores (
  id INT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  nombre VARCHAR(100),
  fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  activo BOOLEAN DEFAULT TRUE
);
```

### Tabla `ordenes`
```sql
CREATE TABLE ordenes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  stripe_session_id VARCHAR(255) UNIQUE,
  cliente_email VARCHAR(255),
  cliente_nombre VARCHAR(100),
  pack ENUM('starter', 'advanced', 'pro', 'face_tracking'),
  total DECIMAL(10,2),
  moneda VARCHAR(3) DEFAULT 'MXN',
  estado ENUM('pendiente', 'pagado', 'enviado', 'entregado', 'cancelado') DEFAULT 'pendiente',
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

## Acciones recomendadas

- [ ] Crear tablas en la base de datos
- [ ] Conectar la app Astro a la BD (vía API serverless o PHP)
- [ ] Implementar webhook de Stripe para guardar órdenes automáticamente

## Referencias

- [[Renovación Tienda en Línea Beekonz — 2026-08-27]]
- [[SOP-Deploy-Beekonz]]
