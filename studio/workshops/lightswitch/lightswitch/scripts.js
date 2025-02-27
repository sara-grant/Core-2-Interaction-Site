// get the button elements

var onButton = document.querySelector('button[name="on"]');

var offButton = document.querySelector('button[name="off"]');

// get lightbulb elems
var lightbulb = document.querySelector('.lightbulb');

// log elems into console
console.log(onButton);
console.log(offButton);
console.log(lightbulb);

// add the is-on class to lightbulb elem


// add event listener to on/off button 

onButton.addEventListener('click', () => {
    lightbulb.classList.add('is-on');
})

offButton.addEventListener('click', () => {
    lightbulb.classList.remove('is-on');
})