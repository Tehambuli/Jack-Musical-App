
/*Tile Display and Keyboard */

const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')


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

    ['', '', '','',],
    ['', '', '','',],
    ['', '', '','',],
    ['', '', '','',],
    ['', '', '','',],    
]  


guessRows.forEach((guessRow,guessRowIndex) => {
    const rowElement = document.createElement('div')
    rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
    guessRow.forEach((guess, guessIndex) =>{
        const tileElement = document.createElement('div')
        tileElement.setAttribute('id', 'guessRow-' +guessRowIndex + '-tile-' + guessIndex)
        rowElement.append(tileElement)

    })

    tileDisplay.append(rowElement)

})



const handleClick = ( ) => {
    console.log('Clicked')
}

/*Keys */

keys.forEach (key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    buttonElement.setAttribute('id', key)
    buttonElement.addEventListener('click', handleClick)
    keyboard.append(buttonElement)
})