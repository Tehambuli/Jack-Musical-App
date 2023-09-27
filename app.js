
/*Tile Display and Keyboard */

const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')


/**Jack Harlow's song "Drip Drop" */

/**Jack Harlow's song "What's Poppin Remix" */

/**Jack Harlow's song "Already Friends" */

/**Jack Harlow's song "Heavy Hitter " */

/**Jack Harlow's song "Tyler Herro" */



/**Jack Harlow's song Denver */
    const key = "Denver"




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

/**handleClick */

const handleClick = (key ) => {
    console.log('Clicked', key)
    addletter(key)
}

/**Added Letter */

const addletter = (letter) => {
  const tile =  document.getElementById('guessRow-' + currentRow + '-tile-' + currenttile)
  tile.textContent = letter
  guessRows[currentRow][currenttile] = letter
  tile.setAttribute('data', letter)
  currenttile++
  console.log('guessRows' , guessRows)
}