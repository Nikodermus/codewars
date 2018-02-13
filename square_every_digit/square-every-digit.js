function squareDigits(num) {
    return Number(num //The output will be parsed into number
        .toString() //Convert to string
        .split('') //Convert to array
        .map((x) => Math.pow(Number(x), 2)) //Square every item in the array
        .join('')); //Join into a single String
}