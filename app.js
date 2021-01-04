const camel = document.querySelector('.camel');

const submitBtn = document.querySelector('.submit-btn')

const resetBtn = document.querySelector('.reset-btn')

const combineStyles = (array) => {
    let styles = ''
    array.forEach(style => { styles += style + ' '; })
    return styles
}

submitBtn.addEventListener('click', () => {
    // reset style attribute
    camel.setAttribute('style', '')
    // obtain user input css code
    const src_code = document.querySelector('.src-code').value
    if (src_code.length >= 1) {
        const src_code_array = src_code.split('\n')
        // combine them together
        const stylesString = combineStyles(src_code_array);
        // set stylee attribute
        camel.setAttribute('style', stylesString)
    } else {
        // display error msg
        alert('Please enter some CSS code!')
    }
})

resetBtn.addEventListener('click', () => {
    // reset style attribute
    camel.setAttribute('style', '');
    const src_code = document.querySelector('.src-code')
    // clear the textbox
    src_code.value = ""
})
