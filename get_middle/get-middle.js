function getMiddle(s) {
    //Check if the length string is odd or even
    if (s.length % 2 == 0) {
        //If even, return two chars
        return s.substring((s.length / 2) - 1, (s.length / 2) + 1);
    } else {
        //If odd, return middle string
        return s.charAt(Math.floor(s.length / 2));
    }
}