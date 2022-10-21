import {content_header_label_text_col_1, content_header_h2_text_col_1, content_header_h2_col_1, content_header_h3_text_col_2_3_4, content_header_upper_block_col_2_3_4} from '../js/arr-content.js';

/*
//////////////// COL-1: COLUMN WIDTH ///////////////
*/

document.querySelector("#dd_col_1_width").addEventListener("change", doWidthColOne);

function doWidthColOne() {
    let opt = document.querySelector("#dd_col_1_width").value;

    if (opt==="0") {
        iframe.contentWindow.document.querySelector('section .col-1').classList.remove("col-1-width-960px");
        iframe.contentWindow.document.querySelector('section .col-1').classList.remove("col-1-width-1140px");
        iframe.contentWindow.document.querySelector('section .col-1').classList.add("col-1-width-800px");
    }

    else if (opt==="1") {
        iframe.contentWindow.document.querySelector('section .col-1').classList.remove("col-1-width-800px");
        iframe.contentWindow.document.querySelector('section .col-1').classList.remove("col-1-width-1140px");
        iframe.contentWindow.document.querySelector('section .col-1').classList.add("col-1-width-960px");
    }

    else if (opt==="2") {
        iframe.contentWindow.document.querySelector('section .col-1').classList.remove("col-1-width-800px");
        iframe.contentWindow.document.querySelector('section .col-1').classList.remove("col-1-width-960px");
        iframe.contentWindow.document.querySelector('section .col-1').classList.add("col-1-width-1140px");
    }    
}

/*
//////////////// COL-1: ALIGN ///////////////
*/

if (document.querySelector("#form_col_1_align")) {
    document.querySelector("#form_col_1_align").addEventListener("change", doColOneAlign);
}

function doColOneAlign() {
    const rbs = document.querySelectorAll("input[name='col_1_align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector('section .col-1').classList.remove("text-center");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector('section .col-1').classList.add("text-center"); 
    }
}

/*
//////////////// COL-1: CATEGORY BADGE ABOVE H2 ///////////////
*/

document.querySelector("#cb_col_1_badge").addEventListener("change", doColOneBadge);

function doColOneBadge() {

    // innerText of 'CATEGORY'

    if (!document.getElementById("cb_col_1_badge").checked) {
        removeColOneBadge();
    }
    
    else {
        removeColOneBadge();
        const newupperBadgeDiv = document.createElement("div");
        newupperBadgeDiv.classList.add("col-1-badge"); 
        iframe.contentWindow.document.querySelector('.col-1').prepend(newupperBadgeDiv);
        iframe.contentWindow.document.querySelector('.col-1 .col-1-badge').innerText = content_header_label_text_col_1;
        iframe.contentWindow.document.querySelector('.col-1').innerHTML = iframe.contentWindow.document.querySelector('.col-1').innerHTML.replace("<div class=\"col-1-badge\">", "\n\t\t\t<div class=\"col-1-badge\">");
        document.getElementById("show-col-1-badge").style.display="flex";
    }
}

document.querySelector("#form_col_1_badge_shape").addEventListener("change", doCol1BadgeShape);

function doCol1BadgeShape() {

    const objTextBoxes = iframe.contentWindow.document.querySelectorAll(".col-1-badge"); 
    let el_TextBox
    const rbs = document.querySelectorAll("input[name='switch_col_1_badge_shape']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="square") {
        for (el_TextBox of objTextBoxes) { 
            el_TextBox.classList.remove("corners-soft");
        }
    }
        
    else if (selectedValue==="soft") {
        for (el_TextBox of objTextBoxes) { 
            el_TextBox.classList.add("corners-soft");
        }
    }
}

function removeColOneBadge() {
    if (iframe.contentWindow.document.querySelector('.col-1-badge')) {
        const upperBadge = iframe.contentWindow.document.querySelector('.col-1-badge');
        upperBadge.remove();
        iframe.contentWindow.document.querySelector('.col-1').innerHTML = iframe.contentWindow.document.querySelector('.col-1').innerHTML.replace("\t\t\t\n", "");

        if ( (!iframe.contentWindow.document.querySelector('.col-1 > h2')) && (!iframe.contentWindow.document.querySelector('.col-1 > h3')) && (!iframe.contentWindow.document.querySelector('.col-1-badge')) ) {
            removeColOne();
        }
        document.getElementById("show-col-1-badge").style.display="none"; 

        const arg1 = sectionClassName+ " .col-1-badge { color:";
        const arg2 = sectionClassName+ " .col-1-badge { background-color:";

        removeCSSTagPairs(arg1, arg2);
    }
}

/*
//////////////// COL-1: MAIN HEADING H2 ///////////////
*/

if (document.querySelector("#cb_col_1_h2")) {
    document.querySelector("#cb_col_1_h2").addEventListener("change", doColOneH2);
}

function doColOneH2() {

    // Node text of 'Nice section heading'
    if (!document.getElementById("cb_col_1_h2").checked) {
        removeColOneH2();
    }
    else {
        removeColOneH2();
        document.getElementById("btn_col_1_h2_text").disabled=false;
        const newH2 = iframe.contentWindow.document.createElement("h2");
        const newContent = iframe.contentWindow.document.createTextNode(content_header_h2_text_col_1);
        newH2.appendChild(newContent);
        const currentDiv = iframe.contentWindow.document.querySelector('section .col-1');
        if (!iframe.contentWindow.document.querySelector('section'+' .col-1 .col-1-badge')) {
            currentDiv.prepend(newH2);
        }
        else {
            iframe.contentWindow.document.querySelector('section'+' .col-1 .col-1-badge').insertAdjacentHTML('afterend', content_header_h2_col_1); 
        }
        document.querySelector("#text-highlight .input-group:nth-child(1)").style.display ="flex";
        document.querySelector("#text-highlight .input-group:nth-child(2)").style.display ="flex";
    }
}

function removeColOneH2() {
    if (iframe.contentWindow.document.querySelector('section'+' .col-1 h2')) {
        document.getElementById("btn_col_1_h2_text").disabled=true;
        const elH2 = iframe.contentWindow.document.querySelector('section'+' .col-1 h2');
        elH2.remove();
        if (iframe.contentWindow.document.querySelector('section'+' .col-1.text-center')) {
            iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<div class=\"col-1 text-center\">\n\t\t\t', '<div class=\"col-1 text-center\">');
        }
        if (iframe.contentWindow.document.querySelector('section .col-1')) {
            iframe.contentWindow.document.querySelector('section .col-1').innerHTML = iframe.contentWindow.document.querySelector('section .col-1').innerHTML.replace('<div class=\"col-1\">\n\t\t\t', '<div class=\"col-1\">');
        }
        if ( (!iframe.contentWindow.document.querySelector('section'+' .col-1 h2')) && (!iframe.contentWindow.document.querySelector('section'+' .col-1 h3')) && (!iframe.contentWindow.document.querySelector('section'+' .col-1-badge')) ) {
            removeColOne();
        }
        document.querySelector("#text-highlight .input-group:nth-child(1)").style.display ="none";
        document.querySelector("#text-highlight .input-group:nth-child(2)").style.display ="none";
        document.getElementById("cb_col_1_h2_highlight").checked = false;
        document.getElementById("cb_col_1_h2_border").checked = false;
    }
    const arg1 = sectionClassName+ " .col-1 h2 { color:";
    const arg2 = sectionClassName+ " .col-1 h2 span.highlight {";
    const arg3 = sectionClassName+ " .col-1 h2.heading-underline::after {";
    removeCSSTagPairs(arg1,arg2,arg3);
}

/*
//////////////// COL-1: MAIN HEADING H2 HIGHLIGHT TEXT ///////////////
*/

document.querySelector("#cb_col_1_h2_highlight").addEventListener("change", doColOneH2Text);

function doColOneH2Text() {

    let elH2Content = iframe.contentWindow.document.querySelector('section .col-1 h2').innerHTML;

    if (!document.getElementById("cb_col_1_h2_highlight").checked) {
        elH2Content = elH2Content.replace(/<\/?span[^>]*>/g,"");
        iframe.contentWindow.document.querySelector('section .col-1 h2').innerHTML = elH2Content;
        document.getElementById("btn_col_1_h2_highlight").disabled = true;            
        document.getElementById("btn_col_1_h2_highlight").checked = false;
        const arg1 = sectionClassName+ " .col-1 h2 span.highlight { color:";
        removeCSSTagPairs(arg1);
    }
    else {
        const i = elH2Content.indexOf(" ",1);
        const j = elH2Content.lastIndexOf(" ");
        elH2Content = elH2Content.replace(elH2Content.substring(i+1,j), "<span class=\"highlight\">"+elH2Content.substring(i+1,j)+"</span>");
        iframe.contentWindow.document.querySelector('section .col-1 h2').innerHTML = elH2Content;  
        document.getElementById("btn_col_1_h2_highlight").disabled = false;            
        document.getElementById("btn_col_1_h2_highlight").checked = true;
    }
}

/*
//////////////// COL-1: MAIN HEADING H2 BOTTOM BORDER  ///////////////
*/

document.querySelector("#cb_col_1_h2_border").addEventListener("change", doColOneH2Border);

function doColOneH2Border() {

    const objH2 = iframe.contentWindow.document.querySelector('section .col-1 h2');

    if (!document.getElementById("cb_col_1_h2_border").checked) {
        objH2.classList.remove("heading-underline");
        document.getElementById("btn_col_1_h2_border").disabled = true;
        document.getElementById("btn_col_1_h2_border").checked = false;
        const arg1 = sectionClassName+ " .col-1 h2.heading-underline::after { background-color:";
        removeCSSTagPairs(arg1);
    }
    else {
        objH2.classList.add("heading-underline");
        document.getElementById("btn_col_1_h2_border").disabled = false;
        document.getElementById("btn_col_1_h2_border").checked = true;
    }
}

/*
//////////////// COL-1: H3 SUB-HEADING ////////////////////
*/

document.querySelector("#cb_col_1_h3").addEventListener("change", doColOneH3);

function doColOneH3() {
    if (!document.getElementById("cb_col_1_h3").checked) {
        removeColOneH3();
    }
    else {
        removeColOneH3();
        const newSubHead = document.createElement("h3");
        const newContent = document.createTextNode(content_header_h3_text_col_2_3_4);
        newSubHead.appendChild(newContent);
        const currentDiv = iframe.contentWindow.document.querySelector('section .col-1');
        currentDiv.append(newSubHead);
        document.getElementById("btn_col_1_h3_text").disabled=false;
    }
}

function removeColOneH3() {
    if (iframe.contentWindow.document.querySelector('section'+' .col-1 h3')) {
        iframe.contentWindow.document.querySelector('section'+' .col-1 h3').remove();
        document.getElementById("btn_col_1_h3_text").disabled=true;
    }

    else if (iframe.contentWindow.document.querySelector("section.cols-2-split")) {
        iframe.contentWindow.document.querySelector("section.cols-2-split .col-2 h3").remove();
        document.getElementById("btn_subhead").disabled=true;
    }
    else if (iframe.contentWindow.document.querySelector('section'+' .col-1 h3')) {
        iframe.contentWindow.document.querySelector('section'+' .col-1 h3').remove();
        document.getElementById("btn_col_1_h3_text").disabled=true;
    }
    if (iframe.contentWindow.document.querySelector('section'+' .col-1 h2')) {
        iframe.contentWindow.document.querySelector('section').innerHTML = iframe.contentWindow.document.querySelector('section').innerHTML.replace('<\/h2>\n\t\t\t', '<\/h2>');
    }
    if ( (!iframe.contentWindow.document.querySelector('section'+' .col-1 h2')) && (!iframe.contentWindow.document.querySelector('section'+'.col-1 h3')) && (!iframe.contentWindow.document.querySelector('section'+' .col-1-badge')) ) {
        removeColOne();
    }
  
    const arg1 = sectionClassName+ " .col-1 h3 { color:";
    removeCSSTagPairs(arg1);
}

/*
//////////////// COL-1: CREATE/REMOVE ///////////////
*/

document.querySelector("#cb_col_1").addEventListener("change", doColOne);

// Node text h2 and h3 texts

function doColOne() {
    if (!document.getElementById("cb_col_1").checked) {
        removeColOne();
    }
    else {
        const newUpperBlockDiv = iframe.contentWindow.document.createElement("div");
        newUpperBlockDiv.classList.add("col-1"); 
        newUpperBlockDiv.classList.add("text-center"); 
        iframe.contentWindow.document.querySelector('section').prepend(newUpperBlockDiv);
        iframe.contentWindow.document.querySelector('section .col-1').innerHTML = iframe.contentWindow.document.querySelector('section .col-1').innerHTML.replace('',  content_header_upper_block_col_2_3_4);
        iframe.contentWindow.document.querySelector('section .col-1').innerHTML = iframe.contentWindow.document.querySelector('section .col-1').innerHTML.replace('<div class="col-1 text-center">', '\n\n\t\t<div class="col-1 text-center">');
        // Enable properties
        document.getElementById("cb_col_1").checked=true;
        document.getElementById("dd_col_1_width").disabled=false;
        document.getElementById("rb_col_1_align_left").disabled=false;
        document.getElementById("rb_col_1_align_left").checked=false;
        document.getElementById("rb_col_1_align_center").disabled=false;
        document.getElementById("rb_col_1_align_center").checked=true;

        document.getElementById("cb_col_1_badge").disabled=false;
        document.getElementById("cb_col_1_badge").checked=false;
        document.getElementById("cb_col_1_h2").disabled=false;
        document.getElementById("cb_col_1_h2").checked=true;
        document.getElementById("cb_col_1_h3").disabled=false;
        document.getElementById("cb_col_1_h3").checked=true;
        document.getElementById("btn_col_1_h2_text").disabled=false;
        document.getElementById("btn_col_1_h3_text").disabled=false;
        document.querySelector("#content-2 .svg-icon-desktop").classList.remove("icon-disabled");
        document.querySelector("#text-highlight .input-group:nth-child(1)").style.display ="flex";
        document.querySelector("#text-highlight .input-group:nth-child(2)").style.display ="flex";
    }
}

function removeColOne() {
    if (iframe.contentWindow.document.querySelector('section .col-1')) {
        const elCol1 = iframe.contentWindow.document.querySelector('section .col-1');
        elCol1.remove();

        // Disable properties
        document.getElementById("cb_col_1").checked=false;
        document.getElementById("rb_col_1_align_left").disabled=true;
        document.getElementById("rb_col_1_align_left").checked=false;
        document.getElementById("rb_col_1_align_center").disabled=true;
        document.getElementById("rb_col_1_align_center").checked=false;
        document.getElementById("dd_col_1_width").disabled=true;
        document.querySelector("#content-2 .svg-icon-desktop").classList.add("icon-disabled");
        document.getElementById("cb_col_1_badge").disabled=true;
        document.getElementById("cb_col_1_badge").checked=false;
        document.getElementById("cb_col_1_h2").disabled=true;
        document.getElementById("cb_col_1_h2").checked=false;
        document.getElementById("cb_col_1_h3").disabled=true;
        document.getElementById("cb_col_1_h3").checked=false;
        document.getElementById("btn_col_1_h2_text").disabled=true;
        document.getElementById("btn_col_1_h3_text").disabled=true;
        document.querySelector("#text-highlight .input-group:nth-child(1)").style.display ="none";
        document.querySelector("#text-highlight .input-group:nth-child(2)").style.display ="none";
        document.getElementById("cb_col_1_h2_highlight").checked = false;
        document.getElementById("cb_col_1_h2_border").checked = false;

        const arg1 = sectionClassName+ " .col-1-badge { color:";
        const arg2 = sectionClassName+ " .col-1-badge { background-color:";
        const arg3 = sectionClassName+ " .col-1 h2 { color:";
        const arg4 = sectionClassName+ " .col-1 h2 span.highlight { color:";
        const arg5 = sectionClassName+ " .col-1 h2.heading-underline::after { background-color:";   
        removeCSSTagPairs(arg1,arg2,arg3,arg4,arg5);
    }
}