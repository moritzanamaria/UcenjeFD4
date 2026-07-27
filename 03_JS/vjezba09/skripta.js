console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')


console.log('======================')

for (let i = 0; i < 10; i++) {
    console.log('Edunova')
}

console.log('======================')


for (let i = 0; i < 10; i++) {
    console.log(`i=${i + 1}`)

}

console.log('======================')

let suma = 0

for (let i = 0; i < 100; i++) {
    suma += i + 1
    // debugger
}

console.log(suma)
console.log((100 * (100 + 1)) / 2)

console.log('======================')

for (let i = 10; i > 0; i--) {
    console.log(i)
}

for (let i = 7; i < 20; i += 2) {
    console.log(i)
}

console.log('======================')

const pocetak = 7
const kraj = 20
const uvecanje = 2

for (let i = pocetak; i < kraj; i += uvecanje) {
    console.log(i)
}

for (let i = kraj; i < pocetak; i++) {
    console.log('Ovo se ne ispisuje jer nije usao u petlju')
}

console.log('======================')

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}

console.log('======================')
suma = 0
for (let i = 7; i <= 77; i++) {
    if (i % 2 === 1) {
        suma += i
    }

}
console.log(suma)


let prim = true
const broj = 720000

for (let i = 2; i < broj; i++) {
    if (broj % i === 0) {
        prim = false
        break
    } else {
        if (i % 10000 === 0) {
            console.log(i)
        }
    }
}
console.log(prim ? 'PRIM' : 'NIJE PRIM')

console.log('======================')


for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue
    }
    if (i === 7) {
        break
    }
    console.log(i)
}

document.write('<table>')
for(let i=1;i<=10;i++){
    document.write('<tr>')
    for(let j=1;j<=10;j++){
        document.write(`<td>${i*j}</td>`)
    }
    document.write('</tr>')

}
document.write('</table>')

console.log('======================')

const niz = ['Marija', 'Zvonko', 'Ana', 'Miro', 'Tena']

for(let i=0;i<niz.length;i++){
    console.log(niz[i])
}

for(let i=niz.length-1;i>0;i--){
    console.log(niz[i])
}

console.log('======================')

const osobe = [
    {
        ime: 'Anamaria',
        prezime: 'Moritz',
        godine: 32
    },
    {
        ime: 'Borna',
        prezime: 'Vrandečić',
        godine: 33
    },
    {
        ime: 'Lenny',
        prezime: 'Moritz',
        godine: 9
    }
]
suma=0
for(let i=0;i<osobe.length;i++){
    suma+=osobe[i]?.godine ?? 0
}
console.log(suma)

suma=0
for(const o of osobe){
    suma += o?.godine ?? 0
}

console.log(suma)

const ime ='Nina'
for(const z of ime){
    console.log(z, z.charCodeAt(0));
    document.write(`&#${z.charCodeAt(0)}`);
}

let brojac = 0
document.write('<hr><h1>')
for(;;){
    document.write(`&#${++brojac};<br></br>`)
    if(brojac>65535){
        break
    }

}
document.write('</h1>')