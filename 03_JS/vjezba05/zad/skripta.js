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

    if (a === b && b === c) {
        rezultat.innerHTML = 'Svi su jednaki';
    } else if (a > b && a > c) {
        rezultat.innerHTML = a
    } else if (b > a && b > c) {
        rezultat.innerHTML = b
    } else {
        rezultat.innerHTML = c
    }

    rezultat.style.color = 'green'

    //zavrsava drugi zadatak

     if (zadatak === '3')
    //pocinje treci zadatak

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


    if (a < b && a < c && a < d) {
        rezultat.innerHTML = a
    } else if (b < a && b < c && b < d) {
        rezultat.innerHTML = b
    } else if (c < a && c < b && c < d) {
        rezultat.innerHTML = c
    } else {
        rezultat.innerHTML = d
    }
    rezultat.style.color = 'green'

    //zavrsava treci zadatak

    //zavrsava click
})




