// UTILIZO LOS ID DE LAS CLASES EN HTML PARA USARLOS AQUI
const toggleTheme = document.getElementById("toggle-theme");
const toggleIcon = document.getElementById("toggle-icon");
const toggleText = document.getElementById("toggle-text");
const toggleColors = document.getElementById("toggle-colors");

const rootStyles = document.documentElement.style;

const flagsElement = document.getElementById("flags");
const textsToChange = document.querySelectorAll("[data-section]");


//PARA LOS LENGUAJES, PRIMERO JSON CON LOS TEXTOS
//LOCALIZAMOS LOS TEXTOS Y CON UN BUCLE FOR LOS MODIFICAMOS 
//CADA QUE SE HACE CLICK A LAS BANDERAS

flagsElement.addEventListener('click' , (e)=>{
    changeLanguage(e.target.parentElement.dataset.language); //PARA CORROBORAR LA RUTA DEL CLICK A LOS JSON
    });

const changeLanguage = async (language) => {
    const requestJson = await fetch(`./languages/${language}.json`); //INVOCAMOS JSON
    const texts = await requestJson.json(); //PARA TRANSFORMARLO EN OBJETO Y PODELRO USAR EN js

    //console.log(texts); EN LUGAR DE VERLOS LOS MODIFICAMOS

    for(const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML=texts[section][value];

        //console.log(section, value); PARA VER LOS DATOS 
    }
};


//---------------------------------------------------------------

toggleTheme.addEventListener('click' , ()=>{
    document.body.classList.toggle("dark");
    if (toggleIcon.src.includes("moon.svg")) {

              toggleIcon.src="assets/icons/foco.png";
              toggleText.textContent="Light"; } 
        else {
              toggleIcon.src="assets/icons/moon.svg";
              toggleText.textContent="Dark";
        } 
});

toggleColors.addEventListener('click', (e)=>{
// console.log(e.target.dataset);
   rootStyles.setProperty('--primary-color', e.target.dataset.color);
});

