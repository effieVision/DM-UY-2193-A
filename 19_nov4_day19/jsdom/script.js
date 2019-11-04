var heading = document.getElementById("title");
var executeButton = document.getElementById("executeButton");

//addEventListener requires two parameters: the event that is occurring and a callback that includes the event
heading.addEventListener('click', function() {
    alert('you clicked me!!!!');
})

executeButton.addEventListener('click', demonstrationFunction);

//////////////////////////

function demonstrationFunction() {
  alert("Hi there!");
}
