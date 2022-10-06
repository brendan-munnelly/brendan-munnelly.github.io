import {content_header_label_text_col_1, content_h3, content_list} from '../js/arr-content.js';

/*
//////////////// SECTION: COLUMN ORDER ////////////////////
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

    let flexparent = iframe.contentWindow.document.querySelector("section");
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

    let flexparent = iframe.contentWindow.document.querySelector("section");
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
    let elColVis = iframe.contentWindow.document.querySelector("section .col-2.col-visual");
    
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
    let elColVis = iframe.contentWindow.document.querySelector("section .col-2.col-visual");
    
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
            iframe.contentWindow.document.querySelector("section figure").classList.add("slide-in-right");
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
            if (iframe.contentWindow.document.querySelector("section .container-btn")) {
                iframe.contentWindow.document.querySelector("section .container-btn").classList.add("slide-in-left");
            }
        }

        else if (iframe.contentWindow.document.querySelector("section.split-image-left")) {
            // Image at left
            iframe.contentWindow.document.querySelector("section figure").classList.add("slide-in-left");
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
            if (iframe.contentWindow.document.querySelector("section .container-btn")) {
                iframe.contentWindow.document.querySelector("section .container-btn").classList.add("slide-in-right");
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
        
        if (iframe.contentWindow.document.querySelector("section figure")) {
            iframe.contentWindow.document.querySelector("section figure").classList.add(animationType);
        }
        
        if (iframe.contentWindow.document.querySelector("section .container-btn")) {
            iframe.contentWindow.document.querySelector("section .container-btn").classList.add(animationType);
        }
    }
    document.querySelector("label[for='dd_text_slide']").style.color = "#fff";
}

function removeTextAnimation() {
    if (iframe.contentWindow.document.querySelector(".container-upper-label")) {
        iframe.contentWindow.document.querySelector(".container-upper-label").removeAttribute("class");
    }

    iframe.contentWindow.document.querySelector("section h2").removeAttribute("class");

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

    if (iframe.contentWindow.document.querySelector("section figure")) {
        iframe.contentWindow.document.querySelector("section figure").removeAttribute("class");
    }

    if (iframe.contentWindow.document.querySelector("section .container-btn")) {
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-top");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-bottom");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-left");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("slide-in-right");
        iframe.contentWindow.document.querySelector("section .container-btn").classList.remove("fade-in");
    }
}


/*
//////////////// BADGE ABOVE H2 ///////////////
*/

document.querySelector("#cb_badge").addEventListener("change", doBadge);

function doBadge() {

    if (!document.getElementById("cb_badge").checked) {
        removeBadge();
    }
    
    else {
        removeBadge();
        const newUpperLabelDiv = document.createElement("div");
        newUpperLabelDiv.classList.add("badge"); 
        iframe.contentWindow.document.querySelector('section .col-2.col-text').prepend(newUpperLabelDiv);
        iframe.contentWindow.document.querySelector('section .col-2.col-text .badge').innerText = content_header_label_text_col_1;
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace("<div class=\"badge\">", "\n\t\t\t<div class=\"badge\">");
        document.getElementById("show-badge").style.display="flex";
    }
}

document.querySelector("#form_badge_shape").addEventListener("change", doBadgeShape);

function doBadgeShape() {
    const objTextBox = iframe.contentWindow.document.querySelector("section .col-2.col-text .badge"); 
    const rbs = document.querySelectorAll("input[name='switch_badge_shape']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="square") {
        objTextBox.classList.remove("corners-soft");
    }
        
    else if (selectedValue==="soft") {
        objTextBox.classList.add("corners-soft");
    }
}

function removeBadge() {
    if (iframe.contentWindow.document.querySelector('section .col-2.col-text .badge')) {
        const colBadge = iframe.contentWindow.document.querySelector('section .col-2.col-text .badge');
        colBadge.remove();
        document.getElementById("show-badge").style.display="none"; 
        
        const arg1 = sectionClassName+ " .badge { color:";
        const arg2 = sectionClassName+ " .badge { background-color:";
        removeCSSTagPairs(arg1,arg2);  
    }
}

/*
//////////////// MAIN HEADING H2 HIGHLIGHT TEXT ///////////////
*/

document.querySelector("#cb_h2_highlight").addEventListener("change", doH2Text);

function doH2Text() {

    let elH2Content = iframe.contentWindow.document.querySelector('section .col-2.col-text h2').innerHTML;

    if (!document.getElementById("cb_h2_highlight").checked) {
        elH2Content = elH2Content.replace(/<\/?span[^>]*>/g,"");
        iframe.contentWindow.document.querySelector('section .col-2.col-text h2').innerHTML = elH2Content;
        document.getElementById("btn_h2_highlight").disabled = true;            
        document.getElementById("btn_h2_highlight").checked = false;
        const arg1 = sectionClassName+ " h2 span.highlight {";
        removeCSSTagPairs(arg1);
    }
    else {
        const i = elH2Content.indexOf(" ",1);
        const j = elH2Content.lastIndexOf(" ");
        elH2Content = elH2Content.replace(elH2Content.substring(i+1,j), "<span class=\"highlight\">"+elH2Content.substring(i+1,j)+"</span>");
        iframe.contentWindow.document.querySelector('section .col-2.col-text h2').innerHTML = elH2Content;  
        document.getElementById("btn_h2_highlight").disabled = false;            
        document.getElementById("btn_h2_highlight").checked = false;
        document.getElementById("btn_h2_border").disabled = false;            
        document.getElementById("btn_h2_border").checked = false;
    }
}

/*
//////////////// MAIN HEADING H2 BOTTOM BORDER ///////////////
*/

document.querySelector("#cb_h2_border").addEventListener("change", doH2Border);

function doH2Border() {

    const objH2 = iframe.contentWindow.document.querySelector('section .col-2.col-text h2');

    if (!document.getElementById("cb_h2_border").checked) {
        objH2.classList.remove("heading-underline");
        document.getElementById("btn_h2_border").disabled = true;            
        document.getElementById("btn_h2_border").checked = false;
        const arg1 = sectionClassName+ " .col-2.col-text h2.heading-underline::after { background-color: {";
        removeCSSTagPairs(arg1);
    }
    else {
        objH2.classList.add("heading-underline");
        document.getElementById("btn_h2_border").disabled = false;
        document.getElementById("btn_h2_border").checked = true;
    }
}


/*
//////////////// H3 SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_h3").addEventListener("change", doH3);

function doH3() {

    if (!document.getElementById("cb_h3").checked) {
        removeH3();
    }

    else {

        if (!iframe.contentWindow.document.querySelector("section .col-2.col-text h3")) {
            const el_para = iframe.contentWindow.document.querySelector("section .col-2.col-text p:nth-of-type(2)");
            el_para.insertAdjacentHTML("beforebegin", content_h3);
            document.getElementById("btn_h3_text").disabled=false;
        }
    }
}

function removeH3() {
    const el_h3 = iframe.contentWindow.document.querySelector("section.cols-2-half .col-2.col-text h3");
    el_h3.remove();
    document.getElementById("btn_h3_text").disabled=true;
    const arg1 = sectionClassName+ " .col-2.col-text h3 { color:";
    removeCSSTagPairs(arg1);
}

/*
//////////////// COLUMN PARAGRAPHS OR LISTS ////////////////////
*/

document.querySelector("#cb_list").addEventListener("change", doList);

function doList() {
    if (!document.getElementById("cb_list").checked) {
        removeList();
        document.getElementById("btn_list_text").disabled = true;
        document.getElementById("list-options").style.display = "none";
        document.getElementById("dd_list_marker").value = "0";
    }

    else {
        removeList();
        document.getElementById("btn_list_text").disabled = false;
        document.getElementById("list-options").style.display = "flex";
        iframe.contentWindow.document.querySelector("section .col-2.col-text p:last-of-type").insertAdjacentHTML("afterend", content_list);
        document.getElementById("dd_list_marker").value = "0";
    }
}

function removeList() {
    if (iframe.contentWindow.document.querySelector("section .col-2.col-text ul")) {
        const elUL = iframe.contentWindow.document.querySelector("section .col-2.col-text ul");
        elUL.remove();
        const arg1 = sectionClassName+ " .col-2.col-text ul li { color:";
        removeCSSTagPairs(arg1);
    }
}

/*
//////////////// SECTION LIST MARKER: REGULAR OR FONT AWESOME ////////////////////
*/

document.querySelector("#dd_list_marker").addEventListener("change", doListMarker);

function doListMarker() {

    let opt = document.querySelector("#dd_list_marker").value;

    // Regular
    if (opt==="0") {
        // Test for Font Awesome
        if (iframe.contentWindow.document.querySelector("section .col-2.col-text ul.fa-ul") ) {
            // Loop through spans in list items and remove italic nodes
            let objListSpans = iframe.contentWindow.document.querySelectorAll("section .col-2.col-text ul li span");

            for (let i = 0; i < objListSpans.length; i++) {
                objListSpans[i].firstChild.remove();
            }
            // Loop through list items and remove spans
            let objListItems = iframe.contentWindow.document.querySelectorAll("section .col-2.col-text ul li");

            for (let i = 0; i < objListItems.length; i++) {
                objListItems[i].firstChild.remove();
            }

            let objAllCols = iframe.contentWindow.document.querySelector("section .col-2.col-text");

            objAllCols.innerHTML = objAllCols.innerHTML.replaceAll("<ul class=\"fa-ul\">", "<ul>");
        }
        document.getElementById("dd_list_marker").value = "0";
        document.getElementById("fa-icons").style.display ="none";
        // document.getElementById("fa-circle-check").checked=true;
    }

    // Font Awesome
    else if (opt==="1") {
        if (iframe.contentWindow.document.querySelector("section .col-2.col-text ul:not(.fa-ul)") ) {
            // console.log("Got this far in Font Awesome");
            let objSection = iframe.contentWindow.document.querySelector("section .col-2.col-text");
            objSection.innerHTML = objSection.innerHTML.replaceAll("<ul>", "<ul class=\"fa-ul\">");
            objSection.innerHTML = objSection.innerHTML.replaceAll("<li>", "<li><span class=\"fa-li\"><i class=\"fa-solid fa-circle-check\"><\/i><\/span>");
        }
        document.getElementById("fa-icons").style.display ="flex";
        document.getElementById("rb-fa-circle-check").checked=true;
    }
}

/*
//////////////// SECTION LIST MARKER: FONT AWESOME CHARACTER ////////////////////
*/

document.querySelector("#form_switch_fa_icons").addEventListener("change", chooseListMarker);

function chooseListMarker() {

    console.log("Got to here");
    const rbs = document.querySelectorAll("input[name='switch_fa_icons']");
    let objIcons = iframe.contentWindow.document.querySelectorAll("section ul li span");

    let node;   
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    console.log("selectedValue: " +selectedValue);

    for (let i = 0; i < objIcons.length; i++) {
        objIcons[i].firstChild.remove();
        node = document.createElement("i");
        node.classList.add("fa-solid");
        node.classList.add(selectedValue);
        objIcons[i].appendChild(node);
    }
}

