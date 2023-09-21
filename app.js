const tileDisplay = document.querySelector('.tile-container')
const keyboard = document.querySelector('.key-container')


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
    'H',
    '<',
]

keys.forEach (key => {
    const buttonElement = document.createElement('button')
    buttonElement.textContent = key
    keyboard.append(buttonElement)
})