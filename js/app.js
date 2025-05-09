// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all quizzes
    initQuiz('beginner');
    initQuiz('intermediate');
    initQuiz('advanced');

    // Set up difficulty selector buttons
    document.querySelectorAll('.difficulty-btn').forEach(button => {
        button.addEventListener('click', function() {
            const difficulty = this.getAttribute('data-difficulty');
            showQuiz(difficulty);
        });
    });

    // Show beginner quiz by default
    showQuiz('beginner');
});

// Initialize a quiz for a specific difficulty level
function initQuiz(difficulty) {
    const quizContainer = document.getElementById(`${difficulty}-quiz`);
    const questionText = document.getElementById(`${difficulty}-question-text`);
    const optionsContainer = document.getElementById(`${difficulty}-options`);
    const prevBtn = document.getElementById(`${difficulty}-prev-btn`);
    const nextBtn = document.getElementById(`${difficulty}-next-btn`);
    const currentQuestionSpan = document.getElementById(`${difficulty}-current-question`);
    const totalQuestionsSpan = document.getElementById(`${difficulty}-total-questions`);
    const progressBar = document.getElementById(`${difficulty}-progress`);
    const scoreContainer = document.getElementById(`${difficulty}-score`);
    const correctFeedback = document.getElementById(`${difficulty}-correct-feedback`);
    const incorrectFeedback = document.getElementById(`${difficulty}-incorrect-feedback`);
    const correctAnswerSpan = document.getElementById(`${difficulty}-correct-answer`);

    // Get 5 random questions for this quiz
    const questions = getRandomQuestions(difficulty, 10);
    let currentQuestionIndex = 0;
    let score = 0;
    let userAnswers = Array(questions.length).fill(null);

    // Display the total number of questions
    totalQuestionsSpan.textContent = questions.length;

    // Function to display the current question
    function displayQuestion() {
        const question = questions[currentQuestionIndex];
        questionText.textContent = question.question;
        currentQuestionSpan.textContent = currentQuestionIndex + 1;

        // Clear previous options
        optionsContainer.innerHTML = '';

        // Create new options
        question.options.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.classList.add('option');
            if (userAnswers[currentQuestionIndex] === index) {
                optionElement.classList.add('selected');
            }

            optionElement.innerHTML = `
                <input type="radio" name="option" id="option-${index}" value="${index}">
                <span class="checkmark"></span>
                <label for="option-${index}">${option}</label>
            `;

            optionElement.addEventListener('click', () => {
                if (userAnswers[currentQuestionIndex] === null) {
                    selectOption(index);
                }
            });

            optionsContainer.appendChild(optionElement);
        });

        // Hide feedback
        correctFeedback.style.display = 'none';
        incorrectFeedback.style.display = 'none';

        // Update progress bar
        progressBar.style.width = `${((currentQuestionIndex + 1) / questions.length) * 100}%`;

        // Update navigation buttons
        prevBtn.disabled = currentQuestionIndex === 0;
        nextBtn.textContent = currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next';
    }

    // Function to handle option selection
    function selectOption(optionIndex) {
        const question = questions[currentQuestionIndex];
        userAnswers[currentQuestionIndex] = optionIndex;

        // Highlight selected option
        const options = document.querySelectorAll(`#${difficulty}-options .option`);
        options.forEach((option, index) => {
            option.classList.remove('selected', 'correct', 'incorrect');
            if (index === optionIndex) {
                option.classList.add('selected');
            }
        });

        // Check if answer is correct
        const isCorrect = optionIndex === question.correctAnswer;
        if (isCorrect) {
            score += 1;
        }

        // Show feedback
        if (isCorrect) {
            correctFeedback.style.display = 'block';
        } else {
            incorrectFeedback.style.display = 'block';
            correctAnswerSpan.textContent = question.options[question.correctAnswer];
        }

        // Update score
        scoreContainer.textContent = `Score: ${score}/${questions.length}`;
    }

    // Function to go to the next question
    function nextQuestion() {
        if (currentQuestionIndex < questions.length - 1) {
            currentQuestionIndex++;
            displayQuestion();
        } else {
            // Quiz finished
            alert(`Quiz completed! Your score: ${score}/${questions.length}`);
        }
    }

    // Function to go to the previous question
    function prevQuestion() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            displayQuestion();
        }
    }

    // Set up event listeners for navigation buttons
    nextBtn.addEventListener('click', nextQuestion);
    prevBtn.addEventListener('click', prevQuestion);

    // Display the first question
    displayQuestion();
}

// Show the selected quiz and hide others
function showQuiz(difficulty) {
    document.querySelectorAll('.quiz-container').forEach(quiz => {
        quiz.classList.remove('active');
    });
    document.getElementById(`${difficulty}-quiz`).classList.add('active');
}