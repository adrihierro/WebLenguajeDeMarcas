document.addEventListener("DOMContentLoaded", function () {
    const cookieBanner = document.getElementById("cookie-banner");
    const acceptCookiesButton = document.getElementById("accept-cookies");

    // Verificar si el usuario ya aceptó las cookies
    if (!localStorage.getItem("cookies-accepted")) {
        cookieBanner.style.display = "flex"; // Mostrar el banner
    } else {
        cookieBanner.style.display = "none"; // Ocultar el banner si ya aceptó
    }

    // Manejar el clic en el botón "Aceptar"
    acceptCookiesButton.addEventListener("click", function () {
        localStorage.setItem("cookies-accepted", "true"); // Guardar en localStorage
        cookieBanner.style.display = "none"; // Ocultar el banner
    });
});