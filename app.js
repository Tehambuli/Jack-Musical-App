const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.message-container')





/**Jack Harlow's Songs and video links for APP
 * 
 * 1. "Denver"
 * 
 * 2. "Drip Drop"
 * 
 * 3. "Already Friends"
 * 
 * 4. "Heavy Hitter"
 * 
 * 5. "Thru the night"
 * 
 * 6. "Leaf Wraps"
 * 
 * 7. "What's poppin"
 * 
 * 8. "Ghost"
 * 
 * 9. "Tyler Hero"
 * 
 * 10. "Sundown"
 * 
 */



const wordle = 'Devner'


const keys = [
    'Q',
    'W',
    'E',
    'R',
    'T',
    'Y',
    'U',
    'I',
    'O',
    'P',
    'A',
    'S',
    'D',
    'F',
    'G',
    'H',
    'J',
    'K',
    'L',
    'ENTER',
    'Z',
    'X',
    'C',
    'V',
    'B',
    'N',
    'M',
    '«',
]

const guessRows =[
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',],
    ['', '', '', '', '', '', '',]


]

let currentRow = 0
let currentTile = 0
let isGameOver = false


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


   

keys.forEach(key => {
   const buttonElement = document.createElement('button')
   buttonElement.textContent = key
   buttonElement.setAttribute('id', key)
   buttonElement.addEventListener('click',  () => handleClick(key))
   keyboard.append(buttonElement)


})



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


const addLetter = (letter) => {
    if (currentTile < 7  && currentRow < 8) {
    const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
    tile.textContent = letter
    guessRows[currentRow][currentTile] = letter
    tile.setAttribute('data', letter)
    currentTile++

    }

}


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


    if (currentTile === 7){
        
        console.log('guess is ' + guess, 'wordle  is '+ wordle)
        if (wordle == guess){
            showMessage ('Magnificent!')
            isGameOver = true
            return
        } else{
            if(currentRow >= 7){
                isGameOver = false
                showMessage('Game Over')
                return
            }

            if (currentRow < 7) {
                currentRow++
                currentTile = 0
            }

        }
    }

}


const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement )
    setTimeout(() => messageDisplay.removeChild(messageElement), 2000 )
    
}



const flipTile = () => {
    const rowTiles = document.querySelector('guessRow-' + currentRow).childNodes
    rowTiles.forEach((tile, index) => {
            const dataLetter =  tile.getEAttribute('data')

            if (dataLetter == wordle [index]) {
                tile.classList.add('green-overlay')
            }

    })





}