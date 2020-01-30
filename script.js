// variables
const button = document.getElementById('button');
const body = document.querySelector('body');
let h, s, l; 

// handler
button.addEventListener('click', test);

// function random color hsl generator
function test() {
    h = Math.floor(Math.random() * 360).toString();
    s = Math.floor(Math.random() * 101).toString();
    l = Math.floor(Math.random() * 101).toString();
    color = `hsl(${h}, ${s}%, ${l}%)`
        body.style.background = color;
    }

// combines handler to the var that grabs the dom element; compare to line 1
// const button = document.getElementById('button').addEventListener('click', test); 