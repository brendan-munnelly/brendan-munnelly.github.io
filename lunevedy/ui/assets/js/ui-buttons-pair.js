import {content_buttons_one_icon, content_buttons_one_text, content_buttons_pair_icon_1, content_buttons_pair_text_1, content_buttons_pair_icon_2, content_buttons_pair_text_2} from '../js/arr-content.js';

/*
//////////////// BUTTONS ////////////////////
*/

const tabs = document.querySelector(".buttonWrapper");
const tabButton = document.querySelectorAll(".tab-button");
      
tabs.onclick = e => {
const id = e.target.id;

console.log("tabs: "+tabs);
console.log("tabButton: "+tabButton);
console.log("Tab ID: "+id);

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
    document.getElementById(element).style.display="inline-block";
    }
}

/*
//////////////// LOAD INITIAL BUTTON ////////////////////
*/

document.querySelector("#cb_btns").addEventListener("change", loadBtnInitial);

function loadBtnInitial() {
    // Enable 1/2 button switch
    document.getElementById("rb_btn_one").disabled=false;
    document.getElementById("rb_btn_two").disabled=false;
    
    // Get outer column/section/column container
    let objContainer = getBtnContainer();

    // Add button container DIV at end of column/section/header container
    const btnDiv = document.createElement('div');
    btnDiv.classList.add('container-btn');
    objContainer.append(btnDiv);
    
    // Create single button in container
    if (document.getElementById("cb_btns").checked) {
        const btnNum = 1;
        console.log("Create initial new buttton")
        // createBtn(objContainer, btnNum);

        const el_btn = document.createElement('a');
        el_btn.setAttribute("href", "#");
        el_btn.setAttribute("class", "btn btn-solid");
        el_btn.innerHTML = "<span>"+content_buttons_one_text+"</span>"+ content_buttons_one_icon;
        btnDiv.append(el_btn);

        // Reformat HTML
        objContainer.innerHTML = objContainer.innerHTML.replaceAll("<div class=\"container-btn\">", "\t<div class=\"container-btn\">");

        // Highlight 1-button switch
        document.getElementById("rb_btn_one").checked=true;
        document.getElementById("rb_btn_two").checked=false;

        // Set defaults for button size
        document.getElementById("dd_buttons_size").disabled=false;
        document.getElementById("dd_buttons_size").value="1";
        
        // Set defaults for button alignment (desktop and mobile)
        document.getElementById("form_btn_align_desktop").disabled=false;
        document.getElementById("rb_btn_align_desktop_left").disabled=false;
        document.getElementById("rb_btn_align_desktop_left").checked = true;;
        document.getElementById("rb_btn_align_desktop_center").disabled=false;
        
        document.getElementById("form_btn_align_mobile").disabled=false;
        document.getElementById("rb_btn_align_mobile_left").disabled=false;
        document.getElementById("rb_btn_align_mobile_left").checked = true;;
        document.getElementById("rb_btn_align_mobile_center").disabled=false;

        // Display containers for tabs and settings
        document.querySelector(".container-buttons-block").style.display="block";

        // Show and highlight button 1. Hide button 2
        document.getElementById("button_1").style.display="inline-block";
        document.getElementById("tab_content_1").classList.add("active");
        document.getElementById("button_2").style.display="none";

        // Set defaults for three button of tab 1            
        document.getElementById("dd_button_type_1").value="0";
        // document.getElementById("rd_btns_icons_left_1").disabled=false;
        document.getElementById("rd_btns_icons_left_1").checked=true;
        // document.getElementById("dd_buttons_shape_1").disabled=false;
        document.getElementById("dd_buttons_shape_1").value="0";
        // document.getElementById("cb_buttons_shadow_1").disabled=false;
        document.getElementById("cb_buttons_shadow_1").checked=false;
        // document.getElementById("cb_buttons_uppercase_1").disabled=false;
        document.getElementById("cb_buttons_uppercase_1").checked=false;



    }

    // remove all buttons
    else {
        removeBtnsAll();
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

        // get button(s) container
        const objContainer = getBtnContainer();

        if (selectedValue==="btn-one") {
            // removeBtnsAll();
            const btnNum = 1;
            createBtn(objContainer, btnNum);
        }

        else if (selectedValue==="btn-two") {
            // test for button(s) and remove
            // removeBtnsAll();
            const btnNum = 2;
            createBtn(objContainer, btnNum);
        }
    }

    function getBtnContainer() {
        let objContainer;
        // main section 0 cols 
        if ( (iframe.contentWindow.document.querySelector("section")) && (!iframe.contentWindow.document.querySelector("section .col-2.col-text")) ) {
            objContainer = iframe.contentWindow.document.querySelector("section");
        }
    
        // main section 2-cols 
        else if (iframe.contentWindow.document.querySelector("section .col-2.col-text")) {
            objContainer = iframe.contentWindow.document.querySelector("section .col-2.col-text");
        }
    
        // header 0 cols 
        else if ( (iframe.contentWindow.document.querySelector("header")) && (!iframe.contentWindow.document.querySelector("header .col-2.col-text")) ) {
            objContainer = iframe.contentWindow.document.querySelector("header");
       }
    
        // header 2-cols 
        else if (iframe.contentWindow.document.querySelector("header .col-2.col-text")) {
            objContainer = iframe.contentWindow.document.querySelector("header .col-2.col-text");
        }
        return objContainer;
    }
    
    function createBtn(objContainer,btnNum) {

        // Add button container DIV at end of column/section/header container
        const btnDiv = document.createElement('div');
        btnDiv.classList.add('container-btn');


        console.log("btnNum: "+btnNum);
        if (btnNum == "1") {
            // Create content for button DIV


            const el_btn = document.createElement('a');
            el_btn.setAttribute("href", "#");
            el_btn.setAttribute("class", "btn btn-solid");
            el_btn.innerHTML = "<span>"+content_buttons_one_text+"</span>"+ content_buttons_one_icon;
            btnDiv.append(el_btn);

            // Reformat HTML
            objContainer.innerHTML = objContainer.innerHTML.replaceAll("<div class=\"container-btn\">", "\t<div class=\"container-btn\">");

            // Highlight 1-button switch
            document.getElementById("rb_btn_one").checked=true;
            document.getElementById("rb_btn_two").checked=false;

            // Set defaults for button size
            document.getElementById("dd_buttons_size").disabled=false;
            document.getElementById("dd_buttons_size").value="1";
            
            // Set defaults for button alignment (desktop and mobile)
            document.getElementById("form_btn_align_desktop").disabled=false;
            document.getElementById("rb_btn_align_desktop_left").disabled=false;
            document.getElementById("rb_btn_align_desktop_left").checked = true;;
            document.getElementById("rb_btn_align_desktop_center").disabled=false;
            
            document.getElementById("form_btn_align_mobile").disabled=false;
            document.getElementById("rb_btn_align_mobile_left").disabled=false;
            document.getElementById("rb_btn_align_mobile_left").checked = true;;
            document.getElementById("rb_btn_align_mobile_center").disabled=false;

            // Display containers for tabs and settings
            document.querySelector(".container-buttons-block").style.display="block";

            // Show and highlight button 1. Hide button 2
            document.getElementById("button_1").style.display="inline-block";
            document.getElementById("tab_content_1").classList.add("active");
            document.getElementById("button_2").style.display="none";

            // Set defaults for three button of tab 1            
            document.getElementById("dd_button_type_1").value="0";
            // document.getElementById("rd_btns_icons_left_1").disabled=false;
            document.getElementById("rd_btns_icons_left_1").checked=true;
            // document.getElementById("dd_buttons_shape_1").disabled=false;
            document.getElementById("dd_buttons_shape_1").value="0";
            // document.getElementById("cb_buttons_shadow_1").disabled=false;
            document.getElementById("cb_buttons_shadow_1").checked=false;
            // document.getElementById("cb_buttons_uppercase_1").disabled=false;
            document.getElementById("cb_buttons_uppercase_1").checked=false;

        }

        else if (btnNum =="2") {
            // Add second button
            const iconBtn1 = content_buttons_pair_icon_1;
            const textBtn1 = content_buttons_pair_text_1;
            const iconBtn2 = content_buttons_pair_icon_2;
            const textBtn2 = content_buttons_pair_text_2;

            const el_btn1 = document.createElement('a');
            el_btn1.setAttribute("href", "#");
            el_btn1.setAttribute("class", "btn btn-solid");
            el_btn1.innerHTML = "<span>"+content_buttons_pair_text_1+"</span>"+ content_buttons_pair_icon_1;

            const el_btn2 = document.createElement('a');
            el_btn2.setAttribute("href", "#");
            el_btn2.setAttribute("class", "btn btn-outline");
            el_btn2.innerHTML = "<span>"+content_buttons_pair_text_2+"</span>"+ content_buttons_pair_icon_2;

            btnDiv.append(el_btn1);
            btnDiv.append(el_btn2);

            // One button or two?
            document.getElementById("rb_btn_one").disabled=false;
            document.getElementById("rb_btn_two").disabled=false;
            document.getElementById("rb_btn_two").checked=true;

            // enable top dialog box settings for 1 or 2 buttons:
            // Button size and alignment (desktop and mobile)
            // document.getElementById("dd_buttons_size").disabled=false;
            // document.getElementById("dd_buttons_size").value="1";
            
            // document.getElementById("form_btn_align_desktop").disabled=false;
            // document.getElementById("rb_btn_align_desktop_left").disabled=false;
            // document.getElementById("rb_btn_align_desktop_left").checked = true;;
            // document.getElementById("rb_btn_align_desktop_center").disabled=false;
            
            // document.getElementById("form_btn_align_mobile").disabled=false;
            // document.getElementById("rb_btn_align_mobile_left").disabled=false;
            // document.getElementById("rb_btn_align_mobile_left").checked = true;;
            // document.getElementById("rb_btn_align_mobile_center").disabled=false;

            // display containers for tabs and settings
            // document.querySelector(".container-buttons-block").style.display="block";

            // // highlight tab 1
            // document.getElementById("tab_content_1").classList.add("active");
            // document.getElementById("tab_content_2").classList.remove("active");

            // // show tab 1 and tab 2
            // document.getElementById("button_1").style.display="inline-block";
            // document.getElementById("button_2").style.display="inline-block";

            // Three button options for tab 1            
            // document.getElementById("dd_button_type_1").value="0";
            // document.getElementById("rd_btns_icons_left_1").disabled=false;
            // document.getElementById("rd_btns_icons_left_1").checked=true;
            // document.getElementById("dd_buttons_shape_1").disabled=false;
            // document.getElementById("dd_buttons_shape_1").value="0";
            // document.getElementById("cb_buttons_shadow_1").disabled=false;
            // document.getElementById("cb_buttons_shadow_1").checked=false;
            // document.getElementById("cb_buttons_uppercase_1").disabled=false;
            // document.getElementById("cb_buttons_uppercase_1").checked=false;
            // document.getElementById("btn_cols_bg_passive_1").disabled=false;

             // Three button options for tab 2    
            document.getElementById("dd_button_type_2").value="0";
            // document.getElementById("rd_btns_icons_left_2").disabled=false;
            document.getElementById("rd_btns_icons_left_2").checked=true;
            // document.getElementById("dd_buttons_shape_2").disabled=false;
            document.getElementById("dd_buttons_shape_2").value="0";
            // document.getElementById("cb_buttons_shadow_2").disabled=false;
            document.getElementById("cb_buttons_shadow_2").checked=false;
            // document.getElementById("cb_buttons_uppercase_2").disabled=false;
            document.getElementById("cb_buttons_uppercase_2").checked=false;
            document.getElementById("btn_cols_bg_passive_1").disabled=false;
        }

        // Reformat HTML
        objContainer.innerHTML = objContainer.innerHTML.replaceAll("<div class=\"container-btn\">", "<div class=\"container-btn\">\n\t\t\t\t");
        objContainer.innerHTML = objContainer.innerHTML.replaceAll("\t\t<a href", "\t<a href");
        objContainer.innerHTML = objContainer.innerHTML.replaceAll("<\/a><\/div>", "<\/a>\n\t\t<\/div>\n\n");
    }

    function removeBtnsAll() {

        if (iframe.contentWindow.document.querySelector(".container-btn")) {
          
            // Disable 1/2 button switch 
            document.getElementById("rb_btn_one").disabled=true;
            document.getElementById("rb_btn_two").disabled=true;
            const objAllBtns = iframe.contentWindow.document.querySelectorAll(".container-btn");
            
            for (let i = 0; i < objAllBtns.length; i++) {
                objAllBtns[i].remove();
            }

            // disable/uncheck dialog box settings for all buttons
            document.getElementById("rb_btn_one").disabled=true;
            document.getElementById("rb_btn_one").checked=false;
            document.getElementById("rb_btn_two").disabled=true;
            document.getElementById("rb_btn_two").checked=false;

            document.getElementById("form_btn_align_desktop").disabled=true;
            document.getElementById("rb_btn_align_desktop_left").disabled=true;
            document.getElementById("rb_btn_align_desktop_left").checked = false;
            document.getElementById("rb_btn_align_desktop_center").disabled=true;
            document.getElementById("form_btn_align_mobile").disabled=true;
            document.getElementById("rb_btn_align_mobile_left").disabled=true;
            document.getElementById("rb_btn_align_mobile_left").checked = false;
            document.getElementById("rb_btn_align_mobile_center").disabled=true;       
            document.getElementById("dd_buttons_size").value="1";

            // disable, reset dialog box settings for buttons one
            document.querySelector(".container-buttons-block").style.display="none";

            document.getElementById("button_1").style.display="none";
            document.getElementById("button_2").style.display="none";

            document.getElementById("dd_button_type_1").value="0";
            document.getElementById("rd_btns_icons_left_1").checked=true;
            document.getElementById("rd_btns_icons_right_1").checked=false;

            document.getElementById("dd_buttons_shape_1").value="0";
            document.getElementById("cb_buttons_shadow_1").checked=false;
            document.getElementById("cb_buttons_uppercase_1").checked=false;
            document.getElementById("btn_cols_bg_passive_1").disabled=false;


            // disable, reset dialog box settings for buttons two
            document.getElementById("button_1").style.display="none";
            document.getElementById("button_2").style.display="none";

            document.getElementById("dd_button_type_2").value="0";
            document.getElementById("rd_btns_icons_left_2").checked=true;
            document.getElementById("rd_btns_icons_right_2").checked=false;

            document.getElementById("dd_buttons_shape_2").value="0";
            document.getElementById("cb_buttons_shadow_2").checked=false;
            document.getElementById("cb_buttons_uppercase_2").checked=false;
            document.getElementById("btn_cols_bg_passive_2").disabled=false;


            const objContainer = getBtnContainer();
            objContainer.innerHTML = objContainer.innerHTML.replaceAll("    \t\n", "");
            objContainer.innerHTML = objContainer.innerHTML.replaceAll("\t\n\n<\/section>", "\t</section>");
            objContainer.innerHTML = objContainer.innerHTML.replaceAll("<\/section>", "\t</section>");
        }
    }

/*
//////////////// BUTTONS COMMON: ALIGN DESKTOP ////////////////////
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

    // Verify button container exists 
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
//////////////// BUTTONS COMMON: SIZE ////////////////////
*/

document.querySelector("#dd_buttons_size").addEventListener("change", doButtonsSize);

function doButtonsSize() {
    let opt = document.querySelector("#dd_buttons_size").value;
    const objBtns = iframe.contentWindow.document.querySelectorAll('section .container-btn a.btn');

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

    const el_btn = iframe.contentWindow.document.querySelector('section  .container-btn a.btn:nth-child(1)');

    // Solid
    if (opt==="0") {
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-plain");
        el_btn.classList.add("btn-solid"); 
        document.getElementById("cb_buttons_shadow_1").disabled=false;
        document.getElementById("dd_buttons_shape_1").disabled=false;
        document.getElementById("btn_cols_bg_passive_1").disabled=false;
        document.getElementById("btn_cols_border_passive_1").disabled=false;
        document.getElementById("btn_cols_bg_active_1").disabled=false;
        document.getElementById("btn_cols_border_active_1").disabled=false; 
        document.getElementById("btn_cols_bg_passive_1").disabled=false; 
    }

    // Outline
    else if (opt==="1") {
        el_btn.classList.remove("btn-plain");
        el_btn.classList.remove("btn-solid");
        el_btn.classList.add("btn-outline");
        document.getElementById("cb_buttons_shadow_1").disabled=false;
        document.getElementById("dd_buttons_shape_1").disabled=false;
        document.getElementById("btn_cols_bg_passive_1").disabled=true;
        document.getElementById("btn_cols_border_passive_1").disabled=false;
        document.getElementById("btn_cols_bg_active_1").disabled=false;
        document.getElementById("btn_cols_border_active_1").disabled=false;
    }

    // Link
    else if (opt==="2") {
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-solid");
        el_btn.classList.add("btn-plain");
        document.getElementById("cb_buttons_shadow_1").disabled=true;
        document.getElementById("dd_buttons_shape_1").disabled=true;
        document.getElementById("btn_cols_bg_passive_1").disabled=true;
        document.getElementById("btn_cols_border_passive_1").disabled=true;
        document.getElementById("btn_cols_bg_active_1").disabled=true;
        document.getElementById("btn_cols_border_active_1").disabled=true;
    }
}

/*
//////////////// BUTTON TWO: TYPE ////////////////////
*/

document.querySelector("#dd_button_type_2").addEventListener("change", doButtonType2);

function doButtonType2() {
    let opt = document.querySelector("#dd_button_type_2").value;

    const el_btn = iframe.contentWindow.document.querySelector('section  .container-btn a.btn:nth-child(2)');

    // Solid
    if (opt==="0") {
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-plain");
        el_btn.classList.add("btn-solid");
        document.getElementById("cb_buttons_shadow_2").disabled=false;
        document.getElementById("dd_buttons_shape_2").disabled=false;
        document.getElementById("btn_cols_bg_passive_2").disabled=false;
        document.getElementById("btn_cols_border_passive_2").disabled=false;
        document.getElementById("btn_cols_bg_active_2").disabled=false;
        document.getElementById("btn_cols_border_active_2").disabled=false;       
    }

    // Outline
    else if (opt==="1") {
        el_btn.classList.remove("btn-plain");
        el_btn.classList.remove("btn-solid");
        el_btn.classList.add("btn-outline");
        document.getElementById("cb_buttons_shadow_2").disabled=false;
        document.getElementById("dd_buttons_shape_2").disabled=false;
        document.getElementById("btn_cols_bg_passive_2").disabled=true;
        document.getElementById("btn_cols_border_passive_2").disabled=false;
        document.getElementById("btn_cols_bg_active_2").disabled=false;
        document.getElementById("btn_cols_border_active_2").disabled=false;
    }

    // Link
    else if (opt==="2") {
        el_btn.classList.remove("btn-outline");
        el_btn.classList.remove("btn-solid");
        el_btn.classList.add("btn-plain");
        document.getElementById("cb_buttons_shadow_2").disabled=true;
        document.getElementById("dd_buttons_shape_2").disabled=true;
        document.getElementById("btn_cols_bg_passive_2").disabled=true;
        document.getElementById("btn_cols_border_passive_2").disabled=true;
        document.getElementById("btn_cols_bg_active_2").disabled=true;
        document.getElementById("btn_cols_border_active_2").disabled=true;
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
    const el_btn = iframe.contentWindow.document.querySelector("section  .container-btn a.btn:nth-child(1)");

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
    const el_btn = iframe.contentWindow.document.querySelector("section  .container-btn a.btn:nth-child(2)");
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
    const el_btn = iframe.contentWindow.document.querySelector('section  .container-btn a.btn:nth-child(1)');
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
    const el_btn = iframe.contentWindow.document.querySelector('section  .container-btn a.btn:nth-child(2)');

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
    const el_btn = iframe.contentWindow.document.querySelector('section  .container-btn a.btn:nth-child(1)');

    if (!document.getElementById("cb_buttons_shadow_1").checked) {
        el_btn.classList.remove("btn-shadow");
    }
    else {
        el_btn.classList.add("btn-shadow");
    }
}

document.querySelector("#cb_buttons_shadow_2").addEventListener("change", doBtnShadow2);

function doBtnShadow2() {
    const el_btn = iframe.contentWindow.document.querySelector('section  .container-btn a.btn:nth-child(2)');

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

    const el_btn = iframe.contentWindow.document.querySelector('section  .container-btn a.btn:nth-child(1)');

    if (!document.getElementById("cb_buttons_uppercase_1").checked) {
        el_btn.classList.remove("btn-uppercase");
    }
    else {
        el_btn.classList.add("btn-uppercase");
    }
}

/*
//////////////// BUTTONS TWO: UPPERCASE ///////////////
*/

document.querySelector("#cb_buttons_uppercase_2").addEventListener("change", doBtnUCase2);

function doBtnUCase2() {

    const el_btn = iframe.contentWindow.document.querySelector('section  .container-btn a.btn:nth-child(2)');

    if (!document.getElementById("cb_buttons_uppercase_2").checked) {
        el_btn.classList.remove("btn-uppercase");
    }
    else {
        el_btn.classList.add("btn-uppercase");
    }
}