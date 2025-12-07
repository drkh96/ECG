/* ECG PAPER GRID (1mm & 5mm BOXES) */

import { ECG_CONFIG } from "../config.js";

export function drawGrid(ctx, width, height) {

    // Background
    ctx.fillStyle = ECG_CONFIG.colors.background;
    ctx.fillRect(0, 0, width, height);

    // Small 1mm grid (10px)
    ctx.strokeStyle = ECG_CONFIG.colors.gridSmall;
    ctx.lineWidth = 0.5;

    for (let x = 0; x < width; x += 10) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
        ctx.stroke();
    }

    for (let y = 0; y < height; y += 10) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
        ctx.stroke();
    }

    // Bold 5mm grid (50px)
    ctx.strokeStyle = ECG_CONFIG.colors.gridLarge;
    ctx.lineWidth = 1;

    for (let x = 0; x < width; x += 50) {
        ctx.beginPath();
        ctx.moveTo(x + 0.5, 0);
        ctx.lineTo(x + 0.5, height);
        ctx.stroke();
    }

    for (let y = 0; y < height; y += 50) {
        ctx.beginPath();
        ctx.moveTo(0, y + 0.5);
        ctx.lineTo(width, y + 0.5);
        ctx.stroke();
    }
}