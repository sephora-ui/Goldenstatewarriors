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
  "https://people.com/thmb/mgzdHWo5QewmfVMsRxN8nLl2vdQ=/4000x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(886x547:888x549)/Lindsay-Lohan-Steph-Curry-Golden-State-Warriors-Game-020424-01-01bc4c7e01134aa4bfc2d357859e80f2.jpg",
  "https://gssportsacademy.com/nitropack_static/TOWJZaSFUdgvsNpezMpfTSAOGfVeffWs/assets/images/optimized/rev-2f4e534/gssportsacademy.com/wp-content/uploads/bb-plugin/cache/GSW_GSSA_20251111_Spring_Camp_LF_GFX_1080x1350_v4-square-3e23adbcab1db1d0b8635ebb776fd9e6-s4m8jki5udeq.jpg",
  "https://cdn.sanity.io/images/bl383u0v/production/c8f37773ccac0cbd0e8bbd0fc4ee88d901cad4ca-1500x1000.jpg?rect=1,0,1498,1000&w=412&h=275&q=80&fit=max&auto=format&dpr=2.625",
  "https://heavy.com/wp-content/uploads/2025/12/GettyImages-2253537718-e1766717970197.jpg?quality=65&strip=all",
  "https://cdn.nba.com/teams/legacy/www.nba.com/warriors/sites/warriors/files/dream-wish_1.jpg",
  "https://static-www.adweek.com/wp-content/uploads/2025/06/sephora-golden-state-valkyries-game-face.png?w=1024",
  "https://wwd.com/wp-content/uploads/2025/04/sephora-valkyries-1.jpg"
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