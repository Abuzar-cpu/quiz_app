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
// let currentQuestion = questions[idx];
let gameStarted = false;
let score = 0;

let start = () =>
{
    idx = 0;
    document.getElementById("question").innerText = (idx + 1) + ". " + questions[idx].text;
    gameStarted = true;
    document.getElementById("start").style.visibility = "hidden";
}

let checkAnswer = (userAnswer) =>
{
    if(!gameStarted)
    {
        alert("Please start the game to see the questions");
        return;
    }

    else if (gameOver())
    {
        document.getElementById("question").innerText = "End of the game";
        document.getElementById("question").style.color = "brown";
        alert("Game has ended. PLease check your score :)");
    }

    userAnswer = userAnswer.innerText[0].toLowerCase();

    if(questions[idx].answer === userAnswer)
    {
        idx += 1;
        score += 1;
        document.getElementById("score").innerText = "Your score: " + score;
        changeQuestion(idx);
    }

    else
    {
        idx += 1;
        changeQuestion(idx);
    }
}

function changeQuestion(index) {
    try{
        document.getElementById("question").innerText = (index + 1) + ". " +questions[index].text;
    } catch (err)
    {

    }
}

function restart() {
    document.location.reload();
}

function gameOver() {
    if(idx == questions.length)
    {
        document.getElementById("start").style.visibility = "visible";
        document.getElementById("start").style.color = "white";
        document.getElementById("start").style.cursor = "pointer";
        document.getElementById("start").innerText = "Restart";
        document.getElementById("start").setAttribute("onclick", "restart()");
        return true;
    }
    return false;
}