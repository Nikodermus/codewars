function duplicateEncode(word) {
    word = word.toLowerCase();
    for (i in word) {

        var find = new RegExp('/\'', word.charAt(i), 'g');
        console.log(word.match(find));

        if (word.match(find) !== null && word.match(find).length > 1) {
            console.log('2+');
            word = word.replace(find, ')');
        } else {
            console.log(word.charAt(i));
            word = word.replace(word.charAt(i), '(')
        }
        console.log(word)

    }
    return word;
}