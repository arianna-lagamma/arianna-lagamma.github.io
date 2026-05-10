const carousel = document.querySelector(".work-carousel");

document.getElementById("workNext").addEventListener("click", () => {
  carousel.scrollBy({
    left: 400,
    behavior: "smooth"
  });
});

document.getElementById("workBack").addEventListener("click", () => {
  carousel.scrollBy({
    left: -400,
    behavior: "smooth"
  });
});
