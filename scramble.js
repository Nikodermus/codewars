function scramble(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    var a = false;
    for (x in str2) {
        if ((str2.match(new RegExp(str2[x], 'g')) || []).length > (str1.match(new RegExp(str2[x], 'g')) || []).length) {
            a = true;
        }
    }
    var b = !str2
        .split('')
        .some((item) => str1.indexOf(item) == -1);
    return (a || b == false) ? false : true
}