/**
 * DORMISTOCK - Catálogo de Productos y Datos
 * Fotografías oficiales y activos del portal oficial dormistock.com
 */
const DORMISTOCK_DATA = {
  products: [
    {
      id: "colchon-visco-pro",
      name: "Colchón Viscoelástico ErgoPlus",
      category: "colchones",
      badge: "Más Vendido",
      image: "https://dormistock.com/wp-content/uploads/2025/01/pexels-rdne-8580720-scaled.jpg",
      description: "Núcleo HR de alta resiliencia con 4 cm de viscoelástica termorreguladora de poro abierto. Máxima adaptabilidad y cero puntos de presión.",
      firmness: 7, // 1 a 10
      firmnessText: "Media - Alta",
      breathability: 9, // 1 a 10
      height: "27 cm",
      sizes: [
        { label: "90 x 190 cm", price: "189€", promo: "249€" },
        { label: "105 x 190 cm", price: "219€", promo: "279€" },
        { label: "135 x 190 cm", price: "259€", promo: "329€" },
        { label: "150 x 190 cm", price: "289€", promo: "369€" },
        { label: "160 x 200 cm", price: "329€", promo: "419€" },
        { label: "180 x 200 cm", price: "389€", promo: "489€" }
      ],
      features: ["Tratamiento Antiácaros", "Tejido Strech transpirable", "Independencia de lechos"]
    },
    {
      id: "colchon-muelles-pocket",
      name: "Colchón Titan Ensacado Deluxe",
      category: "colchones",
      badge: "Gama Premium",
      image: "https://dormistock.com/wp-content/uploads/2025/01/pexels-rdne-8581013-scaled.jpg",
      description: "Carcasa de muelles ensacados independientes con marco perimetral reforzado y doble capa de viscogel para durmientes calurosos.",
      firmness: 8,
      firmnessText: "Firmeza Firme Equilibrada",
      breathability: 10,
      height: "29 cm",
      sizes: [
        { label: "90 x 190 cm", price: "229€", promo: "299€" },
        { label: "105 x 190 cm", price: "259€", promo: "339€" },
        { label: "135 x 190 cm", price: "319€", promo: "399€" },
        { label: "150 x 190 cm", price: "349€", promo: "449€" },
        { label: "160 x 200 cm", price: "399€", promo: "519€" },
        { label: "180 x 200 cm", price: "469€", promo: "599€" }
      ],
      features: ["Frescor continuo Viscogel", "Silencioso 100%", "Ideal para personas de más de 85kg"]
    },
    {
      id: "colchon-ortopedico-spine",
      name: "Colchón Ortopédico ActiveCare",
      category: "colchones",
      badge: "Salud Espalda",
      image: "https://dormistock.com/wp-content/uploads/2025/01/pexels-heyho-7005295-1024x683.jpg",
      description: "Diseñado especialmente para aliviar la tensión lumbar y cervical. Soporte anatómico que mantiene la columna en perfecta alineación.",
      firmness: 9,
      firmnessText: "Firmeza Alta Terapeútica",
      breathability: 8,
      height: "26 cm",
      sizes: [
        { label: "90 x 190 cm", price: "199€", promo: "259€" },
        { label: "135 x 190 cm", price: "279€", promo: "349€" },
        { label: "150 x 190 cm", price: "309€", promo: "389€" }
      ],
      features: ["Alineación espinal recomendada", "Funda desenfundable lavable", "Refuerzo lumbar"]
    },
    {
      id: "canape-madera-gran-capacidad",
      name: "Canapé Abatible Madera Gran Capacidad",
      category: "canapes",
      badge: "Pack Estrella Tiendas",
      image: "https://dormistock.com/wp-content/uploads/2025/01/pexels-kei-scampa-1201427-11125322-scaled.jpg",
      description: "Estructura de madera reforzada de 30 mm con esquinas redondeadas de haya maciza. Tapa transpirable en tejido 3D y pistones hidráulicos de gas.",
      firmness: 10,
      firmnessText: "Base Rígida Máxima Estabilidad",
      breathability: 9,
      height: "35 cm hueco útil",
      sizes: [
        { label: "90 x 190 cm", price: "199€", promo: "269€" },
        { label: "105 x 190 cm", price: "229€", promo: "299€" },
        { label: "135 x 190 cm", price: "259€", promo: "349€" },
        { label: "150 x 190 cm", price: "279€", promo: "379€" },
        { label: "160 x 200 cm", price: "339€", promo: "439€" }
      ],
      features: ["4 colores disponibles", "Apertura sin esfuerzo", "Tope antideslizante para colchón"]
    },
    {
      id: "sofa-chaiselongue-relax",
      name: "Sofá Chaiselongue Lisboa Relax",
      category: "sofas",
      badge: "Oferta Exclusiva",
      image: "https://dormistock.com/wp-content/uploads/2025/01/pexels-heyho-6438762-1-scaled.jpg",
      description: "Chaiselongue con asientos deslizantes punto a punto y respaldos reclinables. Tejido antimanchas aquaclean de tacto aterciopelado.",
      firmness: 7,
      firmnessText: "Sentada Envolvente Firme",
      breathability: 8,
      height: "102 cm fondo 95/165 cm",
      sizes: [
        { label: "240 cm (3 plazas)", price: "590€", promo: "790€" },
        { label: "270 cm (4 plazas)", price: "690€", promo: "890€" },
        { label: "300 cm (Gran formato)", price: "790€", promo: "1.050€" }
      ],
      features: ["Arcón bajo chaiselongue", "2 puffs auxiliares integrados", "Tejido resistente a mascotas"]
    },
    {
      id: "sofa-3-plazas-nordic",
      name: "Sofá 3 Plazas Nórdico Berlín",
      category: "sofas",
      badge: "Estilo Urbano",
      image: "https://dormistock.com/wp-content/uploads/2025/01/pexels-heyho-6758245-scaled.jpg",
      description: "Diseño contemporáneo de líneas limpias con patas elevadas de madera de roble, ideal para robots aspiradores. Máximo confort en espacios reducidos.",
      firmness: 6,
      firmnessText: "Sentada Media Confort",
      breathability: 9,
      height: "95 cm fondo 88 cm",
      sizes: [
        { label: "185 cm (2 plazas)", price: "390€", promo: "490€" },
        { label: "210 cm (3 plazas)", price: "450€", promo: "590€" }
      ],
      features: ["Cojines desenfundables", "Estructura de pino macizo", "Apto para robot aspirador"]
    },
    {
      id: "butaca-relax-confort",
      name: "Sillón Butaca Orejera Confort",
      category: "butacas",
      badge: "Clásico Reinvención",
      image: "https://dormistock.com/wp-content/uploads/2025/01/pexels-rachel-claire-4857775-scaled.jpg",
      description: "Butaca orejera ergonómica perfecta para lectura y lactancia. Acolchado especial en riñones para un descanso perfecto de cuerpo entero.",
      firmness: 7,
      firmnessText: "Apoyo Lumbar Reforzado",
      breathability: 8,
      height: "105 cm x 78 cm",
      sizes: [
        { label: "Medida estándar", price: "180€", promo: "240€" }
      ],
      features: ["Tapizado antimanchas", "Espuma densidad 30kg/m3", "Patas madera haya"]
    },
    {
      id: "cabecero-tapizado-lujo",
      name: "Cabecero Tapizado Acolchado Roma",
      category: "butacas",
      badge: "Elegancia",
      image: "https://dormistock.com/wp-content/uploads/2025/01/pexels-olenkabohovyk-18468852-scaled.jpg",
      description: "Cabecero acolchado a cuadros con acabado capitoné moderno. Aísla del frío de la pared y aporta un toque hotel 5 estrellas a tu dormitorio.",
      firmness: 8,
      firmnessText: "Estructura Firme Acolchada",
      breathability: 8,
      height: "120 cm altura",
      sizes: [
        { label: "Para cama 90/105 cm (115cm)", price: "89€", promo: "129€" },
        { label: "Para cama 135/150 cm (160cm)", price: "119€", promo: "169€" },
        { label: "Para cama 160/180 cm (190cm)", price: "149€", promo: "209€" }
      ],
      features: ["Fácil fijación incluida", "Polipiel o lino lavable", "Grosor acolchado 8 cm"]
    }
  ],

  // Packs de Ahorro Destacados (Foco en tiendas físicas)
  valuePacks: [
    {
      id: "pack-estrella-sanse-alamo",
      title: "Pack Ahorro Descanso Total",
      subtitle: "La combinación número 1 en nuestras tiendas de Sanse, El Álamo y La Latina",
      badge: "Ahorro directo de 180€",
      colchon: "Colchón Viscoelástico ErgoPlus (27cm)",
      base: "Canapé Abatible Madera Gran Capacidad (35cm útil)",
      gift: "2 Almohadas Viscoelásticas Copo de Regalo",
      sizes: [
        { label: "135 x 190 cm", price: "449€", before: "629€" },
        { label: "150 x 190 cm", price: "499€", before: "689€" },
        { label: "105 x 190 cm", price: "399€", before: "549€" },
        { label: "90 x 190 cm", price: "349€", before: "489€" }
      ],
      colors: [
        { name: "Blanco Nórdico", hex: "#f0f0f0" },
        { name: "Roble Natural", hex: "#d2b48c" },
        { name: "Ártico Gris", hex: "#cfd6dd" },
        { name: "Wengué Elegance", hex: "#3f2d24" }
      ],
      benefits: [
        "Transporte y montaje especializado por equipo propio",
        "Retirada de tu cama vieja incluida sin coste",
        "Financiación hasta 12 meses sin intereses (desde 37,41€/mes)"
      ]
    }
  ],

  // Testimonios reales verificados
  reviews: [
    {
      name: "Beatriz M. (San Sebastián de los Reyes)",
      stars: 5,
      date: "Hace 2 semanas",
      text: "Compramos el pack de colchón y canapé en la tienda de Sanse. La atención del chico fue impecable, nos explicó la diferencia de firmezas sin prisa. A los 3 días lo teníamos montado en casa y se llevaron el viejo sin coste.",
      verified: "Compra verificada en tienda"
    },
    {
      name: "Carlos Gómez (El Álamo)",
      stars: 5,
      date: "Hace 1 mes",
      text: "Tenía dolores en las lumbares todas las mañanas. Me recomendaron el colchón ensacado en la tienda de El Álamo y ha sido mano de santo. Relación calidad-precio muy superior a las marcas comerciales conocidas.",
      verified: "Cliente local verificado"
    },
    {
      name: "Laura & David (Madrid - Paseo Extremadura)",
      stars: 5,
      date: "Hace 3 semanas",
      text: "Fuimos a la tienda de Paseo de Extremadura buscando un chaiselongue a medida. El tejido antimanchas con dos niños pequeños es una maravilla y los montadores súper puntuales y cuidadosos con el suelo.",
      verified: "Compra verificada en tienda"
    }
  ],

  // Preguntas Frecuentes
  faqs: [
    {
      q: "¿Cómo funciona el envío y el montaje de los colchones y sofás?",
      a: "A diferencia de las grandes plataformas online que te dejan el paquete pesado en el portal, en Dormistock contamos con equipo y furgonetas propias en Madrid. Subimos el producto a tu dormitorio o salón, lo desembalamos, lo montamos y verificamos que todo quede perfecto."
    },
    {
      q: "¿Realmente os lleváis mi colchón o canapé antiguo sin coste adicional?",
      a: "Sí. Cuando entregamos tu nuevo equipo de descanso, nuestro equipo retira tu colchón o base antigua y la traslada a un punto limpio autorizado de la Comunidad de Madrid. Solo debes avisarnos al confirmar tu pedido para coordinar el espacio en la furgoneta."
    },
    {
      q: "¿Puedo financiar mi compra sin intereses?",
      a: "Por supuesto. Disponemos de financiación personalizada desde 3 hasta 24 meses sin intereses en todas nuestras tiendas físicas y a distancia. La tramitación es instantánea presentando solo tu DNI y tu tarjeta bancaria."
    },
    {
      q: "¿Puedo probar los modelos en vuestras tiendas antes de decidirme?",
      a: "¡Es lo que más recomendamos! Tenemos exposición permanente en El Álamo (C. Escuelas 30), San Sebastián de los Reyes (C. Mercedes Izquierdo 2) y La Latina / Paseo de Extremadura (Pº de Extremadura 90). Nuestros asesores te guiarán para que encuentres tu firmeza perfecta."
    },
    {
      q: "¿Qué garantía tienen los productos?",
      a: "Todos nuestros colchones, sofás y canapés cuentan con 3 años de garantía oficial contra cualquier defecto de fabricación, conforme a la normativa española vigente."
    }
  ]
};
