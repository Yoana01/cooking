// Get the image 
let profile = document.getElementById("PicClose");
// Get the image and insert it inside the image - use its "alt" text as a InfoPic
let img = document.getElementById("itemPic");
let modalImg = document.getElementById("RealPic");
let captionText = document.getElementById("InfoPic");
img.onclick = function(){
  profile.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}
// Get the <span> element that closes the image
let span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the profile
span.onclick = function() {
  profile.style.display = "none";
}