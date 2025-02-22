let count = 1

class Guitar {
    constructor(guitarName, bodyType, scaleLength, numFrets, pickup) {
        this.info = {
            id: count,
            guitarName,
            bodyType,
            scaleLength,
            numFrets,
            pickup
        }
    }

    getDescription(guitarName, bodyType, scaleLength, numFrets, pickup) {
        return `The ${guitarName} is a ${bodyType} guitar.  It has a scale length of ${scaleLength} inches, ${numFrets} frets and ${pickup} pickups.`
    }
}

const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click', (e)=> {
    e.preventDefault()

    let obj = {};
    obj = {...getInfo()}

    const guitar = new Guitar(obj.guitarName, obj.bodyType, obj.scaleLength, obj.numFrets, obj.pickups)
    count++

    buildCard(guitar.info, guitar.getDescription)

})

const getInfo = () => {
    const guitarName = document.getElementById('guitarName').value
    const bodyType = document.getElementById('bodyType').value
    const scaleLength = document.querySelector('input[name="scaleLength"]:checked').value
    const numFrets = document.getElementById('numFrets').value
    const pickup = document.querySelectorAll('input[name="pickup"]')

    let pickups = [];

    pickup.forEach(p => {
        p.checked ? pickups = [...pickups, p.value] : null
    })

    return { guitarName, bodyType, scaleLength, numFrets, pickups }


}

const buildCard = (obj, func)=> {
    const row = document.getElementById('cardRow')

    const col = document.createElement('div')
    col.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card', 'h-100')

    const cardBody = document.createElement('section')
    cardBody.classList.add('card-body')

    const guitarName = document.createElement('h2')
    guitarName.classList.add('card-title', 'text-capitalize')
    guitarName.innerText = obj.guitarName

    const bodyType = document.createElement('p')
    bodyType.classList.add('card-text', 'text-capitalize')
    bodyType.innerText = `Body Type: ${obj.bodyType}`

    const scaleLength = document.createElement('p')
    scaleLength.classList.add('card-text')
    scaleLength.innerText = `Scale Length: ${obj.scaleLength}`

    const numFrets = document.createElement('p')
    numFrets.classList.add('card-text')
    numFrets.innerText = `Number of Frets: ${obj.numFrets}`

    const description = document.createElement('p')
    description.classList.add('card-text')
    description.innerText = func(obj.guitarName, obj.bodyType, obj.scaleLength, obj.numFrets, obj.pickup)

    cardBody.appendChild(guitarName)
    cardBody.appendChild(bodyType)
    cardBody.appendChild(scaleLength)
    cardBody.appendChild(numFrets)
    cardBody.appendChild(description)

    card.appendChild(cardBody)
    col.appendChild(card)
    row.appendChild(col)


}

//Look I did this because I have to work tonight and if I don't I'm going to be fired