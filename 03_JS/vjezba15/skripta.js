class Osoba{
//
    #ime 
//
    get ime(){return this.#ime}
    set ime(s){this.#ime=s}
//
    constructor(ime=''){
        this.#ime+=ime
    }
}
//


const osoba = new Osoba()
osoba.ime = 'Pero'

const oJson = {
    ime: ''
}

oJson.ime = 'Patricija'

console.log(osoba.ime, oJson.ime)

const o = new Osoba('Marko')
console.log(o.ime)

const datum = new Date(2026,0,1)

console.log(datum.toLocaleString('hr-HR'))

class Polaznik extends Osoba{
    #odradioObaveze
    get odradioObaveze(){return this.#odradioObaveze}
    set odradioObaveze(b){this.#odradioObaveze=b}
    constructor(ime='', oo=false){
        super(ime)
        this.#odradioObaveze=oo
    }
}

const polaznik = new Polaznik()
polaznik.ime = 'Darija'
polaznik.odradioObaveze = true

console.log(`${polaznik.ime} ${polaznik.odradioObaveze ? 'je' : 'nije'} odradio obaveze`)

console.log(polaznik)
console.log(`${polaznik}`)

class Predavac extends Osoba{
    #vrsta
    get vrsta(){return this.#vrsta}
    set vrsta(s){this.#vrsta=s}
    toString(){
        return `${this.#vrsta} ${super.ime}`
    }
}

const pr = new Predavac()
pr.ime = 'Gordana'
pr.vrsta = 'Vanjska suradnica'

console.log(`${pr}`)

class Pomocno{
    static slucajniBroj(odBroja=0, doBroja=0){
    if (odBroja && doBroja) {
        return (Math.random() * (doBroja - odBroja) + odBroja).toFixed(0)
    }
    if (odBroja && !doBroja) {
        return (Math.random() * odBroja).toFixed(0)
    }

    return Math.random()
} 
}

console.log(Pomocno.slucajniBroj(2,8))
console.log(Pomocno.slucajniBroj(10))
console.log(Pomocno.slucajniBroj())

console.log(Math.random())
console.log(Date.now())
