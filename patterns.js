/* =======================================================
   ECG PATTERN STATE CONTROLLER
   -------------------------------------------------------
   هذا الملف يخزن حالة الموجات المختارة من الواجهة.
   كل تغيير في UI يمر عبر هذه الوظائف ويحدث النموذج.
   ======================================================= */

export let ECG_PATTERN = {

    // حالة موجة P
    P: "",             // normal / p_mitrale / p_pulmonale / afib / flutter

    // حالة PR interval
    PR: "",            // normal / first_degree / wenckebach / mobitz2 / chb

    // حالة QRS
    QRS: "",           // normal / rbbb / lbbb / delta / wide_vt

    // حالة ST segment
    ST: "",            // normal / st_elev / st_depr / scooped / brugada

    // حالة T wave
    T: ""              // normal / tall / flat / inverted
};

/* =======================================================
   تحديث حالة الموجة — تستدعى عند تغيير dropdown
   -------------------------------------------------------
   key: اسم الموجة (مثل "P" أو "QRS")
   value: القيمة المختارة من الواجهة
   ======================================================= */

export function updatePattern(key, value) {

    if (ECG_PATTERN.hasOwnProperty(key)) {
        ECG_PATTERN[key] = value;
    }
}

/* =======================================================
   إعادة ضبط الحالة إلى ECG طبيعي
   -------------------------------------------------------
   مفيد في حال إضافة زر Reset في المستقبل.
   ======================================================= */

export function resetPattern() {
    ECG_PATTERN.P  = "";
    ECG_PATTERN.PR = "";
    ECG_PATTERN.QRS = "";
    ECG_PATTERN.ST = "";
    ECG_PATTERN.T  = "";
}