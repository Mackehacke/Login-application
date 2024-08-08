function courseData(courses) {
  const outputElement = document.querySelector('#course_table > tbody'); //Jag deklarerar en variabel som fångar in #coursetable > tbody så att information kan läggas in där senare genom loopen.
  outputElement.innerHTML = ''; //outputElement ska vara tom till att börja med.
  for (let course of courses) {
    //Loopen går igenom strängen (API:et) och hämtar önskad information från den.
    let row = `
          <tr>
              <td>${course.courseId}</td>
              <td>${course.courseName}</td>
              <td>${course.credit}</td>
              <td>${course.school}</td>
              <td>${course.startWeek}</td>
              <td>${course.endWeek}</td>
          </tr>`; //I koderna ovan hämtas den data jag deklarer ska hämtas från API:et genom for-loopen.
    outputElement.innerHTML += row; //Genom denna kodrad skrivs den hämtade informationen från API:et in i outputElement.
  }
}

const uri = 'http://webbred2.utb.hb.se/~fewe/api/api.php?data=courses'; //Jag deklarerar en variabel med API-länken för att kunna hämta data därifrån.
fetch(uri) //Fetch hämtar data från API:et.
  .then((response) => response.json()) //Läser in som JSON med response.json.
  .then((data) => courseData(data));
