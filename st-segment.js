/* ST SEGMENT MODEL */

export function stSegment(t, pattern, pr) {

    if (t < pr + 0.05) return 0;

    if (pattern === "st_elev")
        return 0.7;

    if (pattern === "st_depr")
        return -0.5;

    if (pattern === "scooped")
        return -0.3 * Math.sin((t - 0.25) * 15);

    if (pattern === "brugada")
        return 0.7 * Math.exp(-5 * (t - pr - 0.05));

    return 0;
}