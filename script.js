'use strict';

let hracNaTahu = 'circle';

const tlacitka = document.querySelectorAll('button');
console.log(tlacitka);

for (let i = 0; i < tlacitka.length; i += 1) {
  const tlacitko = tlacitka[i];

  tlacitko.addEventListener('click', (event) => {
    const tlacitkoPoStisknuti = event.target;
    const hracNaTahuSymbol = document.querySelector('.hrac__symbol');
    if (tlacitkoPoStisknuti.classList.contains('empty')) {
      if (hracNaTahu === 'circle') {
        tlacitkoPoStisknuti.classList.replace('empty', 'button--circle');
        tlacitkoPoStisknuti.setAttribute('disabled', true);
        hracNaTahu = 'cross';
        hracNaTahuSymbol.src = 'cross.svg';
      } else if (hracNaTahu === 'cross') {
        tlacitkoPoStisknuti.classList.replace('empty', 'button--cross');
        tlacitkoPoStisknuti.setAttribute('disabled', true);
        hracNaTahu = 'circle';
        hracNaTahuSymbol.src = 'circle.svg';
      }
    }
  });
}
