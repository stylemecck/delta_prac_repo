const registerForm = document.getElementById('registrationForm');
const loginForm = document.getElementById('loginForm');
const loginLink = document.getElementById('loginLink');
const registerLink = document.getElementById('registerLink');
const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');

// Define your array of space-themed questions here
const questions = [
  {
    question: 'Which planet is known as the "Red Planet"?',
    options: ['Mercury', 'Venus', 'Mars', 'Saturn'],
    answer: 2
   
  },
  {
    question: 'Which is the largest planet in our solar system?',
    options: ['Jupiter', 'Mars', 'Earth', 'Saturn'],
    answer: 0
    
  },
  // Add more space-themed questions here...
];

let currentQuestionIndex = 0;

// Function to display the current question
function displayQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsContainer.innerHTML = '';
  currentQuestion.options.forEach((option, index) => {
    const optionElement = document.createElement('div');
    optionElement.classList.add('option');
    optionElement.textContent = option;
    optionElement.addEventListener('click', () => selectOption(index));
    optionsContainer.appendChild(optionElement);
  });
}

// Function to handle option selection
function selectOption(optionIndex) {
  const selectedOption = document.querySelector('.option.selected');
  if (selectedOption) {
    selectedOption.classList.remove('selected');
  }
  const currentOption = optionsContainer.children[optionIndex];
  currentOption.classList.add('selected');
}

// Event listener for the submit button
submitButton.addEventListener('click', () => {
  const score = calculateScore();
  alert(`Your score is: ${score}`);
});

// Function to calculate the user's score
function calculateScore() {
  let score = 0;
  questions.forEach((question, index) => {
    const selectedOption = optionsContainer.children[index].classList.contains('selected');
    if (selectedOption && index === question.answer) {
      score++;
    }
  });
  return score;
}

// Display the space-themed quiz when the page loads
displayQuestion();

// Event listener for the login link
loginLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('register').style.display = 'none';
  document.getElementById('login').style.display = 'block';
});

// Event listener for the register link
registerLink.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('register').style.display = 'block';
  document.getElementById('login').style.display = 'none';
});

// Event listener for the registration form submission
registerForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Perform registration logic
  alert('Registration successful!');
  document.getElementById('register').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  document.getElementById('submit').style.display = 'block';
});

// Event listener for the login form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // Perform login logic
  alert('Login successful!');
  document.getElementById('login').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  document.getElementById('submit').style.display = 'block';
});
