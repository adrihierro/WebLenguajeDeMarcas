document.addEventListener("DOMContentLoaded", () => {
    const carouselImages = document.querySelector(".carousel-images"); // Contenedor de imágenes
    const images = document.querySelectorAll(".carousel-images img"); // Todas las imágenes
    const leftArrow = document.querySelector(".arrow.left"); // Botón de la izquierda
    const rightArrow = document.querySelector(".arrow.right"); // Botón de la derecha
  
    let currentIndex = 0; // Índice de la imagen actual
  
    function updateCarousel() {
      const imageWidth = images[0].clientWidth; // Ancho de una imagen
      carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Actualiza la posición
    }
  
    // Navegar hacia la izquierda
    leftArrow.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--; // Retrocede una posición
      } else {
        currentIndex = images.length - 1; // Si es la primera imagen, ve a la última
      }
      updateCarousel(); // Actualiza el carrusel
    });
  
    // Navegar hacia la derecha
    rightArrow.addEventListener("click", () => {
      if (currentIndex < images.length - 1) {
        currentIndex++; // Avanza una posición
      } else {
        currentIndex = 0; // Si es la última imagen, vuelve a la primera
      }
      updateCarousel(); // Actualiza el carrusel
    });
  
    // Ajusta el carrusel al redimensionar la ventana
    window.addEventListener("resize", updateCarousel);
  });
  