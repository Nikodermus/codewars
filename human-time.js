function humanReadable(seconds) {
    var minutes, hours, m, h, s = 0;

    hours = Math.floor(seconds / 60 / 60);
    minutes = Math.floor((seconds - (hours * 60 * 60)) / 60);
    s = seconds - (minutes * 60) - (hours * 60 * 60);

    if (s == 60) {
        seconds = 0;
        minutes++;
    } else if (minutes == 60) {
        minutes = 0;
        hours++;
    }

    s = s < 10 ? '0' + s : s;
    m = minutes < 10 ? '0' + minutes : minutes;
    h = hours < 10 ? '0' + hours : hours;

    return `${h}:${m}:${s}`

}