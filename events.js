/* EVENTS (START/STOP BUTTON, EXTRA ACTIONS) */

import { toggleMovement } from "../engine/loop.js";

export function bindEvents() {

    const btn = document.getElementById("toggleMove");

    if (btn) {
        btn.onclick = () => {
            toggleMovement();
        };
    }
}