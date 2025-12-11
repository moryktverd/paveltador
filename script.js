// Lightbox для новой галереи (grid-item)
document.querySelectorAll('.grid-item img').forEach(img => {
  img.onclick = () => {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.classList.add('active');
  };
});

// Закрытие лайтбокса
document.querySelector('.close').onclick = () => {
  document.getElementById('lightbox').classList.remove('active');
};

document.getElementById('lightbox').onclick = (e) => {
  if (e.target === document.getElementById('lightbox')) {
    document.getElementById('lightbox').classList.remove('active');
  }
};
