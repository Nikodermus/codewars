function humanReadable(seconds) {
    var minutes, hours, m, h, s = 0;

    //Convert seconds to time measurements
    hours = Math.floor(seconds / 60 / 60);
    minutes = Math.floor((seconds - (hours * 60 * 60)) / 60);
    s = seconds - (minutes * 60) - (hours * 60 * 60);

    //If any is equal to a whole bigger unit, add one to the unit and reset to 0
    if (s == 60) {
        seconds = 0;
        minutes++;
    } else if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    //Add a zero as string to those reseted to 0
    s = s < 10 ? '0' + s : s;
    m = minutes < 10 ? '0' + minutes : minutes;
    h = hours < 10 ? '0' + hours : hours;

    return `${h}:${m}:${s}`

}