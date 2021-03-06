function alphabetPosition(text) {
    var alphabet, subText, myPos, finalText, newText;

    //Convert to lowercase to avoid differences, then into an array
    subtext = text
        .toLowerCase()
        .split('');

    //Create the ABC array
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    //Run the array with the parameter and see if it matches any position of the alphabet position, if so, fill a new array with the letter position plus one (Because 0 index)
    finalText = [];
    for (i in subText) {
        for (j in alphabet) {
            if (subText[i] == alphabet[j]) {
                finalText[i] = Number(j) + 1;
            }
        }
    }

    //Join the array into a single string
    newText = '';
    for (i in finalText) {
        newText += finalText[i] + " ";
    }

    //Remove the last unnecessary space
    newText = newText.substring(0, newText.length - 1);

    return newText;
}