// 1. Tu inventario real de flores (Arreglo de Objetos)
let inventarioFlores = [
    { nombre: "Rosas Rojas", precio: 800 },
    { nombre: "Claveles Sencillos", precio: 350 },
    { nombre: "Orquídeas Exclusivas", precio: 1200 },
    { nombre: "Margaritas Lindas", precio: 400 },
    { nombre: "Cempasúchil Premium", precio: 950 }
];

// 2. Capturamos el botón del HTML usando su ID exacto
let botonDescuento = document.getElementById("btnDescuento");

// 3. LA MAGIA: Escuchamos el clic del usuario para activar el motor
botonDescuento.addEventListener("click", function() {
    
    // El ciclo "for" que ya dominas recorre el inventario y aplica el 10%
    for (let i = 0; i < inventarioFlores.length; i++) {
        inventarioFlores[i].precio = inventarioFlores[i].precio * 0.90;
    }

    // Desplegamos una alerta interactiva en la pantalla del cliente
    alert("¡Felicidades! Se ha aplicado un 10% de descuento a todo el catálogo de César Floral. 🎉");
    
    // Mostramos en la consola los nuevos precios rebajados
    console.log("Inventario rebajado:", inventarioFlores);
});
