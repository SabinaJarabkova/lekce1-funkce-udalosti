// tady je místo pro náš program

document.querySelector("#vysledek").innerHTML = secti(4, 5);

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */

let a = 5;
let b = 2;

function secti(a, b) {
  let c = a + b;
  return c;
}



function priKliknuti(){
  let ctverecek;
  ctverecek = document.querySelector('.ctverecek');
  ctverecek.style.backgroundColor = 'green';
}

function celkem(selector) {
  document.querySelector(selector).innerHTML = secti();
}

/**
 * Upozorní uživatele při spuštění.
 */
 function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  console.log('Gratulace, právě jsi spustila tuto funkci!');
  let ctverecek = document.querySelector('.ctverecek');
  ctverecek.style.width = '350px';
  ctverecek.innerHTML = '<strong> Gratulace</strong>, právě jsi spustila tuto funkci!';
}
