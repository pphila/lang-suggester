
window.addEventListener("load", function() {
  const form = document.querySelector("form");
  let resetBtn = document.getElementById("reset");
  let result = document.getElementById("results")
  form.addEventListener("submit", function(event) {
    result.removeAttribute("class");
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
      document.getElementById("resultPython").setAttribute("class", "hidden");
      document.getElementById("resultJavaScript").setAttribute("class", "hidden");
    } else if (score < 6 && score >= 4) {
      document.getElementById("resultPython").removeAttribute("class");
      document.getElementById("resultCSharp").setAttribute("class", "hidden");
      document.getElementById("resultJavaScript").setAttribute("class", "hidden");
    } else if (score < 4 && score >= 0) {
      document.getElementById("resultJavaScript").removeAttribute("class");
      document.getElementById("resultCSharp").setAttribute("class", "hidden");
      document.getElementById("resulrPython").setAttribute("class", "hidden");
    } else {
      document.getElementById("resulNone").removeAttribute("class");
      document.getElementById("resultCSharp").setAttribute("class", "hidden");
      document.getElementById("resulrPython").setAttribute("class", "hidden");
      document.getElementById("resultJavaScript").setAttribute("class", "hidden");
    }
  });

  form.addEventListener("submit", function() {
    resetBtn.removeAttribute("class");
  });

  resetBtn.addEventListener("click", function() {
    result.setAttribute("class", "hidden");
    document.querySelector("form").clearCheck();
    document.querySelector("input[name='question1Rad']").value = null;
    document.querySelector("input[name='question2Rad']").value = null;
    document.querySelector("input[name='question3Rad']").value = null;
    document.querySelector("input[name='question4Rad']").value = null;
    document.querySelector("input[name='question5Rad']").value = null;
  });
});