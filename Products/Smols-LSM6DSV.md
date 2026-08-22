# Smols LSM6DSV — Ficha técnica

Fecha: 2026-08-22

## Resumen
Especificaciones actuales del producto principal de Beekonz.

## Especificaciones

| Componente | Detalle |
|---|---|
| Sensor | LSM6DSV (IMU 6-axis) |
| Peso tracker | ~10 g |
| Batería | 401230, 3.7 V, 115 mAh |
| Autonomía objetivo | >50 h |
| Conectividad | nRF52840 USB Dongle |
| Firmware/ecosistema | Basado en SlimeVR |
| Placas | DTQSYS (proveedor) |

## Historial de decisiones técnicas
- Se evaluó ICM-45686 como sensor; la dirección actual es **LSM6DSV**.

## Paquetes y precios (MXN)

| Paquete | Contenido | Precio |
|---|---|---|
| Starter Pack | 6 trackers, 1 dongle, straps 2ch/2med/2gde, packaging completo | $5,999 |
| Advanced Pack | 8 trackers, 1 dongle, straps 4ch/2med/2gde | $7,499 |
| Pro Pack | 10 trackers, 1 dongle, straps 6ch/2med/2gde | $8,999 |

## Hallazgos
- Diferencia Advanced→Pro = 2 trackers (+$1,500); Starter→Advanced = 2 trackers + 2 straps chicos (+$1,500).

## Acciones recomendadas
- Documentar tiempos de carga, rango WiFi y compatibilidad de software cuando estén disponibles.

## Próximos pasos
- [ ] Confirmar compatibilidad oficial (SlimeVR server, otros runtimes).
- [ ] Fotografía/video de producto estandarizada.
