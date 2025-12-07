/* ECG MAIN ANIMATION LOOP */

import { drawLead } from "./render.js";
import { LEADS } from "../leads/lead-list.js";
import { ECG_CONFIG } from "../config.js";

let offset = 0;
let moving = true;

export function toggleMovement() {
    moving = !moving;
}

export function startLoop() {

    function loop() {

        LEADS.forEach(name => {
            const canvas = document.getElementById("lead_" + name);
            drawLead(canvas, name, offset);
        });

        if (moving)
            offset += ECG_CONFIG.speed;

        requestAnimationFrame(loop);
    }

    loop();
}