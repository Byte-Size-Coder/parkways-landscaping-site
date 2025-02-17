document.addEventListener("DOMContentLoaded", function () {
  // Select all images within the gallery in service pages
  const galleryImages = document.querySelectorAll(".gallery img");

  // Create a lightbox overlay element and image element
  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.classList.add("lightbox-overlay");
  const lightboxImage = document.createElement("img");
  lightboxOverlay.appendChild(lightboxImage);
  document.body.appendChild(lightboxOverlay);

  // Add click listener to each gallery image
  galleryImages.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("click", function () {
      lightboxImage.src = this.src;
      lightboxOverlay.style.display = "flex";
    });
  });

  // Close the lightbox when the overlay is clicked
  lightboxOverlay.addEventListener("click", function () {
    lightboxOverlay.style.display = "none";
  });
});
