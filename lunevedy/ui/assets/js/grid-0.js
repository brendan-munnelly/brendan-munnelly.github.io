import { content_header_label_text_col_1, content_h3, content_list, content_textbox_section, content_H4Overlay_section } from '../js/arr-content.js';

/*
//////////////// CATEGORY BADGE ABOVE H2 ///////////////
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
        iframe.contentWindow.document.querySelector('section').prepend(newUpperLabelDiv);
        iframe.contentWindow.document.querySelector('section .badge').innerText = content_header_label_text_col_1;
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace("<div class=\"badge\">", "\n\t\t\t<div class=\"badge\">");
        document.getElementById("show-badge").style.display="flex";
    }
}

document.querySelector("#form_badge_shape").addEventListener("change", doBadgeShape);

function doBadgeShape() {
    const objTextBox = iframe.contentWindow.document.querySelector("section > .badge"); 
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
    if (iframe.contentWindow.document.querySelector('.badge')) {
        const upperLabel = iframe.contentWindow.document.querySelector('.badge');
        upperLabel.remove();
        document.getElementById("show-badge").style.display="none";        
    }

    const arg1 = sectionClassName+ " .badge { color:";
    const arg2 = sectionClassName+ " .badge { background-color:";

    removeCSSTagPairs(arg1, arg2);
}

/*
//////////////// MAIN HEADING H2 HIGHLIGHT TEXT ///////////////
*/

document.querySelector("#cb_h2_highlight").addEventListener("change", doH2Text);

function doH2Text() {

    let elH2Content = iframe.contentWindow.document.querySelector('section > h2').innerHTML;

    if (!document.getElementById("cb_h2_highlight").checked) {
        elH2Content = elH2Content.replace(/<\/?span[^>]*>/g,"");
        iframe.contentWindow.document.querySelector('section > h2').innerHTML = elH2Content;
        document.getElementById("btn_h2_highlight").disabled = true;            
        document.getElementById("btn_h2_highlight").checked = false;
        const arg1 = sectionClassName+ " > h2 span.highlight { color:";
        removeCSSTagPairs(arg1);
    }
    else {
        const i = elH2Content.indexOf(" ",1);
        const j = elH2Content.lastIndexOf(" ");
        elH2Content = elH2Content.replace(elH2Content.substring(i+1,j), "<span class=\"highlight\">"+elH2Content.substring(i+1,j)+"</span>");
        iframe.contentWindow.document.querySelector('section > h2').innerHTML = elH2Content;  
        document.getElementById("btn_h2_highlight").disabled = false;            
        document.getElementById("btn_h2_highlight").checked = false;
    }
}

/*
//////////////// MAIN HEADING H2 BOTTOM BORDER ///////////////
*/

document.querySelector("#cb_h2_border").addEventListener("change", doH2Border);

function doH2Border() {

    const objH2 = iframe.contentWindow.document.querySelector('section > h2');

    if (!document.getElementById("cb_h2_border").checked) {
        objH2.classList.remove("heading-underline");
        document.getElementById("btn_h2_border").disabled = true;    
        document.getElementById("btn_h2_border").checked = false;
        const arg1 = sectionClassName+ " > h2.heading-underline::after { background-color:";
        removeCSSTagPairs(arg1);
    }
    else {
        objH2.classList.add("heading-underline");
        document.getElementById("btn_h2_border").disabled = false;
        document.getElementById("btn_h2_border").checked = true;
    }
}

/*
//////////////// DECKHEAD ///////////////
*/

document.querySelector("#cb_deckhead").addEventListener("change", doDeckhead);

function doDeckhead() {
    if (!document.getElementById("cb_deckhead").checked) {
        iframe.contentWindow.document.querySelector("section p").classList.remove("deckhead");
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<p class=\"\">', '<p>');
    }
    else {
        document.querySelector("label[for='cb_deckhead']").style.color = "#fff";
        iframe.contentWindow.document.querySelector("section p").classList.add("deckhead");
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
        if (!iframe.contentWindow.document.querySelector("section h3")) {
            const objParas = iframe.contentWindow.document.querySelectorAll("section p");
            let el_para;
            // Loop through paragraphs
            for (let i = 1; i < objParas.length; i++) {
                el_para = objParas[i]; 
                el_para.insertAdjacentHTML("beforebegin", content_h3);
            }
            document.getElementById("btn_h3_text").disabled=false;
        }
    }
}

function removeH3() {
    const objH3 = iframe.contentWindow.document.querySelectorAll("section h3");
    let el_h3;
    // Loop through paragraphs
    for (let i = 0; i < objH3.length; i++) {
        objH3[i].remove();
    }
    document.getElementById("btn_h3_text").disabled=true;
}


/*
//////////////// SECTION TEXT: LISTS  ///////////////
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

        iframe.contentWindow.document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", content_list);
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replaceAll('<\/p>\t', '<\/p>');
        document.getElementById("dd_list_marker").value = "0";
    }

}

function removeList() {
    if (iframe.contentWindow.document.querySelector("section > ul")) {
        const elUL = iframe.contentWindow.document.querySelector("section > ul");
        elUL.remove();
    }
    iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<\/p>\n\n\t\t\n\n', '<\/p>');

    iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<\/p>        ', '<\/p>');

    let sectionContent = iframe.contentWindow.document.querySelector('section').innerHTML;

    const count = (sectionContent.match(/<\/p>\t/g) || []).length;
    for (let i = 0; i <= count; i++) {
        sectionContent = sectionContent.replace('</p>\t', '</p>');
    }
    iframe.contentWindow.document.querySelector('section').innerHTML = sectionContent;
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
        if (iframe.contentWindow.document.querySelector("section ul.fa-ul") ) {
            // Loop through spans in list items and remove italic nodes
            let objListSpans = iframe.contentWindow.document.querySelectorAll("section ul li span");

            for (let i = 0; i < objListSpans.length; i++) {
                objListSpans[i].firstChild.remove();
            }
            // Loop through list items and remove spans
            let objListItems = iframe.contentWindow.document.querySelectorAll("section ul li");

            for (let i = 0; i < objListItems.length; i++) {
                objListItems[i].firstChild.remove();
            }

            let objAllCols = iframe.contentWindow.document.querySelector("section");

            objAllCols.innerHTML = objAllCols.innerHTML.replaceAll("<ul class=\"fa-ul\">", "<ul>");
        }
        document.getElementById("dd_list_marker").value = "0";
        document.getElementById("fa-icons").style.display ="none";
        document.getElementById("rb-fa-circle-check").checked=true;
    }

    // Font Awesome
    else if (opt==="1") {
        if (iframe.contentWindow.document.querySelector("section ul:not(.fa-ul)") ) {
            let objSection = iframe.contentWindow.document.querySelector("section");           objSection.innerHTML = objSection.innerHTML.replaceAll("<ul>", "<ul class=\"fa-ul\">");
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

    for (let i = 0; i < objIcons.length; i++) {
        objIcons[i].firstChild.remove();
        node = document.createElement("i");
        node.classList.add("fa-solid");
        node.classList.add(selectedValue);
        objIcons[i].appendChild(node);
    }
}

/*
//////////////// HYPERLINKS ///////////////
*/

document.querySelector("#cb_hyperlinks").addEventListener("change", doHyperlinks);

function doHyperlinks() {
    if (!document.getElementById("cb_hyperlinks").checked) {
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replaceAll('<a href=\"#\">corporate strategy\</a>', 'corporate strategy');
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replaceAll('<a href=\"#\">new normal<\/a>', 'new normal');
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replaceAll('<a href=\"#\">convergence<\/a>', 'convergence');

        document.getElementById("hyperlinks-colors").style.display ="none";
        document.getElementById("hyperlinks-underlines").style.display ="none";  
    }
    else {
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replaceAll('corporate strategy', '<a href=\"#\">corporate strategy\</a>');
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replaceAll('new normal', '<a href=\"#\">new normal<\/a>');
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replaceAll('convergence', '<a href=\"#\">convergence<\/a>');
        document.getElementById("hyperlinks-colors").style.display ="flex";
        document.getElementById("hyperlinks-underlines").style.display ="flex";  
    }
}


