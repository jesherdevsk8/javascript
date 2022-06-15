const botao = document.querySelector('#calcular');
const resultado = document.querySelector('.resultado');

botao.addEventListener("click", (e) => {
    console.log(1);
    resultado.innerHTML = "fui clicado";
})