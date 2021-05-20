  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {
        // variable to store the list of possible answers
        const answers = [];
        // and for each available answer...
        for(letter in currentQuestion.answers){
          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }
        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );
    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }
  function showResults(){
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');
    // keep track of user's answers
    let numCorrect = 0;
    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;
      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;
        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });
    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }
  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }
  function showNextSlide() {
    showSlide(currentSlide + 1);
  }
  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }
  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "1.The correct description for boiling is:",
      answers: {
        a: "Small bubbles breaking at the surface 98 degrees celsius.",
        b: "Large bubbles breaking at the surface 100 degrees celsius",
        c: "No bubbles 95 degrees celsius"
      },
      correctAnswer: "b"
    },
    {
      question: "2. The correct description for simmering is:",
      answers: {
        a: "Small bubbles breaking at the surface 98 degrees celsius.",
        b: "Large bubbles breaking at the surface 100 degrees celsius",
        c: "No bubbles 95 degrees celsius"
      },
      correctAnswer: "a"
    },
    {
      question: "3. The correct description for poaching is:",
      answers: {
        a: "Small bubbles breaking at the surface 98 degrees celsius",
        b: "Large bubbles breaking at the surface 100 degrees celsius.",
        c: "No bubbles 87 to 95 degrees celsius."
      },
      correctAnswer: "c"
    },
    {
      question: "4. Braising requires the food to be:",
      answers: {
        a: "Half-covered with liquid, covered and cooked in the oven.",
        b: "Completely covered with liquid, covered and cooked in the oven.",
        c: "Half-covered with liquid, covered and cooked on the stove."
      },
      correctAnswer: "a"
    },
    {
      question: " 5. Foods to be stewed should be prepared:",
      answers: {
        a: "Into large pieces prior to stewing.",
        b: "Smaller even bite-sized pieces prior to stewing",
        c: "Not prepared"
      },
      correctAnswer: "b"
    },
    {
      question: "6. The resulting liquid created during the stewing process is:",
      answers: {
        a: "Strained, reduced and served as the sauce.",
        b: "Served with the stew.",
        c: "Strained and discarded."
      },
      correctAnswer: "b"
    },
    {
      question: "7. Poaching is a suitable cookery method for:",
      answers: {
        a: "Large portions of tough cuts of meat.",
        b: "Only eggs",
        c: "Smaller portions of tender foods"
      },
      correctAnswer: "c"
    },
    {
      question: "8. The difference between baking and roasting is:",
      answers: {
        a: "The temperature for baking is much higher.",
        b: "Baking requires the addition of a baste",
        c: "Roasting requires the addition of a baste."
      },
      correctAnswer: "c"
    },
    {
      question: "9. The four forms of frying are:",
      answers: {
        a: "Shallow, deep, stir and pan-frying.",
        b: "Deep, saute, shallow, and stove",
        c: "Pan, shallow, oven and deep"
      },
      correctAnswer: "a"
    },
    {
      question: "10. Foods to be deep fryed are generally coated to:",
      answers: {
        a: "Protect the foods from drying out, add texture and colour.",
        b: "Cook the foods faster.",
        c: "Keep the oil from getting cold."
      },
      correctAnswer: "a"
    },
    {
      question: "11. First-class tender cuts of meat are the only suitable meat cuts for grilling.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "12. Salamander, char grill and gyros are all equipment used for grilling.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },{
      question: "13. When poaching eggs vinegar is added to the water to add flavour",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    },
    {
      question: "14. Stweing and braising are long slow wet methods of cookery used to break down connective tissues in tough cuts of meat.",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "a"
    },
    {
      question: "15. Blind baking refers to baking in the oven without a light",
      answers: {
        a: "True",
        b: "False",
      },
      correctAnswer: "b"
    }
  ];

 // Kick things off
 buildQuiz();

 // Pagination
 const previousButton = document.getElementById("previous");
 const nextButton = document.getElementById("next");
 const slides = document.querySelectorAll(".slide");
 let currentSlide = 0;

 // Show the first slide
 showSlide(currentSlide);

 // Event listeners
 submitButton.addEventListener('click', showResults);
 previousButton.addEventListener("click", showPreviousSlide);
 nextButton.addEventListener("click", showNextSlide);


