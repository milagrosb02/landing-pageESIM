$(document).ready(function () {
  $('.carrusel-semanal').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    responsive: {
      0: { items: 1 },
      576: { items: 2 },
      992: { items: 3 }
    }
  });


  $('.card-actividad img').on('click', function () {
  const src = $(this).attr('src');
  $('#lightbox-img').attr('src', src);
  $('#lightbox').css('display', 'flex');
})

  // Al hacer clic en la X, cerrar
  $('.close-lightbox').on('click', function () {
    $('#lightbox').fadeOut(200);
  });

  // También cerrar al hacer clic fuera de la imagen
  $('#lightbox').on('click', function (e) {
    if (e.target.id === 'lightbox') {
      $('#lightbox').fadeOut(200);
    }
  });
});
