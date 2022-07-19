const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.querySelector('#btnCalcular');
const result = document.querySelector('#result')

function btnOnClick(){
    const sumaInt = parseInt(input1.value) + parseInt(input2.value);
    result.innerText = `Resultado ${sumaInt}`
};