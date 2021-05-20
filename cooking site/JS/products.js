var allCheckbox = document.querySelectorAll('input[type=checkbox]');//the button
var allProducts = Array.from(document.querySelectorAll('.column'));
var checked = {};//empty object


getChecked('Categories');
getChecked('Price');


//take the forEach function from Array.prototype and call it on links, which is a non-Array object, with some function as its argument.
Array.prototype.forEach.call(allCheckbox, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

//to be visible or invisible
function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

//to change when it is clicked and to call this function
function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) { //map function-all items in an array or object to new array of items.
    return el.value;
  });
}

function setVisibility() {
  allProducts.map(function (el) {
    //if it checked and there is something to be shown on the screen
    var Categories = checked.Categories.length ? _.intersection(Array.from(el.classList), checked.Categories).length : true;
    var Price = checked.Price.length ? _.intersection(Array.from(el.classList), checked.Price).length : true;
    if ( Categories && Price) {
      el.style.display = 'block';// to be shown on the screen 
    } else {
      el.style.display = 'none';//to be hidden
    }
  });
}