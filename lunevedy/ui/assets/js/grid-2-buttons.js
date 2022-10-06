import {content_buttons_one_icon, content_buttons_one_text, content_buttons_pair_icon_1, content_buttons_pair_text_1, content_buttons_pair_icon_2, content_buttons_pair_text_2} from '../js/arr-content.js';

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
    // count cols
    const objAllCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
    
    // Create single button in all cols
    if (document.getElementById("cb_col_btns").checked) {
        const btnDiv = document.createElement('div');
        const iconBtn = content_buttons_one_icon;
        const textBtn = content_buttons_one_text;
        btnDiv.classList.add('container-btn');
        let el_col;
        for (let i = 0; i < objAllCols.length; i++) {        
            el_col = objAllCols[i];
            el_col = el_col.innerHTML += 
            "\t<div class=\"container-btn\">\n\t\t\t\t<a href=\"#\" class=\"btn btn-solid\"><span>"+textBtn+"<\/span>"+iconBtn+"</a>\n\t\t\t</div>"; 
        }
        // enable dialog box settings for all buttons
        document.getElementById("rb_btn_one").disabled=false;
        document.getElementById("rb_btn_one").checked=true;
        document.getElementById("rb_btn_two").disabled=false;
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
        document.getElementById("cb_buttons_shadow_1").disabled=false;
        document.getElementById("cb_buttons_shadow_1").checked=false;
        document.getElementById("cb_buttons_uppercase_1").disabled=false;
        document.getElementById("cb_buttons_uppercase_1").checked=false;
    }

    // remove all buttons from columns 
    else {
        const objAllBtns = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 .container-btn");
        let el_btn_col;
        for (let i = 0; i < objAllBtns.length; i++) {        
            el_btn_col = objAllBtns[i];
            el_btn_col.remove();
        }

        // disable dialog box settings for all buttons
        document.getElementById("rb_btn_one").disabled=true;
        document.getElementById("rb_btn_one").checked=false;
        document.getElementById("rb_btn_two").disabled=true;
        document.getElementById("rb_btn_two").checked=false;

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
        document.getElementById("cb_buttons_shadow_1").disabled=true;
        document.getElementById("cb_buttons_shadow_1").checked=false;
        document.getElementById("cb_buttons_uppercase_1").disabled=true;
        document.getElementById("cb_buttons_uppercase_1").checked=false;

        // disable, reset dialog box settings for buttons two
        document.getElementById("button_2").style.display="none";
        document.getElementById("dd_button_type_2").value="0";
        document.getElementById("rd_btns_icons_left_2").disabled=true;
        document.getElementById("rd_btns_icons_left_2").checked=false;
        document.getElementById("dd_buttons_shape_2").disabled=true;
        document.getElementById("dd_buttons_shape_2").value="0";
        document.getElementById("cb_buttons_shadow_2").disabled=true;
        document.getElementById("cb_buttons_shadow_2").checked=false;
        document.getElementById("cb_buttons_uppercase_2").disabled=true;
        document.getElementById("cb_buttons_uppercase_2").checked=false;
    }
}

document.querySelector("#form_buttons_pair").addEventListener("change", doButtonsPair);

    function doButtonsPair() {
        const rbs = document.querySelectorAll("input[name='buttons_pair']");
        let selectedValue;
    
        for (const rb of rbs) {
            if (rb.checked) {
                selectedValue = rb.value;
                break;
            }
        }

        // checks cols
        const objAllCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
        const objAllBtns = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 .container-btn");
        let el_btn_col;

        if (selectedValue==="btn-one") {
            // test for button(s) and remove
            for (let i = 0; i < objAllBtns.length; i++) {        
                el_btn_col = objAllBtns[i];
                el_btn_col.remove();
            }
            const btnDiv = document.createElement('div');
            const iconBtn = content_buttons_one_icon;
            const textBtn = content_buttons_one_text;
            btnDiv.classList.add('container-btn');
            let el_col;
            for (let i = 0; i < objAllCols.length; i++) {        
                el_col = objAllCols[i];
                el_col = el_col.innerHTML += 
                "\t<div class=\"container-btn\">\n\t\t\t\t<a href=\"#\" class=\"btn btn-solid\"><span>"+textBtn+"<\/span>"+iconBtn+"</a>\n\t\t\t</div>"; 
            }
            // enable dialog box settings for all buttons
            document.getElementById("rb_btn_one").disabled=false;
            document.getElementById("rb_btn_one").checked=true;
            document.getElementById("rb_btn_two").disabled=false;
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
            document.getElementById("cb_buttons_shadow_1").disabled=false;
            document.getElementById("cb_buttons_shadow_1").checked=false;
            document.getElementById("cb_buttons_uppercase_1").disabled=false;
            document.getElementById("cb_buttons_uppercase_1").checked=false;
        }

        else if (selectedValue==="btn-two") {
            // Add button two
            const objAllBtns = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 .container-btn");
            let el_btn_col;
            for (let i = 0; i < objAllBtns.length; i++) {        
                el_btn_col = objAllBtns[i];
                el_btn_col.remove();
            }
            const btnDiv = document.createElement('div');
            const iconBtn1 = content_buttons_pair_icon_1;
            const textBtn1 = content_buttons_pair_text_1;
            const iconBtn2 = content_buttons_pair_icon_2;
            const textBtn2 = content_buttons_pair_text_2;

            btnDiv.classList.add('container-btn');
            let el_col;
            for (let i = 0; i < objAllCols.length; i++) {        
                el_col = objAllCols[i];
                el_col = el_col.innerHTML += 
                "\t<div class=\"container-btn\">\n<a href=\"#\" class=\"btn btn-solid\"><span>"+textBtn1+"</span>"+iconBtn1+"<\/a>\n<a class=\"btn btn-outline\" href=\"#\"><span>"+textBtn2+"</span>"+iconBtn2+"</a></div>"; 
            }

            document.getElementById("rb_btn_align_desktop_left").checked = true;;
            document.getElementById("rb_btn_align_mobile_left").checked = true;;

            // enable dialog box options for button two
            document.getElementById("rb_btn_one").disabled=false;
            document.getElementById("rb_btn_two").disabled=false;
            document.getElementById("rb_btn_two").checked=true;
            document.getElementById("button_2").style.display="inline-block";
            document.getElementById("dd_button_type_2").value="1";
            document.getElementById("rd_btns_icons_left_2").disabled=false;
            document.getElementById("rd_btns_icons_left_2").checked=true;
            document.getElementById("dd_buttons_shape_2").disabled=false;
            document.getElementById("dd_buttons_shape_2").value="0";
            document.getElementById("cb_buttons_shadow_2").disabled=false;
            document.getElementById("cb_buttons_shadow_2").checked=false;
            document.getElementById("cb_buttons_uppercase_2").disabled=false;
            document.getElementById("cb_buttons_uppercase_2").checked=false;
            document.getElementById("btn_cols_bg_passive_2").disabled=true;
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
    if (iframe.contentWindow.document.querySelectorAll(".container-btn")) {  

        let elBtns = iframe.contentWindow.document.querySelectorAll(".container-btn");
        if (selectedValue==="left") {
            for (let i = 0; i < (elBtns.length); i++) {
                elBtns[i].classList.remove("text-center-desktop");
            }
        }
        else if (selectedValue==="center") {
            for (let i = 0; i < (elBtns.length); i++) {
                elBtns[i].classList.add("text-center-desktop");
            }
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

    // Verify button container exists 
    if (iframe.contentWindow.document.querySelector(".container-btn")) {      
        let elBtns = iframe.contentWindow.document.querySelectorAll(".container-btn");
        if (selectedValue==="left") {
            for (let i = 0; i < (elBtns.length); i++) {
                elBtns[i].classList.remove("text-center-mobile");
            }
        }
        else if (selectedValue==="center") {
            for (let i = 0; i < (elBtns.length); i++) {
                elBtns[i].classList.add("text-center-mobile");
            }
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
            document.getElementById("cb_buttons_shadow_1").disabled=false;
            document.getElementById("dd_button_type_1").disabled=false;
            document.getElementById("btn_cols_bg_passive_1").disabled=false;
            document.getElementById("btn_cols_border_passive_1").disabled=false;
            document.getElementById("btn_cols_bg_active_1").disabled=false;
            document.getElementById("btn_cols_border_active_1").disabled=false;
        });
    }

    // Outline
    else if (opt==="1") {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-plain");
            btn.classList.remove("btn-solid");
            btn.classList.add("btn-outline");
            document.getElementById("cb_buttons_shadow_1").disabled=false;
            document.getElementById("dd_buttons_shape_1").disabled=false;
            document.getElementById("btn_cols_bg_passive_1").disabled=true;
            document.getElementById("btn_cols_border_passive_1").disabled=false;
            document.getElementById("btn_cols_bg_active_1").disabled=false;
            document.getElementById("btn_cols_border_active_1").disabled=false;
        });
    }

    // Link
    else if (opt==="2") {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-outline");
            btn.classList.remove("btn-solid");
            btn.classList.add("btn-plain");
            document.getElementById("cb_buttons_shadow_1").disabled=true;
            document.getElementById("dd_buttons_shape_1").disabled=true;
            document.getElementById("btn_cols_bg_passive_1").disabled=true;
            document.getElementById("btn_cols_border_passive_1").disabled=true;
            document.getElementById("btn_cols_bg_active_1").disabled=true;
            document.getElementById("btn_cols_border_active_1").disabled=true;
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
            document.getElementById("cb_buttons_shadow_2").disabled=false;
            document.getElementById("dd_buttons_shape_2").disabled=false;
            document.getElementById("btn_cols_bg_passive_2").disabled=false;
            document.getElementById("btn_cols_border_passive_2").disabled=false;
            document.getElementById("btn_cols_bg_active_2").disabled=false;
            document.getElementById("btn_cols_border_active_2").disabled=false;
        });
    }

    // Outline
    else if (opt==="1") {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-plain");
            btn.classList.remove("btn-solid");
            btn.classList.add("btn-outline");
            document.getElementById("cb_buttons_shadow_2").disabled=false;
            document.getElementById("dd_buttons_shape_2").disabled=false;
            document.getElementById("btn_cols_bg_passive_2").disabled=true;
            document.getElementById("btn_cols_border_passive_2").disabled=false;
            document.getElementById("btn_cols_bg_active_2").disabled=false;
            document.getElementById("btn_cols_border_active_2").disabled=false;
        });
    }

    // Link
    else if (opt==="2") {
        objBtns.forEach(btn => {
            btn.classList.remove("btn-outline");
            btn.classList.remove("btn-solid");
            btn.classList.add("btn-plain");
            document.getElementById("cb_buttons_shadow_2").disabled=true;
            document.getElementById("dd_buttons_shape_2").disabled=true;
            document.getElementById("btn_cols_bg_passive_2").disabled=true;
            document.getElementById("btn_cols_border_passive_2").disabled=true;
            document.getElementById("btn_cols_bg_active_2").disabled=true;
            document.getElementById("btn_cols_border_active_2").disabled=true;
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

document.querySelector("#cb_buttons_shadow_1").addEventListener("change", doBtnShadow1);

function doBtnShadow1() {
    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(1)');

    if (!document.getElementById("cb_buttons_shadow_1").checked) {
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

document.querySelector("#cb_buttons_shadow_2").addEventListener("change", doBtnShadow2);

function doBtnShadow2() {
    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(2)');

    if (!document.getElementById("cb_buttons_shadow_2").checked) {
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

document.querySelector("#cb_buttons_uppercase_1").addEventListener("change", doBtnUCase1);

function doBtnUCase1() {

    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(1)');

    if (!document.getElementById("cb_buttons_uppercase_1").checked) {
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

document.querySelector("#cb_buttons_uppercase_2").addEventListener("change", doBtnUCase2);

function doBtnUCase2() {

    const objBtns = iframe.contentWindow.document.querySelectorAll('.flex-cols-2 .container-btn a.btn:nth-child(2)');

    if (!document.getElementById("cb_buttons_uppercase_2").checked) {
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
