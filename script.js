// Новый рабочий lightbox для grid-item (2025 версия)
document.addEventListener('DOMContentLoaded', function () => {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeBtn = document.querySelector('.close');

  // Клик по любой картинке в галерее
  document.querySelectorAll('.grid-item img').forEach(img => {
    img.style.cursor = 'pointer';
    img.onclick = () => {
      lightboxImg.src = img.src;
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden'; // блокируем скролл
    };
  });

  // Закрытие по крестиком
  closeBtn.onclick = () => {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  // Закрытие по клику на фон
  lightbox.onclick = (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  };
});
