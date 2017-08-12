function isTriangular(n) {
    var test = ['1'];
    var last = 2;
    for (var i = 1; i < n; i++) {

        test[i] = last + i;
        last = test[i] + 1;

    }
    return n == 1 || test.indexOf(n) > -1;
}