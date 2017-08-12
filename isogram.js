function isIsogram(str) {
    //Parse to lowercase so it won't cause differences
    str = str.toLowerCase();

    //Parse to Array
    str = str.split('');

    //If any letter exists twice, return true or false
    var status = str.some(function (value, index) {
        return str.indexOf(value, index + 1) > -1;
    });

    return !status;

}