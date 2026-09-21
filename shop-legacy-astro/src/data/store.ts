// Datos centrales de la tienda Beekonz
export const SITE = {
  name: "Beekonz",
  title: "Beekonz Trackers | Full Body Tracking VR – Precisión sin Límites",
  description:
    "Trackers Smols LSM6DSV de ~10g con 35–45h de batería. Full Body Tracking para VRChat, basado en SlimeVR. Envíos a todo el mundo desde CDMX.",
  url: "https://beekonz.shop",
  discord: "https://discord.gg/ekr3ERWJQ6",
};

export const STATS = [
  { value: "81,814+", label: "Horas Trackeadas" },
  { value: "53", label: "Estados Enviados" },
  { value: "20", label: "Países" },
  { value: "100%", label: "Listo VRChat" },
];

export const PACKS = [
  {
    id: "starter",
    name: "Starter Hive",
    trackers: 6,
    price: "$5,999",
    tagline: "Perfecto para comenzar con Full Body Tracking.",
    recommended: false,
    stripe: "https://buy.stripe.com/eVq28sf2dbwhfIX3Rj7g40o",
    includes: [
      "6 Trackers Beekonz LSM6DSV",
      "1 Dongle Holyiot nRF52840",
      "6 Straps elásticas premium",
      "Peso 10g · 35–45h batería",
      "Colores: Blanco, Negro, Rojo",
    ],
  },
  {
    id: "advanced",
    name: "Advanced Hive",
    trackers: 8,
    price: "$7,499",
    tagline: "Ideal para VRChat FBT completo.",
    recommended: true,
    stripe: "https://buy.stripe.com/3cI9AUbQ10RDeETdrT7g40r",
    includes: [
      "8 Trackers Beekonz LSM6DSV",
      "1 Dongle Holyiot nRF52840",
      "8 Straps elásticas premium",
      "Peso 10g · Latencia 25–35ms",
      "Colores: Blanco, Negro, Rojo",
    ],
  },
  {
    id: "pro",
    name: "Pro Hive",
    trackers: 10,
    price: "$8,999",
    tagline: "Para creadores, bailarines y setups avanzados.",
    recommended: false,
    stripe: "https://buy.stripe.com/28EfZi9HTcAlfIX73v7g40p",
    includes: [
      "10 Trackers Beekonz LSM6DSV",
      "1 Dongle Holyiot nRF52840",
      "10 Straps elásticas premium",
      "Peso 10g · Máxima precisión",
      "Colores: Blanco, Negro, Rojo",
    ],
  },
];

export const FACE_TRACKING = {
  name: "Beekonz Face Tracking",
  price: "$2,499",
  description:
    "Dispositivo de tracking facial para VRChat que captura movimientos de boca y expresiones en tiempo real. Funciona con el software Babble, permitiendo animaciones precisas y naturales en tu avatar.",
  stripe: "https://buy.stripe.com/9B628s7zL43PgN13Rj7g40u",
  images: [
    { src: "/images/ft_3-CsPjaRVS.jpg", alt: "Close-up frontal del dispositivo" },
    { src: "/images/ft_1-IVdconwX.jpg", alt: "Montado en headset VR con montura" },
    { src: "/images/ft_2-DsNUfOoj.jpg", alt: "Dispositivo y montura desensamblados" },
    { src: "/images/ft_5-C_wnsRsE.jpg", alt: "Detalle del cable USB-C conectado" },
    { src: "/images/ft_4-suWkZ772.jpg", alt: "Vista lateral del dispositivo" },
  ],
  includes: ["Dispositivo de Face Tracking", "Montura para headset", "Cable USB-C"],
  features: [
    { icon: "⚡", title: "Tracking facial en tiempo real", desc: "Captura expresiones al instante" },
    { icon: "🎯", title: "Alta precisión", desc: "Movimientos de boca naturales" },
    { icon: "🪶", title: "Diseño ligero", desc: "Se integra con tu headset" },
    { icon: "🔌", title: "Fácil instalación", desc: "Plug & play con USB-C" },
    { icon: "🎮", title: "Compatible con VRChat", desc: "Listo para usar en VR social" },
    { icon: "🗣️", title: "Funciona con Babble", desc: "Software de tracking avanzado" },
  ],
  steps: [
    { n: 1, title: "Monta el dispositivo", desc: "Asegura la montura sobre tu headset VR." },
    { n: 2, title: "Conecta por USB", desc: "Enchufa el cable USB-C a tu PC." },
    { n: 3, title: "Abre Babble + VRChat", desc: "Configura una vez y listo para usar." },
  ],
};

export const FEATURES = [
  { stat: "35–45h", title: "Horas de Batería", desc: "Sesiones largas sin interrupciones" },
  { stat: "10g", title: "Peso Ultraligero", desc: "Olvidarás que los llevas puestos" },
  { stat: "6 ejes", title: "Sensor LSM6DSV", desc: "Alta estabilidad en cada movimiento" },
  { stat: "25–35ms", title: "Latencia Ultra Baja", desc: "Respuesta fluida en tiempo real" },
  { stat: "100%", title: "Compatible SlimeVR", desc: "Nativo con el ecosistema SlimeVR" },
  { stat: "Holyiot", title: "Dongle nRF52840", desc: "Dongle de alto rendimiento incluido" },
  { stat: "Ready", title: "VRChat & SteamVR", desc: "Sincronización perfecta" },
  { stat: "Estable", title: "Conexión NRF", desc: "Bajo consumo, máxima estabilidad" },
];

export const GALLERY = [
  { src: "/images/product-yellow-hub-CmbgLX1G.jpg", caption: "Kit Amarillo · Hub USB 3.0 incluido" },
  { src: "/images/product-black-bee-BplQLYeK.jpg", caption: "Edición Bee · Negro con dorado" },
  { src: "/images/product-green-dTzah6of.jpg", caption: "Edición Frog · Verde" },
  { src: "/images/product-purple-bee-CR0KfKti.jpg", caption: "Edición Bee · Púrpura" },
  { src: "/images/product-jester-CSXE6ics.jpg", caption: "Edición Jester · Naranja + Azul" },
  { src: "/images/product-pastel-C1YtYMW4.jpg", caption: "Edición Pastel · Verde + Morado" },
];

export const TESTIMONIALS = [
  {
    quote: "Precisión increíble. Nunca tuve mejor tracking en VRChat. Los movimientos se sienten naturales y fluidos.",
    name: "Carlos Mendoza",
    role: "Creador de contenido VR",
    country: "México",
    img: "/images/product-green-dTzah6of.jpg",
  },
  {
    quote: "El envío llegó rapidísimo y el soporte en Discord es excelente. ¡24/7 de verdad!",
    name: "Sofía Ramírez",
    role: "Bailarina VR",
    country: "Argentina",
    img: "/images/product-jester-CSXE6ics.jpg",
  },
  {
    quote: "Ligero, cómodo y estable. Puedo bailar horas sin que se muevan. Súper recomendado.",
    name: "Diego Torres",
    role: "Entusiasta VRChat",
    country: "Colombia",
    img: "/images/product-black-bee-BplQLYeK.jpg",
  },
];

export const TRAYECTORIA = [
  { value: "700+", label: "Trackers vendidos", sub: "En toda Latinoamérica" },
  { value: "150+", label: "Clientes satisfechos", sub: "Comunidad activa en Discord" },
  { value: "3+", label: "Años de experiencia", sub: "En la industria VR" },
  { value: "20+", label: "Sets personalizados", sub: "Configuraciones únicas" },
];

export const FAQ = [
  {
    q: "¿Es compatible con SlimeVR?",
    a: "Sí, al 100%. Nuestros trackers usan protocolo SlimeVR nativo y funcionan con VRChat, SteamVR, NeosVR y ChilloutVR.",
  },
  {
    q: "¿Cuánto dura la batería?",
    a: "Entre 35 y 45 horas de uso continuo por carga, según intensidad de uso.",
  },
  {
    q: "¿Cuánto pesa cada tracker?",
    a: "Aproximadamente 10 gramos. Los olvidarás que los llevas puestos.",
  },
  {
    q: "¿Qué incluye cada paquete?",
    a: "Los trackers del pack elegido, un dongle Holyiot nRF52840 y las straps elásticas premium correspondientes.",
  },
  {
    q: "¿Tienen soporte técnico?",
    a: "Sí, soporte dedicado 24/7 en Discord, en español.",
  },
  {
    q: "¿Hacen envíos internacionales?",
    a: "Sí, enviamos a más de 12 países. Entregas internacionales en 5–7 días hábiles.",
  },
  {
    q: "¿Funciona con VRChat?",
    a: "Sí, está listo para VRChat con sincronización perfecta vía SteamVR.",
  },
  {
    q: "¿Puedo pedir colores personalizados?",
    a: "Sí, contáctanos en Discord para crear tu set personalizado con los colores que quieras.",
  },
];
