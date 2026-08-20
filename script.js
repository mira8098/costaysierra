/* =========================================================
   Sabor por altura — lógica de la página
   ========================================================= */

const platos = [
  /* ---------------------- COSTA ---------------------- */
  {
    region: "costa",
    nombre: "Encebollado",
    lugar: "Guayaquil",
    altura: 4,
    resumen: "Caldo de albacora con yuca, curtido de cebolla colorada y un puñado de chifles encima.",
    momento: "Domingo por la mañana, después de una noche larga.",
    ingredientes: ["albacora", "yuca", "cebolla colorada", "chifles", "limón"],
    colores: ["#FDF4E2", "#E29A34", "#7C2A57"]
  },
  {
    region: "costa",
    nombre: "Ceviche de camarón",
    lugar: "Manta",
    altura: 6,
    resumen: "Camarón cocido en jugo de limón y naranja, tomate, cebolla y bastante cilantro.",
    momento: "Mediodía de playa, con canguil y chifle al lado.",
    ingredientes: ["camarón", "limón", "tomate", "cilantro", "naranja"],
    colores: ["#F3866A", "#C63A2C", "#1F6E4E"]
  },
  {
    region: "costa",
    nombre: "Bolón de verde",
    lugar: "Guayas y Manabí",
    altura: 20,
    resumen: "Verde asado y majado en bola, relleno de queso o chicharrón, dorado por fuera.",
    momento: "Desayuno de las seis, con café pasado.",
    ingredientes: ["plátano verde", "chicharrón", "queso", "manteca"],
    colores: ["#F1E0AE", "#C68C3B", "#2F6B34"]
  },
  {
    region: "costa",
    nombre: "Corviche",
    lugar: "Manabí",
    altura: 12,
    resumen: "Masa de verde con maní rellena de pescado y refrito, frita hasta quedar crocante.",
    momento: "Media tarde, comprado en la esquina.",
    ingredientes: ["plátano verde", "maní", "pescado", "achiote"],
    colores: ["#E5B54E", "#C0762F", "#83491F"]
  },
  {
    region: "costa",
    nombre: "Viche de pescado",
    lugar: "Manabí",
    altura: 15,
    resumen: "Sopa espesa de maní con pescado, choclo, yuca, verde y maduro. Un plato entero en un plato hondo.",
    momento: "Almuerzo de domingo en familia.",
    ingredientes: ["maní", "pescado", "choclo", "yuca", "maduro"],
    colores: ["#F6DDA6", "#DE9D3C", "#2E6D4E"]
  },
  {
    region: "costa",
    nombre: "Cazuela de mariscos",
    lugar: "Esmeraldas y Manabí",
    altura: 10,
    resumen: "Verde y maní batidos hasta quedar cremosos, con camarón y concha, servida en su cazuela de barro.",
    momento: "Cuando hay que quedar bien con la visita.",
    ingredientes: ["maní", "camarón", "concha", "plátano verde"],
    colores: ["#EBA13E", "#B9532B", "#F4DFB4"]
  },
  {
    region: "costa",
    nombre: "Arroz con menestra y carne asada",
    lugar: "Guayaquil",
    altura: 4,
    resumen: "El almuerzo diario: arroz blanco, menestra de lenteja o fréjol, carne a la parrilla y patacones.",
    momento: "Cualquier día, a la una de la tarde.",
    ingredientes: ["arroz", "lenteja", "carne de res", "patacón", "ají"],
    colores: ["#FAF5EA", "#6E4B2B", "#3A2117"]
  },

  /* ---------------------- SIERRA ---------------------- */
  {
    region: "sierra",
    nombre: "Hornado",
    lugar: "Ambato y Riobamba",
    altura: 2754,
    resumen: "Cerdo horneado entero hasta que el cuero truena, servido con mote, agrio y tortilla de papa.",
    momento: "Día de mercado, parado frente a la olla.",
    ingredientes: ["cerdo", "mote", "chicha", "agrio", "papa"],
    colores: ["#CE8C4C", "#7B3B18", "#F2E9D5"]
  },
  {
    region: "sierra",
    nombre: "Fritada",
    lugar: "Ibarra y Otavalo",
    altura: 2225,
    resumen: "Cerdo cocido en su propia grasa con ajo y comino, con mote, maduro frito y tostado.",
    momento: "Parada obligatoria en la carretera del norte.",
    ingredientes: ["cerdo", "mote", "maduro", "tostado", "ajo"],
    colores: ["#D89A55", "#8A4620", "#EFE3C6"]
  },
  {
    region: "sierra",
    nombre: "Locro de papa",
    lugar: "Quito",
    altura: 2850,
    resumen: "Papa chola deshecha en leche con achiote, coronada con queso fresco y aguacate.",
    momento: "Tarde de lluvia y viento del Pichincha.",
    ingredientes: ["papa chola", "queso", "aguacate", "leche", "achiote"],
    colores: ["#F7E9B6", "#E0B23E", "#4E7C40"]
  },
  {
    region: "sierra",
    nombre: "Llapingachos",
    lugar: "Ambato",
    altura: 2577,
    resumen: "Tortillas de papa rellenas de queso, doradas en la plancha, con salsa de maní y chorizo.",
    momento: "Almuerzo de feriado en el centro del país.",
    ingredientes: ["papa", "queso", "maní", "chorizo", "remolacha"],
    colores: ["#F3DE9B", "#C98E38", "#A62B3C"]
  },
  {
    region: "sierra",
    nombre: "Cuy asado",
    lugar: "Cuenca y Loja",
    altura: 2560,
    resumen: "Cuy abierto y asado a la brasa girando despacio, con papas cocidas y ají de pepa de zambo.",
    momento: "Fiesta del pueblo, y solo en fiesta.",
    ingredientes: ["cuy", "papa", "ají", "achiote"],
    colores: ["#D28744", "#8E4318", "#E9DCC0"]
  },
  {
    region: "sierra",
    nombre: "Fanesca",
    lugar: "Todo el callejón interandino",
    altura: 2850,
    resumen: "Doce granos tiernos, zapallo y bacalao en leche. Se cocina una vez al año y toma toda la mañana.",
    momento: "Semana Santa, y nada más.",
    ingredientes: ["doce granos", "bacalao", "zapallo", "leche", "maní"],
    colores: ["#F6EDD4", "#C9B558", "#5E7B3A"]
  },
  {
    region: "sierra",
    nombre: "Colada morada y guaguas de pan",
    lugar: "Quito",
    altura: 2850,
    resumen: "Mortiño y mora hervidos con especias y hierbas dulces, con un pan en forma de niño al lado.",
    momento: "2 de noviembre, en el cementerio o en la casa.",
    ingredientes: ["mortiño", "mora", "ishpingo", "harina de maíz negro", "piña"],
    colores: ["#5B2050", "#8E3169", "#E7D4B0"]
  }
];

const despensa = {
  costa: {
    titulo: "Lo que nunca falta en la cocina costeña",
    lista: [
      { tono: "#2F6B34", nombre: "Plátano verde", nota: "Majado, frito o rallado. La base de medio recetario." },
      { tono: "#C0762F", nombre: "Maní", nota: "Tostado y molido: espesa las sopas y las vuelve cremosas." },
      { tono: "#E29A34", nombre: "Achiote", nota: "Da el color anaranjado de casi todos los refritos." },
      { tono: "#7C2A57", nombre: "Cebolla colorada", nota: "Curtida en limón y sal, encima de casi todo." },
      { tono: "#F3866A", nombre: "Camarón y concha", nota: "De los esteros del Golfo y de los manglares del norte." },
      { tono: "#1F6E4E", nombre: "Cilantro", nota: "Se pica al final, nunca antes de tiempo." }
    ]
  },
  sierra: {
    titulo: "Lo que nunca falta en la cocina serrana",
    lista: [
      { tono: "#C79A57", nombre: "Papa chola", nota: "Se deshace en la sopa y la vuelve espesa sola." },
      { tono: "#EFE3C6", nombre: "Mote", nota: "Maíz pelado y cocido. Acompaña al cerdo en cualquier forma." },
      { tono: "#8A4620", nombre: "Cerdo", nota: "Horneado, frito o en fritada. Domina el mediodía." },
      { tono: "#F2F0E4", nombre: "Queso fresco", nota: "Salado y desmenuzado sobre locros y tortillas." },
      { tono: "#5B2050", nombre: "Mortiño", nota: "Baya del páramo, sobre los 3.000 metros. Solo en su época." },
      { tono: "#4E7C40", nombre: "Ají de árbol", nota: "Molido en piedra con cilantro. Va aparte, en su cuenco." }
    ]
  }
};

const textoRegion = {
  costa: {
    titulo: "La Costa",
    bajada: "Entre 0 y 100 metros sobre el mar. Calor, humedad y una despensa de verde, maní y marisco fresco.",
    altura: 4
  },
  sierra: {
    titulo: "La Sierra",
    bajada: "Entre 2.200 y 2.900 metros. Frío seco de la tarde, papa, mote y cocciones largas que calientan.",
    altura: 2850
  }
};

/* ---------- referencias del DOM ---------- */

const raiz = document.documentElement;
const rejilla = document.getElementById("rejilla");
const vacio = document.getElementById("vacio");
const buscar = document.getElementById("buscar");
const tituloRegion = document.getElementById("titulo-region");
const bajadaRegion = document.getElementById("bajada-region");
const tituloDespensa = document.getElementById("titulo-despensa");
const listaDespensa = document.getElementById("despensa");
const numero = document.getElementById("numero");
const cursor = document.getElementById("cursor");
const botones = document.querySelectorAll(".cambio-btn");

let regionActual = "costa";
const sinMovimiento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- aparición de tarjetas al hacer scroll ---------- */

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      entrada.target.classList.add("visible");
      observador.unobserve(entrada.target);
      // se quita el retardo para que el hover responda al instante
      setTimeout(() => { entrada.target.style.transitionDelay = "0ms"; }, 800);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

/* ---------- dibujar las tarjetas ---------- */

function dibujarPlatos() {
  const texto = buscar.value.trim().toLowerCase();

  const filtrados = platos.filter((plato) => {
    if (plato.region !== regionActual) return false;
    if (!texto) return true;
    const campos = (plato.nombre + " " + plato.lugar + " " + plato.ingredientes.join(" ")).toLowerCase();
    return campos.includes(texto);
  });

  rejilla.innerHTML = "";

  if (filtrados.length === 0) {
    vacio.hidden = false;
    vacio.textContent = `No hay nada con “${buscar.value.trim()}” en ${textoRegion[regionActual].titulo.toLowerCase()}. Prueba con “verde”, “papa” o “maní”.`;
    return;
  }
  vacio.hidden = true;

  filtrados.forEach((plato, i) => {
    const tarjeta = document.createElement("article");
    tarjeta.className = "tarjeta";
    tarjeta.style.transitionDelay = sinMovimiento ? "0ms" : `${Math.min(i * 60, 420)}ms`;

    tarjeta.innerHTML = `
      <div class="tarjeta-alto">
        <div class="plato-disco" style="--c1:${plato.colores[0]}; --c2:${plato.colores[1]}; --c3:${plato.colores[2]}"></div>
        <p class="altura-dato"><b>${plato.altura.toLocaleString("es-EC")}</b> m s. n. m.</p>
      </div>
      <div>
        <h3>${plato.nombre}</h3>
        <p class="lugar">${plato.lugar}</p>
      </div>
      <p class="resumen">${plato.resumen}</p>
      <p class="momento">${plato.momento}</p>
      <ul class="etiquetas">
        ${plato.ingredientes.map((ing) => `<li>${ing}</li>`).join("")}
      </ul>
    `;

    rejilla.appendChild(tarjeta);
    observador.observe(tarjeta);
  });
}

/* ---------- despensa ---------- */

function dibujarDespensa() {
  const datos = despensa[regionActual];
  tituloDespensa.textContent = datos.titulo;
  listaDespensa.innerHTML = datos.lista.map((item) => `
    <li>
      <span class="punto" style="--tono:${item.tono}"></span>
      <div>
        <strong>${item.nombre}</strong>
        <span>${item.nota}</span>
      </div>
    </li>
  `).join("");
}

/* ---------- altímetro ---------- */

function moverAltimetro(destino) {
  // el riel va de 4.000 m (arriba) a 0 m (abajo)
  const porcentaje = 96 - (destino / 4000) * 92;
  cursor.style.top = `${porcentaje}%`;

  const inicio = parseInt(numero.textContent.replace(/\D/g, ""), 10) || 0;

  if (sinMovimiento) {
    numero.textContent = destino.toLocaleString("es-EC");
    return;
  }

  const duracion = 900;
  const t0 = performance.now();

  function paso(ahora) {
    const avance = Math.min((ahora - t0) / duracion, 1);
    const suave = 1 - Math.pow(1 - avance, 3);
    const valor = Math.round(inicio + (destino - inicio) * suave);
    numero.textContent = valor.toLocaleString("es-EC");
    if (avance < 1) requestAnimationFrame(paso);
  }
  requestAnimationFrame(paso);
}

/* ---------- cambiar de región ---------- */

function cambiarRegion(region) {
  regionActual = region;
  raiz.setAttribute("data-region", region);

  botones.forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.ir === region));
  });

  tituloRegion.textContent = textoRegion[region].titulo;
  bajadaRegion.textContent = textoRegion[region].bajada;

  buscar.value = "";
  dibujarPlatos();
  dibujarDespensa();
  moverAltimetro(textoRegion[region].altura);
}

/* ---------- eventos ---------- */

botones.forEach((btn) => {
  btn.addEventListener("click", () => cambiarRegion(btn.dataset.ir));
});

buscar.addEventListener("input", dibujarPlatos);

/* ---------- arranque ---------- */

document.getElementById("conteo-total").textContent = platos.length;
cambiarRegion("costa");
