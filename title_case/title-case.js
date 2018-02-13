function titleCase(title, minorWords) {
    var finalText, splitTitle, splitMinor;

    //Return an empty string if the parameter given is void
    if (title.length <= 0 || title == undefined) {
        return '';
    }

    //Convert the parameters to lowercase to avoid incongruities
    title = title.toLowerCase();
    minorWords = minorWords.toLowerCase();

    //Convert the parameters in arrays
    splitTitle = title.split(' ');
    splitMinor = minorWords.split(' ');

    for (i in splitTitle) {
        var change = 0;

        //Check each word that should be kept lowerca
        for (j in splitMinor) {
            if (splitTitle[i] == splitMinor[j]) {
                change = 0;
            } else {
                change = 1;
            }
        }

        //If it should change, convert the first letter to uppercase
        if (change) {
            splitTitle[i] = splitTitle[i].charAt(0).toUpperCase() + splitTitle[i].substring(1, splitTitle[i].length + 1);
        }

        //The first letter in the first word should always be uppercase
        if (i == 0) {
            finalText = splitTitle[i].charAt(0).toUpperCase() + splitTitle[i].substring(1, splitTitle[i].length + 1);
        }

        //Add the words that are simply kept lowercase
        else {
            finalText += " " + splitTitle[i];
        }
    }

    return finalText;
}