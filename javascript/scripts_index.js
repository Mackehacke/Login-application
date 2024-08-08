//Kodraden under skapar en global array för att mellanlagra data från API:et.
let students = [];

function login() {
  const loginUsername = document.getElementById('username').value; //Denna kodrad och raden under hämtar det som skrivs in i input-fälten med ID username respektive password.
  const loginPassword = document.getElementById('password').value;
  let authenticated = false; //Skapar en boolean som från början är falskt på authenticated.

  for (let student of students) {
    if (
      student.login.username === loginUsername &&
      student.login.password === loginPassword
    ) {
      //If-satsen deklarerar ifall det som skrivs in i input-fälten matchar med uppgifterna från API:et ska authenticated bli sant.
      authenticated = true; //Här ställs boolean authenticated om till sant.
      break; //Break kan användas här för att avsluta loopen.
    }
  }
  if (authenticated) {
    //Om authenticated blir sant ska användaren få en prompt att den är inloggad samt bli omdirigerad till kursinformationsidan.
    alert('Du är inloggad, välkommen!');
    window.location.href = './kursinfo.html'; //Med denna kodrad blir användaren omdirigerad till kursinfo.html.
  } else {
    //Om något av det som skrivs in i input-fälten ej stämmer överens med användaruppgifterna från API:et får användaren ett felmeddelande och får försöka igen.
    alert(
      'Användarnamnet eller lösenordet är felaktigt, vänligen försök igen.'
    );
    document.getElementById('password').value = ''; //Tömmer password-fältet om felaktiga uppgifter har fyllts i.
  }
}

const uri = 'http://webbred2.utb.hb.se/~fewe/api/api.php?data=students'; //Jag deklarerar en variabel med API-länken för att sedan kunna hämta den.

fetch(uri) //Med fetch hämtar jag datan i API:et och kommer åt informationen som finns där.
  .then((response) => response.json()) //Läser in som JSON med response.json.
  .then((data) => (students = data));
