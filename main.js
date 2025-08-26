document.addEventListener("DOMContentLoaded", () => {
    // Ejemplo: verificación de carga de imagen
    const portada = document.querySelector('img[alt="Portada del juego"]');
    if (portada) {
      portada.addEventListener("error", () => {
        console.warn("No se encontró assets/img/portada.png");
      });
    }
  
    // Aquí puedes añadir lógica del proyecto
    console.log("Web del repo lista ✅");
  });
  