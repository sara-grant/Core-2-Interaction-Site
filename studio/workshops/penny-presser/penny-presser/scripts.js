// get the elems

var pressButton = document.querySelector('button[name="press"]');

var studentSelect = document.querySelector('select[name="student"]');

var pennySelect = document.querySelector('select[name="penny"]');

var pennyImage = document.querySelector('.penny');


// add event listener to btn
pressButton.addEventListener('click', () => {

    console.log(pennySelect.value);

    // pennyImage.src= 'img/'+ pennySelect.value;

    pennyImage.src='https://' + studentSelect.value + '.interactive.rodeo/studio/workshops/penny-presser/img/' + pennySelect.value;

    console.log(pennyImage);
});


//value
console.log(studentSelect.value);
console.log(pennySelect.value);

// console
console.log(pennyImage);
console.log(pressButton);
