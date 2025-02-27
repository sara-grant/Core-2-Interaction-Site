// get the elems

var pressButton = document.querySelector('button[name="press"]');

var pennySelect = document.querySelector('select[name="penny"]');

var pennyImage = document.querySelector('.penny');


// add event listener to btn
pressButton.addEventListener('click', () => {

    console.log(pennySelect.value);

    pennyImage.src= 'img/'+ pennySelect.value;

    console.log(pennyImage);
});

// console
console.log(pressButton);
