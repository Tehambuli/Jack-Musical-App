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




const songLookup = {
    //'DENVER': 'https://www.youtube.com/watch?v=vq4hRDnGbDY',
    // Add the rest of the songs in the same format
    //'DRIP DROP': ' https://www.youtube.com/watch?v=4-SJyuCFD18',
    //'GHOST': 'https://www.youtube.com/watch?v=GByTR0pBYWE',
    //'SUNDOWN': 'https://www.youtube.com/watch?v=N2-dqe8qweY',  
    //'ALREADY FRIENDS': 'https://www.youtube.com/watch?v=BeFbMwLSszI',
    //'Heavy Hitter': 'https://www.youtube.com/watch?v=BeFbMwLSszI' 
    //'Thru the night': ' https://www.youtube.com/watch?v=wPrEkA_gQp4' 
    // 'Leaf Wraps' : 'https://www.youtube.com/watch?v=CsLR0kBny4w' 
    //'POPPIN':   'https://www.youtube.com/watch?v=w9uWPBDHEKE' 
    // 'Tyler Hero':   'https://www.youtube.com/watch?v=np9Ub1LilKU'
    //'Lovin on me': 'https://www.youtube.com/watch?v=Iq8h3GEe22o'

};

//function randomIntFromInterval(min, max) { // min and max included 
   // return Math.floor(Math.random() * (max - min + 1) + min)
  //}



const wordle = 'POPPIN'




/**These are the keys*/
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

 /*
    if (currentTile === 7){*/
        
        console.log('guess is ' + guess, 'wordle  is '+ wordle)
        flipTile()
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
    // }

}


const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement )
    setTimeout(() => {
        messageDisplay.removeChild(messageElement)
        window.location.replace(songLookup[wordle])
    }, 5000 )
    
}



const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
    rowTiles.forEach((tile, index) => {
            const dataLetter = tile.getAttribute('data')


    setTimeout(() => {
            if (dataLetter == wordle [index]) {
                tile.classList.add('plum-overlay')
            }   else if (wordle.includes(dataLetter)) {
            tile.classList.add('palevioletred-overlay')
            }   else {
                tile.classList.add('purple')
            }

        }, 500 * index)

    })
}
