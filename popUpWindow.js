// Get the pop-up window
var popup = document.getElementById("myForm");

// When the user clicks the button, open the pop-up window
function openForm() {
  popup.style.display = "block";
}

// When the user clicks on the close button, close the pop-up window
function closeForm() {
  popup.style.display = "none";
}

// When the user clicks outside of the pop-up window, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
};

