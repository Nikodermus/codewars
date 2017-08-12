function solution(digits) {
    var strings = [];
    for (var i = 0; i < digits.length; i++) {
        strings[i] = digits.substring(i, i + 5);
    }
    var largest = Number(strings[0]);

    for (i in strings) {
        if (Number(strings[i]) > largest) {
            largest = strings[i];
        }
    }
    return Number(largest);
}