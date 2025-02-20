function randomHue() {
    return Math.floor(Math.random() * 360);
  }
  
function updateAuroraColors() {
    const auroras = document.querySelectorAll('.aurora');
    auroras.forEach((aurora) => {
      const hueStart = randomHue();
      const hueEnd = (hueStart + 120) % 360;
      aurora.style.background = `linear-gradient(120deg, hsla(${hueStart}, 100%, 70%, 0) 0%, hsla(${hueEnd}, 100%, 70%, 0.3) 50%, hsla(${hueStart}, 100%, 70%, 0) 100%)`;
    });
  }
  
  // Cambiar colores cada 3 segundos
setInterval(updateAuroraColors, 3000);
  
  // Inicializar colores al cargar la página
updateAuroraColors();