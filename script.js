const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const box = document.querySelector(".box");

let degrees = 0;

prev.addEventListener("click", () => {
  degrees += 45;
  box.style = `transform: perspective(1000px) rotateY(${degrees}deg);`;
});

next.addEventListener("click", () => {
  degrees -= 45;
  box.style = `transform: perspective(1000px) rotateY(${degrees}deg);`;
});
