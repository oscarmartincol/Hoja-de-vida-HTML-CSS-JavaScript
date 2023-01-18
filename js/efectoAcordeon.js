const contenido = document.getElementById("contenido");
const list = document.querySelectorAll(".acordeon");
contenido.addEventListener("click", (e) => {
    if(e.target.classList.contains("link")){
        RemoveAll();
        e.target.children[0].classList.toggle("rotate");
        var value= e.target.parentElement;
        value.classList.toggle("escala");
    }
    e.stopPropagation();
})

const RemoveAll=() =>{
    for(var index of list){
        index.classList.remove(".escala");
    }
}