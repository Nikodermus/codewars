function squareDigits(num) {

    var eachNumber, eachSquare, stringSquare;
    num = num.toString();

    eachNumber = [];
    for (var i = 0; i < num.length; i++) {
        eachNumber[i] = num.charAt(i);
        //console.log(eachNumber[i]);

    }

    eachSquare = [];
    for (i in eachNumber) {
        eachSquare[i] = Number(eachNumber[i]) * Number(eachNumber[i]);
        //console.log(eachSquare[i])
    }

    stringSquare = '';
    for (i in eachSquare) {
        stringSquare += eachSquare[i].toString();
    }

    return Number(stringSquare);

}