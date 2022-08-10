import {arrPic, arrTrans, arrIllus, arrVidFile, arrVidYT, arrVidRumble, arrIconFA, arrIconLA, arrTextBox, arrH4Overlay} from '../js/arr-content.js';

/*
////////////////////// VISUALS: FOUR TYPES ///////////////////////
*/

document.querySelector("#cb_visual").addEventListener("change", doVis);

function doVis() {
    if (!document.getElementById("cb_visual").checked) {
        removeVisual();
        document.getElementById("rb_vis_type_1").disabled=true;
        document.getElementById("rb_vis_type_2").disabled=true;
        document.getElementById("rb_vis_type_3").disabled=true;
        document.getElementById("rb_vis_type_4").disabled=true;
        document.getElementById("rb_vis_type_5").disabled=true;

        document.getElementById("form_vis_types").style.display = "none";
        document.getElementById("properties-photos").style.display = "none";
        document.getElementById("cb_photos_hyperlinks").checked=false;
        document.getElementById("cb_img_textbox").checked=false;
        document.getElementById("cb_img_h4").checked=false;
        document.getElementById("properties-transparent").style.display = "none";
        document.getElementById("properties-drawings").style.display = "none";
        document.getElementById("properties-icons").style.display = "none";
        document.getElementById("properties-videos").style.display = "none";
        document.getElementById("show-textbox").style.display = "none";
        document.getElementById("visible-hyperlinks").style.display = "none";
    }
    else {
        document.getElementById("properties-photos").style.display = "block";
        doPhotos(1);
    }
}

document.querySelector("#form_vis_types").addEventListener("click", doVisType);

function doVisType() { 
    const rbs = document.querySelectorAll("#form_vis_types input[name='vis_type']");
    let selectedValue;
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    removeVisual();
    if (selectedValue==="photos") {
        doPhotos();
    }
    else if (selectedValue==="transparent") {
        doTransparent();
    }    
    else if (selectedValue==="drawings") {
        doDrawings();
    }
    else if (selectedValue==="icons") {
        doIcons();
    }
    else if (selectedValue==="videos") {
        doVideos();
    }
}

/*
//////////////// VISUALS: PHOTOS ///////////////
*/

function doPhotos() {
    removeVisual();

    // Visual types
    document.getElementById("form_vis_types").style.display = "block";
    document.getElementById("rb_vis_type_1").disabled=false;
    document.getElementById("rb_vis_type_1").checked=true;
    document.getElementById("rb_vis_type_2").disabled=false;
    document.getElementById("rb_vis_type_3").disabled=false;
    document.getElementById("rb_vis_type_4").disabled=false;
    document.getElementById("rb_vis_type_5").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "block";
    document.getElementById("properties-transparent").style.display = "none";
    document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-icons").style.display = "none";
    document.getElementById("properties-videos").style.display = "none";

    // Property resets
    resetTransProps();
    resetDrawingsProps();    
    resetIconProps();
    resetVideoProps();
    // Set properties
    document.getElementById("dd_photos_shape").value = "1";
    doVisSubTypes(1);
}

document.querySelector("#dd_photos_shape").addEventListener("change", doPhotosType);

function doPhotosType() {

    let opt = document.querySelector("#dd_photos_shape").value;
    removeVisual();
    if (opt==="1") {
        doVisSubTypes(1);    
    }
    else if (opt==="2") {
        doVisSubTypes(2);    
    }
    else if (opt==="3") {
        doVisSubTypes(3);    
    }
    else if (opt==="4") {
        doVisSubTypes(4);    
    }        
}

/* photos: corners */

document.querySelector("#cb_photos_corners_soft").addEventListener("change", doPhotosCorners);

function doPhotosCorners() {

    const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='col-'] figure");
    let el_figs;

    if (!document.getElementById("cb_photos_corners_soft").checked) {
        for (let i = 0; i < objFigs.length; i++) {
            el_figs = objFigs[i];
            el_figs.classList.remove("fig-corners-soft");
        }
    }
    else {
        for (let i = 0; i < objFigs.length; i++) { 
            el_figs = objFigs[i];
            el_figs.classList.add("fig-corners-soft");
        }
    }
}

/* photos: shadows */
document.querySelector("#cb_photos_shadows").addEventListener("change", doPhotosShadows);

function doPhotosShadows() {

    const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='col-'] figure");
    let el_figs;
    
    if (!document.getElementById("cb_photos_shadows").checked) {
        for (let i = 0; i < objFigs.length; i++) {
            el_figs = objFigs[i];
            el_figs.classList.remove("fig-shadows-box");
        }
    }
    else {
        for (let i = 0; i < objFigs.length; i++) { 
            el_figs = objFigs[i];
            el_figs.classList.add("fig-shadows-box");
        }
    }
}

/* photos: overlay textbox */

document.querySelector("#cb_img_textbox").addEventListener("change", doColH3TextBox);

function doColH3TextBox() {

    const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='col-'] figure");
    let el_TextBox;
    let node;   
    const arrContent = []; 

    if (!document.querySelector("#cb_img_textbox").checked) {
        // Remove div as child of figure
        for (let i = 0; i < objFigs.length; i++) {
            el_TextBox = iframe.contentWindow.document.querySelector("div[class^='col-'] figure .cols-img-textbox");
            objFigs[i].removeChild(el_TextBox);
        }
        document.getElementById("show-textbox").style.display = "none";
    }

    else {
        // Add overlay textbox as child of figure
        for (let i = 0; i < objFigs.length; i++) { 
            node = document.createElement("div");
            node.innerText = arrTextBox[i];
            node.classList.add("cols-img-textbox");
            objFigs[i].appendChild(node);
        }
        document.getElementById("show-textbox").style.display = "block";
    }
}

/* photos: soft corners */

document.querySelector("#form_img_textbox_shape").addEventListener("change", doTextBoxShape);

function doTextBoxShape() {

    const objTextBoxes = iframe.contentWindow.document.querySelectorAll(".cols-img-textbox"); 
    let el_TextBox
    const rbs = document.querySelectorAll("input[name='switch_img_textbox_shape']");
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

/* photos: overlay h4 sub-heading */

document.querySelector("#cb_img_h4").addEventListener("change", doColH4Overlay);

function doColH4Overlay() {

    const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='col-'] figure");
    let el_H4_overlay;
    let node;   

    if (!document.querySelector("#cb_img_h4").checked) {
        // Remove div as child of figure
        for (let i = 0; i < objFigs.length; i++) {
            el_H4_overlay = iframe.contentWindow.document.querySelector("div[class^='col-'] figure .cols-img-h4");
            objFigs[i].removeChild(el_H4_overlay);
            objFigs[i].classList.remove("figure-overlay");
        }
    }

    else {
        // Add overlay textbox as child of figure
        for (let i = 0; i < objFigs.length; i++) { 
            node = document.createElement("div");
            node.innerText = arrH4Overlay[i];
            node.classList.add("cols-img-h4");
            objFigs[i].appendChild(node);
            objFigs[i].classList.add("figure-overlay");
        }
    }
}

/* photos: hyperlinks */
document.querySelector("#cb_photos_hyperlinks").addEventListener("change", doPhotosHyperlinks);

function doPhotosHyperlinks() {

    const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='col-'] figure");
    let el_fig;
    let el_fig_content;

    if (!document.getElementById("cb_photos_hyperlinks").checked) {
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig_content = objFigs[i].innerHTML;
            el_fig_content = el_fig_content.replace('<a href=\"#\">', '');
            el_fig_content = el_fig_content.replace('</a>', '');
            objFigs[i].innerHTML = el_fig_content;
            el_fig = objFigs[i];
            el_fig.classList.remove("photos-zoom");
            el_fig.classList.remove("photos-brightness");
        }
        document.getElementById("cb_photos_zoom").checked=false;
        document.getElementById("cb_photos_zoom").disabled=true;
        document.getElementById("cb_photos_brightness").checked=false;
        document.getElementById("cb_photos_brightness").disabled=true;
        document.getElementById("visible-hyperlinks").style.display="none";
    }

    else {
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig_content = objFigs[i].innerHTML;
            el_fig_content = '<a href=\"#\">'+el_fig_content+'</a>';
            objFigs[i].innerHTML = el_fig_content;
        }
        document.getElementById("cb_photos_zoom").disabled=false;
        document.getElementById("cb_photos_zoom").checked=false;
        document.getElementById("cb_photos_brightness").checked=false;
        document.getElementById("cb_photos_brightness").disabled=false;
        document.getElementById("visible-hyperlinks").style.display="block";
    }
}

/* photos: zoom */

document.querySelector("#cb_photos_zoom").addEventListener("change", doPhotosZoom);

function doPhotosZoom() {

    const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='col-'] figure");
    let el_fig;

    if (!document.getElementById("cb_photos_zoom").checked) {
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig = objFigs[i];
            el_fig.classList.remove("photos-zoom");
            document.getElementById("cb_photos_shadows").disabled=false;
            document.getElementById("cb_photos_shadows").checked=false;            
        }
    }

    else {
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig = objFigs[i];
            el_fig.classList.add("photos-zoom");
            el_fig.classList.remove("fig-shadows-box");
        }
        document.getElementById("cb_photos_shadows").disabled=true;
        document.getElementById("cb_photos_shadows").checked=false;
    }
}

/* photos: brightness */

document.querySelector("#cb_photos_brightness").addEventListener("change", doPhotosBrightness);

function doPhotosBrightness() {

    const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='col-'] figure");
    let el_fig;

    if (!document.getElementById("cb_photos_brightness").checked) {
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig = objFigs[i];
            el_fig.classList.remove("photos-brightness");
        }
    }

    else {
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig = objFigs[i];
            el_fig.classList.add("photos-brightness");
        }
    }
}

function resetPhotoProps() {
    document.getElementById("dd_photos_shape").value="1";
    document.getElementById("cb_photos_shadows").checked=false;
    document.getElementById("cb_photos_corners_soft").checked=false;
    document.getElementById("cb_photos_hyperlinks").checked=false;
    document.getElementById("cb_photos_zoom").disabled=true;
    document.getElementById("cb_photos_zoom").checked=false;
    document.getElementById("cb_photos_brightness").disabled=true;
    document.getElementById("cb_photos_brightness").checked=false;
    document.getElementById("show-textbox").style.display = "none";
    document.getElementById("visible-hyperlinks").style.display = "none";
    document.getElementById("cb_img_textbox").checked=false;
    document.getElementById("cb_img_h4").checked=false;
}

/*
//////////////// VISUALS: TRANSPARENT ///////////////
*/

function doTransparent() {
    removeVisual();

    // Visual types
    document.getElementById("form_vis_types").style.display = "block";
    document.getElementById("rb_vis_type_1").disabled=false;
    document.getElementById("rb_vis_type_2").disabled=false;
    document.getElementById("rb_vis_type_2").checcked=true;
    document.getElementById("rb_vis_type_3").disabled=false;
    document.getElementById("rb_vis_type_4").disabled=false;
    document.getElementById("rb_vis_type_4").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-transparent").style.display = "block";
    document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-icons").style.display = "none";
    document.getElementById("properties-videos").style.display = "none";

    // Reset properties
    resetPhotoProps();
    resetDrawingsProps();
    resetIconProps();
    resetVideoProps();
    // Set properties
    document.getElementById("cb_trans_shadows").checked = false;
    doVisSubTypes(5);
}

/* transparent: shadows */
document.querySelector("#cb_trans_shadows").addEventListener("change", doTransShadows);

function doTransShadows() {

    const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='col-'] figure");
    let el_figs;
    
    if (!document.getElementById("cb_trans_shadows").checked) {
        for (let i = 0; i < objFigs.length; i++) {
            el_figs = objFigs[i];
            el_figs.classList.remove("fig-shadows-trans");
        }
    }
    else {
        for (let i = 0; i < objFigs.length; i++) { 
            el_figs = objFigs[i];
            el_figs.classList.add("fig-shadows-trans");
        }
    }
}

function resetTransProps() {
    document.getElementById("cb_trans_shadows").checked = false;
}

/*
//////////////// VISUALS: DRAWINGS ///////////////
*/

function doDrawings() {
    removeVisual();

    // Visual types
    document.getElementById("form_vis_types").style.display = "block";
    document.getElementById("rb_vis_type_1").disabled=false;
    document.getElementById("rb_vis_type_2").disabled=false;
    document.getElementById("rb_vis_type_3").disabled=false;
    document.getElementById("rb_vis_type_3").checked=true;
    document.getElementById("rb_vis_type_4").disabled=false;
    document.getElementById("rb_vis_type_4").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-transparent").style.display = "none";
    document.getElementById("properties-drawings").style.display = "block";
    document.getElementById("properties-icons").style.display = "none";
    document.getElementById("properties-videos").style.display = "none";

    // Reset properties
    resetPhotoProps();
    resetTransProps();
    resetIconProps();
    resetVideoProps();

    // Set properties
    document.getElementById("cb_drawings_shadows").checked = false;
    doVisSubTypes(6);
}

/* drawings: shadows */
document.querySelector("#cb_drawings_shadows").addEventListener("change", doDrawingsShadows);

function doDrawingsShadows() {

    const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='col-'] figure");
    let el_figs;
    
    if (!document.getElementById("cb_drawings_shadows").checked) {
        for (let i = 0; i < objFigs.length; i++) {
            el_figs = objFigs[i];
            el_figs.classList.remove("fig-shadows-trans");
        }
    }
    else {
        for (let i = 0; i < objFigs.length; i++) { 
            el_figs = objFigs[i];
            el_figs.classList.add("fig-shadows-trans");
        }
    }
}

function resetDrawingsProps() {
    document.getElementById("cb_drawings_shadows").checked = false;
}

/*
//////////////// VISUALS: ICONS ///////////////
*/

function doIcons() {
    removeVisual();
    
    // Visual types
    document.getElementById("form_vis_types").style.display = "block";
    document.getElementById("rb_vis_type_1").disabled=false;
    document.getElementById("rb_vis_type_2").disabled=false;
    document.getElementById("rb_vis_type_3").disabled=false;
    document.getElementById("rb_vis_type_4").checked=true;
    document.getElementById("rb_vis_type_4").disabled=false;
    document.getElementById("rb_vis_type_5").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-transparent").style.display = "none";
    document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-icons").style.display = "block";
    document.getElementById("properties-videos").style.display = "none";

    // Reset properties
    resetPhotoProps();
    resetTransProps();
    resetDrawingsProps();
    resetVideoProps();
    // Set properties
    document.getElementById("dd_icons_type").value = "0";
    document.getElementById("rb_icon_align_center").checked = true;
    document.getElementById("cb_icon_size_plus").checked = true;
-    
    doVisSubTypes(7);    
}

document.querySelector("#dd_icons_type").addEventListener("change", doIconsType);

function doIconsType() {

    let opt = document.querySelector("#dd_icons_type").value;
    removeVisual();
    if (opt==="0") {
        doVisSubTypes(7);    
    }
    
    else if (opt==="1") {
        doVisSubTypes(8);    
    }    
}

/* Icons: size */
document.querySelector("#form_icon_size").addEventListener("change", doIconSize);

function doIconSize() {
    const rbs = document.querySelectorAll("input[name='icon-size']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='col-'] figure");
    let el_fig;

    if (selectedValue==="icon-plus") {    
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig = objFigs[i];
            el_fig.classList.remove("icon-small");
        }
    }

    else if (selectedValue==="icon-minus") {
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig = objFigs[i];
            el_fig.classList.add("icon-small");
        }
    }
}

/* Icons: align */
document.querySelector("#form_icons_align").addEventListener("change", doIconAlign);

function doIconAlign() {

    const rbs = document.querySelectorAll("input[name='icons_align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='col-'] figure");
    let el_fig;

    if (selectedValue==="left") {    
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig = objFigs[i];
            el_fig.classList.add("icon-left");
        }
    }

    else if (selectedValue==="center") {
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig = objFigs[i];
            el_fig.classList.remove("icon-left");
        }
    }
}


function resetIconProps() {
    document.getElementById("dd_icons_type").value="0";
    document.getElementById("cb_icon_size_plus").checked=false;
    document.getElementById("cb_icon_size_minus").checked=false;
    document.getElementById("rb_icon_align_left").checked=true;
    document.getElementById("rb_icon_align_center").checked=false;
    document.getElementById("rb_icon_align_left").checked=false;
    document.getElementById("rb_icon_align_center").checked=false;        
}

/*
//////////////// VISUALS: VIDEOS ///////////////
*/

function doVideos() {

    removeVisual();
    
    // Visual types
    document.getElementById("form_vis_types").style.display = "block";
    document.getElementById("rb_vis_type_1").disabled=false;
    document.getElementById("rb_vis_type_2").disabled=false;
    document.getElementById("rb_vis_type_3").disabled=false;
    document.getElementById("rb_vis_type_4").disabled=false;
    // document.getElementById("rb_vis_type_5").checked=true;
    document.getElementById("rb_vis_type_5").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-transparent").style.display = "none";
    document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-icons").style.display = "none";
    document.getElementById("properties-videos").style.display = "block";

    // Reset properties
    resetPhotoProps();
    resetDrawingsProps();
    resetTransProps();
    resetIconProps();
    // Set properties
    document.getElementById("dd_videos_type").value = "0";
    doVisSubTypes(9);    
}

document.querySelector("#dd_videos_type").addEventListener("change", doVideosType);

function doVideosType() {

    let opt = document.querySelector("#dd_videos_type").value;
    removeVisual();
    if (opt==="0") {
        doVisSubTypes(9);    
    }
    
    else if (opt==="1") {
        doVisSubTypes(10);    
    }
    else if (opt==="2") {
        doVisSubTypes(11);    
    }
}

function resetVideoProps() {
    document.querySelector("#dd_videos_type").value="0";
}


function doVisSubTypes(n) {
    const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");

    let el_col;
    let arrContent = [];
    let arrContentLoop = [];

    // photos: landscape
    if (n===1) {
        for (let i = 0; i < (arrPic.length-1); i++) {
            arrContent[i] = arrPic[i];
        }
    }
    // photos: portrait
    else if (n===2) {
        for (let i = 0; i < (arrPic.length-1); i++) {
            arrContent[i] = arrPic[i];
        }
    }
    // photos: square
    else if (n===3) {
        for (let i = 0; i < (arrPic.length-1); i++) {
            arrContent[i] = arrPic[i];
        }
    }
    // photos: circle
    else if (n===4) {
        for (let i = 0; i < (arrPic.length-1); i++) {
            arrContent[i] = arrPic[i];
        }
    }

    // transparent: landscape
    else if (n===5) {
        for (let i = 0; i < (arrTrans.length-1); i++) {
            arrContent[i] = arrTrans[i];
        }
    }

    // drawings: landscape
    else if (n===6) {
        for (let i = 0; i < (arrIllus.length-1); i++) {
            arrContent[i] = arrIllus[i];
        }
    }

    // icons: Font Awesome
    else if (n===7) {
        for (let i = 0; i < (arrIconFA.length-1); i++) {
            arrContent[i] = arrIconFA[i];
        }
    }

    // icons: Line Awesome
    else if (n===8) {
        for (let i = 0; i < (arrIconLA.length-1); i++) {
            arrContent[i] = arrIconLA[i];
        }
    }

    // videos: file
    else if (n===9) {
        for (let i = 0; i < (arrVidFile.length-1); i++) {
            arrContent[i] = arrVidFile[i];
        }
    }

    else if (n===10) {
        for (let i = 0; i < (arrVidYT.length-1); i++) {
            arrContent[i] = arrVidYT[i];
        }
    }

    else if (n===11) {
        for (let i = 0; i < (arrVidRumble.length-1); i++) {
            arrContent[i] = arrVidRumble[i];
        }
    }    


    if (objCols.length === 2) {
        for (let i = 0; i < (arrContent.length-1); i++) {
            arrContentLoop[i] = arrContent[i];
        }
    }

    else if (objCols.length === 4) {
        const arrContentTemp = [];
        for (let i = 0; i < (arrContent.length-1); i++) {
            arrContentTemp[i] = arrContent[i];
        }
        arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
    }

    else if (objCols.length === 6) {
        const arrContentTemp = [];
        for (let i = 0; i < (arrContent.length-1); i++) {
            arrContentTemp[i] = arrContent[i];
        }
        arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
    }


    // Loop through columns
    for (let i = 0; i < objCols.length; i++) {
        el_col = objCols[i]; 
        el_col.innerHTML = arrContentLoop[i] + el_col.innerHTML; 
    }

    iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML.replaceAll("</figure>\t", "</figure>");

}

function removeVisual() {
    const parentNode = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
    var el_img = Array.prototype.slice.call(iframe.contentWindow.document.getElementsByTagName("figure"),0); 
    for (let i = 0; i < el_img.length; i++) {
        el_img[i].parentNode.removeChild(el_img[i]);
    }
    parentNode.innerHTML = parentNode.innerHTML.replaceAll("<div class=\"col-3\">\n\t\t\t", "<div class=\"col-3\">");
    parentNode.innerHTML = parentNode.innerHTML.replaceAll("<div class=\"col-4\">\n\t\t\t", "<div class=\"col-4\">");
}

