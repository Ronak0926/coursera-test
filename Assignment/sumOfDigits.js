(function sumOfDigits(number) {
    if(number < 0) return console.log("Please provide a value that is 0 or higher.")
    if(isNaN(number)) return console.log("Please provide a number.")
    let total = 0;
    number = String(number).split("").map((num => {
        number = Number(num)
        console.log(number)
    }))
    for(i = 0; number[i]; i++) {
        total += number[i]
    }
    console.log(total)
})(13847)