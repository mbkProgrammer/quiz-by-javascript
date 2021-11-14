let quizIndex = 0
let quiz = [{
        question: "بزرگترین شهر ایران؟ ",
        awnser1: "اصفهان",
        awnser2: "تهران",
        awnser3: "شیراز",
        awnser4: "مشهد",
        correct: "awnser1",
        score: 10
    },
    {
        question: "زیباترین شهر ایران؟ ",
        awnser1: "اصفهان",
        awnser2: "تهران",
        awnser3: "شیراز",
        awnser4: "مشهد",
        correct: "awnser1",
        score: 20
    },
    {
        question: "تاریخی ترین شهر ایران؟ ",
        awnser1: "اصفهان",
        awnser2: "تهران",
        awnser3: "شیراز",
        awnser4: "مشهد",
        correct: "awnser3",
        score: 20
    },
    {
        question: "پیشرفته ترین شهر ایران؟ ",
        awnser1: "اصفهان",
        awnser2: "تهران",
        awnser3: "شیراز",
        awnser4: "مشهد",
        correct: "awnser1",
        score: 20
    },
]
let userAnswer = []

const submitTheQuestionAnswer = (event) => {
    event.preventDefault()
    let userQuestionAwnser = document.querySelector('input[name="awnser_question"]:checked').value
    userAnswer.push({ awnser: userQuestionAwnser })
    quizIndex += 1
    showQuizHTML()
}

const startQuiz = () => {
    quizIndex = 0
    showQuizHTML()
    document.getElementById("start_button").classList.add("active")
    document.getElementById("quiz_container").classList.add("active")
}

const showQuizHTML = () => {
    if (quizIndex < quiz.length) {
        document.querySelector("#quiz_container").innerHTML = (`
        <form onsubmit="submitTheQuestionAnswer(event)" class="quiz_container">
            <h1>${quizIndex +1}</h1>
            <h1>${quiz[quizIndex].question}</h1>
            <div>
                <input type="radio" name="awnser_question" id="awnser1" value="awnser1">
                <label for="awnser1">${quiz[quizIndex].awnser1}</label>
            </div>
            <div>
                <input type="radio" name="awnser_question" id="awnser2" value="awnser2">
                <label for="awnser2">${quiz[quizIndex].awnser2}</label>
            </div>
            <div>
                <input type="radio" name="awnser_question" id="awnser3" value="awnser3">
                <label for="awnser3">${quiz[quizIndex].awnser3}</label>
            </div>
            <div>
                <input type="radio" name="awnser_question" id="awnser4" value="awnser4">
                <label for="awnser4">${quiz[quizIndex].awnser4}</label>
            </div>

            <input type="submit">
        </form>`)
    } else {
        showScore()
    }
}

const showScore = () => {
    document.querySelector(".score_container").classList.add("active")
    document.getElementById("quiz_container").classList.remove("active")
    let score = 0
    let maxScore = 0
    for (let i = 0; i < quiz.length; i += 1) {
        maxScore += quiz[i].score;
        if (quiz[i].correct === userAnswer[i].awnser) {
            score += quiz[i].score
        }
    }
    document.getElementById("score_number").innerHTML = `${score}/${maxScore}`
}

const showDetails = () => {
    document.querySelector(".score_container").classList.remove("active")
    document.getElementById("result_container").classList.add("active")
    let resultHTML = ""
    quiz.map((item, index) => {
        return resultHTML += `
            <div class="result-question_container" id="result-question_container${index}">
                <div>
                    <h2>${item.question}</h2>
                    <div class="result_input_box">
                        <input type="checkbox" name="result_awnser_question-${index}" id="result_awnser1" value="awnser1" disabled="disabled">
                        <label for="result_awnser1">${item.awnser1}</label>
                    </div>
                    <div class="result_input_box">
                        <input type="checkbox" name="result_awnser_question-${index}" id="result_awnser2" value="awnser2" disabled="disabled">
                        <label for="result_awnser2">${item.awnser2}</label>
                    </div>
                    <div class="result_input_box">
                        <input type="checkbox" name="result_awnser_question-${index}" id="result_awnser3" value="awnser3" disabled="disabled">
                        <label for="result_awnser3">${item.awnser3}</label>
                    </div>
                    <div class="result_input_box">
                        <input type="checkbox" name="result_awnser_question-${index}" id="result_awnser4" value="awnser4" disabled="disabled">
                        <label for="result_awnser4">${item.awnser4}</label>
                    </div>

                </div>
             </div>
            </div>`,
            checkedTheCorrectAwnserAndUserAwnser(index, item.correct)
    })
    document.getElementById("result_container").innerHTML = (resultHTML)
}
const checkedTheCorrectAwnserAndUserAwnser = (indexOfQuestion, correct) => {
    setTimeout(() => {
        console.log(indexOfQuestion)
        console.log(document.getElementById(`result-question_container${indexOfQuestion}`))

        document.querySelector(`#result-question_container${indexOfQuestion} #result_${correct}`).classList.add("correct-awnser")
        document.querySelector(`#result-question_container${indexOfQuestion} #result_${correct}`).checked = true

        document.querySelector(`#result-question_container${indexOfQuestion} #result_${userAnswer[indexOfQuestion].awnser}`).classList.add("user-awnser")
        document.querySelector(`#result-question_container${indexOfQuestion} #result_${userAnswer[indexOfQuestion].awnser}`).checked = true
        console.log("ok")
    }, 500)
}