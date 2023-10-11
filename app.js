
/*Tile Display and Keyboard */

const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')
const messageDisplay = document.querySelector('.key-container')


/**Jack Harlow's song "Drip Drop" */

/**Jack Harlow's song "What's Poppin Remix" */

/**Jack Harlow's song "Already Friends" */

/**Jack Harlow's song "Heavy Hitter " */

/**Jack Harlow's song "Tyler Herro" */

/**Jack Harlow's song "Denver" */



/**Jack Harlow's song Denver */
    const wordle = "Denver"




/*Added keyboard letters */
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
    'M',
    'N',
    '<<',
]


 
/*Guess Rows */

const guessRows = [

    ['', '', '','','','',],
    ['', '', '','','','',],
    ['', '', '','','','',],
    ['', '', '','','','',],
    ['', '', '','','','',],    
]  

let currentRow = 0
let currenttile = 0

guessRows.forEach((guessRow,guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((guess, guessIndex) =>{
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' +guessRowIndex + '-tile-' + guessIndex)
        tileElement.classList.add('tile')
        rowElement.append(tileElement)

    })

    tileDisplay.append(rowElement)

})




/*Keys */

keys.forEach (key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', () => handleClick(key))
    keyboard.append(buttonElement)
})

/**handleClick--named Keys or could be called letters */

const handleClick = (letter ) => {
    console.log('clicked', letter)
    if (letter ==='<<') {
        deleteletter()
        console.log('guessRows, guessRows')
        return
    }

    if(letter === 'ENTER'){
       checkRow()
        console.log('guessRows, guessRows')
        return
    }
    addletter(letter)
    console.log('guessRows, guessRows')
}



/**Added Letter */

const addletter = (letter) => {

if(currenttile <6 && currentRow <7) {
    const tile =  document.getElementById('guessRow-' + currentRow + '-tile-' + currenttile)
    tile.textContent = letter
    guessRows[currentRow][currenttile] = letter
    tile.setAttribute('data', letter)
    currenttile++
    console.log('guessRows' , guessRows)
}

}

/**Delete Letter */

const deleteletter = () => {
    if(currenttile > 0) {
    currenttile--
    const tile =  document.getElementById('guessRow-' + currentRow + '-tile-' + currenttile)
    tile.textContent = ''
    guessRows[currentRow][currenttile] =''
    tile.setAttribute('data', '')
    }

} 

/**Constant Check Row */

const checkRow = () => {
    const guess = guessRows[currentRow].join('')
    if (currenttile === 6){
       
        console.log('guess is ' +  guess, 'wordle is'  +  wordle)
        if(wordle == guess) {
            showMessage('Excellent!')
        }
    }
}

//**Constant Message and Div with Youtube Video */

const showMessage = (message) => {
    const messageElement.createElement('p')
    messageElement.textContent = message

}