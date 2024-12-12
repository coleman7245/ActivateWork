let body = document.body;
let correctAnswerElement = document.createElement("p");
body.append(correctAnswerElement);
body.firstChild.textContent = "Guess That Number!";
let correctAnswer = Math.floor(Math.random() * 100);


let userAnswer = window.prompt("Enter the correct number between 0 and 100.");

while (userAnswer !== correctAnswer) {
    userAnswer = window.prompt(`${userAnswer} is incorrect. Please try another guess.`);
    body.firstChild.textContent = correctAnswer;
    //console.log(body.firstChild.textContent);
}

window.alert("You win!");

