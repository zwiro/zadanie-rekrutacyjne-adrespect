const expandImagesBtn = document.querySelector("#expand-images-btn");

expandImagesBtn.addEventListener("click", () => {
  const imagesContainer = document.querySelector("#realizacje");
  const imagesOverlay = document.querySelector("#images-overlay");
  if (imagesContainer.classList.contains("max-h-[1000vh]")) {
    expandImagesBtn.innerHTML =
      'Rozwiń <img src="./assets/arrow-down-black.svg" alt="" />';
  } else {
    expandImagesBtn.innerHTML =
      'Zwiń <img src="./assets/arrow-down-black.svg" alt="" class="rotate-180" />';
  }
  imagesOverlay.classList.toggle("opacity-0");
  imagesContainer.classList.toggle("max-h-[1000vh]");
});
