document.querySelectorAll('.grid img').forEach(img => {
  img.onclick = () => {
    document.querySelector('.lightbox').classList.add('active');
    document.getElementById('lightbox-img').src = img.src;
  }
});

document.querySelector('.close').onclick = () => {
  document.querySelector('.lightbox').classList.remove('active');
};

document.querySelector('.lightbox').onclick = (e) => {
  if (e.target === document.querySelector('.lightbox')) {
    document.querySelector('.lightbox').classList.remove('active');
  }
};