document.addEventListener('DOMContentLoaded', () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');

  // Открытие лайтбокса
  document.querySelectorAll('.grid-item img').forEach(img => {
    img.onclick = () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    };
  });

  // Закрытие
  document.querySelector('.close').onclick = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  lightbox.onclick = (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  };
});
