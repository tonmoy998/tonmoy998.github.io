document.addEventListener("DOMContentLoaded", function () {
  // Add 'overflow-hidden' class to the body
  document.body.classList.add("overflow-hidden");
  document.body.classList.add("h-100vh");

  // Remove 'overflow-hidden' class after 3 seconds
  setTimeout(function () {
    document.body.classList.remove("overflow-hidden");
    document.body.classList.remove("h-100vh");
  }, 3000);
});

//loader Animation
const progressText = document.querySelector(".progress-text");
const progressFill = document.querySelector(".progress-fill");
let count = { value: 0 };
anime({
  targets: count,
  value: 100, // Final value to count up to
  round: 1, // Round to 1 decimal place
  easing: "easeInOutQuad", // Use linear easing
  duration: 3000, // Animation duration in milliseconds
  endDelay: 300,
  update: function () {
    // Update the counter element's text content
    progressText.textContent = count.value + "%";
    if (count.value == 100) {
      // progressFill.style.backgroundColor = "rgb(64, 241, 39)";
      // progressText.style.color = "rgb(64 , 241 , 40)";
      anime({
        targets: ".loader",
        // scale: 0,
        translateY: -1000,
        opacity: 0.7,
        easing: "easeInOutQuad",
        height: "0px",
      });
    }
  },
});
//set body width to 100%
anime({
  targets: "body",
  height: "100vh",
  overflow: " ",
  easing: "easeInOutQuad",
  duration: 3000,
});
anime({
  targets: ".progress-fill",
  width: "100%",
  easing: "easeInOutQuad",
  duration: 3000,
});
anime({
  targets: ".loader",
  opacity: 0,
  delay: 3200,
  zIndex: -1,
});

//grid Animation
const grid = document.querySelector(".grid");
let index = 0;
let gridWidth = 22;
let gridHeight = 15;

function createGrid() {
  grid.style.gridTemplateColumns = `repeat(${gridWidth}, 1fr)`;
  for (let i = 0; i < gridWidth; i++) {
    for (let j = 0; j < gridHeight; j++) {
      let gridBox = document.createElement("div");
      gridBox.setAttribute("data-index", index);
      gridBox.setAttribute("onclick", "handleDotClick(event)");
      gridBox.setAttribute("key", `${i}-${j}`);
      gridBox.classList.add("gridBox");
      let dotPoint = document.createElement("div");
      dotPoint.setAttribute("data-index", index);
      dotPoint.classList.add("dot-point");

      gridBox.append(dotPoint);
      grid.append(gridBox);
      index++;
      // console.log("Grid Created!");
    }
  }
}
createGrid();

const handleDotClick = (e) => {
  count = count - 3000;
  console.log(e.target.dataset.index);
  anime({
    targets: ".dot-point",
    scale: [
      { value: 1.35, easing: "easeOutSine", duration: 250 },
      { value: 1, easing: "easeInOutQuad", duration: 500 },
    ],
    translateY: [
      { value: -15, easing: "easeOutSine", duration: 250 },
      { value: 0, easing: "easeInOutQuad", duration: 500 },
    ],
    opacity: [
      { value: 1, easing: "easeOutSine", duration: 250 },
      { value: 0.5, easing: "easeInOutQuad", duration: 500 },
    ],
    delay: anime.stagger(100, {
      grid: [gridWidth, gridHeight],
      from: e.target.dataset.index,
    }),
  });
};

setInterval(() => {
  anime({
    targets: ".dot-point",
    scale: [
      { value: 1.35, easing: "easeOutSine", duration: 250 },
      { value: 1, easing: "easeInOutQuad", duration: 500 },
    ],
    translateY: [
      { value: -15, easing: "easeOutSine", duration: 250 },
      { value: 0, easing: "easeInOutQuad", duration: 500 },
    ],
    opacity: [
      { value: 1, easing: "easeOutSine", duration: 250 },
      { value: 0.5, easing: "easeInOutQuad", duration: 500 },
    ],
    delay: anime.stagger(100, {
      grid: [gridWidth, gridHeight],
      from: getRandomNumber(),
    }),
  });
}, 8000);
function getRandomNumber() {
  var randomNumber = Math.floor(Math.random() * (320 - 1 + 1)) + 1;
  console.log(randomNumber);
  return randomNumber;
}

setInterval(getRandomNumber, 3000);

//square animation

anime({
  target: ".square",
  translateY: 50,
  loop: true,
  duration: 1000,
  delay: 5000,
  opacity: [
    { value: 1, easing: "easeOutSine", duration: 250 },
    { value: 0.5, easing: "easeInOutQuad", duration: 500 },
  ],
  easing: "easeOutSine",
});

let squares = document.querySelector(".squares");
function createSquares() {
  for (let a = 0; a < 10; a++) {
    for (let b = 0; b < 5; b++) {
      let square = document.createElement("div");
      square.classList.add("square");
      squares.append(square);
    }
  }
}
createSquares();
anime({
  targets: ".squares",
  translateY: 50,
  direction: "alternate",
  opacity: [0.7, 1],
  loop: true,
  duration: 5000,
  easing: "easeInOutCubic",
});

anime({
  targets: ".rect-rotate",
  ratate: 360,
  loop: true,
  easing: "easeInOutQuad",
  duration: 3000,
  loop: true,
});
anime({
  targets: ".rect-rotate",
  rotate: 360,
  duration: 4000,
  easing: "linear",
  loop: true,
  direction: "normal",
});
//contact termianl
// const email = document.querySelector("#email");
// const message = document.querySelector("#message");
// const emailRespone = document.querySelector("#emailResponse");
// const terminal = document.querySelector(".terminal");
//
// email.addEventListener("keydown", (e) => {
//   e.preventDefault();
//   if (e.key == "Enter") {
//     emailRespone.innerHTML = `
//                 <div class="terminal-row">
//                   <div class="terminal-response">
//                     <i class="fa-solid fa-circle-check text-green"></i>
//                     <p class="text">${email.value}</p>
//                   </div>
//                 </div>
//     `;
//     const askName = document.querySelector("#askName");
//     askName.innerHTML = `
//                 <p class="text px-1">
//                 Awesome! What's
//                 <span class="text-green">your name?</span>
//                 </p>
//
//     `;
//     const nameBox = document.querySelector("#nameBox");
//     nameBox.innerHTML = `
//
//               <div class="terminal-row">
//                 <div class="zsh-icons">
//                   <i class="fa-solid fa-arrow-right text-green"></i>
//                 </div>
//                 <div class="terminal-user-input">
//                   <p class="text">Enter name :</p>
//                   <input
//                     class="terminal-input text-green"
//                     id="name"
//                     type="text"
//                     name="name"
//                   />
//                 </div>
//               </div>
//                         `;
//   }
// });
//
// name.addEventListener("keydown", (e) => {
//   if (e.key == "Enter") {
//     console.log(true);
//   }
// });
