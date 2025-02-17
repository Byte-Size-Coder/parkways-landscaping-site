document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  if (carousel) {
    const items = carousel.querySelectorAll(".carousel-item");
    let currentIndex = 0;
    let intervalId;

    const showItem = (index) => {
      items.forEach((item, i) => {
        item.classList.toggle("active", i === index);
      });
    };

    const nextItem = () => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    };

    const prevItem = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    };

    const startAutoTransition = () => {
      intervalId = setInterval(nextItem, 5000);
    };

    const resetTimer = () => {
      clearInterval(intervalId);
      startAutoTransition();
    };

    carousel.querySelector(".carousel-control.next").addEventListener("click", function () {
      nextItem();
      resetTimer();
    });

    carousel.querySelector(".carousel-control.prev").addEventListener("click", function () {
      prevItem();
      resetTimer();
    });

    // Start the auto-transition timer
    startAutoTransition();
  }
});
