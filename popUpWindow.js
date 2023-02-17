// Get the modal and the button
var modal = document.querySelector(".modal");
var button = document.getElementById("create-post-button");

// Show the modal when the button is clicked
button.addEventListener("click", function() {
  modal.style.display = "block";
});

// Hide the modal when the "Cancel" button is clicked
modal.querySelector(".cancel").addEventListener("click", function() {
  modal.style.display = "none";
});


