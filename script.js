// BOTÓN EMPEZAR ❤️

const boton = document.getElementById("empezar");

if (boton) {

    boton.addEventListener("click", () => {

        const historia = document.querySelector(".historia");

        if (historia) {

            historia.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

}



// CARTA 💌

const textoCarta = `Mi amor ❤️

Quise hacer algo especial para vos.

Quise jugar a hacerme el informático y programarte una página desde cero (obviamente con una ayudita de ChatGPT porque no sé un culo de programación jajaja), pero quería intentarlo porque vos valés eso y mucho más.

Quiero que sepas que te amo muchísimo.

Que tu sonrisa me vuelve loco todos los días, que pensarte es mi actividad favorita del día y quiero hacerte saber que no existe ni va a existir una personita tan única y perfecta como vos.

Sos el amor de mi vida, mi razón de vivir, sos esa persona que me da fuerzas para levantarme todos los días y me hace sentir amado a pesar de todas las adversidades.

Gracias por elegirme aun sabiendo el desastre que soy y por estar conmigo.

No hay forma de agradecerte todo lo que haces por mí, por eso quiero hacer estos pequeños gestos que demuestran que mi amor por vos rompe barreras y me hace hacer cosas que nunca pensé hacer.

Te amo millones y te extraño como no te haces una idea.

Con amor;
Bauti 💘`;


let indice = 0;


function escribirCarta(){

    const carta = document.getElementById("texto-carta");

    if(carta && indice < textoCarta.length){

        carta.innerHTML += textoCarta.charAt(indice);

        indice++;

        setTimeout(escribirCarta,50);

    }

}




const sobre = document.getElementById("sobre");


if(sobre){

    sobre.addEventListener("click", () => {


        sobre.classList.add("abierto");


        setTimeout(() => {

            escribirCarta();

        },1000);


    });

}




// CONTADOR ⏳❤️

function actualizarTiempo(){


    const elemento = document.getElementById("tiempo");


    if(!elemento) return;



    const inicio = new Date("2025-12-18T00:00:00");

    const ahora = new Date();


    const diferencia = ahora - inicio;



    const dias = Math.floor(
        diferencia / (1000 * 60 * 60 * 24)
    );


    const horas = Math.floor(
        diferencia / (1000 * 60 * 60) % 24
    );


    const minutos = Math.floor(
        diferencia / (1000 * 60) % 60
    );


    const segundos = Math.floor(
        diferencia / 1000 % 60
    );



    elemento.innerHTML =
    `❤️ ${dias} días<br>
     ❤️ ${horas} horas<br>
     ❤️ ${minutos} minutos<br>
     ❤️ ${segundos} segundos`;

}


setInterval(actualizarTiempo,1000);

actualizarTiempo();




// FOTOS 📸

function abrirFoto(foto){

    foto.classList.toggle("activa");

}
