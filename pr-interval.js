/* PR INTERVAL MODEL */

export function prDelay(pattern, t = 0) {

    if (pattern === "first_degree")
        return 0.28;

    if (pattern === "wenckebach")
        return 0.18 + 0.04 * Math.sin(t * 0.3);

    if (pattern === "mobitz2")
        return 0.18; // dropped beats handled elsewhere

    if (pattern === "chb")
        return 0.00; // AV dissociation

    return 0.16; // normal
}