/* T WAVE MODEL */

export function tWave(t, pattern) {

    let A = 0.4;

    if (pattern === "tall")
        A = 1.2;

    if (pattern === "flat")
        A = 0.1;

    if (pattern === "inverted")
        A = -0.6;

    return A * Math.exp(-(t - 0.35)**2 / (2 * 0.05**2));
}