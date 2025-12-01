const imgg = document.getElementById("myImage");

imgg.addEventListener("click", () => {
    imgg.classList.toggle("small");
})

// Sélection des éléments
const texte = document.getElementById("demo");
const button = document.getElementById("butt");

// Ajout de l'action du clic
button.addEventListener("click", () => {
    texte.textContent = "J'ai réussi à le changer yayy thanks GPT ig";
    texte.style.fontSize = "20px";
    texte.style.color = "slateblue";
    
});

function computer(){
    alert("You clicked on the computer");
}

function chair(){
    alert("You clicked on the chair");
}

function keyboard(){
    alert("You clicked on the keyboard");
}

//imageMapResize();
