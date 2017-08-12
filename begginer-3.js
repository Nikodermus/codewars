function GetSum(a, b) {

    //console.log('started');

    var result, firstNum, secondNum, myArray, index, sumAll;

    if (a == b) {
        result = a;
        return result;
    } else if (a > b) {
        firstNum = b;
        secondNum = a;
    } else {
        firstNum = a;
        secondNum = b;

    }

    index = 0;
    myArray = [];

    for (var i = firstNum; i <= secondNum; i++) {

        myArray[index] = i;
        index++;

    }

    sum = 0;

    for (var i = 0; i < myArray.length; i++) {
        sum += myArray[i];
        console.log(myArray[i])

    }

    result = sum;
    return result;






}