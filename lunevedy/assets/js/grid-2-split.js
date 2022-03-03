
/*
//////////////// SECTION: COLUMN ORDER ////////////////////
*/

document.querySelector("#switch-col-visual-desktop").addEventListener("change", doColOrderDesktop);

function doColOrderDesktop() {
    const rbs = document.querySelectorAll("input[name='col-visual-desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    console.log("selectedValue: "+selectedValue);

    if (selectedValue==="col-visual-right") {
        document.querySelector("section").classList.remove("split-image-left");
        document.querySelector("section").classList.add("split-image-right");
    }
    else if (selectedValue==="col-visual-left") {
        document.querySelector("section").classList.remove("split-image-right");
        document.querySelector("section").classList.add("split-image-left");
    }
}

/*
//////////////// HEADER COLOURS ///////////////
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
            console.log("sub_string: "+sub_string);
        }

        // else if (btn_id === "btn_gradient_from") {
        //     sub_string = "linear-gradient";
        //     let arrThree = doGradientSplit();
        //     let item_deg =  arrThree[0];
        //     let item_from = arrThree[1];
        //     let item_to =   arrThree[2];
        //     console.log("Old From Color: "+item_from);
        //     console.log("New From Color: "+color_code);
        //     newStyle = section_theme+".section-bg-gradient { background-image: linear-gradient("+item_deg+", var("+color_code+"), "+item_to+") } \n";
        //     doUpdateArray(sub_string,newStyle);
        // }
        
        // else if (btn_id === "btn_gradient_to") {
        //     sub_string = "linear-gradient";
        //     let arrThree = doGradientSplit();
        //     let item_deg =  arrThree[0];
        //     let item_from = arrThree[1];
        //     let item_to =   arrThree[2];
        //     console.log("Old To Color: "+item_to);
        //     console.log("New To Color: "+color_code);
        //     newStyle = section_theme+".section-bg-gradient { background-image: linear-gradient("+item_deg+", "+item_from+", var("+color_code+")) } \n";
        //     console.log(newStyle);
        //     doUpdateArray(sub_string,newStyle);
        // }

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
        console.log("Includes background-color sub-string")
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

// document.querySelector("#btn_gradient").addEventListener("click", doBgGradient);

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
    // document.querySelector("#btn_gradient_input_group").style.display='none';
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

        if (document.querySelector("#HTML-Content section.split-image-right")) {
            // Image at right
            document.querySelector("#HTML-Content section figure").classList.add("slide-in-right");
            // All else at left
            if (document.querySelector("#HTML-Content section .container-upper-label")) {
                document.querySelector("#HTML-Content section .container-upper-label").classList.add("slide-in-left");
            }
            document.querySelector("#HTML-Content section h2").classList.add("slide-in-left");
            if (document.querySelector("#HTML-Content section h3")) {
                document.querySelector("#HTML-Content section h3").classList.add("slide-in-left");
            }
            let paras = document.querySelectorAll("#HTML-Content section p");
            for (i = 0; i < paras.length; ++i) {
                paras[i].classList.add("slide-in-left")
            }
            if (document.querySelector("#HTML-Content section ul")) {
                document.querySelector("#HTML-Content section ul").classList.add("slide-in-left");
            }
            if (document.querySelector("#HTML-Content section .container-btn")) {
                document.querySelector("#HTML-Content section .container-btn").classList.add("slide-in-left");
            }
        }

        else if (document.querySelector("#HTML-Content section.split-image-left")) {
            // Image at left
            document.querySelector("#HTML-Content section figure").classList.add("slide-in-left");
            // All else at right
            if (document.querySelector("#HTML-Content section .container-upper-label")) {
                document.querySelector("#HTML-Content section .container-upper-label").classList.add("slide-in-right");
            }
            document.querySelector("#HTML-Content section h2").classList.add("slide-in-right");
            if (document.querySelector("#HTML-Content section h3")) {
                document.querySelector("#HTML-Content section h3").classList.add("slide-in-right");
            }
            let paras = document.querySelectorAll("#HTML-Content section p");
            for (i = 0; i < paras.length; ++i) {
                paras[i].classList.add("slide-in-right")
            }
            if (document.querySelector("#HTML-Content section ul")) {
                document.querySelector("#HTML-Content section ul").classList.add("slide-in-right");
            }
            if (document.querySelector("#HTML-Content section .container-btn")) {
                document.querySelector("#HTML-Content section .container-btn").classList.add("slide-in-right");
            }
        }
    }

    else {

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
    document.querySelector("label[for='dd_text_slide']").style.color = "#fff";
}

function removeTextAnimation() {
    if (document.querySelector("#HTML-Content section .container-upper-label")) {
        document.querySelector("#HTML-Content section .container-upper-label").removeAttribute("class");
    }

    document.querySelector("#HTML-Content section h2").removeAttribute("class");

    if (document.querySelector("#HTML-Content section h3")) {
        document.querySelector("#HTML-Content section h3").removeAttribute("class");
    }

    let paras = document.querySelectorAll("#HTML-Content section p");
    for (i = 0; i < paras.length; ++i) {
        paras[i].removeAttribute("class");
    }

    if (document.querySelector("#HTML-Content section ul")) {
        document.querySelector("#HTML-Content section ul").removeAttribute("class");
    }

    if (document.querySelector("#HTML-Content section figure")) {
        document.querySelector("#HTML-Content section figure").removeAttribute("class");
    }

    if (document.querySelector("#HTML-Content section .container-btn")) {
        document.querySelector("#HTML-Content section .container-btn").classList.remove("slide-in-top");
        document.querySelector("#HTML-Content section .container-btn").classList.remove("slide-in-bottom");
        document.querySelector("#HTML-Content section .container-btn").classList.remove("slide-in-left");
        document.querySelector("#HTML-Content section .container-btn").classList.remove("slide-in-right");
        document.querySelector("#HTML-Content section .container-btn").classList.remove("fade-in");
    }
    document.querySelector("label[for='dd_text_slide']").style.color = "var(--gray-500)";
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


/*
//////////////// TEXT: LISTS  ///////////////
*/

document.querySelector("#switch-col-list").addEventListener("change", doLists);

function doLists() {
    const rbs = document.querySelectorAll("input[name='col-list-type']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="list-none") {
        removeLists();
        // Restore second paragraph
        if (document.querySelector('.cols-2-split .col-2 > h3')) {
            document.querySelector(".cols-2-split .col-2 > h3").insertAdjacentHTML("afterend", content_paras_2);
        }
        else {
            document.querySelector(".cols-2-split .col-2 > p:nth-of-type(1)").insertAdjacentHTML("afterend", content_paras_2);
        }
    }

    else if (selectedValue==="list-short") {
        removeLists();
        // Remove last paragraph.
        if (document.querySelector('.cols-2-split .col-2 > p:nth-of-type(2)')) {
            document.querySelector('.cols-2-split .col-2 > p:nth-of-type(2)').remove();
        }

        // Add short list after h3 or first paragraph.
        if (document.querySelector('.cols-2-split .col-2 > h3')) {
            document.querySelector(".cols-2-split .col-2 > h3").insertAdjacentHTML("afterend", content_ul_short);
        }
        else {
            document.querySelector(".cols-2-split .col-2 > p:nth-of-type(1)").insertAdjacentHTML("afterend", content_ul_short);
        }
        document.querySelector("label[for='switch-col-list']").style.color = "#fff";
    }

    else if (selectedValue==="list-long") {
        removeLists();
        // Remove last paragraph.
        if (document.querySelector('.cols-2-split .col-2 > p:nth-of-type(2)')) {
            document.querySelector('.cols-2-split .col-2 > p:nth-of-type(2)').remove();
        }
        // Add short list after h3 or first paragraph.
        if (document.querySelector('.cols-2-split .col-2 > h3')) {
            document.querySelector(".cols-2-split .col-2 > h3").insertAdjacentHTML("afterend", content_ul_long);
        }
        else {
            document.querySelector(".cols-2-split .col-2 > p:nth-of-type(1)").insertAdjacentHTML("afterend", content_ul_long);
        }
        document.querySelector("label[for='switch-col-list']").style.color = "#fff";
    }
}

function removeLists() {
   if (document.querySelector(".cols-2-split .col-2 ul")) {
        document.querySelector(".cols-2-split .col-2 ul").remove();
    }
    document.querySelector("label[for='switch-col-list']").style.color = "var(--gray-500)";
}

/*
//////////////// BUTTONS: SPLIT TEXT AND IMAGE ////////////////////
*/

document.querySelector("#dd_buttons_split").addEventListener("change", doButtonsSplit);

    function doButtonsSplit() {
        let opt = document.querySelector("#dd_buttons_split").value;

        if (opt==="0") {
            removeButtonsSplit();
            disableAllButtons();
        }
       
        // one button
        else if (opt==="1") {
            removeButtonsSplit();
            enablePrimaryButtons();
            disableSecondaryButtons();
            if (document.querySelector(".col-2:nth-child(1) ul")) {
                document.querySelector(".col-2:nth-child(1) ul").insertAdjacentHTML("afterend", content_button_one);            
            }
            else {
                document.querySelector(".col-2:nth-child(1) p:last-of-type").insertAdjacentHTML("afterend", content_button_one);
            }
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=false;
            document.getElementById("dd_buttons_icon").disabled=false;
        }
        // two buttons
        else if (opt==="2") {
            removeButtonsSplit();
            enableAllButtons();

            if (document.querySelector(".col-2:nth-child(1) ul")) {
                document.querySelector(".col-2:nth-child(1) ul").insertAdjacentHTML("afterend", content_button_two);            
            }
            else {
                document.querySelector(".col-2:nth-child(1) p:last-of-type").insertAdjacentHTML("afterend", content_button_two);
            }
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=false;
            document.getElementById("dd_buttons_icon").disabled=false;
        }
    }

    function removeButtonsSplit() {
        if (document.querySelector("section .container-btn")) {
            const elBtn = document.querySelector("section .container-btn");
            elBtn.remove();
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=true;
            document.getElementById("dd_buttons_icon").value="0";
            document.getElementById("dd_buttons_icon").disabled=true;
        }
    }

    function removeSectionButtons() {
        const elements = document.getElementsByClassName("container-btn");
        while(elements.length > 0){
            elements[0].parentNode.removeChild(elements[0]);
        }
        document.getElementById("dd_buttons_icon").disabled=true;
        document.getElementById("dd_buttons_style").disabled=true;
    }
    
    function enableAllButtons() {
        document.getElementById("dd_buttons_icon").disabled=false;
        document.getElementById("btn_upper_label").disabled=false;
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
        document.getElementById("btn_upper_label").disabled=false;
        document.getElementById("btn_a_primary_passive_text").disabled=false;
        document.getElementById("btn_a_primary_active_text").disabled=false;
        document.getElementById("btn_a_primary_passive_bg").disabled=false;
        document.getElementById("btn_a_primary_active_bg").disabled=false;
        document.getElementById("btn_a_primary_passive_border").disabled=false;
        document.getElementById("btn_a_primary_active_border").disabled=false;
    }
    
    function enableSecondaryButtons() {
        document.getElementById("dd_buttons_icon").disabled=false;
        document.getElementById("btn_upper_label").disabled=false;
        document.getElementById("btn_a_secondary_passive_text").disabled=false;
        document.getElementById("btn_a_secondary_active_text").disabled=false;
        document.getElementById("btn_a_secondary_passive_bg").disabled=false;
        document.getElementById("btn_a_secondary_active_bg").disabled=false;
        document.getElementById("btn_a_secondary_passive_border").disabled=false;
        document.getElementById("btn_a_secondary_active_border").disabled=true;        
    }
    
    function disableAllButtons() {
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_icon").value="0";
        document.getElementById("dd_buttons_icon").disabled=true;
        document.getElementById("btn_upper_label").disabled=true;
    
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
            el_btn_primary.classList.add("btn-rounded");
        }

        if (document.querySelector(".btn-secondary")) {
            const el_btn_secondary = document.querySelector("a.btn-secondary");
            el_btn_secondary.classList.add("btn-rounded");
        }
    }
}

function removeButtonsStyle() {

    if (document.querySelector(".btn-primary")) {
        const el_btn_primary = document.querySelector("a.btn-primary");
        el_btn_primary.classList.remove("btn-soft");
        el_btn_primary.classList.remove("btn-rounded");
    }

    if (document.querySelector(".btn-secondary")) {
        const el_btn_secondary = document.querySelector("a.btn-secondary");
        el_btn_secondary.classList.remove("btn-soft");
        el_btn_secondary.classList.remove("btn-rounded");
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
    
    let col_fig = document.querySelector('#HTML-Content section .col-2:nth-of-type(2)');

    if ( (selectedValue==="pictures") || (selectedValue==="transparent") || (selectedValue==="illustrations") ) {
        removeVisual();
        disableVidProps();
        enableImgProps();

        let child_obj = document.createElement("figure");

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

        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_shadows").value="0";
        document.getElementById("dd_image_corners").value="0";
    }

    else if ( (selectedValue==="vid-file") || (selectedValue==="vid-yt") ) {
        removeVisual();
        disableImgProps();
        enableVidProps();

        let child_obj = document.createElement("figure");

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
        document.getElementById("dd_image_shadows").value="0";
        document.getElementById("dd_image_corners").value="0";
        document.getElementById("dd_image_shadows").value="0";
        document.getElementById("dd_image_corners").value="0";
    }  
}

/*
//////////////// VISUAL PROPERTIES ///////////////
*/

document.querySelector("#dd_image_corners").addEventListener("change", doImageCorners);

function doImageCorners() {
    let opt = document.querySelector("#dd_image_corners").value;

    if (document.querySelector('section figure')) {
        // Remove figure shadow
        if (opt==="0") {
            document.querySelector('section').classList.remove("fig-corners-soft");
        }
        // Add figure shadow
        else if (opt==="1") {
            document.querySelector('section').classList.add("fig-corners-soft");
        }
    }
}

/* =========== VISUAL SHADOWS ============ */

document.querySelector("#dd_image_shadows").addEventListener("change", doImageShadows);

function doImageShadows() {

    let opt = document.querySelector("#dd_image_shadows").value;

    if (document.querySelector('section figure')) {
        // Remove figure shadow
        if (opt==="0") {
            document.querySelector('section').classList.remove("fig-shadow");
        }
        // Add figure shadow
        else if (opt==="1") {
            document.querySelector('section').classList.add("fig-shadow");
        }
    }
}

document.querySelector("#dd_vid_shadows").addEventListener("change", doVidShadows);

function doVidShadows() {

    if (document.querySelector('section figure')) {
        let opt = document.querySelector("#dd_vid_shadows").value;
        // Remove figure shadow
        if (opt==="0") {
            document.querySelector('section').classList.remove("fig-shadow");
        }
        // Add figure shadow
        else if (opt==="1") {
            document.querySelector('section').classList.add("fig-shadow");
        }
    }
}

function disableImgProps() {
    // Disable image options
    document.getElementById("dd_image_corners").disabled=true;
    document.getElementById("dd_image_shadows").disabled=true;
    document.querySelector("label[for='dd_image_corners']").style.color = "var(--gray-500)";
    document.querySelector("label[for='dd_image_shadows']").style.color = "var(--gray-500)";
}

function enableImgProps() {
    // Disable image options
    document.getElementById("dd_image_corners").disabled=false;
    document.getElementById("dd_image_shadows").disabled=false;
    document.querySelector("label[for='dd_image_corners']").style.color = "#fff";
    document.querySelector("label[for='dd_image_shadows']").style.color = "#fff";
}

function disableVidProps() {
    // Disable video options
    document.getElementById("dd_vid_shadows").disabled=true;
    document.querySelector("label[for='dd_vid_shadows']").style.color = "var(--gray-500)";
}

function enableVidProps() {
    // Disable video options
    document.getElementById("dd_vid_shadows").disabled=false;
    document.querySelector("label[for='dd_vid_shadows']").style.color = "#fff";
}

function removeVisual() {
    if (document.querySelector('section figure')) {
        document.querySelector('section figure').remove();
        disableImgProps();
        disableVidProps();
    }
}



