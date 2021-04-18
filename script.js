'use strict';

let hracNaTahu = 'circle';

const tlacitka = document.querySelectorAll('.btn');
// console.log(tlacitka);

for (let i = 0; i < tlacitka.length; i += 1) {
  const tlacitko = tlacitka[i];

  tlacitko.addEventListener('click', (event) => {
    const tlacitkoPoStisknuti = event.target;
    const hracNaTahuSymbol = document.querySelector('.hrac__symbol');

    if (tlacitkoPoStisknuti.classList.contains('btn--empty')) {
      if (hracNaTahu === 'circle') {
        tlacitkoPoStisknuti.classList.replace('btn--empty', 'button--circle');
        tlacitkoPoStisknuti.setAttribute('disabled', true);
        hracNaTahu = 'cross';
        hracNaTahuSymbol.src = 'cross.svg';

        vyherniTah(tlacitkoPoStisknuti);
        if (vyherniTah(tlacitkoPoStisknuti) === true) {
          novaHra('Vyhrálo kolečko. Spustit novou hru?');
        }
      } else if (hracNaTahu === 'cross') {
        tlacitkoPoStisknuti.classList.replace('btn--empty', 'button--cross');
        tlacitkoPoStisknuti.setAttribute('disabled', true);
        hracNaTahu = 'circle';
        hracNaTahuSymbol.src = 'circle.svg';

        vyherniTah(tlacitkoPoStisknuti);
        if (vyherniTah(tlacitkoPoStisknuti) === true) {
          novaHra('Vyhrál křížek. Spustit novou hru?');
        }
      }
    }
  });
}

// funkce, která vrací index každého tlačítka:
const herniPole = 10; // 10x10

const ziskejPozici = (tlacitko) => {
  let tlacitkoIndex = 0;
  while (tlacitkoIndex < tlacitka.length) {
    if (tlacitko === tlacitka[tlacitkoIndex]) {
      break;
    }
    tlacitkoIndex += 1;
  }

  return {
    radek: Math.floor(tlacitkoIndex / herniPole),
    sloupec: tlacitkoIndex % herniPole,
  };
};

console.log(ziskejPozici(tlacitka[52]));

// funkce, která pro každé číslo řádku a sloupce vrátí příslušné tlačítko:
const ziskejTlacitko = (radek, sloupec) => {
  return tlacitka[radek * herniPole + sloupec];
};

// zkrácený zápis:
// const ziskejTlacitko = (radek, sloupec) =>
//   tlacitka[radek * herniPole + sloupec];

// console.log(ziskejTlacitko(9, 9));

// funkce, který vrací symbol:
const ziskejSymbol = (tlacitko) => {
  if (tlacitko.classList.contains('button--circle')) {
    return 'circle';
  } else if (tlacitko.classList.contains('button--cross')) {
    return 'cross';
  }
};

// funkce, která ověří, zda někdo vyhrává nebo ne:
const pocetVyhernichSymbolu = 5;

const vyherniTah = (tlacitko) => {
  const zakladniPozice = ziskejPozici(tlacitko);
  const symbol = ziskejSymbol(tlacitko);

  let i;

  let vRadku = 1; // jednička pro právě vybrané tlačítko

  // koukni doleva:
  i = zakladniPozice.sloupec; // získám číslo sloupce z objektu získaného pomocí funkce ziskejPozici
  while (
    i > 0 &&
    symbol === ziskejSymbol(ziskejTlacitko(zakladniPozice.radek, i - 1))
  ) {
    vRadku += 1;
    i -= 1;
  }

  // koukni doprava:
  i = zakladniPozice.sloupec;
  while (
    i < herniPole - 1 &&
    symbol === ziskejSymbol(ziskejTlacitko(zakladniPozice.radek, i + 1))
  ) {
    vRadku += 1;
    i += 1;
  }

  // porovnání s počtem výherních symbolů
  if (vRadku >= pocetVyhernichSymbolu) {
    return true;
  }

  let veSloupci = 1;

  // koukni nahoru:
  i = zakladniPozice.radek;
  while (
    i > 0 &&
    symbol === ziskejSymbol(ziskejTlacitko(i - 1, zakladniPozice.sloupec))
  ) {
    veSloupci += 1;
    i -= 1;
  }

  // koukni dolů:
  i = zakladniPozice.radek;
  while (
    i < herniPole &&
    symbol === ziskejSymbol(ziskejTlacitko(i + 1, zakladniPozice.sloupec))
  ) {
    veSloupci += 1;
    i += 1;
  }

  if (veSloupci >= pocetVyhernichSymbolu) {
    return true;
  }

  return false;
};

const novaHra = (message) => {
  let ano = confirm(message);
  if (ano === true) {
    location.reload();
  }
};
