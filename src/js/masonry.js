const elem = document.querySelector(".masonry-grid");
const gridItem = document.querySelector(".masonry-grid-item");
imagesLoaded(elem, () => {
  const msnry = new Masonry(elem, {
    itemSelector: ".masonry-grid-item",
    gutter: Number(getComputedStyle(gridItem).getPropertyValue("--gutter")),
  });
});
