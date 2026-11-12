# DORMISTOCK - Descanso Directo de Fábrica en Madrid

Landing page híbrida de alta conversión y catálogo oficial para **DORMISTOCK**, especialistas en colchones, canapés abatibles y sofás directo de fábrica española con 3 tiendas físicas en la Comunidad de Madrid (San Sebastián de los Reyes, La Latina / Paseo de Extremadura y El Álamo).

## 🎨 Dirección de Arte y Sistema de Diseño (Estilo Tomuza Opción 3)
- **Paleta Cromática Oficial:**
  - Azul Marino Estructural: `#0F2137`
  - Naranja de Seguridad / Taller: `#F59E0B`
  - Ámbar Quemado: `#D97706` y `#B45309`
  - Fondos Técnicos: `#F8FAFC` y Blanco Puro `#FFFFFF`
- **Tipografía e Iconografía:** `Inter` técnica, bordes de precisión (1.5px / 2px), sombras sólidas ilustradas (`box-shadow: 0 4px 0 ...`), cero emojis (100% SVG inline).
- **Cursor Flotante con Inercia Sedosa:** Puntero de precisión inmediata + anillo amortiguado con física de resorte (`spring = 0.075`, `friction = 0.68`). Ocultado en pantallas táctiles.

## 🛠️ Micro-Detalles de Alto Valor Artesanal
1. **Carril Lateral de Seguimiento en Tiempo Real (`#ropeScrollTrack`):**
   - Polea mecánica superior giratoria con el desplazamiento (`pulleyWheel`).
   - Especialista técnico en descenso con física pendular *lerp* y estelas de viento.
   - Altímetro en tiempo real (`-0.0m` a `-42.0m`) y fases (*Fábrica Central → Showrooms Madrid → Packs & Colchones → Subida & Montaje → Tu Dormitorio*).
   - Bocadillo de cómic reactivo tras pausas de scroll con frases auténticas de taller y descanso.
2. **Remaches Industriales (`.panel-rivet`):**
   - 4 tornillos de acero oscuro con ranura en cruz `+` y relieve tridimensional en las esquinas de la tarjeta oscura del Método DORMISTOCK, junto al haz de luz reactivo al ratón (`has-headlamp-effect`).
3. **Pliegue de Hoja Técnico (`::after`):**
   - Esquina doblada inferior derecha en tarjetas de producto y exposición, transicionando de 16px gris a 22px Naranja de Seguridad en `:hover`.
4. **Sello Oficial de Calidad UNE-EN (`.stamp-seal-badge`):**
   - Sello técnico rotado (`-3deg` / `+2deg`) con borde discontinuo certificando el control de calidad en laboratorio oficial de descanso de Madrid.
5. **Cinta de Precinto de Taller (`.factory-tape-strip`):**
   - Precinto diagonal sobre el Pack Ahorro Estrella con tipografía monoespaciada: *"PRECINTADO EN ORIGEN · FABRICACIÓN MADRID · NO ABRIR HASTA MONTAJE"*.
6. **Calculador Dinámico de Ahorro en el Modal (`#savingsEstimator`):**
   - Desglose inteligente en el Paso 1 que calcula en tiempo real el ahorro frente a intermediarios (hasta 180 € + montaje gratuito valorado en 45 €).
7. **Estado de Tiendas con Pulso LED Vivo (`.store-live-status`):**
   - Micro-pastilla en las 3 tiendas físicas con pulso luminoso verde que certifica la apertura y modelos disponibles para probar.
8. **Micro-Selector de Firmeza con Curvatura Anatómica SVG (`.firmness-meter-box`):**
   - Selector interactivo de 3 grados (*Suave, Equilibrada, Firme*) que modifica dinámicamente la alineación ergonómica de una columna vertebral vectorizada en tiempo real.
9. **Garantía para Portales Estrechos de Madrid (`.access-guarantee-box`):**
   - Solución garantizada para escaleras estrechas o fincas sin ascensor mediante la fabricación y subida de tapas de canapé partidas sin sobrecoste.

## 📱 Mobile Responsiveness Estricto (Zero Two-Line Wrap)
- Todas las pastillas de estado y botones CTA están blindados con `white-space: nowrap !important; flex-shrink: 0;`.
- Cero desbordamiento horizontal garantizado en todas las resoluciones (320px, 375px, 390px, 414px, 768px, 1200px+).
- Carril lateral ocultado automáticamente en dispositivos móviles para no comprometer el espacio de lectura.

## 🚀 Despliegue en Vercel / GitHub Pages
El proyecto está listo para producción estática:
1. En Vercel: Importa el repositorio `https://github.com/rechesphere/dormistock`.
2. Framework Preset: `Other`.
3. Haz clic en **Deploy**.
