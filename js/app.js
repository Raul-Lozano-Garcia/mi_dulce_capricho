"use strict"

const nav=document.querySelector("nav");
const boton=document.querySelector(".hamburguesa");
const toggle=document.querySelector(".hamburguesa span");

boton.addEventListener("click",
    ()=>{
        nav.classList.toggle('mostrar');
        toggle.classList.toggle('mostrar');
    });
