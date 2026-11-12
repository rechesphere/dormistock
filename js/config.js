/**
 * DORMISTOCK - Configuración Centralizada
 * Modifica estos valores para cambiar teléfonos, WhatsApps, correos y datos de las tiendas.
 */
const DORMISTOCK_CONFIG = {
  brandName: "Dormistock",
  claim: "Especialistas en descanso, colchones y sofás en Madrid",
  generalPhone: "+34 674 008 575",
  generalPhoneRaw: "34674008575",
  generalEmail: "Info@dormistock.com",
  instagram: "https://www.instagram.com/dormistock/",
  instagramUser: "@dormistock",
  
  // Endpoint para envío de formularios (ej. Formspree o tu propio Webhook)
  // Reemplazar con tu ID de Formspree (ej: "https://formspree.io/f/xdoqwvza") o dejar en modo simulación/local
  formEndpoint: "", 
  
  // Datos específicos de las 3 tiendas físicas
  stores: {
    elAlamo: {
      id: "elAlamo",
      name: "Tienda El Álamo",
      shortName: "El Álamo",
      address: "C. Escuelas, 30, 28607 El Álamo, Madrid",
      phone: "+34 674 008 575",
      phoneRaw: "34674008575",
      whatsapp: "34674008575",
      schedule: "Lunes a Viernes: 10:00 - 14:00 y 17:00 - 20:30 | Sábados: 10:00 - 14:00",
      mapsUrl: "https://maps.google.com/?q=Dormistock+El+Alamo+Calle+Escuelas+30",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3046.241315802377!2d-3.993683823439485!3d40.231454071469595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4197e41ddfa403%3A0xe53341851b471677!2sC.%20Escuelas%2C%2030%2C%2028607%20El%20%C3%81lamo%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
    },
    sanse: {
      id: "sanse",
      name: "Tienda San Sebastián de los Reyes",
      shortName: "Sanse",
      address: "C. de Mercedes Izquierdo, 2, 28701 San Sebastián de los Reyes, Madrid",
      phone: "+34 674 008 575",
      phoneRaw: "34674008575",
      whatsapp: "34674008575",
      schedule: "Lunes a Viernes: 10:00 - 14:00 y 17:00 - 20:30 | Sábados: 10:00 - 14:00",
      mapsUrl: "https://maps.google.com/?q=Calle+Mercedes+Izquierdo+2+San+Sebastian+de+los+Reyes",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3031.547192801456!2d-3.6264918234241687!3d40.5516089714183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422c53051f28b7%3A0x6b4ef84a1a5b8812!2sC.%20de%20Mercedes%20Izquierdo%2C%202%2C%2028701%20San%20Sebasti%C3%A1n%20de%20los%20Reyes%2C%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
    },
    laLatina: {
      id: "laLatina",
      name: "Tienda La Latina / Paseo de Extremadura",
      shortName: "Paseo Extremadura",
      address: "P.º de Extremadura, 90, Latina, 28011 Madrid",
      phone: "+34 674 008 575",
      phoneRaw: "34674008575",
      whatsapp: "34674008575",
      schedule: "Lunes a Viernes: 10:00 - 14:00 y 17:00 - 20:30 | Sábados: 10:00 - 14:00",
      mapsUrl: "https://maps.google.com/?q=Paseo+de+Extremadura+90+Madrid",
      mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3037.8929991599863!2d-3.7346141234307525!3d40.41118127144023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4227df2f91bf27%3A0x95971db55c1b696f!2sP.%C2%BA%20de%20Extremadura%2C%2090%2C%20Latina%2C%2028011%20Madrid!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
    }
  },

  // Ventajas destacadas
  trustPillars: [
    {
      title: "Financiación sin intereses",
      desc: "Hasta 12 o 24 meses sin papeleos innecesarios para que descanses hoy y pagues cómodamente."
    },
    {
      title: "Transporte y montaje propio",
      desc: "Equipo profesional propio de Dormistock. Subimos, montamos y dejamos tu habitación lista."
    },
    {
      title: "Retirada de tu cama vieja",
      desc: "Nos llevamos tu antiguo colchón, base o sofá sin molestias para ti ni coste oculto."
    },
    {
      title: "3 Tiendas físicas en Madrid",
      desc: "Ven a probar antes de comprar. Asesores expertos con trato humano y cercano."
    }
  ]
};
