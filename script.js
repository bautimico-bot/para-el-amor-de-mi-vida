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

    });

}
