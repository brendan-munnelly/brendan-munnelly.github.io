// import { col_1_content_header_h3, col_1_content_para_last, col_1_content_ul_short, col_1_content_ul_long, col_1_content_buttons_one, col_1_content_buttons_pair, col_1_content_caption } from '../js/arr-content.js';

import { content_header_label_text_col_1, content_h3, content_list, content_textbox_section, content_H4Overlay_section } from '../js/arr-content.js';

/*
//////////////// ALIGN SECTION ///////////////
*/
      
document.querySelector("#form_align_desktop").addEventListener("change", doAlignSectionDesktop);

function doAlignSectionDesktop() {
    const rbs = document.querySelectorAll("input[name='align_desktop']");
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

document.querySelector("#form_align_mobile").addEventListener("change", doAlignSectionMobile);

function doAlignSectionMobile() {

    const rbs = document.querySelectorAll("input[name='align_mobile']");
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
//////////////// LABEL ABOVE H2 ///////////////
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
        // document.getElementById("btn_col_1_border").disabled = true;            
        // document.getElementById("btn_col_1_border").checked = false;
    }
    else {
        const i = elH2Content.indexOf(" ",1);
        const j = elH2Content.lastIndexOf(" ");
        elH2Content = elH2Content.replace(elH2Content.substring(i+1,j), "<span class=\"highlight\">"+elH2Content.substring(i+1,j)+"</span>");
        iframe.contentWindow.document.querySelector('section > h2').innerHTML = elH2Content;  
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

    const objH2 = iframe.contentWindow.document.querySelector('section > h2');

    if (!document.getElementById("cb_h2_border").checked) {
        objH2.classList.remove("heading-underline");
    }
    else {
        objH2.classList.add("heading-underline");
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
            console.log("Got this far in Font Awesome");
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

/*
//////////////// VISUAL ELEMENT INSIDE SINGLE-COLUMN LAYOUT ///////////////
*/

/* Enable visual */
document.querySelector("#cb_visual").addEventListener("change", checkVis);

function checkVis() {

    if (!document.getElementById("cb_visual").checked) {
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
        iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<img src=\"assets\/img\/800x480-restaurant.jpg\" alt=\"Placeholder image\">\n\t\t<\/figure>");
    }
}


// document.querySelector("#vis-types-all").addEventListener("click", doVisType);

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
            iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<img src=\"assets\/img\/800x480-restaurant.jpg\" alt=\"Placeholder image\">\n\t\t<\/figure>");        
            document.getElementById("vis_type_0").checked=true;

        }
    
        else if (selectedValue==="transparent") {
            iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<img src=\"assets\/img\/800x480-office.png\" alt=\"Placeholder image\">\n\t\t<\/figure>"); 
            document.getElementById("vis_type_1").checked=true;
            document.getElementById("cb_img_corners").disabled=true;
            document.getElementById("cb_img_corners").checked=false;
        }

        else if (selectedValue==="illustrations") {
            iframe.contentWindow.document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<img src=\"assets\/img\/800x480-teamwork.png\" alt=\"Placeholder image\">\n\t\t<\/figure>"); 
            document.getElementById("vis_type_2").checked=true;
            document.getElementById("cb_img_corners").disabled=true;
            document.getElementById("cb_img_corners").checked=false;            
        }
        
    iframe.contentWindow.document.querySelector('section').innerHTML =iframe.contentWindow.document.querySelector('section').innerHTML.replace("\t\t\n\n", "");

    } // Ends pics branch

    else if ( (selectedValue==="vid-file") || (selectedValue==="vid-yt") ) {
        resetVisual();
        enableRBs();
        enableVisualWidth();
        disableImgProps();
        enableVidProps();
        disableVisualAlign();
        if (selectedValue==="vid-file") {
            iframe.contentWindow.document.querySelector("section p").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<div class=\"container-video-file\">\n\t\t\t\t<video controls>\n\t\t\t\t\t<source src=\"assets/videos/video-focal-center.mp4\" type=\"video\/mp4\">\n\t\t\t\t<\/video>\n\t\t\t</div>\n\t\t</figure>");
            document.getElementById("vis_type_3").checked=true;
        }

        else if (selectedValue==="vid-yt") {
            iframe.contentWindow.document.querySelector("section p").insertAdjacentHTML("afterend", "\n\n\t\t<figure>\n\t\t\t<div class=\"container-video-yt\">\n\t\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t\t<\/iframe>\n\t\t\t<\/div>\n\t\t</figure>");
            document.getElementById("vis_type_4").checked=true;
        }
        iframe.contentWindow.document.querySelector('section').innerHTML =iframe.contentWindow.document.querySelector('section').innerHTML.replace("\t\t\n\n", "");
     
    } // Ends video branch
}

/*
//////////////// ILLUSTRATIONS: ALIGN ON DESKTOP  ////////////////////
*/

// document.querySelector("#switch-section-desktop-figure-align").addEventListener("change", doAlignDesktopFig);
    
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
//////////////// VISUAL ELEMENT WIDTH (600px AND ABOVE ) ///////////////
*/

// document.querySelector("#switch_section_vis_width_desktop").addEventListener("change", doFigWidthDesktop);

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

    else if (selectedValue==="full") {
        el_section_fig.classList.remove("figure-width-50");
        el_section_fig.classList.remove("figure-width-80");
        enableVisualAlign();        
    }
}

/*
//////////////// VISUAL PROPERTIES: IMAGE SHADOWS ///////////////
*/

/* Enable image shadows */
// document.querySelector("#cb_img_shadows").addEventListener("change", doImgShadows);

function doImgShadows() {

    if (!document.getElementById("cb_img_shadows").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-shadow");
    }
}

/*
//////////////// VISUAL PROPERTIES: CORNERS ///////////////
*/

// document.querySelector("#cb_img_corners").addEventListener("change", doImgCorners);

function doImgCorners() {

    if (!document.getElementById("cb_img_corners").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-corners-soft");
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-corners-soft");
    }
}

/*
//////////////// VISUAL PROPERTIES: VIDEO SHADOWS ///////////////
*/

/* Enable video shadows */
// document.querySelector("#cb_vid_shadows").addEventListener("change", doVidShadows);

function doVidShadows() {
    if (!document.getElementById("cb_vid_shadows").checked) {
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
    document.getElementById("cb_img_corners").disabled=false;
    document.getElementById("cb_img_corners").checked=false;
    document.getElementById("cb_img_shadows").disabled=false;
    document.getElementById("cb_img_shadows").checked=false;
}

function disableImgProps() {
    document.getElementById("cb_img_corners").disabled=true;
    document.getElementById("cb_img_corners").checked=false;
    document.getElementById("cb_img_shadows").disabled=true;
    document.getElementById("cb_img_shadows").checked=false;
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
}

// Video properties with labels
function enableVidProps() {
    document.getElementById("cb_vid_shadows").disabled=false;
    document.getElementById("cb_vid_shadows").checked=false;
}

function disableVidProps() {
    document.getElementById("cb_vid_shadows").disabled=true;
    document.getElementById("cb_vid_shadows").checked=false;
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
    iframe.contentWindow.document.querySelector('section').innerHTML =iframe.contentWindow.document.querySelector('section').innerHTML.replace("</figure>", "</figure>\n\n\t");
    let el_content = iframe.contentWindow.document.querySelector('section');
    let el_fig = iframe.contentWindow.document.querySelector('section figure');
    el_content.removeChild(el_fig);

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

