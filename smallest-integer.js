class SmallestIntegerFinder {
    findSmallestInt(args) {
        var smallest = args[0];

        //Compare each element, if it is smaller, redefine the var
        for (var i = 0; i < args.length; i++) {
            if (smallest > args[i]) {
                smallest = args[i];
            }
        }

        return smallest;
    }
}