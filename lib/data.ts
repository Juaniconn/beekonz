export const products = [
  {
    id: "starter",
    name: "Starter Pack",
    price: 5999,
    highlighted: false,
    features: ["6 trackers", "Dongle", "Cable USB-C"],
    cta: "Comprar Starter",
  },
  {
    id: "advanced",
    name: "Advanced Pack",
    price: 7499,
    highlighted: true,
    features: ["8 trackers", "Dongle", "Cable USB-C", "Face tracker"],
    cta: "Comprar Advanced",
  },
  {
    id: "pro",
    name: "Pro Pack",
    price: 8999,
    highlighted: false,
    features: ["10 trackers", "2 Dongles", "Cables USB-C", "Face tracker"],
    cta: "Comprar Pro",
  },
  {
    id: "face",
    name: "Face Tracking",
    price: 2499,
    highlighted: false,
    features: ["Face tracker", "Cable USB-C"],
    cta: "Comprar Face",
  },
];

export const testimonials = [
  {
    id: 1,
    quote: "Tracking más preciso que mi propio cuerpo",
    name: "Carlos VR",
    role: "@carlosvr",
    country: "🇲🇽",
  },
  {
    id: 2,
    quote: "Setup en 10 minutos, funciona perfecto",
    name: "María Track",
    role: "@mariatrack",
    country: "🇪🇸",
  },
  {
    id: 3,
    quote: "Mi audience en VRChat nota la diferencia",
    name: "DJ Motion",
    role: "@djmotion",
    country: "🇺🇸",
  },
  {
    id: 4,
    quote: "La mejor inversión para mi setup",
    name: "Streamer Pro",
    role: "@streamerpro",
    country: "🇨🇴",
  },
];

export const faqItems = [
  {
    id: 1,
    question: "¿Qué es Full Body Tracking?",
    answer:
      "Full Body Tracking permite que tus movimientos reales se reflejen en tiempo real en tu avatar de VRChat, incluyendo caderas, piernas y pies.",
  },
  {
    id: 2,
    question: "¿Es compatible con VRChat?",
    answer:
      "Sí, nuestros trackers son 100% compatibles con VRChat a través de SteamVR y Wi-Fi directo.",
  },
  {
    id: 3,
    question: "¿Cuánto dura la batería?",
    answer:
      "Cada tracker tiene entre 35 y 45 horas de batería, dependiendo del uso y la intensidad de seguimiento.",
  },
  {
    id: 4,
    question: "¿Necesito base stations?",
    answer:
      "No, nuestros trackers usan sensores inerciales (IMU) y no requieren base stations externos.",
  },
  {
    id: 5,
    question: "¿Funciona con Quest standalone?",
    answer:
      "Sí, compatible con Meta Quest 2/3/Pro en modo standalone vía Wi-Fi.",
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