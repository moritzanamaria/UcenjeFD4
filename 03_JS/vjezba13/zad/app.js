const obrazac = document.getElementById('obrazac-podataka');
const kontejnerPogreske = document.getElementById('ispis-pogreske');
const kontejnerPogreskeDolje = document.getElementById('ispis-pogreske-dolje');
document.getElementById('naziv-projekta').focus();

obrazac.addEventListener('submit', (dogadaj) => {
    dogadaj.preventDefault();
    kontejnerPogreske.innerText = ''; 
    kontejnerPogreskeDolje.innerText = ''; 
    try {
        const konacniPodaci = {
            projekt: provjeriTekst(document.getElementById('naziv-projekta'), 5, 'Naziv projekta min. 4 znaka'),
            mjestoInstalacije: provjeriTekst(document.getElementById('mjesto-instalacije'), 5,  'Mjesto instalacije min. 4 znaka'),
            instance: provjeriCijeliBroj(document.getElementById('broj-instanci')),
            procesor: provjeriDecimalniBroj(document.getElementById('snaga-procesora')),
            cijena: provjeriDecimalniBroj(document.getElementById('cijena', 2, 'Naziv projekta min. 2 znaka')),
            datum: provjeriDatum(document.getElementById('datum-pokretanja')),
            oznake: provjeriListu(document.getElementById('oznake-sustava')),
            imeDatoteke: provjeriDatoteku(document.getElementById('datoteka-postavki')),
            uvjetiPrihvaceni: provjeriLogiku(document.getElementById('potvrda-uvjeta')),
            vrijemeObrade: new Date(),
            vrijemeObradeHR: new Date().toLocaleString('hr-HR')
        };
        console.log('%c 🎉 PODACI USPJEŠNO PROVJERENI (JSON):', 'font-size:2rem;color: #00d4ff; font-weight: bold;');
        console.log(JSON.stringify(konacniPodaci, null, 4));
        kontejnerPogreske.innerText = 'Pogledajte podatke u konzoli';
        kontejnerPogreskeDolje.innerText = 'Pogledajte podatke u konzoli';
        document.getElementById('naziv-projekta').focus();
    } catch (pogreska) {
        kontejnerPogreske.innerText = '⚠️ ' + pogreska.message;
        kontejnerPogreskeDolje.innerText = '⚠️ ' + pogreska.message;
        //console.warn('Provjera valjanosti podataka nije uspjela:', pogreska.message, pogreska);
    }
});