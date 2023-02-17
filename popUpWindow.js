// Get the button that opens the pop-up window
var createPostBtn = document.getElementById("create-post-btn");

// Get the pop-up window
var popup = document.getElementById("create-post-popup");

// Get the close button
var closeBtn = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the pop-up window
createPostBtn.onclick = function() {
  popup.style.display = "block";
}

// When the user clicks on the close button, close the pop-up window
closeBtn.onclick = function() {
  popup.style.display = "none";
}

// When the user clicks outside of the pop-up window, close it
window.onclick = function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
}
