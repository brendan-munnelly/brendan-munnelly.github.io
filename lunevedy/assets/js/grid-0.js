import { col_1_content_header_h3, col_1_content_para_last, col_1_content_ul_short, col_1_content_ul_long, col_1_content_buttons_one, col_1_content_buttons_pair, col_1_content_caption } from '../js/arr-content.js';

section_class = sessionStorage.getItem('section-selector');
col_no = sessionStorage.getItem('col-no');
col_count = sessionStorage.getItem('col-count');


/*
//////////////// SECTION WIDTH ///////////////
*/

document.querySelector("#dd_section_width").addEventListener("change", doWidthSectionDesktop);

function doWidthSectionDesktop() {

    let opt = document.querySelector("#dd_section_width").value;
    deleteWidthSectionDesktop();

    if (opt==="0") {
        iframe.contentWindow.document.querySelector("section").classList.add("section-width-800px");
    }

    else if (opt==="1") {
        iframe.contentWindow.document.querySelector("section").classList.add("section-width-960px");
    }
    else if (opt==="2") {
        iframe.contentWindow.document.querySelector("section").classList.add("section-width-1024px");
    }
    else if (opt==="3") {
        iframe.contentWindow.document.querySelector("section").classList.add("section-width-1140px");
    }
}

function deleteWidthSectionDesktop() {
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-800px");
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-960px");
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-1024px");
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-1140px");
}

/*
//////////////// ALIGN ENTIRE SECTION ///////////////
*/

document.querySelector("#form_align_desktop").addEventListener("change", doAlignSectionDesktop);

function doAlignSectionDesktop() {
    const rbs = document.querySelectorAll("input[name='align_desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("#HTML-Content section").classList.remove("text-center-desktop");
        document.getElementById("dd_align_desktop_btns").disabled=false;
        document.getElementById("dd_align_desktop_btns").value="0";

    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("#HTML-Content section").classList.add("text-center-desktop"); 
        document.getElementById("dd_align_desktop_btns").value="1";
        document.getElementById("dd_align_desktop_btns").disabled=true;
    }
}

document.querySelector("#form_align_mobile").addEventListener("change", doAlignSectionMobile);

function doAlignSectionMobile() {

    const rbs = document.querySelectorAll("input[name='align_mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("section").classList.remove("text-center-mobile");
        document.getElementById("dd_align_desktop_btns").disabled=false;
        document.getElementById("dd_align_desktop_btns").value="0";

    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("section").classList.add("text-center-mobile"); 
        document.getElementById("dd_align_desktop_btns").value="1";
        document.getElementById("dd_align_desktop_btns").disabled=true;
    }
}
            


/*
//////////////// UPPER CATEGORY LABEL ABOVE H2 ///////////////
*/

document.querySelector("#cb_col_1_label").addEventListener("change", doUpperLabel);

function doUpperLabel() {

    // Single column
    if (!document.getElementById("cb_col_1_label").checked) {
        removeUpperLabel();
    }
    else {
        iframe.contentWindow.document.querySelector("section h2").insertAdjacentHTML("beforebegin", "<div class=\"container-upper-label\"><span>CATEGORY<\/span><\/div>\n\n\t\t");
        iframe.contentWindow.document.querySelector('section').innerHTML =iframe.contentWindow.document.querySelector('section').innerHTML.replace("\n\n\t\t<h2>", "<h2>");
        document.getElementById("btn_col_1_label_text").disabled=false;
    }
}

function removeUpperLabel() {
    if (iframe.contentWindow.document.querySelector('.container-upper-label')) {
    const upperLabel = iframe.contentWindow.document.querySelector('.container-upper-label');
        upperLabel.remove();
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('\n\t\t\t<h2>Section heading<\/h2>', '<h2>Section heading<\/h2>');
        document.getElementById("btn_col_1_label_text").disabled=true;
    }
}

/*
//////////////// STANDFIRST ///////////////
*/

document.querySelector("#cb_stand_first").addEventListener("change", doStandFirst);

function doStandFirst() {
    if (!document.getElementById("cb_stand_first").checked) {
        iframe.contentWindow.document.querySelector("section p").classList.remove("standfirst");
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<p class=\"\">', '<p>');
    }
    else {
        document.querySelector("label[for='cb_stand_first']").style.color = "#fff";
        iframe.contentWindow.document.querySelector("section p").classList.add("standfirst");
    }
}

/*
//////////////// H3 SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_col_1_h3").addEventListener("change", doColH3);

function doColH3() {

    if (!document.getElementById("cb_col_1_h3").checked) {
        removeH3();
    }

    else {
        if (!iframe.contentWindow.document.querySelector("section h3")) {
            iframe.contentWindow.document.querySelector("section p:nth-of-type(2)").insertAdjacentHTML("beforebegin", col_1_content_header_h3);
            // iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('</h3>\n\n', '</h3>\n');
            iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace("empowerment.</p>\n\n\t", "empowerment.</p>\n\n");
            document.getElementById("btn_col_1_h3_text").disabled=false;
        }
        else {
            return
        }
    }
}

function removeH3() {
    iframe.contentWindow.document.querySelector("section h3").remove();
    iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<\/p>\n\n', '<\/p>\n');
    document.getElementById("btn_col_1_h3_text").disabled=true;
}


/*
//////////////// SECTION TEXT: LISTS  ///////////////
*/

document.querySelector("#switch-section-list").addEventListener("change", doLists);

function doLists() {
    const rbs = document.querySelectorAll("input[name='section-list-type']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    
    if (selectedValue==="list-none") {
        removeList();
    }

    else if (selectedValue==="list-short") {
        removeList();
        iframe.contentWindow.document.querySelector('section p:last-of-type').remove();
        iframe.contentWindow.document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", col_1_content_ul_short);
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replaceAll('<\/p>\t', '<\/p>');
    }

    else if (selectedValue==="list-long") {
        removeList();
        iframe.contentWindow.document.querySelector('section p:last-of-type').remove();
        iframe.contentWindow.document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", col_1_content_ul_long);
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replaceAll('<\/p>\t', '<\/p>');
    }
}

function removeList() {
    if (iframe.contentWindow.document.querySelector("section > ul")) {
        const elUL = iframe.contentWindow.document.querySelector("section > ul");
        elUL.remove();
        // Restore third paragraph
        iframe.contentWindow.document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", col_1_content_para_last);
    }
    iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<\/p>\n\n\t\t\n\n', '<\/p>');

    iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<\/p>        ', '<\/p>');

    let sectionContent = iframe.contentWindow.document.querySelector('section').innerHTML;

    const count = (sectionContent.match(/<\/p>\t/g) || []).length;
    for (let i = 0; i <= count; i++) {
        sectionContent = sectionContent.replace('</p>\t', '</p>');
    }
    iframe.contentWindow.document.querySelector('section').innerHTML = sectionContent;
}

/*
//////////////// SECTION: BUTTONS ///////////////
*/


/*
//////////////// BUTTONS ////////////////////
*/

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
            if (iframe.contentWindow.document.querySelector(".col-1:nth-child(1) ul")) {
                iframe.contentWindow.document.querySelector(".col-1:nth-child(1) ul").insertAdjacentHTML("afterend", col_1_content_buttons_one);            
            }
            else {
                iframe.contentWindow.document.querySelector(".col-1:nth-child(1) p:last-of-type").insertAdjacentHTML("afterend", col_1_content_buttons_one);
            }
        }
        // two buttons
        else if (opt==="2") {
            removeButtonsSplit();
            addButtons_12();

            if (iframe.contentWindow.document.querySelector(".col-1:nth-child(1) ul")) {
                iframe.contentWindow.document.querySelector(".col-1:nth-child(1) ul").insertAdjacentHTML("afterend", col_1_content_buttons_pair);            
            }
            else {
                iframe.contentWindow.document.querySelector(".col-1:nth-child(1) p:last-of-type").insertAdjacentHTML("afterend", col_1_content_buttons_pair);
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


/*
//////////////// VISUAL ELEMENT INSIDE SINGLE-COLUMN LAYOUT ///////////////
*/

/* Enable visual */
document.querySelector("#cb_visual").addEventListener("change",checkVis);

function checkVis() {

    if (!document.getElementById("cb_visualOn").checked) {
        removeVisual();
    }
    else {
        enableRBs();
        enableVisualWidth();
        enableImgProps();
        disableVidProps();
        disableVisualAlign();

        // Select first (picture) radio button
        document.getElementById("vis_type_0").checked=true;

        // Add picture
        iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<img src=\"assets\/img\/800x480-restaurant.jpg\" alt=\"Placeholder image\">\n\t\t<\/figure>");
    }
}


document.querySelector("#vis-types-all").addEventListener("click", doVisType);

function doVisType() { 
    const rbs = document.querySelectorAll("#vis-types-all input[name='dd_visual']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="none") {
        removeVisual();
        disableRBs();
        disableVisualWidth()
        disableVisualAlign();
        disableImgProps();
    }

    else if ( (selectedValue==="pictures") || (selectedValue==="transparent") || (selectedValue==="illustrations") ) {
        resetVisual();
        enableRBs();
        enableVisualWidth();
        enableImgProps();
        disableVidProps();
        disableVisualAlign();
        if (selectedValue==="pictures") {
            iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<img src=\"assets\/img\/800x480-restaurant.jpg\" alt=\"Placeholder image\">\n\t\t<\/figure>");        
            document.getElementById("vis_type_0").checked=true;

        }
    
        else if (selectedValue==="transparent") {
            iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<img src=\"assets\/img\/800x480-office.png\" alt=\"Placeholder image\">\n\t\t<\/figure>"); 
            document.getElementById("vis_type_1").checked=true;
            document.getElementById("cb_img_corners").disabled=true;
            document.getElementById("cb_img_corners").checked=false;
        }

        else if (selectedValue==="illustrations") {
            iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<img src=\"assets\/img\/800x480-teamwork.png\" alt=\"Placeholder image\">\n\t\t<\/figure>"); 
            document.getElementById("vis_type_2").checked=true;
            document.getElementById("cb_img_corners").disabled=true;
            document.getElementById("cb_img_corners").checked=false;            
        }
        
    iframe.contentWindow.document.querySelector('section').innerHTML =iframe.contentWindow.document.querySelector('section').innerHTML.replace("\t\t\n\n", "");

    } // Ends pics branch

    else if ( (selectedValue==="vid-file") || (selectedValue==="vid-yt") ) {
        resetVisual();
        enableRBs();
        enableVisualWidth();
        disableImgProps();
        enableVidProps();
        disableVisualAlign();
        if (selectedValue==="vid-file") {
            iframe.contentWindow.document.querySelector("section p").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<div class=\"container-video-file\">\n\t\t\t\t<video controls>\n\t\t\t\t\t<source src=\"assets/videos/video-focal-center.mp4\" type=\"video\/mp4\">\n\t\t\t\t<\/video>\n\t\t\t</div>\n\t\t</figure>");
            document.getElementById("vis_type_3").checked=true;
        }

        else if (selectedValue==="vid-yt") {
            iframe.contentWindow.document.querySelector("section p").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<div class=\"container-video-yt\">\n\t\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t\t<\/iframe>\n\t\t\t<\/div>\n\t\t</figure>");
            document.getElementById("vis_type_4").checked=true;
        }
        iframe.contentWindow.document.querySelector('section').innerHTML =iframe.contentWindow.document.querySelector('section').innerHTML.replace("\t\t\n\n", "");
     
    } // Ends video branch
}

/*
//////////////// ILLUSTRATIONS: ALIGN ON DESKTOP  ////////////////////
*/

document.querySelector("#switch-section-desktop-figure-align").addEventListener("change", doAlignDesktopFig);
    
function doAlignDesktopFig() {

    const rbs = document.querySelectorAll("input[name='section-desktop-figure-align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="fig-left") {
        iframe.contentWindow.document.querySelector("section figure").classList.remove("text-center-desktop");
    }
    else if (selectedValue==="fig-center") {
        iframe.contentWindow.document.querySelector("section figure").classList.add("text-center-desktop");   
    }
}

/*
//////////////// VISUAL ELEMENT WIDTH (600px AND ABOVE ) ///////////////
*/

document.querySelector("#switch_section_vis_width_desktop").addEventListener("change", doFigWidthDesktop);

function doFigWidthDesktop() {
    const rbs = document.querySelectorAll("input[name='section-vis-width-desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    const el_section_fig = iframe.contentWindow.document.querySelector("section figure");
    if (selectedValue==="100") {
        el_section_fig.classList.remove("figure-width-50");
        el_section_fig.classList.remove("figure-width-80");
        disableVisualAlign();
    }

    else if (selectedValue==="80") {
        el_section_fig.classList.remove("figure-width-50");
        el_section_fig.classList.add("figure-width-80");
        enableVisualAlign();
    }

    else if (selectedValue==="50") {
        el_section_fig.classList.remove("figure-width-80");
        el_section_fig.classList.add("figure-width-50");
        enableVisualAlign();        
    }
}

/*
//////////////// VISUAL PROPERTIES: IMAGE SHADOWS ///////////////
*/

/* Enable image shadows */
document.querySelector("#cb_img_shadows").addEventListener("change", doImgShadows);

function doImgShadows() {

    if (!document.getElementById("cb_img_shadows").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-shadow");
    }
}

/*
//////////////// VISUAL PROPERTIES: CORNERS ///////////////
*/

document.querySelector("#cb_img_corners").addEventListener("change", doImgCorners);

function doImgCorners() {

    if (!document.getElementById("cb_img_corners").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-corners-soft");
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-corners-soft");
    }
}

/*
//////////////// VISUAL PROPERTIES: VIDEO SHADOWS ///////////////
*/

/* Enable video shadows */
document.querySelector("#cb_vid_shadows").addEventListener("change", doVidShadows);

function doVidShadows() {
    if (!document.getElementById("cb_vid_shadows").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-shadow");
    }
}

/* ================ VISUAL PROPERTIES ================= */

// All radio buttons
function enableRBs() {
    document.getElementById("vis_type_0").checked=false;
    document.getElementById("vis_type_1").checked=false;
    document.getElementById("vis_type_2").checked=false;
    document.getElementById("vis_type_3").checked=false;
    document.getElementById("vis_type_4").checked=false;
    document.getElementById("vis_type_0").disabled=false;
    document.getElementById("vis_type_1").disabled=false;
    document.getElementById("vis_type_2").disabled=false;
    document.getElementById("vis_type_3").disabled=false;
    document.getElementById("vis_type_4").disabled=false;
}

function disableRBs() {
    document.getElementById("vis_type_0").checked=false;
    document.getElementById("vis_type_1").checked=false;
    document.getElementById("vis_type_2").checked=false;
    document.getElementById("vis_type_3").checked=false;
    document.getElementById("vis_type_4").checked=false;
    document.getElementById("vis_type_0").disabled=true;
    document.getElementById("vis_type_1").disabled=true;
    document.getElementById("vis_type_2").disabled=true;
    document.getElementById("vis_type_3").disabled=true;
    document.getElementById("vis_type_4").disabled=true;
}


// Visual width
function enableVisualWidth() {
    document.getElementById("rb_vis_width_desktop_100").disabled=false;
    document.getElementById("rb_vis_width_desktop_80").disabled=false;
    document.getElementById("rb_vis_width_desktop_50").disabled=false;
    document.getElementById("rb_vis_width_desktop_100").checked=true;
}

function disableVisualWidth() {
    document.getElementById("rb_vis_width_desktop_100").disabled=true;
    document.getElementById("rb_vis_width_desktop_80").disabled=true;
    document.getElementById("rb_vis_width_desktop_50").disabled=true;
    document.getElementById("rb_vis_width_desktop_100").checked=false;
    document.getElementById("rb_vis_width_desktop_80").checked=false;
    document.getElementById("rb_vis_width_desktop_50").checked=false;
}

// Visual align
function enableVisualAlign() {
    document.getElementById("rb_desktop_figure_align_left").disabled=false;
    document.getElementById("rb_desktop_figure_align_left").checked=true;
    document.getElementById("rb_desktop_figure_align_center").disabled=false;
}

function disableVisualAlign() {
    document.getElementById("rb_desktop_figure_align_left").disabled=true;
    document.getElementById("rb_desktop_figure_align_left").checked=false;
    document.getElementById("rb_desktop_figure_align_center").disabled=true;
    document.getElementById("rb_desktop_figure_align_center").checked=false;
}

// Image properties with labels
function enableImgProps() {
    document.getElementById("cb_img_corners").disabled=false;
    document.getElementById("cb_img_corners").checked=false;
    document.getElementById("cb_img_shadows").disabled=false;
    document.getElementById("cb_img_shadows").checked=false;
}

function disableImgProps() {
    document.getElementById("cb_img_corners").disabled=true;
    document.getElementById("cb_img_corners").checked=false;
    document.getElementById("cb_img_shadows").disabled=true;
    document.getElementById("cb_img_shadows").checked=false;
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
}

// Video properties with labels
function enableVidProps() {
    document.getElementById("cb_vid_shadows").disabled=false;
    document.getElementById("cb_vid_shadows").checked=false;
}

function disableVidProps() {
    document.getElementById("cb_vid_shadows").disabled=true;
    document.getElementById("cb_vid_shadows").checked=false;
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
}

function resetVisual() {
    if (iframe.contentWindow.document.querySelector('section figure')) {
        let el_content = iframe.contentWindow.document.querySelector('section');
        let el_fig = iframe.contentWindow.document.querySelector('section figure');
        el_content.removeChild(el_fig);
    }

    // Uncheck and disable all radio buttons
    document.getElementById("vis_type_0").checked=false;
    document.getElementById("vis_type_1").checked=false;
    document.getElementById("vis_type_2").checked=false;
    document.getElementById("vis_type_3").checked=false;
    document.getElementById("vis_type_4").checked=false;
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    disableImgProps();
    disableVidProps();
}

function removeVisual() {
    if (iframe.contentWindow.document.querySelector('section')) {
        iframe.contentWindow.document.querySelector('section').innerHTML =iframe.contentWindow.document.querySelector('section').innerHTML.replace("</figure>", "</figure>\n\n\t");
        let el_content = iframe.contentWindow.document.querySelector('section');
        let el_fig = iframe.contentWindow.document.querySelector('section figure');
        el_content.removeChild(el_fig);

        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace("empowerment.</p>\n\n\t", "empowerment.</p>\n\n");
    }

    disableRBs();
    disableVisualWidth();
    disableVisualAlign();
    disableImgProps();
    disableVidProps();
    let HTML_Content = iframe.contentWindow.document.getElementById("HTML-Content").innerHTML;
    HTML_Content = HTML_Content.replace(/\t\n\n/g, "");
    iframe.contentWindow.document.getElementById("HTML-Content").innerHTML = HTML_Content;
}

/*
//////////////// SECTION TEXT: ANIMATION ///////////////
*/

document.querySelector("#dd_text_slide").addEventListener("change", doTextAnimation);
    
function doTextAnimation() {
    let opt = document.querySelector("#dd_text_slide").value;
    if (opt==="0") {
        removeTextAnimation();
    }
    let animationType;

    if (opt==="1") { 
        removeTextAnimation();
        animationType = "slide-in-top"; 
        applyAnimation(animationType);
    }

    if (opt==="2") {
        removeTextAnimation();
        animationType = "slide-in-left"; 
        applyAnimation(animationType);
    }

    if (opt==="3") {
        removeTextAnimation();
        animationType = "slide-in-right"; 
        applyAnimation(animationType);
    }

    if (opt==="4") {
        removeTextAnimation();
        animationType = "slide-in-bottom"; 
        applyAnimation(animationType);
    }

    if (opt==="5") {
        removeTextAnimation();
        animationType = "fade-in"; 
        applyAnimation(animationType);
    }
}

function applyAnimation(animationType) {
    document.querySelector("label[for='dd_text_slide']").style.color = "#fff";
    if (iframe.contentWindow.document.querySelector("section .container-upper-label")) {
        iframe.contentWindow.document.querySelector("section .container-upper-label").classList.add(animationType);
    }

    iframe.contentWindow.document.querySelector("section h2").classList.add(animationType);

    if (iframe.contentWindow.document.querySelector("section h3")) {
        iframe.contentWindow.document.querySelector("section h3").classList.add(animationType);
    }

    let paras = iframe.contentWindow.document.querySelectorAll("section p");
    for (i = 0; i < paras.length; ++i) {
        paras[i].classList.add(animationType)
    }

    if (iframe.contentWindow.document.querySelector("section ul")) {
        iframe.contentWindow.document.querySelector("section ul").classList.add(animationType);
    }
    
    if (iframe.contentWindow.document.querySelector("section figure")) {
        iframe.contentWindow.document.querySelector("section figure").classList.add(animationType);
    }
    
    if (iframe.contentWindow.document.querySelector("section .container-btn")) {
        iframe.contentWindow.document.querySelector("section .container-btn").classList.add(animationType);
    }
}

function removeTextAnimation() {
    document.querySelector("label[for='dd_text_slide']").style.color = "var(--gray-500)";
    // Has .container-upper-label
    if (iframe.contentWindow.document.querySelector("section .container-upper-label")) {
        iframe.contentWindow.document.querySelector("section .container-upper-label").removeAttribute("class");
    }

    iframe.contentWindow.document.querySelector("section h2").removeAttribute("class");
    
    // Has h3 sub-heading
    if (iframe.contentWindow.document.querySelector("section h3")) {
        iframe.contentWindow.document.querySelector("section h3").removeAttribute("class");
    }

    let paras = iframe.contentWindow.document.querySelectorAll("section p");
    for (i = 0; i < paras.length; ++i) {
        paras[i].removeAttribute("class");
    }
    // Has ul list
    if (iframe.contentWindow.document.querySelector("section ul")) {
        iframe.contentWindow.document.querySelector("section ul").removeAttribute("class");
    }
    // Has figure
    if (iframe.contentWindow.document.querySelector("section figure")) {
        iframe.contentWindow.document.querySelector("section figure").removeAttribute("class");
    }
    // Has .container-btn
    if (iframe.contentWindow.document.querySelector("section .container-btn")) {
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-top");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-bottom");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-left");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-right");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("fade-in");
    }
}

