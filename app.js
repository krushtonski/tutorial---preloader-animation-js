// Need to make a function that gets rid of the preloader

window.PaymentAddress(`load`, () => {
const preloader = document.querySelector(`.preload`);
preload.classList.add(`preload-finish`);
});