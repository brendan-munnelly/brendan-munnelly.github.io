import {content_photo_landscape_section, content_photo_square_section, content_trans_landscape_section, content_drawing_landscape_section, content_vid_file_section, content_vid_yt_section, content_vid_rumble_section, content_textbox_section, content_H4Overlay_section } from '../js/arr-content.js';

/*
////////////////////// VISUALS: FOUR TYPES ///////////////////////
*/

// global figure

document.querySelector("#cb_visual").addEventListener("change", doVis);

function doVis() {
    if (!document.getElementById("cb_visual").checked) {
        removeVisual();
        document.getElementById("rb_vis_type_1").disabled=true;
        document.getElementById("rb_vis_type_2").disabled=true;
        document.getElementById("rb_vis_type_3").disabled=true;
        document.getElementById("rb_vis_type_4").disabled=true;

        document.getElementById("form_vis_types").style.display = "none";
        document.getElementById("properties-photos").style.display = "none";
        document.getElementById("cb_img_textbox").checked=false;
        document.getElementById("cb_img_h4").checked=false;
        document.getElementById("properties-transparent").style.display = "none";
        document.getElementById("properties-drawings").style.display = "none";
        document.getElementById("properties-videos").style.display = "none";
        document.getElementById("show-textbox").style.display = "none";
    }
    else {
        document.getElementById("dd_switch_section_vis_width").value = "100";
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
    document.getElementById("dd_switch_section_vis_width").value = "100";

    if (selectedValue==="photos") {
        doPhotos();
    }
    else if (selectedValue==="transparent") {
        doTransparent();
    }    
    else if (selectedValue==="drawings") {
        doDrawings();
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
    document.getElementById("properties-transparent").style.display = "none";
    document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-videos").style.display = "none";

    // Property resets
    resetTransProps();
    resetDrawingsProps();    
    resetVideoProps();
    // Set properties
    document.getElementById("dd_photos_shape").value = "1";
    doVisSubTypes(1);
}

document.querySelector("#dd_photos_shape").addEventListener("change", doPhotosType);

function doPhotosType() {

    let opt = document.querySelector("#dd_photos_shape").value;
    removeVisual();
    document.getElementById("dd_switch_section_vis_width").value = "100";
    if (opt==="1") {
        doVisSubTypes(1); 
        document.getElementById("cb_photos_round").checked = false;
        document.getElementById("cb_photos_round").disabled = true;
    }
    else if (opt==="2") {
        doVisSubTypes(2);    
        document.getElementById("cb_photos_round").checked = false;
        document.getElementById("cb_photos_round").disabled = false;
    }
    // else if (opt==="3") {
    //     doVisSubTypes(3);    
    // }
    // else if (opt==="4") {
    //     doVisSubTypes(4);    
    // }        
}

/* photos: corners */

document.querySelector("#cb_photos_corners_soft").addEventListener("change", doPhotosCorners);

function doPhotosCorners() {

    const el_fig = iframe.contentWindow.document.querySelector("section figure");

    if (!document.getElementById("cb_photos_corners_soft").checked) {
        el_fig.classList.remove("fig-corners-soft");
    }
    else {
        el_fig.classList.add("fig-corners-soft");
    }
}

/* photos: round */
document.querySelector("#cb_photos_round").addEventListener("change", doPhotosRound);

function doPhotosRound() {
    const el_fig = iframe.contentWindow.document.querySelector("section figure img");
    
    if (!document.getElementById("cb_photos_round").checked) {
        el_fig.classList.remove("img-rounded");
        document.getElementById("cb_photos_corners_soft").checked = false;
        document.getElementById("cb_photos_corners_soft").disabled = false;
        document.getElementById("cb_img_textbox").checked = false;
        document.getElementById("cb_img_textbox").disabled = false;
        document.getElementById("cb_img_h4").checked = false;
        document.getElementById("cb_img_h4").disabled = false;
    }
    else {
        el_fig.classList.add("img-rounded");
        document.getElementById("cb_photos_corners_soft").checked = false;
        document.getElementById("cb_photos_corners_soft").disabled = true;
        document.getElementById("cb_img_textbox").checked = false;
        document.getElementById("cb_img_textbox").disabled = true;
        document.getElementById("cb_img_h4").checked = false;
        document.getElementById("cb_img_h4").disabled = true;
    }
}

/* photos: shadows */
document.querySelector("#cb_photos_shadows").addEventListener("change", doPhotosShadows);

function doPhotosShadows() {

    const el_fig = iframe.contentWindow.document.querySelector("section figure");
    
    if (!document.getElementById("cb_photos_shadows").checked) {
        el_fig.classList.remove("fig-shadows-box");
    }
    else {
        el_fig.classList.add("fig-shadows-box");
    }
}

/* photos: overlay textbox */

document.querySelector("#cb_img_textbox").addEventListener("change", doColH3TextBox);

function doColH3TextBox() {

    const el_fig = iframe.contentWindow.document.querySelector("section figure");
    let el_TextBox;
    let node;   
    const arrContent = []; 

    if (!document.querySelector("#cb_img_textbox").checked) {
        // Remove div as child of figure
        el_TextBox = iframe.contentWindow.document.querySelector("section figure .cols-img-textbox");
        el_fig.removeChild(el_TextBox);
        document.getElementById("show-textbox").style.display = "none";
    }

    else {
        // Add overlay textbox as child of figure
        node = document.createElement("div");
        node.innerText = content_textbox_section;
        node.classList.add("cols-img-textbox");
        el_fig.appendChild(node);
        document.getElementById("show-textbox").style.display = "block";
    }
}

/* photos: text box */

document.querySelector("#form_img_textbox_shape").addEventListener("change", doTextBoxShape);

function doTextBoxShape() {

    const el_TextBox = iframe.contentWindow.document.querySelector(".cols-img-textbox"); 
    const rbs = document.querySelectorAll("input[name='switch_img_textbox_shape']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="square") {
        el_TextBox.classList.remove("corners-soft");
    }
        
    else if (selectedValue==="soft") {
        el_TextBox.classList.add("corners-soft");
    }
}

/* photos: overlay h4 sub-heading */

document.querySelector("#cb_img_h4").addEventListener("change", doColH4Overlay);

function doColH4Overlay() {

    const el_fig = iframe.contentWindow.document.querySelector("section figure");
    let el_H4_overlay;
    let node;   

    if (!document.querySelector("#cb_img_h4").checked) {
        // Remove div as child of figure
        el_H4_overlay = iframe.contentWindow.document.querySelector("section figure .cols-img-h4");
        el_fig.removeChild(el_H4_overlay);
        el_fig.classList.remove("figure-overlay");
    }

    else {
        // Add overlay textbox as child of figure
        node = document.createElement("div");
        node.innerText = content_H4Overlay_section;
        node.classList.add("cols-img-h4");
        el_fig.appendChild(node);
        el_fig.classList.add("figure-overlay");
    }
}

function resetPhotoProps() {
    document.getElementById("dd_photos_shape").value="1";
    document.getElementById("cb_photos_shadows").checked=false;
    document.getElementById("cb_photos_corners_soft").checked=false;
    document.getElementById("show-textbox").style.display = "none";
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

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-transparent").style.display = "block";
    document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-videos").style.display = "none";

    // Reset properties
    resetPhotoProps();
    resetDrawingsProps();
    resetVideoProps();
    // Set properties
    document.getElementById("cb_trans_shadows").checked = false;
    doVisSubTypes(4);
}

/* transparent: shadows */
document.querySelector("#cb_trans_shadows").addEventListener("change", doTransShadows);

function doTransShadows() {

    const el_fig = iframe.contentWindow.document.querySelector("section figure");

    if (!document.getElementById("cb_trans_shadows").checked) {
        el_fig.classList.remove("fig-shadows-trans");
    }
    else {
        el_fig.classList.add("fig-shadows-trans");
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
    document.getElementById("rb_vis_type_4").disabled=false;

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-transparent").style.display = "none";
    document.getElementById("properties-drawings").style.display = "block";
    document.getElementById("properties-videos").style.display = "none";

    // Reset properties
    resetPhotoProps();
    resetTransProps();
    resetVideoProps();

    // Set properties
    document.getElementById("cb_drawings_shadows").checked = false;
    doVisSubTypes(5);
}

/* drawings: shadows */
document.querySelector("#cb_drawings_shadows").addEventListener("change", doDrawingsShadows);

function doDrawingsShadows() {

    const el_fig = iframe.contentWindow.document.querySelector("section figure");
    
    if (!document.getElementById("cb_drawings_shadows").checked) {
        el_fig.classList.remove("fig-shadows-trans");
    }
    else {
        el_fig.classList.add("fig-shadows-trans");
    }
}

function resetDrawingsProps() {
    document.getElementById("cb_drawings_shadows").checked = false;
}

/*
//////////////// VISUAL ELEMENT WIDTH (600px AND ABOVE ) ///////////////
*/

document.querySelector("#dd_switch_section_vis_width").addEventListener("change", doFigWidth);

function doFigWidth() {
    let opt = document.querySelector("#dd_switch_section_vis_width").value;
    const el_section_fig = iframe.contentWindow.document.querySelector("section figure");
    const el_section_fig_img = iframe.contentWindow.document.querySelector("section figure img");

    if (opt==="100") {
        el_section_fig.classList.remove("figure-width-50");
        el_section_fig.classList.remove("figure-width-80");
        el_section_fig.classList.remove("figure-width-full");
        document.getElementById("figure-animate").disabled = false;
    }

    else if (opt==="80") {
        el_section_fig.classList.remove("figure-width-50");
        el_section_fig.classList.remove("figure-width-full");
        el_section_fig.classList.add("figure-width-80");
        document.getElementById("figure-animate").disabled = false;
        // enableVisualAlign();
    }

    else if (opt==="50") {
        el_section_fig.classList.remove("figure-width-80");
        el_section_fig.classList.remove("figure-width-full");
        el_section_fig.classList.add("figure-width-50");
        document.getElementById("figure-animate").disabled = false;
        // enableVisualAlign();        
    }

    else if (opt==="full") {
        el_section_fig.classList.remove("figure-width-50");
        el_section_fig.classList.remove("figure-width-80");
        el_section_fig.classList.add("figure-width-full");
        // enableVisualAlign();        
        el_section_fig_img.classList.remove("img-rounded");
        document.getElementById("cb_photos_round").checked = false;
        document.getElementById("cb_photos_round").disabled = true;
        document.getElementById("figure-animate").disabled = true;
        document.getElementById("figure-animate").value = "0";
        removePlaceHolderContent();
    }
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

    // Property containers
    document.getElementById("properties-photos").style.display = "none";
    document.getElementById("properties-transparent").style.display = "none";
    document.getElementById("properties-drawings").style.display = "none";
    document.getElementById("properties-videos").style.display = "block";

    // Reset properties
    resetPhotoProps();
    resetDrawingsProps();
    resetTransProps();
    // Set properties
    document.getElementById("dd_videos_type").value = "0";
    doVisSubTypes(6);    
}

document.querySelector("#dd_videos_type").addEventListener("change", doVideosType);

function doVideosType() {

    let opt = document.querySelector("#dd_videos_type").value;
    removeVisual();
    if (opt==="0") {
        doVisSubTypes(6);    
    }
    
    else if (opt==="1") {
        doVisSubTypes(7);    
    }
    else if (opt==="2") {
        doVisSubTypes(8);    
    }
}

function resetVideoProps() {
    document.querySelector("#dd_videos_type").value="0";
}

function doVisSubTypes(n) {
    let el_visual;

    // photos: landscape
    if (n===1) {
        el_visual = content_photo_landscape_section;
    }
    // photos: square
    else if (n===2) {
        el_visual = content_photo_square_section;
    }
    // photos: circle
    else if (n===3) {
        el_visual = content_photo_square_section;
    }

    // transparent: landscape
    else if (n===4) {
        el_visual = content_trans_landscape_section;
    }

    // drawings: landscape
    else if (n===5) {
        el_visual = content_drawing_landscape_section;
    }

    // videos: file
    else if (n===6) {
        el_visual = content_vid_file_section;
    }

    // videos: YouTube
    else if (n===7) {
        el_visual = content_vid_yt_section;
    }

    // videos: Rumble
    else if (n===8) {
        el_visual = content_vid_rumble_section;
    }

    const objH2 = iframe.contentWindow.document.querySelector("section > h2");
    objH2.insertAdjacentHTML('beforebegin', el_visual);
}

function removeVisual() {
    document.getElementById("dd_switch_section_vis_width").value = "100";
    const parentNode = iframe.contentWindow.document.querySelector("section");
    var el_img = Array.prototype.slice.call(iframe.contentWindow.document.getElementsByTagName("figure"),0); 
    for (let i = 0; i < el_img.length; i++) {
        el_img[i].parentNode.removeChild(el_img[i]);
    }
}


/*
//////////////// ANIMATE VISUAL ///////////////
*/

document.querySelector("#figure-animate").addEventListener("change", doFigureAnimate);

function doFigureAnimate() {

    let opt = document.getElementById("figure-animate").value;

    if (opt==="0") {
        removeFigureAnimate();
    }

    else if (opt==="2") {
        removeFigureAnimate();
        iframe.contentWindow.document.querySelector("section > figure").classList.add("reveal-slide-up");
        // doFigureReveal(2);
        addPlaceHolderContent();
    }

    else if (opt==="3") {
        removeFigureAnimate();
        iframe.contentWindow.document.querySelector("section > figure").classList.add("reveal-slide-from-left");
        // doFigureReveal(3);
        addPlaceHolderContent();
    }

    else if (opt==="4") {
        removeFigureAnimate();
        iframe.contentWindow.document.querySelector("section > figure").classList.add("reveal-slide-from-right");
        // doFigureReveal(4);
        addPlaceHolderContent();
    }

    else if (opt==="5") {
        removeFigureAnimate();
        iframe.contentWindow.document.querySelector("section > figure").classList.add("reveal-fade-in");
        // doFigureReveal(4);
        addPlaceHolderContent();
    }

    else if (opt==="6") {
        removeFigureAnimate();
        iframe.contentWindow.document.querySelector("section > figure").classList.add("reveal-scale-in");
        // doFigureReveal(4);
        addPlaceHolderContent();
    }
}

function removeFigureAnimate() {
    removePlaceHolderContent();
    iframe.contentWindow.document.querySelector("section > figure").classList.remove("reveal-slide-up");
    iframe.contentWindow.document.querySelector("section > figure").classList.remove("reveal-slide-from-left");
    iframe.contentWindow.document.querySelector("section > figure").classList.remove("reveal-slide-from-right");
    iframe.contentWindow.document.querySelector("section > figure").classList.remove("reveal-fade-in");
    iframe.contentWindow.document.querySelector("section > figure").classList.remove("reveal-scale-in");
}


function addPlaceHolderContent() {
    const strContent = "<section><div class='col-1 text-center'><h2>Some placeholder text</h2><h3>Leverage agile frameworks to provide a robust synopsis for high level overviews to foster collaborative thinking.</h3></div><div class='flex-cols-3'><div class='col-3'><figure><img src='../../ui/assets/img/460x280-bakery.png' alt='Placeholder image'></figure><h3>Lunevedy Cafe Bakery</h3><p>Our friendly baristas are waiting to pour your favourite beverage. We use only hand roasted coffee and expertly selected tea leaves.</p></div><div class='col-3'><figure><img src='../../ui/assets/img/460x280-fashion-yellow.png' alt='Placeholder image'></figure><h3>Lunevedy Fashion Store</h3><p>Level up your look with our ever-changing selection of on-trend brands. We ship to almost everywhere quickly and reliably.</p></div><div class='col-3'><figure><img src='../../ui/assets/img/460x280-student.png' alt='Placeholder image'></figure><h3>Learn JavaScript today</h3><p>Supercharge your web design career with the <i>Lunevedy: JavaScript for Beginners</i> training course. All important topics covered.</p></div></div></section>";

    const placeHolderSection = document.createElement('section');
    placeHolderSection.classList.add('placeholder');
    placeHolderSection.style.backgroundColor ='#eceff1';
    placeHolderSection.style.filter = 'blur(1px)';
    placeHolderSection.style.paddingTop = '1%';
    placeHolderSection.style.paddingBottom = '1%';
    placeHolderSection.innerHTML=strContent;
    const HTMLContent = iframe.contentWindow.document.getElementById('HTML-Content');
    const currentSection = iframe.contentWindow.document.querySelector('section');
    HTMLContent.insertBefore(placeHolderSection, currentSection);        
    document.getElementById("HTML-Content").scrollIntoView();
    iframe.contentWindow.document.querySelector('section').scrollIntoView();
}

function removePlaceHolderContent() {
    if (iframe.contentWindow.document.querySelector('section.placeholder')) {
        let placeHolderSection = iframe.contentWindow.document.querySelector('section.placeholder');
        placeHolderSection.remove();
    }
}

