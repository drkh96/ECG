/* RENDER ONE LEAD */

import { generateECG } from "../wave-models/full-wave.js";
import { adjustLeadValue } from "../leads/lead-modifiers.js";
import { leadScale } from "../leads/lead-scale.js";
import { ECG_CONFIG } from "../config.js";
import { drawGrid } from "./grid.js";

export function drawLead(canvas, leadName, offset) {

    const ctx = canvas.getContext("2d");
    const w = ECG_CONFIG.canvasWidth;
    const h = ECG_CONFIG.canvasHeight;

    // Draw ECG Grid first (if enabled)
    if (ECG_CONFIG.showGrid)
        drawGrid(ctx, w, h);

    ctx.beginPath();
    ctx.strokeStyle = ECG_CONFIG.colors.waveform;
    ctx.lineWidth = 2;

    for (let x = 0; x < w; x++) {

        let t = ((x + offset) % w) / w;

        let y = generateECG(t);

        // Modify based on lead orientation
        y = adjustLeadValue(y, leadName);

        // Multiply by scaling differences between leads
        y *= leadScale(leadName);

        // Apply gain and center vertically
        y = h/2 - y * ECG_CONFIG.gain;

        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }

    ctx.stroke();
}