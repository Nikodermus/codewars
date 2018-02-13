function scramble(str1, str2) {
    //Convert to lowercase to avoid differences
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    //If every character exists more times in the base than in the word, it means you can get the word from the base
    var a = false;
    for (x in str2) {
        if ((str2.match(new RegExp(str2[x], 'g')) || []).length > (str1.match(new RegExp(str2[x], 'g')) || []).length) {
            a = true;
        }
    }

    //Check if every letter in the word exists in the base
    var b = !str2
        .split('')
        .some((item) => str1.indexOf(item) == -1);

    return (a || b == false) ? false : true
}