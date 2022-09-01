import {content_photo_landscape_section, content_photo_square_section, content_trans_landscape_section, content_drawing_landscape_section, content_vid_file_section, content_vid_yt_section, content_vid_rumble_section, content_textbox_section, content_H4Overlay_section } from '../js/arr-content.js';

/*
////////////////////// VISUALS ///////////////////////
*/

document.querySelector("#dd_focal_point").addEventListener("change", doImgFocalPoint);

/*
//////////////// MENU: ILLUSTRATION ////////////////////
*/

document.querySelector("#dd_focal_point").addEventListener("change", doImgFocalPoint);

function doImgFocalPoint() {
    let opt = document.querySelector("#dd_focal_point").value;
    if (opt==="0") {
        iframe.contentWindow.document.querySelector(".container-media img").src = "../../ui/assets/img/1920x800-center.jpg";
    }
    else if (opt==="1") {
        iframe.contentWindow.document.querySelector(".container-media img").src = "../../ui/assets/img/1920x800-right.jpg";
    }
    else if (opt==="2") {
        iframe.contentWindow.document.querySelector(".container-media img").src = "../../ui/assets/img/1920x800-left.jpg";
    }
}

document.querySelector("#dd_nudge_mobile").addEventListener("change", doNudgeMobile);

function doNudgeMobile() {
    let opt = document.querySelector("#dd_nudge_mobile").value;
    const el_media = iframe.contentWindow.document.querySelector(".container-media");

    if (opt==="0") {
        el_media.classList.remove("pull-to-left");
        el_media.classList.remove("push-to-right");
    }

    else if (opt==="1") {
        el_media.classList.remove("push-to-right");
        el_media.classList.add("pull-to-left");
    }

    else if (opt==="2") {
        el_media.classList.remove("pull-to-left");
        el_media.classList.add("push-to-right");
    }
}

document.querySelector("#slider-thumb").addEventListener("input", doSliderOpacity);

function doSliderOpacity() {
    let sliderOpacity = document.getElementById("slider-thumb");
    let output = document.getElementById("slider-display");

    output.innerHTML = ((sliderOpacity.value)/10).toFixed(1); // Display the default slider value

    // Update display of slider value on drag
    output.innerHTML = ((this.value)/10).toFixed(1);

    let sub_string = "background-image";
    let newStyle = "header.hero-block .container-overlay { background-image: linear-gradient(rgba(0,0,0,"+output.innerHTML+"),rgba(0,0,0,"+output.innerHTML+")); } \n";

    console.log(newStyle);

    // doUpdateArray(sub_string,newStyle);
  
    let style = document.createElement('style');
    iframe.contentWindow.document.head.appendChild(style);
    style.appendChild(document.createTextNode(newStyle));
    enableCSS();
}
