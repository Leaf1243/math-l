const quizData = [
    {
        question: "現在0時0分を指しているアナログ時計があります。次に長針と短針が重なるのは何時何分でしょう。分は少数第三位を四捨五入してください。",
        answer: "1時5.46分"
    },
    {
        question: "一辺の長さが1の正二十面体の体積を求めてください。",
        answer: "5(3+√5)/12"
    },
    {
        question: "aを0以外の定数とする。xy軸平面上の点P(0,a)と y=(x^2)/a上の点Qとの距離PQが最小となる点Qの座標を求めてください。なお、答えはx座標の小さい順に()と()の間には半角スペースを入れて書いてください。";
        answer: "(-√2a/2,a/2) (√2a/2,a/2)"
    },
    {
        question: "e^iθ=cosθ+isinθ にθ=π を代入した際のe^iπを求めてください。";
        answer: -1
    }
    {
        question: "パスカルの三角形において最も上の頂点の1を1行目、2行目を1 1とする場合、30行目にある数学の和を求めてください。";
        answer: "2^29"
    }
    // 他の問題を追加
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const submitButton = document.getElementById('submit-button');
const feedbackElement = document.getElementById('feedback');
const scoreElement = document.getElementById('score');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.innerText = currentQuizData.question;
    answerElement.value = '';
    feedbackElement.innerText = '';
}

function checkAnswer() {
    const userAnswer = parseInt(answerElement.value);
    const currentQuizData = quizData[currentQuestion];
    if (userAnswer === currentQuizData.answer) {
        score++;
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
        } else {
            showScore();
        }
    } else {
        document.getElementById("a").innerHTML = "<span style='color: red;'>Game over</span>";
    }
}

function showScore() {
    questionElement.innerText = `全問正解しました！スコア: ${score}/${quizData.length}`;
    answerElement.style.display = 'none';
    submitButton.style.display = 'none';
}

submitButton.addEventListener('click', checkAnswer);
loadQuestion();