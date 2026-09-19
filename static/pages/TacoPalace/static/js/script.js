console.log("Conexión con js");

let imagen = document.querySelector(".img");

imagen.onclick = function() {
    if (imagen.src = "static/images/Imágenes/comida-mexicana.jpg"){
        imagen.src = "static/images/Imágenes/comida-mexicana2.jpg";
    } else if (imagen.src = "static/images/Imágenes/comida-mexicana2.jpg"){
        imagen.src = "static/images/Imágenes/comida-mexicana2.jpg";
    } 
};


let correo = document.getElementById("barra-busqueda");
let login = document.querySelector(".login");
login.onclick = function() {
    alert(`Bienvenido/a ${correo.value}`);
}


let compras = document.querySelector(".n-compra");
let mas1 = document.getElementById("boton1");
mas1.onclick = function () {
    let vlrActual = parseInt(compras.innerText);
    let vlrUsuario = vlrActual + 1;
    compras.innerText = vlrUsuario;
};
let mas2 = document.getElementById("boton2");
mas2.onclick = function () {
    let vlrActual = parseInt(compras.innerText);
    let vlrUsuario = vlrActual + 1;
    compras.innerText = vlrUsuario;
};
