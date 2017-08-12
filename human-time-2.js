function formatDuration(seconds) {
    if (seconds === 0) return "now";
    var y, d, h, m, s = 0;

    y = Math.floor(seconds / 31536000);
    d = Math.floor((seconds - (y * 31536000)) / 86400);
    h = Math.floor((seconds - (y * 31536000) - (d * 86400)) / 3600);
    m = Math.floor((seconds - (y * 31536000) - (d * 86400) - (h * 3600)) / 60);
    s = seconds - (m * 60) - (h * 3600) - (y * 31536000) - (d * 86400);


    if (s === 60) {
        m++;
        s = 0;
    }
    if (m === 60) {
        h++;
        m = 0;
    }
    if (h === 24) {
        d++;
        h = 0;
    }
    if (d === 365) {
        y++;
        d = 0;
    }
    var joinMe = [];

    if (y > 1) {
        joinMe.push(y + " years")
    } else if (y > 0) {
        joinMe.push(y + " year")
    }
    if (d > 1) {
        joinMe.push(d + " days")
    } else if (d > 0) {
        joinMe.push(d + " day")
    }
    if (h > 1) {
        joinMe.push(h + " hours")
    } else if (h > 0) {
        joinMe.push(h + " hour")
    }
    if (m > 1) {
        joinMe.push(m + " minutes")
    } else if (m > 0) {
        joinMe.push(m + " minute")
    }
    if (s > 1) {
        joinMe.push(s + " seconds")
    } else if (s > 0) {
        joinMe.push(s + " second")
    }



    var result = joinMe[0];

    joinMe.forEach(function (elem, i) {
        if (i === 0) return false;
        result += i != joinMe.length - 1 ? ", " + elem : " and " + elem;
    })
    return result;

}