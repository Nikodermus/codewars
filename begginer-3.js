function GetSum(a, b) {
    var result, firstNum, secondNum, myArray, index, sumAll;

    //If a and b are the same number, there are no numbers in between
    if (a == b) {
        result = a;
        return result;
    }

    // Check which is the lowest number
    else if (a > b) {
        firstNum = b;
        secondNum = a;
    } else {
        firstNum = a;
        secondNum = b;
    }

    //Fill an array with the numbers in between
    index = 0;
    myArray = [];
    for (var i = firstNum; i <= secondNum; i++) {
        myArray[index] = i;
        index++;
    }

    //Run the array and sum each of the numbers
    sum = 0;
    for (var i = 0; i < myArray.length; i++) {
        sum += myArray[i];
        console.log(myArray[i])

    }

    return sum;






}