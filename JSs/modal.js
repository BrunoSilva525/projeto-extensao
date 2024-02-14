let botaoAbrirModalSobreMimEl = document.querySelector(".modal-sobre-mim");
let botaoAbrirModalNovoEl = document.querySelector(".modal-fotos");
let botaoAbrirModalAgradecimentosEl = document.querySelector(".modal-agradecimentos");
let botaoFecharModal1El = document.querySelector("#close-modal1");
let botaoFecharModal2El = document.querySelector("#close-modal2");
let botaoFecharModal3El = document.querySelector("#close-modal3");
let modalEl = document.querySelector("#modal1");
let modal2El = document.querySelector("#modal2");
let modal3El = document.querySelector("#modal3")
let fadeEl = document.querySelector(".fade");

$('.modal-sobre-mim').css('opacity', '1');
$('.modal-sobre-mim').css('pointer-events', 'all');
$('.modal-fotos').css('opacity', '1');
$('.modal-fotos').css('pointer-events', 'all');
$('.modal-agradecimentos').css('opacity', '1');
$('.modal-agradecimentos').css('pointer-events', 'all');

let togleModal = () => {
  [modalEl, fadeEl].forEach((el) => el.classList.toggle("hide"));
  $('.modal-sobre-mim').css('opacity', '0');
  $('.modal-sobre-mim').css('pointer-events', 'none');
}

let togleModal2 = () => {
  [modal2El, fadeEl].forEach((el) => el.classList.toggle("hide"));
  $('.modal-fotos').css('opacity', '0');
  $('.modal-fotos').css('pointer-events', 'none');
}

let togleModal3 = () => {
  [modal3El, fadeEl].forEach((el) => el.classList.toggle("hide"));
  $('.modal-agradecimentos').css('opacity', '0');
  $('.modal-agradecimentos').css('pointer-events', 'none');
}

botaoFecharModal1El.addEventListener('click', () => {
  togleModal();
  $('.modal-sobre-mim').css('opacity', '1');
  $('.modal-sobre-mim').css('pointer-events', 'all');
});

botaoFecharModal2El.addEventListener('click', () => {
  togleModal2();
  $('.modal-fotos').css('opacity', '1');
  $('.modal-fotos').css('pointer-events', 'all');
});

botaoFecharModal3El.addEventListener('click', () => {
  togleModal3();
  $('.modal-agradecimentos').css('opacity', '1');
  $('.modal-agradecimentos').css('pointer-events', 'all');
});

[botaoAbrirModalSobreMimEl, fadeEl].forEach((el) => {
  el.addEventListener('click', () => togleModal());
});

[botaoAbrirModalNovoEl, fadeEl].forEach((el) => {
  el.addEventListener('click', () => togleModal2());
});

[botaoAbrirModalAgradecimentosEl, fadeEl].forEach((el) => {
  el.addEventListener('click', () => togleModal3());
});
