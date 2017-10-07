var matrix, histogram;


function biggestSquare(str) {
    matrix = str
        .toUpperCase()
        .replace(/R/g, '0')
        .replace(/F/g, '1')
        .split(' ')
        .map(function (element) {
            return element.split('');
        }, this);

    histogram = [];
    for (row_ind in matrix) {
        histogram[row_ind] = 0;
    }

    for (row_ind in matrix) {
        for (item_ind in matrix[row_ind]) {
            if (matrix[row_ind][item_ind] > 0) {
                histogram[row_ind] += Number(matrix[row_ind][item_ind]);
            }
            else {
                histogram[row_ind] = 0;
            }
        }
    }
    return histogram;
}