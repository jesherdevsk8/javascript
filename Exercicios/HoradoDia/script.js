

const d = new Date();
let h = addZero(d.getHours());
let m = addZero(d.getMinutes());
let s = addZero(d.getSeconds());
let time = h + ":" + m + ":" + s;

function addZero(i) {
    if (i < 10) {i = "0" + i}
    return i;
}

function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.querySelector('.img');
    var titulo = window.document.getElementsByTagName('h1')[0];
    var horaAtual = window.document.getElementById('hora-atual');
    horaAtual.innerHTML = `Agora são ${time} horas.`;

    var hora = d.getHours();
    // msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora <= 12) {
        // Bom dia
        img.src = 'img/dia-2.jpg';
    }else if(hora > 12 && hora < 18) {
        // Boa tarde
        img.src = 'img/tarde.jpg';
        document.body.style.backgroundImage = "url('img/dia.jpg')";
        document.body.style.backgroundSize = "cover";
        titulo.style.color = '#151616';
    }else {
        // Boa noite
        img.src = 'img/noite.jpg';
        document.body.style.backgroundColor = '#23014b';
    }
}