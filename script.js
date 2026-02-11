function getMoonPhase(year, month, day) {
    let c = e = jd = b = 0;
    if (month < 3) {
        year--;
        month += 12;
    }
    ++month;
    c = 365.25 * year;
    e = 30.6 * month;
    jd = c + e + day - 694039.09; // jd is total days elapsed
    jd /= 29.5305882; // divide by the moon cycle
    b = parseInt(jd); // int(jd) -> b, any day of cycle
    jd -= b; // subtract integer part to leave fractional part of cycle
    b = Math.round(jd * 8); // scale fraction from 0-8 and round

    if (b >= 8) b = 0; // 0 and 8 are the same so turn 8 into 0

    switch (b) {
        case 0: return "New Moon";
        case 1: return "Waxing Crescent";
        case 2: return "First Quarter";
        case 3: return "Waxing Gibbous";
        case 4: return "Full Moon";
        case 5: return "Waning Gibbous";
        case 6: return "Third Quarter";
        case 7: return "Waning Crescent";
        default: return "Unknown";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const phase = getMoonPhase(now.getFullYear(), now.getMonth() + 1, now.getDate());
    document.getElementById('moon-phase').innerText = phase;

    console.log("Fenrir is watching.");
});
