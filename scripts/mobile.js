document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
  const mobileNavMenu = document.querySelector(".mobile-nav .nav-menu");

  mobileMenuToggle.addEventListener("click", function () {
    mobileNavMenu.classList.toggle("active");
  });
});
