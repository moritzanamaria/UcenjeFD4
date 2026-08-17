function izracunajLjubavRekurzivno(red, povijestRedova) {
    povijestRedova.push(red);

    if (red.length <= 2) {
        return;
    }

    const noviRed = [];
    let lijevo = 0;
    let desno = red.length - 1;

    while (lijevo <= desno) {
        if (lijevo === desno) {
            noviRed.push(red[lijevo]);
        } else {
            let zbroj = red[lijevo] + red[desno];
            if (zbroj >= 10) {
                noviRed.push(Math.floor(zbroj / 10));
                noviRed.push(zbroj % 10);
            } else {
                noviRed.push(zbroj);
            }
        }
        lijevo++;
        desno--;
    }

    izracunajLjubavRekurzivno(noviRed, povijestRedova);
}

document.getElementById('izracunaj').addEventListener('click', () => {
    const ime1Input = document.getElementById('ime1').value.trim();
    const ime2Input = document.getElementById('ime2').value.trim();
    const rezultatDiv = document.getElementById('rezultat');
    const prikazImena = document.getElementById('prikaz-imena');

    if (!ime1Input || !ime2Input) {
        rezultatDiv.innerHTML = 'Unesi oba imena!';
        prikazImena.innerHTML = '';
        return;
    }

    prikazImena.innerHTML = `${ime1Input} ${ime2Input}`;

    const tekst = (ime1Input + ime2Input).toLowerCase().replace(/[^a-zčćžšđ]/g, '');
    const pocetniBrojevi = [];
    
    for (let i = 0; i < tekst.length; i++) {
        const slovo = tekst[i];
        let ponavljanja = 0;
        for (let j = 0; j < tekst.length; j++) {
            if (tekst[j] === slovo) {
                ponavljanja++;
            }
        }
        pocetniBrojevi.push(ponavljanja);
    }

    const sviRedovi = [];
    izracunajLjubavRekurzivno(pocetniBrojevi, sviRedovi);

    let htmlIspis = '';
    sviRedovi.forEach(red => {
        htmlIspis += `<div class="redak">${red.join('')}</div>`;
    });

    rezultatDiv.innerHTML = htmlIspis;
});