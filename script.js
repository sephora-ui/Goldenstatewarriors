// =========================
// FADE-IN ON SCROLL (OPTIMIZED)
// =========================
const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.15
});

fadeElements.forEach(el => observer.observe(el));


// =========================
// AUTO-CHANGING IMAGE SHOWCASE (WOW FEATURE)
// =========================
const images = [
  "Pic 6.jpg",
  "Pic 2.png",
  "Pic 1.jpg",
  "Pic 3.jpg",
  "Pic 4.jpg",
  "Pic 5.jpg"
];
let imgIndex = 0;
const changingImage = document.getElementById("changing-image");

function changeImage() {
  if (!changingImage) return;

  imgIndex = (imgIndex + 1) % images.length;

  changingImage.style.opacity = 0;
  changingImage.classList.remove("active");

  setTimeout(() => {
    changingImage.src = images[imgIndex];

    changingImage.style.opacity = 1;
    changingImage.classList.add("active");
  }, 500);
}

// start with active effect
if (changingImage) {
  changingImage.classList.add("active");

// change every 4 seconds
setInterval(changeImage, 4000);


// =========================
// COUNTDOWN TIMER (FIXED)
// =========================
function startCountdown() {
  const timer = document.getElementById("timer");
  if (!timer) return;

  let time = 3600; // 1 hour

  setInterval(() => {
    if (time <= 0) {
      timer.innerHTML = "EXPIRED";
      return;
    }

    let minutes = Math.floor(time / 60);
    let seconds = time % 60;

    timer.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    time--;
  }, 1000);
}

startCountdown();


// =========================
// OPTIONAL: SMOOTH NAV SCROLL (POLISH)
// =========================
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (href.startsWith("#")) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});
