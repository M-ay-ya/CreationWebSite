const img = document.getElementById("myImage");

img.addEventListener("click", () => {
    img.classList.toggle("small");
})

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
