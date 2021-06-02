/*let resta = document.querySelector('#resta');
let suma = document.querySelector('#suma');
let resulta = document.querySelector('#resulta');
resulta.innerText = 0;*/
let total_element = document.getElementById('total');

function sumar () {
    let total_value = parseInt(total_element.innerHTML);
    total_element.innerHTML = total_value + 1;
  }

  function restar () {
    let total_value = parseInt(total_element.innerHTML);
    if (total_value == 0) return; // validamos que el valor no sea menor a 0
    total_element.innerHTML = total_value - 1;
  }

document.getElementById('sumar').addEventListener('click', sumar);

document.getElementById('restar').addEventListener('click', restar);

/*if (resta.addEventListener("click") == true){
    resulta.innerText = resulta.innerText - 1;
}

if (resta.addEventListener("click") == true {
    resulta.innerText = resulta.innerText - 1;
}*/