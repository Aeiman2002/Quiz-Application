// Objects in Array 
const quizQuestions = [
    {
        ques: "What does HTML stand for?", 
        opt1: "Hyper Text Markup Language",
        opt2: "Hyperlinks and Text Markup Language",
        opt3: "Home Tool Markup Language",
        opt4: "High Tech Modern Language",
        correct: "opt1",
    },
    {
        ques: "Which HTML tag is used to define a hyperlink?", 
        opt1: "<href>",
        opt2: "<hyperlink>",
        opt3: "<a>",
        opt4: "<link>",
        correct: "opt3",
    },
    {
        ques: "What is the correct HTML element for the largest heading?", 
        opt1: "<head>",
        opt2: "<h1>",
        opt3: "<heading>",
        opt4: "<h6>",
        correct: "opt2",
    },
    {
        ques: " Which attribute is used to specify an image's file path in the <img> tag?", 
        opt1: "src",
        opt2: "href",
        opt3: "link",
        opt4: "alt",
        correct: "opt1",
    },
    {
        ques: " Which HTML tag is used to insert a line break?", 
        opt1: "<lb>",
        opt2: "<break>",
        opt3: "<br>",
        opt4: "<newline>",
        correct: "opt3",
    },
    {
        ques: "What is the correct HTML for adding a background color?", 
        opt1: "<body bg=green>",
        opt2: "<body style=background-color: green;>",
        opt3: "<background>green</background>",
        opt4: "<body color=green>",
        correct: "opt2",
    },
    {
        ques: "Which HTML tag is used to create an unordered (bulleted) list?", 
        opt1: "<ol>",
        opt2: "<list>",
        opt3: "<ul>",
        opt4: "<li>",
        correct: "opt4",
    },
    {
        ques: "Which tag is used to define a table row in HTML?", 
        opt1: "<td>",
        opt2: "<tr>",
        opt3: "<th>",
        opt4: "<table-row>",
        correct: "opt2",
    },
    {
        ques: "What is the correct HTML for inserting an image?", 
        opt1: "<img src=image.jpg alt=My Image>",
        opt2: "<image src=image.jpg>",
        opt3: "<img href=image.jpg alt=My Image>",
        opt4: "<picture src=image.jpg>",
        correct: "opt1",
    },
    {
        ques: "Which HTML element is used to define the structure of an HTML document (contains <head> and <body>)?", 
        opt1: "<document>",
        opt2: "<html>",
        opt3: "<main>",
        opt4: "<web>",
        correct: "opt2",
    },
]

// Getting Element

//Quiz Container
const quizContainer = document.getElementById("quiz-content")
// Button
const nextBtn = document.getElementById("next-btn")
// Indexing on loop
const index = 0

// Creating Function with loop on button
nextBtn.addEventListener("click", nextQuestion)
function nextQuestion() {
    if(quizQuestions.length == index){
        Swal.fire({
            title: "Hurray! Quiz Completed",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }
    else{
        quizContainer.innerHTML = `<h1>${quizQuestions[index].ques}</h1>
        <label>
        <input type="radio" value="${quizQuestions[index].opt1}">
        ${quizQuestions[index].opt1}
        </label>
        <br>
        <label>
        <input type="radio" value="${quizQuestions[index].opt2}">
        ${quizQuestions[index].opt2}
        </label>
        <br>
        <label>
        <input type="radio" value="${quizQuestions[index].opt3}">
        ${quizQuestions[index].opt3}
        </label>
        <br>
        <label>
        <input type="radio" value="${quizQuestions[index].opt4}">
        ${quizQuestions[index].opt4}
        </label>
        <br>`
        index++;
    }
}

nextQuestion();