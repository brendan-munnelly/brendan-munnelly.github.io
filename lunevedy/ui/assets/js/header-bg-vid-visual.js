import { assets_poster_focal_center, assets_poster_focal_left, assets_video_focal_left, assets_poster_focal_right, assets_video_focal_right } from '../js/arr-content.js';

/*
////////////////////// VISUALS ///////////////////////
*/

document.querySelector("#dd_focal_point").addEventListener("change", doVidFocalPoint);

function doVidFocalPoint() {
    let opt = document.querySelector("#dd_focal_point").value;
    if (opt==="0") {
        iframe.contentWindow.document.querySelector(".container-media video").setAttribute('poster',assets_poster_focal_center);
        iframe.contentWindow.document.querySelector(".container-media video").src = assets_poster_focal_center;
    }
    else if (opt==="1") {
        iframe.contentWindow.document.querySelector(".container-media video").setAttribute('poster',assets_poster_focal_right);
        iframe.contentWindow.document.querySelector(".container-media video").src = assets_video_focal_right;
    }
    else if (opt==="2") {
        iframe.contentWindow.document.querySelector(".container-media video").setAttribute('poster',assets_poster_focal_left);
        iframe.contentWindow.document.querySelector(".container-media video").src = assets_video_focal_left;
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

        // let el_head = iframe.contentWindow.document.head;
        // let el_style = document.createElement('style');

        // // let el_style = document.createElement('style');
        // // el_head.appendChild(el_style);
        // // el_style.type = 'text/css';
        // // el_style.appendChild(document.createTextNode(newStyle));

        // el_head.appendChild(el_style);
        // el_style.type = 'text/css';
        // el_style.appendChild(document.createTextNode(newStyle));
        // enableCSS();
    // } 

}
