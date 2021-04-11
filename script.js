'use strict';

const hracNaTahu = 'cross';

const tlacitka = document.querySelectorAll('button');
console.log(tlacitka);

for (let i = 0; i < tlacitka.length; i += 1) {
  const tlacitko = tlacitka[i];

  tlacitko.addEventListener('click', (event) => {
    const tlacitkoPoStisknuti = event.target;
    if (hracNaTahu === 'circle') {
      tlacitkoPoStisknuti.classList.add('button--circle');
    }
    if (hracNaTahu === 'cross') {
      tlacitkoPoStisknuti.classList.add('button--cross');
    }
  });
}
