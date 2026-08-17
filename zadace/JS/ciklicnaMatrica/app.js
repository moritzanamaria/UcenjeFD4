const zadaci = {
  // Opcije 1-16 za cikličku matricu
  z1: (a, b) => {
    console.log('Ciklična matrica - Opcija 1');
    generirajCiklicnuMatricu(a, b, 1);
  },
  z2: (a, b) => {
    console.log('Ciklična matrica - Opcija 2');
    generirajCiklicnuMatricu(a, b, 2);
  },
  z3: (a, b) => {
    console.log('Ciklična matrica - Opcija 3');
    generirajCiklicnuMatricu(a, b, 3);
  },
  z4: (a, b) => {
    console.log('Ciklična matrica - Opcija 4');
    generirajCiklicnuMatricu(a, b, 4);
  },
  z5: (a, b) => {
    console.log('Ciklična matrica - Opcija 5');
    generirajCiklicnuMatricu(a, b, 5);
  },
  z6: (a, b) => {
    console.log('Ciklična matrica - Opcija 6');
    generirajCiklicnuMatricu(a, b, 6);
  },
  z7: (a, b) => {
    console.log('Ciklična matrica - Opcija 7');
    generirajCiklicnuMatricu(a, b, 7);
  },
  z8: (a, b) => {
    console.log('Ciklična matrica - Opcija 8');
    generirajCiklicnuMatricu(a, b, 8);
  },
  z9: (a, b) => {
    console.log('Ciklična matrica - Opcija 9');
    generirajCiklicnuMatricu(a, b, 9);
  },
  z10: (a, b) => {
    console.log('Ciklična matrica - Opcija 10');
    generirajCiklicnuMatricu(a, b, 10);
  },
  z11: (a, b) => {
    console.log('Ciklična matrica - Opcija 11');
    generirajCiklicnuMatricu(a, b, 11);
  },
  z12: (a, b) => {
    console.log('Ciklična matrica - Opcija 12');
    generirajCiklicnuMatricu(a, b, 12);
  },
  z13: (a, b) => {
    console.log('Ciklična matrica - Opcija 13');
    generirajCiklicnuMatricu(a, b, 13);
  },
  z14: (a, b) => {
    console.log('Ciklična matrica - Opcija 14');
    generirajCiklicnuMatricu(a, b, 14);
  },
  z15: (a, b) => {
    console.log('Ciklična matrica - Opcija 15');
    generirajCiklicnuMatricu(a, b, 15);
  },
  z16: (a, b) => {
    console.log('Ciklična matrica - Opcija 16');
    generirajCiklicnuMatricu(a, b, 16);
  }
};

function generirajCiklicnuMatricu(a, b, opcija) {
  rezultat.innerHTML = '';

  // Provjera unosa
  if (!a.trim() || !b.trim()) {
    rezultat.innerHTML = 'Obavezan unos broja redova (A) i kolona (B)';
    return;
  }

  const R = Number(a);
  const K = Number(b);

  if (isNaN(R) || isNaN(K)) {
    rezultat.innerHTML = 'A ili B nije valjan broj';
    return;
  }

  if (R < 2 || R > 50 || K < 2 || K > 50) {
    rezultat.innerHTML = 'Broj redova i kolona mora biti između 2 i 50';
    return;
  }

  const SMJEROVI = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  const matrica = Array.from({ length: R }, () => Array(K).fill(0));
  const cw = (opcija <= 4) || (opcija >= 9 && opcija <= 12);
  let r, c, smjer;

  // Algoritam za kreiranje matrice
  if (opcija <= 8) {
    const k = opcija <= 4 ? opcija : opcija - 4;
    r = (k === 1 || k === 2) ? R - 1 : 0;
    c = (k === 1 || k === 4) ? K - 1 : 0;
    smjer = cw ? [3, 0, 1, 2][k - 1] : [0, 1, 2, 3][k - 1];

    for (let broj = 1; broj <= R * K; broj++) {
      matrica[r][c] = broj;
      let nr = r + SMJEROVI[smjer][0];
      let nc = c + SMJEROVI[smjer][1];
      if (nr < 0 || nr >= R || nc < 0 || nc >= K || matrica[nr][nc] !== 0) {
        smjer = (smjer + (cw ? 1 : 3)) % 4;
        nr = r + SMJEROVI[smjer][0];
        nc = c + SMJEROVI[smjer][1];
      }
      r = nr;
      c = nc;
    }
  } else {
    r = Math.floor((R - 1) / 2);
    c = Math.floor((K - 1) / 2);
    smjer = [3, 1, 0, 2][(opcija <= 12 ? opcija - 8 : opcija - 12) - 1];

    let broj = 1, duljina = 1;
    matrica[r][c] = broj;
    while (broj < R * K) {
      for (let krak = 0; krak < 2 && broj < R * K; krak++) {
        for (let i = 0; i < duljina && broj < R * K; i++) {
          r += SMJEROVI[smjer][0];
          c += SMJEROVI[smjer][1];
          if (r >= 0 && r < R && c >= 0 && c < K) {
            matrica[r][c] = ++broj;
          }
        }
        smjer = (smjer + (cw ? 1 : 3)) % 4;
      }
      duljina++;
    }
  }

  // Poravnavanje brojeva
  const sirina = String(R * K).length;
  let htmlIspis = '<pre>';
  matrica.forEach(red => {
    htmlIspis += red.map(broj => String(broj).padStart(sirina, ' ')).join(' ') + '\n';
  });
  htmlIspis += '</pre>';

  rezultat.innerHTML = htmlIspis;
}

const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;

  const kljuc = 'z' + zadatak;
  if (!(kljuc in zadaci)) {
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }

  // Poziv funkcije iz objekta
  zadaci[kljuc](a, b);
});