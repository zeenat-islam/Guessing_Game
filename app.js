const searchInput = document.getElementById("searchinput");
const searchBtn = document.getElementById("searchbtn");
const randomNumBox = document.getElementById("randomnumbox");
const userNumBox = document.getElementById("usernumbox");
const result = document.getElementById("result");
const hints = document.getElementById("hints");

let randomNum = Math.floor(Math.random() * 100) + 1;

searchBtn.addEventListener("click", () => {
  const userGuess = searchInput.value.trim();

  // If input is empty, do nothing and return early
  if (userGuess === "") {
    return;
  }

  // Convert to number after checking it’s not empty
  const guess = Number(userGuess);

  // Update HTML normally
  randomNumBox.innerText = randomNum;
  userNumBox.innerText = guess;

  let diff = Math.abs(guess - randomNum);

  if (diff > 30) {
    result.innerText = "😅 Way off!";
  } else if (diff > 10) {
    result.innerText = "🙂 Getting closer!";
  } else if (diff > 0) {
    result.innerText = "🔥 Very close!";
  } else {
    result.innerText = "🎯 Perfect Guess!";
  }

  // Give hints
  if (guess < randomNum) {
    hints.innerText = "Hint: Try a higher number!";
  } else if (guess > randomNum) {
    hints.innerText = "Hint: Try a lower number!";
  } else {
    hints.innerText = "You got it!";
  }
});
