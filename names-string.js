function list(names) {
    var output = '';

    //Join more than 2 names as required
    if (names.length > 1) {
        for (i in names) {
            if (i == 0) {
                output = names[i].name;
            } else if (i == names.length - 1) {
                output += ' & ' + names[i].name;
            } else {
                output += ', ' + names[i].name;

            }
        }
        /* This line should only be added in the final test, not neccesary in reality
        output = output.substring(0, output.length - 2);
        */
        return output;

    } //If it is only one name, return it back
    else if (names.length == 1) {

        return names[0].name;


    } //If nothing is passed, return a void string
    else {
        return '';
    }
}