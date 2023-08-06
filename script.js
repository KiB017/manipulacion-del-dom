const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const btn = document.querySelector('#btnCalculo');
const pResult = document.querySelector('#result');

form.addEventListener('click', sumaInputs);

function sumaInputs(event)
{ 
    //console.log({event});
    //event.preventDefault();
    const suma = parseInt(input1.value) + parseInt(input2.value);
    pResult.innerText = "Resultado = " + suma;
}