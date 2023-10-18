//Magic 8 Ball

//Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let randNum = Math.random();
  let question = document.getElementById("question-in").value;
  console.log(randNum);

  if (question === "Does a magic 8 ball actually work?") {
    document.getElementById("answer-out").innerHTML = `How dare you doubt me!`;
  } else if (question === "Is JavaScript awesome?") {
    document.getElementById("answer-out").innerHTML = `Of Course!`;
  } else if (question === "") {
    document.getElementById("answer-out").innerHTML = `Please ask a question`;
  } else {
    if (randNum < 0.2) {
      document.getElementById("answer-out").innerHTML = `Without a Doubt`;
    } else if (randNum < 0.4) {
      document.getElementById("answer-out").innerHTML = `As I see it, yes`;
    } else if (randNum < 0.6) {
      document.getElementById(
        "answer-out"
      ).innerHTML = `Concentrate and ask again`;
    } else if (randNum < 0.8) {
      document.getElementById("answer-out").innerHTML = `Don't count on it`;
    } else {
      document.getElementById("answer-out").innerHTML = `Outlook not so good`;
    }
  }
}
