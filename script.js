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

Quiero que sepas que te amo muchísimo. Que sos única para mí y que desde que llegaste a mi vida muchas cosas cambiaron.

Sos esa persona que me hace sonreír, que me hace querer mejorar y que me hace imaginar un futuro hermoso.

No quiero estar solamente en los momentos fáciles. Quiero acompañarte cuando todo esté bien y también cuando las cosas cuesten. Quiero hacer las cosas bien con vos.

Quiero seguir creando recuerdos, seguir riéndonos, seguir abrazándote y seguir eligiéndote todos los días.

Sueño con que algún día pueda cumplir eso que imaginaste: pedirte matrimonio en un bosquecito con un laguito, como lo pensaste en Bariloche.

Sos lo mejor que me pasó.

Gracias por llegar a mi vida el 18 de diciembre de 2025 y hacerla mucho más linda.

No te amo solamente con el corazón.

Porque el corazón algún día deja de latir...

Te amo con el alma.

Y el alma vive para siempre ❤️

Bauti`;

let indice = 0;

function escribirCarta(){

    const carta = document.getElementById("texto-carta");

    if(indice < textoCarta.length){

        carta.innerHTML += textoCarta.charAt(indice);

        indice++;

        setTimeout(escribirCarta, 50);

    }

}
