let currentQuiz = '';
let currentAnswer = 0;

function goHome() {
  document.querySelectorAll('.screen').forEach(screen => screen.classList.remove('active'));
  document.getElementById('home-screen').classList.add('active');
}

function startQuiz(type) {
  currentQuiz = type;
  document.getElementById('home-screen').classList.remove('active');
  document.getElementById('quiz-screen').classList.add('active');
  document.getElementById('quiz-title').textContent = type.charAt(0).toUpperCase() + type.slice(1) + ' Quiz';
  generateMathQuestion();
}

function generateMathQuestion() {
  let num1 = Math.floor(Math.random() * 100) + 1;
  let num2 = Math.floor(Math.random() * 100) + 1;
  let question = '';

  switch (currentQuiz) {
    case 'addition':
      question = `${num1} + ${num2} = ?`;
      currentAnswer = num1 + num2;
      break;
    case 'subtraction':
      question = `${num1} - ${num2} = ?`;
      currentAnswer = num1 - num2;
      break;
    case 'multiplication':
      question = `${num1} × ${num2} = ?`;
      currentAnswer = num1 * num2;
      break;
    case 'division':
      num1 = num1 * num2;
      question = `${num1} ÷ ${num2} = ?`;
      currentAnswer = num1 / num2;
      break;
    case 'percentage':
      question = `What is ${num1}% of ${num2}?`;
      currentAnswer = (num1 / 100) * num2;
      break;
  }

  document.getElementById('question').textContent = question;
}

function showAptitudeTopics() {
  document.getElementById('home-screen').classList.remove('active');
  document.getElementById('aptitude-screen').classList.add('active');
}

function startAptitudeQuiz(topic) {
  currentQuiz = topic;
  document.getElementById('aptitude-screen').classList.remove('active');
  document.getElementById('quiz-screen').classList.add('active');
  const topicTitle = {
    timeWork: 'Time and Work',
    speedDistance: 'Speed and Distance',
    profitLoss: 'Profit and Loss',
    interest: 'Simple Interest',
  };
  document.getElementById('quiz-title').textContent = topicTitle[topic] + ' Quiz';
  generateAptitudeQuestion();
}

function generateAptitudeQuestion() {
  let question = '';
  let answer = 0;

  switch (currentQuiz) {
    case 'timeWork':
      const workA = Math.floor(Math.random() * 10) + 1;
      const workB = Math.floor(Math.random() * 10) + 1;
      question = `If A can complete a task in ${workA} days and B in ${workB} days, how many days will they take together?`;
      answer = (workA * workB) / (workA + workB);
      break;
    case 'speedDistance':
      const distance = Math.floor(Math.random() * 100) + 50;
      const speed = Math.floor(Math.random() * 20) + 10;
      question = `If a vehicle travels ${distance} km at ${speed} km/hr, how long will it take (in hours)?`;
      answer = distance / speed;
      break;
    case 'profitLoss':
      const costPrice = Math.floor(Math.random() * 500) + 100;
      const profitPercent = Math.floor(Math.random() * 50) + 10;
      question = `If an item is bought for Rs.${costPrice} and sold at a ${profitPercent}% profit, what is the selling price?`;
      answer = costPrice + (profitPercent / 100) * costPrice;
      break;
    case 'interest':
      const principal = Math.floor(Math.random() * 1000) + 500;
      const rate = Math.floor(Math.random() * 10) + 1;
      const time = Math.floor(Math.random() * 5) + 1;
      question = `If Rs.${principal} is borrowed at ${rate}% for ${time} years, what is the simple interest?`;
      answer = (principal * rate * time) / 100;
      break;
  }

  document.getElementById('question').textContent = question;
  currentAnswer = Math.round(answer * 100) / 100; // Round to 2 decimal places
}

function checkAnswer() {
  const userAnswer = parseFloat(document.getElementById('answer').value);
  if (userAnswer === currentAnswer) {
    alert('Correct!');
  } else {
    alert(`Wrong! The correct answer is ${currentAnswer}`);
  }
  document.getElementById('answer').value = '';
  if (currentQuiz.includes('timeWork') || currentQuiz.includes('speedDistance') || currentQuiz.includes('profitLoss') || currentQuiz.includes('interest')) {
    generateAptitudeQuestion();
  } else {
    generateMathQuestion();
  }
}
