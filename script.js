class Quiz {
	constructor(questions) {
		this.questions = questions;
		this.currentQuestionIndex = 0;
		this.questionContainer = document.getElementById(`question-container`);
		this.answerButtons = document.getElementById(`answer-buttons`);
		this.feedback = document.getElementById(`feedback`);
		this.nextButton = document.getElementById(`next-button`);
		this.showQuestion(this.questions[0]);
	}
	showQuestion(question) {
		this.questionContainer.innerText = question.question;
		this.answerButtons.innerHTML = ``;
		for (const answear of question.answear) {
			// const answearElement= `<li><button class="btn"></button></li>`
			const buttonContainer = document.createElement(`li`);
			const buttonElement = document.createElement(`button`);
			buttonElement.classList.add(`btn`);
			buttonElement.textContent = answear.text;
			this.answerButtons.appendChild(buttonContainer);
			buttonContainer.appendChild(buttonElement);
		}
	}
}

async function initQuizz() {
	const fileContent = await fetch("./questions.json");
	const quizQuestions = await fileContent.json;
	console.log(quizQuestions);
	const quiz = new Quiz(questions);
}

initQuizz();
