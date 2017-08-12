function array_diff(a, b) {

    var remove = [];
    var myIndex = 0;

    //Check everytime that one elements of the b array exists in the a array, store the index
    a.map(function (x, y) {
        for (i in b) {
            if (b[i] == x) {
                remove[myIndex] = y;
                myIndex++;
            }
        }
    });

    //If it exists, remove it from the a array
    for (var i = remove.length - 1; i >= 0; i--) {
        a.splice(remove[i], 1);
    }
    return a;

}