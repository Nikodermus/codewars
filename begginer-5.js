function isTriangular(n) {
    var test = ['1'];
    var last = 2;

    //Create the series of Triangular numbers
    for (var i = 1; i < n; i++) {
        test[i] = last + i;
        last = test[i] + 1;
    }

    //Retunr the number parameter if it's one, otherwise use an as index
    return n == 1 || test.indexOf(n) > -1;
}