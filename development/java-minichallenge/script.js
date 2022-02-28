

let number = "-3"

if (number < 0 ) {

console.log ('negative');
}

else {
    console.log ('positive');

}



let number1 = "2";
let number2 = "3";
let number3 = "1";

if (number1 >= number2 && number1>= number3)
 {
    console.log ('the first is the greatest')
}
    else if (number2 >= number1 && number2>=number3)
     {
        console.log ('the second is the greatest')
    }

    else  
     {
    console.log ('the third is the greatest')
}

let day = "Saturday"
switch (day) {
    case "Monday":
    console.log  ("4 days until the weekend");
    break;
    case "Tuesday":
    console.log ("3 days until the weekend");
    break;
    case "Wednesday":
    console.log ("only 2 days until the weekend");
    case "Thursday":
    break;
    console.log ("only 1 day until the weekend");
    break;
    default:
    console.log ("Sorry we didn't recognise that day");
    }

    let price = "potatoes"
    switch (price) {
        case "cabbage":
        case  "potatoes":
            console.log ("£2 per kg");
            break;
        case "brocolli":
            console.log ("£1.80 per kg");
            break; 
        case "asparagus":
            console.log ("£3.80 per kg");
            break;
        case "carrots":
            console.log ("£1.50 per kg")
    }
