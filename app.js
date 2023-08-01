const $portfolio =document.querySelector(".sec-portfolio-js");
const $modalImgPortfolio =document.querySelector(".img-modal-js");

$portfolio.addEventListener("click", (e) => {
    console.log(e.target.classList);
    if(e.target.classList.contains('img-btn-modal-js')){
        //SRC
        let urlImg = e.target.attributes[0].nodeValue
        
        //Add modal
        $modalImgPortfolio.src = urlImg;
    }
})

function Mostrar(){
    var contenido = document.getElementById("contenido");
    var contenido2 = document.getElementById("contenido2");
    contenido2.style.visibility =" hidden";
    contenido2.style.opacity = "0";
    contenido.style.visibility ="visible";
    contenido.style.opacity= "1";

    
}
function Mostrar2(){
    var contenido = document.getElementById("contenido");
    var contenido2 = document.getElementById("contenido2");
    contenido.style.visibility = "hidden";
    contenido.style.opacity ="0";
    contenido2.style.visibility ="visible";
    contenido2.style.opacity= "1";
}