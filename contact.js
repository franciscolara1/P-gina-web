let animación = document.getElementById("contact");



function mostrarCaja () {
    let scrollTop = document.documentElement.scrollTop;
    let alturaAnimación = animación.offsetTop;
    if (alturaAnimación -1000 < scrollTop) {
        animación.style.opacity = "1";
        animación.classList.add("cajotaMostrar");
    }
    else {
        animación.style.opacity = "0";
        animación.classList.remove("cajotaMostrar");
    }
}

window.addEventListener('scroll' , mostrarCaja);


