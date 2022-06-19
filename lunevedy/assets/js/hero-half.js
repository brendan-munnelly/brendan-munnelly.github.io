import {col_2_content_para, col_2_content_list } from '../js/arr-content.js';

/*
//////////////// HEADER: COLUMN ORDER ////////////////////
*/

/* Desktop: left and right */
document.querySelector("#form_col_visual_desktop").addEventListener("change", doColOrderDesktop);

function doColOrderDesktop() {
    const rbs = document.querySelectorAll("input[name='col_visual_desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    let flexparent = iframe.contentWindow.document.querySelector("header");
    if (selectedValue==="left") {
        flexparent.classList.add("flex-row-reverse");
    }
    else if (selectedValue==="right") {
        flexparent.classList.remove("flex-row-reverse");
    }
}

/* Mobile: top and bottom */
document.querySelector("#form_col_visual_mobile").addEventListener("change", doColOrderMobile);

function doColOrderMobile() {
    const rbs = document.querySelectorAll("input[name='col_visual_mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    let flexparent = iframe.contentWindow.document.querySelector("header");
    if (selectedValue==="top") {
        flexparent.classList.remove("flex-column-reverse");
    }
    else if (selectedValue==="bottom") {
        flexparent.classList.add("flex-column-reverse");
    }
}

/*
//////////////// VISUAL BLEED ///////////////
*/

document.querySelector("#dd_bleed_desktop").addEventListener("change", doVisualBleedDesktop);

function doVisualBleedDesktop() {

    let opt = document.querySelector("#dd_bleed_desktop").value;
    let elColVis = iframe.contentWindow.document.querySelector("header .col-2.col-visual");
    
    // Regular
    if (opt==="0") {
        elColVis.classList.remove("desktop-bleed-outside");
        elColVis.classList.remove("desktop-bleed-all");
    }

    else if (opt==="1") {
        elColVis.classList.remove("desktop-bleed-all");
        elColVis.classList.add("desktop-bleed-outside");
    }

    else if (opt==="2") {
        elColVis.classList.remove("desktop-bleed-outside");
        elColVis.classList.add("desktop-bleed-all");
    }
}

document.querySelector("#dd_bleed_mobile").addEventListener("change", doVisualBleedMobile);

function doVisualBleedMobile() {

    let opt = document.querySelector("#dd_bleed_mobile").value;
    let elColVis = iframe.contentWindow.document.querySelector("header .col-2.col-visual");
    
    // Regular
    if (opt==="0") {
        elColVis.classList.remove("mobile-bleed-edges");
    }

    else if (opt==="1") {
        elColVis.classList.add("mobile-bleed-edges");
    }
}

/*
//////////////// TEXT ANIMATION ///////////////
*/

document.querySelector("#dd_text_slide").addEventListener("change", doTextAnimation);

function doTextAnimation() {
    let opt = document.querySelector("#dd_text_slide").value;
    if (opt==="0") {
        removeTextAnimation();
    }
    let animationType;
    console.log("opt: "+opt);

    if (opt==="1") { 
        removeTextAnimation();
        animationType = "slide-in-sides"; 
        applyAnimation(animationType);
    }

    if (opt==="2") { 
        removeTextAnimation();
        animationType = "slide-in-top"; 
        applyAnimation(animationType);
    }

    if (opt==="3") {
        removeTextAnimation();
        animationType = "slide-in-bottom"; 
        applyAnimation(animationType);
    }

    if (opt==="4") {
        removeTextAnimation();
        animationType = "fade-in"; 
        applyAnimation(animationType);
    }
}

function applyAnimation(animationType) {

    if (animationType ==="slide-in-sides") {

        if (iframe.contentWindow.document.querySelector("section.split-image-right")) {
            // Image at right
            iframe.contentWindow.document.querySelector("header figure").classList.add("slide-in-right");
            // All else at left
            if (iframe.contentWindow.document.querySelector("section .container-upper-label")) {
                iframe.contentWindow.document.querySelector("section .container-upper-label").classList.add("slide-in-left");
            }
            iframe.contentWindow.document.querySelector("section h2").classList.add("slide-in-left");

            if (iframe.contentWindow.document.querySelector("section h3")) {
                iframe.contentWindow.document.querySelector("section h3").classList.add("slide-in-left");
            }
            let paras = iframe.contentWindow.document.querySelectorAll("section p");
            for (let i = 0; i < paras.length; ++i) {
                paras[i].classList.add("slide-in-left")
            }
            if (iframe.contentWindow.document.querySelector("section ul")) {
                iframe.contentWindow.document.querySelector("section ul").classList.add("slide-in-left");
            }
            if (iframe.contentWindow.document.querySelector("header .container-btn")) {
                iframe.contentWindow.document.querySelector("header .container-btn").classList.add("slide-in-left");
            }
        }

        else if (iframe.contentWindow.document.querySelector("section.split-image-left")) {
            // Image at left
            iframe.contentWindow.document.querySelector("header figure").classList.add("slide-in-left");
            // All else at right
            if (iframe.contentWindow.document.querySelector("section .container-upper-label")) {
                iframe.contentWindow.document.querySelector("section .container-upper-label").classList.add("slide-in-right");
            }
            iframe.contentWindow.document.querySelector("section h2").classList.add("slide-in-right");
            if (iframe.contentWindow.document.querySelector("section h3")) {
                iframe.contentWindow.document.querySelector("section h3").classList.add("slide-in-right");
            }
            let paras = iframe.contentWindow.document.querySelectorAll("section p");
            for (let i = 0; i < paras.length; ++i) {
                paras[i].classList.add("slide-in-right")
            }
            if (iframe.contentWindow.document.querySelector("section ul")) {
                iframe.contentWindow.document.querySelector("section ul").classList.add("slide-in-right");
            }
            if (iframe.contentWindow.document.querySelector("header .container-btn")) {
                iframe.contentWindow.document.querySelector("header .container-btn").classList.add("slide-in-right");
            }
        }
    }

    else {

        if (iframe.contentWindow.document.querySelector("section .container-upper-label")) {
            iframe.contentWindow.document.querySelector("section .container-upper-label").classList.add(animationType);
        }

        iframe.contentWindow.document.querySelector("section h2").classList.add(animationType);

        if (iframe.contentWindow.document.querySelector("section h3")) {
            iframe.contentWindow.document.querySelector("section h3").classList.add(animationType);
        }

        let paras = iframe.contentWindow.document.querySelectorAll("section p");
        for (let i = 0; i < paras.length; ++i) {
            paras[i].classList.add(animationType)
        }

        if (iframe.contentWindow.document.querySelector("section ul")) {
            iframe.contentWindow.document.querySelector("section ul").classList.add(animationType);
        }
        
        if (iframe.contentWindow.document.querySelector("header figure")) {
            iframe.contentWindow.document.querySelector("header figure").classList.add(animationType);
        }
        
        if (iframe.contentWindow.document.querySelector("header .container-btn")) {
            iframe.contentWindow.document.querySelector("header .container-btn").classList.add(animationType);
        }
    }
    document.querySelector("label[for='dd_text_slide']").style.color = "#fff";
}

function removeTextAnimation() {
    if (iframe.contentWindow.document.querySelector(".container-upper-label")) {
        iframe.contentWindow.document.querySelector(".container-upper-label").removeAttribute("class");
    }

    iframe.contentWindow.document.querySelector("header .col-2.col-text h2").removeAttribute("class");

    if (iframe.contentWindow.document.querySelector("section h3")) {
        iframe.contentWindow.document.querySelector("section h3").removeAttribute("class");
    }

    let paras = iframe.contentWindow.document.querySelectorAll("section p");
    for (let i = 0; i < paras.length; ++i) {
        paras[i].removeAttribute("class");
    }

    if (iframe.contentWindow.document.querySelector("section ul")) {
        iframe.contentWindow.document.querySelector("section ul").removeAttribute("class");
    }

    if (iframe.contentWindow.document.querySelector("header figure")) {
        iframe.contentWindow.document.querySelector("header figure").removeAttribute("class");
    }

    if (iframe.contentWindow.document.querySelector("header .container-btn")) {
        iframe.contentWindow.document.querySelector("header .container-btn").classList.remove("slide-in-top");
        iframe.contentWindow.document.querySelector("header .container-btn").classList.remove("slide-in-bottom");
        iframe.contentWindow.document.querySelector("header .container-btn").classList.remove("slide-in-left");
        iframe.contentWindow.document.querySelector("header .container-btn").classList.remove("slide-in-right");
        iframe.contentWindow.document.querySelector("header .container-btn").classList.remove("fade-in");
    }
}

/*
//////////////// UPPER CATEGORY LABEL ABOVE H2 ///////////////
*/

document.querySelector("#cb_col_2_label").addEventListener("change", doCol2Label);

function doCol2Label() {

    if (!document.getElementById("cb_col_2_label").checked) {
        removeCol2Label();
    }
    else {
        removeCol2Label();
        iframe.contentWindow.document.querySelector('header .col-2.col-text h2').insertAdjacentHTML("beforebegin", "<div class=\"container-upper-label\"><span>CATEGORY<\/span><\/div>\n\n\t");
        document.getElementById("btn_col_2_label_text").disabled=false;
    }
}

function removeCol2Label() {
    if (iframe.contentWindow.document.querySelector('.container-upper-label')) {
    const upperLabel = iframe.contentWindow.document.querySelector('.container-upper-label');
        upperLabel.remove();
        iframe.contentWindow.document.querySelector('header').innerHTML = iframe.contentWindow.document.querySelector('header').innerHTML.replace("\t\n\n", "");
        document.getElementById("btn_col_2_label_text").disabled=true;
    }
}

/*
//////////////// COLUMN PARAGRAPHS OR LISTS ////////////////////
*/

document.querySelector("#dd_cols_text").addEventListener("change", doColsText);

function doColsText() {

    let opt = document.querySelector("#dd_cols_text").value;
    
    // paragraphs
    if (opt==="0") {
        // Remove list
        if (iframe.contentWindow.document.querySelector('header .col-2.col-text ul') ) {
            const elList = iframe.contentWindow.document.querySelector('header .col-2.col-text ul');
            elList.remove();
        }

        // Test for h3 sub-heading
        if (iframe.contentWindow.document.querySelector('header .col-2.col-text h3') ) {
            const el_h3 = iframe.contentWindow.document.querySelector('header .col-2.col-text h3');
            el_h3.insertAdjacentHTML("afterend", col_2_content_para);
        }
        
        // No h3 sub-heading
        else if (!iframe.contentWindow.document.querySelector('header .col-2.col-text h3')) {
            const el_para_1 = iframe.contentWindow.document.querySelector('header .col-2.col-text p:nth-of-type(1)');
            el_para_1.insertAdjacentHTML("afterend", col_2_content_para);
        }
        document.getElementById("dd_cols_list_marker").disabled=true;
        document.getElementById("dd_cols_list_marker").value="0";
        document.getElementById("btn_cols_list_marker").disabled=true;
    }

    // list
    else if (opt==="1") {
        // Remove second paragraph
        if (iframe.contentWindow.document.querySelector('header .col-2.col-text p:nth-of-type(2)')) {
            const elPara = iframe.contentWindow.document.querySelector('header .col-2.col-text p:nth-of-type(2)');
            elPara.remove();
        }

        // Test for h3 sub-heading
        if (iframe.contentWindow.document.querySelector('header .col-2.col-text h3') ) {
            const el_h3 = iframe.contentWindow.document.querySelector('header .col-2.col-text h3');
            el_h3.insertAdjacentHTML("afterend", col_2_content_list);
        }

        // No h3 sub-heading
        else if (!iframe.contentWindow.document.querySelector('header .col-2.col-text h3')) {
            const el_para_1 = iframe.contentWindow.document.querySelector('header .col-2.col-text  p:nth-of-type(1)');
            el_para_1.insertAdjacentHTML("afterend", col_2_content_list);
        }

        // Test for h3 sub-headings
        if (iframe.contentWindow.document.querySelector('header .col-2.col-text h3') ) {
            // Restore second paragraph after h3
            iframe.contentWindow.document.querySelector('header .col-2.col-text h3').insertAdjacentHTML("afterend", content_paras_2);
        }
        document.getElementById("dd_cols_list_marker").disabled=false;
        document.getElementById("dd_cols_list_marker").value="0";
        document.getElementById("btn_cols_list_marker").disabled=false;        
    }
}


/*
//////////////// COLUMN LIST MARKERS ////////////////////
*/

document.querySelector("#dd_cols_list_marker").addEventListener("change", doListMarker);

function doListMarker() {

    let opt = document.querySelector("#dd_cols_list_marker").value;
    let elHeader = iframe.contentWindow.document.querySelector('header').innerHTML;
    
    // Regular
    if (opt==="0") {
        // Test for Font Awesome list
        if (iframe.contentWindow.document.querySelector('header .col-2.col-text ul.fa-ul') ) {
            elHeader =  elHeader.replace("<ul class=\"fa-ul\">", "<ul>") 
            elHeader.replaceAll("<li><span class=\"fa-li\"><i class=\"fa-solid fa-circle-check\"><\/i><\/span>", "<li>");
        }
    }

    else if (opt==="1") {
        // Test for regular list
        if ( iframe.contentWindow.document.querySelector('header .col-2.col-text ul:not(.fa-ul)') ) {
            elHeader = elHeader.replace("<ul>", "<ul class=\"fa-ul\">") 
            elHeader = elHeader.replaceAll("<li>", "<li><span class=\"fa-li\"><i class=\"fa-solid fa-circle-check\"><\/i><\/span>");
        }
    }
    iframe.contentWindow.document.querySelector('header').innerHTML = elHeader;
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
        if (iframe.contentWindow.document.querySelector("header .container-btn")) {
            const elBtn = iframe.contentWindow.document.querySelector("header .container-btn");
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
    const objBtns = iframe.contentWindow.document.querySelectorAll('header a.btn');

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
    const objBtns = iframe.contentWindow.document.querySelectorAll('header a.btn');

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
    const objBtns = iframe.contentWindow.document.querySelectorAll('header a.btn');

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
    const objBtns = iframe.contentWindow.document.querySelectorAll('header a.btn');
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
    const objBtns = iframe.contentWindow.document.querySelectorAll('header a.btn');
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
//////////////// VISUAL ELEMENT INSIDE SINGLE-COLOUMN LAYOUT ///////////////
*/

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
    
    let col_fig = iframe.contentWindow.document.querySelector('#HTML-Content header .col-2:nth-of-type(2)');

    if ( (selectedValue==="pictures") || (selectedValue==="transparent") || (selectedValue==="illustrations") ) {
        removeVisual();
        disableVidProps();
        enableImgProps();

        let child_obj = iframe.contentWindow.document.createElement("figure");

        if (selectedValue==="pictures") {
            console.log("el_picture: "+el_picture);
            child_obj.innerHTML = "<img src="+el_picture+" alt=\"Placeholder image\">";
            col_fig.appendChild(child_obj);
            document.getElementById("vis_type_1").checked=true;
        }

        else if (selectedValue==="transparent") {
            console.log("el_pic_tran: "+el_pic_trans);
            child_obj.innerHTML = "<img src="+el_pic_trans+" alt=\"Placeholder image\">";
            col_fig.appendChild(child_obj);
            document.getElementById("vis_type_2").checked=true;
        }

        else if (selectedValue==="illustrations") {
            console.log("el_drawing: "+el_drawing);
            child_obj.innerHTML = "<img src="+el_drawing+" alt=\"Placeholder image\">";
            col_fig.appendChild(child_obj);
            document.getElementById("vis_type_3").checked=true;
        }

        document.getElementById("cb_img_shadowsOn").disabled=false;
    }

    else if ( (selectedValue==="vid-file") || (selectedValue==="vid-yt") ) {
        removeVisual();
        disableImgProps();
        enableVidProps();

        let child_obj = iframe.contentWindow.document.createElement("figure");

        if (selectedValue==="vid-file") {
            child_obj.innerHTML = "\n\t\t<div class=\"container-video-file\">\n\t\t\t<video controls>\n\t\t\t\t<source src="+el_vid_file+" type=\"video\/mp4\">\n\t\t\t<\/video>\n\t\t</div>\n\t";
            col_fig.appendChild(child_obj);
            document.getElementById("vis_type_4").checked=true;
        }

        else if (selectedValue==="vid-yt") {
            child_obj.innerHTML = "\n\t\t\n\t\t<div class=\"container-video-yt\">\n\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t<\/iframe>\n\t\t<\/div>\n\t\n\t";
            col_fig.appendChild(child_obj);
            document.getElementById("vis_type_5").checked=true;
        }
    }  
}

/*
//////////////// VISUAL PROPERTIES ///////////////
*/

/* =========== VISUAL: IMAGE SHADOWS ============ */

document.querySelector("#cb_img_shadowsOn").addEventListener("change", doImgShadows);

function doImgShadows() {

    if (!document.getElementById("cb_img_shadowsOn").checked) {
        iframe.contentWindow.document.querySelector('header').classList.remove("fig-shadow");
       
    }
    else {
        iframe.contentWindow.document.querySelector('header').classList.add("fig-shadow");
    }
}

/*
//////////////// VISUAL: IMAGE CORNERS ///////////////
*/

document.querySelector("#cb_img_cornersOn").addEventListener("change", doImgCorners);

function doImgCorners() {

    if (!document.getElementById("cb_img_cornersOn").checked) {
        iframe.contentWindow.document.querySelector('header').classList.remove("fig-corners-soft");
       
    }
    else {
        iframe.contentWindow.document.querySelector('header').classList.add("fig-corners-soft");
    }
}


/* =========== VISUAL: VIDEO SHADOWS ============ */

document.querySelector("#cb_vid_shadowsOn").addEventListener("change", doVidShadows);

function doVidShadows() {

    if (!document.getElementById("cb_vid_shadowsOn").checked) {
        iframe.contentWindow.document.querySelector('header').classList.remove("fig-shadow");
       
    }
    else {
        iframe.contentWindow.document.querySelector('header').classList.add("fig-shadow");
    }
}

/* ============== VISUAL PROPERTIES: ENABLE/DISABLE ========= */
// Image properties with labels
function enableImgProps() {
    document.getElementById("cb_img_cornersOn").disabled=false;
    document.getElementById("cb_img_cornersOn").checked=false;
    document.getElementById("cb_img_shadowsOn").disabled=false;
    document.getElementById("cb_img_shadowsOn").checked=false;
    document.querySelector("label[for='cb_img_cornersOn']").style.color = "#fff";
    document.querySelector("label[for='cb_img_shadowsOn']").style.color = "#fff";
}

function disableImgProps() {
    document.getElementById("cb_img_cornersOn").disabled=true;
    document.getElementById("cb_img_cornersOn").checked=false;
    document.getElementById("cb_img_shadowsOn").disabled=true;
    document.getElementById("cb_img_shadowsOn").checked=false;
    document.querySelector("label[for='cb_img_cornersOn']").style.color = "var(--gray-500)";
    document.querySelector("label[for='cb_img_shadowsOn']").style.color = "var(--gray-500)";
}

// Video properties with labels
function enableVidProps() {
    document.getElementById("cb_vid_shadowsOn").disabled=false;
    document.getElementById("cb_vid_shadowsOn").checked=false;
    document.querySelector("label[for='cb_vid_shadowsOn']").style.color = "#fff";
}

function disableVidProps() {
    document.getElementById("cb_vid_shadowsOn").disabled=true;
    document.getElementById("cb_vid_shadowsOn").checked=false;
    document.querySelector("label[for='cb_vid_shadowsOn']").style.color = "var(--gray-500)";
    iframe.contentWindow.document.querySelector('header').classList.remove("fig-shadow");
    iframe.contentWindow.document.querySelector('header').classList.remove("fig-corners-soft");
}

function removeVisual() {
    if (iframe.contentWindow.document.querySelector('header figure')) {
        disableImgProps();
        disableVidProps();
        iframe.contentWindow.document.querySelector('header figure').remove();
    }
}

/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

document.querySelector("#btn-copy").addEventListener("click", copyHTML);

function enableCSS() {
    document.getElementById("btn-copy-css").disabled=false;
}

function disableCSS() {
    document.getElementById("btn-copy-css").disabled=true;
}

function copyHTML() {
    let HTML_Content = iframe.contentWindow.document.getElementById("HTML-Content").innerHTML;
    const el = document.createElement('textarea');
    el.value = HTML_Content;
    hideMenus();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el); 
}

document.querySelector("#btn-copy-css").addEventListener("click", copyCSS);

function copyCSS() {
    hideMenus();
    const el_css = document.createElement('textarea');
    let aLength = arrCSS.length;
    let strCSS  = arrCSS.join(",");
    strCSS = strCSS.replace(/,header/g, "header");
    // strCSS = strCSS.replace(/..container/g, ".container");
    el_css.value = strCSS;
    document.body.appendChild(el_css);
    el_css.select();
    document.execCommand('copy');
    document.body.removeChild(el_css);  
}

/*
//////////////// REMOVE LEFTOVER NODES  ///////////////
*/

function removeEmptyNodes() {
    const HTML_Content = document.querySelector("#HTML-Content");
    var treeWalker = document.createTreeWalker(HTML_Content, NodeFilter.SHOW_ELEMENT);
    var currentNode = treeWalker.currentNode
    var emptyNodes = []

    // test if a node has no text, regardless of whitespaces
    var isNodeEmpty = node => !node.textContent.trim()

    // find all empty nodes
    while(currentNode) {
        isNodeEmpty(currentNode) && emptyNodes.push(currentNode)
        currentNode = treeWalker.nextNode()
    }

    // remove found empty nodes
    emptyNodes.forEach(node => node.parentNode.removeChild(node))
    return;
}

