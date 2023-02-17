const nombre = document.querySelector('#inp-nombre');
const edad = document.querySelector('#inp-edad');
const enviar= document.querySelector('.btn-enviar');
const orden1 = document.querySelector('.ordenUno');
const orden2 = document.querySelector('.ordenDos');
const cambio = document.querySelector('.cambio');

nombre.minLength=3;
nombre.required = " ";
edad.required="";

function saludar (event){
    event.preventDefault();
    cambio.innerText=nombre.value;
    cambioDePagina();
    orden1.classList.add('inactive');
    orden2.classList.add('inactive');
    enviar.classList.add('inactive');
}


enviar.addEventListener('click',saludar);

function cambioDePagina(){
    setTimeout(() => {
        location.href="../html/index2.html"
    }, 1000*5);
}

