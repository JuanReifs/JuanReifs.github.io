const PREGUNTAS_FRONT = [
    { q: "¿Qué propiedad CSS controla el tamaño de la fuente?", o: ["text-size", "font-style", "font-size", "size"], a: 2 },
    { q: "¿Qué etiqueta define el título de la página en la pestaña?", o: ["<header>", "<title>", "<head>", "<h1>"], a: 1 },
    { q: "¿Cuál es el operador de comparación estricta en JS?", o: ["==", "=", "===", "!="], a: 2 },
    { q: "¿Qué propiedad define el espacio entre el borde y el contenido?", o: ["margin", "padding", "border-spacing", "gap"], a: 1 },
    { q: "¿Qué etiqueta HTML se usa para crear una lista desordenada?", o: ["<ol>", "<li>", "<ul>", "<list>"], a: 2 },
    { q: "¿Qué atributo se usa para abrir un enlace en una pestaña nueva?", o: ["target='_blank'", "href='new'", "tab='new'", "rel='external'"], a: 0 },
    { q: "¿Qué palabra clave declara una variable constante en JS?", o: ["var", "let", "const", "fixed"], a: 2 },
    { q: "¿Qué propiedad CSS se usa para apilar elementos (eje Z)?", o: ["z-index", "stack", "position", "order"], a: 0 },
    { q: "¿Qué evento se dispara cuando se hace clic en un elemento?", o: ["onhover", "onclick", "onpress", "onfocus"], a: 1 },
    { q: "¿Qué propiedad de Flexbox alinea elementos en el eje principal?", o: ["align-items", "justify-content", "flex-direction", "gap"], a: 1 },
    { q: "¿Qué selector CSS se utiliza para un ID específico?", o: [".", "#", "*", "&"], a: 1 },
    { q: "¿Cómo se añade un escuchador de eventos en JavaScript?", o: ["attachEvent()", "listen()", "addEventListener()", "on()"], a: 2 },
    { q: "¿Qué etiqueta HTML se usa para enlazar un archivo JS?", o: ["<link>", "<style>", "<script>", "<meta>"], a: 2 },
    { q: "¿Qué valor de 'display' tienen los <div> por defecto?", o: ["inline", "flex", "block", "grid"], a: 2 },
    { q: "¿Cómo mostramos un mensaje en la consola del navegador?", o: ["print()", "console.log()", "alert()", "write()"], a: 1 },
    { q: "¿Qué propiedad cambia el color de fondo en CSS?", o: ["color", "bg-color", "background-color", "fill"], a: 2 },
    { q: "¿Qué método detiene la acción por defecto de un evento?", o: ["stop()", "halt()", "preventDefault()", "cancel()"], a: 2 },
    { q: "¿Cómo accedemos al primer elemento por clase en JS?", o: ["getElementById", "querySelector", "getElementsByTagName", "getClass"], a: 1 }
];

let EstDelCot = {
    grp: '',
    susp: 0,
    idx: 0,
    pregs: [],
    t: 15,
    idR: null,
    idRuido: null
};

function empezarMambo(g, c) {
    EstDelCot.grp = g;
    EstDelCot.susp = 0;
    EstDelCot.idx = 0;
    EstDelCot.t = 15;
    EstDelCot.pregs = PREGUNTAS_FRONT.sort(() => 0.5 - Math.random()).slice(0, 10);
    document.getElementById('pantalla-seleccion').classList.add('hidden');
    document.getElementById('pantalla-quiz').classList.remove('hidden');
    const tag = document.getElementById('etiqueta-grupo');
    tag.innerText = g;
    tag.style.color = (c === 'oro' ? '#ffd700' : c === 'cian' ? '#00f2ff' : c === 'sangre' ? '#ff0033' : '#bc13fe');
    pintar();
    reloj();
}

function pintar() {
    const p = EstDelCot.pregs[EstDelCot.idx];
    document.getElementById('texto-progreso').innerText = (EstDelCot.idx + 1) + " / 10";
    document.getElementById('texto-pregunta').innerText = p.q;
    const r = document.getElementById('rejilla-opciones');
    r.innerHTML = '';
    p.o.forEach((opt, i) => {
        const b = document.createElement('button');
        b.className = 'boton-opcion p-5 rounded-xl text-left text-lg font-medium';
        b.innerText = opt;
        b.onclick = () => check(i);
        r.appendChild(b);
    });
}

function check(i) {
    clearInterval(EstDelCot.idR);
    if (i !== EstDelCot.pregs[EstDelCot.idx].a) {
        meterRuido();
        EstDelCot.susp += 10;
        update();
    }
    if (EstDelCot.susp >= 100) return acabar(false);
    EstDelCot.idx++;
    if (EstDelCot.idx >= 10) return acabar(true);
    EstDelCot.t = 15;
    pintar();
    reloj();
}

function reloj() {
    const v = document.getElementById('visor-tiempo');
    v.innerText = EstDelCot.t + "s";
    v.style.color = '#00f2ff';
    EstDelCot.idR = setInterval(() => {
        EstDelCot.t--;
        v.innerText = EstDelCot.t + "s";
        if (EstDelCot.t <= 5) v.style.color = '#ff0033';
        else if (EstDelCot.t <= 10) v.style.color = '#ffd700';
        if (EstDelCot.t <= 0) {
            clearInterval(EstDelCot.idR);
            EstDelCot.susp += 20;
            update();
            if (EstDelCot.susp >= 100) return acabar(false);
            check(-1);
        }
    }, 1000);
}

function update() {
    document.getElementById('barra-sospecha').style.width = EstDelCot.susp + "%";
    document.getElementById('valor-sospecha').innerText = EstDelCot.susp + "%";
    if (EstDelCot.susp >= 70) document.getElementById('barra-sospecha').classList.add('peligro-total');
}

function meterRuido() {
    document.getElementById('capa-interferencia').style.display = 'block';
    setTimeout(() => {
        document.getElementById('capa-interferencia').style.display = 'none';
    }, 300);
}

function volverAlInicio() {
    clearInterval(EstDelCot.idR);
    clearInterval(EstDelCot.idRuido);
    document.getElementById('pantalla-quiz').classList.add('hidden');
    document.getElementById('pantalla-resultados').classList.add('hidden');
    document.getElementById('pantalla-seleccion').classList.remove('hidden');
    document.getElementById('pantalla-resultados').style.background = "transparent";
    EstDelCot.susp = 0;
    update();
}

function acabar(win) {
    clearInterval(EstDelCot.idR);
    document.getElementById('pantalla-quiz').classList.add('hidden');
    const res = document.getElementById('pantalla-resultados');
    res.classList.remove('hidden');

    const tit = document.getElementById('titulo-final');
    const msgIA = document.getElementById('mensaje-ia');
    const msgMer = document.getElementById('mensaje-merito');
    const imgDer = document.getElementById('contenedor-derrota');
    const imgRob = document.getElementById('contenedor-robot');
    const imgMat = document.getElementById('contenedor-matrix');

    // Reset visual
    res.style.background = "transparent";
    imgDer.classList.add('hidden');
    imgRob.classList.add('hidden');
    imgMat.classList.add('hidden');

    if (EstDelCot.susp === 0) {
        tit.innerText = "¡SISTEMA SALVADO!";
        tit.className = "letra-espacial text-5xl font-bold text-green-400 brillo-veneno";
        msgIA.innerText = "CÓDIGO 100% ARTESANO.";
        msgMer.innerText = "Has superado el escaneo de Skynet. Impecable.";
        imgMat.classList.remove('hidden');
    } else if (EstDelCot.susp < 40) {
        tit.innerText = "ERES EL ELEGIDO";
        tit.className = "letra-espacial text-5xl font-bold text-green-500 brillo-veneno";
        msgIA.innerText = "HAS ESQUIVADO LAS BALAS DE LA IA (" + EstDelCot.susp + "%)";
        msgMer.innerText = "Ni el Agente Smith podría detectar tu rastro digital. Sigues siendo humano.";
        imgMat.classList.remove('hidden');
    } else if (EstDelCot.susp < 70) {
        tit.innerText = "SOSPECHA ELEVADA";
        tit.className = "letra-espacial text-5xl font-bold text-cyan-400 brillo-cian";
        msgIA.innerText = "ESTO HUELE A IA QUE TE CAGAS (" + EstDelCot.susp + "%)";
        msgMer.innerText = "Skynet detecta anomalías. Has usado ayuda sintética.";
        imgRob.classList.remove('hidden');
    } else {
        res.style.background = "rgba(102, 0, 0, 0.4)";
        tit.innerText = "ERROR FATAL: HUMANIDAD ELIMINADA";
        tit.className = "letra-espacial text-6xl font-bold text-red-600 brillo-sangre animate-pulse";
        msgIA.innerText = "DETECCIÓN DE IA AL " + EstDelCot.susp + "%";
        msgMer.innerText = "PROTOCOLO SKYNET ACTIVADO. LA RESISTENCIA HA CAÍDO.";
        imgDer.classList.remove('hidden');
        EstDelCot.idRuido = setInterval(meterRuido, 1000);
    }
    document.getElementById('sospecha-final').innerText = EstDelCot.susp + "%";
}
