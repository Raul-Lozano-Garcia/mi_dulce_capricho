"use strict"

const nav=document.querySelector("nav");
const boton=document.querySelector(".hamburguesa");
const toggle=document.querySelector(".hamburguesa span");

boton.addEventListener("click",
    ()=>{
        nav.classList.toggle('mostrar');
        toggle.classList.toggle('mostrar');
    });


    
const filtros = document.querySelectorAll('.filtro');

filtros.forEach(filtro => { 

  filtro.addEventListener('click', 
    ()=> {

        const filtroSeleccionado = filtro.getAttribute('data-filter');
        let tartasEsconder = document.querySelectorAll(`.pastel:not([data-filter='${filtroSeleccionado}'])`);
        let tartasMostrar = document.querySelectorAll(`.pastel[data-filter='${filtroSeleccionado}']`);

        if (filtroSeleccionado == 'todas') {
            tartasEsconder = [];
            tartasMostrar = document.querySelectorAll('.pastel[data-filter]');
        }

        tartasEsconder.forEach(tarta => {
        tarta.classList.add('esconder');
        tarta.classList.remove('mostrar');
        });

        tartasMostrar.forEach(tarta => {
        tarta.classList.remove('esconder');
        tarta.classList.add('mostrar'); 
        });

  });
});


const pasteles=document.querySelectorAll(".pastel");
const modal=document.querySelector(".comprar");
const salir=document.querySelector(".comprar span");

pasteles.forEach(
    (pastel)=>{
        pastel.addEventListener("click",
        ()=>{
            modal.classList.remove("no_ver");
            modal.classList.add("ver");
        });
    }
);

salir.addEventListener("click",
()=>{
    modal.classList.remove("ver");
    modal.classList.add("no_ver");
});