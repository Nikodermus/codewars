function isIsogram(str) {
    str = str.toLowerCase()
    str = str.split('');
    var status = str.some(function (value, index) {
        return str.indexOf(value, index + 1) > -1;
    });
    return !status;

}