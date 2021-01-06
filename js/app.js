const camel = document.querySelector('.camel');

const submitBtn = document.querySelector('.submit-btn')

const resetBtn = document.querySelector('.reset-btn')

const nextBtn = document.querySelector('.next-btn')

let currentTaskIndex = 0;


// functions ---------------------------------------------

function combineStyles(array) {
    let styles = ''
    array.forEach(style => { styles += style + ' ' });
    return styles
}


function resetState() {
    // reset camel's inline styles
    camel.setAttribute('style', '');
    const src_code = document.querySelector('.src-code')
    // clear the textbox
    src_code.value = ""
    // remove error msg if any
    removeErrorMsg()
}


function runCSSCode() {
    // obtain user input css code
    const src_code = document.querySelector('.src-code').value
    if (src_code.length >= 1) {
        const src_code_array = src_code.split('\n')
        // combine them together
        const stylesString = combineStyles(src_code_array);
        // set style attribute
        camel.setAttribute('style', stylesString)
    } else {
        // display error msg
        displayErrorMsg()
    }
}


function displayErrorMsg() {
    const errorMsg = document.querySelector('.error-msg')
    errorMsg.classList.remove('hide')
}


function removeErrorMsg() {
    // remove error msg
    const errorMsg = document.querySelector('.error-msg')
    errorMsg.classList.add('hide')
}


function setNextTask(data) {

    // reset any previous styles and code
    resetState()

    const storyline = document.getElementById('storyline')
    const task = document.getElementById('task')
    const property = document.getElementById('property')
    const hint = document.getElementById('hint')

    storyline.innerText = data.storyline
    task.innerHTML = data.task
    property.innerText = data.property
    hint.innerHTML = data.hint

}


function setNextGraphics(data) {
    const img = document.getElementById('game-img')
    const newImg = `./images/${data.imgFile}`
    img.setAttribute('src', newImg)
    const outerContainer = img.parentElement.parentElement
    const currentClass = outerContainer.classList[0]
    outerContainer.classList.remove(currentClass)
    outerContainer.classList.add(data.className)
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
            const codeEditor = document.querySelector('.code-editor')
            codeEditor.append(prevBtn)

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
}


function displayRestartBtn() {
    // create restart button
    const restartBtn = document.createElement('button')
    restartBtn.classList.add('restart-btn')
    restartBtn.innerText = 'Restart Game'
    const codeEditor = document.querySelector('.code-editor')
    codeEditor.append(restartBtn)

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
}





// --------------------------------------------- event listeners 

nextBtn.addEventListener('click', () => {
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
})

submitBtn.addEventListener('click', () => {
    // reset previous style attribute
    camel.setAttribute('style', '')
    // remove error msg if any
    removeErrorMsg()
    // run CSS code
    runCSSCode()
})

resetBtn.addEventListener('click', resetState)
