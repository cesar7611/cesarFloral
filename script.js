

let coloniaUsuario = prompt("¿En que colonia o fraccionamiento te encuentras?");

if (coloniaUsuario && coloniaUsuario.toLocaleLowerCase().includes("Parque de las avez")) {

    alert("🚀¡Felicidades! Al estar cercas de cesarFloral, tu envio es totalmente GRATIS y llegará en menos de 1 hora.");

} else if (coloniaUsuario) {
    alert("💐 ¡Bienvenido! Contamos con envíos estándar a tu zona. Explora nuestro catálogo.");
} else {
    alert("✨ ¡Bienvenido a CesarFloral! Explora nuestros hermosos arreglos florales. ");
}