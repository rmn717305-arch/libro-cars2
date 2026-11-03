const izquierda = document.getElementById("izquierda");
const derecha = document.getElementById("derecha");
const libro = document.getElementById("libro");
const numero = document.getElementById("numero");
const musica = document.getElementById("musica");
const estadoMusica = document.getElementById("estadoMusica");

const botonMusica = document.getElementById("botonMusica");
const botonLectura = document.getElementById("botonLectura");
const botonDetener = document.getElementById("botonDetener");
const mensajeCierre = document.getElementById("mensajeCierre");

let paginaActual = 0;
let vozActual = null;
let cerrando = false;

const fotos = {
    carrera: "https://1.bp.blogspot.com/-Yorf107E32I/WgCepa-36pI/AAAAAAAAAGU/swHrYxL4ZkgWrC6xAc70kVhcFmj4QruRgCLcBGAs/s1600/Cars-Lightning-McQueen.jpg",
    auto: "https://uploads.vibra.co/1/2022/09/disney-lanzo-una-serie-de-cars-el-rayo-mcqueen-regreso-768x467.jpg",
    carretera: "https://i.pinimg.com/originals/de/3e/b3/de3eb3fa97fcbbce19f14d49cc3932a4.jpg",
    velocidad: "https://lumiere-a.akamaihd.net/v1/images/au_disneynews_pixar_cars_lightningmcqueen_incarticle_he_b5b136ee.jpeg?region=0,0,1365,546",
    paisaje: "https://tse1.mm.bing.net/th/id/OIP.1UY86sPCxoYGxDJMNApOyQHaEo?r=0&w=1920&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3",
    ciudad: "https://i.pinimg.com/originals/a8/e6/13/a8e613fffd230e0f8a62be5a97a7a04c.jpg",
    camino: "https://tse2.mm.bing.net/th/id/OIP.9be_C9gqLobzQQMhlodPsgHaFj?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
    montana: "https://wallpapers.com/images/high/disney-cars-1920-x-1080-background-ya86eoiqdj8wsaoy.jpg"
};

/* IMÁGENES CON CORAZONES Y ANIMACIÓN */

function imagen(url, descripcion, clase = "") {
    return `
        <span class="marco-foto">
            <img class="foto ${clase}"
                src="${url}"
                alt="${descripcion}"
                loading="lazy"
                onerror="this.style.display='none'">

            <span class="corazones" aria-hidden="true">
                <span>♥</span>
                <span>♥</span>
                <span>💖</span>
                <span>♥</span>
            </span>
        </span>
    `;
}

function crearPagina(titulo, contenido, foto = null, descripcion = "", clase = "") {
    return { titulo, contenido, foto, descripcion, clase };
}

/* PÁGINAS DEL LIBRO */

const paginas = [
    crearPagina("", `<div class="vacio">CARS<br>Libro digital</div>`),

    crearPagina("CARS: UNA HISTORIA DE AMISTAD", `
        <div class="portada">
            <h2>CARS</h2>
            <p>UNA HISTORIA DE AMISTAD</p>
            ${imagen(fotos.auto, "Automóvil deportivo", "portada-foto giro360")}
            <p>Velocidad, aventuras y grandes amigos</p>
            <div class="datos">
                <p>Alumno: __________________</p>
                <p>Grado y grupo: ____________</p>
                <p>Materia: __________________</p>
                <p>Octubre de 2026</p>
            </div>
        </div>
    `),

    crearPagina("ÍNDICE", `
        <ul>
            <li>Introducción</li>
            <li>El mundo de Cars</li>
            <li>Radiador Springs</li>
            <li>Rayo McQueen</li>
            <li>Mate, Sally y Doc Hudson</li>
            <li>La llegada al pueblo</li>
            <li>La amistad y el trabajo en equipo</li>
            <li>La carrera y sus enseñanzas</li>
            <li>Conclusión</li>
            <li>Metodología del proyecto</li>
            <li>Fuentes de consulta</li>
        </ul>
        <p class="destacado">
            Recorre las páginas para conocer cómo una carrera
            puede cambiar la vida de un automóvil.
        </p>
    `, fotos.carrera, "Automóvil de carreras"),
    crearPagina("ÍNDICE", `
    <p class="destacado">
        📖 Toca cualquier apartado para ir directamente a esa página.
    </p>

    <ul class="indice-interactivo">
        <li><button onclick="irA(4)">Introducción</button></li>
        <li><button onclick="irA(5)">El mundo de Cars</button></li>
        <li><button onclick="irA(6)">Radiador Springs</button></li>
        <li><button onclick="irA(7)">Rayo McQueen</button></li>
        <li><button onclick="irA(8)">Mate</button></li>
        <li><button onclick="irA(9)">Sally Carrera</button></li>
        <li><button onclick="irA(10)">Doc Hudson</button></li>
        <li><button onclick="irA(11)">La llegada al pueblo</button></li>
        <li><button onclick="irA(13)">Nuevos amigos</button></li>
        <li><button onclick="irA(14)">Aprender a escuchar</button></li>
        <li><button onclick="irA(16)">La preparación</button></li>
        <li><button onclick="irA(18)">La gran competencia</button></li>
        <li><button onclick="irA(20)">Más que ganar</button></li>
        <li><button onclick="irA(21)">La amistad verdadera</button></li>
        <li><button onclick="irA(27)">Las enseñanzas de Cars</button></li>
        <li><button onclick="irA(28)">Conclusión</button></li>
        <li><button onclick="irA(30)">Metodología del proyecto</button></li>
        <li><button onclick="irA(31)">Objetivos del proyecto</button></li>
        <li><button onclick="irA(32)">Fuentes de consulta</button></li>
        <li><button onclick="irA(34)">Continuará...</button></li>
    </ul>
`, fotos.carrera, "Automóvil de carreras"),

    crearPagina("Introducción", `
        <p><b>Cars</b> es una historia animada que presenta un mundo
        habitado por automóviles con personalidad propia. A través
        de sus aventuras se exploran la amistad, la humildad,
        la perseverancia y la importancia de ayudar a los demás.</p>
        <p>En este libro conoceremos a sus personajes principales,
        el lugar donde sucede la historia y las enseñanzas que deja
        el recorrido de Rayo McQueen.</p>
        <p>La historia nos recuerda que ganar no siempre significa
        llegar primero: también importa cómo tratamos a los demás.</p>
    `, fotos.auto, "Automóvil deportivo"),

    crearPagina("El mundo de Cars", `
        <p>En el universo de Cars, los automóviles hablan, sienten
        emociones, tienen sueños y construyen relaciones. Cada
        personaje posee una personalidad diferente.</p>
        <p>Algunos disfrutan la velocidad y la competencia; otros
        valoran la tranquilidad, la amistad y la vida en comunidad.</p>
        <p>Este mundo permite contar historias sobre decisiones,
        errores, cambios personales y segundas oportunidades.</p>
    `, fotos.velocidad, "Automóvil en carretera"),

    crearPagina("Radiador Springs", `
        <p>Radiador Springs es un pequeño pueblo situado junto
        a una antigua carretera. Sus habitantes mantienen una
        comunidad unida y conservan sus tradiciones.</p>
        <p>El lugar representa la tranquilidad y la convivencia,
        en contraste con el ambiente acelerado de las competencias.</p>
        <p>Durante su estancia, Rayo descubre que un lugar sencillo
        puede ofrecer experiencias que no se encuentran en los circuitos.</p>
    `, fotos.camino, "Camino entre árboles"),

    crearPagina("Rayo McQueen", `
        <p>Rayo McQueen es un automóvil de carreras rojo, veloz,
        competitivo y seguro de sus habilidades. Su sueño es ser campeón.</p>
        <p>Al principio piensa demasiado en la fama y en el triunfo.
        Necesita aprender a escuchar, aceptar consejos y reconocer
        el valor de las personas que lo rodean.</p>
        <p>Su transformación demuestra que el talento es importante,
        pero la humildad también lo es.</p>
    `, fotos.carrera, "Automóvil deportivo", "salto"),

    crearPagina("Mate", `
        <p>Mate es una grúa de aspecto oxidado, divertida, sincera
        y leal. Le gusta ayudar a sus amigos.</p>
        <p>Su amistad con Rayo le enseña a disfrutar los momentos
        sencillos y a no tomarse todo como una competencia.</p>
        <p>Mate demuestra que la apariencia no determina el valor
        de una persona y que la sinceridad puede crear amistades duraderas.</p>
    `, fotos.auto, "Automóvil clásico"),

    crearPagina("Sally Carrera", `
        <p>Sally es un automóvil deportivo azul que vive en
        Radiador Springs. Es inteligente, amable y se preocupa
        por el futuro de su pueblo.</p>
        <p>Conoce la historia del lugar y ayuda a Rayo a comprender
        por qué sus habitantes desean conservarlo.</p>
        <p>Su personaje representa la esperanza, el cuidado de la
        comunidad y la importancia de valorar nuestro entorno.</p>
    `, fotos.ciudad, "Paisaje urbano", "desaparecer"),

    crearPagina("Doc Hudson", `
        <p>Doc Hudson es un automóvil azul que guarda un pasado
        importante relacionado con las carreras. Al principio
        parece serio y distante.</p>
        <p>Su experiencia le permite orientar a Rayo y enseñarle
        que la disciplina y el respeto son tan importantes
        como la velocidad.</p>
        <p>Doc representa la experiencia, la sabiduría y la
        posibilidad de compartir lo que hemos aprendido.</p>
    `, fotos.velocidad, "Automóvil deportivo"),

    crearPagina("La llegada al pueblo", `
        <p>Durante su viaje hacia una importante competencia,
        Rayo termina en Radiador Springs y debe permanecer allí
        mientras se resuelve su situación.</p>
        <p>Al comienzo considera que el pueblo es un obstáculo
        que le impide continuar su camino.</p>
        <p>Conocer a sus habitantes cambia su manera de pensar
        y lo ayuda a descubrir nuevas prioridades.</p>
    `, fotos.carretera, "Carretera abierta"),

    crearPagina("Un comienzo difícil", `
        <p>Rayo no está acostumbrado a depender de otras personas.
        Su impaciencia provoca desacuerdos con los habitantes.</p>
        <p>Las tareas que debe realizar le parecen una pérdida
        de tiempo, pero le ofrecen oportunidades para comprender
        las consecuencias de sus actos.</p>
        <p>Aprender a reconocer los errores es el primer paso para mejorar.</p>
    `, fotos.camino, "Camino rural"),

    crearPagina("Nuevos amigos", `
        <p>Mate y los demás habitantes comienzan a compartir con
        Rayo sus historias, costumbres y experiencias.</p>
        <p>El protagonista descubre que la amistad no depende
        de la fama, del dinero ni de las victorias.</p>
        <p>Las conversaciones y las actividades compartidas
        hacen que empiece a sentirse parte de la comunidad.</p>
    `, fotos.paisaje, "Paisaje natural"),

    crearPagina("Aprender a escuchar", `
        <p>Rayo está acostumbrado a confiar únicamente en sus
        capacidades. En Radiador Springs descubre el valor de
        escuchar a quienes tienen más experiencia.</p>
        <p>Doc le muestra que entrenar con inteligencia es mejor
        que actuar con orgullo.</p>
        <p>Aceptar ayuda no significa ser débil.</p>
    `, fotos.carrera, "Automóvil de carreras"),

    crearPagina("El valor del pueblo", `
        <p>Radiador Springs no es solamente una parada en el camino.
        Es un lugar donde sus habitantes se conocen, colaboran
        y se apoyan.</p>
        <p>Rayo empieza a entender que el éxito también puede
        medirse por las relaciones que construimos.</p>
        <p>El pueblo simboliza las raíces, la memoria y el sentido
        de pertenencia.</p>
    `, fotos.ciudad, "Paisaje de ciudad"),

    crearPagina("La preparación", `
        <p>Mientras se acerca la competencia, Rayo necesita
        prepararse física y mentalmente.</p>
        <p>El entrenamiento, la práctica y los consejos de Doc
        le ayudan a corregir errores y concentrarse en sus objetivos.</p>
        <p>Alcanzar una meta requiere esfuerzo constante, paciencia
        y disposición para aprender.</p>
    `, fotos.velocidad, "Automóvil deportivo"),

    crearPagina("La importancia del equipo", `
        <p>Aunque Rayo compite individualmente, su desarrollo
        depende del apoyo de otras personas.</p>
        <p>Mate, Doc, Sally y los habitantes del pueblo contribuyen
        de diferentes maneras a que pueda seguir adelante.</p>
        <p>Colaborar y agradecer el apoyo fortalece cualquier proyecto.</p>
    `, fotos.auto, "Automóvil clásico", "salto"),

    crearPagina("La gran competencia", `
        <p>Llega el momento de enfrentarse a otros corredores.
        Rayo tiene la oportunidad de demostrar sus habilidades.</p>
        <p>La competencia representa un desafío que exige
        concentración, estrategia y determinación.</p>
        <p>Ahora el protagonista comprende que el resultado
        no es lo único que importa.</p>
    `, fotos.carrera, "Automóvil de carreras"),

    crearPagina("Una decisión importante", `
        <p>Durante la carrera, Rayo debe elegir entre pensar
        solamente en su resultado o actuar de acuerdo con los
        valores que ha aprendido.</p>
        <p>Su decisión demuestra que el respeto por los demás
        puede ser más importante que obtener una recompensa personal.</p>
        <p>El verdadero carácter se muestra cuando elegimos
        lo que consideramos correcto.</p>
    `, fotos.carretera, "Carretera"),

    crearPagina("Más que ganar", `
        <p>La competencia le enseña a Rayo que una victoria
        no define por completo quién es.</p>
        <p>El respeto, la empatía y la solidaridad pueden convertir
        una experiencia difícil en una oportunidad para crecer.</p>
        <p>Podemos mantener nuestras metas sin olvidar nuestros principios.</p>
    `, fotos.paisaje, "Paisaje de montaña"),

    crearPagina("La amistad verdadera", `
        <p>La amistad entre Rayo y Mate se fortalece porque ambos
        aprenden a aceptarse con sus diferencias.</p>
        <p>Una amistad verdadera ofrece apoyo, confianza y compañía,
        incluso cuando las cosas no salen como se esperaba.</p>
        <p>Los amigos también acompañan durante los problemas.</p>
    `, fotos.camino, "Camino entre árboles"),

    crearPagina("La comunidad unida", `
        <p>Los habitantes de Radiador Springs demuestran que una
        comunidad funciona mejor cuando cada integrante aporta
        sus habilidades.</p>
        <p>Todos tienen algo que ofrecer, sin importar si son
        los más rápidos, fuertes o conocidos.</p>
        <p>La colaboración permite resolver problemas en equipo.</p>
    `, fotos.ciudad, "Ciudad al atardecer"),

    crearPagina("Un cambio de actitud", `
        <p>Rayo comienza su aventura pensando principalmente
        en sí mismo. Después de conocer a los habitantes del
        pueblo, su actitud cambia.</p>
        <p>Aprende a agradecer, escuchar, ayudar y reconocer
        los logros de los demás.</p>
        <p>Las experiencias y las relaciones pueden transformar
        nuestra forma de ver el mundo.</p>
    `, fotos.auto, "Automóvil clásico"),

    crearPagina("El regreso", `
        <p>Después de sus experiencias, Rayo ya no ve Radiador
        Springs como un simple obstáculo.</p>
        <p>El pueblo se convierte en un lugar especial al que
        desea regresar porque allí encontró amistad y tranquilidad.</p>
        <p>Avanzar también significa reconocer de dónde venimos.</p>
    `, fotos.carretera, "Carretera al horizonte"),

    crearPagina("Una nueva familia", `
        <p>Los habitantes de Radiador Springs se convierten en
        personas importantes en la vida de Rayo.</p>
        <p>Las experiencias compartidas forman una familia elegida,
        basada en el respeto y el cariño.</p>
        <p>El apoyo de una comunidad puede ayudarnos a enfrentar
        nuevos desafíos.</p>
    `, fotos.paisaje, "Paisaje natural"),

    crearPagina("El futuro de Radiador Springs", `
        <p>El vínculo de Rayo con el pueblo le permite valorar
        su historia y el esfuerzo de quienes viven allí.</p>
        <p>La comunidad representa la importancia de preservar
        los lugares que tienen significado para las personas.</p>
        <p>Recordar el pasado y trabajar juntos ayuda a imaginar
        un futuro mejor.</p>
    `, fotos.camino, "Camino rodeado de naturaleza"),

    crearPagina("Las enseñanzas de Cars", `
        <ul>
            <li>La amistad vale más que la fama.</li>
            <li>La humildad permite seguir aprendiendo.</li>
            <li>El esfuerzo ayuda a alcanzar objetivos.</li>
            <li>El trabajo en equipo fortalece a las personas.</li>
            <li>Respetar a los demás es más importante que presumir.</li>
            <li>Los errores pueden convertirse en aprendizajes.</li>
        </ul>
        <p>Estas enseñanzas hacen que la historia invite a reflexionar.</p>
    `, fotos.velocidad, "Automóvil en carretera"),

    crearPagina("Conclusión", `
        <p>Cars nos muestra que el camino hacia una meta puede
        enseñarnos mucho más de lo que imaginamos.</p>
        <p>Rayo aprende que el éxito no depende solamente de la
        velocidad o de ganar competencias. También importa
        cómo tratamos a los demás.</p>
        <p>La amistad, la solidaridad y la humildad son valores
        que podemos aplicar en la escuela, la familia y la comunidad.</p>
    `, fotos.auto, "Automóvil deportivo"),

    crearPagina("Metodología del proyecto", `
        <h3>Organización del trabajo</h3>
        <p>Para elaborar este libro digital se propone un proceso
        organizado en etapas:</p>
        <ol>
            <li><b>Planeación:</b> definir tema, objetivos y secciones.</li>
            <li><b>Investigación:</b> consultar información sobre la película.</li>
            <li><b>Diseño:</b> elegir colores, tipografías, imágenes y distribución.</li>
            <li><b>Desarrollo:</b> construir las páginas con HTML, CSS y JavaScript.</li>
            <li><b>Pruebas:</b> comprobar enlaces, animaciones, imágenes y audio.</li>
            <li><b>Evaluación:</b> revisar el contenido y las indicaciones escolares.</li>
        </ol>
    `, fotos.carrera, "Automóvil de carreras"),

    crearPagina("Objetivos del proyecto", `
        <h3>Objetivo general</h3>
        <p>Crear un libro digital interactivo sobre Cars que combine
        narración, recursos visuales y herramientas de desarrollo web.</p>
        <h3>Objetivos específicos</h3>
        <ul>
            <li>Presentar los personajes y las ideas principales.</li>
            <li>Organizar la información en páginas fáciles de leer.</li>
            <li>Aplicar HTML, CSS y JavaScript.</li>
            <li>Integrar imágenes, animaciones y música.</li>
            <li>Promover la reflexión sobre la amistad y el trabajo en equipo.</li>
        </ul>
    `, fotos.auto, "Automóvil"),

    crearPagina("Fuentes de consulta", `
        <p>Para completar y verificar la información del proyecto,
        consulta fuentes como:</p>
        <ul>
            <li>Disney y Pixar: información oficial sobre Cars.</li>
            <li>Material de clase y libro indicado por el profesor.</li>
            <li>MDN Web Docs: documentación de HTML, CSS y JavaScript.</li>
        </ul>
        <p><b>Fuentes de imágenes:</b></p>
        <p class="fuente">Anota el sitio y el enlace exacto de cada imagen
        que utilices en tu proyecto.</p>
        <p class="fuente">https://unsplash.com/</p>
        <p class="fuente">https://developer.mozilla.org/</p>
    `, fotos.paisaje, "Paisaje de montaña"),

    crearPagina("Continuará...", `
        <h2>UNA NUEVA AVENTURA</h2>
        <p>El motor de Rayo McQueen vuelve a rugir mientras el sol
        desaparece detrás del horizonte.</p>
        <p>Mate llega con una noticia inesperada: ha aparecido
        una nueva ruta que podría llevarlos a una carrera desconocida.</p>
        <p>Rayo mira a sus amigos y sonríe. Esta vez sabe que lo
        importante no será llegar primero, sino descubrir qué les
        espera durante el camino.</p>
        <p class="destacado"><b>La aventura apenas comienza...
        ¿qué encontrarán al final de la nueva carretera?</b></p>
    `, fotos.carretera, "Carretera hacia el horizonte", "desaparecer"),

    crearPagina("CONTINUARÁ...", `
        <div class="portada">
            <h2>CONTINUARÁ...</h2>
            <p>🏁 EL CAMINO NO TERMINA AQUÍ 🏁</p>
            ${imagen(fotos.carretera, "Carretera hacia una nueva aventura", "portada-foto giro360")}
            <p>Rayo McQueen y sus amigos volverán
            para vivir una aventura extraordinaria.</p>
            <p><b>¡La siguiente carrera está por comenzar!</b></p>
        </div>
    `)
];

/* MOSTRAR LAS PÁGINAS */

function mostrarPagina(indice, elemento) {
    if (indice < 0 || indice >= paginas.length) {
        elemento.innerHTML = `<div class="vacio">Fin del libro</div>`;
        return;
    }

    const pagina = paginas[indice];
    let html = "";

    if (pagina.titulo) {
        html += `<h2>${pagina.titulo}</h2>`;
    }

    if (pagina.foto) {
        html += imagen(
            pagina.foto,
            pagina.descripcion || pagina.titulo,
            pagina.clase || ""
        );
    }

    html += pagina.contenido;
    html += `<div class="numero-pagina">${indice + 1}</div>`;

    elemento.innerHTML = html;
    elemento.scrollTop = 0;
}

function actualizarLibro(animar = true) {
    mostrarPagina(paginaActual, izquierda);
    mostrarPagina(paginaActual + 1, derecha);

    if (animar) {
        [izquierda, derecha].forEach(pagina => {
            pagina.classList.remove("contenido-nuevo");
            void pagina.offsetWidth;
            pagina.classList.add("contenido-nuevo");
        });
    }

    if (paginaActual === 0) {
        numero.textContent = "Portada";
    } else {
        numero.textContent =
            `Páginas ${paginaActual + 1}–${Math.min(
                paginaActual + 2,
                paginas.length
            )} de ${paginas.length}`;
    }
}
/* IR A UNA PÁGINA DESDE EL ÍNDICE */

function irA(numeroPagina) {
    if (cerrando) return;

    // Cada hoja muestra dos páginas.
    // Se calcula la posición correcta para abrirla.
    paginaActual = Math.floor((numeroPagina - 1) / 2) * 2;

    detenerLectura();
    actualizarLibro();

    // Muestra el libro si estaba oculto.
    libro.style.display = "grid";
    libro.classList.remove("libro-cerrandose");
    mensajeCierre.style.display = "none";

    // Lleva el libro a la vista.
    libro.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

/* AVANZAR Y REGRESAR */

function avanzar() {
    if (cerrando) return;

    if (paginaActual + 2 < paginas.length) {
        paginaActual += 2;
        detenerLectura();
        actualizarLibro();
    } else {
        cerrarLibro();
    }
}

function retroceder() {
    if (cerrando) return;

    if (paginaActual >= 2) {
        paginaActual -= 2;
        detenerLectura();
        actualizarLibro();
    }
}

/* CERRAR EL LIBRO */

function cerrarLibro() {
    if (cerrando) return;

    cerrando = true;
    detenerLectura();

    libro.classList.add("libro-cerrandose");
    numero.textContent = "Fin del libro";

    setTimeout(() => {
        libro.style.display = "none";
        mensajeCierre.style.display = "block";
        cerrando = false;
    }, 1200);
}

function reiniciarLibro() {
    mensajeCierre.style.display = "none";
    libro.style.display = "grid";
    libro.classList.remove("libro-cerrandose");

    paginaActual = 0;
    cerrando = false;

    actualizarLibro(false);
}

/* MÚSICA DE FONDO */

async function reproducirMusica() {
    if (!musica.paused) return;

    try {
        musica.volume = 0.35;
        await musica.play();

        botonMusica.textContent = "Ⅱ Pausar música";
        estadoMusica.textContent = "♪ Música de fondo activada";
    } catch (error) {
        estadoMusica.textContent =
            "⚠️ Pon tu archivo musica.mp3 en la misma carpeta";
        console.error("Error al reproducir:", error);
    }
}

async function alternarMusica() {
    if (musica.paused) {
        await reproducirMusica();
    } else {
        musica.pause();
        botonMusica.textContent = "▶ Activar música";
        estadoMusica.textContent = "Música pausada";
    }
}

botonMusica.addEventListener("click", alternarMusica);

document.getElementById("adelante").addEventListener("click", () => {
    reproducirMusica();
    avanzar();
});

document.getElementById("atras").addEventListener("click", () => {
    reproducirMusica();
    retroceder();
});

/* FLECHAS DEL TECLADO */

document.addEventListener("keydown", evento => {
    if (evento.key === "ArrowRight") avanzar();
    if (evento.key === "ArrowLeft") retroceder();
});

/* DESLIZAR EN EL TELÉFONO */

let inicioX = 0;

libro.addEventListener("touchstart", evento => {
    inicioX = evento.changedTouches[0].screenX;
}, { passive: true });

libro.addEventListener("touchend", evento => {
    const finalX = evento.changedTouches[0].screenX;
    const diferencia = finalX - inicioX;

    if (Math.abs(diferencia) > 70) {
        reproducirMusica();

        if (diferencia < 0) {
            avanzar();
        } else {
            retroceder();
        }
    }
}, { passive: true });

/* LEER EL TEXTO EN VOZ ALTA */

function leerPagina() {
    if (!("speechSynthesis" in window)) {
        estadoMusica.textContent =
            "Tu navegador no admite lectura en voz alta.";
        return;
    }

    detenerLectura();

    const texto = [
        izquierda.innerText,
        derecha.innerText
    ].join(". ");

    vozActual = new SpeechSynthesisUtterance(texto);
    vozActual.lang = "es-MX";
    vozActual.rate = 0.9;
    vozActual.pitch = 1;

    vozActual.onstart = () => {
        estadoMusica.textContent = "🔊 Leyendo las páginas...";
    };

    vozActual.onend = () => {
        vozActual = null;
        estadoMusica.textContent = musica.paused
            ? "Lectura terminada."
            : "♪ Música de fondo activada";
    };

    vozActual.onerror = () => {
        vozActual = null;
        estadoMusica.textContent = "No se pudo leer esta página.";
    };

    window.speechSynthesis.speak(vozActual);
}

function detenerLectura() {
    if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
    }

    vozActual = null;
}

botonLectura.addEventListener("click", leerPagina);

botonDetener.addEventListener("click", () => {
    detenerLectura();

    estadoMusica.textContent = musica.paused
        ? "Lectura detenida."
        : "♪ Música de fondo activada";
});

/* INICIAR EL LIBRO */

actualizarLibro(false);