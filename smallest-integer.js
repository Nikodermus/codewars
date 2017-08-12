class SmallestIntegerFinder {
    findSmallestInt(args) {
        var smallest = args[0];
        for (var i = 0; i < args.length; i++) {
            if (smallest > args[i]) {
                smallest = args[i];
            }
        }
        return smallest;
    }
}