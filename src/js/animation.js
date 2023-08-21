const elementsToAnimate = document.querySelectorAll(".scroll-animation");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("scroll-animation--fadeIn")) {
          entry.target.classList.add("animate-fadeIn");
        } else if (
          entry.target.classList.contains("scroll-animation--slideFromLeft")
        ) {
          entry.target.classList.add("lg:animate-slideFromLeft");
        } else if (
          entry.target.classList.contains("scroll-animation--slideFromRight")
        ) {
          entry.target.classList.add("lg:animate-slideFromRight");
        } else if (
          entry.target.classList.contains("scroll-animation--slideFromBottom")
        ) {
          entry.target.classList.add("lg:animate-slideFromBottom");
        }
        setTimeout(() => {
          entry.target.classList.remove("opacity-0");
        }, 1000);
      }
    });
  },
  { threshold: 0.5 },
);

for (let i = 0; i < elementsToAnimate.length; i++) {
  const elements = elementsToAnimate[i];
  observer.observe(elements);
}
