/* UI CONTROL BINDING — DROPDOWNS */

import { updatePattern } from "../patterns.js";

export function bindControls() {

    const controls = [
        "P",       // pWave dropdown must have id="P"
        "PR",      // id="PR"
        "QRS",     // id="QRS"
        "ST",      // id="ST"
        "T"        // id="T"
    ];

    controls.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        el.addEventListener("change", () => {
            updatePattern(id, el.value);
        });
    });
}