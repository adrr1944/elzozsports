const questions = [
    {
        question: "من فاز بكأس العالم لكرة القدم 2022؟",
        options: ["البرازيل", "الأرجنتين", "فرنسا", "ألمانيا"],
        answer: "الأرجنتين"
    },
    {
        question: "كم عدد اللاعبين في الفريق الواحد في كرة القدم؟",
        options: ["9", "10", "11", "12"],
        answer: "11"
    },
    {
        question: "من هو أفضل هداف في تاريخ كأس العالم؟",
        options: ["كريستيانو رونالدو", "ليونيل ميسي", "ميروسلاف كلوزه", "رونالدو البرازيلي"],
        answer: "ميروسلاف كلوزه"
    },
    {
        question: "أي فريق فاز بدوري أبطال أوروبا في موسم 2020-2021؟",
        options: ["مانشستر سيتي", "باريس سان جيرمان", "تشيلسي", "ريال مدريد"],
        answer: "تشيلسي"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        const questionContainer = document.getElementById("question-container");
        questionContainer.innerHTML = `
            <p>${currentQuestion.question}</p>
            <div>
                ${currentQuestion.options.map((option) => `
                    <button class="option-button" onclick="checkAnswer('${option}')">${option}</button>
                `).join('')}
            </div>
        `;
    } else {
        showResult();
    }
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.answer) {
        score++;
    }
    currentQuestionIndex++;
    loadQuestion();
}

function showResult() {
    const resultContainer = document.getElementById("result-container");
    resultContainer.innerHTML = `لقد أجبت بشكل صحيح على ${score} من ${questions.length} أسئلة!`;
    document.getElementById("next-button").style.display = "none";
}

document.getElementById("next-button").addEventListener("click", loadQuestion);

loadQuestion();
