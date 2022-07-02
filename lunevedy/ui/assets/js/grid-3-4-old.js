
/*
//////////////// COLUMNS ALIGN ///////////////
*/

document.querySelector("#switch-col-align").addEventListener("change", doColAlign);

function doColAlign() {
    const rbs = document.querySelectorAll("input[name='col-align']");
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

document.querySelector("#cb_h3").addEventListener("change", doColH3);

function doColH3() {
    if (!document.getElementById("cb_h3").checked) {
        removeColH3();
    }

    else {
        removeColH3();
        document.getElementById("btn_col_subhead").disabled=false;

        // Count column blocks
        let col_count = parseInt(sessionStorage.getItem('col-count'));

        // Test for figures (images or icons)
        if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) {
            const objFig = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' figure');
            let el_fig;
            // Loop through figures
            for (let i = 0; i < col_count; i++) {
                el_fig = objFig[i]; 
                el_fig.insertAdjacentHTML("afterend", content_h3[i]);
            }
            document.getElementById("cb_col_shadows").disabled=false; 
            document.getElementById("cb_col_shadows").checked=false; 
        }
            
        // Test for paragraphs
        else if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' p')) {

            const objPara = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' p');
            let el_para;
            // Loop through paragraphs
            for (let i = 0; i < col_count; i++) {
                el_para = objPara[i]; 
                el_para.insertAdjacentHTML("beforebegin", content_h3[i]);
            }
            document.getElementById("cb_col_shadows").disabled=false; 
            document.getElementById("cb_col_shadows").checked=false; 
        }

        // Test for lists
        else if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' ul')) {
            const objUL = iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' ul')
            let el_li;
            // Loop through lists
            for (let i = 0; i < col_count; i++) {
                el_li = objUL[i]; 
                el_li.insertAdjacentHTML("beforebegin", content_h3[i]);
            }
            document.getElementById("cb_col_shadows").disabled=false; 
            document.getElementById("cb_col_shadows").checked=false; 
        }

        // No pics, icons, paras, lists
        else {
            const objCol = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no);
            let el_col;
            // Loop through columns
            for (let i = 0; i < col_count; i++) {
                el_col = objCol[i]; 
                el_col.innerHTML = content_h3[i];
            }
        }
        document.getElementById("cb_col_shadows").disabled=false; 
        document.getElementById("cb_col_shadows").checked=false; 
    }
}

function removeColH3() {
    if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) {
        document.getElementById("btn_col_subhead").disabled=true;
        const elH3 = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' h3');
        // Loop through H3 sub-headings in columns
        for (let i = 0 ; i < elH3.length ; i++) {
            elH3[i].remove();
        }
        iframe.contentWindow.document.querySelector('.'+section_class).innerHTML = iframe.contentWindow.document.querySelector('.'+section_class).innerHTML.replaceAll('</figure>\n\t\t\t', '</figure>'); 

        // If no H3 and no text or lists
        if ( (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' p')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' ul'))) {
            document.getElementById("cb_col_shadows").disabled=true; 
            document.getElementById("cb_col_shadows").checked=false; 
        }    
    }
}

/*
//////////////// COLUMN PARAGRAPHS OR LISTS ////////////////////
*/

document.querySelector("#dd_text").addEventListener("change", doText);

function doText() {

    let opt = document.querySelector("#dd_text").value;
    // Count column blocks
    let col_count = parseInt(sessionStorage.getItem('col-count')); 
    
    // remove
    if (opt==="0") {
        document.querySelector("#btn_col_text").disabled=true;
        removeText();
    }
    
    // paragraphs
    else if (opt==="1") {
        document.querySelector("#btn_col_text").disabled=false;
        removeText();

        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) && (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) ) {

            const objH3 = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' h3');
            let el_h3;
            // Loop through h3 sub-headings
            for (let i = 0; i < col_count; i++) {
                el_h3 = objH3[i]; 
                el_h3.insertAdjacentHTML("afterend", content_paras[i]);
            }
        }
        
        // Test for figures (images or icons) and NO h3 column headings
        else if ( (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) ) {

            const objFig = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' figure');
            let el_fig;
            // Loop through figures
            for (let i = 0; i < col_count; i++) {
                el_fig = objFig[i]; 
                el_fig.insertAdjacentHTML("afterend", content_paras[i]);
            }
        }

        // Test for h3 column headings and NO figures
        else if ( (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) && (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) ) {

            const objH3 = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' h3');
            let el_h3;
            // Loop through H3 sub-headings
            for (let i = 0; i < col_count; i++) {
                el_h3 = objH3[i]; 
                el_h3.insertAdjacentHTML("afterend", content_paras[i]);
           }
        }

        // No figures AND no column headings
        else if ( (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) ) {
            const objCol = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no);
            let el_col;
            // Loop through columns
            for (let i = 0; i < col_count; i++) {
                el_col = objCol[i]; 
                el_col.innerHTML = content_paras[i];
            }
        }
        document.getElementById("cb_col_shadows").disabled=false; 
        document.getElementById("cb_col_shadows").checked=false; 
    }

    else if (opt==="2") {
        removeText();
        document.querySelector("#btn_col_text").disabled=false;

        // Count column blocks
        let col_count = parseInt(sessionStorage.getItem('col-count'));

        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) && (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) ) {
            const objH3 = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' h3');
            let el_h3;
            // Loop through H3 sub-headings
            for (let i = 0; i < col_count; i++) {
                el_h3 = objH3[i]; 
                el_h3.insertAdjacentHTML("afterend", content_list[i]);
           }
        }
        
        // Test for figures (images or icons)
        else if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' figure')) {
            const objFig = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' figure');
            // Loop through figures
            let el_fig;
            for (let i = 0; i < col_count; i++) {
                el_fig = objFig[i];
                el_fig.insertAdjacentHTML("afterend", content_list[i]);
           }
        }

        // Test for h3 column headings
        else if (iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) {
            const objH3 = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no+' h3');
            let el_h3;
            // Loop through H3s in columns
            for (let i = 0; i < col_count; i++) {
                el_h3 = objH3[i];
                el_h3.insertAdjacentHTML("afterend", content_list[i]);
            }
        }

        // No pics, icons, h3 headings
        else {
            const objCol = iframe.contentWindow.document.querySelectorAll('.'+section_class+' '+col_no);
            let el_col;
            // Loop through columns
            for (let i = 0; i < col_count; i++) {
                el_col = objCol[i];
                el_col.innerHTML = content_list[i];
            }
        }
        document.getElementById("dd_list_marker").disabled=false;
        document.getElementById("dd_list_marker").value="0";
        document.getElementById("btn_list_marker").disabled=false;
        document.getElementById("cb_col_shadows").disabled=false; 
        document.getElementById("cb_col_shadows").checked=false; 
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
    document.getElementById("dd_list_marker").disabled=true;
    document.getElementById("dd_list_marker").value="0";
    document.getElementById("btn_list_marker").disabled=true;
    
    // If no H3 and no text
    if ( (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' h3')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' p')) && (!iframe.contentWindow.document.querySelector('.'+section_class+' '+col_no+' ul'))) {
        document.getElementById("cb_col_shadows").disabled=true; 
        document.getElementById("cb_col_shadows").checked=false; 
    }
}

/*
//////////////// COLUMN LIST MARKERS ////////////////////
*/

document.querySelector("#dd_list_marker").addEventListener("change", doListMarker);

function doListMarker() {

    let opt = document.querySelector("#dd_list_marker").value;
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

document.querySelector("#cb_col_shadows").addEventListener("change", doColShadows);

function doColShadows() {

    const el_section = iframe.contentWindow.document.querySelector('.'+section_class)

    if (!document.getElementById("cb_col_shadows").checked) {
        el_section.classList.remove("cols-shadows");
        el_section.classList.remove("corners-soft");
        // Enable corner and border options
        document.getElementById("cb_col_borders").disabled=false;
        document.getElementById("cb_col_borders").checked=false;
        document.getElementById("cb_col_corners").disabled=false; 
        document.getElementById("cb_col_corners").checked=false;
        // document.getElementById("cb_col_shadows").disabled=true; 
        document.getElementById("cb_col_shadows").checked=false; 
        RemoveColPadding();
    }

    else {
        el_section.classList.add("cols-padding");
        el_section.classList.add("cols-shadows");
        el_section.classList.add("corners-soft");
        // Disable corner and border options
        document.getElementById("cb_col_borders").disabled=true;
        document.getElementById("cb_col_borders").checked=false;
        document.getElementById("cb_col_corners").disabled=false; 
        document.getElementById("cb_col_corners").checked=true;
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
        document.getElementById("cb_col_corners").disabled=true; 
        document.getElementById("cb_col_corners").checked=false;
        document.getElementById("cb_col_borders").disabled=false;
        document.getElementById("btn_col_border_color").disabled=true;
        document.getElementById("cb_col_shadows").disabled=false; 
        document.getElementById("cb_col_shadows").checked=false; 
        RemoveColPadding();
    }

    else {
        el_section.classList.add("cols-padding");
        el_section.classList.add("cols-borders");
        document.getElementById("cb_col_corners").disabled=false; 
        document.getElementById("cb_col_corners").checked;
        document.getElementById("cb_col_borders").disabled=false;
        document.getElementById("btn_col_border_color").disabled=false;
        document.getElementById("cb_col_shadows").disabled=true; 
        document.getElementById("cb_col_shadows").checked=false; 
    }
}

/*
//////////////// COLUMNS BORDER CORNERS ///////////////
*/

document.querySelector("#cb_col_corners").addEventListener("change", doColCorners);

function doColCorners() {
    const el_section = iframe.contentWindow.document.querySelector('.'+section_class)

    if (!document.getElementById("cb_col_corners").checked) {
        el_section.classList.remove("corners-soft");
    }

    else {
        el_section.classList.add("corners-soft");
    }
}

/*
//////////////// BUTTONS ////////////////////
*/

document.querySelector("#cb_colButtons").addEventListener("change", doColButtons);

function doColButtons() {
    if (!document.getElementById("cb_colButtons").checked) {
        removeColButtons();
        disableColButtons();
    }
    else {
        const btn_class="btn-primary";
        const obj_col = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no);
        for (el_col of obj_col) { 
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
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');
    for (el_btn of obj_btn) { 
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

document.querySelector("#dd_buttons_type").addEventListener("change", doButtonsType);

function doButtonsType() {
    let opt = document.querySelector("#dd_buttons_type").value;
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');
    
    // Solid
    if (opt==="0") {
        removeButtonsType(obj_btn);        
        for (el_btn of obj_btn) { 
            el_btn.classList.add("btn-primary");
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
    for (el_btn of obj_btn) { 
        el_btn.classList.remove("btn-primary");
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-link");
    }
}

/*
//////////////// BUTTONS: STYLE ////////////////////
*/

document.querySelector("#dd_buttons_style").addEventListener("change", doButtonsStyle);

function doButtonsStyle() {
    let opt = document.querySelector("#dd_buttons_style").value;
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');
    
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
    for (el_btn of obj_btn) { 
        el_btn.classList.remove("btn-small");
        el_btn.classList.remove("btn-large");
    }
}

/*
//////////////// BUTTONS: ICON POSITIONS ////////////////////
*/

document.querySelector("#switch-btns-icons-position").addEventListener("change", swapButtonIcons);

function swapButtonIcons() {

    const rbs = document.querySelectorAll("input[name='btns-icons-position']");
    let selectedValue;
    
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

        if (selectedValue==="btns-icons-left") {
            // Move text to right, icon to left
            for (el_btn of obj_btn) { 
                btn_content = el_btn.innerHTML;
                if (( btn_content = icon_right) || (btn_content = icon_right)) {
                    btn_content = btn_content.replace(icon_right, icon_left);
                    el_btn.innerHTML = btn_content;
                }
            }
        }

        else if (selectedValue==="btns-icons-right") {
            for (el_btn of obj_btn) { 
                btn_content = el_btn.innerHTML;
                if (( btn_content = icon_right) || (btn_content = icon_right)) {
                    btn_content = btn_content.replace(icon_left, icon_right);
                    el_btn.innerHTML = btn_content;
                }
            }
        }
    
        else if (selectedValue==="btns-icons-none") {
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

document.querySelector("#cb_col_buttons_width").addEventListener("change", doBtnWidth);

function doBtnWidth() {
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');

    if (!document.getElementById("cb_col_buttons_width").checked) {
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

document.querySelector("#cb_col_buttons_shadow").addEventListener("change", doBtnShadow);

function doBtnShadow() {
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');

    if (!document.getElementById("cb_col_buttons_shadow").checked) {
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

document.querySelector("#cb_col_buttons_uppercase").addEventListener("change", doBtnUCase);

function doBtnUCase() {
    const obj_btn = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no+' > a.btn');

    if (!document.getElementById("cb_col_buttons_uppercase").checked) {
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
    document.getElementById("btn_a_primary_passive_text").disabled=false;
    document.getElementById("btn_a_primary_active_text").disabled=false;
    document.getElementById("btn_a_primary_passive_bg").disabled=false;
    document.getElementById("btn_a_primary_active_bg").disabled=false;
    document.getElementById("btn_a_primary_passive_border").disabled=false;
    document.getElementById("btn_a_primary_active_border").disabled=false;
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
    document.getElementById("rd-btns-icons-left").checked=true;
    document.getElementById("rd-btns-icons-left").disabled=false;
    document.getElementById("rd-btns-icons-right").disabled=false;
    document.getElementById("rd-btns-icons-none").disabled=false;
    document.getElementById("cb_col_buttons_width").disabled=false;
    document.getElementById("cb_col_buttons_width").checked=false;
    document.getElementById("cb_col_buttons_shadow").disabled=false;
    document.getElementById("cb_col_buttons_shadow").checked=false;
    document.getElementById("cb_col_buttons_uppercase").disabled=false;
    document.getElementById("cb_col_buttons_uppercase").checked=false;
}

function disableColButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=true;
    document.getElementById("btn_a_primary_active_text").disabled=true;
    document.getElementById("btn_a_primary_passive_bg").disabled=true;
    document.getElementById("btn_a_primary_active_bg").disabled=true;
    document.getElementById("btn_a_primary_passive_border").disabled=true;
    document.getElementById("btn_a_primary_active_border").disabled=true;
    document.getElementById("rd-btns-icons-left").checked=false;
    document.getElementById("rd-btns-icons-right").checked=false;
    document.getElementById("rd-btns-icons-none").checked=false;
    document.getElementById("rd-btns-icons-left").disabled=true;
    document.getElementById("rd-btns-icons-right").disabled=true;
    document.getElementById("rd-btns-icons-none").disabled=true;
    document.getElementById("dd_buttons_type").disabled=true;
    document.getElementById("dd_buttons_type").value="0";
    document.getElementById("dd_buttons_style").value="0";
    document.getElementById("dd_buttons_style").disabled=true;
    document.getElementById("dd_buttons_size").value="1";
    document.getElementById("dd_buttons_size").disabled=true;
    document.getElementById("cb_col_buttons_width").disabled=true;
    document.getElementById("cb_col_buttons_width").checked=false;
    document.getElementById("cb_col_buttons_shadow").disabled=true;
    document.getElementById("cb_col_buttons_shadow").checked=false;
    document.getElementById("cb_col_buttons_uppercase").disabled=true;
    document.getElementById("cb_col_buttons_uppercase").checked=false;
}


// console.log("grid-3-4.js has loaded.")