/**
 * 
 * 
 * 
 * guitarName
 * bodyType
 * scaleLength
 * numFrets
 * pickup
 * 
 * submitBtn
 * 
 * cardRow
 * 
 */

//First pass.  I redid the HTML and tried to be original when writing this.  I had to consult the animalsjs file for the querySelector thing.  I'm having trouble getting the options to display properly.  They display the value when I want them to display the contents between the option tag.  I saw that one way I could do this was to not give the option elements value attributes; but I think that's not good for screen readers.


class Guitar {
    constructor(guitarName, bodyType, scaleLength, numFrets, pickup) {
        this.data = {
            guitarName,
            bodyType,
            scaleLength,
            numFrets,
            pickup
        }
    }


}


const submitBtn = document.getElementById('submitBtn')

submitBtn.addEventListener('click' , (e) => {
    e.preventDefault()

    

    const guitarName = document.getElementById('guitarName').value
    const bodyType = document.getElementById('bodyType').value
    const numFrets = document.getElementById('numFrets').value
    const scaleLength = document.querySelector('input[name="scaleLength"]:checked').value 
    const pickup = document.querySelectorAll('input[name="pickup"]:checked')

    const pickups = [];

    document.querySelectorAll('input[type=checkbox]:checked').forEach((node) => {
        pickups.push(node.value);
    });  //saw this on stack exchange


    const guitar = new Guitar(guitarName, bodyType, scaleLength, numFrets, pickups)

    buildCards(guitar.data)
    console.log(guitar.data)

})






const buildCards = (data) => {
    const cardRow = document.getElementById('cardRow')
    const col = document.createElement('div')
    col.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card')

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')

    const guitarName = document.createElement('h2')
    guitarName.classList.add('card-title', 'text-capitalize')
    guitarName.innerText = data.guitarName


    const bodyType = document.createElement('p')
    bodyType.classList.add('card-text', 'text-capitalize')
    bodyType.innerText = data.bodyType
    // bodyType.innerText.includes('semiHollow') ? bodyType.innerText = `${data.bodyType} Body` : bodyType.innerText = data.bodyType  attempts to fix problem but doesnt

    const numFrets = document.createElement('p')
    numFrets.classList.add('card-text')
    numFrets.innerText = `${data.numFrets} frets`

    const scaleLength = document.createElement('p')
    scaleLength.classList.add('card-text')
    scaleLength.innerText = data.scaleLength
    scaleLength.innerText !== 'other' ? scaleLength.innerText = `${data.scaleLength} inches` : scaleLength.innerText = data.scaleLength

    const pickup = document.createElement('p')
    pickup.classList.add('card-text')
    pickup.innerText =`${data.pickup}`

    cardBody.appendChild(guitarName)
    cardBody.appendChild(bodyType)
    cardBody.appendChild(numFrets)
    cardBody.appendChild(scaleLength)
    cardBody.appendChild(pickup)
    card.appendChild(cardBody)
    col.appendChild(card)
    cardRow.appendChild(col)
