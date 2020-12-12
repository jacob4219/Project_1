// An alert to set the tone and story
alert(
  "Due to the passing of our beloved founder Dr. Goodman, Virtual Desktop Pro (trial edition) will no longer be supported or maintained. The entire VDP(te) team thanks you all for the many years of loyalty. In accordance with Dr. Goodman's last will and testament the site will remain online, in its final state, indefinitely.    - VDP(te) Development Team"
);

///////////////////////////////////////////////////
//// GAME ////
///////////////////////////////////////////////////

// creating constants to be able to attach functions to my buttons
const startButton = document.getElementById("startButton");
const nextButton = document.getElementById("nextButton");
const questionContainerElement = document.getElementById("gameQuestions");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answerButtons");

//shuffle through my questions array
let shuffleQuestions, currentQuestionIndex;

// add event listeners to my game play buttons and allow the next button to go through my questions array.
startButton.addEventListener("click", startGame)
nextButton.addEventListener("click", () => {
  currentQuestionIndex++
  nextQuestion();
});

// clicking the start button makes it and the intro window disappear. It also makes the question container appear and begin on a random question.
function startGame() {
  console.log("The Man In The Machine Has Begun")
  startButton.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove("hide")
  nextQuestion();
}

// allows for a reset state.
function nextQuestion() {
  resetState();
  showQuestion(shuffleQuestions[currentQuestionIndex])
}


function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button")
    button.innerText = answer.text;
    button.classList.add("answerBtn")
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener("click", selectAnswer)
    answerButtonsElement.appendChild(button)
  });
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add("hide")
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct)
  });
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

//////////////////////////////
//// Questions ////
//////////////////////////////

const questions = [
  {
    question: "Is the world changing?",
    answers: [
      { text: "Yes", correct: true },
      { text: "No", correct: false },
    ],
  },
  {
    question: "15 + 15 = ",
    answers: [
      { text: "30", correct: true },
      { text: "90", correct: false },
      { text: "20", correct: false },
      { text: "250", correct: false },
    ],
  },
  {
    question: "Are you sure you want to proceed?",
    answers: [
      { text: "Yes", correct: true },
    ],
  },
  {
    question: "What color is the sky?",
    answers: [
      { text: "green", correct: false },
      { text: "beige", correct: false },
      { text: "red", correct: false },
      { text: "blue", correct: true },      
    ],
  },
  {
    question: "What's cooler than being cool?",
    answers: [
      { text: "The Other Side Of The Pillow", correct: false },
      { text: "Ice Cold", correct: true },
      { text: "Big Cats", correct: false },
      { text: "Big Dogs", correct: false },      
    ],
  },
];



///////////////////////////////////////
//// Icons ////
///////////////////////////////////////
// Chat Icon //
const chatIcon = document.getElementById("vdpChatIcon");

vdpChatIcon.addEventListener("click", clickChat);

function clickChat() {
  alert(
    "Chat is not available in trial mode. Unlock premium now to use this feature!"
  );
}

// Browser Icon //
const browserIcon = document.getElementById("vdpBrowserIcon");

vdpBrowserIcon.addEventListener("click", clickBrowser);

function clickBrowser () {
  alert(
    "Browser is not available in trial mode. Unlock premium now to use this feature!"
  );
}
// Cloud Storage Icon //
const storageIcon = document.getElementById("vdpStorageIcon");

vdpStorageIcon.addEventListener("click", clickStorage);

function clickStorage () {
  alert(
    "Cloud Storage is not available in trial mode. Unlock premium now to use this feature!"
  );
}
// Unlock Premium Icon //
const purchase = document.getElementById("buyPremium");
const openMessage = document.getElementById("chat");

vdpPremiumIcon.addEventListener("click", buyPremium);
closePremiumBtn.addEventListener("click", closePremiumWindow);
closePremiumBtn.addEventListener("click", openChatWindow);

function buyPremium() {
  purchase.classList.remove("hide");
}

function closePremiumWindow() {
  purchase.classList.add("hide");

}



// Open Anonymous Chat and Receive Game Icon //
function openChatWindow () {
    openMessage.classList.remove("hide");
}

const sendMessage = document.getElementById("sendButton");

sendMessage.addEventListener("click", clickSend)

const openPrison = document.getElementById("prison");

sendMessage.addEventListener("click", openPrisonIcon)

function clickSend() {
  alert("VDP(te) no longer supports chat functionality.");
  event.preventDefault();
}

function openPrisonIcon() {
  openPrison.classList.remove("hide")
}

// Open Game //

const openGame = document.getElementById("game")

prisonIcon.addEventListener("click", openGamePlay)

function openGamePlay () {
  openGame.classList.remove("hide")
}

const makeMessage = document.getElementById("startMessage")

prisonIcon.addEventListener("click", createMessage)

function createMessage () {
  makeMessage.classList.remove("hide")
}

startButton.addEventListener("click", removeMessage)

function removeMessage () {
  makeMessage.classList.add("hide")
}

const lockVisual = document.getElementById("visualLock")

startButton.addEventListener("click", onVisual)

function onVisual () {
  lockVisual.classList.remove("hide")
}

startButton.addEventListener("click", trialExpired)
function trialExpired () {
  alert("You have 1 minute remaining on your free trial. Unlock premium to enjoy unlimited VDP!!!");
}

// Timer
startButton.addEventListener("click", timesUP)

function timesUP() {
  alert("Your free trial has expired. Thanks for enjoying Virtual Desktop Pro!")
}

// Clock
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  var d = new Date();
  document.getElementById("clock").innerHTML = d.toLocaleTimeString();
}





/////////////////////////////////////////////////
// Drag Windows ////
/////////////////////////////////////////////////

// const dragAround = document.querySelector("#chat")

// dragAround.addEventListener("mousedown", mousedown)

// function mousedown(e) {
//   window.addEventListener("mousemove", mousemove);
//   window.addEventListener("mouseup", mouseup);

//   let prevX = e.clientX;
//   let prevY = e.clientY;

//   function mousemove(e) {
//     let newX = prevX - e.clientX;
//     let newY = prevY - e.clientY;

//     const rect = dragAround.getBoundingClientRect();

//     dragAround.style.left = rect.left - newX + "px";
//     dragAround.style.top = rect.top - newY + "px";

//     // prevX = e.clientX;
//     // prevY = e.clientY;
//   }

//   function mouseup() {
//     window.removeEventListener("mouseup", mouseup);
//     window.removeEventListener("mousemove", mousemove);
//   }
// }