
/*
//////////////// HERO BLOCK: COLUMNS ORDER  ///////////////
*/

document.querySelector("#dd_colOrder").addEventListener("change", doColOrder);

function doColOrder() {
    document.getElementById("dd_text_slide").value="0";
    let opt = document.querySelector("#dd_colOrder").value;
    const el_section = document.querySelector('.hero-half')
    if (opt==="0") {
        el_section.classList.add("half-image-right");
        el_section.classList.remove("half-image-left");
    }

    else if (opt==="1") {
        el_section.classList.remove("half-image-right");
        el_section.classList.add("half-image-left");
    }
}



/*
//////////////// BUTTONS: CORNER STYLE ////////////////////
*/

document.querySelector("#dd_cta_button_style").addEventListener("change", doButtonsCTAStyle);

function doButtonsCTAStyle() {
    let opt = document.querySelector("#dd_cta_button_style").value;
    // remove
    if (opt==="0") {
        removeButtonsCTAStyle();
    }
    // soft
    else if (opt==="1") {
        removeButtonsCTAStyle();
        console.log("Add soft");

        if (document.querySelector("#btn-cta")) {
            const el_btn_primary = document.querySelector("#btn-cta");
            el_btn_primary.classList.add("btn-soft");
        }
    }

    // rounded
    else if (opt==="2") {
        removeButtonsCTAStyle();
        console.log("Add pill");
        if (document.querySelector("#btn-cta")) {
            const el_btn_primary = document.querySelector("#btn-cta");
            el_btn_primary.classList.add("btn-rounded");
        }
    }
}

function removeButtonsCTAStyle() {

    if (document.querySelector("#btn-cta")) {
        const el_btn_primary = document.querySelector("#btn-cta");
        el_btn_primary.classList.remove("btn-soft");
        el_btn_primary.classList.remove("btn-rounded");
    }
}

/*
//////////////// MENU: BOTTOM BORDER DROP SHADOW ////////////////////
*/

document.querySelector("#dd_bottom_shadow").addEventListener("change", doBottomShadow);

function doBottomShadow() {
    let opt = document.querySelector("#dd_bottom_shadow").value;
    console.log("got here");
    // remove
    if (opt==="0") {
        removeBottomShadow();
    }
    // Always
    else if (opt==="1") {
        removeBottomShadow();
        if (document.querySelector(".container-menu")) {
            const el_menu = document.querySelector(".container-menu");
            el_menu.classList.add("menu-drop-shadow-desktop");
            el_menu.classList.add("menu-drop-shadow-mobile");
        }
    }

    // Only on-scroll
    else if (opt==="2") {
        console.log("On scroll only");
        removeBottomShadow();
        if (document.querySelector(".container-menu")) {
            const el_menu = document.querySelector(".container-menu");
            el_menu.classList.add("menu-drop-shadow");
        }
    }
}

function removeBottomShadow() {
    if (document.querySelector(".container-menu")) {
        const el_btn_primary = document.querySelector(".container-menu");
        el_btn_primary.classList.remove("menu-drop-shadow-desktop");
        el_btn_primary.classList.remove("menu-drop-shadow-mobile");
    }
}

/*
//////////////// BUTTONS: ICON POSITION ////////////////////
*/

document.querySelector("#dd_cta_button_icon").addEventListener("change", swapButtonIconsCTA);

function swapButtonIconsCTA() {
    let opt = document.querySelector("#dd_cta_button_icon").value;
    if (document.querySelector("a#btn-cta")) {  
        console.log("Button exists");    
        const icon_left_cta  ="<i class=\"fas fa-arrow-right\"><\/i><span>CTA Link<\/span>";
        const icon_right_cta ="<span>CTA Link<\/span><i class=\"fas fa-arrow-right\"><\/i>";

        // Icon at left. Text at right.       
        if (opt==="0") {
            const el_btn = document.querySelector("a#btn-cta");
            el_btn.innerHTML = icon_right_cta;
        }

        // Text at left. Icon at right.
        else if (opt==="1") {
            const el_btn = document.querySelector("a#btn-cta");
            el_btn.innerHTML = icon_left_cta;
        }

        else if (opt==="2") {
            const el_btn = document.querySelector("a#btn-cta");
            el_btn.innerHTML = "<span>CTA Link<\/span>";
        }
    }
}

/*
//////////////// MENU: STICKY ////////////////////
*/

document.querySelector("#dd_sticky").addEventListener("change", doStickyMenu);

function doStickyMenu() {
    console.log("Do menu sticky")
    let opt = document.querySelector("#dd_sticky").value;
    // remove
    if (opt==="0") {
        removeStickyMenu();
    }

    else if (opt==="1") {
        removeStickyMenu();
        enableCSS();
        enableSticky();

        if (document.querySelector(".container-menu")) {
            const el_menu = document.querySelector(".container-menu");
            el_menu.classList.add("menu-sticky");
        }
    }
}

function removeStickyMenu() {
    disableSticky();
    if (document.querySelector(".container-menu")) {
        const el_menu = document.querySelector(".container-menu");
        el_menu.classList.remove("menu-sticky");
    }

    if (document.querySelector(".hero-block")) {
        const el_menu = document.querySelector(".hero-block");
        el_menu.classList.remove("header-under-menu-sticky");
    }
}

function enableSticky() {
    document.getElementById("btn_bg_onscroll_menu").disabled=false;
    document.getElementById("btn_link_onscroll_passive").disabled=false;
    document.getElementById("btn_link_onscroll_active").disabled=false;
    document.getElementById("btn_a_cta_onscroll_passive_text").disabled=false;
    document.getElementById("btn_a_cta_onscroll_active_text").disabled=false;
    document.getElementById("btn_a_cta_onscroll_passive_bg").disabled=false;
    document.getElementById("btn_a_cta_onscroll_active_bg").disabled=false;
    document.getElementById("btn_a_cta_onscroll_passive_border").disabled=false;
    document.getElementById("btn_a_cta_onscroll_active_border").disabled=false;
    document.getElementById("btn_hamburger_sticky").disabled=false;
}

function disableSticky() {
    document.getElementById("btn_bg_onscroll_menu").disabled=true;
    document.getElementById("btn_link_onscroll_passive").disabled=true;
    document.getElementById("btn_link_onscroll_active").disabled=true;
    document.getElementById("btn_a_cta_onscroll_passive_text").disabled=true;
    document.getElementById("btn_a_cta_onscroll_active_text").disabled=true;
    document.getElementById("btn_a_cta_onscroll_passive_bg").disabled=true;
    document.getElementById("btn_a_cta_onscroll_active_bg").disabled=true;
    document.getElementById("btn_a_cta_onscroll_passive_border").disabled=true;
    document.getElementById("btn_a_cta_onscroll_active_border").disabled=true;
    document.getElementById("btn_hamburger_sticky").disabled=true;
}



/*
//////////////// COLOURS: ENABLE/DISABLE ///////////////
*/

function disableBgColor() {
    document.getElementById("btn_bg").disabled=true;
}

function enableBgColor() {
    document.getElementById("btn_bg").disabled=false;
}

function disableLabelColor() {
    document.getElementById("btn_upper_label").disabled=true;
}

function enableLabelColor() {
    document.getElementById("btn_upper_label").disabled=false;
}

/*
//////////////// COLUMN LABEL ABOVE H2 ///////////////
*/

document.querySelector("#cb_upperLabelOn").addEventListener("change", doUpperLabel);

function doUpperLabel() {
    // remove
    if (!document.getElementById("cb_upperLabelOn").checked) {
        removeUpperLabel();
    }
    // add
    else {
        document.querySelector("#HTML-Content .col-2 h1").insertAdjacentHTML("beforebegin", "<div class=\"container-upper-label\"><span>10% off all week<\/span><\/div>\n\n\t");
        enableLabelColor();
    }
}

function removeUpperLabel() {
    if (document.querySelector('.container-upper-label')) {
        const upperLabel = document.querySelector('.container-upper-label');
        upperLabel.remove();
        disableLabelColor();
    }
}


/*
//////////////// TEXT LENGTH ///////////////
*/

// document.querySelector("#dd_text_length").addEventListener("change", doTextLength);
    
function doTextLength() {
    let opt = document.querySelector("#dd_text_length").value;
    if (opt==="0") {
        document.querySelector(".container-text").classList.remove("text-long");
        document.querySelector("h1").innerHTML = "Nice heading";
    }
    else if (opt==="1") {
        document.querySelector(".container-text").classList.add("text-long");
        document.querySelector("h1").innerHTML = "Sometimes a short heading is not enough and a longer one is needed.";
    }
}

/*
//////////////// H2 SUB HEADING UNDER H1 ///////////////
*/

document.querySelector("#dd_h2").addEventListener("change", doH2);
document.getElementById("dd_h2").value="0";

function doH2() {
    let opt = document.querySelector("#dd_h2").value;
    //  regular
    if (opt==="0") {
        removeH2();
        const elH2 = document.querySelector("h1");
        elH2.insertAdjacentHTML("afterend", assets_header_h2);
        document.getElementById("btn_subhead").disabled=false;
    }
    
    // None
    else if (opt==="1") {
        removeH2();
        document.getElementById("btn_subhead").disabled=true;
    }
}

function removeH2() {
    if (document.querySelector("h2")) {
        const elH2 = document.querySelector("h2");
        elH2.remove();
    }
}

/*
//////////////// TEXT ANIMATION ///////////////
*/

document.querySelector("#dd_text_slide").addEventListener("change", doTextAnimation);
    
function doTextAnimation() {
    let opt = document.querySelector("#dd_text_slide").value;

    if (opt==="0") {
        removeTextAnimation();
    }
    else if (opt==="1") {
        removeTextAnimation();
        document.querySelector(".container-text").classList.add("slide-in-top");
        document.querySelector(".hero-bg-media").classList.add("slide-in-top");

        if (document.querySelector(".container-upper-label")) {
            document.querySelector(".container-upper-label").classList.add("slide-in-top");
        }
        if (document.querySelector(".container-btn")) {
            document.querySelector(".container-btn").classList.add("slide-in-top");
        }
    }
    else if (opt==="2") {
        removeTextAnimation();
        document.querySelector(".container-text").classList.add("slide-in-left");
        document.querySelector(".hero-bg-media").classList.add("slide-in-left");
        if (document.querySelector(".container-upper-label")) {
            document.querySelector(".container-upper-label").classList.add("slide-in-left");
        }
        if (document.querySelector(".container-btn")) {
            document.querySelector(".container-btn").classList.add("slide-in-left");
        }
    }

    else if (opt==="3") {
        removeTextAnimation();
        document.querySelector(".container-text").classList.add("slide-in-right");
        document.querySelector(".hero-bg-media").classList.add("slide-in-right");
        if (document.querySelector(".container-upper-label")) {
            document.querySelector(".container-upper-label").classList.add("slide-in-right");
        }
        if (document.querySelector(".container-btn")) {
            document.querySelector(".container-btn").classList.add("slide-in-right");
        }
    }

    else if (opt==="4") {
        removeTextAnimation();
        document.querySelector(".container-text").classList.add("slide-in-bottom");
        document.querySelector(".hero-bg-media").classList.add("slide-in-bottom");
        if (document.querySelector(".container-upper-label")) {
            document.querySelector(".container-upper-label").classList.add("slide-in-bottom");
        }
        if (document.querySelector(".container-btn")) {
            document.querySelector(".container-btn").classList.add("slide-in-bottom");
        }
    }

    else if (opt==="5") {
        removeTextAnimation();
        document.querySelector(".container-text").classList.add("fade-in");
        document.querySelector(".hero-bg-media").classList.add("fade-in");
        if (document.querySelector(".container-upper-label")) {
            document.querySelector(".container-upper-label").classList.add("fade-in");
        }
        if (document.querySelector(".container-btn")) {
            document.querySelector(".container-btn").classList.add("fade-in");
        }
    }
}

function removeTextAnimation() {

    document.querySelector(".container-text").classList.remove("slide-in-top");
    document.querySelector(".container-text").classList.remove("slide-in-left");
    document.querySelector(".container-text").classList.remove("slide-in-right");
    document.querySelector(".container-text").classList.remove("slide-in-bottom");
    document.querySelector(".container-text").classList.remove("fade-in");

    document.querySelector(".hero-bg-media").classList.remove("slide-in-top");
    document.querySelector(".hero-bg-media").classList.remove("slide-in-left");
    document.querySelector(".hero-bg-media").classList.remove("slide-in-right");
    document.querySelector(".hero-bg-media").classList.remove("slide-in-bottom");
    document.querySelector(".hero-bg-media").classList.remove("fade-in");

    if (document.querySelector(".container-upper-label")) {
        document.querySelector(".container-upper-label").classList.remove("slide-in-top");
        document.querySelector(".container-upper-label").classList.remove("slide-in-left");
        document.querySelector(".container-upper-label").classList.remove("slide-in-right");
        document.querySelector(".container-upper-label").classList.remove("slide-in-bottom");
        document.querySelector(".container-upper-label").classList.remove("fade-in");
    }

    if (document.querySelector(".container-btn")) {
        document.querySelector(".container-btn").classList.remove("slide-in-top");
        document.querySelector(".container-btn").classList.remove("slide-in-left");
        document.querySelector(".container-btn").classList.remove("slide-in-right");
        document.querySelector(".container-btn").classList.remove("slide-in-bottom");
        document.querySelector(".container-btn").classList.remove("fade-in");
    }
}

/*
//////////////// ALIGNMENT ///////////////
*/

document.querySelector("#dd_align_mobile").addEventListener("change", doAlignMobile);

function doAlignMobile() {
    let opt = document.querySelector("#dd_align_mobile").value;
    if (opt==="0") {
        document.querySelector(".hero-block").classList.add("text-center-mobile");
    }
    else if (opt==="1") {
        document.querySelector(".hero-block").classList.remove("text-center-mobile"); 
    }
}

/*
//////////////// HERO BUTTONS ///////////////
*/

document.getElementById("dd_hero_buttons").value="0";
document.querySelector("#dd_hero_buttons").addEventListener("change", doHeroButtons);
function doHeroButtons() {
    const opt = document.querySelector("#dd_hero_buttons").value;
    // remove
    if (opt==="0") {
        removeHeroButtons();
        disableAllButtons();
    }
    // one button
    else if (opt==="1") {
        removeHeroButtons();
        disableAllButtons();
        enablePrimaryButtons();
        document.querySelector(".container-text").insertAdjacentHTML("afterend",assets_header_buttons_one);
        document.getElementById("dd_buttons_style").disabled=false;
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_icon").disabled=false;
        document.getElementById("dd_buttons_icon").value="1";
    }

    // two buttons
    else if (opt==="2") {
        removeHeroButtons();
        enableAllButtons();
        document.querySelector(".container-text").insertAdjacentHTML("afterend", assets_header_buttons_pair);
        document.getElementById("dd_buttons_icon").disabled=false;
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_style").disabled=false;
        document.getElementById("dd_buttons_icon").value="0";
    }
}

function removeHeroButtons() {
    const elements = document.getElementsByClassName("container-btn");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
    document.getElementById("dd_buttons_icon").disabled=true;
    document.getElementById("dd_buttons_style").disabled=true;
}

function enableAllButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=false;
    document.getElementById("btn_a_primary_active_text").disabled=false;
    document.getElementById("btn_a_primary_passive_bg").disabled=false;
    document.getElementById("btn_a_primary_active_bg").disabled=false;
    document.getElementById("btn_a_primary_passive_border").disabled=false;
    document.getElementById("btn_a_primary_active_border").disabled=false;
    document.getElementById("btn_a_secondary_passive_text").disabled=false;
    document.getElementById("btn_a_secondary_active_text").disabled=false;
    document.getElementById("btn_a_secondary_passive_bg").disabled=false;
    document.getElementById("btn_a_secondary_active_bg").disabled=false;
    document.getElementById("btn_a_secondary_passive_border").disabled=false;
    document.getElementById("btn_a_secondary_active_border").disabled=false;
}

function enablePrimaryButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=false;
    document.getElementById("btn_a_primary_active_text").disabled=false;
    document.getElementById("btn_a_primary_passive_bg").disabled=false;
    document.getElementById("btn_a_primary_active_bg").disabled=false;
    document.getElementById("btn_a_primary_passive_border").disabled=false;
    document.getElementById("btn_a_primary_active_border").disabled=false;
}

function enableSecondaryButtons() {
    document.getElementById("btn_a_secondary_passive_text").disabled=false;
    document.getElementById("btn_a_secondary_active_text").disabled=false;
    document.getElementById("btn_a_secondary_passive_bg").disabled=false;
    document.getElementById("btn_a_secondary_active_bg").disabled=false;
    document.getElementById("btn_a_secondary_passive_border").disabled=false;
    document.getElementById("btn_a_secondary_active_border").disabled=true;        
}

function disableAllButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=true;
    document.getElementById("btn_a_primary_active_text").disabled=true;
    document.getElementById("btn_a_primary_passive_bg").disabled=true;
    document.getElementById("btn_a_primary_active_bg").disabled=true;
    document.getElementById("btn_a_primary_passive_border").disabled=true;
    document.getElementById("btn_a_primary_active_border").disabled=true;
    document.getElementById("btn_a_secondary_passive_text").disabled=true;
    document.getElementById("btn_a_secondary_active_text").disabled=true;
    document.getElementById("btn_a_secondary_passive_bg").disabled=true;
    document.getElementById("btn_a_secondary_active_bg").disabled=true;
    document.getElementById("btn_a_secondary_passive_border").disabled=true;
    document.getElementById("btn_a_secondary_active_border").disabled=true;
}

function disablePrimaryButtons() {
    document.getElementById("btn_a_primary_passive_text").disabled=true;
    document.getElementById("btn_a_primary_active_text").disabled=true;
    document.getElementById("btn_a_primary_passive_bg").disabled=true;
    document.getElementById("btn_a_primary_active_bg").disabled=true;
    document.getElementById("btn_a_primary_passive_border").disabled=true;
    document.getElementById("btn_a_primary_active_border").disabled=true;
}

function disableSecondaryButtons() {
    document.getElementById("btn_a_secondary_passive_text").disabled=true;
    document.getElementById("btn_a_secondary_active_text").disabled=true;
    document.getElementById("btn_a_secondary_passive_bg").disabled=true;
    document.getElementById("btn_a_secondary_active_bg").disabled=true;
    document.getElementById("btn_a_secondary_passive_border").disabled=true;
    document.getElementById("btn_a_secondary_active_border").disabled=true;        
}

/*
//////////////// BUTTONS: CORNER STYLE ////////////////////
*/

document.querySelector("#dd_buttons_style").addEventListener("change", doButtonsStyle);

function doButtonsStyle() {
    let opt = document.querySelector("#dd_buttons_style").value;
    // remove
    if (opt==="0") {
        removeButtonsStyle();
    }
    // soft
    else if (opt==="1") {
        removeButtonsStyle();
        if (document.querySelector(".btn-primary")) {
            const el_btn_primary = document.querySelector("a.btn-primary");
            el_btn_primary.classList.add("btn-soft");
        }

        if (document.querySelector(".btn-secondary")) {
            const el_btn_secondary = document.querySelector("a.btn-secondary");
            el_btn_secondary.classList.add("btn-soft");
        }
    }

    // rounded
    else if (opt==="2") {
        removeButtonsStyle();
        if (document.querySelector(".btn-primary")) {
            const el_btn_primary = document.querySelector("a.btn-primary");
            el_btn_primary.classList.add("btn-rounded");
        }

        if (document.querySelector(".btn-secondary")) {
            const el_btn_secondary = document.querySelector("a.btn-secondary");
            el_btn_secondary.classList.add("btn-rounded");
        }
    }
}

function removeButtonsStyle() {

    if (document.querySelector(".btn-primary")) {
        const el_btn_primary = document.querySelector("a.btn-primary");
        el_btn_primary.classList.remove("btn-soft");
        el_btn_primary.classList.remove("btn-rounded");
    }

    if (document.querySelector(".btn-secondary")) {
        const el_btn_secondary = document.querySelector("a.btn-secondary");
        el_btn_secondary.classList.remove("btn-soft");
        el_btn_secondary.classList.remove("btn-rounded");
    }
}

/*
//////////////// BUTTONS: ICON POSITION ////////////////////
*/

document.querySelector("#dd_buttons_icon").addEventListener("change", swapButtonIcons);

function swapButtonIcons() {
    let opt = document.querySelector("#dd_buttons_icon").value;
    // Verify at least primary button exists
    if (document.querySelector("a.btn")) {      
        // Set up button icon and text content;
        const icon_left_primary  ="<i class=\"fas fa-shopping-cart\"></i><span>Order now</span>";
        const icon_left_secondary  ="<i class=\"fas fa-arrow-right\"></i><span>Learn more</span>";
        const icon_right_primary ="<span>Order Now</span><i class=\"fas fa-shopping-cart\"></i>";
        const icon_right_secondary ="<span>Learn more</span><i class=\"fas fa-arrow-right\"></i>";

        if (opt==="0") {
            // Icon at left. Text at right.
            if (document.querySelector("a.btn-secondary")) {
                const el_btn_1 = document.querySelector("a.btn-primary");
                el_btn_1.innerHTML = icon_left_primary;
                const el_btn_2 = document.querySelector("a.btn-secondary");
                el_btn_2.innerHTML = icon_left_secondary;
            }
            else {
                const el_btn = document.querySelector("a.btn-primary");
                el_btn.innerHTML = "<i class=\"fas fa-arrow-right\"></i><span>Start free trial<\/span>";
            }
        }

        // Text at left. Icon at right.
        else if (opt==="1") {
            if (document.querySelector("a.btn-secondary")) {
                const el_btn_1 = document.querySelector("a.btn-primary");
                el_btn_1.innerHTML = icon_right_primary;
                const el_btn_2 = document.querySelector("a.btn-secondary");
                el_btn_2.innerHTML = icon_right_secondary;
            }
            else {
                const el_btn = document.querySelector("a.btn-primary");
                el_btn.innerHTML = "<span>Start free trial<\/span><i class=\"fas fa-arrow-right\"><\/i>";
            }
        }
         
        // Text only. No icon.
        else if (opt==="2") {
            if (document.querySelector("a.btn-primary")) {
                const el_btn = document.querySelector("a.btn-primary");
                const btn_content = "<span>Order now</span>";
                el_btn.innerHTML = btn_content;
            }
    
            if (document.querySelector("a.btn-secondary")) {
                const el_btn = document.querySelector("a.btn-secondary");
                const btn_content = "<span>Learn more</span>";
                el_btn.innerHTML = btn_content;
            }       
        }
    }
}

/*
//////////////// VISUAL ELEMENT INSIDE SINGLE-COLOUMN LAYOUT ///////////////
*/

function disableImgProps() {
    // Disable image options
    document.getElementById("dd_image_corners").disabled=true;
    document.getElementById("dd_image_shadows").disabled=true;
    document.getElementById("dd_image_borders").disabled=true;
    const el_label_1 = document.querySelector("#label_img_shadows");
    const el_label_2 = document.querySelector("#label_img_borders");
    const el_label_3 = document.querySelector("#label_img_corners");
    el_label_1.classList.add('disabled-gray');
    el_label_2.classList.add('disabled-gray');
    el_label_3.classList.add('disabled-gray');
}

function enableImgProps() {
    // Disable image options
    document.getElementById("dd_image_corners").disabled=false;
    document.getElementById("dd_image_shadows").disabled=false;
    document.getElementById("dd_image_borders").disabled=false;
    const el_label_1 = document.querySelector("#label_img_shadows");
    const el_label_2 = document.querySelector("#label_img_borders");
    const el_label_3 = document.querySelector("#label_img_corners");
    el_label_1.classList.remove('disabled-gray');
    el_label_2.classList.remove('disabled-gray');
    el_label_3.classList.remove('disabled-gray');
}

function disableVidProps() {
    // Disable video options
    document.getElementById("dd_vid_borders").disabled=true;
    document.getElementById("dd_vid_shadows").disabled=true;
    const el_label_1 = document.querySelector("#label_vid_shadows");
    const el_label_2 = document.querySelector("#label_vid_borders");
    el_label_1.classList.add('disabled-gray');
    el_label_2.classList.add('disabled-gray');

}

function enableVidProps() {
    // Disable video options
    document.getElementById("dd_vid_borders").disabled=false;
    document.getElementById("dd_vid_shadows").disabled=false;
    const el_label_1 = document.querySelector("#label_vid_shadows");
    const el_label_2 = document.querySelector("#label_vid_borders");
    el_label_1.classList.remove('disabled-gray');
    el_label_2.classList.remove('disabled-gray');
}

document.querySelector("#vis-types-all").addEventListener("click", doVisType);

function doVisType() { 
    const rbs = document.querySelectorAll("#vis-types-all input[name='dd_visual']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    
    let col_fig = document.querySelector('#HTML-Content .col-2:nth-of-type(2)');

    if (selectedValue==="pictures") {
        removeVisual();
        resetVisualEffects();
        disableVidProps();
        let child_obj = document.createElement("figure");
        child_obj.innerHTML = "<img src="+el_picture+" alt=\"Placeholder image\">";
        col_fig.appendChild(child_obj);
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=false;
        document.getElementById("dd_image_corners").disabled=false;
        document.getElementById("dd_image_shadows").value="0";
        document.getElementById("dd_image_borders").value="0";
        document.getElementById("dd_image_corners").value="0";
        document.getElementById("vis_type_1").checked=true;
    }

    else if (selectedValue==="transparent") {
        removeVisual();
        resetVisualEffects();
        disableVidProps();
        let child_obj = document.createElement("figure");
        child_obj.innerHTML = "<img src="+el_pic_trans+" alt=\"Placeholder image\">";
        col_fig.appendChild(child_obj);
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=false;
        document.getElementById("dd_image_corners").disabled=false;
        document.getElementById("dd_image_shadows").value="0";
        document.getElementById("dd_image_borders").value="0";
        document.getElementById("dd_image_corners").value="0";
        document.getElementById("vis_type_2").checked=true;
    }

    else if (selectedValue==="illustrations") {
        removeVisual();
        resetVisualEffects();
        disableVidProps();
        let child_obj = document.createElement("figure");
        child_obj.innerHTML = "<img src="+el_drawing+" alt=\"Placeholder image\">";
        col_fig.appendChild(child_obj);
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=false;
        document.getElementById("dd_image_corners").disabled=false;
        document.getElementById("dd_image_shadows").value="0";
        document.getElementById("dd_image_borders").value="0";
        document.getElementById("dd_image_corners").value="0";
        document.getElementById("vis_type_3").checked=true;
    }

    else if (selectedValue==="vid-file") {
        removeVisual();
        resetVisualEffects();
        disableImgProps();
        enableVidProps();
        let child_obj = document.createElement("figure");
        child_obj.innerHTML = "\n\t\t<div class=\"container-video-file\">\n\t\t\t<video controls>\n\t\t\t\t<source src="+el_vid_file+" type=\"video\/mp4\">\n\t\t\t<\/video>\n\t\t</div>\n\t";
        col_fig.appendChild(child_obj);
        document.getElementById("dd_image_shadows").value="0";
        document.getElementById("dd_image_borders").value="0";
        document.getElementById("dd_image_corners").value="0";
        document.getElementById("vis_type_4").checked=true;
    }

    else if (selectedValue==="vid-yt") {
        removeVisual();
        resetVisualEffects();
        disableImgProps();
        enableVidProps();
        let child_obj = document.createElement("figure");
        child_obj.innerHTML = "\n\t\t\n\t\t<div class=\"container-video-yt\">\n\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t<\/iframe>\n\t\t<\/div>\n\t\n\t";
        col_fig.appendChild(child_obj);
        document.getElementById("dd_image_shadows").value="0";
        document.getElementById("dd_image_borders").value="0";
        document.getElementById("dd_image_corners").value="0";
        document.getElementById("vis_type_5").checked=true;
    }  
}

function removeVisual() {
    const el_col_figure = document.querySelector('figure');
    el_col_figure.remove();
}

function resetVisualEffects() {
    document.getElementById("dd_image_shadows").value="0";
    document.getElementById("dd_image_borders").value="0";
    document.getElementById("dd_image_shadows").value="0";
    document.getElementById("dd_vid_borders").value="0";
    document.getElementById("dd_vid_shadows").value="0";
    removeFigShadows();
    removeFigBorders();
}


/*
//////////////// VISUAL PROPERTIES ///////////////
*/

document.querySelector("#dd_image_corners").addEventListener("change", doImageCorners);

function doImageCorners() {
    let opt = document.querySelector("#dd_image_corners").value;

    if (opt==="0") {
        removeImageCorners();
    }

    else if (opt==="1") {
        const el_fig = document.querySelector('.hero-block figure img');
        el_fig.classList.add("corners-soft");
    }
}

function removeImageCorners() {
    const el_fig = document.querySelector('.hero-block figure img');
    el_fig.classList.remove("corners-soft");
}

document.querySelector("#dd_image_shadows").addEventListener("change", doImageShadows);

function doImageShadows() {
    let opt = document.querySelector("#dd_image_shadows").value;
    // Remove image shadow
    if (opt==="0") {
        removeFigShadows();
    }

    // Add image shadow
    else if (opt==="1") {
        const el_fig = document.querySelector('figure');
        el_fig.classList.add("figure-shadow");
    }
}

document.querySelector("#dd_vid_shadows").addEventListener("change", doVidShadows);

function doVidShadows() {
    let opt = document.querySelector("#dd_vid_shadows").value;
    // Remove video shadow
    if (opt==="0") {
        removeFigShadows();
    }

    // Add video shadow
    else if (opt==="1") {
        const el_fig = document.querySelector('figure');
        el_fig.classList.add("figure-shadow");
    }
}

function removeFigShadows() {
    if (document.querySelector('figure')) {
        const el_fig = document.querySelector('figure');
        el_fig.classList.remove("figure-shadow");
    }
}

document.querySelector("#dd_image_borders").addEventListener("change", doImageBorders);

function doImageBorders() {
    let opt = document.querySelector("#dd_image_borders").value;

    if (opt==="0") {
        removeFigBorders();
    }

    // Add image border
    else if (opt==="1") {
        const el_fig = document.querySelector('figure img');
        el_fig.classList.add("figure-border");
    }
}

document.querySelector("#dd_vid_borders").addEventListener("change", doVidBorders);

function doVidBorders() {
    let opt = document.querySelector("#dd_vid_borders").value;

    if (opt==="0") {
        if (document.querySelector('.container-video-yt')) {
            const el_yt = document.querySelector('container-video-yt');
            el_yt.classList.remove("figure-border");
        }
        else {
            const el_vid = document.querySelector('video');
            el_vid.classList.remove("figure-border");
        }
    }

    // Add video border
    else if (opt==="1") {
        if (document.querySelector('.container-video-yt')) {
            const el_yt = document.querySelector('.container-video-yt');
            el_yt.classList.add("figure-border");
        }
        else {
            const el_vid = document.querySelector('video');
            el_vid.classList.add("figure-border");
        }
    }
}

function removeFigBorders() {
    if (document.querySelector('figure')) {
        const el_fig = document.querySelector('figure');
        el_fig.classList.remove("figure-border");
    }
}


/* ================ DIALOG BOXES =================== */

// Make dialog boxes element draggable:

if (document.getElementById("content-1")) {
    dragElement(document.getElementById("content-1"));
}

if (document.getElementById("content-2")) {
    dragElement(document.getElementById("content-2"));
}
if (document.getElementById("content-3")) {
    dragElement(document.getElementById("content-3"));
}
if (document.getElementById("content-4")) {
    dragElement(document.getElementById("content-4"));
}
if (document.getElementById("content-5")) {
    dragElement(document.getElementById("content-5"));
}

if (document.getElementById("content-6")) {
    dragElement(document.getElementById("content-6"));
}

if (document.getElementById("content-7")) {
    dragElement(document.getElementById("content-7"));
}

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id + "header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } 
    else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        // e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        // e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

if (document.querySelector("#content-1 .dialog-box-header")) {
    document.querySelector("#content-1 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-2 .dialog-box-header")) {
    document.querySelector("#content-2 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}
if (document.querySelector("#content-3 .dialog-box-header")) {
    document.querySelector("#content-3 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}
if (document.querySelector("#content-4 .dialog-box-header")) {
    document.querySelector("#content-4 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-5 .dialog-box-header")) {
    document.querySelector("#content-5 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-6 .dialog-box-header")) {
    document.querySelector("#content-6 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

if (document.querySelector("#content-7 .dialog-box-header")) {
    document.querySelector("#content-7 .dialog-box-header span.close-x").addEventListener("click", hideDialogBox);
}

function hideDialogBox() {
    document.querySelector("#content-1").classList.add("dropdown-hidden"); 
    document.querySelector("#content-2").classList.add("dropdown-hidden"); 
    document.querySelector("#content-3").classList.add("dropdown-hidden"); 
    document.querySelector("#content-4").classList.add("dropdown-hidden"); 
    document.querySelector("#content-5").classList.add("dropdown-hidden"); 
    document.querySelector("#content-6").classList.add("dropdown-hidden"); 
    document.querySelector("#content-7").classList.add("dropdown-hidden"); 
    const modal = document.getElementById("myModal");
    // modal.style.display = "none";
    hideSidebar();
    disableTransColCode();
} 

// document.querySelector("#switch-hero-theme").addEventListener("change", doHeroTheme);

function doHeroTheme() {
    hideMenus();
    const rbs = document.querySelectorAll("input[name='switch-one']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
   
    var hs = document.querySelectorAll('style');
    for (var i=0, max = hs.length; i < max; i++) {
        hs[i].parentNode.removeChild(hs[i]);
    }
    
    if (selectedValue==="light") {
        document.querySelector(".container-menu").classList.remove("menu-dark"); 
        document.querySelector(".container-menu").classList.add("menu-light"); 

        document.querySelector(".hero-block").classList.remove("hero-dark"); 
        document.querySelector(".hero-block").classList.add("hero-light"); 
    }
    else if (selectedValue==="dark") {
        document.querySelector(".container-menu").classList.remove("menu-light"); 
        document.querySelector(".container-menu").classList.add("menu-dark"); 

        document.querySelector(".hero-block").classList.remove("hero-light"); 
        document.querySelector(".hero-block").classList.add("hero-dark"); 
    }

    // Remove all gradient 
    document.querySelector(".hero-block").classList.remove("hero-bg-gradient"); 

    document.querySelector("#bg_gradient_options").style.display='none';
    document.querySelector("#btn_gradient_input_group").style.display='flex';
    document.querySelector("#content-2 .dialog-box hr").style.display='block';
    document.getElementById("radio-lr").checked = true;
    if ( arrCSS.some(e => e.includes("background-image:")) ) {
        const arrPos = arrCSS.findIndex(e => e.includes(sub_string));
        arrCSS.splice(arrPos, 1);
    }
    arrCSS.length = 0;
    disableCSS();
}


/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

document.querySelector("#btn-copy").addEventListener("click", copyHTML);

function enableCSS() {
    document.getElementById("btn-copy-css").disabled=false;
}

function disableCSS() {
    document.getElementById("btn-copy-css").disabled=true;
}

function copyHTML() {
    // removeEmptyNodes();
    const HTML_Content = document.getElementById("HTML-Content").innerHTML;
    const el = document.createElement('textarea');
    el.value = HTML_Content;
    hideMenus();

    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el); 
}

function copyCSS() {
    hideMenus();
    const el_css = document.createElement('textarea');
    let aLength = arrCSS.length;
    let strCSS  = arrCSS.join(",");
    strCSS = strCSS.replace(/,.hero-block/g, ".hero-block");
    strCSS = strCSS.replace(/..container/g, ".container");
    el_css.value = strCSS;
    document.body.appendChild(el_css);
    el_css.select();
    document.execCommand('copy');
    document.body.removeChild(el_css);  
    // console.log(strCSS);
}

/*
//////////////// REMOVE LEFTOVER NODES  ///////////////
*/

function removeEmptyNodes() {
    const HTML_Content = document.querySelector("#HTML-Content");
    var treeWalker = document.createTreeWalker(HTML_Content, NodeFilter.SHOW_ELEMENT);
    var currentNode = treeWalker.currentNode
    var emptyNodes = []

    // test if a node has no text, regardless of whitespaces
    var isNodeEmpty = node => !node.textContent.trim()

    // find all empty nodes
    while(currentNode) {
        isNodeEmpty(currentNode) && emptyNodes.push(currentNode)
        currentNode = treeWalker.nextNode()
    }

    // remove found empty nodes
    emptyNodes.forEach(node => node.parentNode.removeChild(node))
    return;
}