function zero(number) {
    if (typeof number == 'undefined') {
        return 0;
    } else {
        return whichCalc(number, 0);
    }
}

function one(number) {
    if (typeof number == 'undefined') {
        return 1;
    } else {
        return whichCalc(number, 1);
    }
}

function two(number) {
    if (typeof number == 'undefined') {
        return 2;
    } else {
        return whichCalc(number, 2);
    }
}

function three(number) {
    if (typeof number == 'undefined') {
        return 3;
    } else {
        return whichCalc(number, 3);
    }
}

function four(number) {
    if (typeof number == 'undefined') {
        return 4;
    } else {
        return whichCalc(number, 4);
    }
}

function five(number) {

    if (typeof number == 'undefined') {
        return 5;
    } else {
        return whichCalc(number, 5);
    }

}

function six(number) {
    if (typeof number == 'undefined') {
        return 6;
    } else {
        return whichCalc(number, 6);
    }
}

function seven(number) {
    if (typeof number == 'undefined') {
        return 7;
    } else {
        return whichCalc(number, 7);
    }
}

function eight(number) {
    if (typeof number == 'undefined') {
        return 8;
    } else {
        return whichCalc(number, 8);
    }
}

function nine(number) {
    if (typeof number == 'undefined') {
        return 9;
    } else {
        return whichCalc(number, 9);
    }
}

function plus(number) {
    return ['+', number];
}

function minus(number) {
    return ['-', number];
}

function times(number) {
    return ['*', number];
}

function dividedBy(number) {
    return ['/', number];
}

function whichCalc(number, calc) {
    if (number[0] == '+') return Number(calc + Number(number[1]));
    if (number[0] == '-') return Number(calc - Number(number[1]));
    if (number[0] == '*') return Number(calc * Number(number[1]));
    if (number[0] == '/') return Number(calc / Number(number[1]));
}