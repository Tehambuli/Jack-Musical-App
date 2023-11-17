const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')


/**Jack Harlow's Songs and video links for APP
 * 
 * 1. "Denver" https://www.youtube.com/watch?v=vq4hRDnGbDY 
 * 
 * 2. "Drip Drop" https://www.youtube.com/watch?v=4-SJyuCFD18
 * 
 * 3. "Already Friends" https://www.youtube.com/watch?v=kM-4va2nuYg 
 * 
 * 
 * 4. "Heavy Hitter" https://www.youtube.com/watch?v=BeFbMwLSszI 
 * 
 * 5. "Thru the night"  https://www.youtube.com/watch?v=wPrEkA_gQp4 
 * 
 * 6. "Leaf Wraps" https://www.youtube.com/watch?v=CsLR0kBny4w 
 * 
 * 
 * 7. "What's poppin" https://www.youtube.com/watch?v=w9uWPBDHEKE 
 * 
 * 8. "Ghost"  https://www.youtube.com/watch?v=GByTR0pBYWE
 * 
 * 
 * 9. "Tyler Hero"  https://www.youtube.com/watch?v=np9Ub1LilKU 
 * 
 *  
 * 10. "Sundown"  https://www.youtube.com/watch?v=N2-dqe8qweY   
 * 
 */

const names = Object.keys(songLookup)
const longestName = names.reduce((longest, name) => Math.max(longest, name.length), 0)
const guessRows = [...Array(7)].map(() => [...Array(longestName)])

function randomIntFromInterval(min, max) { // min and max included 
 return Math.floor(Math.random() * (max - min + 1) + min)
}

var randomIndex = randomIntFromInterval(0, names.length-1)
var wordle = names[randomIndex]

//wordle name//
//const wordle = 'LOVIN'

console.log(
    names,randomIndex,wordle
)

let currentRow = 0
let currentTile = 0
let isGameOver = false

//guess row//

guessRows.forEach((guessRow, guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    
    guessRow.forEach((guess, guessIndex) =>  {
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)
    })

    tileDisplay.append(rowElement)
})

//Key Button//
keys.forEach(key => {
   const buttonElement = document.createElement('button')
   buttonElement.textContent = key
   buttonElement.setAttribute('id', key)
   buttonElement.addEventListener('click',  () => handleClick(key))
   keyboard.append(buttonElement)
})

//handle click//
const handleClick = (letter) => {
    console.log( 'clicked', letter)
    if (letter === '«'){
       deleteLetter()
       console.log('guessRows', guessRows) 
        return
    }
    if (letter === 'ENTER'){
        checkRow()
        console.log('guessRows', guessRows)
        return
    }

    addLetter(letter)
    console.log('guessRows', guessRows)
}


//added letter//

const addLetter = (letter) => {
    if (currentTile < 7  && currentRow < 8) {
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
        tile.textContent = letter
        guessRows[currentRow][currentTile] = letter
        tile.setAttribute('data', letter)
        currentTile++
    }
}

//delete letter//
const deleteLetter =() =>   {
    if (currentTile > 0 ) {
        currentTile--
        const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile )
        tile.textContent = ''
        guessRows[currentRow][currentTile] = ''
        tile.setAttribute('data', '')
    }
}

const checkRow = () => {
    const guess = guessRows[currentRow].join('')

    console.log('guess is ' + guess, 'wordle  is '+ wordle)
    
    flipTile()

    if (songLookup[guess]) {
        showMessage('Magnificent!')
        isGameOver = true
        return
    }

    if (currentRow >= 7) {
        isGameOver = false
        showMessage('Game Over')
        return
    }

    if (currentRow < 7) {
        currentRow++
        currentTile = 0
    }
}

const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement)

    setTimeout(() => {
        messageDisplay.removeChild(messageElement)
        window.open(songLookup[wordle], '_blank')
    }, 3000)
}

//tile stuff-color, flip, and set time per roatation//

const addColorToKey = (keyLetter, color) => {
    const key = document.getElementById(keyLetter)
    key.classList.add(color)
}

const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
    let checkWordle = wordle
    const guess = []

    rowTiles.forEach(tile => {
        guess.push({ letter: tile.getAttribute('data'), color: 'grey-overlay' })
    })

    guess.forEach((guess, index) => {
        if (guess.letter == wordle[index]) {
            guess.color = 'green-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')
        }
    })

    guess.forEach(guess => {
        if (checkWordle.includes(guess.letter)) {
            guess.color = 'yellow-overlay'
            checkWordle = checkWordle.replace(guess.letter, '')
        }
    })

    rowTiles.forEach((tile, index) => {
        // setTimeout(() => {
        tile.classList.add('flip')
        tile.classList.add(guess[index].color)
        console.log(
            "foreach",tile,index,guess
        )
        if(guess[index].letter) {
            addColorToKey(guess[index].letter, guess[index].color)
        }
    })
}