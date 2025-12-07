/* FULL ECG WAVE — COMBINES ALL COMPONENTS */

import { pWave } from "./p-wave.js";
import { prDelay } from "./pr-interval.js";
import { qrsWave } from "./qrs-complex.js";
import { stSegment } from "./st-segment.js";
import { tWave } from "./t-wave.js";
import { ECG_PATTERN } from "../patterns.js";

export function generateECG(t) {

    const pr = prDelay(ECG_PATTERN.PR, t);

    return (
        pWave(t, ECG_PATTERN.P) +
        qrsWave(t, ECG_PATTERN.QRS, pr) +
        stSegment(t, ECG_PATTERN.ST, pr) +
        tWave(t, ECG_PATTERN.T)
    );
}