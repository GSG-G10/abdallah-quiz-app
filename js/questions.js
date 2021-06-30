const allQuestions = [
    {
        id: 1,
        question: "Which of the following is true about typeof operator in JavaScript?",
        answer_1: 'The typeof is a unary operator that is placed before its single operand, which can be of any type.',
        answer_2: 'Its value is a string indicating the data type of the operand.',
        answer_3: 'Both of the above.',
        answer_4: 'None of the above.',
        correctAnswer: 3
    },
    {
        id: 2,
        question: "How can you get the type of arguments passed to a function?",
        answer_1: 'using typeof operator',
        answer_2: 'using getType function',
        answer_3: 'Both of the above.',
        answer_4: 'None of the above.',
        correctAnswer: 1
    },
    {
        id: 3,
        question: "Which of the following is correct about callbacks?",
        answer_1: 'A callback is a plain JavaScript function passed to some method as an argument or option.',
        answer_2: 'Some callbacks are just events, called to give the user a chance to react when a certain state is triggered.',
        answer_3: 'Both of the above.',
        answer_4: 'None of the above.',
        correctAnswer: 3
    },
    {
        id: 4,
        question: "Which built-in method returns the string representation of the number's value?",
        answer_1: 'toValue()',
        answer_2: 'toNumber()',
        answer_3: 'toString()',
        answer_4: 'None of the above.',
        correctAnswer: 3
    },
    {
        id: 5,
        question: "Which of the following function of String object returns a number indicating the Unicode value of the character at the given index?",
        answer_1: 'charAt()',
        answer_2: 'charCodeAt()',
        answer_3: 'concat()',
        answer_4: 'indexOf()',
        correctAnswer: 2
    },
    {
        id: 6,
        question: "Which of the following function of String object returns the index within the calling String object of the last occurrence of the specified value?",
        answer_1: 'lastIndexOf()',
        answer_2: 'search()',
        answer_3: 'substr()',
        answer_4: 'indexOf()',
        correctAnswer: 1
    },
    {
        id: 7,
        question: "Which of the following function of String object creates a string to be displayed in a big font as if it were in a <big> tag?",
        answer_1: 'anchor()',
        answer_2: 'big()',
        answer_3: 'blink()',
        answer_4: 'italics()',
        correctAnswer: 2
    },
    {
        id: 8,
        question: "Which of the following function of Array object returns the first (least) index of an element within the array equal to the specified value, or -1 if none is found?",
        answer_1: 'indexOf()',
        answer_2: 'join()',
        answer_3: 'lastIndexOf()',
        answer_4: 'map()',
        correctAnswer: 1
    },
    {
        id: 9,
        question: "Which of the following function of Array object extracts a section of an array and returns a new array?",
        answer_1: 'reverse()',
        answer_2: 'shift()',
        answer_3: 'slice()',
        answer_4: 'some()',
        correctAnswer: 3
    },
    {
        id: 10,
        question: "Which of the following is not JavaScript Data Types?",
        answer_1: 'Undefined',
        answer_2: 'Number',
        answer_3: 'Boolean',
        answer_4: 'Float',
        correctAnswer: 4
    },
    {
        id: 11,
        question: "Inside which HTML element do we put the JavaScript?",
        answer_1: 'script',
        answer_2: 'head',
        answer_3: 'meta',
        answer_4: 'style',
        correctAnswer: 1
    },
    {
        id: 12,
        question: "Which of the following is correct about features of JavaScript?",
        answer_1: 'It can not Handling dates and time.',
        answer_2: 'JavaScript is a object-based scripting language.',
        answer_3: 'JavaScript is not interpreter based scripting language.',
        answer_4: 'All of the above',
        correctAnswer: 2
    },
    {
        id: 13,
        question: "Which of the following is correct about features of JavaScript?",
        answer_1: 'It can not Handling dates and time.',
        answer_2: 'JavaScript is a object-based scripting language.',
        answer_3: 'JavaScript is not interpreter based scripting language.',
        answer_4: 'All of the above',
        correctAnswer: 2
    },
    {
        id: 14,
        question: "Among the keywords below, which one is not a statement?",
        answer_1: 'if',
        answer_2: 'with',
        answer_3: 'debugger',
        answer_4: 'use strict',
        correctAnswer: 4
    },
    {
        id: 15,
        question: "The _______ method of an Array object adds and/or removes elements from an array.",
        answer_1: 'Reverse',
        answer_2: 'Shift',
        answer_3: 'Slice',
        answer_4: 'Splice',
        correctAnswer: 4
    },

];
const questionText = document.querySelector('#question-text');
const nextButton = document.querySelector('#next-button');
const previousButton = document.querySelector('#previous-button');


let currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};
let leadboard = JSON.parse(localStorage.getItem('leadboard')) || [];

let quizQuestions = [];

let currentQuestionNumber = 1;

if(Object.keys(currentUser).length === 0){
    window.location = "index.html";
}

function generateQuestions(){
    for(let i = 1; i <= 10; i++){
        const randomQuestion = allQuestions[Math.floor(Math.random() * allQuestions.length)];
 
        if(quizQuestions.find(question => question.questionId == randomQuestion.id)){
            i--;
            continue;
        }

        quizQuestions.push({
            questionId : randomQuestion.id,
            question: randomQuestion,
            answer: 0
        });

    }
}

function answerQuestion(answer){
    console.log(answer);

    quizQuestions[currentQuestionNumber - 1].answer = answer;

    nextButton.disabled = false;
}

function displayCurrentQuestionNumber(){
    const ul = document.querySelector('#question-number-ul');

    ul.innerHTML = "";

    for(let i = 1; i <= 10; i++){
        const li = document.createElement('li');
        li.textContent = i;
        if(i === currentQuestionNumber){
            li.classList.add('active');
        }
        ul.appendChild(li);
    }

}

function showCurrentQuestion(){

    displayCurrentQuestionNumber();
    
    const currentQuestion = quizQuestions[currentQuestionNumber - 1];

    if(currentQuestionNumber != 1){
        previousButton.disabled = false;
    }

    if(currentQuestion.answer == 0){
        nextButton.disabled = true;
    }else{
        nextButton.disabled = false;
    }

    questionText.innerHTML = currentQuestion.question.question;

    const answersDiv = document.querySelector('.answers');

    answersDiv.innerHTML = "";

    const input1 = document.createElement('input');
    input1.type = "radio";
    input1.id = "answer-1";
    input1.name = "question";
    input1.value = 1;
    input1.addEventListener('change', (e) => {
        e.preventDefault();
        answerQuestion(input1.value);
    });


    const input2 = document.createElement('input');
    input2.type = "radio";
    input2.id = "answer-2";
    input2.name = "question";
    input2.value = 2;
    input2.addEventListener('change', (e) => {
        e.preventDefault();
        answerQuestion(input2.value);
    });

    const input3 = document.createElement('input');
    input3.type = "radio";
    input3.id = "answer-3";
    input3.name = "question";
    input3.value = 3;
    input3.addEventListener('change', (e) => {
        e.preventDefault();
        answerQuestion(input3.value);
    });

    const input4 = document.createElement('input');
    input4.type = "radio";
    input4.id = "answer-4";
    input4.name = "question";
    input4.value = 4;
    input4.addEventListener('change', (e) => {
        e.preventDefault();
        answerQuestion(input4.value);
    });


    switch(currentQuestion.answer){
        case "1":
            input1.checked = true;
            break;
        case "2":
        input2.checked = true;
            break;
        case "3":
            input3.checked = true;
            break;
        case "4":
            input4.checked = true;
            break;
    }


    const label1 = document.createElement('label');
    label1.htmlFor = "answer-1"
    label1.textContent = " " + currentQuestion.question.answer_1;


    const label2 = document.createElement('label');
    label2.htmlFor = "answer-2"
    label2.textContent = " " + currentQuestion.question.answer_2;


    const label3 = document.createElement('label');
    label3.htmlFor = "answer-3"
    label3.textContent = " " + currentQuestion.question.answer_3;


    const label4 = document.createElement('label');
    label4.htmlFor = "answer-4"
    label4.textContent = " " + currentQuestion.question.answer_4;




    const answerOneControl = document.createElement('div');
    answerOneControl.classList.add('readio-control');
    answerOneControl.appendChild(input1);
    answerOneControl.appendChild(label1);


    const answerTwoControl = document.createElement('div');
    answerTwoControl.classList.add('readio-control');
    answerTwoControl.appendChild(input2);
    answerTwoControl.appendChild(label2);


    const answerThreeControl = document.createElement('div');
    answerThreeControl.classList.add('readio-control');
    answerThreeControl.appendChild(input3);
    answerThreeControl.appendChild(label3);



    const answerFourControl = document.createElement('div');
    answerFourControl.classList.add('readio-control');
    answerFourControl.appendChild(input4);
    answerFourControl.appendChild(label4);





    const firstAnswerDiv = document.createElement('div');
    firstAnswerDiv.classList.add("answer-div");
    firstAnswerDiv.appendChild(answerOneControl);
    firstAnswerDiv.appendChild(answerTwoControl);




    const secondAnswerDiv = document.createElement('div');
    secondAnswerDiv.classList.add("answer-div");
    secondAnswerDiv.appendChild(answerThreeControl);
    secondAnswerDiv.appendChild(answerFourControl);


    answersDiv.appendChild(firstAnswerDiv);
    answersDiv.appendChild(secondAnswerDiv);

}



nextButton.addEventListener('click',(e)=>{
   e.preventDefault(); 
   currentQuestionNumber++;

   if(currentQuestionNumber === 11){
        calculateScore();
   }

    if(currentQuestionNumber === 10){
        nextButton.textContent = "Finish";
    }

   showCurrentQuestion();
});

previousButton.addEventListener('click',(e) => {
    e.preventDefault();
    currentQuestionNumber--;
    if(currentQuestionNumber == 1){
        previousButton.disabled = true;
    }

    if(currentQuestionNumber != 10){
        nextButton.textContent = "Next >";
    }
    
    showCurrentQuestion();
});

function calculateScore(){
    let score = 0;
    quizQuestions.forEach(question => {
        if(question.answer == question.question.correctAnswer){
            score++;
        }
    });
    currentUser.score = score;

    if(score >= 8){
        leadboard.push(currentUser);
    }

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    localStorage.setItem('leadboard', JSON.stringify(leadboard));

    window.location = "score.html";
}

generateQuestions();


showCurrentQuestion();
