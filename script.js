// reveal animation
const cards = document.querySelectorAll(".card");

function reveal() {
  const screenBottom = window.innerHeight * 0.85;

  cards.forEach((card, index) => {
    const rect = card.getBoundingClientRect().top;
    if (rect < screenBottom) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.transitionDelay = index * 0.1 + "s";
    }
  });
}

window.addEventListener("scroll", reveal);
reveal();

// Mobile Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}
