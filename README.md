# Jack-Musical-App
I am making a musical app for an artist in December that I am going to see. I will be keeping the app simple and it will be a wordle twist but with song titles.
I've added extra, once the word has been guessed, the song will play after. Not sure if it will go to youtube video or personal play list!
I will have the guessed word go to Youtube video/s. I have 6 songs but I think it might be best to go to ten. Depends on how easy it will be to add the Youtube link and timing of the APP.
Not sure how to add the youtube videol links!

I have cleaned out the code and I am restarting becasue I am too fucking dumb to get this right the first timne..,.I'M STARTING ALL OVET AGAIN! THE CODE HAS BEEN DELETED!
I've have delete this again, because it is not working! I am going to start this code again!

This APP needs to done by the end of the week. I need to start working on revising my Python project for my personal portfolio!

APP will be finished tomorrow and reviewed by mentor Jessamy!






//message displaying //


const showMessage = (message) => {
    const messageElement = document.createElement('p')
    messageElement.textContent = message
    messageDisplay.append(messageElement )
    setTimeout(() => {
        messageDisplay.removeChild(messageElement)
        window.location.replace(songLookup[wordle])
    }, 5000 )
    
}



//add color to key//

const addColorToKey =(keyLetter, color) => {
    const key = document.getElementById(keyLetter)
    key.classList.add(color)

}




//flip tile//


const flipTile = () => {
    const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
    rowTiles.forEach((tile, index) => {
            const dataLetter = tile.getAttribute('data')




//add color to key//







//Timer//

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
