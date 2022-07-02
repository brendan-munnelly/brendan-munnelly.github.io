import {content_h3_col_2, content_h3_col_3, content_h3_col_4, content_paras_col_2, content_paras_col_3, content_paras_col_4, content_list_col_2, content_list_col_3, content_list_col_4} from '../js/arr-content.js';

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

const tabs = document.querySelector(".buttonWrapper");
const tabButton = document.querySelectorAll(".tab-button");
      
tabs.onclick = e => {
const id = e.target.id;
if (id) {
    // tabs
    tabButton.forEach(btn => {
        btn.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");

    // tab contents
    document.getElementById("content_1").classList.remove("active");
    document.getElementById("content_1").style.display="none";
    document.getElementById("content_2").classList.remove("active");
    document.getElementById("content_2").style.display="none";

    // Active content tab
    const element = "content_"+id[id.length-1];
    document.getElementById(element).classList.add("active");
    document.getElementById(element).style.display="block";
    }
}

document.querySelector("#dd_buttons_split").addEventListener("change", doButtonsSplit);

    function doButtonsSplit() {
        let opt = document.querySelector("#dd_buttons_split").value;

        // Hide both buttons
        if (opt==="0") {
            removeButtonsSplit();
        }
       
        // Show one button
        else if (opt==="1") {
            removeButtonsSplit();
            addOnlyButton_1();
            if (iframe.contentWindow.document.querySelector(".col-2:nth-child(1) ul")) {
                iframe.contentWindow.document.querySelector(".col-2:nth-child(1) ul").insertAdjacentHTML("afterend", content_button_one);            
            }
            else {
                iframe.contentWindow.document.querySelector(".col-2:nth-child(1) p:last-of-type").insertAdjacentHTML("afterend", content_button_one);
            }
        }
        // two buttons
        else if (opt==="2") {
            removeButtonsSplit();
            addButtons_12();

            if (iframe.contentWindow.document.querySelector(".col-2:nth-child(1) ul")) {
                iframe.contentWindow.document.querySelector(".col-2:nth-child(1) ul").insertAdjacentHTML("afterend", content_button_two);            
            }
            else {
                iframe.contentWindow.document.querySelector(".col-2:nth-child(1) p:last-of-type").insertAdjacentHTML("afterend", content_button_two);
            }
        }
    }

    function addOnlyButton_1() {
        document.querySelector(".container-buttons-block").style.display="block";
        document.getElementById("button_1").style.display="block";
        document.getElementById("button_2").style.display="none";
        document.getElementById("dd_buttons_size").disabled=false;
        document.getElementById("dd_buttons_size").value="1";
        document.getElementById("cb_col_buttons_width").disabled=false;
        document.getElementById("cb_col_buttons_shadow").disabled=false;
        document.getElementById("cb_col_buttons_uppercase").disabled=false;

        document.getElementById("rb_btn_align_desktop_left").disabled=false;
        document.getElementById("rb_btn_align_desktop_left").checked=true;
        document.getElementById("rb_btn_align_desktop_center").disabled=false;

        document.getElementById("rb_btn_align_mobile_left").disabled=false;
        document.getElementById("rb_btn_align_mobile_left").checked=true;
        document.getElementById("rb_btn_align_mobile_center").disabled=false;
        document.getElementById("dd_buttons_shape").disabled=false;
        document.getElementById("dd_buttons_shape").value="0";
        document.getElementById("cb_col_buttons_width").disabled=false;
        document.getElementById("cb_col_buttons_width").checked=false;

        document.getElementById("cb_col_buttons_shadow").disabled=false;
        document.getElementById("cb_col_buttons_shadow").checked=false;
        document.getElementById("cb_col_buttons_uppercase").disabled=false;
        document.getElementById("cb_col_buttons_uppercase").checked=false;

        document.getElementById("rd_btns_icons_left_1").checked=true;
        document.getElementById("rd_btns_icons_left_2").checked=true;        
    }

    function addButtons_12() {
        document.querySelector(".container-buttons-block").style.display="block";
        document.getElementById("button_1").style.display="block";
        document.getElementById("button_2").style.display="block";
        document.getElementById("dd_buttons_size").disabled=false;
        document.getElementById("dd_buttons_size").value="1";
        document.getElementById("cb_col_buttons_width").disabled=false;
        document.getElementById("cb_col_buttons_shadow").disabled=false;
        document.getElementById("cb_col_buttons_uppercase").disabled=false;
        document.getElementById("rb_btn_align_desktop_left").disabled=false;
        document.getElementById("rb_btn_align_desktop_left").checked=true;
        document.getElementById("rb_btn_align_desktop_center").disabled=false;
        document.getElementById("rb_btn_align_mobile_left").disabled=false;
        document.getElementById("rb_btn_align_mobile_left").checked=true;
        document.getElementById("rb_btn_align_mobile_center").disabled=false;
        document.getElementById("dd_buttons_shape").disabled=false;
        document.getElementById("dd_buttons_shape").value="0";
        document.getElementById("cb_col_buttons_width").disabled=false;
        document.getElementById("cb_col_buttons_width").checked=false;

        document.getElementById("cb_col_buttons_shadow").disabled=false;
        document.getElementById("cb_col_buttons_shadow").checked=false;
        document.getElementById("cb_col_buttons_uppercase").disabled=false;
        document.getElementById("cb_col_buttons_uppercase").checked=false;
        document.getElementById("rd_btns_icons_left_1").checked=true;
        document.getElementById("rd_btns_icons_left_2").checked=true;
    }

    function removeButtonsSplit() {
        if (iframe.contentWindow.document.querySelector("section .container-btn")) {
            const elBtn = iframe.contentWindow.document.querySelector("section .container-btn");
            elBtn.remove();
            document.querySelector(".container-buttons-block").style.display="none";
            document.getElementById("dd_buttons_size").disabled=true;
            document.getElementById("dd_buttons_size").value="1";
            document.getElementById("cb_col_buttons_width").disabled=true;
            document.getElementById("switch_btn_align_desktop").disabled=true;
            document.getElementById("switch_btn_align_mobile").disabled=true;
            document.getElementById("rb_btn_align_desktop_left").disabled=true;
            document.getElementById("rb_btn_align_desktop_left").checked=false;
            document.getElementById("rb_btn_align_desktop_center").disabled=true;
            document.getElementById("rb_btn_align_mobile_left").disabled=true;
            document.getElementById("rb_btn_align_mobile_left").checked=false;
            document.getElementById("rb_btn_align_mobile_center").disabled=true;
            document.getElementById("dd_buttons_shape").disabled=true;
            document.getElementById("dd_buttons_shape").value="0";
            document.getElementById("cb_col_buttons_width").disabled=true;
            document.getElementById("cb_col_buttons_width").checked=false;
            document.getElementById("cb_col_buttons_shadow").disabled=true;
            document.getElementById("cb_col_buttons_shadow").checked=false;
            document.getElementById("cb_col_buttons_uppercase").disabled=true;
            document.getElementById("cb_col_buttons_uppercase").checked=false;
        }
    }
  
/*
//////////////// BUTTONS: SIZE ////////////////////
*/

document.querySelector("#dd_buttons_size").addEventListener("change", doButtonsSize);

function doButtonsSize() {
    let opt = document.querySelector("#dd_buttons_size").value;
    const objBtns = iframe.contentWindow.document.querySelectorAll('section a.btn');

    // Small
    if (opt==="0") { 
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-large");
            btn.classList.add("btn-small");
        });
    }
    // Regular
    else if (opt==="1") { 
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-small");
            btn.classList.remove("btn-large");
        });
    }
    
    // Large
    else if (opt==="2") { 
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-small");
            btn.classList.add("btn-large");
        });
    }    
}

/*
//////////////// BUTTONS: ALIGN DESKTOP  ////////////////////
*/

document.querySelector("#switch_btn_align_desktop").addEventListener("change", doButtonsAlignDesktop);

function doButtonsAlignDesktop() {

    const rbs = document.querySelectorAll("input[name='rb_btn_align_desktop']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    // Verify vutton container exists 
    if (iframe.contentWindow.document.querySelector(".container-btn")) {  

        let elBtns = iframe.contentWindow.document.querySelector(".container-btn");

        if (selectedValue==="left") {
            elBtns.classList.remove("text-center-desktop");
        }

        else if (selectedValue==="center") {
            elBtns.classList.add("text-center-desktop");
        }
    }
}

/*
//////////////// BUTTONS: ALIGN MOBILE  ////////////////////
*/

document.querySelector("#switch_btn_align_mobile").addEventListener("change", doButtonsAlignMobile);

function doButtonsAlignMobile() {

    const rbs = document.querySelectorAll("input[name='rb_btn_align_mobile']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    // Verify vutton container exists 
    if (iframe.contentWindow.document.querySelector(".container-btn")) {      
        let elBtns = iframe.contentWindow.document.querySelector(".container-btn");
        if (selectedValue==="left") {
            elBtns.classList.remove("text-center-mobile");
        }

        else if (selectedValue==="center") {
            elBtns.classList.add("text-center-mobile");
        }
    }
}


/*
//////////////// BUTTONS: WIDTH  ////////////////////
*/

document.querySelector("#cb_col_buttons_width").addEventListener("change", doBtnWidth);

function doBtnWidth() {
    const objBtns = iframe.contentWindow.document.querySelectorAll('section a.btn');

    if (!document.getElementById("cb_col_buttons_width").checked) {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-block");
        });
    }
    else {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.add("btn-block");
        });
    }
}

/*
//////////////// BUTTONS: SHAPE ////////////////////
*/

document.querySelector("#dd_buttons_shape").addEventListener("change", doButtonsShape);

function doButtonsShape() {
    let opt = document.querySelector("#dd_buttons_shape").value;
    const objBtns = iframe.contentWindow.document.querySelectorAll('section a.btn');

    // remove
    if (opt==="0") {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-pill");
            btn.classList.remove("btn-soft");
        });
        document.getElementById("dd_buttons_shape").disabled=false;
        document.getElementById("dd_buttons_shape").value="0";
    }

    // soft
    else if (opt==="1") {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-pill");
            btn.classList.add("btn-soft");
        });
        document.getElementById("dd_buttons_shape").disabled=false;
        document.getElementById("dd_buttons_shape").value="1";
    }

    // pill
    else if (opt==="2") {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-soft");
            btn.classList.add("btn-pill");
        });
        document.getElementById("dd_buttons_shape").disabled=false;
        document.getElementById("dd_buttons_shape").value="2";
    }
}

/*
//////////////// BUTTONS: SHADOW ///////////////
*/

document.querySelector("#cb_col_buttons_shadow").addEventListener("change", doBtnShadow);

function doBtnShadow() {
    const objBtns = iframe.contentWindow.document.querySelectorAll('section a.btn');
    if (!document.getElementById("cb_col_buttons_shadow").checked) {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-shadow");
        });
    }
    else {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.add("btn-shadow");
        });
    }
}

/*
//////////////// BUTTONS: UPPERCASE ///////////////
*/

document.querySelector("#cb_col_buttons_uppercase").addEventListener("change", doBtnUCase);

function doBtnUCase() {
    const objBtns = iframe.contentWindow.document.querySelectorAll('section a.btn');
    if (!document.getElementById("cb_col_buttons_uppercase").checked) {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-uppercase");
        });
    }
    else {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.add("btn-uppercase");
        });
    }
}

/*
//////////////// BUTTON 1: TYPE ////////////////////
*/

document.querySelector("#dd_button_type_1").addEventListener("change", doButtonType1);

function doButtonType1() {
    let opt = document.querySelector("#dd_button_type_1").value;
    const el_btn = iframe.contentWindow.document.querySelector("a.btn:nth-child(1)");

    // Solid
    if (opt==="0") {
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-link");
        el_btn.classList.add("btn-solid");
    }

    // Outline
    else if (opt==="1") {
        el_btn.classList.remove("btn-solid");
        el_btn.classList.remove("btn-link");
        el_btn.classList.add("btn-outline");
    }

    // Link
    else if (opt==="2") {
        el_btn.classList.remove("btn-solid");
        el_btn.classList.remove("btn-outline");
        el_btn.classList.add("btn-link");
    }
}

/*
//////////////// BUTTON 2: TYPE ////////////////////
*/

document.querySelector("#dd_button_type_2").addEventListener("change", doButtonType2);

function doButtonType2() {
    let opt = document.querySelector("#dd_button_type_2").value;
    const el_btn = iframe.contentWindow.document.querySelector("a.btn:nth-child(2)");

    // Solid
    if (opt==="0") {
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-link");
        el_btn.classList.add("btn-solid");
    }

    // Outline
    else if (opt==="1") {
        el_btn.classList.remove("btn-solid");
        el_btn.classList.remove("btn-link");
        el_btn.classList.add("btn-outline");
    }

    // Link
    else if (opt==="2") {
        el_btn.classList.remove("btn-solid");
        el_btn.classList.remove("btn-outline");
        el_btn.classList.add("btn-link");
    }
}

/*
//////////////// BUTTON 1: ICON POSITION ////////////////////
*/

document.querySelector("#switch_btns_icons_position_1").addEventListener("change", swapButtonIcons_1);

function swapButtonIcons_1() {

    const rbs = document.querySelectorAll("input[name='btns_icons_position_1']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    // Set up button icon and text content
    const el_btn = iframe.contentWindow.document.querySelector("a.btn:nth-child(1)");

    const icon_left  ="<i class=\"fas fa-shopping-cart\"></i><span>Order now</span>";
    const icon_right ="<span>Order Now</span><i class=\"fas fa-shopping-cart\"></i>";
    const icon_none = "<span>Order now</span>";

    if (selectedValue==="left") {
        // Icon at left. Text at right.
        el_btn.innerHTML = icon_left;
    }
    
    else if (selectedValue==="right") {
        // Text left. Icon at right.
        el_btn.innerHTML = icon_right;
    }
    
    else if (selectedValue==="none") {
        // Only text, No icons.
        el_btn.innerHTML = icon_none;
    }
}

/*
//////////////// BUTTON 2: ICON POSITION ////////////////////
*/

document.querySelector("#switch_btns_icons_position_2").addEventListener("change", swapButtonIcons_2);

function swapButtonIcons_2() {

    const rbs = document.querySelectorAll("input[name='btns_icons_position_2']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    // Set up button icon and text content
    const el_btn = iframe.contentWindow.document.querySelector("a.btn:nth-child(2)");
    const icon_left  ="<i class=\"fas fa-arrow-right\"></i><span>Learn more</span>";
    const icon_right ="<span>Learn more</span><i class=\"fas fa-arrow-right\"></i>";
    const icon_none = "<span>Learn more</span>";
    
    if (selectedValue==="left") {
        // Icon at left. Text at right.
        el_btn.innerHTML = icon_left;
    }
    
    else if (selectedValue==="right") {
        // Text left. Icon at right.
        el_btn.innerHTML = icon_right;
    }
    
    else if (selectedValue==="none") {
        // Only text, No icons.
        el_btn.innerHTML = icon_none;
    }
}


// console.log("grid-2-3-4.js has loaded.")