const boton = const boton = document.getElementById("empezar");

if (boton) {
    boton.addEventListener("click", () => {

        document.querySelector(".historia").scrollIntoView({
            behavior: "smooth"
        });

    });
}
