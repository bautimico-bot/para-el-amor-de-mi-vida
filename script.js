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

Yo también quise jugar a hacerme el informático programándote una página desde cero (obviamente con una ayudita de ChatGPT porque no sé un culo de programación jajaja).

Pero lo hice para que sepas que mi amor por vos es capaz de sobrepasar cualquier cosa. Incluso hacerme intentar cosas que nunca pensé que iba a hacer.

Quiero que sepas que te amo muchísimo, que sos única para mí y que no importa lo que pase, siempre voy a querer hacer todo lo posible para estar bien con vos.

Quiero hacer las cosas bien con vos, seguir creciendo juntos y poder durar.

Algún día quiero pedirte matrimonio en ese bosquecito con un laguito que imaginaste en Bariloche.

Sos lo mejor que me pasó.

Te amo con el alma ❤️`;

let indice = 0;

function escribirCarta(){

    const carta = document.getElementById("texto-carta");

    if(indice < textoCarta.length){

        carta.innerHTML += textoCarta.charAt(indice);

        indice++;

        setTimeout(escribirCarta, 50);

    }

}
