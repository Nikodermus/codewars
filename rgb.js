function rgb(r, g, b) {
    r = r < 0 ? 0 : r;
    g = g < 0 ? 0 : g;
    b = b < 0 ? 0 : b;
    r = r > 255 ? 255 : r;
    g = g > 255 ? 255 : g;
    b = b > 255 ? 255 : b;
    r = r < 10 ? 0 + r.toString() : r.toString(16);
    g = g < 10 ? 0 + g.toString() : g.toString(16);
    b = b < 10 ? 0 + b.toString() : b.toString(16);

    return r.toUpperCase() + g.toUpperCase() + b.toUpperCase();
}