function render(data) {
    //what to be shown in the comment section, which is the name of the person who write the comment and the actual comment
    let html = "<div class='commentBox'><span>" + data.name + ": </span>" + data.body + "</div><div class='clear'></div></div>";
    $('#container').append(html);//Insert content to the end of each element in the set of matched elements.
  }
  $(document).ready(function() {
    //creating an array
    let coment = [{
      "name": "Stefanie Muller",
      "body": "It is so tasteful."
    }];
    for (let i = 0; i < coment.length; i++) {
      render(coment[i]);//add the render function  in the array 
    }
  //when the button is clicked to be taken the value of body(the comment)
    $('#addComent').click(function() {
      let addObj = {
        "name": $('#name').val(),
        "body": $('#bodyText').val()
      };
      coment.push(addObj);//this adds this element to the end of an array and returns the new length of the array.
      render(addObj);
      //again to became empty 
      $('#name').val('');
      $('#bodyText').val('');
    });
  });

  let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
//To Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Aslides");//getting this element(the picture and the number of the picture)
  let dots = document.getElementsByClassName("dot");//getting this element(the dot bellow)
  //to move to the next image and if it finished to have to loop again
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

