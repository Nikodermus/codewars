function permutations(string) {
    ops = [];
    pre = [];
    en = [];
    pos = [];
    // string = string.split('');



    for (var i = 0; i < string.length * 2; i++) {

        for (j in string) {
            let temp = string.substring(j, j);

            for (k in string) {
                for (m in string) {
                    pos[]
                }
            }
        }
        ops[i] = string.substring(0, j + 1) + temp + string.substring(j + 1, string.length);
    }



    //Remove duplicates

    for (i in ops) {
        if (ops.indexOf(ops[i], i + 1) > -1) {
            ops = ops
                .splice(ops.indexOf(ops[i], i + 1), 1);
        }

    }


    return (ops)
}