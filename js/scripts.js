//User Interface Logic
//window.addEventListener("load", function() {
  //let form = document.querySelector("form");
  //let result = document.getElementById("result")

  //form.addEventListener("submit", function(event) {
    //event.preventDefault();
    //const answer1 = parseInt.document.querySelector("input[name='question1Rad']:chekced").value;
    //const answer2 = parseInt.document.querySelector("input[name='question2Rad']:checked").value;
    //const answer3 = parseInt.document.querySelector("input[name='question3Rad']:checked").value;
    //const answer4 = parseInt.document.querySelector("input[name='question4Rad']:checked").value;
    //const answer5 = parseInt.document.querySelector("input[name='question5Rad']:checked").value;
    //const score = answer1 + answer2 + answer3 + answer4 + answer5;
  
    //result.removeAttribure("class");
    //if (score >= 6) {
      //document.querySelector("#resultCSharp").removeAttribute("class");
    //} else if (score <6 && score >= 4) {
      //document.querySelector("#resultPython").removeAttrubute("class");
    //} else if (score < 4) {
      //document.querySelector("#resultJavaScript").removeAttribute("class");
    //} else {
      //document.querySelector("#resultNone").removeAttribute("class");
    //}
  //});
//});

window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

    let answer1 = parseInt(document.querySelector("input[name='question1Rad']:checked").value);
    console.log(answer1);
    let answer2 = parseInt(document.querySelector("input[name='question2Rad']:checked").value);
    console.log(answer2);
    let answer3 = parseInt(document.querySelector("input[name='question3Rad']:checked").value);
    console.log(answer3);
    let answer4 = parseInt(document.querySelector("input[name='question4Rad']:checked").value);
    console.log(answer4);
    let answer5 = parseInt(document.querySelector("input[name='question5Rad']:checked").value);
    console.log(answer5);
    const score = answer1 + answer2 + answer3 + answer4 + answer5;

    if (score >= 6) {
      document.getElementById("resultCSharp").removeAttribute("class");
    } else if (score < 6 && score >= 4) {
      document.getElementById("resultPython").removeAttribute("class");
    } else if (score < 4 || score === 0) {
      document.getElementById("resultJavaScript").removeAttribute("class");
    } else {
      document.getElementById("resulNone").removeAttribute("class");
    }
  };
};