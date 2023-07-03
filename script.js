const quiz = new Quiz(questions);
const ui = new UI();

ui.btn_start.addEventListener("click", function () {
  ui.quiz_box.classList.add("active");
  startTimer(10);
  startTimeLine();
  ui.showQuestion(quiz.getQuestion());
  ui.showCountOfQuestions(quiz.questionIndex + 1, quiz.questions.length);

  ui.btn_next.classList.remove("show");
});

ui.btn_next.addEventListener("click", function () {
  if (quiz.questions.length != quiz.questionIndex + 1) {
    quiz.questionIndex += 1;
    clearInterval(counter);
    clearInterval(counterLine);
    startTimer(10);
    startTimeLine();
    ui.showQuestion(quiz.getQuestion());
    ui.showCountOfQuestions(quiz.questionIndex + 1, quiz.questions.length);

    ui.btn_next.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);

    console.log("quiz completed!");
    // quiz.questionIndex = 0;
    ui.quiz_box.classList.remove("active");
    ui.score_box.classList.add("active");
    ui.showScore(quiz.questions.length, quiz.correctQuestionCount);
  }
});

ui.btn_quit.addEventListener("click", function () {
  window.location.reload();
});

ui.btn_replay.addEventListener("click", function () {
  quiz.questionIndex = 0;
  quiz.correctQuestionCount = 0;
  ui.btn_start.click();
  ui.score_box.classList.remove("active");
});

function optionSelected(option) {
  clearInterval(counter);
  clearInterval(counterLine);
  let answer = option.querySelector("span b").textContent;
  let question = quiz.getQuestion();

  console.log(answer);
  console.log(question.checkAnswer(answer));
  if (question.checkAnswer(answer)) {
    quiz.correctQuestionCount += 1;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.inCorrectIcon);
  }

  for (let i = 0; i < ui.option_list.children.length; i++) {
    ui.option_list.children[i].classList.add("disabled");
  }

  ui.btn_next.classList.add("show");
}

let counter;
function startTimer(time) {
  ui.time_text.textContent = "Remaining Time";
  counter = setInterval(timer, 1000);

  function timer() {
    ui.time_second.textContent = time;
    time -= 1;

    if (time < 0) {
      clearInterval(counter);

      ui.time_text.textContent = "duration is over";

      let answer = quiz.getQuestion().correctAnswer;

      for (let option of ui.option_list.children) {
        if (option.querySelector("span b").textContent === answer) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }

        option.classList.add("disabled");
      }

      ui.btn_next.classList.add("show");
    }
  }
}

let counterLine;
function startTimeLine() {
  let line_width = 0;

  counterLine = setInterval(timer, 20); // 1000 for 50 and 100 for 5 or 20 and 1(line_width)

  function timer() {
    ui.time_line.style.width = line_width + "px";
    line_width += 1;

    if (line_width >= 549) {
      clearInterval(counterLine);
    }
  }
}
