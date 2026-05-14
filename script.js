function toggleMenu() {
    document.getElementById("menu").classList.toggle("activo");
}

const titulo1 = document.querySelector(".titulo1");
const caja1 = document.querySelector(".caja1");

const titulo2 = document.querySelector(".titulo2");
const caja2 = document.querySelector(".caja2");

const titulo3 = document.querySelector(".titulo3");
const caja3 = document.querySelector(".caja3");

const titulo4 = document.querySelector(".titulo4");
const caja4 = document.querySelector(".caja4");

const titulo5 = document.querySelector(".titulo5");
const caja5 = document.querySelector(".caja5");

const titulo6 = document.querySelector(".titulo6");
const caja6 = document.querySelector(".caja6");



titulo1.addEventListener("click", () => {

    if(caja1.style.display === "block"){
        caja1.style.display = "none";
    } else{
        caja1.style.display = "block";
    }

});



titulo2.addEventListener("click", () => {

    if(caja2.style.display === "block"){
        caja2.style.display = "none";
    } else{
        caja2.style.display = "block";
    }

});



titulo3.addEventListener("click", () => {

    if(caja3.style.display === "block"){
        caja3.style.display = "none";
    } else{
        caja3.style.display = "block";
    }

});



titulo4.addEventListener("click", () => {

    if(caja4.style.display === "block"){
        caja4.style.display = "none";
    } else{
        caja4.style.display = "block";
    }

});



titulo5.addEventListener("click", () => {

    if(caja5.style.display === "block"){
        caja5.style.display = "none";
    } else{
        caja5.style.display = "block";
    }

});



titulo6.addEventListener("click", () => {

    if(caja6.style.display === "block"){
        caja6.style.display = "none";
    } else{
        caja6.style.display = "block";
    }

});





const slides = document.querySelectorAll(".slide");
let index = 0;

const showSlide = (i) => {

    slides.forEach(slide => {
        slide.classList.remove("activo");
    });

    slides[i].classList.add("activo");
};


document.getElementById("next").addEventListener("click", () => {

    index++;

    if(index >= slides.length){
        index = 0;
    }

    showSlide(index);
});


document.getElementById("prev").addEventListener("click", () => {

    index--;

    if(index < 0){
        index = slides.length - 1;
    }

    showSlide(index);
});



const chica1 = document.querySelector(".chica1");
const relato1 = document.querySelector(".rel1");

const chica2 = document.querySelector(".chica2");
const relato2 = document.querySelector(".rel2");

const chica3 = document.querySelector(".chica3");
const relato3 = document.querySelector(".rel3");

chica1.addEventListener("click", () => {

    if(relato1.style.display === "block"){
        relato1.style.display = "none";
    } else{
        relato1.style.display = "block";
    }

});

chica2.addEventListener("click", () => {

    if(relato2.style.display === "block"){
        relato2.style.display = "none";
    } else{
        relato2.style.display = "block";
    }

});

chica3.addEventListener("click", () => {

    if(relato3.style.display === "block"){
        relato3.style.display = "none";
    } else{
        relato3.style.display = "block";
    }

});