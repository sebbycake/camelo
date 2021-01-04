const camel = document.querySelector('.camel');

const submitBtn = document.querySelector('.submit-btn')

const resetBtn = document.querySelector('.reset-btn')

const nextBtn = document.querySelector('.next-btn')

let prevBtn = document.querySelector('.prev-btn')

let currentTaskIndex = 1;

const combineStyles = (array) => {
    let styles = ''
    array.forEach(style => { styles += style + ' '});
    return styles
}

const resetState = () => {
    camel.setAttribute('style', '');
    const src_code = document.querySelector('.src-code')
    // clear the textbox
    src_code.value = ""
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

    if (currentTaskIndex !== 0 && !prevBtn) {
        prevBtn = document.createElement('button')
        prevBtn.classList.add('prev-btn')
        prevBtn.innerText = 'Previous'
        const codeEditor = document.querySelector('.code-editor')
        codeEditor.append(prevBtn)
    } else if (currentTaskIndex === 0) {
        prevBtn.remove()
    }

    prevBtn.addEventListener('click', () => {
        setNextGraphics(graphics[currentTaskIndex-1])
        setNextTask(tasks[currentTaskIndex-1])
        currentTaskIndex--
    })

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


nextBtn.addEventListener('click', () => {
    if (tasks.length > currentTaskIndex + 1) {
        setNextGraphics(graphics[currentTaskIndex])
        setNextTask(tasks[currentTaskIndex])
        currentTaskIndex++
    } else {
        // restart
    }
})

submitBtn.addEventListener('click', () => {
    // reset style attribute
    camel.setAttribute('style', '')
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
        alert('Please enter some CSS code!')
    }
})

resetBtn.addEventListener('click', resetState)



const tasks = [
    {
        storyline: "Cathy the Camel has been walking along Flaming Desert for the past four hours...",
        task: "<strong>Task 1: </strong>Bring Cathy the Camel to the puddle of water to quench its thirst!",
        property: "In this task, we will be using Flexbox properties.",
        hint:"Hint: Experiment with <span class='code-syntax'>justify-content</span> and <span class='code-syntax'>align-items</span> !",
    },
    {
        storyline: "Cathy is not only thirsty, but also super famished from the long walk along Flaming Desert...",
        task: "<strong>Task 2: </strong>Bring Cathy the Camel to the grass patch to feed it some food!",
        property: "In this task, we will still be using Flexbox properties!",
        hint:"Hint: Experiment with <span class='code-syntax'>justify-content</span> and <span class='code-syntax'>align-items</span> !",
    },
    {
        storyline: "Having spent the entire day alone, Cathey decides to find his friend at the other part of the Flaming Desert.",
        task: "<strong>Task 3: </strong>Bring Cathy the Camel to meet his friend!",
        property: "In this task, we will still be using Flexbox properties!",
        hint:"Hint: Experiment with <span class='code-syntax'>justify-content</span> and <span class='code-syntax'>align-items</span> !",
    },
    {
        storyline: "It is getting late at night... Cathy is really exhausted and needed a rest.",
        task: "<strong>Task 4: </strong>Bring Cathy the Camel to the tent for a good night rest!",
        property: "In this task, we will still be using Flexbox properties!",
        hint:"Hint: Experiment with <span class='code-syntax'>justify-content</span> and <span class='code-syntax'>align-items</span> !",
    },
    {
        storyline: "Cathy is not only thirsty, but also super famished from the long walk along Flaming Desert...",
        task: "<strong>Task 5: </strong>Bring Cathy the Camel to the grass patch to feed it some food!",
        property: "In this task, we will still be using Flexbox properties!",
        hint:"Hint: Experiment with <span class='code-syntax'>justify-content</span> and <span class='code-syntax'>align-items</span> !",
    },
]

const graphics = [
    {
        className: 'water',
        imgFile: 'puddle.png',
    },
    {
        className: 'grass',
        imgFile: 'grass.png',
    },
    {
        className: 'camel2',
        imgFile: 'camel2.png',
    },
    {
        className: 'tent',
        imgFile: 'tent.png',
    },
    {
        className: 'grass',
        imgFile: 'grass.png',
    },
]