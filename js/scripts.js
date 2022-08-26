//User Interface Logic
function handleFormAnswers(event) {
  event.preventDefault();
  const answer1 = parseInt.document.querySelector("input[name='question1Rad']:chekced").value;
  const answer2 = parseInt.document.querySelector("input[name='question2Rad']:checked").value;
  const answer3 = parseInt.document.querySelector("input[name='question3Rad']:checked").value;
  const answer4 = parseInt.document.querySelector("input[name='question4Rad']:checked").value;
  const answer5 = parseInt.document.querySelector("input[name='question5Rad']:checked").value;
  const score = answer1 + answer2 + answer3 + answer4 + answer5;
}
