function duplicateEncode(word) {
    word.toString();
    word = word.toLowerCase();
    for (var i = 0; i <= word.length; i++) {
        for (var j = 0; j <= word.length; j++) {
            if (word.charAt(i) == word.charAt(j)) {
                word.substring(0, i) + ')' + word.substring(i + 1);
                word.substring(0, j) + ')' + word.substring(j + 1);
            }

        }

        word = word.replace(!')', '(');
    }
    return word;
}