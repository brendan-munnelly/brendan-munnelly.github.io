/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// Deselect all

let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    // hide all
    let i;
    for (i = 1; i < 5; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    const modal = document.getElementById("myModal");
    const span = document.querySelector('#myModal .close-modal')
    hideSidebar();
    // modal.style.display = "none";
    // get id
    const str = event.target.id.toString();
    const id = str.charAt(str.length-1);
    const elItem_show = document.querySelector("#content-"+id);
    elItem_show.classList.remove("dropdown-hidden"); 

}));

// Hide menus when click on page
document.querySelector("#HTML-Content").addEventListener("click", hideMenus);

function hideMenus() {
    let i;
    for (i = 1; i < 5; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    const modal = document.getElementById("myModal");
    // modal.style.display = "none";
    hideSidebar();
}

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

/*
//////////////// SECTION: THEME  ///////////////
*/

document.querySelector("#switch-section-theme").addEventListener("change", doSectionTheme);

let section_theme;

function doSectionTheme() {
    hideMenus();
    const rbs = document.querySelectorAll("input[name='switch-one']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    // remove all styles
    var hs = document.querySelectorAll('style');
    for (var i=0, max = hs.length; i < max; i++) {
        hs[i].parentNode.removeChild(hs[i]);
    }

    document.querySelector("section").classList.remove("section-bg-gradient"); 
    document.querySelector("#bg_gradient_options").style.display='none';

    if (selectedValue==="light") {
        document.querySelector("section").classList.remove("theme-dark"); 
        document.querySelector("section").classList.add("theme-light"); 
    }
    else if (selectedValue==="dark") {
        document.querySelector("section").classList.remove("theme-light"); 
        document.querySelector("section").classList.add("theme-dark"); 
    }
    disableCSS();
}

/*
//////////////// SECTION: CLASS NAMES ///////////////
*/

let section_class = "section-style-1";
document.querySelector("#dd_className").addEventListener("change", doClassName);

function doClassName() {

    let opt = document.querySelector("#dd_className").value;
    const el_section = document.querySelector("section");

    if ( opt==="0") {
        removeClassNames();
        el_section.classList.add("section-style-1");
        section_class = "section-style-1";
    }
    
    else if ( opt==="1") {
        removeClassNames();
        el_section.classList.add("section-style-2");
        section_class = "section-style-2";
    }

    else if ( opt==="2") {
        removeClassNames();
        el_section.classList.add("section-style-3");
        section_class = "section-style-3";
    }

    else if ( opt==="3") {
        removeClassNames();
        el_section.classList.add("section-style-4");
        section_class = "section-style-4";
    }

    else if ( opt==="4") {
        removeClassNames();
        el_section.classList.add("section-style-5");
        section_class = "section-style-5";
    }

    else if ( opt==="5") {
        removeClassNames();
        el_section.classList.add("section-style-6");
        section_class = "section-style-6";
    }
}

function removeClassNames() {
    const el_section = document.querySelector("section");
    el_section.classList.remove("section-style-1");
    el_section.classList.remove("section-style-2");
    el_section.classList.remove("section-style-3");
    el_section.classList.remove("section-style-4");
    el_section.classList.remove("section-style-5");
    el_section.classList.remove("section-style-6");
}

/*
//////////////// SECTION: WIDTH  ///////////////
*/

document.querySelector("#dd_section_width").addEventListener("change", doTextWidth);
    
function doTextWidth() {
    let opt = document.querySelector("#dd_section_width").value;
    if (opt==="0") {
        document.querySelector("section").classList.remove("section-width-1024px");
        document.querySelector("section").classList.remove("section-width-1140px");
    }
    else if (opt==="1") {
        document.querySelector("section").classList.remove("section-width-1140px");
        document.querySelector("section").classList.add("section-width-1024px");
    }
    else if (opt==="2") {
        document.querySelector("section").classList.remove("section-width-1024px");
        document.querySelector("section").classList.add("section-width-1140px");
    }
}

/*
//////////////// SECTION: ALIGN ///////////////
*/

document.querySelector("#dd_align_desktop_section").addEventListener("change", doAlignDesktopSection);
    
function doAlignDesktopSection() {
    let opt = document.querySelector("#dd_align_desktop_section").value;
    if (opt==="0") {
        document.querySelector("#HTML-Content section").classList.remove("text-center-desktop");
        document.getElementById("dd_align_desktop_btns").disabled=false;
        document.getElementById("dd_align_desktop_btns").value="0";
    }

    else if (opt==="1") {
        document.querySelector("#HTML-Content section").classList.add("text-center-desktop"); 
        document.getElementById("dd_align_desktop_btns").value="1";
        document.getElementById("dd_align_desktop_btns").disabled=true;
    }
}

document.querySelector("#dd_align_mobile_section").addEventListener("change", doAlignMobileSection);

function doAlignMobileSection() {
    let opt = document.querySelector("#dd_align_mobile_section").value;
    if (opt==="0") {
        document.querySelector("#HTML-Content section").classList.remove("text-center-mobile");
        document.getElementById("dd_align_mobile_btns").disabled=false;
        document.getElementById("dd_align_mobile_btns").value="0";
    }
    else if (opt==="1") {
        document.querySelector("#HTML-Content section").classList.add("text-center-mobile"); 
        document.getElementById("dd_align_mobile_btns").value="1";
        document.getElementById("dd_align_mobile_btns").disabled=true;
    }
}

/*
//////////////// SIDE FLYOUT WITH COLOR PICKER  ///////////////
*/

function showSidebar() {
    document.querySelector("#myModal").classList.add("display-sidebar");
    document.querySelector("#myModal").classList.remove("hide-sidebar");
}

function hideSidebar() {
    document.querySelector("#myModal").classList.add("hide-sidebar");
    document.querySelector("#myModal").classList.remove("show-sidebar");
    document.querySelector("#myModal").scrollTo(0, 0);
}

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
            el_section.classList.remove("section-bg-gradient");
            // console.log("removed gradient");
            document.querySelector("#bg_gradient_options").style.display='none';
            document.querySelector("#btn_gradient_input_group").style.display='flex';
            document.querySelector("#content-1 .dialog-box hr").style.display='block';

            if ( arrCSS.some(e => e.includes("background-image:")) ) {
                // console.log("Already as style in HEAD");
                const arrPos = arrCSS.findIndex(e => e.includes(sub_string));
                arrCSS.splice(arrPos, 1);
                if (arrCSS.length==0) {
                    disableCSS();
                }
            }
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
            section_theme = "section."+section_class+".theme-light";
        }
        else if (document.querySelector("section.theme-dark")) {
            section_theme = "section."+section_class+".theme-dark";
        }

        /* Header background */
        if (btn_id === "btn_bg") {
            newStyle = section_theme+ " { background-color: var("+color_code+") }\n";
            sub_string = section_theme+ " { background-color: {";
            doUpdateArray(sub_string,newStyle);
        }

        else if (btn_id === "btn_gradient_from") {
            sub_string = "linear-gradient";
            let arrThree = doGradientSplit();
            let item_deg =  arrThree[0];
            let item_from = arrThree[1];
            let item_to =   arrThree[2];
            console.log("Old From Color: "+item_from);
            console.log("New From Color: "+color_code);
            newStyle = section_theme+".section-bg-gradient { background-image: linear-gradient("+item_deg+", var("+color_code+"), "+item_to+") } \n";
            doUpdateArray(sub_string,newStyle);
        }
        
        else if (btn_id === "btn_gradient_to") {
            sub_string = "linear-gradient";
            let arrThree = doGradientSplit();
            let item_deg =  arrThree[0];
            let item_from = arrThree[1];
            let item_to =   arrThree[2];
            console.log("Old To Color: "+item_to);
            console.log("New To Color: "+color_code);
            newStyle = section_theme+".section-bg-gradient { background-image: linear-gradient("+item_deg+", "+item_from+", var("+color_code+")) } \n";
            console.log(newStyle);
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
            sub_string = "h2";
            doUpdateArray(sub_string,newStyle);
        }

        /* Header h3 */
        else if (btn_id === "btn_subhead") {
            newStyle = section_theme+ " h3 { color: var("+color_code+") }\n";
            sub_string = "h3";
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
//////////////// SECTION: GRADIENT BACKGROUND ////////////////////
*/

document.querySelector("#btn_gradient").addEventListener("click", doBgGradient);

function doBgGradient() {
    if (document.querySelector("section.theme-light")) {
        section_theme = "section."+section_class+".theme-light";
    }
    else if (document.querySelector("section.theme-dark")) {
        section_theme = "section."+section_class+".theme-dark";
    }

    // Add default gradient
    const el_section = document.querySelector("section");
    el_section.classList.add("section-bg-gradient");
    // Show/hide gradient options
    document.querySelector("#bg_gradient_options").style.display='block';
    document.querySelector("#btn_gradient_input_group").style.display='none';
    document.querySelector("#content-1 .dialog-box hr").style.display='none';
       
    newStyle = section_theme+".section-bg-gradient { background-image: linear-gradient(var(--section-bg-gradient-deg), var(--section-bg-gradient-from-light), var(--section-bg-gradient-to-light)) } \n";

    sub_string = "linear-gradient";
    doUpdateArray(sub_string,newStyle);
    style = document.createElement('style');
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(newStyle));
    enableCSS();
}

function doGradientSplit() {
    sub_string = "linear-gradient";
    const arrPos =arrCSS.findIndex(e => e.includes(sub_string));
    let el_old_bg_value = arrCSS[arrPos];
    el_old_bg_value = el_old_bg_value.replace(section_theme+".section-bg-gradient { background-image: linear-gradient(", "");
    el_old_bg_value = el_old_bg_value.replace(")) }", ")")
    return el_old_bg_value.split(/[\s,]+/)
}

document.querySelector("#switch-bg-gradient").addEventListener("change", doDegGradient);

function doDegGradient() {
    const rbs = document.querySelectorAll("input[name='switch-gradient']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    console.log("Gradient direction: "+selectedValue);
    let arrThree = doGradientSplit();
    let item_deg =  arrThree[0];
    let item_from = arrThree[1];
    let item_to =   arrThree[2];
    console.log("Old Deg: "+item_deg);
    console.log("New Deg: "+selectedValue);
    newStyle = section_theme+".section-bg-gradient { background-image: linear-gradient("+selectedValue+", "+item_from+", "+item_to+") } \n";

    sub_string = "linear-gradient";
    // doUpdateArray(sub_string,newStyle);

    style = document.createElement('style');
    document.head.appendChild(style);
    style.appendChild(document.createTextNode(newStyle));
    enableCSS();
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
    else if (opt==="1") {
        removeTextAnimation();
        document.querySelector("#HTML-Content section").classList.add("slide-in-top");
    }
    else if (opt==="2") {
        removeTextAnimation();
        document.querySelector("#HTML-Content section").classList.add("slide-in-left");
    }
    else if (opt==="3") {
        removeTextAnimation();
        document.querySelector("#HTML-Content section").classList.add("slide-in-right");
    }
    else if (opt==="4") {
        removeTextAnimation();
        document.querySelector("#HTML-Content section").classList.add("slide-in-bottom");
    }
    else if (opt==="5") {
        removeTextAnimation();
        document.querySelector("#HTML-Content section").classList.add("fade-in");
    }
}

function removeTextAnimation() {
    document.querySelector("#HTML-Content section").classList.remove("slide-in-top");
    document.querySelector("#HTML-Content section").classList.remove("slide-in-left");
    document.querySelector("#HTML-Content section").classList.remove("slide-in-right");
    document.querySelector("#HTML-Content section").classList.remove("slide-in-bottom");
    document.querySelector("#HTML-Content section").classList.remove("fade-in");
}

/*
//////////////// COLOURS: ENABLE/DISABLE ///////////////
*/

function disableBgColor() {
    document.getElementById("btn_bg").disabled=true;
}

function enableBgColor() {
    document.getElementById("btn_bg").disabled=false;
}

function disableLabelColor() {
    document.getElementById("btn_upper_label").disabled=true;
}

function enableLabelColor() {
    document.getElementById("btn_upper_label").disabled=false;
}

/*
//////////////// SECTION TEXT: UPPER CATEGORY LABEL ABOVE H2 ///////////////
*/

document.querySelector("#dd_upperLabel").addEventListener("change", doUpperLabel);

function doUpperLabel() {
    const opt = document.querySelector("#dd_upperLabel").value;
    // remove
    if (opt==="0") {
        removeUpperLabel();
    }
    // add
    else if (opt==="1") {
        removeUpperLabel();
        document.querySelector("section > h2").insertAdjacentHTML("beforebegin", "<div class=\"container-upper-label\"><span>10% off all week<\/span><\/div>\n\n\t");
        enableLabelColor();
    }
}

function removeUpperLabel() {
    if (document.querySelector('.container-upper-label')) {
        const upperLabel = document.querySelector('.container-upper-label');
        upperLabel.remove();
        document.querySelector('section').innerHTML = document.querySelector('section').innerHTML.replace("\t\n\n", "");
        disableLabelColor();
        document.getElementById("dd_upperLabel").value="0";
    } 
}

/*
//////////////// SECTION TEXT: H2 HEADING LENGTH ///////////////
*/

document.querySelector("#dd_text_length_h2").addEventListener("change", doTextLength);
    
function doTextLength() {
    let opt = document.querySelector("#dd_text_length_h2").value;
    if (opt==="0") {
        document.querySelector("section h2").innerHTML = "Nice heading";
    }
    else if (opt==="1") {
        document.querySelector("section h2").innerHTML = "Sometimes a short heading is not enough and a longer one is needed.";
    }
}

/*
//////////////// SECTION TEXT: H3 SUB-HEADINGS ////////////////////
*/

document.querySelector("#dd_h3").addEventListener("change", doH3);

function doH3() {
    let opt = document.querySelector("#dd_h3").value;
    let para_nos  = 3;

    if (opt==="0") {
        removeH3();
        document.getElementById("btn_subhead").disabled=true;
    }
       
    else {
        removeH3();
        for (let i=2; i <= (para_nos); i++) {
            document.querySelector("section p:nth-of-type("+i+")").insertAdjacentHTML("beforebegin", assets_header_h3);
            document.getElementById("btn_subhead").disabled=false;
        }
    }    
}

function removeH3() {
    if (document.querySelector("section h3")) {
        const elH3 = document.querySelectorAll("section h3");
        for (var i = 0 ; i < elH3.length ; i++) {
            elH3[i].remove();
        }
    }
}

/*
//////////////// SECTION TEXT: DECKHEAD / STANDFIRST ///////////////
*/

document.querySelector("#dd_standfirst").addEventListener("change", doStandFirst);

function doStandFirst() {
    let opt = document.querySelector("#dd_standfirst").value;
    const el_sf = document.querySelector('section p:nth-of-type(1)');
    if (opt==="0") {
       el_sf.classList.remove("standfirst");
    }

    else if (opt==="1") {
       el_sf.classList.add("standfirst");
    }
}

/*
//////////////// SECTION TEXT: LISTS  ///////////////
*/

document.querySelector("#dd_lists").addEventListener("change", doLists);

    function doLists() {
        let opt = document.querySelector("#dd_lists").value;

        if (opt==="0") {
            removeLists();
        }

        else if (opt==="1") {
            removeLists();
            document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", content_ul_short);
        }

        else if (opt==="2") {
            removeLists();
            document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", content_ul_long);
        }
    }

    function removeLists() {
        if (document.querySelector("section ul")) {
            const elUL = document.querySelectorAll("section ul");
            for (var i = 0 ; i < elUL.length ; i++) {
                elUL[i].remove();
            }
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
//////////////// VISUAL ELEMENT INSIDE SINGLE-COLOUMN LAYOUT ///////////////
*/

/* Enable visual */
document.querySelector("#dd_yn_vis").addEventListener("change",checkVis);

function checkVis() {
    let opt = document.querySelector("#dd_yn_vis").value;
    if (opt==="1") { enableVis() }
    else if (opt==="0") { disablsAllVisProps() }
}

function enableVis() {
    // Enable all radio options
    document.getElementById("vis_type_0").disabled=false;
    document.getElementById("vis_type_1").disabled=false;
    document.getElementById("vis_type_2").disabled=false;
    document.getElementById("vis_type_3").disabled=false;
    document.getElementById("vis_type_4").disabled=false;

    //Enable visual width
    document.getElementById("dd_yn_vis_width").disabled=false;
    enableImgProps();
    disableVidProps();

    // Select first (picture) radio button
    document.getElementById("vis_type_0").checked=true;

    // Add picture
    document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\/1920x1158-cafe-interior.jpg\" alt=\"Placeholder image\">\n\t<\/figure>\n");
}

function disablsAllVisProps() {
    // Disable all radio options
    document.getElementById("vis_type_0").disabled=true;
    document.getElementById("vis_type_1").disabled=true;
    document.getElementById("vis_type_2").disabled=true;
    document.getElementById("vis_type_3").disabled=true;
    document.getElementById("vis_type_4").disabled=true;

    // Disable visual width
    document.getElementById("dd_yn_vis_width").disabled=true;
    document.getElementById("dd_yn_vis_width").value="0";

    document.getElementById("vis_type_0").checked=true;
    disableImgProps();
    disableVidProps();
    // Remove image or video
    if ((document.querySelector('figure')) && (document.querySelector("#dd_yn_vis").value)==="0") {
        let section_block = document.querySelector('section');
        let section_figure = document.querySelector('section figure');
        section_block.removeChild(section_figure);
    }
}

function disableImgProps() {
    // Disable image options
    document.getElementById("dd_image_corners").disabled=true;
    document.getElementById("dd_image_shadows").disabled=true;
    document.getElementById("dd_image_borders").disabled=true;
    const el_label_1 = document.querySelector("#label_img_shadows");
    const el_label_2 = document.querySelector("#label_img_borders");
    const el_label_3 = document.querySelector("#label_img_corners");
    el_label_1.classList.add('disabled-gray');
    el_label_2.classList.add('disabled-gray');
    el_label_3.classList.add('disabled-gray');
}

function enableImgProps() {
    // Disable image options
    document.getElementById("dd_image_corners").disabled=false;
    document.getElementById("dd_image_shadows").disabled=false;
    document.getElementById("dd_image_borders").disabled=false;
    const el_label_1 = document.querySelector("#label_img_shadows");
    const el_label_2 = document.querySelector("#label_img_borders");
    const el_label_3 = document.querySelector("#label_img_corners");
    el_label_1.classList.remove('disabled-gray');
    el_label_2.classList.remove('disabled-gray');
    el_label_3.classList.remove('disabled-gray');
}

function disableVidProps() {
    // Disable video options
    document.getElementById("dd_vid_borders").disabled=true;
    document.getElementById("dd_vid_shadows").disabled=true;
    const el_label_1 = document.querySelector("#label_vid_shadows");
    const el_label_2 = document.querySelector("#label_vid_borders");
    el_label_1.classList.add('disabled-gray');
    el_label_2.classList.add('disabled-gray');

}

function enableVidProps() {
    // Disable video options
    document.getElementById("dd_vid_borders").disabled=false;
    document.getElementById("dd_vid_shadows").disabled=false;
    const el_label_1 = document.querySelector("#label_vid_shadows");
    const el_label_2 = document.querySelector("#label_vid_borders");
    el_label_1.classList.remove('disabled-gray');
    el_label_2.classList.remove('disabled-gray');
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
            resetVisualEffects();
        }

        if (selectedValue==="pictures") {
            removeVisual();
            resetVisualEffects();
            disableVidProps();
            document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\/1920x1158-cafe-interior.jpg\" alt=\"Placeholder image\">\n\t<\/figure>\n");        
            document.getElementById("dd_image_shadows").disabled=false;
            document.getElementById("dd_image_borders").disabled=false;
            document.getElementById("dd_image_corners").disabled=false;
            document.getElementById("dd_image_shadows").value="0";
            document.getElementById("dd_image_borders").value="0";
            document.getElementById("dd_image_corners").value="0";
            document.getElementById("vis_type_0").checked=true;
        }

        else if (selectedValue==="transparent") {
            removeVisual();
            resetVisualEffects();
            disableVidProps();
            document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\/1920x1158-bag-brown.png\" alt=\"Placeholder image\">\n\t<\/figure>\n"); 
            document.getElementById("dd_image_shadows").disabled=false;
            document.getElementById("dd_image_borders").disabled=false;
            document.getElementById("dd_image_corners").disabled=false;
            document.getElementById("dd_image_shadows").value="0";
            document.getElementById("dd_image_borders").value="0";
            document.getElementById("dd_image_corners").value="0";
            document.getElementById("vis_type_1").checked=true;
        }

        else if (selectedValue==="illustrations") {
            removeVisual();
            resetVisualEffects();
            disableVidProps();

            document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\/1920x1158-drawing.png\" alt=\"Placeholder image\">\n\t<\/figure>\n"); 
            document.getElementById("dd_image_shadows").disabled=false;
            document.getElementById("dd_image_borders").disabled=false;
            document.getElementById("dd_image_corners").disabled=false;
            document.getElementById("dd_image_shadows").value="0";
            document.getElementById("dd_image_borders").value="0";
            document.getElementById("dd_image_corners").value="0";
            document.getElementById("vis_type_2").checked=true;
        }

        else if (selectedValue==="vid-file") {
            removeVisual();
            resetVisualEffects();
            disableImgProps();
            enableVidProps();
            document.querySelector("section p").insertAdjacentHTML("afterend", "\n\t\t<figure><div class=\"container-video-file\">\n\t\t\t<video controls>\n\t\t\t\t<source src=\"assets/videos/video-focal-center.mp4\" type=\"video\/mp4\">\n\t\t\t<\/video>\n\t\t</div></figurte>\n\t");
            document.getElementById("vis_type_3").checked=true;
        }

        else if (selectedValue==="vid-yt") {
            removeVisual();
            resetVisualEffects();
            disableImgProps();
            enableVidProps();
            document.querySelector("section p").insertAdjacentHTML("afterend", "<figure>\n\t\t<div class=\"container-video-yt\">\n\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t<\/iframe>\n\t\t<\/div>\n\t</figure>");
            document.getElementById("vis_type_4").checked=true;
        }
    }
}

function resetVisualEffects() {
    document.getElementById("dd_image_shadows").value="0";
    document.getElementById("dd_image_borders").value="0";
    document.getElementById("dd_image_shadows").value="0";
    document.getElementById("dd_vid_borders").value="0";
    document.getElementById("dd_vid_shadows").value="0";
    removeFigShadows();
    removeFigBorders();
    const el_section = document.querySelector("section");
    el_section.classList.remove("figure-width-50");
    el_section.classList.remove("figure-width-100");
    document.getElementById("dd_yn_vis_width").value="0";
}

function removeVisual() {
    const parentNode = document.querySelector("#HTML-Content");
    var element_img = Array.prototype.slice.call(document.getElementsByTagName("figure"),0); 
    for (var index = 0, len = element_img.length; index < len; index++) {
        element_img[index].parentNode.removeChild(element_img[index]);
    }

    if (document.querySelector('figure')) {
        let hero_block = document.querySelector('.hero-block');
        let hero_figure = document.querySelector('.hero-block figure');
        hero_block.removeChild(hero_figure);
    }

    document.getElementById("dd_image_corners").disabled=true;
    document.getElementById("dd_image_shadows").disabled=true;
    document.getElementById("dd_image_borders").disabled=true;
    document.getElementById("dd_vid_shadows").disabled=true;
    document.getElementById("dd_vid_borders").disabled=true;
    document.getElementById("vis_type_0").checked=true;
}

/*
//////////////// VISUAL PROPERTIES ///////////////
*/

document.querySelector("#dd_image_corners").addEventListener("change", doImageCorners);

function doImageCorners() {
    let opt = document.querySelector("#dd_image_corners").value;

    if (opt==="0") {
        removeImageCorners();
    }

    else if (opt==="1") {
        const el_fig = document.querySelector('section figure img');
        el_fig.classList.add("corners-soft");
    }
}

function removeImageCorners() {
    const el_fig = document.querySelector('section figure img');
    el_fig.classList.remove("corners-soft");
}

document.querySelector("#dd_image_shadows").addEventListener("change", doImageShadows);

function doImageShadows() {
    let opt = document.querySelector("#dd_image_shadows").value;
    // Remove image shadow
    if (opt==="0") {
        removeFigShadows();
    }

    // Add image shadow
    else if (opt==="1") {
        const el_fig = document.querySelector('figure');
        el_fig.classList.add("figure-shadow");
    }
}

document.querySelector("#dd_vid_shadows").addEventListener("change", doVidShadows);

function doVidShadows() {
    let opt = document.querySelector("#dd_vid_shadows").value;
    // Remove video shadow
    if (opt==="0") {
        removeFigShadows();
    }

    // Add video shadow
    else if (opt==="1") {
        const el_fig = document.querySelector('figure');
        el_fig.classList.add("figure-shadow");
    }
}

function removeFigShadows() {
    if (document.querySelector('figure')) {
        const el_fig = document.querySelector('figure');
        el_fig.classList.remove("figure-shadow");
    }
}

document.querySelector("#dd_image_borders").addEventListener("change", doImageBorders);

function doImageBorders() {
    let opt = document.querySelector("#dd_image_borders").value;

    if (opt==="0") {
        removeFigBorders();
    }

    // Add image border
    else if (opt==="1") {
        const el_fig = document.querySelector('figure img');
        el_fig.classList.add("figure-border");
    }
}

document.querySelector("#dd_vid_borders").addEventListener("change", doVidBorders);

function doVidBorders() {
    let opt = document.querySelector("#dd_vid_borders").value;

    if (opt==="0") {
        if (document.querySelector('.container-video-yt')) {
            const el_yt = document.querySelector('container-video-yt');
            el_yt.classList.remove("figure-border");
        }
        else {
            const el_vid = document.querySelector('video');
            el_vid.classList.remove("figure-border");
        }
    }

    // Add video border
    else if (opt==="1") {
        if (document.querySelector('.container-video-yt')) {
            const el_yt = document.querySelector('.container-video-yt');
            el_yt.classList.add("figure-border");
        }
        else {
            const el_vid = document.querySelector('video');
            el_vid.classList.add("figure-border");
        }
    }
}

function removeFigBorders() {
    if (document.querySelector('figure')) {
        const el_fig = document.querySelector('figure');
        el_fig.classList.remove("figure-border");
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
    }
    // 50%
    else if (opt==="1") {
        el_section_fig.classList.remove("figure-width-50");
        el_section_fig.classList.add("figure-width-80");
    }
    // 50%
    else if (opt==="2") {
        el_section_fig.classList.remove("figure-width-80");
        el_section_fig.classList.add("figure-width-50");
    }
}


/* ================ DIALOG BOXES =================== */

// Make dialog boxes element draggable:

if (document.getElementById("content-1")) {
    dragElement(document.getElementById("content-1"));
}

if (document.getElementById("content-2")) {
    dragElement(document.getElementById("content-2"));
}
if (document.getElementById("content-3")) {
    dragElement(document.getElementById("content-3"));
}
if (document.getElementById("content-4")) {
    dragElement(document.getElementById("content-4"));
}
if (document.getElementById("content-5")) {
    dragElement(document.getElementById("content-5"));
}

if (document.getElementById("content-6")) {
    dragElement(document.getElementById("content-6"));
}

if (document.getElementById("content-7")) {
    dragElement(document.getElementById("content-7"));
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

if (document.querySelector("#content-1 .dialog-box-header")) {
    document.querySelector("#content-1 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-2 .dialog-box-header")) {
    document.querySelector("#content-2 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}
if (document.querySelector("#content-3 .dialog-box-header")) {
    document.querySelector("#content-3 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}
if (document.querySelector("#content-4 .dialog-box-header")) {
    document.querySelector("#content-4 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-5 .dialog-box-header")) {
    document.querySelector("#content-5 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-6 .dialog-box-header")) {
    document.querySelector("#content-6 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-7 .dialog-box-header")) {
    document.querySelector("#content-7 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

function hideDialogBox() {
    document.querySelector("#content-1").classList.add("dropdown-hidden"); 
    document.querySelector("#content-2").classList.add("dropdown-hidden"); 
    document.querySelector("#content-3").classList.add("dropdown-hidden"); 
    document.querySelector("#content-4").classList.add("dropdown-hidden"); 
    const modal = document.getElementById("myModal");
    // modal.style.display = "none";
    hideSidebar();
    disableTransColCode();
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
    // removeEmptyNodes();
    const HTML_Content = document.getElementById("HTML-Content").innerHTML;
    const el = document.createElement('textarea');
    el.value = HTML_Content;
    hideMenus();

    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el); 
}

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
    // console.log(strCSS);
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