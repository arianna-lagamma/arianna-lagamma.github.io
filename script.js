document.addEventListener("DOMContentLoaded", () => {
  const carouselWrap = document.querySelector(".work-carousel-wrap");
  const cards = document.querySelectorAll(".work-card");
  const nextBtn = document.getElementById("workNext");
  const backBtn = document.getElementById("workBack");
  const progressFill = document.querySelector(".work-progress-fill");

  let activeIndex = 0;

  function updateCarousel() {
    const card = cards[activeIndex];

    card.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });

    progressFill.style.width = `${((activeIndex + 1) / cards.length) * 100}%`;

    cards.forEach((card, index) => {
      card.classList.toggle("featured-card", index === activeIndex);
    });
  }

  nextBtn.addEventListener("click", () => {
    if (activeIndex < cards.length - 1) {
      activeIndex++;
      updateCarousel();
    }
  });

  backBtn.addEventListener("click", () => {
    if (activeIndex > 0) {
      activeIndex--;
      updateCarousel();
    }
  });

  window.addEventListener("load", () => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  });

  updateCarousel();
});