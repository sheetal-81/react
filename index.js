// script.js

let questions = [
	{
		prompt: `What is React?`,
		options: [
		    "A JavaScript library for building user interfaces",
		    "A programming language",
		    "A database management system",
		    "A web browser",
		],
		answer: "A JavaScript library for building user interfaces",
	    },
	    {
		prompt: `What is JSX in React?`,
		options: [
		    
		    "A database management system",
		    "A web browser",
		    "A syntax extension for JavaScript",
		    "A programming language",
		],
		answer: "A syntax extension for JavaScript",
	    },
	    {
		prompt: `How do you create a React component?`,
		options: [
		    "Using JavaScript classes",
		    "Using HTML tags",
		    "Using CSS",
		    "Using Python",
		],
		answer: "Using JavaScript classes",
	    },
	    {
		prompt: `What is the purpose of state in React?`,
		options: [
		    
		    "To define the structure of a component",
		    "To handle user events",
		    "To perform server-side operations",
		    "To store data that affects the rendering of a component",
		],
		answer: "To store data that affects the rendering of a component",
	    },
	    {
		prompt: `What is the purpose of props in React?`,
		options: [
		    "To pass data from parent to child components",
		    "To define the structure of a component",
		    "To handle user events",
		    "To store data that affects the rendering of a component",
		],
		answer: "To pass data from parent to child components",
	    },
	    {
		prompt: `What is the purpose of the "useState" hook in React?`,
		options: [
		   
		    "To define the structure of a component",
		    "To handle user events",
		    "To add state to functional components",
		    "To store data that affects the rendering of a component",
		],
		answer: "To add state to functional components",
	    },
	    {
		prompt: `What is the purpose of the "useEffect" hook in React?`,
		options: [
		    "To perform side effects in functional components",
		    "To define the structure of a component",
		    "To handle user events",
		    "To store data that affects the rendering of a component",
		],
		answer: "To perform side effects in functional components",
	    },
	    {
		prompt: `What is the purpose of the "useContext" hook in React?`,
		options: [
		    
		    "To define the structure of a component",
		    "To access context values in functional components",
		    "To handle user events",
		    "To store data that affects the rendering of a component",
		],
		answer: "To access context values in functional components",
	    },
	    {
		prompt: `What is the purpose of the "useReducer" hook in React?`,
		options: [
		    "To manage state with complex logic",
		    "To define the structure of a component",
		    "To handle user events",
		    "To store data that affects the rendering of a component",
		],
		answer: "To manage state with complex logic",
	    },
	    {
		prompt: `What is the purpose of the "useCallback" hook in React?`,
		options: [
		  
		    "To define the structure of a component",
		    "To handle user events",
		    "To store data that affects the rendering of a component",
		    "To memoize functions in functional components",
		],
		answer: "To memoize functions in functional components",
	    },
	    {
		prompt: `What is the purpose of the "useMemo" hook in React?`,
		options: [
		    "To memoize values in functional components",
		    "To define the structure of a component",
		    "To handle user events",
		    "To store data that affects the rendering of a component",
		],
		answer: "To memoize values in functional components",
	    },
	    {
		prompt: `What is the purpose of the "useRef" hook in React?`,
		options: [
		   
		    "To define the structure of a component",
		    "To handle user events",
		    "To create a mutable reference in functional components",
		    "To store data that affects the rendering of a component",
		],
		answer: "To create a mutable reference in functional components",
	    },
	    {
		prompt: `What is the purpose of the "forwardRef" function in React?`,
		options: [
		    "To forward refs to child components",
		    "To define the structure of a component",
		    "To handle user events",
		    "To store data that affects the rendering of a component",
		],
		answer: "To forward refs to child components",
	    },
	    {
		prompt: `What is the purpose of the "memo" function in React?`,
		options: [
		    "To memoize functional components",
		    "To define the structure of a component",
		    "To handle user events",
		    "To store data that affects the rendering of a component",
		],
		answer: "To memoize functional components",
	    },
	    {
		prompt: `What is the purpose of the "React.Fragment" component in React?`,
		options: [
		   
		    "To define the structure of a component",
		    "To render multiple children without a wrapper element",
		    "To handle user events",
		    "To store data that affects the rendering of a component",
		],
		answer: "To render multiple children without a wrapper element",
	    },
	    {
		prompt: `What is the purpose of the "key" prop in React lists?`,
		options: [
		    
		    "To define the structure of a component",
		    "To handle user events",
		    "To store data that affects the rendering of a component",
		    "To give each child in a list a unique identity",
		],
		answer: "To give each child in a list a unique identity",
	    },
	    {
		prompt: `What is the purpose of the "className" prop in React?`,
		options: [
		   
		    "To define the structure of a component",
		    "To handle user events",
		    "To apply CSS classes to elements",
		    "To store data that affects the rendering of a component",
		],
		answer: "To apply CSS classes to elements",
	    },
	    {
		prompt: `What is the purpose of the "onClick" prop in React?`,
		options: [
		    "To handle click events",
		    "To define the structure of a component",
		    "To apply CSS classes to elements",
		    "To store data that affects the rendering of a component",
		],
		answer: "To handle click events",
	    },
	    {
		prompt: `What is the purpose of the "onChange" prop in React?`,
		options: [
		    "To handle change events",
		    "To define the structure of a component",
		    "To apply CSS classes to elements",
		    "To store data that affects the rendering of a component",
		],
		answer: "To handle change events",
	    }
	    
	    
];

// Get Dom Elements

let questionsEl =
	document.querySelector(
		"#questions"
	);
let timerEl =
	document.querySelector("#timer");
let choicesEl =
	document.querySelector("#options");
let submitBtn = document.querySelector(
	"#submit-score"
);
let startBtn =
	document.querySelector("#start");
let nameEl =
	document.querySelector("#name");
let feedbackEl = document.querySelector(
	"#feedback"
);
let reStartBtn =
	document.querySelector("#restart");

// Quiz's initial state
let currentQuestionIndex = 0;
let time = questions.length * 15;
let timerId;

// Start quiz and hide frontpage

function quizStart() {
	timerId = setInterval(
		clockTick,
		1000
	);
	timerEl.textContent = time;
	let landingScreenEl =
		document.getElementById(
			"start-screen"
		);
	landingScreenEl.setAttribute(
		"class",
		"hide"
	);
	questionsEl.removeAttribute(
		"class"
	);
	getQuestion();
}

// Loop through array of questions and
// Answers and create list with buttons
function getQuestion() {
	let currentQuestion =
		questions[currentQuestionIndex];
	let promptEl =
		document.getElementById(
			"question-words"
		);
	promptEl.textContent =
		currentQuestion.prompt;
	choicesEl.innerHTML = "";
	currentQuestion.options.forEach(
		function (choice, i) {
			let choiceBtn =
				document.createElement(
					"button"
				);
			choiceBtn.setAttribute(
				"value",
				choice
			);
			choiceBtn.textContent =
				i + 1 + ". " + choice;
			choiceBtn.onclick =
				questionClick;
			choicesEl.appendChild(
				choiceBtn
			);
		}
	);
}

// Check for right answers and deduct
// Time for wrong answer, go to next question

function questionClick() {
	if (
		this.value !==
		questions[currentQuestionIndex]
			.answer
	) {
		time -= 10;
		if (time < 0) {
			time = 0;
		}
		timerEl.textContent = time;
		feedbackEl.textContent = `Wrong! The correct answer was 
		${questions[currentQuestionIndex].answer}.`;
		feedbackEl.style.color = "red";
	} else {
		feedbackEl.textContent =
			"Correct!";
		feedbackEl.style.color =
			"green";
	}
	feedbackEl.setAttribute(
		"class",
		"feedback"
	);
	setTimeout(function () {
		feedbackEl.setAttribute(
			"class",
			"feedback hide"
		);
	}, 2000);
	currentQuestionIndex++;
	if (
		currentQuestionIndex ===
		questions.length
	) {
		quizEnd();
	} else {
		getQuestion();
	}
}

// End quiz by hiding questions,
// Stop timer and show final score

function quizEnd() {
	clearInterval(timerId);
	let endScreenEl =
		document.getElementById(
			"quiz-end"
		);
	endScreenEl.removeAttribute(
		"class"
	);
	let finalScoreEl =
		document.getElementById(
			"score-final"
		);
	finalScoreEl.textContent = time;
	questionsEl.setAttribute(
		"class",
		"hide"
	);
}

// End quiz if timer reaches 0

function clockTick() {
	time--;
	timerEl.textContent = time;
	if (time <= 0) {
		quizEnd();
	}
}

// Save score in local storage
// Along with users' name

function saveHighscore() {
	let name = nameEl.value.trim();
	if (name !== "") {
		let highscores =
			JSON.parse(
				window.localStorage.getItem(
					"highscores"
				)
			) || [];
		let newScore = {
			score: time,
			name: name,
		};
		highscores.push(newScore);
		window.localStorage.setItem(
			"highscores",
			JSON.stringify(highscores)
		);
		alert(
			"Your Score has been Submitted"
		);
	}
}

// Save users' score after pressing enter

function checkForEnter(event) {
	if (event.key === "Enter") {
		saveHighscore();
		alert(
			"Your Score has been Submitted"
		);
	}
}
nameEl.onkeyup = checkForEnter;

// Save users' score after clicking submit

submitBtn.onclick = saveHighscore;

// Start quiz after clicking start quiz

startBtn.onclick = quizStart;
