const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result')

// form.addEventListener('submit', sumarInputValues);

// function sumarInputValues(event){
//     event.preventDefault();
//     const sumaInt = parseInt(input1.value) + parseInt(input2.value);
//     result.innerText = `Resultado ${sumaInt}`
// };

btn.addEventListener('click', sumarInputValues);

function sumarInputValues(event){
    // event.preventDefault();
    const sumaInt = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = `Resultado ${sumaInt}`
};