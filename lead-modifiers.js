/* LEAD ORIENTATION & SIGNAL MODIFIERS */

export function adjustLeadValue(value, leadName) {

    // aVR always inverted
    if (leadName === "aVR")
        return -value;

    // V1 typically has deeper S-wave
    if (leadName === "V1")
        return value * 0.7 - 0.2;

    // V6 typically has tall R-wave
    if (leadName === "V6")
        return value * 1.1 + 0.1;

    return value;
}