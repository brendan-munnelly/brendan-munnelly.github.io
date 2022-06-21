import {arrPic, arrTrans, arrIllus, arrVidFile, arrVidYT, arrVidRumble, arrIconFA, arrIconLA } from '../js/arr-content.js';

section_class = sessionStorage.getItem('section-selector');
col_no = sessionStorage.getItem('col-no');
col_count = sessionStorage.getItem('col-count');

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
        // document.getElementById("properties-transparent").style.display = "none";
        // document.getElementById("properties-drawings").style.display = "none";
        document.getElementById("properties-icons").style.display = "none";
        document.getElementById("properties-videos").style.display = "none";
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
        // doTransparent();
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

    // Property containers
    document.getElementById("properties-photos").style.display = "block";
    // document.getElementById("properties-transparent").style.display = "none";
    // document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-icons").style.display = "none";
    document.getElementById("properties-videos").style.display = "none";

    // Property resets
    resetIconProps();
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
    else if (opt==="5") {
        doVisSubTypes(5);    
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
            el_fig.classList.remove("zoom-photos");
        }
        document.getElementById("cb_photos_zoom").checked=false;
        document.getElementById("cb_photos_zoom").disabled=true;
        document.getElementById("cb_photos_brightness").checked=false;
        document.getElementById("cb_photos_brightness").disabled=true;
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
            el_fig.classList.remove("zoom-photos");
            document.getElementById("cb_photos_shadows").disabled=false;
            document.getElementById("cb_photos_shadows").checked=false;            
        }
    }

    else {
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig = objFigs[i];
            el_fig.classList.add("zoom-photos");
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
            el_fig.classList.remove("zoom-photos-brightness");
        }
    }

    else {
        for (let i = 0; i < objFigs.length; i++) { 
            el_fig = objFigs[i];
            el_fig.classList.add("zoom-photos-brightness");
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
}

/*
//////////////// VISUALS: TRANSPARENT ///////////////
*/



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
    // document.getElementById("properties-transparent").style.display = "none";
    // document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-icons").style.display = "none";
    document.getElementById("properties-videos").style.display = "none";

    // Reset properties
    resetPhotoProps();
    resetIconProps();

    // Set properties
    doVisSubTypes(6);
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
    document.getElementById("properties-icons").style.display = "block";
    document.getElementById("properties-videos").style.display = "none";

    // Reset properties
    resetPhotoProps()

    // Set properties
    document.getElementById("dd_icons_type").value = "0";
    document.getElementById("rb_icon_align_center").checked = true;
    document.getElementById("cb_icon_size_plus").checked = true;
-    
    doVisSubTypes(10);    
}

document.querySelector("#dd_icons_type").addEventListener("change", doIconsType);

function doIconsType() {

    let opt = document.querySelector("#dd_icons_type").value;
    removeVisual();
    if (opt==="0") {
        doVisSubTypes(10);    
    }
    
    else if (opt==="1") {
        doVisSubTypes(11);    
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

    const el_section = iframe.contentWindow.document.querySelector('.'+section_class);
    if (selectedValue==="icon-plus") {
        el_section.classList.remove("icon-small");
    }
    else if (selectedValue==="icon-minus") {
        el_section.classList.add("icon-small");
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

    const el_section = iframe.contentWindow.document.querySelector('.'+section_class);

    if (selectedValue==="left") {
        el_section.classList.add("icon-left");
    }
    else if (selectedValue==="center") {
        el_section.classList.remove("icon-left");
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
    document.getElementById("rb_vis_type_5").checked=true;
    document.getElementById("rb_vis_type_5").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-icons").style.display = "none";
    document.getElementById("properties-videos").style.display = "block";

    // Reset properties
    resetPhotoProps();
    resetIconProps();

    // Set properties
    document.getElementById("dd_videos_type").value = "0";
-    
    doVisSubTypes(20);    
}

document.querySelector("#dd_videos_type").addEventListener("change", doVideosType);

function doVideosType() {

    let opt = document.querySelector("#dd_videos_type").value;
    removeVisual();
    if (opt==="0") {
        doVisSubTypes(20);    
    }
    
    else if (opt==="1") {
        doVisSubTypes(21);    
    }
    else if (opt==="2") {
        doVisSubTypes(22);    
    }
}

function doVisSubTypes(n) {
    const obj_col = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] > div");
    let el_cols;
    for (let i = 1; i <= obj_col.length; i++) {
        el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] > div:nth-of-type("+i+")");
        // photos: landscape
        if (n===1) {
            el_cols.innerHTML = arrPic[i-1] + el_cols.innerHTML; 
        }
        // photos: portrait
        else if (n===2) {
            el_cols.innerHTML = arrPic[i-1] + el_cols.innerHTML; 
        }
        // photos: square
        else if (n===3) {
            el_cols.innerHTML = arrPic[i-1] + el_cols.innerHTML; 
        }
        // photos: circle
        else if (n===4) {
            el_cols.innerHTML = arrPic[i-1] + el_cols.innerHTML; 
        }        
        // photos: small faces
        else if (n===5) {
            el_cols.innerHTML = arrPic[i-1] + el_cols.innerHTML; 
        }
        // drawings: landscape
        else if (n===6) {
            el_cols.innerHTML = arrIllus[i-1] + el_cols.innerHTML; 
        }
        // icons: Font Awesome
        else if (n===10) {
            el_cols.innerHTML = arrIconFA[i-1] + el_cols.innerHTML; 
        }
        // icons: Line Awesome
        else if (n===11) {
            el_cols.innerHTML = arrIconLA[i-1] + el_cols.innerHTML; 
        }
        // videos: file
        else if (n===20) {
            el_cols.innerHTML = arrVidFile[i-1] + el_cols.innerHTML; 
        }
        // videos: YT
        else if (n===21) {
            el_cols.innerHTML = arrVidYT[i-1] + el_cols.innerHTML; 
        }
        // videos: Rumble
        else if (n===22) {
            el_cols.innerHTML = arrVidRumble[i-1] + el_cols.innerHTML; 
        }        
    }
}

function removeVisual() {
    const parentNode = iframe.contentWindow.document.querySelector("#HTML-Content");
    var el_img = Array.prototype.slice.call(iframe.contentWindow.document.getElementsByTagName("figure"),0); 
    for (let i = 0; i < el_img.length; i++) {
        el_img[i].parentNode.removeChild(el_img[i]);
    }

    iframe.contentWindow.document.querySelector('.'+section_class).innerHTML = iframe.contentWindow.document.querySelector('.'+section_class).innerHTML.replaceAll("<div class=\"col-3\">\n\t\t\t", "<div class=\"col-3\">");
    // Remove any corner or shadow properties
    iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("fig-corners-soft");
    iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("fig-shadow");
}

