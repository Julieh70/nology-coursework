function calculateYearsUntilRetirement(event) {
  const currentAge = event.target.value;  

  //start your code here...
     yearsLeft = 65 - currentAge;
  alert(yearsLeft)
}




function getGreetingInFrench(event) {
    const greeting = event.target.value;

    if (greeting == "Hello") {
    alert('Bonjour')
    } else if (greeting == "Goodbye") {
    alert ('au revoir')
    } else {
        alert ('not recognised')
    }

 }


 function getTimeInMinutes (event) {
     const timeInSeconds = event.target.value; 

    const timeInMinutes = timeInSeconds/60;
    alert(timeInMinutes)
 }
