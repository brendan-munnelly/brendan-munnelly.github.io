import {content_h3_col_2, content_paras_col_2, content_lists_col_2, content_buttons_one_icon, content_buttons_one_text, content_buttons_pair_icon_1, content_buttons_pair_text_1, content_buttons_pair_icon_2, content_buttons_pair_text_2} from '../js/arr-content.js';

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
//////////////// COLUMN SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_cols_h3").addEventListener("change", doColH3);

function doColH3() {
    // Count column blocks
    let col_count = parseInt(sessionStorage.getItem('col-count'));
    // Number of columns to retieve relevant content
    const arrContent = []; 
    for (let i = 0; i < content_h3_col_2.length; i++) {
        arrContent[i] = content_h3_col_2[i];
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

        for (let i = 0; i < content_paras_col_2.length; i++) {
            arrContent[i] = content_paras_col_2[i];
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

        for (let i = 0; i < content_lists_col_2.length; i++) {
            arrContent[i] = content_lists_col_2[i];
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
    document.getElementById("tab_content_1").classList.remove("active");
    document.getElementById("tab_content_1").style.display="none";
    document.getElementById("tab_content_2").classList.remove("active");
    document.getElementById("tab_content_2").style.display="none";

    // Active content tab
    const element = "tab_content_"+id[id.length-1];
    document.getElementById(element).classList.add("active");
    document.getElementById(element).style.display="block";
    }
}

/*
//////////////// LOAD INITIAL BUTTON ////////////////////
*/

document.querySelector("#cb_col_btns").addEventListener("change", loadBtnInitial);

function loadBtnInitial() {
    console.log("load initial button");

    if (document.getElementById("cb_col_btns").checked) {
        // create one button in two columns  
        const btnDiv1 = document.createElement('div');
        const btnDiv2 = document.createElement('div');
        const iconBtn = content_buttons_one_icon;
        const textBtn = content_buttons_one_text;
        btnDiv1.classList.add('container-btn');
        btnDiv2.classList.add('container-btn');
        btnDiv1.innerHTML= "\n\t\t<a href=\"#\" class=\"btn btn-solid\"><span>"+textBtn+"<\/span>"+iconBtn+"</a>\n\t";
        btnDiv2.innerHTML = btnDiv1.innerHTML
        iframe.contentWindow.document.querySelector('.flex-cols-2 .col-2:nth-child(1)').appendChild(btnDiv1);
        iframe.contentWindow.document.querySelector('.flex-cols-2 .col-2:nth-child(2)').appendChild(btnDiv2);

        // enable dialog box settings for all buttons
        document.getElementById("dd_buttons_pair").disabled=false;
        document.getElementById("dd_buttons_pair").value="1";
        document.getElementById("dd_buttons_size").disabled=false;
        document.getElementById("dd_buttons_size").value="1";
        document.getElementById("form_btn_align_desktop").disabled=false;
        document.getElementById("rb_btn_align_desktop_left").disabled=false;
        document.getElementById("rb_btn_align_desktop_left").checked = true;;
        document.getElementById("rb_btn_align_desktop_center").disabled=false;
        document.getElementById("form_btn_align_mobile").disabled=false;
        document.getElementById("rb_btn_align_mobile_left").disabled=false;
        document.getElementById("rb_btn_align_mobile_left").checked = true;;
        document.getElementById("rb_btn_align_mobile_center").disabled=false;

        // enable dialog box settings for buttons one
        document.querySelector(".container-buttons-block").style.display="block";
        document.getElementById("button_1").style.display="inline-block";
        document.getElementById("button_2").style.display="none";
        document.getElementById("dd_button_type_1").value="0";
        document.getElementById("rd_btns_icons_left_1").disabled=false;
        document.getElementById("rd_btns_icons_left_1").checked=true;
        document.getElementById("dd_buttons_shape_1").disabled=false;
        document.getElementById("dd_buttons_shape_1").value="0";
        document.getElementById("cb_col_buttons_shadow_1").disabled=false;
        document.getElementById("cb_col_buttons_shadow_1").checked=false;
        document.getElementById("cb_col_buttons_uppercase_1").disabled=false;
        document.getElementById("cb_col_buttons_uppercase_1").checked=false;
    }

    // remove all buttons from two columns 
    else {
        console.log("remove all buttons")
        const objBtn1 = iframe.contentWindow.document.querySelector('.flex-cols-2 .col-2:nth-child(1) .container-btn');
        objBtn1.remove();
        const objBtn2 = iframe.contentWindow.document.querySelector('.flex-cols-2 .col-2:nth-child(2) .container-btn');
        objBtn2.remove();

        // disable dialog box settings for all buttons
        document.getElementById("dd_buttons_pair").disabled=true;
        document.getElementById("dd_buttons_pair").value="1";
        document.getElementById("dd_buttons_size").disabled=true;
        document.getElementById("dd_buttons_size").value="1";
        document.getElementById("form_btn_align_desktop").disabled=true;
        document.getElementById("rb_btn_align_desktop_left").disabled=true;
        document.getElementById("rb_btn_align_desktop_left").checked = false;
        document.getElementById("rb_btn_align_desktop_center").disabled=true;
        document.getElementById("form_btn_align_mobile").disabled=true;
        document.getElementById("rb_btn_align_mobile_left").disabled=true;
        document.getElementById("rb_btn_align_mobile_left").checked = false;
        document.getElementById("rb_btn_align_mobile_center").disabled=true;

        // disable, reset dialog box settings for buttons one
        document.querySelector(".container-buttons-block").style.display="none";
        document.getElementById("button_1").style.display="none";
        document.getElementById("dd_button_type_1").value="0";
        document.getElementById("rd_btns_icons_left_1").disabled=true;
        document.getElementById("rd_btns_icons_left_1").checked=false;
        document.getElementById("dd_buttons_shape_1").disabled=true;
        document.getElementById("dd_buttons_shape_1").value="0";
        document.getElementById("cb_col_buttons_shadow_1").disabled=true;
        document.getElementById("cb_col_buttons_shadow_1").checked=false;
        document.getElementById("cb_col_buttons_uppercase_1").disabled=true;
        document.getElementById("cb_col_buttons_uppercase_1").checked=false;

        // disable, reset dialog box settings for buttons two
        document.getElementById("button_2").style.display="none";
        document.getElementById("dd_button_type_2").value="0";
        document.getElementById("rd_btns_icons_left_2").disabled=true;
        document.getElementById("rd_btns_icons_left_2").checked=false;
        document.getElementById("dd_buttons_shape_2").disabled=true;
        document.getElementById("dd_buttons_shape_2").value="0";
        document.getElementById("cb_col_buttons_shadow_2").disabled=true;
        document.getElementById("cb_col_buttons_shadow_2").checked=false;
        document.getElementById("cb_col_buttons_uppercase_2").disabled=true;
        document.getElementById("cb_col_buttons_uppercase_2").checked=false;
    }
}

document.querySelector("#dd_buttons_pair").addEventListener("change", doButtonsPair);

    function doButtonsPair() {
        let opt = document.querySelector("#dd_buttons_pair").value;

        if (opt==="1") {
            // test for button two and remove
            if (iframe.contentWindow.document.querySelector('.flex-cols-2 .col-2:nth-child(2)')) {
                console.log(" Found button 1");
                const objBtn1 = iframe.contentWindow.document.querySelector('.flex-cols-2 .col-2:nth-child(1) .container-btn a:nth-child(2)');
                const objBtn2 = iframe.contentWindow.document.querySelector('.flex-cols-2 .col-2:nth-child(2) .container-btn a:nth-child(2)');
                objBtn1.remove();
                objBtn2.remove();
                // disable, reset dialog box settings for buttons two
                document.getElementById("button_2").style.display="none";
                document.getElementById("dd_button_type_2").value="0";
                document.getElementById("rd_btns_icons_left_2").disabled=true;
                document.getElementById("rd_btns_icons_left_2").checked=false;
                document.getElementById("dd_buttons_shape_2").disabled=true;
                document.getElementById("dd_buttons_shape_2").value="0";
                document.getElementById("cb_col_buttons_shadow_2").disabled=true;
                document.getElementById("cb_col_buttons_shadow_2").checked=false;
                document.getElementById("cb_col_buttons_uppercase_2").disabled=true;
                document.getElementById("cb_col_buttons_uppercase_2").checked=false;
            }
        }

        else if (opt==="2") {
            // Add button two
            const objDiv1 = iframe.contentWindow.document.querySelector('.flex-cols-2 .col-2:nth-child(1) .container-btn');
            const objDiv2 = iframe.contentWindow.document.querySelector('.flex-cols-2 .col-2:nth-child(2) .container-btn');
            const objBtn1 = document.createElement('a');
            const objBtn2 = document.createElement('a');
            objBtn1.classList.add('btn');
            objBtn2.classList.add('btn');
            objBtn1.classList.add('btn-outline');
            objBtn2.classList.add('btn-outline');
            objBtn1.href = "#";
            objBtn2.href = "#";
            const iconBtn = content_buttons_pair_icon_2;
            const textBtn = content_buttons_pair_text_2;
            objBtn1.innerHTML= "<span>"+textBtn+"<\/span>"+iconBtn;
            objBtn2.innerHTML= "<span>"+textBtn+"<\/span>"+iconBtn;
            objDiv1.appendChild(objBtn1);
            objDiv2.appendChild(objBtn2);

            // enable dialog box options for button two
            document.getElementById("button_2").style.display="inline-block";
            document.getElementById("dd_button_type_2").value="1";
            document.getElementById("rd_btns_icons_left_2").disabled=false;
            document.getElementById("rd_btns_icons_left_2").checked=true;
            document.getElementById("dd_buttons_shape_2").disabled=false;
            document.getElementById("dd_buttons_shape_2").value="0";
            document.getElementById("cb_col_buttons_shadow_2").disabled=false;
            document.getElementById("cb_col_buttons_shadow_2").checked=false;
            document.getElementById("cb_col_buttons_uppercase_2").disabled=false;
            document.getElementById("cb_col_buttons_uppercase_2").checked=false;
        }
    }
  
/*
//////////////// BUTTONS COMMON: SIZE ////////////////////
*/

document.querySelector("#dd_buttons_size").addEventListener("change", doButtonsSize);

function doButtonsSize() {
    let opt = document.querySelector("#dd_buttons_size").value;
    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn');

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
//////////////// BUTTONS COMMON: ALIGN DESKTOP  ////////////////////
*/

document.querySelector("#form_btn_align_desktop").addEventListener("change", doButtonsAlignDesktop);

function doButtonsAlignDesktop() {

    const rbs = document.querySelectorAll("input[name='rb_btn_align_desktop']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    // Verify button container exists 
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
//////////////// BUTTONS COMMON: ALIGN MOBILE  ////////////////////
*/

document.querySelector("#form_btn_align_mobile").addEventListener("change", doButtonsAlignMobile);

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
//////////////// BUTTON ONE: TYPE ////////////////////
*/

document.querySelector("#dd_button_type_1").addEventListener("change", doButtonType1);

function doButtonType1() {
    let opt = document.querySelector("#dd_button_type_1").value;

    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(1)');

    // Solid
    if (opt==="0") {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-outline");
            btn.classList.remove("btn-plain");
            btn.classList.add("btn-solid");            
        });
    }

    // Outline
    else if (opt==="1") {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-plain");
            btn.classList.remove("btn-solid");
            btn.classList.add("btn-outline");
        });
    }

    // Link
    else if (opt==="2") {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-outline");
            btn.classList.remove("btn-solid");
            btn.classList.add("btn-plain");
        });
    }
}

/*
//////////////// BUTTON TWO: TYPE ////////////////////
*/

document.querySelector("#dd_button_type_2").addEventListener("change", doButtonType2);

function doButtonType2() {
    let opt = document.querySelector("#dd_button_type_2").value;

    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(2)');

    // Solid
    if (opt==="0") {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-outline");
            btn.classList.remove("btn-plain");
            btn.classList.add("btn-solid");            
        });
    }

    // Outline
    else if (opt==="1") {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-plain");
            btn.classList.remove("btn-solid");
            btn.classList.add("btn-outline");
        });
    }

    // Link
    else if (opt==="2") {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-outline");
            btn.classList.remove("btn-solid");
            btn.classList.add("btn-plain");
        });
    }
}

/*
//////////////// BUTTON ONE: ICON POSITION ////////////////////
*/

document.querySelector("#form_btns_icons_position_1").addEventListener("change", swapButtonIcons_1);

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
//////////////// BUTTON TWO: ICON POSITION ////////////////////
*/

document.querySelector("#form_btns_icons_position_2").addEventListener("change", swapButtonIcons_2);

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


/*
//////////////// BUTTONS ONE: SHAPE ////////////////////
*/

document.querySelector("#dd_buttons_shape_1").addEventListener("change", doButtonsShape1);

function doButtonsShape1() {
    let opt = document.querySelector("#dd_buttons_shape_1").value;
    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(1)');
    // remove
    if (opt==="0") {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-pill");
            btn.classList.remove("btn-soft");
        });
    }

    // soft
    else if (opt==="1") {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-pill");
            btn.classList.add("btn-soft");
        });
    }

    // pill
    else if (opt==="2") {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-soft");
            btn.classList.add("btn-pill");
        });
    }
}


/*
//////////////// BUTTONS TWO: SHAPE ////////////////////
*/

document.querySelector("#dd_buttons_shape_2").addEventListener("change", doButtonsShape2);

function doButtonsShape2() {
    let opt = document.querySelector("#dd_buttons_shape_2").value;
    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(2)');

    // remove
    if (opt==="0") {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-pill");
            btn.classList.remove("btn-soft");
        });
    }

    // soft
    else if (opt==="1") {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-pill");
            btn.classList.add("btn-soft");
        });
    }

    // pill
    else if (opt==="2") {
        // Loop through buttons
        objBtns.forEach(btn => {
            btn.classList.remove("btn-soft");
            btn.classList.add("btn-pill");
        });
    }
}

/*
//////////////// BUTTONS ONE: SHADOW ///////////////
*/

document.querySelector("#cb_col_buttons_shadow_1").addEventListener("change", doBtnShadow1);

function doBtnShadow1() {
    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(1)');

    if (!document.getElementById("cb_col_buttons_shadow_1").checked) {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-shadow");
        });
    }
    else {
        objBtns.forEach(btn => {
            btn.classList.add("btn-shadow");
        });
    }
}

document.querySelector("#cb_col_buttons_shadow_2").addEventListener("change", doBtnShadow2);

function doBtnShadow2() {
    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(2)');

    if (!document.getElementById("cb_col_buttons_shadow_2").checked) {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-shadow");
        });
    }
    else {
        objBtns.forEach(btn => {
            btn.classList.add("btn-shadow");
        });
    }
}

/*
//////////////// BUTTONS ONE: UPPERCASE ///////////////
*/

document.querySelector("#cb_col_buttons_uppercase_1").addEventListener("change", doBtnUCase1);

function doBtnUCase1() {

    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(1)');

    if (!document.getElementById("cb_col_buttons_uppercase_1").checked) {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-uppercase");
        });
    }
    else {
        objBtns.forEach(btn => {
            btn.classList.add("btn-uppercase");
        });
    }
}

/*
//////////////// BUTTONS ONE: UPPERCASE ///////////////
*/

document.querySelector("#cb_col_buttons_uppercase_2").addEventListener("change", doBtnUCase2);

function doBtnUCase2() {

    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(2)');

    if (!document.getElementById("cb_col_buttons_uppercase_2").checked) {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-uppercase");
        });
    }
    else {
        objBtns.forEach(btn => {
            btn.classList.add("btn-uppercase");
        });
    }
}
