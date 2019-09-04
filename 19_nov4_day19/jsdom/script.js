var heading = document.getElementById('title')

var name = "Sarah's"

heading.innerText = 'Enter ' + name + ' Information'

document.getElementById('main').innerHTML = '<h3> Hello World Smaller</h3>'

var paragraphs = document.getElementsByTagName('p')

console.log(paragraphs[0].innerText);

//adding an event listener to heading variable

//addEventListener requires two parameters: the event that is occurring and a callback that includes the event
heading.addEventListener('click', function() {
    alert('you clicked me!!!!')
})

//conditionals that compare myInput to the correct guess, letter b

function myFunction(){
    var letter = document.getElementById('myInput').value //.value allows us to grab the input from the text box
    if (letter === 'b'){
        alert('You guessed the correct letter!')
    }else{
        alert('You guessed the wrong letter!')
    }
}

//include a few text boxes in HTML to grab a person's name, an adjective, and a noun

//write a JS function that will concatenate all of the user input into a MAD LIB

// deliver the completed MAD LIB back to the user

function madlib(){
 var noun = document.getElementById('myNoun').value;
 var name = document.getElementById('myName').value;
 var adj = document.getElementById('myAdjective').value;
 alert("Today, " + name + " bought a " + noun + " in a very " + adj + " way");
}






















