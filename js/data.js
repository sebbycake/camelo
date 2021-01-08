// --------------------------------------------- data 

const tasksArray = [
  {
    storyline: "Having wandered too far out, Cathy the Camel is lost deep in the Flaming Desert. Can you help Cathy find her way home?",
    challenge: "<strong>Challenge 1: </strong>Make baby Cathy appear in the Flaming Desert!",
    hint: "Note: Follow CSS Syntax: <code>selector { property: value }</code>. Use the <code>display property</code> to make Cathy appear! <i>Possible values: none, block, inline, inline-block.</i>",
    className: 'display-camel',
    defaultCode: ".camel {<br/>    /* Enter CSS Code Below */<br/>}"
  },
  {
    storyline: "Cathy is finding it hard to see...",
    challenge: "<strong>Challenge 2: </strong>Add color to the Desert for baby Cathy!",
    hint: "Use the <code>background-color</code> property to change its color! <i>Possible values: any colors or their corresponding hexadecimal values.</i>",
    className: 'open-eyes',
    defaultCode: ".camel {<br/>    display: block;<br/>    /* Enter CSS Code Below */<br/>}"
  },
  {
    storyline: "It’s time to get Cathy on her way back!",
    challenge: "<strong>Challenge 3: </strong>Make baby Cathy walk a few steps to the left.",
    hint: "Experiment with the <code>padding</code> property to move Cathy! The magic number is 100. <i>Possible values: any integer in px</i>",
    className: 'walk-left',
    defaultCode: ".camel {<br/>    display: block;<br/>    background-color: #C19A6B;<br/>    /* Enter CSS Code Below */<br/>}"
  },
  {
    storyline: "Flaming Desert is known to be a dangerous place. Before letting Cathy the Camel explore into the woods, let's teach her some survival skills.",
    challenge: "<strong>Challenge 4: </strong>Help baby Cathy build a shelter that can protect her from the wild.",
    hint: "Try using the <code>border</code> property! <i>Possible values: any integer in px (border size) solid (border style) any colors or their corresponding hexadecimal values (border color)</i>",
    className: 'build-shelter',
    defaultCode: ".camel {<br/>    display: block;<br/>    background-color: #C19A6B;<br/>    padding-right:200px;<br/>    /* Enter CSS Code Below */<br/>}"
  },
  {
    storyline: "3 years later... Wow how time flies! Cathy the Camel has finally grown up. To our delight, with the abundance of resources, Cathy has indeed grown to be little more huge than expected",
    challenge: "<strong>Challenge 5: </strong>Show the grown-up Cathy!",
    hint: "Play around with the <code>width</code> and <code>height</code> property! The magic number is 200. <i>Possible values: any number in px</i>",
    className: 'display-grown-up-camel',
    defaultCode: ".camel img{<br/>    /* Enter Code Below */<br/>}"
  },
  {
    storyline: "Under the scorching sun, Cathy is growing fainter...",
    challenge: "<strong>Challenge 6: </strong>Bring Cathy the Camel to the puddle of water to quench its thirst!",
    hint: "We will be using Flexbox property from now. Experiment with <code>justify-content</code> and <code>align-items</code> ! <i>Possible values: flex-start, flex-end, center</i>",
    className: 'camel',
    defaultCode: ".camel {<br/>    display: flex;<br/>    /* Enter Code Below */<br/>}"
  },
  {
    storyline: "Cathy hears a faint growling - it must be her stomach!",
    challenge: "<strong>Challenge 7: </strong>Bring Cathy the Camel to the grass patch to feed it some food!",
    hint: "Experiment with <code>justify-content</code> and <code>align-items</code> ! <i>Possible values: flex-start, flex-end, center</i>",
    className: 'camel',
    defaultCode: ".camel {<br/>    display: flex;<br/>    /* Enter Code Below */<br/>}"
  },
  {
    storyline: "Having spent the entire day alone, Cathey decides to find his friend at the other part of the Flaming Desert.",
    challenge: "<strong>Challenge 8: </strong>Bring Cathy the Camel to meet his friend Boey!",
    hint: "Experiment with <code>justify-content</code> and <code>align-items</code> ! <i>Possible values: flex-start, flex-end, center</i>",
    className: 'camel',
    defaultCode: ".camel {<br/>    display: flex;<br/>    /* Enter Code Below */<br/>}"
  },
  {
    storyline: "It is getting late at night... Cathy is really exhausted and needed a rest.",
    challenge: "<strong>Challenge 9: </strong>Bring Cathy the Camel to the tent for a good night rest!",
    hint: "Experiment with <code>justify-content</code> and <code>align-items</code> ! <i>Possible values: flex-start, flex-end, center</i>",
    className: 'camel',
    defaultCode: ".camel {<br/>    display: flex;<br/>    /* Enter Code Below */<br/>}"
  },

]

const graphicsArray = [
  /* baby camel starts here */
  {
    className: 'display-camel',
    imgFile: '',
  },
  {
    className: 'open-eyes',
    imgFile: '',
  },
  {
    className: 'walk-left',
    imgFile: '',
  },
  {
    className: 'build-shelter',
    imgFile: '',
  },
  {
    className: 'display-grown-up-camel',
    imgFile: '',
  },
  /* grown up camel starts here*/
  {
    className: 'puddle',
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

]


