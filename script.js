document.addEventListener("click", (event) => {
  bursty(event.pageX, event.pageY);
});

setInterval(() => randomizedConfetti(), 500);

function bursty(x, y) {
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 200 },
    count: 20,
    degree: 360,
    children: {
      fill: { white: "#34E1FF" },
      duration: 2000,
    },
  }).tune({
    x: x,
    y: y,
  });

  burst.replay();
}

function randomizedConfetti() {
  let randomX = Math.floor(
    Math.random() * (document.body.clientWidth - 100) + 0
  );
  let randomY = Math.floor(Math.random() * (window.innerHeight - 200) + 0);
  const burst = new mojs.Burst({
    left: 0,
    top: 0,
    radius: { 0: 200 },
    count: 20,
    degree: 360,
    children: {
      fill: { white: "#34E1FF" },
      duration: 2000,
    },
  }).tune({
    x: randomX,
    y: randomY,
  });

  burst.replay();
}

document.addEventListener("mousemove", function (e) {
  let body = document.querySelector("body");
  let heart = document.createElement("span");
  let x = e.offsetX;
  let y = e.offsetY;

  let size = Math.random() * 50;

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  heart.style.width = 10 + size + "px";
  heart.style.height = 10 + size + "px";

  let transfromValue = Math.random() * 360;

  heart.style.transform = "rotate(" + transfromValue + "deg)";

  body.appendChild(heart);

  setTimeout(function () {
    heart.remove();
  }, 1000);
});

Splitting();
