
/*
//////////////// SECTION: COLOURS ///////////////
*/
    // Get the modal
    const modal = document.getElementById("myModal");
    const span = document.querySelector('#myModal .close-modal')
    span.onclick = function() {
        // modal.style.display = "none";
        hideSidebar();
        disableTransColCode();
    }
    
    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            // modal.style.display = "none";
            hideSidebar();
            disableTransColCode();
        }
    }

    let btn_id; // item to be coloured
    let newStyle; // full selector and style rule
    let sub_string; // style rule excerpt
    const arrCSS = []; // array for style rules to copy

    // On click style button 
    let all_btns = document.querySelectorAll('.btn_style');
    all_btns.forEach(el => el.addEventListener('click', event => {
        event.preventDefault();
        // get button id
        btn_id = event.target.id.toString();
        console.log("Button ID: "+btn_id);

        if (!btn_id) {
            document.querySelector("#box-msg").classList.add("is-visible");
            document.querySelector("#box-msg").classList.remove("is-hidden");
        }
        else {
            document.querySelector("#box-msg").classList.remove("is-visible");
            document.querySelector("#box-msg").classList.add("is-hidden");
            displayModal();
        }
    }));

    document.querySelector(".close-box-msg").addEventListener('click', closeBoxMsg);

    function closeBoxMsg() {
        document.querySelector("#box-msg").classList.remove("is-visible");
        document.querySelector("#box-msg").classList.add("is-hidden");
    }

    function displayModal() {
        if ((btn_id === "btn_a_primary_passive_bg") || (btn_id === "btn_a_primary_active_bg") ||(btn_id === "btn_a_primary_passive_border") || (btn_id === "btn_a_primary_active_border") || (btn_id === "btn_a_secondary_passive_bg") || (btn_id === "btn_a_secondary_active_bg") ||(btn_id === "btn_a_secondary_passive_border") || (btn_id === "btn_a_secondary_active_border") ) {
            enableTransColCode();
        }
        // modal.style.display = "block";
        if (btn_id === "btn_bg") {
            const el_section = document.querySelector("section");
        }
        showSidebar();
        event.preventDefault();
    }

    document.querySelector("#picker-box").addEventListener('click', handleLabelClick);
    
    function handleLabelClick(event) {
        event.stopPropagation();
        const label = event.target.closest("label");
        if (label && this.contains(label)) {
            // Ignore this click
            return;
        }
        // console.log('Label click detected');
        const span = event.target.closest("span");
        if (span && this.contains(span)) {
            // Ignore this click
            return;
        }
        // console.log('Span click detected');
    }

    function getColorID(color_code) {
        if (document.querySelector("section.theme-light")) {
            section_theme = "section.theme-light."+section_class;
        }
        else if (document.querySelector("section.theme-dark")) {
            section_theme = "section.theme-dark."+section_class;
        }

        /* Section background */
        if (btn_id === "btn_bg") {
            newStyle = section_theme+ " { background-color: var("+color_code+") }\n";
            sub_string = section_theme+ " { background-color: ";
            doUpdateArray(sub_string,newStyle);
        }

        /* Header upper label */
        else if (btn_id === "btn_upper_label") {
            newStyle = section_theme+ " .container-upper-label { color: var("+color_code+") }\n";
            sub_string = ".container-upper-label";
            doUpdateArray(sub_string,newStyle);
        }
                    
        /* Header h2 */
        else if (btn_id === "btn_head") {
            newStyle = section_theme+ " h2 { color: var("+color_code+") }\n";
            sub_string = "h2 { color:";
            doUpdateArray(sub_string,newStyle);
        }

        /* Header h3 */
        else if (btn_id === "btn_subhead") {
            newStyle = section_theme+ " h3 { color: var("+color_code+") }\n";
            sub_string = "h3 { color:";
            doUpdateArray(sub_string,newStyle);
        }

        /* Section text */
        else if (btn_id === "btn_text") {
            newStyle = section_theme+ " p { color: var("+color_code+") } \n"+section_theme+" li { color: var("+color_code+") } \n"; 
            sub_string = "p { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* ======= PRIMARY BUTTONS =========*/
        
        /* Text colour: passive */
        else if (btn_id === "btn_a_primary_passive_text") {
            newStyle = section_theme+" a.btn-primary:link,\n"+section_theme+" a.btn-primary:visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: active */
        else if (btn_id === "btn_a_primary_active_text") {
            newStyle = section_theme+" a.btn-primary:focus,\n"+section_theme+" a.btn-primary:hover,\n"+section_theme+" a.btn-primary:active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: passive */
        else if (btn_id === "btn_a_primary_passive_bg") {
            newStyle = section_theme+" a.btn-primary:link,\n"+section_theme+" a.btn-primary:visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: active */
        else if (btn_id === "btn_a_primary_active_bg") {
            newStyle = section_theme+" a.btn-primary:focus,\n"+section_theme+" a.btn-primary:hover,\n"+section_theme+" a.btn-primary:active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: passive */
        else if (btn_id === "btn_a_primary_passive_border") {
            newStyle = section_theme+" a.btn-primary:link,\n"+section_theme+" a.btn-primary:visited { border-color: var("+color_code+") }\n\n";
            sub_string = ".btn-primary:visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: active */
        else if (btn_id === "btn_a_primary_active_border") {
            newStyle = section_theme+" a.btn-primary:focus,\n"+section_theme+" a.btn-primary:hover,\n"+section_theme+" a.btn-primary:active { border-color: var("+color_code+") }\n\n";
            sub_string = "btn-primary:active { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* ========== SECONDARY BUTTONS =========== */

        /* Text colour: passive */
        else if (btn_id === "btn_a_secondary_passive_text") {
            newStyle = section_theme+" a.btn-secondary:link,\n"+section_theme+" a.btn-secondary:visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:visited { color";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Text colour: active */
        else if (btn_id === "btn_a_secondary_active_text") {
            newStyle = section_theme+" a.btn-secondary:focus,\n"+section_theme+" a.btn-secondary:hover,\n"+section_theme+" a.btn-secondary:active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:focus { color";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Background colour: passive */
        else if (btn_id === "btn_a_secondary_passive_bg") {
            newStyle = section_theme+" a.btn-secondary:link,\n"+section_theme+" a.btn-secondary:visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:visited { background";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Background colour: active */
        else if (btn_id === "btn_a_secondary_active_bg") {
            newStyle = section_theme+" a.btn-secondary:focus,\n"+section_theme+" a.btn-secondary:hover,\n"+section_theme+" a.btn-secondary:active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:active { background";
            doUpdateArray(sub_string,newStyle); 
        }
        
        /* Border colour: passive */
        else if (btn_id === "btn_a_secondary_passive_border") {
            newStyle = section_theme+" a.btn-secondary:link,\n"+section_theme+" a.btn-secondary:visited { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:visited { border";
            doUpdateArray(sub_string,newStyle); 
        }

        /* Border colour: active */
        else if (btn_id === "btn_a_secondary_active_border") {
            newStyle = section_theme+" a.btn-secondary:focus,\n"+section_theme+" a.btn-secondary:hover,\n"+section_theme+" a.btn-secondary:active { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-secondary:active { border";
            doUpdateArray(sub_string,newStyle); 
        }
        
        style = document.createElement('style');
        document.head.appendChild(style);
        style.appendChild(document.createTextNode(newStyle));
        enableCSS();
}

function doUpdateArray(sub_string,newStyle) {
    console.log("Passed in sub_string: "+sub_string);
    if ( arrCSS.some(e => e.includes(sub_string)) ) {
        const arrPos =arrCSS.findIndex(e => e.includes(sub_string));
        arrCSS.splice(arrPos, 1);
        arrCSS.push(newStyle);
    }
    else {
        arrCSS.push(newStyle);
    }
}

/*
//////////////// COLORS: TRANSPARENT OPTION ////////////////////
*/

function enableTransColCode() {
    document.getElementById("color-transparent").style.display="block";
}

function disableTransColCode() {
    document.getElementById("color-transparent").style.display="none";
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
    if (document.querySelector("#HTML-Content section .container-upper-label")) {
        document.querySelector("#HTML-Content section .container-upper-label").classList.add(animationType);
    }

    document.querySelector("#HTML-Content section h2").classList.add(animationType);

    if (document.querySelector("#HTML-Content section h3")) {
        document.querySelector("#HTML-Content section h3").classList.add(animationType);
    }

    let paras = document.querySelectorAll("#HTML-Content section p");
    for (i = 0; i < paras.length; ++i) {
        paras[i].classList.add(animationType)
    }

    if (document.querySelector("#HTML-Content section ul")) {
        document.querySelector("#HTML-Content section ul").classList.add(animationType);
    }
    
    if (document.querySelector("#HTML-Content section figure")) {
        document.querySelector("#HTML-Content section figure").classList.add(animationType);
    }
    
    if (document.querySelector("#HTML-Content section .container-btn")) {
        document.querySelector("#HTML-Content section .container-btn").classList.add(animationType);
    }
}

function removeTextAnimation() {
    document.querySelector("label[for='dd_text_slide']").style.color = "var(--gray-500)";
    // Has .container-upper-label
    if (document.querySelector("#HTML-Content section .container-upper-label")) {
        document.querySelector("#HTML-Content section .container-upper-label").removeAttribute("class");
    }
    document.querySelector("#HTML-Content section h2").removeAttribute("class");
    // Has h3 sub-heading
    if (document.querySelector("#HTML-Content section h3")) {
        document.querySelector("#HTML-Content section h3").removeAttribute("class");
    }

    let paras = document.querySelectorAll("#HTML-Content section p");
    for (i = 0; i < paras.length; ++i) {
        paras[i].removeAttribute("class");
    }
    // Has ul list
    if (document.querySelector("#HTML-Content section ul")) {
        document.querySelector("#HTML-Content section ul").removeAttribute("class");
    }
    // Has figure
    if (document.querySelector("#HTML-Content section figure")) {
        document.querySelector("#HTML-Content section figure").removeAttribute("class");
    }
    // Has .container-btn
    if (document.querySelector("#HTML-Content section .container-btn")) {
        document.querySelector("#HTML-Content section .container-btn").classList.remove("slide-in-top");
        document.querySelector("#HTML-Content section .container-btn").classList.remove("slide-in-bottom");
        document.querySelector("#HTML-Content section .container-btn").classList.remove("slide-in-left");
        document.querySelector("#HTML-Content section .container-btn").classList.remove("slide-in-right");
        document.querySelector("#HTML-Content section .container-btn").classList.remove("fade-in");
    }
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
        removeLists();
    }

    else if (selectedValue==="list-short") {
        removeLists();
        document.querySelector('section p:last-of-type').remove();
        document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", assets_ul_short);
        document.querySelector("label[for='switch-section-list']").style.color = "#fff";
    }

    else if (selectedValue==="list-long") {
        removeLists();
        document.querySelector('section p:last-of-type').remove();
        document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", assets_ul_long);
        document.querySelector("label[for='switch-section-list']").style.color = "#fff";
    }
}

function removeLists() {
    document.querySelector("label[for='switch-section-list']").style.color = "var(--gray-500)";
    if (document.querySelector("section ul")) {
        const elUL = document.querySelectorAll("section ul");
        for (var i = 0 ; i < elUL.length ; i++) {
            elUL[i].remove();
        }
        // Restore third paragraph
        document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", assets_para_last);
    }
}

/*
//////////////// SECTION: BUTTONS ///////////////
*/

document.getElementById("dd_section_buttons").value="0";
document.querySelector("#dd_section_buttons").addEventListener("change", doSectionButtons);
function doSectionButtons() {
    const opt = document.querySelector("#dd_section_buttons").value;
    // remove
    if (opt==="0") {
        removeSectionButtons();
        disableAllButtons();
    }
    // one button
    else if (opt==="1") {
        removeSectionButtons();
        disableAllButtons();
        enablePrimaryButtons();
        document.querySelector("section p:first-of-type").insertAdjacentHTML("afterend",assets_section_buttons_one);
        document.getElementById("dd_buttons_style").disabled=false;
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_icon").disabled=false;
        document.getElementById("dd_buttons_icon").value="1";

        if (document.querySelector("section.text-center-desktop")) {
            document.getElementById("dd_align_desktop_btns").disabled=true;
            document.getElementById("dd_align_desktop_btns").value="1";
        }
        else {
            document.getElementById("dd_align_desktop_btns").disabled=false;
            document.getElementById("dd_align_desktop_btns").value="0";
        }

        if (document.querySelector("section.text-center-mobile")) {
            document.getElementById("dd_align_mobile_btns").disabled=true;
            document.getElementById("dd_align_mobile_btns").value="1";
        }
        else {
            document.getElementById("dd_align_mobile_btns").disabled=false;
            document.getElementById("dd_align_mobile_btns").value="0";
        }
    }

    // two buttons
    else if (opt==="2") {
        removeSectionButtons();
        enableAllButtons();
        document.querySelector("section p:first-of-type").insertAdjacentHTML("afterend", assets_section_buttons_pair);
        document.getElementById("dd_buttons_icon").disabled=false;
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_style").disabled=false;
        document.getElementById("dd_buttons_icon").value="0";
        
        if (document.querySelector("section.text-center-desktop")) {
            document.getElementById("dd_align_desktop_btns").disabled=true;
            document.getElementById("dd_align_desktop_btns").value="1";
        }
        else {
            document.getElementById("dd_align_desktop_btns").disabled=false;
            document.getElementById("dd_align_desktop_btns").value="0";
        }

        if (document.querySelector("section.text-center-mobile")) {
            document.getElementById("dd_align_mobile_btns").disabled=true;
            document.getElementById("dd_align_mobile_btns").value="1";
        }
        else {
            document.getElementById("dd_align_mobile_btns").disabled=false;
            document.getElementById("dd_align_mobile_btns").value="0";
        }
    }
}

function removeSectionButtons() {
    const elements = document.getElementsByClassName("container-btn");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    document.getElementById("dd_buttons_icon").disabled=true;
    document.getElementById("dd_buttons_style").disabled=true;
    document.getElementById("dd_align_desktop_btns").disabled=true;
    document.getElementById("dd_align_mobile_btns").disabled=true;
}

function enableAllButtons() {
    document.getElementById("dd_buttons_icon").disabled=false;
    document.getElementById("dd_buttons_style").disabled=false;

    document.getElementById("btn_a_primary_passive_text").disabled=false;
    document.getElementById("btn_a_primary_active_text").disabled=false;
    document.getElementById("btn_a_primary_passive_bg").disabled=false;
    document.getElementById("btn_a_primary_active_bg").disabled=false;
    document.getElementById("btn_a_primary_passive_border").disabled=false;
    document.getElementById("btn_a_primary_active_border").disabled=false;
    document.getElementById("btn_a_secondary_passive_text").disabled=false;
    document.getElementById("btn_a_secondary_active_text").disabled=false;
    document.getElementById("btn_a_secondary_passive_bg").disabled=false;
    document.getElementById("btn_a_secondary_active_bg").disabled=false;
    document.getElementById("btn_a_secondary_passive_border").disabled=false;
    document.getElementById("btn_a_secondary_active_border").disabled=false;
}

function enablePrimaryButtons() {
    document.getElementById("dd_buttons_icon").disabled=false;
    document.getElementById("dd_buttons_style").disabled=false;
    document.getElementById("btn_a_primary_passive_text").disabled=false;
    document.getElementById("btn_a_primary_active_text").disabled=false;
    document.getElementById("btn_a_primary_passive_bg").disabled=false;
    document.getElementById("btn_a_primary_active_bg").disabled=false;
    document.getElementById("btn_a_primary_passive_border").disabled=false;
    document.getElementById("btn_a_primary_active_border").disabled=false;
}

function enableSecondaryButtons() {
    document.getElementById("dd_buttons_icon").disabled=false;
    document.getElementById("dd_buttons_style").disabled=false;
    document.getElementById("btn_a_secondary_passive_text").disabled=false;
    document.getElementById("btn_a_secondary_active_text").disabled=false;
    document.getElementById("btn_a_secondary_passive_bg").disabled=false;
    document.getElementById("btn_a_secondary_active_bg").disabled=false;
    document.getElementById("btn_a_secondary_passive_border").disabled=false;
    document.getElementById("btn_a_secondary_active_border").disabled=true;        
}

function disableAllButtons() {
    document.getElementById("dd_buttons_icon").disabled=true;
    document.getElementById("dd_buttons_icon").value="0";
    document.getElementById("dd_buttons_style").disabled=true;
    document.getElementById("dd_buttons_style").value="0";

    document.getElementById("btn_a_primary_passive_text").disabled=true;
    document.getElementById("btn_a_primary_active_text").disabled=true;
    document.getElementById("btn_a_primary_passive_bg").disabled=true;
    document.getElementById("btn_a_primary_active_bg").disabled=true;
    document.getElementById("btn_a_primary_passive_border").disabled=true;
    document.getElementById("btn_a_primary_active_border").disabled=true;
    document.getElementById("btn_a_secondary_passive_text").disabled=true;
    document.getElementById("btn_a_secondary_active_text").disabled=true;
    document.getElementById("btn_a_secondary_passive_bg").disabled=true;
    document.getElementById("btn_a_secondary_active_bg").disabled=true;
    document.getElementById("btn_a_secondary_passive_border").disabled=true;
    document.getElementById("btn_a_secondary_active_border").disabled=true;
}

function disablePrimaryButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=true;
    document.getElementById("btn_a_primary_active_text").disabled=true;
    document.getElementById("btn_a_primary_passive_bg").disabled=true;
    document.getElementById("btn_a_primary_active_bg").disabled=true;
    document.getElementById("btn_a_primary_passive_border").disabled=true;
    document.getElementById("btn_a_primary_active_border").disabled=true;
}

function disableSecondaryButtons() {
    document.getElementById("btn_a_secondary_passive_text").disabled=true;
    document.getElementById("btn_a_secondary_active_text").disabled=true;
    document.getElementById("btn_a_secondary_passive_bg").disabled=true;
    document.getElementById("btn_a_secondary_active_bg").disabled=true;
    document.getElementById("btn_a_secondary_passive_border").disabled=true;
    document.getElementById("btn_a_secondary_active_border").disabled=true;        
}

/*
//////////////// BUTTONS: CORNER STYLE ////////////////////
*/

document.querySelector("#dd_buttons_style").addEventListener("change", doButtonsStyle);

function doButtonsStyle() {
    let opt = document.querySelector("#dd_buttons_style").value;
    // remove
    if (opt==="0") {
        removeButtonsStyle();
    }
    // soft
    else if (opt==="1") {
        removeButtonsStyle();
        if (document.querySelector(".btn-primary")) {
            const el_btn_primary = document.querySelector("a.btn-primary");
            el_btn_primary.classList.add("btn-soft");
        }

        if (document.querySelector(".btn-secondary")) {
            const el_btn_secondary = document.querySelector("a.btn-secondary");
            el_btn_secondary.classList.add("btn-soft");
        }
    }

    // rounded
    else if (opt==="2") {
        removeButtonsStyle();
        if (document.querySelector(".btn-primary")) {
            const el_btn_primary = document.querySelector("a.btn-primary");
            el_btn_primary.classList.add("btn-pill");
        }

        if (document.querySelector(".btn-secondary")) {
            const el_btn_secondary = document.querySelector("a.btn-secondary");
            el_btn_secondary.classList.add("btn-pill");
        }
    }
}

function removeButtonsStyle() {

    if (document.querySelector(".btn-primary")) {
        const el_btn_primary = document.querySelector("a.btn-primary");
        el_btn_primary.classList.remove("btn-soft");
        el_btn_primary.classList.remove("btn-pill");
    }

    if (document.querySelector(".btn-secondary")) {
        const el_btn_secondary = document.querySelector("a.btn-secondary");
        el_btn_secondary.classList.remove("btn-soft");
        el_btn_secondary.classList.remove("btn-pill");
    }
}

/*
//////////////// BUTTONS: ICON POSITION ////////////////////
*/

document.querySelector("#dd_buttons_icon").addEventListener("change", swapButtonIcons);

function swapButtonIcons() {
    let opt = document.querySelector("#dd_buttons_icon").value;
    // Verify at least primary button exists
    if (document.querySelector("a.btn")) {      
        // Set up button icon and text content;
        const icon_left_primary  ="<i class=\"fas fa-shopping-cart\"></i><span>Order now</span>";
        const icon_left_secondary  ="<i class=\"fas fa-arrow-right\"></i><span>Learn more</span>";
        const icon_right_primary ="<span>Order Now</span><i class=\"fas fa-shopping-cart\"></i>";
        const icon_right_secondary ="<span>Learn more</span><i class=\"fas fa-arrow-right\"></i>";

        if (opt==="0") {
            // Icon at left. Text at right.
            if (document.querySelector("a.btn-secondary")) {
                const el_btn_1 = document.querySelector("a.btn-primary");
                el_btn_1.innerHTML = icon_left_primary;
                const el_btn_2 = document.querySelector("a.btn-secondary");
                el_btn_2.innerHTML = icon_left_secondary;
            }
            else {
                const el_btn = document.querySelector("a.btn-primary");
                el_btn.innerHTML = "<i class=\"fas fa-arrow-right\"></i><span>Start free trial<\/span>";
            }
        }

        // Text at left. Icon at right.
        else if (opt==="1") {
            if (document.querySelector("a.btn-secondary")) {
                const el_btn_1 = document.querySelector("a.btn-primary");
                el_btn_1.innerHTML = icon_right_primary;
                const el_btn_2 = document.querySelector("a.btn-secondary");
                el_btn_2.innerHTML = icon_right_secondary;
            }
            else {
                const el_btn = document.querySelector("a.btn-primary");
                el_btn.innerHTML = "<span>Start free trial<\/span><i class=\"fas fa-arrow-right\"><\/i>";
            }
        }
         
        // Text only. No icon.
        else if (opt==="2") {
            if (document.querySelector("a.btn-primary")) {
                const el_btn = document.querySelector("a.btn-primary");
                const btn_content = "<span>Order now</span>";
                el_btn.innerHTML = btn_content;
            }
    
            if (document.querySelector("a.btn-secondary")) {
                const el_btn = document.querySelector("a.btn-secondary");
                const btn_content = "<span>Learn more</span>";
                el_btn.innerHTML = btn_content;
            }       
        }
    }
}

/*
//////////////// BUTTONS: ALIGN HORIZONTALLY  ////////////////////
*/

document.querySelector("#dd_align_desktop_btns").addEventListener("change", doAlignDesktopBtns);
    
function doAlignDesktopBtns() {
    let opt = document.querySelector("#dd_align_desktop_btns").value;
    if (opt==="0") {
        document.querySelector(".container-btn").classList.remove("text-center-desktop");
    }

    else if (opt==="1") {
        document.querySelector(".container-btn").classList.add("text-center-desktop");   
    }
}

document.querySelector("#dd_align_mobile_btns").addEventListener("change", doAlignMobileBtns);

function doAlignMobileBtns() {
    let opt = document.querySelector("#dd_align_mobile_btns").value;
    if (opt==="0") {
        document.querySelector(".container-btn").classList.remove("text-center-mobile");
    }
    else if (opt==="1") {
        document.querySelector(".container-btn").classList.add("text-center-mobile"); 
    }
}

/*
//////////////// VISUAL ELEMENT INSIDE SINGLE-COLUMN LAYOUT ///////////////
*/

/* Enable visual */
document.querySelector("#dd_yn_vis").addEventListener("change",checkVis);

function checkVis() {
    let opt = document.querySelector("#dd_yn_vis").value;
    if (opt==="1") { enableVis() }
    else if (opt==="0") { removeVisual() }
}

function enableVis() {
    // Enable all radio options
    document.getElementById("vis_type_0").disabled=false;
    document.getElementById("vis_type_1").disabled=false;
    document.getElementById("vis_type_2").disabled=false;
    document.getElementById("vis_type_3").disabled=false;
    document.getElementById("vis_type_4").disabled=false;

    //Enable visual width
    document.querySelector("#dd_yn_vis_width").disabled=false;
    document.querySelector("#dd_yn_vis_width").value="0";
    document.querySelector("label[for='dd_yn_vis_width']").style.color = "#fff";

    // Select first (picture) radio button
    document.getElementById("vis_type_0").checked=true;

    // Add picture
    document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\/1920x1158-cafe-interior.jpg\" alt=\"Placeholder image\">\n\t<\/figure>\n");

    // Enable image properties and labels
    document.getElementById("dd_img_corners").disabled=false;
    document.getElementById("dd_img_corners").value="0";
    document.querySelector("label[for='dd_img_corners']").style.color = "#fff";
    document.getElementById("dd_img_shadows").disabled=false;
    document.getElementById("dd_img_shadows").value="0";
    document.querySelector("label[for='dd_img_shadows']").style.color = "#fff";
}

document.querySelector("#vis-types-all").addEventListener("click", doVisType);

function doVisType() { 
    const rbs = document.querySelectorAll("#vis-types-all input[name='dd_visual']");
    let selectedValue;
    
    if (document.querySelector("#dd_yn_vis").value==="1") {
        for (const rb of rbs) {
            if (rb.checked) {
                selectedValue = rb.value;
                break;
            }
        }
    
        if (selectedValue==="none") {
            removeVisual();
            disableDesktopAlignFig();
        }

        else if ( (selectedValue==="pictures") || (selectedValue==="transparent") || (selectedValue==="illustrations") ) {
            removeVisual();
            if (selectedValue==="pictures") {
                document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\/1920x1158-cafe-interior.jpg\" alt=\"Placeholder image\">\n\t<\/figure>\n");        
                document.getElementById("vis_type_0").checked=true;
            }
    
            else if (selectedValue==="transparent") {
                document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\/1920x1158-bag-brown.png\" alt=\"Placeholder image\">\n\t<\/figure>\n"); 
                document.getElementById("vis_type_1").checked=true;
                document.querySelector("label[for='vis_type_1']").style.color = "#fff";
            }

            else if (selectedValue==="illustrations") {
                document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\/1920x1158-drawing.png\" alt=\"Placeholder image\">\n\t<\/figure>\n"); 
                document.getElementById("vis_type_2").checked=true;
            }
            // Enables fig width
            document.querySelector("#dd_yn_vis_width").disabled=false;
            document.querySelector("#dd_yn_vis_width").value="0";
            document.querySelector("label[for='dd_yn_vis_width']").style.color = "#fff";

            // Enable image properties and labels
            document.getElementById("dd_img_corners").disabled=false;
            document.getElementById("dd_img_corners").value="0";
            document.getElementById("dd_img_shadows").disabled=false;
            document.getElementById("dd_img_shadows").value="0";
            document.querySelector("label[for='dd_img_corners']").style.color = "#fff";
            document.querySelector("label[for='dd_img_shadows']").style.color = "#fff";                

            // Disable video properties and labels
            document.getElementById("dd_vid_shadows").disabled=true;
            document.getElementById("dd_vid_shadows").value="0";
            document.querySelector("label[for='dd_vid_shadows']").style.color = "var(--gray-500)";

            // Enable all radio button labels
            document.querySelector("label[for='vis_type_0']").style.color = "#fff";
            document.querySelector("label[for='vis_type_1']").style.color = "#fff";                
            document.querySelector("label[for='vis_type_2']").style.color = "#fff";
            document.querySelector("label[for='vis_type_3']").style.color = "#fff";
            document.querySelector("label[for='vis_type_4']").style.color = "#fff";
        }

        else if ( (selectedValue==="vid-file") || (selectedValue==="vid-yt") ) {

            if (selectedValue==="vid-file") {
                removeVisual();
                // disableDesktopAlignFig();
                document.querySelector("section p").insertAdjacentHTML("afterend", "\n\t\t<figure><div class=\"container-video-file\">\n\t\t\t<video controls>\n\t\t\t\t<source src=\"assets/videos/video-focal-center.mp4\" type=\"video\/mp4\">\n\t\t\t<\/video>\n\t\t</div></figurte>\n\t");
                document.getElementById("vis_type_3").checked=true;
            }

            else if (selectedValue==="vid-yt") {
                removeVisual();
                document.querySelector("section p").insertAdjacentHTML("afterend", "<figure>\n\t\t<div class=\"container-video-yt\">\n\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t<\/iframe>\n\t\t<\/div>\n\t</figure>");
                document.getElementById("vis_type_4").checked=true;
            }

            // Enables fig width
            document.querySelector("#dd_yn_vis_width").disabled=false;
            document.querySelector("#dd_yn_vis_width").value="0";
            document.querySelector("label[for='dd_yn_vis_width']").style.color = "#fff";

            // Disable image properties and labels
            document.getElementById("dd_img_corners").disabled=true;
            document.getElementById("dd_img_corners").value="0";
            document.getElementById("dd_img_shadows").disabled=true;
            document.getElementById("dd_img_shadows").value="0";
            document.querySelector("label[for='dd_img_corners']").style.color = "var(--gray-500)";
            document.querySelector("label[for='dd_img_shadows']").style.color = "var(--gray-500)";
            
            // Enable video properties and labels
            document.getElementById("dd_vid_shadows").disabled=false;
            document.getElementById("dd_vid_shadows").value="0";
            document.querySelector("label[for='dd_vid_shadows']").style.color = "#fff";

            // Enable all radio button labels
            document.querySelector("label[for='vis_type_0']").style.color = "#fff";
            document.querySelector("label[for='vis_type_1']").style.color = "#fff";                
            document.querySelector("label[for='vis_type_2']").style.color = "#fff";
            document.querySelector("label[for='vis_type_3']").style.color = "#fff";
            document.querySelector("label[for='vis_type_4']").style.color = "#fff";            
        }
    }
}

/*
//////////////// ILLUSTRATIONS: ALIGN ON DESKTOP  ////////////////////
*/

document.querySelector("#dd_align_desktop_figure").addEventListener("change", doAlignDesktopFig);
    
function doAlignDesktopFig() {
    let opt = document.querySelector("#dd_align_desktop_figure").value;
    if (opt==="0") {
        document.querySelector("section figure").classList.remove("text-center-desktop");
    }

    else if (opt==="1") {
        document.querySelector("section figure").classList.add("text-center-desktop");   
    }
}

/*
//////////////// VISUAL PROPERTIES: CORNERS ///////////////
*/

document.querySelector("#dd_img_corners").addEventListener("change", doImageCorners);

function doImageCorners() {
    let opt = document.querySelector("#dd_img_corners").value;

    if (opt==="0") {
        const el_fig = document.querySelector('section');
        el_fig.classList.remove("fig-corners-soft");
    }

    else if (opt==="1") {
        const el_fig = document.querySelector('section');
        el_fig.classList.add("fig-corners-soft");
    }
}

/*
//////////////// VISUAL PROPERTIES: IMAGE SHADOWS ///////////////
*/

document.querySelector("#dd_img_shadows").addEventListener("change", doImageShadows);

function doImageShadows() {
    let opt = document.querySelector("#dd_img_shadows").value;
    // Remove figure shadow
    if (opt==="0") {
        const el_fig = document.querySelector('section');
        el_fig.classList.remove("fig-shadow");
    }

    // Add figure shadow
    else if (opt==="1") {
        const el_fig = document.querySelector('section');
        el_fig.classList.add("fig-shadow");
    }
}

/*
//////////////// VISUAL PROPERTIES: VIDEO SHADOWS ///////////////
*/

document.querySelector("#dd_vid_shadows").addEventListener("change", doVidShadows);

function doVidShadows() {
    let opt = document.querySelector("#dd_vid_shadows").value;
    // Remove figure shadow
    if (opt==="0") {
        const el_fig = document.querySelector('section');
        el_fig.classList.remove("fig-shadow");
    }

    // Add figure shadow
    else if (opt==="1") {
        const el_fig = document.querySelector('section');
        el_fig.classList.add("fig-shadow");
    }
}

/*
//////////////// VISUAL ELEMENT WIDTH (811px AND ABOVE ) ///////////////
*/

document.querySelector("#dd_yn_vis_width").addEventListener("change", doFigWidth);

function doFigWidth() {
    const opt = document.querySelector("#dd_yn_vis_width").value;
    const el_section_fig = document.querySelector("section figure");

    // remove
    if (opt==="0") {
        el_section_fig.classList.remove("figure-width-50");
        el_section_fig.classList.remove("figure-width-80");
        disableDesktopAlignFig();
    }
    // 50%
    else if (opt==="1") {
        el_section_fig.classList.remove("figure-width-50");
        el_section_fig.classList.add("figure-width-80");
        enableDesktopAlignFig();
    }
    // 50%
    else if (opt==="2") {
        el_section_fig.classList.remove("figure-width-80");
        el_section_fig.classList.add("figure-width-50");
        enableDesktopAlignFig();
    }
}

function enableDesktopAlignFig() {
    document.querySelector("#dd_align_desktop_figure").disabled=false;
    document.querySelector("#dd_align_desktop_figure").value="0";
    document.querySelector("label[for='dd_align_desktop_figure']").style.color = "#fff";
}

function disableDesktopAlignFig() {
    document.querySelector("#dd_align_desktop_figure").disabled=true;
    document.querySelector("#dd_align_desktop_figure").value="0";
    document.querySelector("label[for='dd_align_desktop_figure']").style.color = "var(--gray-500)";
}

function removeVisual() {
    if (document.querySelector('section figure')) {
        let el_content = document.querySelector('section');
        let el_fig = document.querySelector('section figure');
        el_content.removeChild(el_fig);
    }

    // Uncheck and disable all radio buttons
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

    // Grey-out radio labels
    document.querySelector("label[for='vis_type_0']").style.color = "var(--gray-500)";
    document.querySelector("label[for='vis_type_1']").style.color = "var(--gray-500)";
    document.querySelector("label[for='vis_type_2']").style.color = "var(--gray-500)";
    document.querySelector("label[for='vis_type_3']").style.color = "var(--gray-500)";
    document.querySelector("label[for='vis_type_4']").style.color = "var(--gray-500)";

    // Remove any corner, shadow or width properties 
    document.querySelector('section').classList.remove("fig-corners-soft");
    document.querySelector('section').classList.remove("fig-shadow");
    document.querySelector('section').classList.remove("figure-width-50");
    document.querySelector('section').classList.remove("figure-width-100");

    // Disable image and video properties and labels
    document.querySelector("#dd_yn_vis_width").disabled=true;
    document.querySelector("#dd_yn_vis_width").value="0";
    document.querySelector("label[for='dd_yn_vis_width']").style.color = "var(--gray-500)";

    document.querySelector("#dd_align_desktop_figure").disabled=true;
    document.querySelector("#dd_align_desktop_figure").value="0";
    document.querySelector("label[for='dd_align_desktop_figure']").style.color = "var(--gray-500)";

    document.getElementById("dd_img_corners").disabled=true;
    document.getElementById("dd_img_corners").value="0";
    document.querySelector("label[for='dd_img_corners']").style.color = "var(--gray-500)";
    document.getElementById("dd_img_shadows").value="0";
    document.getElementById("dd_img_shadows").disabled=true;
    document.querySelector("label[for='dd_img_shadows']").style.color = "var(--gray-500)";            
    document.getElementById("dd_vid_shadows").value="0";
    document.getElementById("dd_vid_shadows").disabled=true;
    document.querySelector("label[for='dd_vid_shadows']").style.color = "var(--gray-500)";            
}