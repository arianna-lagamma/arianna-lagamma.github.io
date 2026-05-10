const carouselWrap = document.querySelector(".work-carousel-wrap");
const cards = document.querySelectorAll(".work-card");
const nextBtn = document.getElementById("workNext");
const backBtn = document.getElementById("workBack");

let activeIndex = 0;

function updateActiveCard() {
  cards.forEach(card => card.classList.remove("featured-card"));
  cards[activeIndex].classList.add("featured-card");

  cards[activeIndex].scrollIntoView({
    behavior: "smooth",
    inline: "center",
    block: "nearest"
  });
}

nextBtn.addEventListener("click", () => {
  if (activeIndex < cards.length - 1) {
    activeIndex++;
    updateActiveCard();
  }
});

backBtn.addEventListener("click", () => {
  if (activeIndex > 0) {
    activeIndex--;
    updateActiveCard();
  }
});

updateActiveCard();
