//ULAZ
const a = 7 // parseInt(prompt('Unesi prvi broj'))
const b = 3 //parseInt(prompt('Unesi drugi broj'))
//ALGORITAM
let rez = a + b
//IZLAZ
console.log(a, '+', b, '=', rez)

console.log(`${a} + ${b} = ${rez}`) //bolje

//modulo operator(%)
console.log(9 % 2)
console.log(8 % 2)

//operatori dodjele =

rez = rez + 2

console.log (rez) 
//krace
rez += 2
console.log(rez)

let i = 0
i = i + 1
i += 1

i++

console.log(i)

//operatori increment(++) i decrement(--)

i = 0

console.log(i++)

console.log(++i)

// zna biti na razgovorima za posao
i = 2
let j = 1
i = j++ - i
j += --i - ++j
console.log(i-j)

//operatori usporedivanja == ===

console.log('5' != 4)
console.log(5 != 5)
console.log('5' !== 5)

const uvjet = '5' !== '5'
console.log('uvjet', typeof uvjet, uvjet)

const godine = 18
console.log(godine > 18) //false
console.log(godine >= 18) //true

// logicki operatori
// AND: &&, OR: || (ALT GR = W) i NOT: !

const punoljetan = godine >= 18
console.log(uvjet && punoljetan)

console.log(uvjet || punoljetan)
console.log(uvjet, !uvjet)

//operator spajanja- nadoljepljivanja (concatination)
// +

console.log('Pero ima ' + godine + ' godina')
console.log(`Pero ima ${godine} godina`)

const x = '7', y=5

console.log(x + y)

//spread operator- operator prosirivanja (...)

const niz = [1,2]

console.table(niz)

const noviNiz = [0, ...niz, 3]

console.table(noviNiz)

const osoba = {
    ime: 'Pero',
    prezime: 'Perić'
}

console.table(osoba)

const polaznik = {
    ...osoba,
    edukacija: 'FD'
}

console.table(polaznik)

// suprotno od spread je destructing operator

const [prvi, drugi] = [1,2]

console.log(prvi, drugi)

//destrukcija objekta
const {prezime, ...meniBitno} = polaznik

console.table(meniBitno)

// nullish calescing operator (??)

let sifra 

console.log(sifra ?? 'Šifra nije postavljena')

//. pristupanje svojstvima i metodama

const korisnik = {
    adresa: {
        grad: 'Osijek',
        ulica: 'Trg'
    }
}

console.log(korisnik.adresa.grad.toUpperCase())

//optional chaining operator (?.)- da kod ne pukne

console.log(korisnik?.adresa?.ulica?.toUpperCase() ?? 'Nije postavljeno')
