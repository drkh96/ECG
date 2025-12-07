/* MAIN INITIALIZATION FILE */

import { createLeadGrid } from "./ui/layout.js";
import { bindControls } from "./ui/controls.js";
import { bindEvents } from "./ui/events.js";
import { startLoop } from "./engine/loop.js";

window.onload = () => {

    // 1) إنشاء شبكة الـ 12 Lead
    createLeadGrid();

    // 2) ربط الـ Dropdowns مع الـ patterns.js
    bindControls();

    // 3) ربط الأزرار (Start/Stop)
    bindEvents();

    // 4) تشغيل محرك ECG
    startLoop();
};