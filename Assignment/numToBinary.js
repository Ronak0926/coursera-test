(function numToBinary(number) {
    let num = number;
    let binaryVersion = ""
    if(num == 0) return console.log("0")
    for (; num > 0; ) {
        binaryVersion = (num % 2) + (binaryVersion);
        num = parseInt(num / 2);        
    }
    console.log(binaryVersion);
})(_)