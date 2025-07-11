document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.getElementById('tucanWrapper');

  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (isTouch) {
    wrapper.addEventListener('click', function () {
      wrapper.classList.toggle('mostrar-hojas');
    });
  }
});
