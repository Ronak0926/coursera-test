function compareNums() {
    document
        .getElementById("result")
        .innerHTML = ""
    var numOne = parseInt(document.getElementById("firstNum").value)
    var numTwo = parseInt(document.getElementById("secondNum").value)
    if(isNaN(numOne) || isNaN(numTwo)) {
        document
            .getElementById("result")
            .innerHTML = "Please include two numbers!"
        return;
    }
    if(numOne > numTwo) {
        document
            .getElementById("result")
            .innerHTML = numTwo + " < " + numOne
    } else if(numOne < numTwo) {
        document
            .getElementById("result")
            .innerHTML = numOne + " < " + numTwo
    } else if(numOne == numTwo) {
        document
            .getElementById("result")
            .innerHTML = numTwo + " = " + numOne
    }
    
}