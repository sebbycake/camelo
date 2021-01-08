let camel = document.querySelector('.display-camel')

const submitBtn = document.querySelector('.submit-btn')

const resetBtn = document.querySelector('.reset-btn')

const nextBtn = document.querySelector('.next-btn')

const hintBtn = document.querySelector('.hint-btn')

let currentTaskIndex = 0;


// functions ---------------------------------------------

function resetState() {
    // reset camel's inline styles
    camel.setAttribute('style', '');
    // clear existing code by user
    const defaultCode = ".camel { \n    /* Enter CSS Code Below */\n}"
    editor.setValue(defaultCode);
}

function getStyles(stylesArray) {
    let styles = ''
    const index = stylesArray.indexOf("    /* Enter CSS Code Below */")
    for (let i = index + 1; i < stylesArray.length - 1; i++) {
        styles += stylesArray[i].trim() + ' '
    }
    return styles
}

function runCSSCode() {
    const srcCodeArray = editor.getValue().trim().split("\n")
    const stylesString = getStyles(srcCodeArray)
    if (currentTaskIndex === 1) {
        const gameSection = document.querySelector('.game-section')
        gameSection.setAttribute('style', stylesString)
    } else if (currentTaskIndex === 4) {
        const camelImg = document.querySelector('.baby-camel-img')
        camelImg.setAttribute('style', stylesString)
    } else {
        camel.setAttribute('style', stylesString)
    }
}


function setNextTask(data) {

    // reset any previous styles and code
    resetState()

    const storyline = document.getElementById('storyline')
    const challenge = document.getElementById('challenge')
    const hint = document.getElementById('hint')

    // change the class of the camel
    const camelDiv = document.querySelector('.game-section').children[0]
    camelDiv.setAttribute('class', data.className)

    const newCamel = document.querySelector(`.${data.className}`)

    camel = newCamel

    storyline.innerText = data.storyline
    challenge.innerHTML = data.challenge
    hint.innerHTML = data.hint

}


function setNextGraphics(data) {
    const img = document.getElementById('game-img')
    const newImg = `./images/${data.imgFile}`
    img.setAttribute('src', newImg)
    const outerContainer = img.parentElement.parentElement
    outerContainer.setAttribute('class', data.className)
}


function displayPrevBtn() {

    const prevBtnExists = document.querySelector('.prev-btn')

    const restartBtnExists = document.querySelector('.restart-btn')

    if (restartBtnExists && currentTaskIndex !== tasksArray.length - 1) {
        restartBtnExists.remove()
    }

    // between second item and second last item
    if (currentTaskIndex >= 1 && currentTaskIndex < tasksArray.length - 1) {

        if (!prevBtnExists) {
            const prevBtn = document.createElement('button')
            prevBtn.classList.add('prev-btn')
            prevBtn.innerText = 'Previous'
            const innerContainer = document.querySelector('.inner-container')
            innerContainer.append(prevBtn)

            prevBtn.addEventListener('click', () => {
                currentTaskIndex--
                setNextGraphics(graphicsArray[currentTaskIndex])
                setNextTask(tasksArray[currentTaskIndex])
                displayPrevBtn()
            })
        }

        // in case user reaches the last item, causing next btn to be hidden
        // and clicks previous, then re-display the next button
        nextBtn.classList.contains('hide') && nextBtn.classList.remove('hide')

    } else if (currentTaskIndex === 0) {
        // remove prev btn
        prevBtnExists && prevBtnExists.remove()
        // display next btn in case it reaches 
        // last item which causes next btn to be hidden
        nextBtn.classList.remove('hide')
    }

    changeBackgroundColor()
    removeHint()
}


function displayRestartBtn() {
    // create restart button
    const restartBtn = document.createElement('button')
    restartBtn.classList.add('restart-btn')
    restartBtn.innerText = 'Restart Game'
    const innerContainer = document.querySelector('.inner-container')
    innerContainer.append(restartBtn)

    // add eventlistener
    restartBtn.addEventListener('click', () => {
        restartGame()
    })


}


function restartGame() {
    // reset count
    currentTaskIndex = 0
    setNextGraphics(graphicsArray[currentTaskIndex])
    setNextTask(tasksArray[currentTaskIndex])

    // remove restart button
    const restartBtn_ = document.querySelector('.restart-btn')
    restartBtn_.remove()

    // add next button
    nextBtn.classList.remove('hide')

    displayPrevBtn()
    changeBackgroundColor()
}

function changeBackgroundColor() {
    const gameSection = document.querySelector('.game-section')
    if (currentTaskIndex >= 2) {
        gameSection.style.background = "linear-gradient(to left, rgb(255, 126, 95), rgb(254, 180, 123))"
    } else {
        gameSection.style.background = "linear-gradient(to left, rgb(0, 0, 0), rgb(67, 67, 67))"
    }
}

function removeHint() {
    const hint_ = document.getElementById('hint')
    if (!hint_.classList.contains('hide')) {
        hint_.classList.add('hide')
    }
}



// --------------------------------------------- event listeners 

nextBtn.addEventListener('click', () => {
    resetState()
    currentTaskIndex++
    // last item in the array
    if (currentTaskIndex === tasksArray.length - 1) {
        // display restart btn
        displayRestartBtn()
        // hide next button
        nextBtn.classList.add('hide')
    }
    setNextGraphics(graphicsArray[currentTaskIndex])
    setNextTask(tasksArray[currentTaskIndex])
    displayPrevBtn()
    changeBackgroundColor()
    removeHint()
})

submitBtn.addEventListener('click', () => {
    // reset previous style attribute
    camel.setAttribute('style', '')
    // run CSS code
    runCSSCode()
})

resetBtn.addEventListener('click', resetState)

hintBtn.addEventListener('click', () => {
    const hint = document.querySelector('#hint')
    hint.classList.toggle('hide')
})