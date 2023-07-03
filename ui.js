function UI() {
  (this.btn_start = document.querySelector(".btn-start")),
    (this.btn_next = document.querySelector(".next-btn")),
    (this.btn_replay = document.querySelector(".btn_replay")),
    (this.btn_quit = document.querySelector(".btn_quit")),
    (this.quiz_box = document.querySelector(".quiz-box")),
    (this.score_box = document.querySelector(".score-box")),
    (this.option_list = document.querySelector(".option-list")),
    (this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`),
    (this.inCorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`),
    (this.time_text = document.querySelector(".time_text")),
    (this.time_second = document.querySelector(".time_second")),
    (this.time_line = document.querySelector(".time_line"));
}

UI.prototype.showQuestion = function (question) {
  let ques = `
<span>${question.questionText}</span>`;
  let options = ``;
  for (let answer in question.answerOptions) {
    options += `    
      <div class="option">
        <span><b>${answer}</b>: ${question.answerOptions[answer]}</span>
      </div>
      `;
  }

  document.querySelector(".question-text").innerHTML = ques;
  this.option_list.innerHTML = options;

  const option = this.option_list.querySelectorAll(".option");

  for (let opt of option) {
    opt.setAttribute("onclick", "optionSelected(this)");
  }
};

UI.prototype.showCountOfQuestions = function (questionOrder, totalQuestion) {
  let tag = `<span class="badge bg-warning">${questionOrder} / ${totalQuestion}</span>`;
  document.querySelector(".quiz-box .question-index").innerHTML = tag;
};

UI.prototype.showScore = function (totalQuestions, correctAnswers) {
  let tag = `${correctAnswers} Correct Answers of Total ${totalQuestions} Questions`;
  document.querySelector(".score-box .score-text").innerHTML = tag;
};
