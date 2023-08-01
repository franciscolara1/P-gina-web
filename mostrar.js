let animado = document.querySelectorAll(".animado");
let animado2 = document.querySelectorAll("#hojas1");
let animado3 = document.querySelectorAll(".surreal");


function mostrarScroll() {
    let scrollTop = document.documentElement.scrollTop;
    for (var i = 0; i < animado.length; i++) {
        let alturaAnimado = animado[i].offsetTop;
        if(alturaAnimado - 500 < scrollTop) {
            animado[i].style.opacity = "1";
            animado[i].classList.add("mostrarArriba");
        }
        else{
            animado[i].style.opacity = "0";
            animado[i].classList.remove("mostrarArriba");
        } 
    }
    for (var i = 0; i < animado2.length; i++) {
        let alturaAnimado = animado2[i].offsetBottom;
        if(alturaAnimado - 1000> scrollBottom) {
            animado2[i].style.opacity = "1";
            animado2[i].classList.add("mostrarArriba2");
        }
        else{
            animado2[i].style.opacity = "0";
            animado2[i].classList.remove("mostrarArriba2");
        } 
    }
    for (var i = 0; i < animado3.length; i++) {
        let alturaAnimado = animado3[i].offsetTop;
        if(alturaAnimado < scrollTop) {
            animado3[i].style.opacity = "1";
            animado3[i].classList.add("belleza");
        }
        else{
            animado3[i].style.opacity = "0";
            animado3[i].classList.remove("belleza");
        } 
    }
}

window.addEventListener('scroll' , mostrarScroll);