function titleCase(title, minorWords) {
    var finalText, splitTitle, splitMinor;
    if (title.length <= 0 || title == undefined) {
        return '';

    }

    title = title.toLowerCase();
    minorWords = minorWords.toLowerCase();

    splitTitle = title.split(' ');
    splitMinor = minorWords.split(' ');
    console.log(splitTitle, splitMinor)

    for (i in splitTitle) {
        var change = 0;

        for (j in splitMinor) {
            if (splitTitle[i] == splitMinor[j]) {
                change = 0;
            } else {
                change = 1;
            }
        }
        if (change) {
            splitTitle[i] = splitTitle[i].charAt(0).toUpperCase() + splitTitle[i].substring(1, splitTitle[i].length + 1);
        }
        if (i == 0) {
            finalText = splitTitle[i].charAt(0).toUpperCase() + splitTitle[i].substring(1, splitTitle[i].length + 1);
        } else {
            finalText += " " + splitTitle[i];
        }
    }





    return finalText;

}