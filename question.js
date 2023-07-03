function Question(questionText, answerOptions, correctAnswer) {
  this.questionText = questionText;
  this.answerOptions = answerOptions;
  this.correctAnswer = correctAnswer;

  //   console.log(this);
}

Question.prototype.checkAnswer = function (answer) {
  return answer === this.correctAnswer;
};

let questions = [
  new Question(
    "1-Which one is Javascript Package Management Application?",
    {
      a: "Node.js",
      b: "Typescript",
      c: "Npm",
      d: "Nuget",
    },
    "c"
  ),
  new Question(
    "2-Which one is not one of Frontend Technology?",
    { a: "Css", b: "Html", c: "Javascript", d: "Sql" },
    "d"
  ),
  new Question(
    "3-Which one is one of Backend Technology?",
    { a: "Node.js", b: "Typescript", c: "Angular", d: "React" },
    "a"
  ),
  new Question(
    "4-Which one doesn't use Javascript Programming Language?",
    { a: "React", b: "Angular", c: "Vue.js", d: "Asp.Net" },
    "d"
  ),
];
