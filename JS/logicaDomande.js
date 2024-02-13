const questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];
  
  // div dell HTML, uno per le domande ed uno per i vari button
  const questionContainer = document.getElementById("question-container");
  const answerButtons = document.getElementById("answer-buttons");
  
  // indice della domanda riferito agli oggetti dell array
  let currentQuestionIndex = 0;
  // punteggio, aumenterà di uno ad ogni iterazione
  let score = 0;
  
  // creo una copia dell array, ma rimescolo ad ogni iterazione gli elementi
  const randomQuestions = [...questions].sort(() => Math.random() - 0.5);
  
  function startQuiz() {
    showQuestion(randomQuestions[currentQuestionIndex]);
  }
  
  // funzione per mostrare domanda e risposte nei div answerButtons e questionContainer
  function showQuestion(question) {
    // visualizza la domanda nell div questionContainer
    questionContainer.innerText = question.question;
  
    // svuota il div answerButtons delle risposte precedenti
    answerButtons.innerHTML = "";
  
    // creo un nuovo array con risposte corrette ed errate
    const allAnswers = question.incorrect_answers.concat([
      question.correct_answer,
    ]);
    // mescolo l array
    allAnswers.sort(() => Math.random() - 0.5);
  
    // aggiunta delle risposte errate ed i suoi button
    allAnswers.forEach((el) => {
      const button = document.createElement("button");
      button.innerText = el;
      // aggiungere classe
      // creo un evento collegato all funzione selectAnswere in cui passero true o false, in base al risultato
      button.addEventListener("click", () =>
        selectAnswer(el === question.correct_answer)
      );
      answerButtons.append(button);
    });
  
    //creare il testo: Question n/10
    const questionNumber = document.createElement("p");
    questionNumber.innerText = `Question ${currentQuestionIndex + 1}/${
      questions.length
    }`;
    answerButtons.append(questionNumber);
  }
  
  function selectAnswer(isCorrect) {
    //se la risposta selezionata è corretta
    if (isCorrect) {
      // aumenta il punteggio di uno
      score++;
    }
    // in ogni caso aumenta l indice dell array di domande
    currentQuestionIndex++;
    //   se currentQuestionIndex(l indice delle domande) è inferiore al numero di oggetti contenuto nell array questions
    if (currentQuestionIndex < questions.length) {
      // mostra la prossima domanda
      showQuestion(questions[currentQuestionIndex]);
    } else {
      // altrimenti (l'indice è uguale al numero di oggetti nell array(quindi al numero possibile di domande)) chiama endQuiz()
      endQuiz();
    }
  }
  
  // funzione per finire il gioco all ultima domanda ed eleminiare gli elementi
  function endQuiz() {
    // rimuove i div
    questionContainer.remove();
    answerButtons.remove();
    // visualizza in console il risultato
    console.log(`Il tuo punteggio finale è: ${score}/${questions.length}`);
  }
  
  startQuiz();
  