const p = document.querySelector('#paragrafo')
const divImg = document.querySelector('#divImg');
const txt = document.querySelector('#divImg')
 txt.backgroundColor

// divImg.addEventListener('click', () => {
//     divImg.style.border = "2px solid black";
// })

function pMouse() {
    divImg.style.border = "none";
}
function sMouse() {
    divImg.style.border = "2px solid black";
}
divImg.addEventListener('mouseover', pMouse);
divImg.addEventListener('mouseout', sMouse);


p.onclick = () => {
    alert('Parágrafo clicado!')
}
const clique = () => {
    console.log('Botão clicado!')
    alert('Botão clicado!')
}

function pressTecla() {
    console.log('oi')
    if (window.getComputedStyle(divImg, null).getPropertyValue
    ('background-color') === 'rgb(0,0,0)') {
        divImg.style.backgroundColor = 'rgb(255,255,255)'
    } else {
        divImg.style.backgroundColor = 'rgb(0,0,0)'
    }
}
