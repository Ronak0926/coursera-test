function calculateTable() {
    document
        .getElementById("result")
        .innerHTML = ""
    var factor = parseInt(document.getElementById("factor").value)
    if(isNaN(factor)) {
        document
            .getElementById("result")
            .innerHTML = "Please include a number!"
        return;
    }
    for (i = 0; i < 13; i++) {
        var multiplied = factor * i
        var message = "<br>" + factor + " x " + i + " = " + multiplied + "</br>"
        document
            .getElementById("result")
            .innerHTML += message
    }
}