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
//////////////// COL-1: CATEGORY LABEL ABOVE H2 ///////////////
*/

document.querySelector("#cb_col_1_label").addEventListener("change", doColOneLabel);

function doColOneLabel() {

    // innerText of 'CATEGORY'

    if (!document.getElementById("cb_col_1_label").checked) {
        removeColOneLabel();
    }
    
    else {
        removeColOneLabel();
        const newUpperLabelDiv = document.createElement("div");
        const newUpperLabelSpan = document.createElement("span");
        newUpperLabelDiv.appendChild(newUpperLabelSpan);
        newUpperLabelDiv.classList.add("container-upper-label"); 
        iframe.contentWindow.document.querySelector('.col-1').prepend(newUpperLabelDiv);
        iframe.contentWindow.document.querySelector('.col-1 .container-upper-label span').innerText = content_header_label_text_col_1;
        iframe.contentWindow.document.querySelector('.col-1').innerHTML = iframe.contentWindow.document.querySelector('.col-1').innerHTML.replace("<div class=\"container-upper-label\">", "\n\t\t\t<div class=\"container-upper-label\">\n\t\t\t\t");
        iframe.contentWindow.document.querySelector('.col-1').innerHTML = iframe.contentWindow.document.querySelector('.col-1').innerHTML.replace("<\/span>", "<\/span>\n\t\t\t");
        document.getElementById("btn_col_1_label_text").disabled=false;
    }
}

function removeColOneLabel() {
    if (iframe.contentWindow.document.querySelector('.container-upper-label')) {
        const upperLabel = iframe.contentWindow.document.querySelector('.container-upper-label');
        upperLabel.remove();
        iframe.contentWindow.document.querySelector('.col-1').innerHTML = iframe.contentWindow.document.querySelector('.col-1').innerHTML.replace("\t\t\t\n", "");

        document.getElementById("btn_col_1_label_text").disabled=true;

        if ( (!iframe.contentWindow.document.querySelector('.col-1 > h2')) && (!iframe.contentWindow.document.querySelector('.col-1 > h3')) ) {
            removeColOne();
        }
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
        if (!iframe.contentWindow.document.querySelector('section'+' .col-1 .container-upper-label')) {
            currentDiv.prepend(newH2);
        }
        else {
            iframe.contentWindow.document.querySelector('section'+' .col-1 .container-upper-label').insertAdjacentHTML('afterend', content_header_h2_col_1); 
        }
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
        if ( (!iframe.contentWindow.document.querySelector('section'+' .col-1 h2')) && (!iframe.contentWindow.document.querySelector('section'+' .col-1 h3')) ) {
            removeColOne();
        }
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
    if ( (!iframe.contentWindow.document.querySelector('section'+' .col-1 h2')) && (!iframe.contentWindow.document.querySelector('section'+'.col-1 h3')) ) {
        removeColOne();
    }
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

        document.getElementById("cb_col_1_label").disabled=false;
        document.getElementById("cb_col_1_label").checked=false;
        document.getElementById("cb_col_1_h2").disabled=false;
        document.getElementById("cb_col_1_h2").checked=true;
        document.getElementById("cb_col_1_h3").disabled=false;
        document.getElementById("cb_col_1_h3").checked=true;
        document.getElementById("btn_col_1_label_text").disabled=true;
        document.getElementById("btn_col_1_h2_text").disabled=false;
        document.getElementById("btn_col_1_h3_text").disabled=false;
        document.querySelector("#content-2 .svg-icon-desktop").classList.remove("icon-disabled");
    }
}

function removeColOne() {
    if (iframe.contentWindow.document.querySelector('section .col-1')) {
        const elCol1 = iframe.contentWindow.document.querySelector('section .col-1');
        elCol1.remove();
        col_no = col_no.slice(1)
        iframe.contentWindow.document.querySelector('section').innerHTML = 
        iframe.contentWindow.document.querySelector('section').innerHTML.replace("\n\n\t\t<div class=\""+col_no+"\">", "<div class=\""+col_no+"\">");

        // Disable properties
        document.getElementById("cb_col_1").checked=false;
        document.getElementById("rb_col_1_align_left").disabled=true;
        document.getElementById("rb_col_1_align_left").checked=false;
        document.getElementById("rb_col_1_align_center").disabled=true;
        document.getElementById("rb_col_1_align_center").checked=false;
        document.getElementById("dd_col_1_width").disabled=true;
        document.querySelector("#content-2 .svg-icon-desktop").classList.add("icon-disabled");
        document.getElementById("cb_col_1_label").disabled=true;
        document.getElementById("cb_col_1_label").checked=false;
        document.getElementById("cb_col_1_h2").disabled=true;
        document.getElementById("cb_col_1_h2").checked=false;
        document.getElementById("cb_col_1_h3").disabled=true;
        document.getElementById("cb_col_1_h3").checked=false;
        document.getElementById("btn_col_1_label_text").disabled=true;
        document.getElementById("btn_col_1_h2_text").disabled=true;
        document.getElementById("btn_col_1_h3_text").disabled=true;
        col_no = "."+col_no; // Restore .col_no
    }
}