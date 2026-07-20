const boton = document.getElementById("empezar");

if (boton) {
    boton.addEventListener("click", () => {

        document.querySelector(".historia").scrollIntoView({
            behavior: "smooth"
        });

    });
}
const sobre = document.getElementById("sobre");

if (sobre) {

    sobre.addEventListener("click", () => {

    sobre.classList.add("abierto");

    setTimeout(() => {

        escribirCarta();

    }, 1000);

});

}
const textoCarta = `Mi amor ❤️

Quise hacer algo especial para vos.

Quise jugar a hacerme el informático y programarte una página desde cero (obviamente con una ayudita de ChatGPT porque no sé un culo de programación jajaja), pero quería intentarlo porque vos valés eso y mucho más.

Quiero que sepas que te amo muchísimo. Que tu sonrisa me vuelve loco tooooodos los dias, que el pensarte es mi actividad favorita del dia, quiero hacerte saber que no existe ni va a existir una personita tan unica y perfecta como vos, 
sos el amor de mi vida, mi razon de vivir, sos la unica razon que me alienta a seguir todos los dias, que me da fuerzas para levantarme y me hace saber que soy amado apesar de todas las adversidades.
Gracias por elegirme aun sabiendo el desastre que soy y lo desastroza que es mi
vida,no hay forma de agradecertelo, por eso quiero hacer estos pequeños gestos que demuestran que te amo y que mi amor por vos rompen barreras haciendo cosas que no estan dentro de mi zona de confort
te amo millones y te extraño como no te haces una idea
con amor; Bauti 💘`;


let indice = 0;

function escribirCarta(){

    const carta = document.getElementById("texto-carta");

    if(indice < textoCarta.length){

        carta.innerHTML += textoCarta.charAt(indice);

        indice++;

        setTimeout(escribirCarta, 50);

    }

}
function actualizarTiempo(){

    const inicio = new Date("2025-12-18T00:00:00");

    const ahora = new Date();

    const diferencia = ahora - inicio;


    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));

    const horas = Math.floor(
        diferencia / (1000 * 60 * 60) % 24
    );

    const minutos = Math.floor(
        diferencia / (1000 * 60) % 60
    );

    const segundos = Math.floor(
        diferencia / 1000 % 60
    );


    document.getElementById("tiempo").innerHTML =
    `❤️ ${dias} días<br>
     ❤️ ${horas} horas<br>
     ❤️ ${minutos} minutos<br>
     ❤️ ${segundos} segundos`;

}


setInterval(actualizarTiempo,1000);

actualizarTiempo();
function abrirFoto(foto){

    foto.classList.toggle("activa");

}
