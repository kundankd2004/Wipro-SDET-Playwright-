const quiz = [
    {
        question: "Capital of India?",
        answer: "Delhi"
    },
    {
        question: "2 + 2 ?",
        answer: "4"
    }
];

let userAnswers = ["Delhi", "4"];

let score = 0;

for (let i = 0; i < quiz.length; i++) {
    if (userAnswers[i] === quiz[i].answer) {
        score++;
    }
}

console.log("Final Score:", score);