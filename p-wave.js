/* P WAVE MODEL */

export function pWave(t, pattern) {

    if (pattern === "afib") return 0;

    if (pattern === "flutter")
        return 0.25 * ( ((t*200)%1) < 0.5 ? -1 : 1 );

    let A = 0.15;
    let sigma = 0.04;

    if (pattern === "p_mitrale") sigma = 0.10;
    if (pattern === "p_pulmonale") A = 0.35;

    return A * Math.exp(-(t - 0.1)**2 / (2 * sigma**2));
}