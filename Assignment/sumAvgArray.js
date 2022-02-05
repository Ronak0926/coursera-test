(function sumAvgArray(array) {
    var sum = 0;
    var i = 0;
    for (i = 0; array[i]; i++) {
        sum += array[i]
    }
    console.log("\n\nSum: " + sum)
    var updatingAverage = i
    updatingAverage = sum / (updatingAverage)
    console.log("Average: " + updatingAverage + "\n\n")
})([1, 2, 3, 4])