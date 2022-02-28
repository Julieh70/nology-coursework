

function chooseVeg (event) {
document.getElementById("vegDropdown").classList.toggle("show");

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let price = event.target.value;



let price = "potatoes"

switch (price) {
    case "cabbage":
    case  "potatoes":
        alert ("£2 per kg");
        break;
    case "brocolli":
        alert ("£1.80 per kg");
        break; 
    case "asparagus":
        alert ("£3.80 per kg");
        break;
    case "carrots":
        alert ("£1.50 per kg")
    }

}