class Question
{
    #text = "";
    #answer = "";

    constructor (text, answer)
    {
        this.#text = text;
        this.#answer = answer;
    }

    set text(text)
    {
        this.#text = text;
    }

    set answer(answer)
    {
        this.#answer = answer;
    }

    get text()
    {
        return this.#text
    }

    get answer ()
    {
        return this.#answer;
    }
}

q1 = new Question("Does San Francisco have a problem with homeless people?", "t");
q2 = new Question("Is rent crazy expensive in San Francisco", "t");
q3 = new Question("Does BART in SF resemble hell if lights were out?", "t");
q4 = new Question("Would I move to any other city in the USA?", "f");
q5 = new Question("Does San Francisco a whimsical architecture?","t");
q6 = new Question("Is the climate one of the most preferable in the world?", "t");
q7 = new Question("Are there good job opportunities in San Francisco?", "t");
q8 = new Question("Are there good schools in San Francisco?", "t");
q9 = new Question("Is there diverse cuisine in SF?", "t");
q10 = new Question("Is San Francisco surrounded by incredible nature?", "t");

questions = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
let idx = 0;
let questionNumber = 1;
let currentQuestion;
let questionOnScreen = document.getElementById("question");
let buttons = document.getElementsByTagName("button");
let score = 0;


let checkAnswer = (answerElement) => 
{
    let answer = answerElement.innerText[0].toLowerCase();
    if(answer === currentQuestion.answer)
    {
        idx++;
        score++;
        console.log("True");
        changeQuestion();
    }
    else
    {
        idx++;
        // console.log("False");
        changeQuestion();
    }
}

let changeQuestion = () =>
{
    if(idx >= questions.length)
    {
        // idx=0;
        return;
    }
    currentQuestion = questions[idx];
    questionOnScreen.innerText = questionNumber++ + ". " + currentQuestion.text;
    document.getElementById("score").innerText = "Your score: " + score;
}

let start = (st) =>
{
    currentQuestion = questions[idx];
    questionOnScreen.innerText = questionNumber++ + ". " + currentQuestion.text;
    st.style.visibility = "hidden";
}