import {col_1_content_header_h2, content_h3_col_2, content_h3_col_3, content_h3_col_4, content_paras_col_2, content_paras_col_3, content_paras_col_4, content_list_col_2, content_list_col_3, content_list_col_4} from '../js/arr-content.js';

section_class = sessionStorage.getItem('section-selector');
col_no = sessionStorage.getItem('col-no');
col_count = sessionStorage.getItem('col-count');


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
        iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("text-center");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector('.'+section_class).classList.add("text-center"); 
    }
}

/*
//////////////// COLUMNS WIDTH ON MOBILES ///////////////
*/

if (document.querySelector("#dd_cols_mobile")) {
    document.querySelector("#dd_cols_mobile").addEventListener("change", doColMobileWidth);
}

function doColMobileWidth() {
    let opt = document.querySelector("#dd_cols_mobile").value;
    const el_section = iframe.contentWindow.document.querySelector('.'+section_class)

    if (opt==="0") {
        el_section.classList.remove("mobile-col-2");
    }

    else if (opt==="1") {
        el_section.classList.add("mobile-col-2");
    }
}

/*
//////////////// COLUMN SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_cols_h3").addEventListener("change", doColH3);

function doColH3() {
    // Count column blocks
    let col_count = parseInt(sessionStorage.getItem('col-count'));
    // Number of columns to retieve relevant content
    const arrContent = []; 
    let i;
    
    if (col_no===".col-2") {
        for (i = 0; i < content_h3_col_2.length; i++) {
            arrContent[i] = content_h3_col_2[i];
        }
    }
    else if (col_no===".col-3") {
        for (i = 0; i < content_h3_col_3.length; i++) {
            arrContent[i] = content_h3_col_3[i];
        }
    }
    else if (col_no===".col-4") {
        for (i = 0; i < content_h3_col_4.length; i++) {
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
        if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) {
            const objFig = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' figure');
            let el_fig;
            // Loop through figures
            for (let i = 0; i < col_count; i++) {
                el_fig = objFig[i]; 
                el_fig.insertAdjacentHTML("afterend", arrContent[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false; 
            document.getElementById("cb_cols_shadows").checked=false; 
        }
            
        // Test for paragraphs
        else if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' p')) {

            const objPara = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' p');
            let el_para;
            // Loop through paragraphs
            for (let i = 0; i < col_count; i++) {
                el_para = objPara[i]; 
                el_para.insertAdjacentHTML("beforebegin", arrContent[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false; 
            document.getElementById("cb_cols_shadows").checked=false; 
        }

        // Test for lists
        else if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' ul')) {
            const objUL = iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' ul')
            let el_li;
            // Loop through lists
            for (let i = 0; i < col_count; i++) {
                el_li = objUL[i]; 
                el_li.insertAdjacentHTML("beforebegin", arrContent[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false; 
            document.getElementById("cb_cols_shadows").checked=false; 
        }

        // No pics, icons, paras, lists
        else {
            const objCol = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no);
            let el_col;
            // Loop through columns
            for (let i = 0; i < col_count; i++) {
                el_col = objCol[i]; 
                el_col.innerHTML = arrContent[i];
            }
        }
        document.getElementById("cb_cols_shadows").disabled=false; 
        document.getElementById("cb_cols_shadows").checked=false; 
    }
}

function removeColH3() {
    if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) {
        document.getElementById("btn_cols_h3").disabled=true;
        const elH3 = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' h3');
        // Loop through H3 sub-headings in columns
        for (let i = 0 ; i < elH3.length ; i++) {
            elH3[i].remove();
        }
        iframe.contentWindow.document.querySelector('.'+section_class).innerHTML = iframe.contentWindow.document.querySelector('.'+section_class).innerHTML.replaceAll('</figure>\n\t\t\t', '</figure>'); 

        // If no H3 and no text or lists
        if ( (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' p')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' ul'))) {
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
    // Count column blocks
    let col_count = parseInt(sessionStorage.getItem('col-count')); 
    const arrContent = []; 
    let i;
    
    // remove
    if (opt==="0") {
        document.querySelector("#btn_cols_text").disabled=true;
        removeText();
    }
    
    // paragraphs
    else if (opt==="1") {
        document.querySelector("#btn_cols_text").disabled=false;
        removeText();

        if (col_no===".col-2") {
            for (i = 0; i < content_paras_col_2.length; i++) {
                arrContent[i] = content_paras_col_2[i];
            }
        }
        else if (col_no===".col-3") {
            for (i = 0; i < content_paras_col_3.length; i++) {
                arrContent[i] = content_paras_col_3[i];
            }
        }
        else if (col_no===".col-4") {
            for (i = 0; i < content_paras_col_4.length; i++) {
                arrContent[i] = content_paras_col_4[i];
            }
        }

        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) && (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) ) {
            const objH3 = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' h3');
            let el_h3;
            // Loop through h3 sub-headings
            for (let i = 0; i < col_count; i++) {
                el_h3 = objH3[i]; 
                el_h3.insertAdjacentHTML("afterend", arrContent[i]);
            }
        }
        
        // Test for figures (images or icons) and NO h3 column headings
        else if ( (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) ) {
            console.log("figures and NO h3 column headings");
            const objFig = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' figure');
            let el_fig;
            // Loop through figures
            for (let i = 0; i < col_count; i++) {
                el_fig = objFig[i]; 
                el_fig.insertAdjacentHTML("afterend", arrContent[i]);
            }
        }

        // Test for h3 column headings and NO figures
        else if ( (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) && (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) ) {
            const objH3 = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' h3');
            let el_h3;
            // Loop through H3 sub-headings
            for (let i = 0; i < col_count; i++) {
                el_h3 = objH3[i]; 
                el_h3.insertAdjacentHTML("afterend", arrContent[i]);
           }
        }

        // No figures AND no column headings
        else if ( (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) ) {
            console.log("No figures AND no column headings");
            const objCol = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no);
            let el_col;
            // Loop through columns
            for (let i = 0; i < col_count; i++) {
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

        if (col_no===".col-2") {
            for (i = 0; i < content_list_col_2.length; i++) {
                arrContent[i] = content_list_col_2[i];
            }
        }
        else if (col_no===".col-3") {
            for (i = 0; i < content_list_col_3.length; i++) {
                arrContent[i] = content_list_col_3[i];
            }
        }
        else if (col_no===".col-4") {
            for (i = 0; i < content_list_col_4.length; i++) {
                arrContent[i] = content_list_col_4[i];
            }
        }

        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) && (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) ) {
            const objH3 = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' h3');
            let el_h3;
            // Loop through H3 sub-headings
            for (let i = 0; i < col_count; i++) {
                el_h3 = objH3[i]; 
                el_h3.insertAdjacentHTML("afterend", arrContent[i]);
           }
        }
        
        // Test for figures (images or icons)
        else if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) {
            const objFig = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' figure');
            // Loop through figures
            let el_fig;
            for (let i = 0; i < col_count; i++) {
                el_fig = objFig[i];
                el_fig.insertAdjacentHTML("afterend", arrContent[i]);
           }
        }

        // Test for h3 column headings
        else if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) {
            const objH3 = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' h3');
            let el_h3;
            // Loop through H3s in columns
            for (let i = 0; i < col_count; i++) {
                el_h3 = objH3[i];
                el_h3.insertAdjacentHTML("afterend", arrContent[i]);
            }
        }

        // No pics, icons, h3 headings
        else {
            const objCol = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no);
            let el_col;
            // Loop through columns
            for (let i = 0; i < col_count; i++) {
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
    const el_para = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' p');
    for (var i = 0 ; i < el_para.length ; i++) {
      el_para[i].remove();
    }
    const el_bullet = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' li');
    for (var i = 0 ; i < el_bullet.length ; i++) {
        el_bullet[i].remove();
    }
    const el_list = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' ul');
    for (var i = 0 ; i < el_list.length ; i++) {
        el_list[i].remove();
    }
    iframe.contentWindow.document.querySelector('.'+section_class).innerHTML = iframe.contentWindow.document.querySelector('.'+section_class).innerHTML.replaceAll("\t\n\t\t<\/div>", "<\/div>");
    enableColButtons();
    document.getElementById("dd_cols_list_marker").disabled=true;
    document.getElementById("dd_cols_list_marker").value="0";
    document.getElementById("btn_cols_list_marker").disabled=true;
    
    // If no H3 and no text
    if ( (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' p')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' ul'))) {
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
    let elSection = iframe.contentWindow.document.querySelector('.'+section_class).innerHTML;
    
    // Regular
    if (opt==="0") {
        // Test for Font Awesome list
        if ( iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' > ul.fa-ul') ) {
            elSection = elSection.replaceAll("<ul class=\"fa-ul\">", "<ul>") 
            elSection = elSection.replaceAll("<li><span class=\"fa-li\"><i class=\"fa-solid fa-circle-check\"><\/i><\/span>", "<li>");
            iframe.contentWindow.document.querySelector('.'+section_class).innerHTML = elSection;
        }
    }

    else if (opt==="1") {
        // Test for regular list
        if ( iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' > ul:not(.fa-ul)') ) {

            elSection = elSection.replaceAll("<ul>", "<ul class=\"fa-ul\">") 
            elSection = elSection.replaceAll("<li>", "<li><span class=\"fa-li\"><i class=\"fa-solid fa-circle-check\"><\/i><\/span>");
            iframe.contentWindow.document.querySelector('.'+section_class).innerHTML = elSection;
        }
    }
}

/*
//////////////// COLUMNS SHADOWS ///////////////
*/

document.querySelector("#cb_cols_shadows").addEventListener("change", doColShadows);

function doColShadows() {

    const el_section = iframe.contentWindow.document.querySelector('.'+section_class)

    if (!document.getElementById("cb_cols_shadows").checked) {
        el_section.classList.remove("cols-shadows");
        el_section.classList.remove("corners-soft");
        // Enable corner and border options
        document.getElementById("cb_col_borders").disabled=false;
        document.getElementById("cb_col_borders").checked=false;
        document.getElementById("cb_cols_corners_soft").disabled=false; 
        document.getElementById("cb_cols_corners_soft").checked=false;
        // document.getElementById("cb_cols_shadows").disabled=true; 
        document.getElementById("cb_cols_shadows").checked=false; 
        RemoveColsPadding();
    }

    else {
        el_section.classList.add("cols-padding");
        el_section.classList.add("cols-shadows");
        el_section.classList.add("corners-soft");
        // Disable corner and border options
        document.getElementById("cb_col_borders").disabled=true;
        document.getElementById("cb_col_borders").checked=false;
        document.getElementById("cb_cols_corners_soft").disabled=false; 
        document.getElementById("cb_cols_corners_soft").checked=true;
    }
}

/*
//////////////// COLUMNS BORDERS ///////////////
*/

document.querySelector("#cb_col_borders").addEventListener("change", doColBorders);

function doColBorders() {
    const el_section = iframe.contentWindow.document.querySelector('.'+section_class)

    if (!document.getElementById("cb_col_borders").checked) {
        el_section.classList.remove("cols-borders");
        el_section.classList.remove("corners-soft");
        document.getElementById("cb_cols_corners_soft").disabled=true; 
        document.getElementById("cb_cols_corners_soft").checked=false;
        document.getElementById("cb_col_borders").disabled=false;
        document.getElementById("btn_cols_border_color").disabled=true;
        document.getElementById("cb_cols_shadows").disabled=false; 
        document.getElementById("cb_cols_shadows").checked=false; 
        RemoveColsPadding();
    }

    else {
        el_section.classList.add("cols-padding");
        el_section.classList.add("cols-borders");
        document.getElementById("cb_cols_corners_soft").disabled=false; 
        document.getElementById("cb_cols_corners_soft").checked;
        document.getElementById("cb_col_borders").disabled=false;
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
    const el_section = iframe.contentWindow.document.querySelector('.'+section_class)

    if (!document.getElementById("cb_cols_corners_soft").checked) {
        el_section.classList.remove("corners-soft");
    }

    else {
        el_section.classList.add("corners-soft");
    }
}

/*
//////////////// BUTTONS ////////////////////
*/

if (document.querySelector("#cb_btns")) {
    document.querySelector("#cb_btns").addEventListener("change", doColButtons);
}

function doColButtons() {

    // Count column blocks
    let col_count = parseInt(sessionStorage.getItem('col-count'));
    let el_col;

    if (!document.getElementById("cb_btns").checked) {
        removeColButtons();
        disableColButtons();
    }
    else {
        const btn_class="btn-solid";
        const obj_col = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no);
        for (let i = 0; i < col_count; i++) {        
            el_col = obj_col[i];
            addColButtons(el_col,btn_class);
        }

        iframe.contentWindow.document.querySelector('.'+section_class).innerHTML = iframe.contentWindow.document.querySelector('.'+section_class).innerHTML.replaceAll("<a href", "\t<a href");

        iframe.contentWindow.document.querySelector('.'+section_class).innerHTML = iframe.contentWindow.document.querySelector('.'+section_class).innerHTML.replaceAll("<\/a><\/div>", "<\/a>\n\t\t<\/div>");
        enableColButtons();
    }
}

function addColButtons(el_cols,btn_class) {
    //  Button text and icons
    const el_btn = document.createElement('a');
    el_btn.setAttribute("href", "#");
    el_btn.setAttribute("class", "btn "+btn_class);
    // For col-4 columns
    if (col_no === '.col-4') {
        el_btn.classList.add("btn-small");
    }
    const el_icon = document.createElement('i');
    el_icon.setAttribute("class", "fas fa-shopping-cart");
    el_btn.append(el_icon);
    const btn_text = "<span>Order Now</span>";
    el_icon.insertAdjacentHTML('afterend', btn_text);
    el_cols.append(el_btn);
}

function removeColButtons() {
    // Count column blocks
    let col_count = parseInt(sessionStorage.getItem('col-count'));
    let el_btn;

    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');

    // Loop through buttons
    for (let i = 0; i < col_count; i++) {        
        el_btn = obj_btn[i];
        el_btn.remove();
    }

    iframe.contentWindow.document.querySelector('.'+section_class).innerHTML = iframe.contentWindow.document.querySelector('.'+section_class).innerHTML.replaceAll("\t\n\t\t<\/div>", "<\/div>");
    enableColButtons();
    document.getElementById("dd_buttons_style").disabled=true;
    document.getElementById("dd_buttons_style").value="0";
    disableColButtons();
}


/*
//////////////// BUTTONS: TYPE ////////////////////
*/
if (document.querySelector("#dd_buttons_type")) {
    document.querySelector("#dd_buttons_type").addEventListener("change", doButtonsType);
}

function doButtonsType() {
    let opt = document.querySelector("#dd_buttons_type").value;
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');

    let el_btn;

    // Solid
    if (opt==="0") {
        removeButtonsType(obj_btn);        
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-solid");
        }
    }

    // Outline
    else if (opt==="1") {
        removeButtonsType(obj_btn);        
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-outline");
        }
    }

    // Link
    else if (opt==="2") {
        removeButtonsType(obj_btn);        
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-link");
        }
    }
}

function removeButtonsType(obj_btn) {
    let el_btn;
    for (el_btn of obj_btn) { 
        el_btn.classList.remove("btn-solid");
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-link");
    }
}

/*
//////////////// BUTTONS: STYLE ////////////////////
*/

if (document.querySelector("#dd_buttons_style")) {
    document.querySelector("#dd_buttons_style").addEventListener("change", doButtonsStyle);
}

function doButtonsStyle() {
    let opt = document.querySelector("#dd_buttons_style").value;
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');
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
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');
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
        const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');
        const icon_left  ="<i class=\"fas fa-shopping-cart\"><\/i><span>Order Now<\/span>";
        const icon_right ="<span>Order Now<\/span><i class=\"fas fa-arrow-circle-right\"><\/i>";
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
                    btn_content = "<span>Order now</span>";
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
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');
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
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');
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
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');
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
    document.getElementById("dd_buttons_style").value="0";
    document.getElementById("dd_buttons_style").disabled=false;
    document.getElementById("dd_buttons_size").disabled=false;
    if (col_no === '.col-4') {
        document.getElementById("dd_buttons_size").value="0";
    }
    else {
        document.getElementById("dd_buttons_size").value="1";
    }
    document.getElementById("rb_btns_icons_left").checked=true;
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
    document.getElementById("dd_buttons_style").value="0";
    document.getElementById("dd_buttons_style").disabled=true;
    document.getElementById("dd_buttons_size").value="1";
    document.getElementById("dd_buttons_size").disabled=true;
    document.getElementById("cb_buttons_width").disabled=true;
    document.getElementById("cb_buttons_width").checked=false;
    document.getElementById("cb_buttons_shadow").disabled=true;
    document.getElementById("cb_buttons_shadow").checked=false;
    document.getElementById("cb_buttons_uppercase").disabled=true;
    document.getElementById("cb_buttons_uppercase").checked=false;
}


// console.log("grid-2-3-4.js has loaded.")