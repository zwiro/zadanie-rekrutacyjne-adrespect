const elementsToAnimate = document.querySelectorAll(".scroll-animation");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("opacity-0")) {
          entry.target.classList.add("animate-fadeIn");
          setTimeout(() => {
            entry.target.classList.remove("opacity-0");
          }, 1000);
        }
      }
    });
  },
  { threshold: 0.5 },
);

for (let i = 0; i < elementsToAnimate.length; i++) {
  const elements = elementsToAnimate[i];
  observer.observe(elements);
}
