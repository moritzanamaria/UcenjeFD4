const korisnici = [
    {
        id: 1, 
        ime: 'Ana',
        prezime: 'Kartek',
        godine: 25,
        admin: false
    },
    {
        id: 2, 
        ime: 'Karlo',
        prezime: 'Kotig',
        godine: 29,
        admin: false
    },
    {
        id: 3, 
        ime: 'Marko',
        prezime: 'Čutić',
        godine: 45,
        admin: true
    },
    {
        id: 4, 
        ime: 'Nikolina',
        prezime: 'Čutić',
        godine: 49,
        admin: false
    },
    {
        id: 5, 
        ime: 'Žana',
        prezime: 'Đitko',
        godine: 18,
        admin: false
    } 
]

console.table(korisnici)

for(let i = 0; i <korisnici.length; i++){
    console.log(korisnici[i].ime)
}

console.log('***************************')

korisnici.forEach(korisnik => console.log(korisnik.ime))

korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`))

console.log('***************************')

korisnici.forEach(o=>{
    let oslovi = 'Poštovan'
    if(o.ime.endsWith('a')){
        oslovi += 'a gospođo'
    }else{
        oslovi += 'i gospodine'
    }
console.log(`${oslovi} ${o.ime} ${o.prezime}`)
})

console.log('***************************')

korisnici.forEach(o => console.log(`Poštovan${o.ime.endsWith('a') ? 'a gospođo' : 'i gospodine'} ${o.ime} ${o.prezime}`))

console.log('***************************')

const imena = korisnici.map(o => o.ime)

console.table(imena)

console.log('***************************')

korisnici.map(o => o.ime).forEach(s => console.log(s))

console.table(korisnici.map(o => o.ime + ' ' + o.prezime))

const mojaStruktura = korisnici.map(({id, ime, prezime}) =>({sifra: id, osoba: ime + ' ' + prezime}))

console.table(mojaStruktura)

console.log(korisnici.find(o => o.id ===3)?.ime ?? 'Ne postoji')

console.log(korisnici.find(o => o.ime === 'Ana' && o.prezime === 'Kartek').id)

console.log(mojaStruktura.findIndex(o => o.sifra === 100))

console.table(korisnici.filter(o => o.godine > 40))

console.log(korisnici.reduce((suma, o) => suma + o.godine, 0))

let suma = 0
korisnici.forEach(o => suma + o.godine)
console.log(suma)

suma = 0
for(let i = 0; i < korisnici.length; i++){
    suma += korisnici[i].godine
}
console.log(suma)

console.log(korisnici.some(o => o.admin) ? 'Ima admina' : 'Nema admina')

console.log(korisnici.every(o => o.godine >= 18) ? 'Svi su punoljetni' : 'Nisu svi punoljetni')