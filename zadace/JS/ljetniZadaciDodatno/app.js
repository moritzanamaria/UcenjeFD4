const zadaci = {
  z1: (a, b) => {
    console.log('Zadatak 1');
    if (!a || !b) {
      rezultat.innerHTML = 'Obavezan unos duljine (A) i širine (B)';
      return;
    }
    let duljina = Number(a);
    let sirina = Number(b);
    if (isNaN(duljina) || isNaN(sirina) || duljina <= 0 || sirina <= 0) {
      rezultat.innerHTML = 'Duljina i širina moraju biti pozitivni brojevi!';
      return;
    }
    rezultat.innerHTML = `Površina pravokutnika iznosi: <strong>${(duljina * sirina).toFixed(2)}</strong>`;
  },

  z2: (a, b) => {
    console.log('Zadatak 2');
    if (!a.trim()) {
      rezultat.innerHTML = 'Obavezan unos broja (A)';
      return;
    }
    let broj = Number(a);
    if (isNaN(broj)) {
      rezultat.innerHTML = 'Unesena vrijednost A nije broj!';
      return;
    }
    let poruka = broj > 0 ? "Broj je pozitivan." : (broj < 0 ? "Broj je negativan." : "Broj je nula.");
    rezultat.innerHTML = poruka;
  },

  z3: (a, b) => {
    console.log('Zadatak 3');
    if (!a) {
      rezultat.innerHTML = 'Unesite elemente niza u polje A (odvojene zarezom)';
      return;
    }
    let niz = a.split(',').map(item => item.trim());
    let zbroj = 0;
    niz.forEach(val => {
      let num = Number(val);
      if (!isNaN(num) && val !== "") {
        zbroj += num;
      }
    });
    rezultat.innerHTML = `Zbroj brojčanih elemenata niza iznosi: <strong>${zbroj}</strong>`;
  },

  z4: (a, b) => {
    console.log('Zadatak 4');
    if (!a) {
      rezultat.innerHTML = 'Unesite ocjene u polje A (odvojene zarezom)';
      return;
    }
    let ocjene = a.split(',').map(item => parseFloat(item.trim()));
    if (ocjene.some(isNaN)) {
      rezultat.innerHTML = 'Sve unesene ocjene moraju biti brojevi!';
      return;
    }
    let zbroj = ocjene.reduce((sum, ocjena) => sum + ocjena, 0);
    let prosjek = zbroj / ocjene.length;
    rezultat.innerHTML = `Prosjek ocjena iznosi: <strong>${prosjek.toFixed(2)}</strong>`;
  },

  z5: (a, b) => {
    console.log('Zadatak 5');
    let n = parseInt(a);
    if (isNaN(n) || n <= 0 || n >= 1000) {
      rezultat.innerHTML = 'Unesite valjani cijeli broj n u polje A (veći od 0, manji od 1000)';
      return;
    }
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    let rez = n === 1 ? [0] : fib.slice(0, n);
    rezultat.innerHTML = `Prvih ${n} brojeva Fibonaccijevog niza:<br><strong>${rez.join(', ')}</strong>`;
  },

  z6: (a, b) => {
    console.log('Zadatak 6');
    if (!a) {
      rezultat.innerHTML = 'Unesite tekst u polje A';
      return;
    }
    let preokrenuto = a.split('').reverse().join('');
    rezultat.innerHTML = `Preokrenuti string: <strong>${preokrenuto}</strong>`;
  },

  z7: (a, b) => {
    console.log('Zadatak 7');
    if (!a) {
      rezultat.innerHTML = 'Unesite tekst u polje A';
      return;
    }
    let samoglasnici = a.match(/[aeiouAEIOU]/g);
    let broj = samoglasnici ? samoglasnici.length : 0;
    rezultat.innerHTML = `Broj samoglasnika u tekstu: <strong>${broj}</strong>`;
  },

  z8: (a, b) => {
    console.log('Zadatak 8');
    let temp = Number(a);
    let smjer = b ? b.toLowerCase().trim() : 'c2f';
    if (isNaN(temp)) {
      rezultat.innerHTML = 'Unesite temperaturu u polje A. U polje B upišite "c2f" ili "f2c".';
      return;
    }
    if (smjer === 'f2c') {
      let c = (temp - 32) * 5/9;
      rezultat.innerHTML = `${temp} °F = <strong>${c.toFixed(2)} °C</strong>`;
    } else {
      let f = (temp * 9/5) + 32;
      rezultat.innerHTML = `${temp} °C = <strong>${f.toFixed(2)} °F</strong>`;
    }
  },

  z9: (a, b) => {
    console.log('Zadatak 9');
    if (!a) {
      rezultat.innerHTML = 'Unesite brojeve odvojene zarezom u polje A';
      return;
    }
    let arr = a.split(',').map(item => parseFloat(item.trim()));
    if (arr.some(isNaN)) {
      rezultat.innerHTML = 'Svi elementi niza moraju biti brojevi!';
      return;
    }
    arr.sort((x, y) => x - y);
    rezultat.innerHTML = `Sortirani niz (uzlazno): <strong>${arr.join(', ')}</strong>`;
  },

  z10: (a, b) => {
    console.log('Zadatak 10');
    let broj1 = Number(a);
    let broj2 = Number(b);
    if (isNaN(broj1) || isNaN(broj2)) {
      rezultat.innerHTML = 'Unesite dva broja u polja A i B';
      return;
    }
    let rez = broj1 + broj2;
    rezultat.innerHTML = `Rezultat (${broj1} + ${broj2})= <strong>${rez}</strong>`;
  },

  z11: (a, b) => {
    console.log('Zadatak 11');
    let duljina = parseInt(a) || 10;
    let znakovi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
    let lozinka = "";
    for (let i = 0; i < duljina; i++) {
      lozinka += znakovi.charAt(Math.floor(Math.random() * znakovi.length));
    }
    rezultat.innerHTML = `Generirana lozinka:<br><strong style="font-size: 1.2rem; color: #4f46e5;">${lozinka}</strong>`;
  }
};

const rezultat = document.getElementById('rezultat');

document.getElementById('izvedi').addEventListener('click', () => {
  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;

  if (!(zadatak in zadaci)) {
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }

  zadaci[zadatak](a, b);
});