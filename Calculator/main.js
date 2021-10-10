
var userInputArray = [];

var numbersAmount = document.querySelectorAll(".numbers .row span").length;

for (var i = 0; i < numbersAmount; i++) {

  document.querySelectorAll("span")[i].addEventListener("click", NumberClicked);

}

for (var i = 0; i < 4; i++) {

  document.querySelectorAll(".operator-self")[i].addEventListener("click", OperatorClicked);

}

function NumberClicked () {

  var userNumberInput = parseInt(this.innerHTML);

  document.querySelector(".screen").innerHTML = userNumberInput;

  operation (userNumberInput);

}

function OperatorClicked () {

  var userOperatorInput = (this.innerHTML);

  document.querySelector(".screen").innerHTML = userOperatorInput;

  operation (userOperatorInput);
}

function operation (userInput) {

  if (userInputArray.length < 3 ) {

    userInputArray.push(userInput);

  } else {

    userInputArray = [];

    userInputArray.push(userInput);

  }

  if (userInputArray.length === 3) {
    
    var result = "";

    if(userInputArray[1] === "+") {
      
      result = userInputArray[0] + userInputArray[2];

    } 
    else if (userInputArray[1] === "-") {
      
      result = userInputArray[0] - userInputArray[2];


    } else if (userInputArray[1] === "*") {
      
      result = userInputArray[0] * userInputArray[2];

    } else if (userInputArray[1] === "/") {
      
      result = userInputArray[0] / userInputArray[2];

    }

    document.querySelector(".equal").addEventListener("click", function() {

      document.querySelector(".screen").innerHTML = result;

    });

  } else {

    console.log(userInputArray);

  }

}