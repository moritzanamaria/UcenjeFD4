function primjer(prvi, drugi){
    console.log(prvi, drugi)
}

primjer('Edunova', 'Osijek')

function dugiPoziv(){
    let i = 0
    console.log(new Date())
    setTimeout(() => {
        console.log(++i, new Date())



        setTimeout(() => {
            console.log(++i, new Date())



            setTimeout(() => {
                console.log(++i, new Date())
            }, 1000);
        }, 2000);
    }, 5000);
}

dugiPoziv()


async function cekaj(ms){
  return new Promise(resolve => {
    setTimeout(() => {
        resolve(`Završio za ${ms/1000} sekundi`)
    }, ms);
  })  
}

async function izvedi(){
    let odgovor = await cekaj(5000)
    console.log(odgovor)

    for(let i = 0; i < 10; i++){
        console.log(await cekaj((i+1)*1000))
    }
}

izvedi()


;(async () => { 
    console.log('Hello IIFE'); 
    const url = 'https://dog.ceo/api/breeds/image/random'; 
    await fetch(url) 
        .then(response => response.json()) 
        .then(json => { 
            console.log(json.message)
            document.getElementById('slika').src = json.message 
        })
        .catch(rejected => {
            alert('Imamo problema s učitanjem sadržaja, molimo pokušajte kasnije')
        })
    })()