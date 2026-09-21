export const stats = [
  { value: "81,814+", label: "Horas Trackeadas" },
  { value: "53", label: "Estados Enviados" },
  { value: "20", label: "Países" },
  { value: "100%", label: "Listo VRChat" },
];

export const products = [
  {
    id: "starter",
    name: "Starter Hive",
    price: 5999,
    highlighted: false,
    trackers: 6,
    tagline: "Perfecto para comenzar con Full Body Tracking.",
    stripe: "https://buy.stripe.com/eVq28sf2dbwhfIX3Rj7g40o",
    features: [
      "6 Trackers Beekonz LSM6DSV",
      "1 Dongle Holyiot nRF52840",
      "6 Straps elásticas premium",
      "Peso 10g · 35–45h batería",
      "Colores: Blanco, Negro, Rojo",
    ],
    cta: "Comprar Starter Hive",
  },
  {
    id: "advanced",
    name: "Advanced Hive",
    price: 7499,
    highlighted: true,
    trackers: 8,
    tagline: "Ideal para VRChat FBT completo.",
    stripe: "https://buy.stripe.com/3cI9AUbQ10RDeETdrT7g40r",
    features: [
      "8 Trackers Beekonz LSM6DSV",
      "1 Dongle Holyiot nRF52840",
      "8 Straps elásticas premium",
      "Peso 10g · Latencia 25–35ms",
      "Colores: Blanco, Negro, Rojo",
    ],
    cta: "Comprar Advanced Hive",
  },
  {
    id: "pro",
    name: "Pro Hive",
    price: 8999,
    highlighted: false,
    trackers: 10,
    tagline: "Para creadores, bailarines y setups avanzados.",
    stripe: "https://buy.stripe.com/28EfZi9HTcAlfIX73v7g40p",
    features: [
      "10 Trackers Beekonz LSM6DSV",
      "1 Dongle Holyiot nRF52840",
      "10 Straps elásticas premium",
      "Peso 10g · Máxima precisión",
      "Colores: Blanco, Negro, Rojo",
    ],
    cta: "Comprar Pro Hive",
  },
  {
    id: "face",
    name: "Beekonz Face Tracking",
    price: 2499,
    highlighted: false,
    trackers: 1,
    tagline:
      "Tracking facial en tiempo real para VRChat con software Babble.",
    stripe: "https://buy.stripe.com/9B628s7zL43PgN13Rj7g40u",
    features: [
      "Dispositivo de Face Tracking",
      "Montura para headset VR",
      "Cable USB-C",
      "Compatible con software Babble",
      "Plug & play · USB-C",
    ],
    cta: "Comprar Face Tracking",
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "Precisión increíble. Nunca tuve mejor tracking en VRChat. Los movimientos se sienten naturales y fluidos.",
    name: "Carlos Mendoza",
    role: "Creador de contenido VR",
    country: "🇲🇽 México",
  },
  {
    id: 2,
    quote:
      "El envío llegó rapidísimo y el soporte en Discord es excelente. ¡24/7 de verdad!",
    name: "Sofía Ramírez",
    role: "Bailarina VR",
    country: "🇦🇷 Argentina",
  },
  {
    id: 3,
    quote:
      "Ligero, cómodo y estable. Puedo bailar horas sin que se muevan. Súper recomendado.",
    name: "Diego Torres",
    role: "Entusiasta VRChat",
    country: "🇨🇴 Colombia",
  },
];

export const faqItems = [
  {
    id: 1,
    question: "¿Es compatible con SlimeVR?",
    answer:
      "Sí, al 100%. Nuestros trackers usan protocolo SlimeVR nativo y funcionan con VRChat, SteamVR, NeosVR y ChilloutVR.",
  },
  {
    id: 2,
    question: "¿Cuánto dura la batería?",
    answer:
      "Entre 35 y 45 horas de uso continuo por carga, según intensidad de uso.",
  },
  {
    id: 3,
    question: "¿Cuánto pesa cada tracker?",
    answer:
      "Aproximadamente 10 gramos. Los olvidarás que los llevas puestos.",
  },
  {
    id: 4,
    question: "¿Qué incluye cada paquete?",
    answer:
      "Los trackers del pack elegido, un dongle Holyiot nRF52840 y las straps elásticas premium correspondientes.",
  },
  {
    id: 5,
    question: "¿Tienen soporte técnico?",
    answer:
      "Sí, soporte dedicado 24/7 en Discord, en español.",
  },
  {
    id: 6,
    question: "¿Hacen envíos internacionales?",
    answer:
      "Sí, enviamos a más de 20 países. Entregas internacionales en 5–7 días hábiles.",
  },
  {
    id: 7,
    question: "¿Funciona con VRChat?",
    answer:
      "Sí, está listo para VRChat con sincronización perfecta vía SteamVR.",
  },
  {
    id: 8,
    question: "¿Puedo pedir colores personalizados?",
    answer:
      "Sí, contáctanos en Discord para crear tu set personalizado con los colores que quieras.",
  },
];

export const features = [
  {
    id: "sensor",
    title: "Sensor LSM6DSV",
    description: "IMU de última generación con fusión de datos avanzada",
    size: "large",
  },
  {
    id: "battery",
    title: "35-45h batería",
    description: "Uso prolongado sin recargar",
    size: "medium",
  },
  {
    id: "weight",
    title: "10g peso",
    description: "Ultra-ligero, casi imperceptible",
    size: "medium",
  },
  {
    id: "compatibility",
    title: "Multi-plataforma",
    description: "VRChat, SteamVR, VSeeFace",
    size: "large",
  },
  {
    id: "latency",
    title: "<5ms latencia",
    description: "Respuesta instantánea",
    size: "small",
  },
  {
    id: "dongle",
    title: "Dongle incluido",
    description: "Conexión plug & play",
    size: "small",
  },
];
