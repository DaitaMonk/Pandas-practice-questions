document.addEventListener('DOMContentLoaded', function() {
    const questionContainer = document.getElementById('question-container');
    const addQuestionBtn = document.getElementById('add-question-btn');
    const questionForm = document.getElementById('question-form');

    // Add new question fields
    addQuestionBtn.addEventListener('click', function() {
        const newQuestionGroup = document.createElement('div');
        newQuestionGroup.className = 'question-group';
        newQuestionGroup.innerHTML = `
            <div class="form-group">
                <label>Question Text</label>
                <textarea class="form-control question-text" required></textarea>
            </div>
            <div class="form-group">
                <label>Correct Answer</label>
                <input type="text" class="form-control correct-answer" required>
            </div>
            <div class="form-group">
                <label>Option 2</label>
                <input type="text" class="form-control option" required>
            </div>
            <div class="form-group">
                <label>Option 3</label>
                <input type="text" class="form-control option" required>
            </div>
            <div class="form-group">
                <label>Option 4</label>
                <input type="text" class="form-control option" required>
            </div>
            <button type="button" class="remove-question-btn btn btn-danger">Remove Question</button>
            <hr>
        `;
        questionContainer.appendChild(newQuestionGroup);

        // Add event listener to the new remove button
        newQuestionGroup.querySelector('.remove-question-btn').addEventListener('click', function() {
            questionContainer.removeChild(newQuestionGroup);
        });
    });

    // Handle form submission
    questionForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const difficulty = document.getElementById('difficulty').value;
        const questionGroups = document.querySelectorAll('.question-group');
        const newQuestions = [];

        // Validate at least one question
        if (questionGroups.length === 0) {
            alert('Please add at least one question');
            return;
        }

        // Validate difficulty selected
        if (!difficulty) {
            alert('Please select a difficulty level');
            return;
        }

        // Process each question group
        questionGroups.forEach(group => {
            const questionText = group.querySelector('.question-text').value.trim();
            const correctAnswer = group.querySelector('.correct-answer').value.trim();
            const options = [
                correctAnswer,
                group.querySelectorAll('.option')[0].value.trim(),
                group.querySelectorAll('.option')[1].value.trim(),
                group.querySelectorAll('.option')[2].value.trim()
            ];

            // Validate all fields are filled
            if (!questionText || options.some(opt => !opt)) {
                alert('Please fill in all fields for all questions');
                return;
            }

            // Add to new questions array
            newQuestions.push({
                question: questionText,
                options: options,
                correctAnswer: 0 // First option is correct
            });
        });

        // Add questions to quiz data
        addQuestions(difficulty, newQuestions);

        // Show success message
        alert(`Successfully added ${newQuestions.length} questions to ${difficulty} level!`);

        // Reset form
        questionForm.reset();
        
        // Clear all but the first question
        while (questionContainer.children.length > 1) {
            questionContainer.removeChild(questionContainer.lastChild);
        }

        // Reset first question fields
        const firstGroup = questionContainer.firstElementChild;
        firstGroup.querySelector('.question-text').value = '';
        firstGroup.querySelector('.correct-answer').value = '';
        firstGroup.querySelectorAll('.option').forEach(opt => {
            opt.value = '';
        });
    });
});