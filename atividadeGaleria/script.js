const miniaturas = document.querySelectorAll('.miniatura');
const imgAmpliada = document.querySelector('#imgAmpliada');

miniaturas.forEach(miniatura => {
   miniatura.addEventListener('click',() => {
        miniaturas.forEach(miniatura => {
            miniatura.style.opacity = '0,4';
        })
        imgAmpliada.src = miniatura.src;
        imgAmpliada.style.display = 'block';
        miniatura.style.opacity = '1';
    })
})

