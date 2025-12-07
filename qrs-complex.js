/* QRS COMPLEX MODEL */

export function qrsWave(t, pattern, pr) {

    if (t < pr) return 0;

    let width = 0.04;

    if (pattern === "rbbb" || pattern === "lbbb")
        width = 0.12;

    if (pattern === "wide_vt")
        width = 0.16;

    let delta = 0;
    if (pattern === "delta") {
        delta = 0.5 * (t - pr);
        if (delta < 0) delta = 0;
    }

    return (
        -0.3 * Math.exp(-(t - pr - 0.01)**2 / 0.0002) +
         1.6 * Math.exp(-(t - pr - 0.02)**2 / width) +
        -0.4 * Math.exp(-(t - pr - 0.03)**2 / 0.0001) +
         delta
    );
}