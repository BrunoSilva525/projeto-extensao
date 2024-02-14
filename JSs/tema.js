let botaoMudarTemaEl = document.querySelector("#tema");
let backgroundEl = document.querySelector("#body");
let background = 1;
let audio = document.querySelector('audio');
botaoMudarTemaEl.addEventListener('click', () => {
    if (background == 1) {
        $('body').css('background-image', 'url("Imgs/background-claro.jpg")');
        $('.modal-sobre-mim, .modal-agradecimentos, .modal-fotos').css('background-color', 'rgb(255, 255, 255, 0.8)');
        background = 0;
    }
    else {
        $('body').css('background-image', 'url("Imgs/background-noturno.jpg")');
        $('.modal-sobre-mim, .modal-agradecimentos, .modal-fotos').css('background-color', 'rgb(128, 128, 128, 0.8)');
        background = 1;
    }
});

function setVolume(value) {
    audio.volume = value;
}