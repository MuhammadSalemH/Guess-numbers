"use strict";

const numberBox = document.querySelector(".number");
const guessingBox = document.querySelector(".guess");
const check = document.querySelector(".check");
const again = document.querySelector(".again");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const message = document.querySelector(".message");
const changeMsg = function (msg) {
  message.textContent = msg;
};

const generatedNumber = Math.floor(Math.random() * 20 + 1);

check.addEventListener("click", function () {
  if (!+guessingBox.value) {
    message.textContent = "⛔ No number!";
  }
  if (+guessingBox.value === generatedNumber) {
    changeMsg("🎉 Correct answer");
    highScore.textContent = score.textContent;
    document.body.style.cssText = `background-color: #60b347`;
    numberBox.style.cssText = `width: 25rem`;
    numberBox.textContent = generatedNumber;
  }
  if (+guessingBox.value !== generatedNumber) {
    if (score.textContent > "0") {
      changeMsg(
        +guessingBox.value > generatedNumber
          ? (message.textContent = "📉 To high")
          : (message.textContent = "📈 To low")
      );
    } else {
      message.textContent = "🙏 You lost the game";
    }
    score.textContent--;
  }
});

again.addEventListener("click", function () {
  changeMsg("Start guessing...");
  score.textContent = 20;
  highScore.textContent = 0;
  guessingBox.value = "";
  document.body.style.cssText = `background-color: #222`;
  numberBox.style.cssText = `width: 15rem`;
  numberBox.textContent = "?";
});

console.log();
