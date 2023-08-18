function toggleMultipleClasses(element, ...classes) {
  classes.forEach((className) => {
    element.classList.toggle(className);
  });
}

// expand images

const expandImagesBtn = document.querySelector("#expand-images-btn");

function expandImagesSection() {
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
}

expandImagesBtn.addEventListener("click", expandImagesSection);

// burger menu

const burgerMenuBtn = document.querySelector("#burger-menu-btn");

function toggleBurgerMenu() {
  if (window.innerWidth > 768) return;
  const menu = document.querySelector("#menu");
  if (menu.classList.contains("invisible")) {
    menu.classList.add("translate-x-0");
    menu.classList.remove("translate-x-full");
    menu.classList.toggle("invisible");
  } else {
    menu.classList.add("translate-x-full");
    menu.classList.remove("translate-x-0");
    setTimeout(() => {
      menu.classList.toggle("invisible");
    }, 300);
  }
  toggleMultipleClasses(
    burgerMenuBtn,
    "rotate-45",
    "before:translate-y-2",
    "before:rotate-90",
    "after:-translate-y-2",
    "after:-rotate-90",
    "before:xl:translate-y-3",
    "after:xl:-translate-y-3",
  );
}

burgerMenuBtn.addEventListener("click", toggleBurgerMenu);

// open searchbar

const openSearchbarBtn = document.querySelector("#open-searchbar-btn");

function openSearchbar() {
  const searchbar = document.querySelector("#searchbar");
  toggleMultipleClasses(
    searchbar,
    "md:invisible",
    "md:w-0",
    "lg:w-48",
    "md:w-32",
  );
}

openSearchbarBtn.addEventListener("click", openSearchbar);
