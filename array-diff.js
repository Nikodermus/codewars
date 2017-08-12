function array_diff(a, b) {

    var remove = [];
    var myIndex = 0;
    a.map(function (x, y) {
        for (i in b) {
            if (b[i] == x) {
                remove[myIndex] = y;
                myIndex++;
            }
        }
    });
    for (var i = remove.length - 1; i >= 0; i--) {
        a.splice(remove[i], 1);
    }
    return a;

}