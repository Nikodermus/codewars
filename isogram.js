function isIsogram(str) {
    //Parse to lowercase so it won't cause differences, then to an array
    str = str
        .toLowerCase()
        .split('');

    //If any letter exists twice, return true or false
    var status = str.some(function (value, index) {
        return str.indexOf(value, index + 1) > -1;
    });

    return !status;
}