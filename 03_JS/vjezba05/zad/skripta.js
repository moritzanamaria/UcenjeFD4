const rezultat = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click', () => {
    rezultat.innerHTML = ''
    const aString = document.getElementById('a').value
    const bString = document.getElementById('b').value
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value

    const zadatak = document.getElementById('zadatak').value

    if (zadatak === '1') {
        // pocinje prvi zadatak
        if (!aString) {
            rezultat.innerHTML = 'Unesite vrijednost A'
            rezultat.style.color = 'red'
            return
        }

        const a = Number(aString)

        if (!a) {
            rezultat.innerHTML = 'A nije broj'
            rezultat.style.color = 'red'
            return
        }


        if (!bString) {
            rezultat.innerHTML = 'Unesite vrijednost B'
            rezultat.style.color = 'red'
            return
        }

        const b = Number(bString)

        if (!b) {
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color = 'red'
            return
        }

        //rezultat.innerHTML = a > b ? a : b
        if (a === b) {
            rezultat.innerHTML = 'Jednaki su'
        } else if (a > b) {
            rezultat.innerHTML = a
        } else {
            rezultat.innerHTML = b
        }
        rezultat.style.color = 'green'

        //zavrsava prvi zadatak
    }
    if (zadatak === '2')
        //pocinje drugi zadatak
        if (!cString) {
            rezultat.innerHTML = 'Unesite vrijednost C'
            rezultat.style.color = 'red'
            return
        }

    const c = Number(cString)

    if (!c) {
        rezultat.innerHTML = 'C nije broj'
        rezultat.style.color = 'red'
        return
    }


    if (!dString) {
        rezultat.innerHTML = 'Unesite vrijednost D'
        rezultat.style.color = 'red'
        return
    }

    const d = Number(dString)

    if (!d) {
        rezultat.innerHTML = 'D nije broj'
        rezultat.style.color = 'red'
        return
    }

    //rezultat.innerHTML = c > d ? c : d
    if (c === d) {
        rezultat.innerHTML = 'Jednaki su'
    } else if (c > d) {
        rezultat.innerHTML = c
    } else {
        rezultat.innerHTML = d
    }
    rezultat.style.color = 'green'

    //zavrsava drugi zadatak
    //zavrsava click
})




