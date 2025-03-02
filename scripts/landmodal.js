// Open modal when clicking the Land Acknowledgement link
document.getElementById("landAckLink").addEventListener("click", function (e) {
  e.preventDefault();
  document.getElementById("landAckModal").style.display = "block";
});

// Close modal when clicking the close button (×)
document.querySelector(".close").addEventListener("click", function () {
  document.getElementById("landAckModal").style.display = "none";
});

// Close modal if the user clicks outside the modal-content
window.addEventListener("click", function (e) {
  if (e.target === document.getElementById("landAckModal")) {
    document.getElementById("landAckModal").style.display = "none";
  }
});
