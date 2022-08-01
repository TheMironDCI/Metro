window.addEventListener('DOMContentLoaded', ()=> {
    // Carusale
    const box = document.querySelectorAll(".box"),
    arrowL = document.querySelector(".fa-arrow-left"),
    arrowR = document.querySelector(".fa-arrow-right");
    let k = 0;
    arrowR.addEventListener('click', ()=>{
        delShow(k);
        k++;
        if(box.length <= k) {
            k=0;
        }
        showBox(k);
    });
    arrowL.addEventListener('click', ()=>{
        delShow(k);
        k--;
        if(0>k) {
            k=2;
        }
        showBox(k);
    });
    function showBox(i) {
        box[i].classList.add('show');
    }
    function delShow(z) {
        box[z].classList.remove('show');
    }
    showBox(0);
    // navbar
    const menu =document.querySelector('.menu');
    const burger =document.querySelector(".burger");
    burger.addEventListener("click", ()=> {
        menu.classList.toggle("menuBlock"); 
        burger.classList.toggle("burgerCol");
    });
    // Menu Dropdown
    const dropdownFr = document.querySelector(".dropdown1");
    const dropdownSc = document.querySelector(".dropdown2");
    const dropdownTh = document.querySelector(".dropdown3");
    const dropdownFo = document.querySelector(".dropdown4");
    const dropdownFv = document.querySelector(".dropdown5");
    const ddMenuFr = document.querySelector(".dropdown-menu1");
    const ddMenuSc = document.querySelector(".dropdown-menu2");
    const ddMenuTh = document.querySelector(".dropdown-menu3");
    const ddMenuFo = document.querySelector(".dropdown-menu4");
    const ddMenuFv = document.querySelector(".dropdown-menu5");

    dropdownFr.addEventListener("mouseover", ()=>{
        ddMenuFr.classList.toggle("dropdownBl")
    });
    dropdownSc.addEventListener("mouseover", ()=>{
        ddMenuSc.classList.toggle("dropdownBl")
    });
    dropdownTh.addEventListener("mouseover", ()=>{
        ddMenuTh.classList.toggle("dropdownBl")
    });
    dropdownFo.addEventListener("mouseover", ()=>{
        ddMenuFo.classList.toggle("dropdownBl")
    });
    dropdownFv.addEventListener("mouseover", ()=>{
        ddMenuFv.classList.toggle("dropdownBl")
    });
});
