function countWord() {
  // Get the input text value
  var words = document.getElementById("texts").value;
  // Initialize the word counter
  var count = 0;
  // Split the words on each space character 
  var split = words.split(' ');

  // Loop through the words and  increase the counter when  each split word is not empty
  for (var i = 0; i < split.length; i++) {
    if (split[i] != "") {
      count += 1;
      if (count >= 400) {
        alert("You reach the limit of the words");
        $('texts').keydown(function (e) {
          e.preventDefault();
          return false;
        });
        break
      }
    }
  }
  // Display it as output
  document.getElementById("show").innerHTML = count + "/400";
}


function move(e) {
  e.preventDefault();
  var firstName = document.forms["myForm"]["name"].value; //take the value from forms and more specifically from title
  var lastName = document.forms["myForm"]["lName"].value; //take the value from forms and more specifically from description
  var email = document.forms["myForm"]["email"].value; //take the value from forms and more specifically from Brand
  var texting = document.forms["myForm"]["texts"].value;

  if(firstName != "" && lastName != "" && email != "" && texting != "")
  {
  var i = 0;
  if (i == 0) {
    i = 1;
    var elemt = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(frame, 2);

    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elemt.style.width = width + "%";
      }
    }
  }
  document.getElementById('successMsg').style.visibility = 'visible';
}
}