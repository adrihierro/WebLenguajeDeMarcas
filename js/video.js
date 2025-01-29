// Array con las rutas de los videos
const videos = [
    "file:///C:/Users/Denis/Documents/GitHub/WebLenguajeDeMarcas/vid/1.mp4",
    "file:///C:/Users/Denis/Documents/GitHub/WebLenguajeDeMarcas/vid/2.mp4",
    "file:///C:/Users/Denis/Documents/GitHub/WebLenguajeDeMarcas/vid/3.mp4",
    "file:///C:/Users/Denis/Documents/GitHub/WebLenguajeDeMarcas/vid/4.mp4",
    "file:///C:/Users/Denis/Documents/GitHub/WebLenguajeDeMarcas/vid/5.mp4"
  ];
  
  let currentVideoIndex = 0;
  const videoElement = document.getElementById('videoPlayer');
  
  // Función que cambia al siguiente video cuando el actual termina
  videoElement.addEventListener('ended', function() {
    currentVideoIndex++;
    if (currentVideoIndex >= videos.length) {
      currentVideoIndex = 0;  // Reinicia al primer video si llega al final
    }
    videoElement.src = videos[currentVideoIndex];
    videoElement.play();  // Reproduce el siguiente video
  });
  