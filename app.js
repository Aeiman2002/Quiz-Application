// Step 1
// Objects in Array

const quizQuestions = [
  {
    ques: "What does HTML stand for?",
    opt1: "Hyper Text Markup Language",
    opt2: "Hyperlinks and Text Markup Language",
    opt3: "Home Tool Markup Language",
    opt4: "High Tech Modern Language",
    correct: "Hyper Text Markup Language",
  },
  {
    ques: "Which HTML tag is used to define a hyperlink?",
    opt1: "href",
    opt2: "hyperlink",
    opt3: "a",
    opt4: "link",
    correct: "a",
  },
  {
    ques: "What is the correct HTML element for the largest heading?",
    opt1: "head",
    opt2: "h1",
    opt3: "heading",
    opt4: "h6",
    correct: "h1",
  },
  {
    ques: " Which attribute is used to specify an image's file path in the <img> tag?",
    opt1: "src",
    opt2: "href",
    opt3: "link",
    opt4: "alt",
    correct: "src",
  },
  {
    ques: " Which HTML tag is used to insert a line break?",
    opt1: "lb",
    opt2: "break",
    opt3: "br",
    opt4: "newline",
    correct: "br",
  },
  {
    ques: "What is the correct HTML for adding a background color?",
    opt1: "body bg=green",
    opt2: "body style=background-color: green;",
    opt3: "green",
    opt4: "body color=green",
    correct: "body style=background-color: green;",
  },
  {
    ques: "Which HTML tag is used to create an unordered (bulleted) list?",
    opt1: "ol",
    opt2: "list",
    opt3: "ul",
    opt4: "li",
    correct: "li",
  },
  {
    ques: "Which tag is used to define a table row in HTML?",
    opt1: "td",
    opt2: "tr",
    opt3: "th",
    opt4: "table-row",
    correct: "tr",
  },
  {
    ques: "What is the correct HTML for inserting an image?",
    opt1: "img src=image.jpg alt=My Image",
    opt2: "image src=image.jpg",
    opt3: "img href=image.jpg alt=My Image",
    opt4: "picture src=image.jpg",
    correct: "img src=image.jpg alt=My Image",
  },
  {
    ques: "Which HTML element is used to define the structure of an HTML document (contains <head> and <body>)?",
    opt1: "document",
    opt2: "html",
    opt3: "main",
    opt4: "web",
    correct: "html",
  },
];

// Step 2
// Getting Element

//Quiz Container
const quizContainer = document.getElementById("quizContainer");
// Button
const nextBtn = document.getElementById("next-btn");
// Indexing on loop
let index = 0;
// Score var for quiz scoring and showing result
let score = 0;

// Step 3
// Creating Function with loop on button
function nextQuestion() {
    if (quizQuestions.length == index) {
        quizContainer.innerHTML = `${score} out of ${quizQuestions.length}`;
        nextBtn.style.display = 'none';
        Swal.fire({
            title: "Hurray! Quiz Completed",
            showClass: {
                popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
            },
            hideClass: {
                popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
                `,
            },
    });
  } else {
    nextBtn.disabled = true;
    quizContainer.innerHTML =`<div>
        <h1>HTML Quiz</h1>
        <h1>Question # ${index + 1}</h1>
        <h3>${quizQuestions[index].ques}</h3>
        <label>
        <input type = "radio" value = "${quizQuestions[index].opt1}" name = "options"/>
        <span>${quizQuestions[index].opt1}</span>
        </label>
        <br/>
        <label>
        <input type = "radio" value = "${quizQuestions[index].opt2}" name = "options"/>
        <span>${quizQuestions[index].opt2}</span>
        </label>
        <br/>
        <label>
        <input type = "radio" value = "${quizQuestions[index].opt3}" name = "options"/>
        <span>${quizQuestions[index].opt3}</span>
        </label>
        <br/>
        <label>
        <input type = "radio" value = "${quizQuestions[index].opt4}" name = "options"/>
        <span>${quizQuestions[index].opt4}</span>
        </label>
        </div>`;

    // Step 4
    // Getting options value from <label name = "">

    let options = document.getElementsByName("options");

    // Run loop on options use addEventListener when we click on any option, button was eanble

    for (let i = 0; i < options.length; i++) {
      options[i].addEventListener("click", function () {
        nextBtn.disabled = false; //Button enable
      });
    }
  }
}

nextQuestion();

// Step 5 
// Checking correct answers

let options = document.getElementsByName("options")
nextBtn.addEventListener("click" , function(){
    for(let i = 0 ; i < options.length ; i++){
        if(options[i].checked){
            let currentAns = options[i].value;
            let correctAns = quizQuestions[index].correct;
            console.log("user Ans" , currentAns);
            console.log("obj key ans" , correctAns);
            if(currentAns == correctAns){
                score++
            }
        }
    }
    index++;
    nextQuestion()
});