import { content_header_label_text_col_1, content_header_h2_text } from '../js/arr-content.js';

/*
//////////////// CONTAINER TEXT WIDTH ///////////////
*/

document.querySelector("#dd_container_text_width").addEventListener("change", doWidthTextDesktop);

function doWidthTextDesktop() {

    let opt = document.querySelector("#dd_container_text_width").value;
    deleteWidthTextDesktop();

    if (opt==="0") {
        iframe.contentWindow.document.querySelector(".container-text").classList.remove("w-50");
        if (iframe.contentWindow.document.querySelector(".container-btn")) {
            iframe.contentWindow.document.querySelector(".container-btn").classList.remove("w-50");
        }
    }
    else if (opt==="1") {
        iframe.contentWindow.document.querySelector(".container-text").classList.add("w-50");
        if (iframe.contentWindow.document.querySelector(".container-btn")) {
            iframe.contentWindow.document.querySelector(".container-btn").classList.add("w-50");
        }
    }
}

function deleteWidthTextDesktop() {
    iframe.contentWindow.document.querySelector(".container-text").classList.remove("w-50");
    if (iframe.contentWindow.document.querySelector(".container-btn")) {
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("w-50");
    }
}

/*
//////////////// ALIGN TEXT IN HEADER ///////////////
*/
      
document.querySelector("#form_align_desktop").addEventListener("change", doAlignTextDesktop);

function doAlignTextDesktop() {
    const rbs = document.querySelectorAll("input[name='align_desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("header").classList.remove("text-center-desktop");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("header").classList.add("text-center-desktop"); 
    }
}

document.querySelector("#form_align_mobile").addEventListener("change", doAlignTextMobile);

function doAlignTextMobile() {

    const rbs = document.querySelectorAll("input[name='align_mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("header").classList.remove("text-center-mobile");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("header").classList.add("text-center-mobile"); 
    }
}

/*
//////////////// BADGE ABOVE H1 ///////////////
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
        iframe.contentWindow.document.querySelector('.container-text').prepend(newUpperLabelDiv);
        iframe.contentWindow.document.querySelector('.badge').innerText = content_header_label_text_col_1;
        iframe.contentWindow.document.querySelector('.container-text').innerHTML = iframe.contentWindow.document.querySelector('.container-text').innerHTML.replace("<div class=\"badge\">", "\n\t\t\t<div class=\"badge\">");
        document.getElementById("show-badge").style.display="flex";
    }
}

document.querySelector("#form_badge_shape").addEventListener("change", doBadgeShape);

function doBadgeShape() {
    const objTextBox = iframe.contentWindow.document.querySelector(".badge"); 
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
}

/*
//////////////// MAIN HEADING H1 HIGHLIGHT TEXT ///////////////
*/

document.querySelector("#cb_h1_highlight").addEventListener("change", doH1Text);

function doH1Text() {

    let elH2Content = iframe.contentWindow.document.querySelector('.container-text h1').innerHTML;

    if (!document.getElementById("cb_h1_highlight").checked) {
        elH2Content = elH2Content.replace(/<\/?span[^>]*>/g,"");
        iframe.contentWindow.document.querySelector('.container-text h1').innerHTML = elH2Content;
        document.getElementById("btn_h1_highlight").disabled = true;            
        document.getElementById("btn_h1_highlight").checked = false;
    }
    else {
        const i = elH2Content.indexOf(" ",1);
        const j = elH2Content.lastIndexOf(" ");
        elH2Content = elH2Content.replace(elH2Content.substring(i+1,j), "<span class=\"highlight\">"+elH2Content.substring(i+1,j)+"</span>");
        iframe.contentWindow.document.querySelector('.container-text h1').innerHTML = elH2Content;  
        document.getElementById("btn_h1_highlight").disabled = false;            
        document.getElementById("btn_h1_highlight").checked = false;
    }
}

/*
//////////////// MAIN HEADING H1 BOTTOM BORDER ///////////////
*/

document.querySelector("#cb_h1_border").addEventListener("change", doH1Border);

function doH1Border() {

    const objH1 = iframe.contentWindow.document.querySelector('.container-text h1');

    if (!document.getElementById("cb_h1_border").checked) {
        objH1.classList.remove("heading-underline");
        document.getElementById("btn_h1_border").disabled = true;    
    }
    else {
        objH1.classList.add("heading-underline");
        document.getElementById("btn_h1_border").disabled = false;    
    }
}

/*
//////////////// SUB-HEADING H2 ///////////////
*/

document.querySelector("#cb_h2").addEventListener("change", doH2);

function doH2() {

    if (!document.getElementById("cb_h2").checked) {
        removeH2();
    }
    
    else {
        removeH2();
        const newH2 = document.createElement("h2");
        iframe.contentWindow.document.querySelector('.container-text').append(newH2);
        iframe.contentWindow.document.querySelector('.container-text h2').innerText = content_header_h2_text;
        document.getElementById("cb_h2").checked = true;    
        document.getElementById("btn_h2_text").disabled = false;    
    }
}

function removeH2() {
    if (iframe.contentWindow.document.querySelector('.container-text h2')) {
        const elH2 = iframe.contentWindow.document.querySelector('.container-text h2');
        elH2.remove();
        document.getElementById("cb_h2").checked = false;    
        document.getElementById("btn_h2_text").disabled = true;    
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
    if (iframe.contentWindow.document.querySelector(".badge")) {
        iframe.contentWindow.document.querySelector(".badge").classList.add(animationType);
    }

    iframe.contentWindow.document.querySelector(".container-text h2").classList.add(animationType);

    
    if (iframe.contentWindow.document.querySelector("header figure")) {
        iframe.contentWindow.document.querySelector("header figure").classList.add(animationType);
    }
    
    if (iframe.contentWindow.document.querySelector(".container-btn")) {
        iframe.contentWindow.document.querySelector(".container-btn").classList.add(animationType);
    }
}

function removeTextAnimation() {
    document.querySelector("label[for='dd_text_slide']").style.color = "var(--gray-500)";
    // Has .container-upper-label
    if (iframe.contentWindow.document.querySelector(".badge")) {
        iframe.contentWindow.document.querySelector(".badge").removeAttribute("class");
    }

    iframe.contentWindow.document.querySelector("header h2").removeAttribute("class");
    
    // Has figure
    if (iframe.contentWindow.document.querySelector("header figure")) {
        iframe.contentWindow.document.querySelector("header figure").removeAttribute("class");
    }
    // Has .container-btn
    if (iframe.contentWindow.document.querySelector(".container-btn")) {
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("slide-in-top");
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("slide-in-bottom");
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("slide-in-left");
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("slide-in-right");
        iframe.contentWindow.document.querySelector(".container-btn").classList.remove("fade-in");
    }
}

