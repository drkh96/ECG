/* LEAD AMPLITUDE SCALING */

export function leadScale(name) {

    if (name === "V1") return 0.6;
    if (name === "V2") return 0.8;
    if (name === "V3") return 1.0;
    if (name === "V4") return 1.2;
    if (name === "V5") return 1.0;
    if (name === "V6") return 0.9;

    return 1.0; // limb leads
}