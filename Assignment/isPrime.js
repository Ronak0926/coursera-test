(function isPrime(number) {
    if(number <= 1) return console.log("Please provide a value that is 2 or higher")
    for(i = 2; i < number/2; i++) {
        if(number % i === 0) {
            console.log("Not Prime");
            return;
        }
    }
    console.log("Prime");
})(5)