// console.log('Početak')

// const i = 7

// const rezultat = i + varijabla

// console.log(rezultat)

// console.log('Kraj')

try{
    console.log('Početak')
    const i = 7
    const rezultat = i + varijabla
    console.log(rezultat)
}catch(e){
    console.log('Greška')
    console.log(e.name)
    console.log(e.message)
    console.error(e)
}
console.log('Kraj')

console.log('2. primjer - bolji')

const i = 7
let rezultat = 0
try{
    rezultat = i + varijabla
} catch{
    rezultat = i + 1
} finally{
    console.log(rezultat)
}

console.log('Kraj primjer 2')
/**
 * @throws Ukoliko je broj manji od 0 baca gresku
 * @param {*} broj 
 * @returns 
 */
function korijen(broj){
    if(broj<0){
        throw new Error('Ne mogu izvaditi 2. korijen')
    }
    return Math.sqrt(broj)
}

try {
    console.log(korijen(-9))
} catch (error) {
    console.log(error.message)
}

console.log('Nastavak')

function rekurzija(){
  //  let a = 1, b = 2, c = 3, d = 4, e = 5
  // let s = 'neki dugi tekst da napunimo bateriju'
    brojac++
    rekurzija()
}

let brojac = 0
console.time('rekurzija')
try {
   rekurzija()    
} catch (error) {
    console.log('Stog napunjen nakon broja poziva:', brojac)
}
console.timeEnd('rekurzija')




