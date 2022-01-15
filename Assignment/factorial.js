(function factorial(number) {
    if(number <= 1) return console.log("Please provide a value that is 2 or higher.")
    if(isNaN(number)) return console.log("Please provide a number.")
    var multiplier = 1;
    for(i = number; i > 1; i--) {
        multiplier = multiplier * i
    }
    console.log(multiplier)
})(10)