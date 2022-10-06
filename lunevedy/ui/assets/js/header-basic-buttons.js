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

document.querySelector("#cb_header_btns").addEventListener("change", loadBtnInitial);

function loadBtnInitial() { // Add two buttons
    // Get button container
    let objContainer;

    // main section 2-cols 
    if (iframe.contentWindow.document.querySelector("section .col-2.col-text")) {
        objContainer = iframe.contentWindow.document.querySelector("section .col-2.col-text");
    }

    // main section 0 cols 
    else if ( (iframe.contentWindow.document.querySelector("section")) && (!iframe.contentWindow.document.querySelector("section .col-2.col-text")) ) {
        objContainer = iframe.contentWindow.document.querySelector("section");
    }

    // header 2-cols 
    if (iframe.contentWindow.document.querySelector("header .col-2.col-text")) {
        objContainer = iframe.contentWindow.document.querySelector("header .col-2.col-text");
    }

    // header 0 cols with background
    else if ( iframe.contentWindow.document.querySelector("header .container-text")) {
        objContainer = iframe.contentWindow.document.querySelector("header .container-text");
    }

    if (document.getElementById("cb_header_btns").checked) {
        const btnDiv = document.createElement('div');
        const iconBtn1 = content_buttons_pair_icon_1;
        const textBtn1 = content_buttons_pair_text_1;
        const iconBtn2 = content_buttons_pair_icon_2;
        const textBtn2 = content_buttons_pair_text_2;
        btnDiv.classList.add('container-btn');

        objContainer.innerHTML = objContainer.outerHTML += 
        "\n\t\t<div class=\"container-btn\">\n<a href=\"#\" class=\"btn btn-solid\"><span>"+textBtn1+"</span>"+iconBtn1+"<\/a>\n<a class=\"btn btn-outline\" href=\"#\"><span>"+textBtn2+"</span>"+iconBtn2+"</a></div>"; 

        document.getElementById("dd_buttons_size").disabled=false;
        document.getElementById("dd_buttons_size").value="1";
    
                
        // enable dialog box settings for all buttons
        document.getElementById("rb_btn_one").disabled=false;
        document.getElementById("rb_btn_one").checked=true;
        document.getElementById("rb_btn_two").disabled=false;
        document.getElementById("dd_buttons_size").disabled=false;
        document.getElementById("dd_buttons_size").value="1";
        
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

    // remove all buttons
    else {
        const objAllBtns = iframe.contentWindow.document.querySelector("header .container-btn");
        objAllBtns.remove();

        // disable dialog box settings for all buttons
        document.getElementById("rb_btn_one").disabled=true;
        document.getElementById("rb_btn_one").checked=false;
        document.getElementById("rb_btn_two").disabled=true;
        document.getElementById("rb_btn_two").checked=false;

        document.getElementById("dd_buttons_size").disabled=true;
        document.getElementById("dd_buttons_size").value="1";

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

        const objContainer = iframe.contentWindow.document.querySelector("header .container-text");
        const objAllBtns = iframe.contentWindow.document.querySelector("header .container-btn");

        if (selectedValue==="btn-one") {
            // test for button(s) and remove
            objAllBtns.remove();
            // Add one button
            const btnDiv = document.createElement('div');
            const iconBtn = content_buttons_one_icon;
            const textBtn = content_buttons_one_text;
            btnDiv.classList.add('container-btn');

            objContainer.innerHTML = objContainer.outerHTML += 
                "\n\t\t<div class=\"container-btn\">\n\t\t\t\t<a href=\"#\" class=\"btn btn-solid\"><span>"+textBtn+"<\/span>"+iconBtn+"</a>\n\t\t\t</div>"; 
       
            // enable dialog box settings for all buttons
            document.getElementById("rb_btn_one").disabled=false;
            document.getElementById("rb_btn_one").checked=true;
            document.getElementById("rb_btn_two").disabled=false;
            document.getElementById("dd_buttons_size").disabled=false;
            document.getElementById("dd_buttons_size").value="1";
    
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
            // test for button(s) and remove
            objAllBtns.remove();
            // Add two buttons
            const btnDiv = document.createElement('div');
            const iconBtn1 = content_buttons_pair_icon_1;
            const textBtn1 = content_buttons_pair_text_1;
            const iconBtn2 = content_buttons_pair_icon_2;
            const textBtn2 = content_buttons_pair_text_2;
            btnDiv.classList.add('container-btn');
            objContainer.innerHTML = objContainer.outerHTML += 
                "\n\t\t<div class=\"container-btn\">\n<a href=\"#\" class=\"btn btn-solid\"><span>"+textBtn1+"</span>"+iconBtn1+"<\/a>\n<a class=\"btn btn-outline\" href=\"#\"><span>"+textBtn2+"</span>"+iconBtn2+"</a></div>"; 
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
        }
    }

/*
//////////////// BUTTONS COMMON: SIZE ////////////////////
*/

document.querySelector("#dd_buttons_size").addEventListener("change", doButtonsSize);

function doButtonsSize() {
    let opt = document.querySelector("#dd_buttons_size").value;
    const objBtns = iframe.contentWindow.document.querySelectorAll('header .container-btn a.btn');

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
//////////////// BUTTON ONE: TYPE ////////////////////
*/

document.querySelector("#dd_button_type_1").addEventListener("change", doButtonType1);

function doButtonType1() {
    let opt = document.querySelector("#dd_button_type_1").value;

    const el_btn = iframe.contentWindow.document.querySelector('header .container-btn a.btn:nth-child(1)');

    // Solid
    if (opt==="0") {
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-plain");
        el_btn.classList.add("btn-solid");            
    }

    // Outline
    else if (opt==="1") {
        el_btn.classList.remove("btn-plain");
        el_btn.classList.remove("btn-solid");
        el_btn.classList.add("btn-outline");
    }

    // Link
    else if (opt==="2") {
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-solid");
        el_btn.classList.add("btn-plain");
    }
}

/*
//////////////// BUTTON TWO: TYPE ////////////////////
*/

document.querySelector("#dd_button_type_2").addEventListener("change", doButtonType2);

function doButtonType2() {
    let opt = document.querySelector("#dd_button_type_2").value;

    const el_btn = iframe.contentWindow.document.querySelector('header .container-btn a.btn:nth-child(2)');

    // Solid
    if (opt==="0") {
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-plain");
        el_btn.classList.add("btn-solid");            
    }

    // Outline
    else if (opt==="1") {
        el_btn.classList.remove("btn-plain");
        el_btn.classList.remove("btn-solid");
        el_btn.classList.add("btn-outline");
    }

    // Link
    else if (opt==="2") {
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-solid");
        el_btn.classList.add("btn-plain");
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
    const el_btn = iframe.contentWindow.document.querySelector("header .container-btn a.btn:nth-child(1)");

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
    const el_btn = iframe.contentWindow.document.querySelector("header .container-btn a.btn:nth-child(2)");
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
    const el_btn = iframe.contentWindow.document.querySelector('header .container-btn a.btn:nth-child(1)');
    // remove
    if (opt==="0") {
        el_btn.classList.remove("btn-pill");
        el_btn.classList.remove("btn-soft");
    }

    // soft
    else if (opt==="1") {
        el_btn.classList.remove("btn-pill");
        el_btn.classList.add("btn-soft");
    }

    // pill
    else if (opt==="2") {
        el_btn.classList.remove("btn-soft");
        el_btn.classList.add("btn-pill");
    }
}


/*
//////////////// BUTTONS TWO: SHAPE ////////////////////
*/

document.querySelector("#dd_buttons_shape_2").addEventListener("change", doButtonsShape2);

function doButtonsShape2() {
    let opt = document.querySelector("#dd_buttons_shape_2").value;
    const el_btn = iframe.contentWindow.document.querySelector('header .container-btn a.btn:nth-child(2)');

    // remove
    if (opt==="0") {
        el_btn.classList.remove("btn-pill");
        el_btn.classList.remove("btn-soft");
    }

    // soft
    else if (opt==="1") {
        el_btn.classList.remove("btn-pill");
        el_btn.classList.add("btn-soft");
    }

    // pill
    else if (opt==="2") {
        el_btn.classList.remove("btn-soft");
        el_btn.classList.add("btn-pill");
    }
}

/*
//////////////// BUTTONS ONE: SHADOW ///////////////
*/

document.querySelector("#cb_buttons_shadow_1").addEventListener("change", doBtnShadow1);

function doBtnShadow1() {
    const el_btn = iframe.contentWindow.document.querySelector('header .container-btn a.btn:nth-child(1)');

    if (!document.getElementById("cb_buttons_shadow_1").checked) {
        el_btn.classList.remove("btn-shadow");
    }
    else {
        el_btn.classList.add("btn-shadow");
    }
}

document.querySelector("#cb_buttons_shadow_2").addEventListener("change", doBtnShadow2);

function doBtnShadow2() {
    const el_btn = iframe.contentWindow.document.querySelector('header .container-btn a.btn:nth-child(2)');

    if (!document.getElementById("cb_buttons_shadow_2").checked) {
        el_btn.classList.remove("btn-shadow");
    }
    else {
        el_btn.classList.add("btn-shadow");
    }
}

/*
//////////////// BUTTONS ONE: UPPERCASE ///////////////
*/

document.querySelector("#cb_buttons_uppercase_1").addEventListener("change", doBtnUCase1);

function doBtnUCase1() {

    const el_btn = iframe.contentWindow.document.querySelector('header .container-btn a.btn:nth-child(1)');

    if (!document.getElementById("cb_buttons_uppercase_1").checked) {
        el_btn.classList.remove("btn-uppercase");
    }
    else {
        el_btn.classList.add("btn-uppercase");
    }
}

/*
//////////////// BUTTONS ONE: UPPERCASE ///////////////
*/

document.querySelector("#cb_buttons_uppercase_2").addEventListener("change", doBtnUCase2);

function doBtnUCase2() {

    const el_btn = iframe.contentWindow.document.querySelector('header .container-btn a.btn:nth-child(2)');

    if (!document.getElementById("cb_buttons_uppercase_2").checked) {
        el_btn.classList.remove("btn-uppercase");
    }
    else {
        el_btn.classList.add("btn-uppercase");
    }
}
