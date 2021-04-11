'use strict';

let hracNaTahu = 'circle';

const tlacitka = document.querySelectorAll('button');
console.log(tlacitka);

for (let i = 0; i < tlacitka.length; i += 1) {
  const tlacitko = tlacitka[i];

  tlacitko.addEventListener('click', (event) => {
    const tlacitkoPoStisknuti = event.target;
    const hracNaTahuSymbol = document.querySelector('.hrac__symbol');
    if (hracNaTahu === 'circle') {
      tlacitkoPoStisknuti.classList.add('button--circle');
      hracNaTahu = 'cross';
      hracNaTahuSymbol.src = 'cross.svg';
    } else if (hracNaTahu === 'cross') {
      tlacitkoPoStisknuti.classList.add('button--cross');
      hracNaTahu = 'circle';
      hracNaTahuSymbol.src = 'circle.svg';
    }
  });
}
