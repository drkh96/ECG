/* CREATE 12-LEAD ECG CANVAS GRID */

import { LEADS } from "../leads/lead-list.js";
import { ECG_CONFIG } from "../config.js";

export function createLeadGrid() {

    const grid = document.getElementById("lead-grid");

    LEADS.forEach(name => {

        let box = document.createElement("div");
        box.className = "lead-box";

        box.innerHTML = `
            <div class="lead-title">${name}</div>
            <canvas id="lead_${name}" 
                width="${ECG_CONFIG.canvasWidth}" 
                height="${ECG_CONFIG.canvasHeight}">
            </canvas>
        `;

        grid.appendChild(box);
    });
}