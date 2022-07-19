const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});


h1.innerHTML = 'Patito <br> Feo';
h1.innerText = "Patito 1";

//console.log(h1.getAttribute('pantalla'));
//h1.setAttribute('class' ,"rojo");

h1.classList.add('rojo');
h1.classList.remove('verde');
//h1.classList.toogle('verde');
//h1.classList.contains('verde');

input.value = 456;

const img = document.createElement('img');
img.setAttribute('src', 'https://images.pexels.com/photos/12879613/pexels-photo-12879613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');

pid.append(img);