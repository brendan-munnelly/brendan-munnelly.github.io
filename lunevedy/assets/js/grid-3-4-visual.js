import {arrPic, arrTrans, arrIllus, arrVidFile, arrVidYT, arrIconFA, arrIconLA } from '../js/arr-content.js';

section_class = sessionStorage.getItem('section-selector');
col_no = sessionStorage.getItem('col-no');
col_count = sessionStorage.getItem('col-count');

/*
////////////////////// VISUALS ///////////////////////
*/

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
  
    const obj_col = iframe.contentWindow.document.querySelectorAll("."+section_class +" "+col_no);
    let el_cols; // each child column block
    let col_flex ="";
    if (col_no===".col-3") {
        col_flex=".flex-cols-3";

    }
    else if (col_no===".col-4") {
        col_flex=".flex-cols-4";
    }

    if (selectedValue==="none") {
        removeVisual();
    }

    else if ( (selectedValue==="pictures") || (selectedValue==="transparent") || (selectedValue==="illustrations") || (selectedValue==="vid_file") || (selectedValue==="vid_yt")  ) {
        removeVisual();
        for (let i = 1; i <= obj_col.length; i++) {
            // Current content of each column block
            el_cols = iframe.contentWindow.document.querySelector(col_flex+" "+col_no+":nth-child("+i+")");
            // Add figure at end of current content
            if (selectedValue==="pictures") {
                el_cols.innerHTML = arrPic[i-1] + el_cols.innerHTML; 
            }
            else if (selectedValue==="transparent") {
                el_cols.innerHTML = arrTrans[i-1] + el_cols.innerHTML; 
            }
            else if (selectedValue==="illustrations") {
                el_cols.innerHTML = arrIllus[i-1] + el_cols.innerHTML; 
            }
            else if (selectedValue==="vid_file") {
                el_cols.innerHTML = arrVidFile[i-1] + el_cols.innerHTML; 
            }
            else if (selectedValue==="vid_yt") {
                el_cols.innerHTML = arrVidYT[i-1] + el_cols.innerHTML; 
            }
        }
        // Enable image properties
        enableImgProps();
    }

    else if ( (selectedValue==="icons-fa") || (selectedValue==="icons-la") ) {
        removeVisual();
        for (let i = 1; i <= obj_col.length; i++) {
            el_cols = iframe.contentWindow.document.querySelector(col_flex+" "+col_no+":nth-child("+i+")");            
            if (selectedValue==="icons-fa") {
                el_cols.innerHTML = arrIconFA[i-1] + el_cols.innerHTML; 
            }
            else if (selectedValue==="icons-la") {
                el_cols.innerHTML = arrIconLA[i-1] + el_cols.innerHTML; 
            }
        }
        // Enables icon properties
        document.getElementById("cb_icon_size_plus").checked=true;
        document.getElementById("cb_icon_size_minus").checked=false;
        document.getElementById("cb_icon_size_plus").disabled=false;
        document.getElementById("cb_icon_size_minus").disabled=false;
        document.getElementById("rb_icon_align_left").disabled=false;
        document.getElementById("rb_icon_align_center").disabled=false;
        document.getElementById("rb_icon_align_left").checked=false;
        document.getElementById("rb_icon_align_center").checked=true;        
        document.getElementById("btn_icon_color").disabled=false;
    }
}


/*
//////////////// VISUAL PROPERTIES: IMAGE CORNERS ///////////////
*/

document.querySelector("#cb_img_corners_soft").addEventListener("change", doImgCorners);

function doImgCorners() {

    if (!document.getElementById("cb_img_corners_soft").checked) {
        iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("fig-corners-soft");
    }
    else {
        iframe.contentWindow.document.querySelector('.'+section_class).classList.add("fig-corners-soft");
    }
}

/*
//////////////// VISUAL PROPERTIES: IMAGE SHADOWS ///////////////
*/

/* Enable image shadows */
document.querySelector("#cb_img_shadows").addEventListener("change", doImgShadows);


function doImgShadows() {
    if (!document.getElementById("cb_img_shadows").checked) {
        iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("fig-shadow");
    }
    else {
        iframe.contentWindow.document.querySelector('.'+section_class).classList.add("fig-shadow");
    }
}


// Image properties with labels
function enableImgProps() {
    document.getElementById("cb_img_corners_soft").disabled=false;
    document.getElementById("cb_img_corners_soft").checked=false;
    document.getElementById("cb_img_shadows").disabled=false;
    document.getElementById("cb_img_shadows").checked=false;
    document.querySelector("label[for='cb_img_corners_soft']").style.color = "#fff";
    document.querySelector("label[for='cb_img_shadows']").style.color = "#fff";
}

function disableImgProps() {
    document.getElementById("cb_img_corners_soft").disabled=true;
    document.getElementById("cb_img_corners_soft").checked=false;
    document.getElementById("cb_img_shadows").disabled=true;
    document.getElementById("cb_img_shadows").checked=false;
    document.querySelector("label[for='cb_img_corners_soft']").style.color = "var(--gray-500)";
    document.querySelector("label[for='cb_img_shadows']").style.color = "var(--gray-500)";
    iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("fig-shadow");
    iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("fig-corners-soft");
}


/*
//////////////// ICON PROPERTIES: SIZE ///////////////
*/

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

/*
//////////////// ICON PROPERTIES: ALIGN ///////////////
*/

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
    // Disable image properties
    disableImgProps();
    // Disable icon properties
    document.getElementById("cb_icon_size_plus").checked=false;
    document.getElementById("cb_icon_size_minus").checked=false;
    document.getElementById("cb_icon_size_plus").disabled=true;
    document.getElementById("cb_icon_size_minus").disabled=true;
    document.getElementById("rb_icon_align_left").disabled=true;
    document.getElementById("rb_icon_align_center").disabled=true;
    document.getElementById("rb_icon_align_left").checked=false;
    document.getElementById("rb_icon_align_center").checked=false;        
    document.getElementById("btn_icon_color").disabled=true;
}

// console.log("grid-visual.js has loaded.")