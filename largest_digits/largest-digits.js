function solution(digits) {
    var strings = [];

    //Divide the parameter into 5-digit numbers
    for (var i = 0; i < digits.length; i++) {
        strings[i] = digits.substring(i, i + 5);
    }

    //Parse the digits to numbers
    var largest = Number(strings[0]);

    //Check which is the larges number of the created 5-digit number
    for (i in strings) {
        if (Number(strings[i]) > largest) {
            largest = strings[i];
        }
    }

    return Number(largest);
}