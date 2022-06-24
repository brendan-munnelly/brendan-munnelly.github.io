import {content_h3_col_3, content_h3_col_4, content_paras_col_3, content_paras_col_4, content_list_col_3, content_list_col_4} from '../js/arr-content.js';

/*
//////////////// COLUMNS ALIGN ///////////////
*/

document.querySelector("#form-cols-align").addEventListener("change", doColsAlign);

function doColsAlign() {
    const rbs = document.querySelectorAll("input[name='cols-align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.remove("text-center");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.add("text-center");
    }
}

/*
//////////////// COLUMNS WIDTH ON MOBILES ///////////////
*/

document.querySelector("#dd_cols_mobile").addEventListener("change", doColMobileWidth);

function doColMobileWidth() {
    let opt = document.querySelector("#dd_cols_mobile").value;
    
    if (opt==="0") {
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.remove("mobile-col-2");
    }

    else if (opt==="1") {
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.add("mobile-col-2");
    }
}

/*
//////////////// COLUMN SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_cols_h3").addEventListener("change", doColH3);

function doColH3() {
    const arrContent = []; 
    

    if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-3")) {
        for (let i = 0; i < content_h3_col_3.length; i++) {
            arrContent[i] = content_h3_col_3[i];
        }
    }
    else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
        for (let i = 0; i < content_h3_col_4.length; i++) {
            arrContent[i] = content_h3_col_4[i];
        }
    }
    if (!document.getElementById("cb_cols_h3").checked) {
        removeColH3();
    }

    else {
        removeColH3();
        document.getElementById("btn_cols_h3").disabled=false;
        // Test for figures (images or icons)
        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] figure")) {
            const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] figure")
            let el_fig;
            // Loop through figures
            for (let i = 0; i < objFigs.length; i++) {
                el_fig = objFigs[i]; 
                el_fig.insertAdjacentHTML("afterend", arrContent[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false; 
            document.getElementById("cb_cols_shadows").checked=false; 
        }
            
        // Test for paragraphs
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] p")) {
            const objParas = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] p");
            let el_para;
            // Loop through paragraphs
            for (let i = 0; i < objParas.length; i++) {
                el_para = objParas[i]; 
                el_para.insertAdjacentHTML("beforebegin", arrContent[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false; 
            document.getElementById("cb_cols_shadows").checked=false; 
        }

        // Test for lists
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul")) {
            const objULs = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul")
            let el_li;
            // Loop through lists
            for (let i = 0; i < objULs.length; i++) {
                el_li = objULs[i]; 
                el_li.insertAdjacentHTML("beforebegin", arrContent[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false; 
            document.getElementById("cb_cols_shadows").checked=false; 
            console.log("No figures, but lists");
        }

        // No pics, icons, paras, lists
        else {
            const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            let el_col;
            // Loop through columns
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i]; 
                el_col.innerHTML = arrContent[i];
            }
        }
        document.getElementById("cb_cols_shadows").disabled=false; 
        document.getElementById("cb_cols_shadows").checked=false; 
    }
}

function removeColH3() {
    if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) {
        document.getElementById("btn_cols_h3").disabled=true;
        const elH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] h3");
        // Loop through H3 sub-headings in columns
        for (let i = 0; i < elH3.length; i++) {
            elH3[i].remove();
        }
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML.replaceAll('</figure>\n\t\t\t', '</figure>'); 

        // If no H3 and no text or lists
        if ( (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] p")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul"))) {
            document.getElementById("cb_cols_shadows").disabled=true; 
            document.getElementById("cb_cols_shadows").checked=false; 
        }    
    }
}

/*
//////////////// COLUMN PARAGRAPHS OR LISTS ////////////////////
*/

document.querySelector("#dd_cols_text").addEventListener("change", doColsText);

function doColsText() {

    let opt = document.querySelector("#dd_cols_text").value;
    const arrContent = []; 
    
    // remove
    if (opt==="0") {
        document.querySelector("#btn_cols_text").disabled=true;
        removeText();
    }
    
    // paragraphs
    else if (opt==="1") {
        document.querySelector("#btn_cols_text").disabled=false;
        removeText();

        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-3")) {
            for (let i = 0; i < content_paras_col_3.length; i++) {
                arrContent[i] = content_paras_col_3[i];
            }
        }
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
            for (let i = 0; i < content_paras_col_4.length; i++) {
                arrContent[i] = content_paras_col_4[i];
            }
        }

        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] figure")) && (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) ) {
            const objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] h3");
            let el_h3;
            // Loop through h3 sub-headings
            for (let i = 0; i < objH3.length; i++) {
                el_h3 = objH3[i]; 
                el_h3.insertAdjacentHTML("afterend", arrContent[i]);
            }
        }
        
        // Test for figures (images or icons) and NO h3 column headings
        else if ( (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] figure")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) ) {
            // console.log("figures and NO h3 column headings");
            const objFig = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] figure");
            let el_fig;
            // Loop through figures
            for (let i = 0; i < objFig.length; i++) {
                el_fig = objFig[i]; 
                el_fig.insertAdjacentHTML("afterend", arrContent[i]);
            }
        }

        // Test for h3 column headings and NO figures
        else if ( (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] figure")) && (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) ) {
            const objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] h3");
            let el_h3;
            // Loop through H3 sub-headings
            for (let i = 0; i < objH3.length; i++) {
                el_h3 = objH3[i]; 
                el_h3.insertAdjacentHTML("afterend", arrContent[i]);
           }
        }

        // No figures AND no column headings
        else if ( (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] figure")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) ) {
            // console.log("No figures AND no column headings");
            const objCol = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            let el_col;
            // Loop through columns
            for (let i = 0; i < objCol.length; i++) {
                el_col = objCol[i]; 
                el_col.innerHTML = arrContent[i];
            }
        }
        document.getElementById("cb_cols_shadows").disabled=false; 
        document.getElementById("cb_cols_shadows").checked=false; 
    }

    // lists
    else if (opt==="2") {
        removeText();
        document.querySelector("#btn_cols_text").disabled=false;

        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-3")) {
            for (let i = 0; i < content_list_col_3.length; i++) {
                arrContent[i] = content_list_col_3[i];
            }
        }
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
            for (let i = 0; i < content_list_col_4.length; i++) {
                arrContent[i] = content_list_col_4[i];
            }
        }

        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] figure")) && (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) ) {
            const objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] h3");
            let el_h3;
            // Loop through H3 sub-headings
            for (let i = 0; i < objH3.length; i++) {
                el_h3 = objH3[i]; 
                el_h3.insertAdjacentHTML("afterend", arrContent[i]);
           }
        }
        
        // Test for figures (images or icons)
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] figure")) {
            const objFig = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] figure");
            // Loop through figures
            let el_fig;
            for (let i = 0; i < objFig.length; i++) {
                el_fig = objFig[i];
                el_fig.insertAdjacentHTML("afterend", arrContent[i]);
           }
        }

        // Test for h3 column headings
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) {
            const objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] h3");
            let el_h3;
            // Loop through H3s in columns
            for (let i = 0; i < objH3.length; i++) {
                el_h3 = objH3[i];
                el_h3.insertAdjacentHTML("afterend", arrContent[i]);
            }
        }

        // No pics, icons, h3 headings
        else {
            const objCol = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            let el_col;
            // Loop through columns
            for (let i = 0; i < objCol.length; i++) {
                el_col = objCol[i];
                el_col.innerHTML = arrContent[i];
            }
        }
        document.getElementById("dd_cols_list_marker").disabled=false;
        document.getElementById("dd_cols_list_marker").value="0";
        document.getElementById("btn_cols_list_marker").disabled=false;
        document.getElementById("cb_cols_shadows").disabled=false; 
        document.getElementById("cb_cols_shadows").checked=false; 
    }
}

function removeText() {
    const el_para = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] p");
    for (var i = 0 ; i < el_para.length ; i++) {
      el_para[i].remove();
    }
    const el_bullet = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] li");
    for (var i = 0 ; i < el_bullet.length ; i++) {
        el_bullet[i].remove();
    }
    const el_list = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul");
    for (var i = 0 ; i < el_list.length ; i++) {
        el_list[i].remove();
    }
    enableColButtons();
    document.getElementById("dd_cols_list_marker").disabled=true;
    document.getElementById("dd_cols_list_marker").value="0";
    document.getElementById("btn_cols_list_marker").disabled=true;
    
    // If no H3 and no text
    if ( (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] p")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul"))) {
        document.getElementById("cb_cols_shadows").disabled=true; 
        document.getElementById("cb_cols_shadows").checked=false; 
    }
}

/*
//////////////// COLUMN LIST MARKERS ////////////////////
*/

document.querySelector("#dd_cols_list_marker").addEventListener("change", doListMarker);

function doListMarker() {

    let opt = document.querySelector("#dd_cols_list_marker").value;
    let objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
    let el_col;

    // Regular
    if (opt==="0") {
        // Test for Font Awesome
        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul.fa-ul") ) {
            // Loop through columns
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i];
                el_col.innerHTML = el_col.innerHTML.replaceAll("<ul class=\"fa-ul\">", "<ul>");
                el_col.innerHTML = el_col.innerHTML.replaceAll("<li><span class=\"fa-li\"><i class=\"fa-solid fa-circle-check\"><\/i><\/span>", "<li>");
            }
        }
    }

    // Font Awesome
    else if (opt==="1") {
        // Test for regular list
        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul:not(.fa-ul)") ) {
            // Loop through columns
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i];
                el_col.innerHTML = el_col.innerHTML.replaceAll("<ul>", "<ul class=\"fa-ul\">");
                el_col.innerHTML = el_col.innerHTML.replaceAll("<li>", "<li><span class=\"fa-li\"><i class=\"fa-solid fa-circle-check\"><\/i><\/span>");
            }
        }
    }
}

/*
//////////////// COLUMNS SHADOWS ///////////////
*/

document.querySelector("#cb_cols_shadows").addEventListener("change", doColShadows);

function doColShadows() {

    const el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']")

    if (!document.getElementById("cb_cols_shadows").checked) {
        el_cols.classList.remove("cols-shadows");
        el_cols.classList.remove("cols-corners-soft");
        // Enable corner and border options
        document.getElementById("cb_cols_borders").disabled=false;
        document.getElementById("cb_cols_borders").checked=false;
        document.getElementById("cb_cols_corners_soft").checked=false;
        document.getElementById("cb_cols_shadows").checked=false; 
        if (!document.getElementById("cb_cols_borders").checked) {
            document.getElementById("cb_cols_corners_soft").disabled=true; 
        }
        else {
            document.getElementById("cb_cols_corners_soft").disabled=false; 
        }
        checkColsPadding();        
    }

    else {
        el_cols.classList.add("cols-padding");
        el_cols.classList.add("cols-shadows");
        el_cols.classList.add("cols-corners-soft");
        // Disable corner and border options
        document.getElementById("cb_cols_borders").disabled=true;
        document.getElementById("cb_cols_borders").checked=false;
        document.getElementById("cb_cols_corners_soft").disabled=false; 
        document.getElementById("cb_cols_corners_soft").checked=true;
    }
}

/*
//////////////// COLUMNS BORDERS ///////////////
*/

document.querySelector("#cb_cols_borders").addEventListener("change", doColBorders);

function doColBorders() {
    const el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']")

    if (!document.getElementById("cb_cols_borders").checked) {
        el_cols.classList.remove("cols-borders");
        el_cols.classList.remove("cols-corners-soft");
        document.getElementById("cb_cols_corners_soft").disabled=true; 
        document.getElementById("cb_cols_corners_soft").checked=false;
        document.getElementById("cb_cols_borders").disabled=false;
        document.getElementById("btn_cols_border_color").disabled=true;
        document.getElementById("cb_cols_shadows").disabled=false; 
        document.getElementById("cb_cols_shadows").checked=false; 
        checkColsPadding();
    }

    else {
        el_cols.classList.add("cols-padding");
        el_cols.classList.add("cols-borders");
        document.getElementById("cb_cols_corners_soft").disabled=false; 
        document.getElementById("cb_cols_corners_soft").checked;
        document.getElementById("cb_cols_borders").disabled=false;
        document.getElementById("btn_cols_border_color").disabled=false;
        document.getElementById("cb_cols_shadows").disabled=true; 
        document.getElementById("cb_cols_shadows").checked=false; 
    }
}

/*
//////////////// COLUMNS BORDER CORNERS ///////////////
*/

document.querySelector("#cb_cols_corners_soft").addEventListener("change", doColCorners);

function doColCorners() {
    const el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']")

    if (!document.getElementById("cb_cols_corners_soft").checked) {
        el_cols.classList.remove("cols-corners-soft");
    }

    else {
        el_cols.classList.add("cols-corners-soft");
    }
}

function checkColsPadding() {
    // Test for no border, no shadow and column background != section background
    if ( (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'].cols-borders")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'].cols-shadows") ) ) {
        if (sectionBg===colsBg) {
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.remove("cols-padding");
        }
        else {
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.add("cols-padding");
        }
    }
}


/*
//////////////// BUTTONS ////////////////////
*/

if (document.querySelector("#cb_btns")) {
    document.querySelector("#cb_btns").addEventListener("change", doColButtons);
}

function doColButtons() {
    let el_col;
    if (!document.getElementById("cb_btns").checked) {
        removeColButtons();
        disableColButtons();
    }
    else {
        const btn_class="btn-solid";
        const obj_col = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
        for (let i = 0; i < obj_col.length; i++) {        
            el_col = obj_col[i];
            addColButtons(el_col,btn_class);
        }

        iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-']").innerHTML = iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-']").innerHTML.replaceAll("<a href", "\t<a href");

        iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-']").innerHTML = iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-']").innerHTML.replaceAll("<\/a><\/div>", "<\/a>\n\t\t<\/div>");
        enableColButtons();
    }
}

function addColButtons(el_cols,btn_class) {
    //  Button text and icons
    const el_btn = document.createElement('a');
    el_btn.setAttribute("href", "#");
    el_btn.setAttribute("class", "btn "+btn_class);
    // For col-4 columns
    if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
        el_btn.classList.add("btn-small");
    }
    el_btn.innerHTML = "<span>Learn more</span><i class=\"fas fa-arrow-right\"></i>";
    el_cols.append(el_btn);
}

function removeColButtons() {
    let el_btn;
    const obj_btn = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] > a.btn");

    // Loop through buttons
    for (let i = 0; i < obj_btn.length; i++) {        
        el_btn = obj_btn[i];
        el_btn.remove();
    }

    iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-']").innerHTML = iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-']").innerHTML.replaceAll("\t\n\t\t<\/div>", "<\/div>");
    enableColButtons();
    document.getElementById("dd_buttons_shape").disabled=true;
    document.getElementById("dd_buttons_shape").value="0";
    disableColButtons();
}


/*
//////////////// BUTTONS: TYPE ////////////////////
*/
document.querySelector("#dd_buttons_type").addEventListener("change", doButtonsType);

function doButtonsType() {
    let opt = document.querySelector("#dd_buttons_type").value;
    const obj_btn = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] > a.btn");
    let el_btn;
    // Solid
    if (opt==="0") {
        removeButtonsType(obj_btn);        
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-solid");
        }
        // Update options
        document.getElementById("dd_buttons_shape").disabled=false;
        document.getElementById("btn_cols_bg_passive").disabled=false;
        document.getElementById("btn_cols_bg_active").disabled=false;
        document.getElementById("btn_cols_border_passive").disabled=false;
        document.getElementById("btn_cols_border_active").disabled=false;
        document.getElementById("cb_buttons_width").disabled=false;
        document.getElementById("cb_buttons_shadow").disabled=false;
    }

    // Outline
    else if (opt==="1") {
        removeButtonsType(obj_btn);        
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-outline");
        }
        // Update options
        document.getElementById("dd_buttons_shape").disabled=false;
        document.getElementById("btn_cols_bg_passive").disabled=true;
        document.getElementById("btn_cols_bg_active").disabled=false;
        document.getElementById("btn_cols_border_passive").disabled=false;
        document.getElementById("btn_cols_border_active").disabled=false;
        document.getElementById("cb_buttons_width").disabled=false;
        document.getElementById("cb_buttons_shadow").disabled=false;
    }

    // Link
    else if (opt==="2") {
        removeButtonsType(obj_btn);        
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-plain");
        }
        // Update options
        document.getElementById("dd_buttons_shape").disabled=true;
        document.getElementById("dd_buttons_shape").value="0";
        document.getElementById("btn_cols_bg_passive").disabled=true;
        document.getElementById("btn_cols_bg_active").disabled=true;
        document.getElementById("btn_cols_border_passive").disabled=true;
        document.getElementById("btn_cols_border_active").disabled=true;
        document.getElementById("cb_buttons_width").disabled=true;
        document.getElementById("cb_buttons_shadow").disabled=true;
        for (el_btn of obj_btn) { 
            el_btn.classList.remove("btn-shadow");
            el_btn.classList.remove("btn-block");
            el_btn.classList.remove("btn-soft");
            el_btn.classList.remove("btn-pill");
        }
    }
}

function removeButtonsType(obj_btn) {
    let el_btn;
    for (el_btn of obj_btn) { 
        el_btn.classList.remove("btn-solid");
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-plain");
    }
}

/*
//////////////// BUTTONS: STYLE ////////////////////
*/

document.querySelector("#dd_buttons_shape").addEventListener("change", doButtonsStyle);

function doButtonsStyle() {
    let opt = document.querySelector("#dd_buttons_shape").value;
    const obj_btn = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] > a.btn");
    let el_btn;
    // remove
    if (opt==="0") {
        removeButtonsStyle(obj_btn);
    }

    // soft
    else if (opt==="1") {
        removeButtonsStyle(obj_btn);
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-soft");
        }
    }

    // pill
    else if (opt==="2") {
        removeButtonsStyle(obj_btn);
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-pill");
        }
    }
}

function removeButtonsStyle(obj_btn) {
    let el_btn;
    for (el_btn of obj_btn) { 
        el_btn.classList.remove("btn-soft");
        el_btn.classList.remove("btn-pill");
    }
}


/*
//////////////// BUTTONS: SIZE ////////////////////
*/

document.querySelector("#dd_buttons_size").addEventListener("change", doButtonsSize);

function doButtonsSize() {
    let opt = document.querySelector("#dd_buttons_size").value;
    const obj_btn = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] > a.btn");
    let el_btn;
    // small
    if (opt==="0") {
        removeButtonsSize(obj_btn);
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-small");
        }
    }

    // regular
    else if (opt==="1") {
        removeButtonsSize(obj_btn);
    }

    // large
    else if (opt==="2") {
        removeButtonsSize(obj_btn);
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-large");
        }
    }
}

function removeButtonsSize(obj_btn) {
    let el_btn;
    for (el_btn of obj_btn) { 
        el_btn.classList.remove("btn-small");
        el_btn.classList.remove("btn-large");
    }
}

/*
//////////////// BUTTONS: ICON POSITIONS ////////////////////
*/
if (document.querySelector("#form-btns-icons")) {
    document.querySelector("#form-btns-icons").addEventListener("change", swapButtonIcons);
}
function swapButtonIcons() {

    const rbs = document.querySelectorAll("input[name='btns-icons']");
    let selectedValue;
    let el_btn;
    let btn_content;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (iframe.contentWindow.document.querySelector(col_no+' > a.btn')) {
        const obj_btn = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] > a.btn");
        const icon_left  ="<i class=\"fas fa-shopping-cart\"><\/i><span>Order Now<\/span>";
        const icon_right ="<span>Learn more</span><i class=\"fas fa-arrow-right\"></i>";
        if (selectedValue==="left") {
            // Move text to right, icon to left
            for (el_btn of obj_btn) { 
                btn_content = el_btn.innerHTML;
                if (( btn_content = icon_right) || (btn_content = icon_right)) {
                    btn_content = btn_content.replace(icon_right, icon_left);
                    el_btn.innerHTML = btn_content;
                }
            }
        }

        else if (selectedValue==="right") {
            for (el_btn of obj_btn) { 
                btn_content = el_btn.innerHTML;
                if (( btn_content = icon_right) || (btn_content = icon_right)) {
                    btn_content = btn_content.replace(icon_left, icon_right);
                    el_btn.innerHTML = btn_content;
                }
            }
        }
    
        else if (selectedValue==="none") {
            // Only text. No icons.
            for (el_btn of obj_btn) { 
                if (( btn_content = icon_right) || (btn_content = icon_right)) {
                    btn_content = el_btn.innerHTML;
                    btn_content = "<span>Learn more</span>";
                    el_btn.innerHTML = btn_content;
                }
            }
        }
    }
}


/*
//////////////// BUTTONS: WIDTH ///////////////
*/
if (document.querySelector("#cb_buttons_width")) {
    document.querySelector("#cb_buttons_width").addEventListener("change", doBtnWidth);
}

function doBtnWidth() {
    const obj_btn = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] > a.btn");
    let el_btn;
    if (!document.getElementById("cb_buttons_width").checked) {
        for (el_btn of obj_btn) { 
            el_btn.classList.remove("btn-block");
        }
    }
    else {
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-block");
        };
    }
}

/*
//////////////// BUTTONS: SHADOW ///////////////
*/
if (document.querySelector("#cb_buttons_shadow")) {
    document.querySelector("#cb_buttons_shadow").addEventListener("change", doBtnShadow);
}

function doBtnShadow() {
    const obj_btn = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] > a.btn");
    let el_btn;
    if (!document.getElementById("cb_buttons_shadow").checked) {
        for (el_btn of obj_btn) { 
            el_btn.classList.remove("btn-shadow");
        }
    }
    else {
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-shadow");
        }        
    }
}

/*
//////////////// BUTTONS: UPPERCASE ///////////////
*/
if (document.querySelector("#cb_buttons_uppercase")) {
    document.querySelector("#cb_buttons_uppercase").addEventListener("change", doBtnUCase);
}

function doBtnUCase() {
    const obj_btn = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] > a.btn");
    let el_btn;
    if (!document.getElementById("cb_buttons_uppercase").checked) {
        for (el_btn of obj_btn) { 
            el_btn.classList.remove("btn-uppercase");
        }
    }
    else {
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-uppercase");
        }
    }
}


function enableColButtons() {
    document.getElementById("btn_cols_text_passive").disabled=false;
    document.getElementById("btn_cols_text_active").disabled=false;
    document.getElementById("btn_cols_bg_passive").disabled=false;
    document.getElementById("btn_cols_bg_active").disabled=false;
    document.getElementById("btn_cols_border_passive").disabled=false;
    document.getElementById("btn_cols_border_active").disabled=false;
    document.getElementById("dd_buttons_type").disabled=false;
    document.getElementById("dd_buttons_type").value="0";
    document.getElementById("dd_buttons_shape").value="0";
    document.getElementById("dd_buttons_shape").disabled=false;
    document.getElementById("dd_buttons_size").disabled=false;
    if (col_no === '.col-4') {
        document.getElementById("dd_buttons_size").value="0";
    }
    else {
        document.getElementById("dd_buttons_size").value="1";
    }
    document.getElementById("rb_btns_icons_right").checked=true;
    document.getElementById("rb_btns_icons_left").disabled=false;
    document.getElementById("rb_btns_icons_right").disabled=false;
    document.getElementById("rd-btns-icons-none").disabled=false;
    document.getElementById("cb_buttons_width").disabled=false;
    document.getElementById("cb_buttons_width").checked=false;
    document.getElementById("cb_buttons_shadow").disabled=false;
    document.getElementById("cb_buttons_shadow").checked=false;
    document.getElementById("cb_buttons_uppercase").disabled=false;
    document.getElementById("cb_buttons_uppercase").checked=false;
}

function disableColButtons() {
    document.getElementById("btn_cols_text_passive").disabled=true;
    document.getElementById("btn_cols_text_active").disabled=true;
    document.getElementById("btn_cols_bg_passive").disabled=true;
    document.getElementById("btn_cols_bg_active").disabled=true;
    document.getElementById("btn_cols_border_passive").disabled=true;
    document.getElementById("btn_cols_border_active").disabled=true;
    document.getElementById("rb_btns_icons_left").checked=false;
    document.getElementById("rb_btns_icons_right").checked=false;
    document.getElementById("rd-btns-icons-none").checked=false;
    document.getElementById("rb_btns_icons_left").disabled=true;
    document.getElementById("rb_btns_icons_right").disabled=true;
    document.getElementById("rd-btns-icons-none").disabled=true;
    document.getElementById("dd_buttons_type").disabled=true;
    document.getElementById("dd_buttons_type").value="0";
    document.getElementById("dd_buttons_shape").value="0";
    document.getElementById("dd_buttons_shape").disabled=true;
    document.getElementById("dd_buttons_size").value="1";
    document.getElementById("dd_buttons_size").disabled=true;
    document.getElementById("cb_buttons_width").disabled=true;
    document.getElementById("cb_buttons_width").checked=false;
    document.getElementById("cb_buttons_shadow").disabled=true;
    document.getElementById("cb_buttons_shadow").checked=false;
    document.getElementById("cb_buttons_uppercase").disabled=true;
    document.getElementById("cb_buttons_uppercase").checked=false;
}

