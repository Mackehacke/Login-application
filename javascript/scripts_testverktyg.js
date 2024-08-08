function quizData(quizes) {
  const outputElement = document.querySelector('#quiz_table > tbody'); //Jag deklarerar en variabel som fångar in #coursetable > tbody så att information kan läggas in där senare genom loopen.
  outputElement.innerHTML = ''; //outputElement är tom till att börja med.
  for (let quiz of quizes) {
    //Loopen går igenom strängen som är API:et och hämtar önskad information.
    let row = `
          <tr>
              <td>${quiz.course}</td>
              <td>${quiz.type}</td>
              <td>${quiz.difficulty}</td>
              <td>${quiz.question}</td>
              <td>${quiz.correct_answer}</td>
              <td>${quiz.incorrect_answers}</td>
          </tr>`; //Den information jag deklarerat ska hämtas från API:et hämtas genom koderna ovan.
    outputElement.innerHTML += row; //Genom denna kodrad skrivs den hämtade informationen från API:et in i outputElement.
  }
}

const uri = 'http://webbred2.utb.hb.se/~fewe/api/api.php?data=quiz'; //Här deklareras en variabel med API-länken så att information kan hämtas därifrån.
fetch(uri) //Fetch hämtar API:et.
  .then((response) => response.json()) //Läser in som JSON med response.json.
  .then((data) => quizData(data));
