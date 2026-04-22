var questions = [
    {
      Question: "Parts of computer which we can't touch and see are -",
      option1: "Hardware",
      option2: "Software",
      option3: "Firmware",
      option4: "Nowhere",
      answer: "Software"
    },
    {
      Question: "Microphone is an-",
      option1: "Input device",
      option2: "Output device",
      option3: "Processing device",
      option4: "Storage device",
      answer: "Input device"
    },
    {Question: "Paint is a __",
      option1: "System software",
      option2: "Application Software",
      option3: "Operating System",
      option4: "New software",
      answer: "Application Software"
    },
    {
      Question: "Long horizontal bar at the bottom of the desktop is called-",
      option1: "Icons",
      option2: "Start button",
      option3: "Task bar",
      option4: "Title bar",
      answer: "Task bar"
    },
    {
      Question: "Small pictures with labels on the desktop are called -",
      option1: "Games",
      option2: "Points",
      option3: "Icons",
      option4: "Tickets",
      answer: "Icons"
    },
  ]
  var index = 0;
  var score = 0;
 
  function getQuestion(){
    var quizContainer = document.getElementById("question-Box")
    var option = document.getElementsByName("option")
    for(var i = 0; i < option.length; i++){
        // console.log(option[i].value, option[i].checked);
        if(option[i].checked){
            //console.log(questions[index-1].answer);
            
           if(option[i].value  === questions[index-1].answer){
            score++
            //console.log(score);
         
            
           }
            
        }
        
    }
    if(!questions[index]){
         quizContainer.innerHTML = `
         <h1 class="text-center">Your Score is : ${score}</h1>
         `
        return
    }
    quizContainer.innerHTML = `
    <h5>Question${(index+1)}</h5>
    <p class="question fw-bold">${questions[index].Question} </p>
            <label class="border-bottom"><input type="radio" name="option" value="${questions[index].option1}"> ${questions[index].option1}</label><br>
            <label class="border-bottom"><input type="radio" name="option" value="${questions[index].option2}"> ${questions[index].option2}</label><br>
            <label class="border-bottom"><input type="radio" name="option" value="${questions[index].option3}"> ${questions[index].option3}</label><br>
            <label class="border-bottom"><input type="radio" name="option" value="${questions[index].option4}"> ${questions[index].option4}</label>
            <br>
          

            <button id="nextBtn" class="btn btn-success w-25 mx-auto" onclick = "getQuestion()">Next</button>
    `
    if(index=== questions.length-1){
        var nextBtn = document.getElementById("nextBtn")
        nextBtn.innerHTML = "Submit"
        nextBtn.classList.add("btn-danger")
        
    }
    index++
}

  getQuestion()
  

