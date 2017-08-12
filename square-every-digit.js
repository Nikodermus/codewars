function squareDigits(num) {

    var eachNumber, eachSquare, stringSquare;

    //Parse the parameter to String
    num = num.toString();

    //Fill the array with every char
    eachNumber = [];
    for (var i = 0; i < num.length; i++) {
        eachNumber[i] = num.charAt(i);
    }

    //Convert each item in the array, parse it to number and make it a swuare
    eachSquare = [];
    for (i in eachNumber) {
        eachSquare[i] = Number(eachNumber[i]) * Number(eachNumber[i]);
    }

    //Fill a new string with the square numbers
    stringSquare = '';
    for (i in eachSquare) {
        stringSquare += eachSquare[i].toString();
    }

    return Number(stringSquare);

}