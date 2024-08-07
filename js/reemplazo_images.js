document.addEventListener('DOMContentLoaded', function () {


  // Reemplazar imágenes de baja calidad con media calidad
  const images = document.querySelectorAll('img.lazy');
  let imagesLoaded = 0;
  const totalImages = images.length;

  images.forEach(img => {
    const mediumResSrc = img.getAttribute('data-src-medium');
    if (mediumResSrc) {
      const newImg = new Image();
      newImg.src = mediumResSrc;
      newImg.onload = () => {
        img.src = mediumResSrc;
        imagesLoaded++;
        if (imagesLoaded === totalImages) {
          loadHighResImages(images);
        }
      };
    }
  });

  function loadHighResImages(images) {
    imagesLoaded = 0;
    images.forEach(img => {
      const highResSrc = img.getAttribute('data-src-high');
      if (highResSrc) {
        const newImg = new Image();
        newImg.src = highResSrc;
        newImg.onload = () => {
          img.src = highResSrc;
          imagesLoaded++;
          if (imagesLoaded === totalImages) {
            console.log('Todas las imágenes de alta calidad han sido cargadas.');
          }
        };
      }
    });
  }
});