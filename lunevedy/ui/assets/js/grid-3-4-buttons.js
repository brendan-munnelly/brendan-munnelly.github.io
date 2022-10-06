/*
//////////////// BUTTONS ////////////////////
*/

document.querySelector("#cb_btns").addEventListener("change", doColButtons);

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
    const obj_btn = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] > a.btn");
    let el_btn;

    // Loop through buttons
    for (let i = 0; i < obj_btn.length; i++) {        
        el_btn = obj_btn[i];
        el_btn.remove();
    }

    const arg1 = sectionClassName+ " a.btn:visited { color";
    const arg2 = sectionClassName+ " a.btn:active { color";
    const arg3 = sectionClassName+ " a.btn:visited { background-color";
    const arg4 = sectionClassName+ " a.btn:active { background-color";
    const arg5 = sectionClassName+ " a.btn:visited { border-color";
    const arg6 = sectionClassName+ " a.btn:active { border-color";
    removeCSSTagPairs(arg1,arg2,arg3,arg4,arg5,arg6);

    iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-']").innerHTML = iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-']").innerHTML.replaceAll("\t\n\t\t<\/div>", "<\/div>");
    enableColButtons();
    document.getElementById("dd_buttons_shape").disabled=true;
    document.getElementById("dd_buttons_shape").value="0";
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

    if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] > a.btn")) {
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

document.querySelector("#cb_buttons_width").addEventListener("change", doBtnWidth);

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

document.querySelector("#cb_buttons_shadow").addEventListener("change", doBtnShadow);

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

document.querySelector("#cb_buttons_uppercase").addEventListener("change", doBtnUCase);

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
    if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
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
