const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')





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



const wordle ='Devner'


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



const handleClick = (key) => {
    console.log( 'clicked', key)
    addLetter(key)
}


const addLetter = (letter) => {
    const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
    tile.textContent = letter
    guessRows[currentRow][currentTile] = letter
    currentTile++
    console.log('guessRows', guessRows)


}