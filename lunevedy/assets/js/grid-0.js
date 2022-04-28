/* After frame content loads */
function onFrameLoaded() {
    loadGrid0();
} 

function loadGrid0() {

    // *** Global variables
    // Number of dropdown menus on Lunevery navbar
    const uiUIenusLength = document.querySelectorAll("#ui-menus li").length;
    
    // Used by color picker to identify section for copying to user's HTML file.
    // Values with be "section-selector-1", ... "section-selector-6".
    let section_class ="section-selector-1"; 
    
    // Used by color picker. Either 'theme-light' or 'theme-dark'.
    let section_theme = "section.theme-light."+section_class;
    
    /*
    //////////////// MENUS AND DROPDOWNS ///////////////
    */
    
    // Hide all menus - except currently selected one.
    let divs = document.querySelectorAll('.dropbtn');
    divs.forEach(el => el.addEventListener('click', event => {
        for (let i = 1; i <= uiUIenusLength; i++) {
            document.querySelector("#content-"+i).classList.add("dropdown-hidden");
        }
        // Get current menu id
        const strMenu = event.currentTarget.id.toString();
        const menuId = strMenu.charAt(strMenu.length-1);
        const elItem_show = document.querySelector("#content-"+menuId);
        // Unhide current menu
        elItem_show.classList.remove("dropdown-hidden"); 
        // Hide color picker
        hideSidebar();
    }));
    
    document.querySelector('#page-preview-body').addEventListener('click',hideMenus,false);
    
    function hideMenus() {
        for (let i = 1; i <= uiUIenusLength; i++) {
            document.querySelector("#content-"+i).classList.add("dropdown-hidden");
        }
        hideSidebar();
    }
    
    // Hide menus when users presses Esc key.
    document.onkeydown = function(evt) {
        evt = evt || window.event;
        var isEscape = false;
        if ("key" in evt) {
            isEscape = (evt.key === "Escape" || evt.key === "Esc");
        } else {
            isEscape = (evt.keyCode === 27);
        }
        if (isEscape) {
            hideMenus()
        }
    }
    
    // Hide dialog box when user clicks X icon
    for (let i = 1; i <= uiUIenusLength; i++) {
        document.querySelector(`#content-${[i]} .dialog-box-header span.close-x`).addEventListener("click", hideDialogBox);
    }
    
    function hideDialogBox() {
        for (let i = 1; i <= uiUIenusLength; i++) {
            document.querySelector(`#content-${[i]}`).classList.add("dropdown-hidden"); 
        }
        hideSidebar();
        disableTransColCode();
    } 
    
    /* Show/hide color picker */
    function showSidebar() {
        document.querySelector("#myModal").classList.add("display-sidebar");
        document.querySelector("#myModal").classList.remove("hide-sidebar");
    }
    
    function hideSidebar() {
        document.querySelector("#myModal").classList.add("hide-sidebar");
        document.querySelector("#myModal").classList.remove("show-sidebar");
        document.querySelector("#myModal").scrollTo(0, 0); // scrolls to top of sidebar
    }
    
    /* ================ DIALOG BOXES =================== */
    
    // Make dialog boxes element draggable:
    
    for (let i = 1; i <= uiUIenusLength; i++) {
        dragElement(document.getElementById("content-"+[i]));
    }
    
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        if (document.getElementById(elmnt.id + "header")) {
            // if present, the header is where you move the DIV from:
            document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
        } 
        else {
            // otherwise, move the DIV from anywhere inside the DIV:
            elmnt.onmousedown = dragMouseDown;
        }
    
        function dragMouseDown(e) {
            e = e || window.event;
            // e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }
    
        function elementDrag(e) {
            e = e || window.event;
            // e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }
    
        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }
    
/*
//////////////// SECTION: THEME  ///////////////
*/

document.querySelector("#switch_section_theme").addEventListener("change", doSectionTheme);

function doSectionTheme() {
    hideMenus();
    const rbs = document.querySelectorAll("input[name='switch_section_light_dark']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    // Remove all styles
    var hs = iframe.contentWindow.document.querySelectorAll('style');
    for (var i=0, max = hs.length; i < max; i++) {
        hs[i].parentNode.removeChild(hs[i]);
    }

    if (selectedValue==="light") {
        iframe.contentWindow.document.querySelector("section").classList.remove("theme-dark"); 
        iframe.contentWindow.document.querySelector("section").classList.add("theme-light"); 
    }
        
    else if (selectedValue==="dark") {
        iframe.contentWindow.document.querySelector("section").classList.remove("theme-light"); 
        iframe.contentWindow.document.querySelector("section").classList.add("theme-dark"); 
    }

    // Check for outlines
    if (document.querySelector("#cb_outlines").checked) {
        const css_checked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = document.head || iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_checked = iframe.contentWindow.document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(document.createTextNode(css_checked));
    }
    disableCSS();
}

/*
//////////////// SECTION: OUTLINES  ///////////////
*/

document.querySelector("#cb_outlines").addEventListener("change", toggleOutlines);

function toggleOutlines() {
    
    if (document.querySelector("#cb_outlines").checked) {
        const css_checked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_checked = iframe.contentWindow.document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(iframe.contentWindow.document.createTextNode(css_checked));
    }

    else {
        const css_unchecked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px transparent }";
        head_unchecked = iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_unchecked = iframe.contentWindow.document.createElement('style');
        head_unchecked.appendChild(style_unchecked);
        style_unchecked.type = 'text/css';
        style_unchecked.appendChild(iframe.contentWindow.document.createTextNode(css_unchecked));
    }
}    

/*
//////////////// COLOR PICKER ////////////////////
*/

// Get the modal
const modal = document.getElementById("myModal");
const span = document.querySelector('#myModal .close-modal')
span.onclick = function() {
    hideSidebar();
    disableTransColCode();
}
    
// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
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

/* Color picker error */
document.querySelector(".close-box-msg").addEventListener('click', closeBoxMsg);

function closeBoxMsg() {
    document.querySelector("#box-msg").classList.remove("is-visible");
    document.querySelector("#box-msg").classList.add("is-hidden");
}

function displayModal() {
    if ((btn_id === "btn_a_primary_passive_bg") || (btn_id === "btn_a_primary_active_bg") ||(btn_id === "btn_a_primary_passive_border") || (btn_id === "btn_a_primary_active_border") || (btn_id === "btn_a_secondary_passive_bg") || (btn_id === "btn_a_secondary_active_bg") ||(btn_id === "btn_a_secondary_passive_border") || (btn_id === "btn_a_secondary_active_border") ) {
        enableTransColCode();
    }
    if (btn_id === "btn_bg") {
        const el_section = iframe.contentWindow.document.querySelector("section");
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
        console.log('Proper click detected');
        const rbs = document.querySelectorAll("input[name='picker-radio']");
        let color_code;
    
        for (const rb of rbs) {
            if (rb.checked) {
                color_code = rb.value;
                break;
            }
        }
        console.log('color_code: '+color_code);

        if (iframe.contentWindow.document.querySelector("section.theme-light")) {
            section_theme = "section.theme-light."+section_class;
        }
        else if (iframe.contentWindow.document.querySelector("section.theme-dark")) {
            section_theme = "section.theme-dark."+section_class;
        }    document.querySelector(".close-box-msg").addEventListener('click', closeBoxMsg);

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
        iframe.contentWindow.document.head.appendChild(style);
        style.appendChild(document.createTextNode(newStyle));
        enableCSS();
}

function doUpdateArray(sub_string,newStyle) {
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
//////////////// SECTION: CLASS NAMES ///////////////
*/

document.querySelector("#dd_className").addEventListener("change", doClassName);

function doClassName() {
    removeClassNames();
    let opt = 1 + parseInt(document.querySelector("#dd_className").value);
    section_class = "section-selector-"+opt;
    iframe.contentWindow.document.querySelector("section").classList.add("section-selector-"+opt);
}

function removeClassNames() {
    const el_section = iframe.contentWindow.document.querySelector("section");
    for (let i = 1; i <= uiUIenusLength; i++) {
        el_section.classList.remove("section-selector-"+[i]);
    }
}

/*
//////////////// SECTION WIDTH ///////////////
*/

document.querySelector("#dd_text_width").addEventListener("change", doWidthDesktopSection);

function doWidthDesktopSection() {

    let opt = document.querySelector("#dd_text_width").value;
    deleteSectionWidth();

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

function deleteSectionWidth() {
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-800px");
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-960px");
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-1024px");
    iframe.contentWindow.document.querySelector("section").classList.remove("section-width-1140px");
}

/*
//////////////// ALIGN ENTIRE SECTION ///////////////
*/

document.querySelector("#switch-horz-align-desktop").addEventListener("change", doAlignDesktopSection);

function doAlignDesktopSection() {
    const rbs = document.querySelectorAll("input[name='horz-align-desktop']");
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

document.querySelector("#switch-horz-align-mobile").addEventListener("change", doAlignMobileSection);

function doAlignMobileSection() {

    const rbs = document.querySelectorAll("input[name='horz-align-mobile']");
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


/*
//////////////// ALL LAYOUTS: UPPER CATEGORY LABEL ABOVE H2 ///////////////
*/

document.querySelector("#cb_upperLabelOn").addEventListener("change", doUpperLabel);

function doUpperLabel() {

    // Single column
    if (!document.getElementById("cb_upperLabelOn").checked) {
        removeUpperLabel();
    }
    else {
        iframe.contentWindow.document.querySelector("section > h2").insertAdjacentHTML("beforebegin", "<div class=\"container-upper-label\"><span>CATEGORY<\/span><\/div>\n\n\t");
        document.getElementById("btn_upper_label").disabled=false;
    }
}

function removeUpperLabel() {
    if (iframe.contentWindow.document.querySelector('.container-upper-label')) {
    const upperLabel = iframe.contentWindow.document.querySelector('.container-upper-label');
        upperLabel.remove();
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('\n\t\t\t<h2>Section heading<\/h2>', '<h2>Section heading<\/h2>');
        document.getElementById("btn_upper_label").disabled=true;
    }
}

/*
//////////////// STANDFIRST ///////////////
*/

document.querySelector("#cb_standfirstOn").addEventListener("change", doStandFirst);

function doStandFirst() {
    if (!document.getElementById("cb_standfirstOn").checked) {
        iframe.contentWindow.document.querySelector("section > p").classList.remove("standfirst");
    }
    else {
        document.querySelector("label[for='cb_standfirstOn']").style.color = "#fff";
        iframe.contentWindow.document.querySelector("section > p").classList.add("standfirst");
    }
}

/*
//////////////// H3 SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_H3On").addEventListener("change", doColH3);

function doColH3() {

    if (!document.getElementById("cb_H3On").checked) {
        removeColH3();
    }

    else {
        if (!iframe.contentWindow.document.querySelector("section h3")) {
            iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", assets_header_h3);
            document.getElementById("btn_subhead").disabled=false;
        }
        else {
            return
        }
    }
}

function removeColH3() {
    iframe.contentWindow.document.querySelector("section h3").remove();
    document.getElementById("btn_subhead").disabled=true;
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
        iframe.contentWindow.document.querySelector('section p:last-of-type').remove();
        iframe.contentWindow.document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", assets_ul_short);
    }

    else if (selectedValue==="list-long") {
        removeLists();
        iframe.contentWindow.document.querySelector('section p:last-of-type').remove();
        iframe.contentWindow.document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", assets_ul_long);
    }
}

function removeLists() {
    if (iframe.contentWindow.document.querySelector("section ul")) {
        const elUL = iframe.contentWindow.document.querySelectorAll("section ul");
        for (var i = 0 ; i < elUL.length ; i++) {
            elUL[i].remove();
        }
        // Restore third paragraph
        iframe.contentWindow.document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", assets_para_last);
    }
    let HTML_Content = iframe.contentWindow.document.getElementById("HTML-Content").innerHTML;
    HTML_Content = HTML_Content.replace(/\t\n\n\n/g,"");
}

/*
//////////////// SECTION: BUTTONS ///////////////
*/


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
        iframe.contentWindow.document.querySelector("section p:first-of-type").insertAdjacentHTML("afterend",assets_section_buttons_one);
        document.getElementById("dd_buttons_style").disabled=false;
        document.getElementById("dd_buttons_style").value="0";

        if (iframe.contentWindow.document.querySelector("section.text-center-desktop")) {
            document.getElementById("dd_align_desktop_btns").disabled=true;
            document.getElementById("dd_align_desktop_btns").value="1";
        }
        else {
            document.getElementById("dd_align_desktop_btns").disabled=false;
            document.getElementById("dd_align_desktop_btns").value="0";
        }

        if (iframe.contentWindow.document.querySelector("section.text-center-mobile")) {
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
        iframe.contentWindow.document.querySelector("section p:first-of-type").insertAdjacentHTML("afterend", assets_section_buttons_pair);
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_style").disabled=false;
        
        if (iframe.contentWindow.document.querySelector("section.text-center-desktop")) {
            document.getElementById("dd_align_desktop_btns").disabled=true;
            document.getElementById("dd_align_desktop_btns").value="1";
        }
        else {
            document.getElementById("dd_align_desktop_btns").disabled=false;
            document.getElementById("dd_align_desktop_btns").value="0";
        }

        if (iframe.contentWindow.document.querySelector("section.text-center-mobile")) {
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
    const elements = iframe.contentWindow.document.getElementsByClassName("container-btn");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    // Button style
    document.getElementById("dd_buttons_style").disabled=true;
    // Button icon
    document.getElementById("switch-btns-icons-position").disabled=true;
    document.querySelector("label[for='switch-btns-icons-position']").style.color = "var(--gray-500)";
    document.getElementById("rd-btns-icons-left").disabled=true;
    document.getElementById("rd-btns-icons-left").checked=false;
    document.getElementById("rd-btns-icons-right").disabled=true;
    document.getElementById("rd-btns-icons-right").checked=false;
    document.getElementById("rd-btns-icons-none").disabled=true;
    document.getElementById("rd-btns-icons-none").checked=false;
    // Button align
    document.getElementById("dd_align_desktop_btns").disabled=true;
    document.getElementById("dd_align_mobile_btns").disabled=true;
    let HTML_Content = iframe.contentWindow.document.getElementById("HTML-Content").innerHTML;
    HTML_Content = HTML_Content.replace(/\t\n\n\n/g,"");
}

function enableAllButtons() {
    // Button style
    document.getElementById("dd_buttons_style").disabled=false;

    // Button icon
    document.getElementById("switch-btns-icons-position").disabled=false;
    document.querySelector("label[for='switch-btns-icons-position']").style.color = "#fff";
    document.getElementById("rd-btns-icons-left").disabled=false;
    document.getElementById("rd-btns-icons-left").checked=true;
    document.getElementById("rd-btns-icons-right").disabled=false;
    document.getElementById("rd-btns-icons-right").checked=false;
    document.getElementById("rd-btns-icons-none").disabled=false;
    document.getElementById("rd-btns-icons-none").checked=false;

    // Button align

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
    document.getElementById("dd_buttons_style").disabled=false;

    // Button icon
    document.getElementById("switch-btns-icons-position").disabled=false;
    document.querySelector("label[for='switch-btns-icons-position']").style.color = "#fff";
    document.getElementById("rd-btns-icons-left").disabled=false;
    document.getElementById("rd-btns-icons-left").checked=false;
    document.getElementById("rd-btns-icons-right").disabled=false;
    document.getElementById("rd-btns-icons-right").checked=true;
    document.getElementById("rd-btns-icons-none").disabled=false;
    document.getElementById("rd-btns-icons-none").checked=false;

    // Button align

    document.getElementById("btn_a_primary_passive_text").disabled=false;
    document.getElementById("btn_a_primary_active_text").disabled=false;
    document.getElementById("btn_a_primary_passive_bg").disabled=false;
    document.getElementById("btn_a_primary_active_bg").disabled=false;
    document.getElementById("btn_a_primary_passive_border").disabled=false;
    document.getElementById("btn_a_primary_active_border").disabled=false;
}

function enableSecondaryButtons() {
    // Button style
    document.getElementById("dd_buttons_style").disabled=false;

    // Button icon
    document.getElementById("switch-btns-icons-position").disabled=false;
    document.querySelector("label[for='switch-btns-icons-position']").style.color = "#fff";
    document.getElementById("rd-btns-icons-left").disabled=false;
    document.getElementById("rd-btns-icons-left").checked=true;
    document.getElementById("rd-btns-icons-right").disabled=false;
    document.getElementById("rd-btns-icons-right").checked=false;
    document.getElementById("rd-btns-icons-none").disabled=false;
    document.getElementById("rd-btns-icons-none").checked=false;

    document.getElementById("btn_a_secondary_passive_text").disabled=false;
    document.getElementById("btn_a_secondary_active_text").disabled=false;
    document.getElementById("btn_a_secondary_passive_bg").disabled=false;
    document.getElementById("btn_a_secondary_active_bg").disabled=false;
    document.getElementById("btn_a_secondary_passive_border").disabled=false;
    document.getElementById("btn_a_secondary_active_border").disabled=true;        
}

function disableAllButtons() {
    // Button style
    document.getElementById("dd_buttons_style").disabled=true;
    document.getElementById("dd_buttons_style").value="0";

    // Button icon
    document.getElementById("switch-btns-icons-position").disabled=true;
    document.querySelector("label[for='switch-btns-icons-position']").style.color = "var(--gray-500)";
    document.getElementById("rd-btns-icons-left").disabled=true;
    document.getElementById("rd-btns-icons-left").checked=false;
    document.getElementById("rd-btns-icons-right").disabled=true;
    document.getElementById("rd-btns-icons-right").checked=false;
    document.getElementById("rd-btns-icons-none").disabled=true;
    document.getElementById("rd-btns-icons-none").checked=false;

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
        if (iframe.contentWindow.document.querySelector(".btn-primary")) {
            const el_btn_primary = document.querySelector("a.btn-primary");
            el_btn_primary.classList.add("btn-soft");
        }

        if (iframe.contentWindow.document.querySelector(".btn-secondary")) {
            const el_btn_secondary = document.querySelector("a.btn-secondary");
            el_btn_secondary.classList.add("btn-soft");
        }
    }

    // rounded
    else if (opt==="2") {
        removeButtonsStyle();
        if (iframe.contentWindow.document.querySelector(".btn-primary")) {
            const el_btn_primary = iframe.contentWindow.document.querySelector("a.btn-primary");
            el_btn_primary.classList.add("btn-pill");
        }

        if (iframe.contentWindow.document.querySelector(".btn-secondary")) {
            const el_btn_secondary = iframe.contentWindow.document.querySelector("a.btn-secondary");
            el_btn_secondary.classList.add("btn-pill");
        }
    }
}

function removeButtonsStyle() {

    if (iframe.contentWindow.document.querySelector(".btn-primary")) {
        const el_btn_primary = iframe.contentWindow.document.querySelector("a.btn-primary");
        el_btn_primary.classList.remove("btn-soft");
        el_btn_primary.classList.remove("btn-pill");
    }

    if (iframe.contentWindow.document.querySelector(".btn-secondary")) {
        const el_btn_secondary = iframe.contentWindow.document.querySelector("a.btn-secondary");
        el_btn_secondary.classList.remove("btn-soft");
        el_btn_secondary.classList.remove("btn-pill");
    }
}

/*
//////////////// BUTTONS: ICONS POSITION ////////////////////
*/

if (document.querySelector("#switch-btns-icons-position")) {
document.querySelector("#switch-btns-icons-position").addEventListener("change", swapButtonIcons);
}

function swapButtonIcons() {

    const rbs = document.querySelectorAll("input[name='btns-icons-position']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    // Verify at least primary button exists
    if (iframe.contentWindow.document.querySelector("a.btn")) {      
        // Set up button icon and text content;
        const icon_left_primary  ="<i class=\"fas fa-shopping-cart\"></i><span>Order now</span>";
        const icon_left_secondary  ="<i class=\"fas fa-arrow-right\"></i><span>Learn more</span>";
        const icon_right_primary ="<span>Order Now</span><i class=\"fas fa-shopping-cart\"></i>";
        const icon_right_secondary ="<span>Learn more</span><i class=\"fas fa-arrow-right\"></i>";

        if (selectedValue==="btns-icons-left") {
        // move text to right, icon to left
            // Icon at left. Text at right.
            if (iframe.contentWindow.document.querySelector("a.btn-secondary")) {
                const el_btn_1 = iframe.contentWindow.document.querySelector("a.btn-primary");
                el_btn_1.innerHTML = icon_left_primary;
                const el_btn_2 = iframe.contentWindow.document.querySelector("a.btn-secondary");
                el_btn_2.innerHTML = icon_left_secondary;
            }
            else {
                const el_btn = iframe.contentWindow.document.querySelector("a.btn-primary");
                el_btn.innerHTML = "<i class=\"fas fa-arrow-right\"></i><span>Start free trial<\/span>";
            }
        }
    
        else if (selectedValue==="btns-icons-right") {
            // move text to left, icon to right
            if (iframe.contentWindow.document.querySelector("a.btn-secondary")) {
                const el_btn_1 = iframe.contentWindow.document.querySelector("a.btn-primary");
                el_btn_1.innerHTML = icon_right_primary;
                const el_btn_2 = iframe.contentWindow.document.querySelector("a.btn-secondary");
                el_btn_2.innerHTML = icon_right_secondary;
            }
            else {
                const el_btn = iframe.contentWindow.document.querySelector("a.btn-primary");
                el_btn.innerHTML = "<span>Start free trial<\/span><i class=\"fas fa-arrow-right\"><\/i>";
            }
        }
    
        else if (selectedValue==="btns-icons-none") {
            // Only text, No icons.
            if (iframe.contentWindow.document.querySelector("a.btn-primary")) {
                const el_btn = iframe.contentWindow.document.querySelector("a.btn-primary");
                const btn_content = "<span>Order now</span>";
                el_btn.innerHTML = btn_content;
            }
    
            if (iframe.contentWindow.document.querySelector("a.btn-secondary")) {
                const el_btn = iframe.contentWindow.document.querySelector("a.btn-secondary");
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
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("text-center-desktop");
    }

    else if (opt==="1") {
        iframe.contentWindow.document.querySelector(".container-btn").classList.add("text-center-desktop");   
    }
}

document.querySelector("#dd_align_mobile_btns").addEventListener("change", doAlignMobileBtns);

function doAlignMobileBtns() {
    let opt = document.querySelector("#dd_align_mobile_btns").value;
    if (opt==="0") {
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("text-center-mobile");
    }
    else if (opt==="1") {
        iframe.contentWindow.document.querySelector(".container-btn").classList.add("text-center-mobile"); 
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
        iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\/1920x1158-cafe-interior.jpg\" alt=\"Placeholder image\">\n\t<\/figure>");
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
            iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\t<figure>\n\t\t<img src=\"assets\/img\/1920x1158-cafe-interior.jpg\" alt=\"Placeholder image\">\n\t<\/figure>");        
            document.getElementById("vis_type_0").checked=true;
        }
    
        else if (selectedValue==="transparent") {
            iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\t<figure>\n\t\t<img src=\"assets\/img\/1920x1158-bag-brown.png\" alt=\"Placeholder image\">\n\t<\/figure>"); 
            document.getElementById("vis_type_1").checked=true;
        }

        else if (selectedValue==="illustrations") {
            iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\t<figure>\n\t\t<img src=\"assets\/img\/teamwork.png\" alt=\"Placeholder image\">\n\t<\/figure>"); 
            document.getElementById("vis_type_2").checked=true;
        }

    } // Ends pics branch

    else if ( (selectedValue==="vid-file") || (selectedValue==="vid-yt") ) {
        resetVisual();
        enableRBs();
        enableVisualWidth();
        disableImgProps();
        enableVidProps();
        disableVisualAlign();
        if (selectedValue==="vid-file") {
            iframe.contentWindow.document.querySelector("section p").insertAdjacentHTML("afterend", "\n\t\t<figure><div class=\"container-video-file\">\n\t\t\t<video controls>\n\t\t\t\t<source src=\"assets/videos/video-focal-center.mp4\" type=\"video\/mp4\">\n\t\t\t<\/video>\n\t\t</div></figurte>\n\t");
            document.getElementById("vis_type_3").checked=true;
        }

        else if (selectedValue==="vid-yt") {
            iframe.contentWindow.document.querySelector("section p").insertAdjacentHTML("afterend", "<figure>\n\t\t<div class=\"container-video-yt\">\n\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t<\/iframe>\n\t\t<\/div>\n\t</figure>");
            document.getElementById("vis_type_4").checked=true;
        }
     
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
//////////////// VISUAL ELEMENT WIDTH (811px AND ABOVE ) ///////////////
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

    if (!document.getElementById("cb_img_shadowsOn").checked) {
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

    if (!document.getElementById("cb_img_shadowsOn").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-corners-soft");
       
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-corners-soft");
    }
}

/*
//////////////// VISUAL PROPERTIES: VIDEO SHADOWS ///////////////
*/

/* Enable image shadows */
document.querySelector("#cb_vid_shadows").addEventListener("change", doVidShadows);

function doVidShadows() {

    if (!document.getElementById("cb_vid_shadowsOn").checked) {
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
    document.getElementById("cb_img_cornersOn").disabled=false;
    document.getElementById("cb_img_corners").checked=false;
    document.getElementById("cb_img_shadowsOn").disabled=false;
    document.getElementById("cb_img_shadows").checked=false;
}

function disableImgProps() {
    document.getElementById("cb_img_cornersOn").disabled=true;
    document.getElementById("cb_img_cornersOn").checked=false;
    document.getElementById("cb_img_shadowsOn").disabled=true;
    document.getElementById("cb_img_shadowsOn").checked=false;
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
}

// Video properties with labels
function enableVidProps() {
    document.getElementById("cb_vid_shadowsOn").disabled=false;
    document.getElementById("cb_vid_shadowsOn").checked=false;
}

function disableVidProps() {
    document.getElementById("cb_vid_shadowsOn").disabled=true;
    document.getElementById("cb_vid_shadowsOn").checked=false;
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
    if (iframe.contentWindow.document.querySelector('section figure')) {
        let el_content = document.querySelector('section');
        let el_fig = document.querySelector('section figure');
        el_content.removeChild(el_fig);
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
    strCSS = strCSS.replace(/,section/g, "section");
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

/*
//////////////// Responsive resizing icons in navbar ///////////////
*/

document.querySelector("#container-icon-resize-width").addEventListener("click", doResizeWidth);

function doResizeWidth() {
    let img = document.getElementById('img-icon-resize-width').src;

    // Not currently selected
    if (img.indexOf('assets/img/icons/icon-resize-unselected.png')!=-1) {
        document.getElementById('img-icon-resize-width').src = 'assets/img/icons/icon-resize-selected.png';
        showRespIcons();
    }

    // Is currently selected
    else {
       document.getElementById('img-icon-resize-width').src = 'assets/img/icons/icon-resize-unselected.png';
       hideRespIcons();
   }
}

function showRespIcons() {
    document.querySelector('.page-preview-options').classList.add("show-options");
}

function hideRespIcons() {
    document.querySelector('.page-preview-options').classList.remove("show-options");
}

const iconsResponsive = document.querySelectorAll('.icon_resize_respon');

iconsResponsive.forEach(icon => {
    icon.addEventListener('click', (e) => {
        // document.querySelector(icon).classList.remove("selected");
        // Get current icon id
        const iconId = e.currentTarget.id.toString();
        document.getElementById(iconId).classList.add("selected");
        resetResponsive();

        if (iconId==="respDesktopLarge") {
            document.getElementById("page-preview-body").classList.add("resp-desktop-large");
            document.querySelector("#respDesktopLarge img").src = "assets/img/icons/icon-resize-desktop-large.png";
        }

        else if (iconId==="respDesktopSmall") {
            document.getElementById("page-preview-body").classList.add("resp-desktop-small");
            document.querySelector("#respDesktopSmall img").src = "assets/img/icons/icon-resize-desktop-small.png";
        }

        else if (iconId==="respTabletLandscape") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-landscape");
            document.querySelector("#respTabletLandscape img").src = "assets/img/icons/icon-resize-tablet-landscape.png";
        }
        else if (iconId==="respTabletPortrait") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-portrait");
            document.querySelector("#respTabletPortrait img").src = "assets/img/icons/icon-resize-tablet-portrait.png";
        }        
        
        else if (iconId==="respMobileLarge") {
            document.getElementById("page-preview-body").classList.add("resp-mobile-large");
            document.querySelector("#respMobileLarge img").src = "assets/img/icons/icon-resize-mobile-large.png";
        }        

        else if (iconId==="respMobileSmall") {
            document.getElementById("page-preview-body").classList.add("resp-mobile-small")
            document.querySelector("#respMobileSmall img").src = "assets/img/icons/icon-resize-mobile-small.png";           
        }        
    });
});


function resetResponsive() {
    document.getElementById("page-preview-body").classList.remove("resp-desktop-large");
    document.getElementById("page-preview-body").classList.remove("resp-desktop-small");
    document.getElementById("page-preview-body").classList.remove("resp-tablet-landscape");
    document.getElementById("page-preview-body").classList.remove("resp-tablet-portrait");
    document.getElementById("page-preview-body").classList.remove("resp-mobile-large");
    document.getElementById("page-preview-body").classList.remove("resp-mobile-small");

    document.querySelector("#respDesktopLarge img").src = "assets/img/icons/icon-resize-desktop-large-selected.png";
    document.querySelector("#respDesktopSmall img").src = "assets/img/icons/icon-resize-desktop-small-selected.png";
    document.querySelector("#respTabletLandscape img").src = "assets/img/icons/icon-resize-tablet-landscape-selected.png";
    document.querySelector("#respTabletPortrait img").src = "assets/img/icons/icon-resize-tablet-portrait-selected.png";
    document.querySelector("#respMobileLarge img").src = "assets/img/icons/icon-resize-mobile-large-selected.png";  
    document.querySelector("#respMobileSmall img").src = "assets/img/icons/icon-resize-mobile-small-selected.png";  
}

}
