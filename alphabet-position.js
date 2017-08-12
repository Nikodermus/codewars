function alphabetPosition(text) {
    var alphabet, subText, myPos, finalText, newText;

    text = text.toLowerCase();

    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    subText = [];
    for (var i = 0; i <= text.length; i++) {
        subText[i] = text.charAt(i);
    }
    finalText = [];

    for (i in subText) {
        for (j in alphabet) {
            if (subText[i] == alphabet[j]) {
                finalText[i] = Number(j) + 1;
            }
        }

    }
    newText = '';

    for (i in finalText) {
        newText += finalText[i] + " ";


    }

    newText = newText.toString()
    newText = newText.substring(0, newText.length - 1);



    return newText;
}