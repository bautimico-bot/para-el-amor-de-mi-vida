const boton = document.getElementById("empezar");

if (boton) {
    boton.addEventListener("click", () => {

        document.querySelector(".inicio").scrollIntoView({
            behavior: "smooth"
        });

    });
}
