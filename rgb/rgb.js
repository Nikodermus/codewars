function rgb(r, g, b) {
    //If any number is lower than 0, return 0;
    r = r < 0 ? 0 : r;
    g = g < 0 ? 0 : g;
    b = b < 0 ? 0 : b;

    //If any number is bigger than a byte, return 255
    r = r > 255 ? 255 : r;
    g = g > 255 ? 255 : g;
    b = b > 255 ? 255 : b;

    //If <10, add a 0 to the number, if bigger parse the number to an Hexadecimal number
    r = r < 10 ? 0 + r.toString() : r.toString(16);
    g = g < 10 ? 0 + g.toString() : g.toString(16);
    b = b < 10 ? 0 + b.toString() : b.toString(16);

    return r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
}