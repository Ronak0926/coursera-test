(function multiplicationTable(number) {
    for (i = 0; i < 13; i++) {
        var multiplied = number * i
        console.log(number + " x " + i + " = " + multiplied)   
    }
})(7)