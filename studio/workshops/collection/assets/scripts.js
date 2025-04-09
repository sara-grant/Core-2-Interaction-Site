// get entries
var request = await fetch('assets/entries.json');
var entries = await request.json();

console.log(entries);

// get input elems
var locationSelect = document.querySelector('select[name="location"]');

var colorSelect = document.querySelector('select[name="color"]');

var subjectSelect = document.querySelector('select[name="subject"]');

console.log(locationSelect, colorSelect, subjectSelect);

// get submit btn
var submitButton = document.querySelector('button[name="submit"]');

console.log(submitButton);

// get output elm
var output = document.querySelector('.output');

console.log(output);

// add event listener to the button
submitButton.addEventListener('click', () => {
    
    // get the active settings
    var location = locationSelect.value;
    var color = colorSelect.value;
    var subject = subjectSelect.value;

    console.log(location, color, subject);

    // get matching entry img
    var matchingEntry = entries.find((entry) => {
        return entry.location == location
            && entry.color == color
            && entry.subject == subject;
    });

    console.log(matchingEntry);

    if (matchingEntry) {
        output.innerHTML = `<img class="image "src="img/${matchingEntry.filename}">`;
    } else {
        output.innerHTML = `<div class="message">no results :( </div>`;
    }
})