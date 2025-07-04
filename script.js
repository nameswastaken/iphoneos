let touchStartX = 0;
let touchEndX = 0;

const lockscreen = document.getElementById("lockscreen");

lockscreen.addEventListener("touchstart", function (e) {
  touchStartX = e.changedTouches[0].screenX;
}, false);

lockscreen.addEventListener("touchend", function (e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, false);

let mouseDownX = null;

lockscreen.addEventListener("mousedown", (e) => {
  mouseDownX = e.clientX;
});

lockscreen.addEventListener("mouseup", (e) => {
  if (mouseDownX !== null) {
    touchStartX = mouseDownX;
    touchEndX = e.clientX;
    handleSwipe();
    mouseDownX = null;
  }
});

function handleSwipe() {
  console.log("Swipe delta:", touchEndX - touchStartX);
  if (touchEndX - touchStartX > 10) {
    document.getElementById("lockscreen").style.display = "none";
    document.getElementById("homescreen").style.display = "block";
  }
}

function openApp(appName) {
  document.querySelector(`.${appName}`).style.display = "block";
  document.querySelector(`.apps-container`).style.display = "block";
  document.getElementById("homescreen").style.display = "none";
}
