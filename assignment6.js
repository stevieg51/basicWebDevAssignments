function circleCircum () 
{
    var diameter = prompt("Enter the diameter: ");
    
    diameter = parseFloat(diameter);
   
    var Cirucmfrence = Math.PI * diameter;
    console.log(Cirucmfrence);

    // document.getElementById.givingthisatry = Cirucmfrence;

    return Cirucmfrence;
}

function tempConversion() {
    var number = prompt("Enter the temperature (Number):");
    var type = prompt('Enter the degree of measurement for the temperature ("F" for farhenheit or "C" for celcius): '); 
    var converted = " ";

    // checkValueTemp(type);
    number = parseFloat(number);
   
    if (type = "F" || (type = "f")) {
        converted = (number-32) * 5/9;
        console.log(converted);
        // document.getElementById.givingthisatry = converted;
        return converted;
    }
    else if (type = "C" || (type="c")) {
        converted  = (number * 9/5 ) +32;
        console.log(converted);
        // document.getElementById.givingthisatry = converted;
        return converted;

    }

}

function interestCalc() {
    var principal = prompt("Enter the principal: ");
    var interestRate = prompt("Enter the interest rate: " ); 
    var time = prompt("Enter the time (in years): " );

    interestRate = interestRate/100;

    var interest = principal * (1 + interestRate/12) ** (12*time);
    console.log(interest);
}

// function checkValueTemp(temp) {
//     var correctTemp = temp;

//     while (correctTemp != "C" || correctTemp != "F") {
//         correctTemp = prompt("Please enter a valid option. (F, C, f, c)");
//     }

//     return correctTemp;

// }