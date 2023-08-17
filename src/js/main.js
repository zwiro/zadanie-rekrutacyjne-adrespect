const expandImagesBtn = document.querySelector("#expand-images-btn");

expandImagesBtn.addEventListener("click", () => {
  const imagesContainer = document.querySelector("#realizacje");
  const imagesOverlay = document.querySelector("#images-overlay");
  if (imagesContainer.classList.contains("max-h-[1000vh]")) {
    expandImagesBtn.innerHTML =
      'Rozwiń <img src="./assets/arrow-down-black.svg" alt="" />';
    imagesContainer.classList.add("max-h-[200vh]");
  } else {
    expandImagesBtn.innerHTML =
      'Zwiń <img src="./assets/arrow-down-black.svg" alt="" class="rotate-180" />';
    imagesContainer.classList.remove("max-h-[200vh]");
  }
  expandImagesBtn.classList.toggle("bg-gray/50");
  imagesOverlay.classList.toggle("opacity-0");
  imagesContainer.classList.toggle("max-h-[1000vh]");
});
