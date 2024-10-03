// agradeçam o chatgpt nao eu 💔

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const background = document.querySelector("#bg-image");
    const blurValue = Math.min(scrollY / 350, 3000); // valor facilmente alterável, dá pra calcular até o tamanho da página e mudar aqui
    background.style.filter = `blur(${blurValue}px)`;
});