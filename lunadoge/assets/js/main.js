
/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// Deselect all

let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    // hide all
    let i;
    for (i = 1; i < 5; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    // get id
    const str = event.target.id.toString();
    const id = str.charAt(str.length-1);
    const elItem_show = document.querySelector("#content-"+id);
    elItem_show.classList.remove("dropdown-hidden"); 
}));

// Hide menus when click on page
document.querySelector("#HTML-Content").addEventListener("click", hideMenus);

function hideMenus() {
    console.log("clicked page");
    let i;
    for (i = 1; i < 5; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
}

/*
//////////////// UPPER BLOCK: MAIN HEADING H2 ///////////////
*/

document.getElementById("dd_h2").value="0";
document.querySelector("#dd_h2").addEventListener("change", doH2);

function doH2() {
    let opt = document.querySelector("#dd_h2").value;

    // remove
    if (opt==="2") {
        removeH2();
    }

    // add short
    else if (opt==="0") {
        removeH2();
        const newH2 = document.createElement("h2");
        const newContent = document.createTextNode("Lorem Malesuada Dolor");
        newH2.appendChild(newContent);
        const currentDiv = document.querySelector('.col-1');
        currentDiv.classList.remove("h2-long-text");      
        currentDiv.prepend(newH2);
        doColUpperAlignStatus();
    }

    // add long
    else if (opt==="1") {
        removeH2();
        const newH2 = document.createElement("h2");
        const newContent = document.createTextNode("Etiam tincidunt risus nec odio non blandit ipsum facilisis");
        newH2.appendChild(newContent);
        const currentDiv = document.querySelector('.col-1');
        currentDiv.classList.add("h2-long-text");
        currentDiv.prepend(newH2);
        doColUpperAlignStatus();
    }
}

function removeH2() {
    if (document.querySelector('.col-1 h2')) {
        const elH2 = document.querySelector('.col-1 h2');
        elH2.remove();
        doColUpperAlignStatus();
    }
}

/*
//////////////// UPPER BLOCK: SUB-HEADING H3 ///////////////
*/

document.querySelector("#dd_subhead").addEventListener("change", doSubHead);

function doSubHead() {
    let opt = document.querySelector("#dd_subhead").value;
    // remove
    if (opt==="1") {
        removeSubHead();
    }
    // add
    else if (opt==="0") {
        const newSubHead = document.createElement("h3");
        const newContent = document.createTextNode("Etiam tincidunt risus nec odio sollicitudin, non blandit ipsum facilisis class aptent.");
        newSubHead.appendChild(newContent);
        const currentDiv = document.querySelector('.col-1');
        currentDiv.append(newSubHead);
        doColUpperAlignStatus();
    }
}

function removeSubHead() {
    const elH3 = document.querySelector('.col-1 h3');
    elH3.remove();
    doColUpperAlignStatus();
}

/*
//////////////// UPPER CATEGORY LABEL ABOVE H1 ///////////////
*/

document.getElementById("dd_upperLabel").value="0";
document.querySelector("#dd_upperLabel").addEventListener("change", doUpperLabel);
function doUpperLabel() {
    const opt = document.querySelector("#dd_upperLabel").value;
    // remove
    if (opt==="0") {
        removeUpperLabel();
    }
    // regular
    else if (opt==="1") {
        removeUpperLabel();
        document.querySelector(".col-1 > h2").insertAdjacentHTML("beforebegin", "\n\t\t\t\t<div class=\"upper-label\">Category Label<\/div>\n");
    }
}

function removeUpperLabel() {
    if (document.querySelector('.col-1 .upper-label')) {
        const upperLabel = document.querySelector('.col-1 .upper-label');
        upperLabel.remove();
        doColUpperAlignStatus();
    }

}

/*
//////////////// UPPER BLOCK: COLUMN ALIGN ///////////////
*/

document.querySelector("#dd_align_col_1").addEventListener("change", doColUpperAlign);

function doColUpperAlign() {
    let opt = document.querySelector("#dd_align_col_1").value;
    const el_section = document.querySelector('section')
    const el_col_1 = document.querySelector('.col-1')

    if (opt==="0") {
        el_col_1.classList.add("text-center");
        el_section.classList.remove("container-full");
    }

    else if (opt==="1") {
        console.log("Align Left");
        el_col_1.classList.remove("text-center");
        el_section.classList.add("container-full");
    }
}

/*
//////////////// UPDATE UPPER COLUMN ALIGN STATUS ///////////////
*/


function doColUpperAlignStatus() {
    // Either h2 or h3 present in .col-1
    if ( 
        document.querySelector('.col-1 h2') || document.querySelector('.col-1 h3')
        ) {
        document.getElementById("dd_align_col_1").disabled=false;
    }
    // Both h2 and h3 missing from .col-1
    else {
        document.getElementById("dd_align_col_1").disabled=true;
    }
}


/*
//////////////// COLUMNS ALIGN ///////////////
*/

document.querySelector("#dd_col_align").addEventListener("change", doColAlign);

function doColAlign() {
    let opt = document.querySelector("#dd_col_align").value;
    const el_section = document.querySelector('#HTML-Content .container-flex')

    if (opt==="0") {
        el_section.classList.remove("text-center");
    }

    else if (opt==="1") {
        el_section.classList.add("text-center");
    }
}

/*
//////////////// COLUMNS SHADOWS ///////////////
*/

document.querySelector("#dd_col_shadows").addEventListener("change", doColShadows);

function doColShadows() {
    let opt = document.querySelector("#dd_col_shadows").value;
    const el_section = document.querySelector('#HTML-Content .container-flex')

    if (opt==="0") {
        // only if no background, remnove padding
        if (!document.querySelector('#HTML-Content .container-flex.bg-color')) {
            el_section.classList.remove("col-padding");
        }
        el_section.classList.remove("box-shadow");
        el_section.classList.remove("corners-soft");
        // Enable corner and border options
        document.getElementById("dd_col_borders").disabled=false;
        document.getElementById("dd_col_borders").value="0";
        document.getElementById("dd_col_corners").disabled=false; 
        document.getElementById("dd_col_corners").value="0";
    }

    else if (opt==="1") {
        el_section.classList.add("col-padding");
        el_section.classList.add("box-shadow");
        el_section.classList.add("corners-soft");
        // Disable corner and border options
        document.getElementById("dd_col_borders").disabled=true;
        document.getElementById("dd_col_borders").value="0";
        document.getElementById("dd_col_corners").disabled=true; 
        document.getElementById("dd_col_corners").value="0";
    }
}

/*
//////////////// COLUMNS BORDERS ///////////////
*/

document.querySelector("#dd_col_borders").addEventListener("change", doColBorders);

function doColBorders() {
    let opt = document.querySelector("#dd_col_borders").value;
    const el_section = document.querySelector('#HTML-Content .container-flex')

    if (opt==="0") {
        // only if no background, remnove padding
        if (!document.querySelector('#HTML-Content .container-flex.bg-color')) {
            el_section.classList.remove("col-padding");
        }    
        el_section.classList.remove("col-borders");
        el_section.classList.remove("corners-soft");
        document.getElementById("dd_col_corners").disabled=true; 
        document.getElementById("dd_col_corners").value="0";
        document.getElementById("dd_col_borders").disabled=false;
    }

    else if (opt==="1") {
        el_section.classList.add("col-padding");
        el_section.classList.add("col-borders");
        document.getElementById("dd_col_corners").disabled=false; 
        document.getElementById("dd_col_corners").value="0";
        document.getElementById("dd_col_borders").disabled=false;
    }
}

/*
//////////////// COLUMNS BORDER CORNERS ///////////////
*/

document.querySelector("#dd_col_corners").addEventListener("change", doColCorners);

function doColCorners() {
    let opt = document.querySelector("#dd_col_corners").value;
    const el_section = document.querySelector('#HTML-Content .container-flex')

    if (opt==="0") {
        el_section.classList.remove("corners-soft");
    }

    else if (opt==="1") {
        el_section.classList.add("corners-soft");
    }
}

/*
//////////////// COLUMNS BACKGROUNDS ///////////////
*/

document.querySelector("#dd_col_backgrounds").addEventListener("change", doColBackgrounds);

function doColBackgrounds() {
    let opt = document.querySelector("#dd_col_backgrounds").value;
    const el_section = document.querySelector('#HTML-Content .container-flex')

    if (opt==="0") {
        el_section.classList.remove("bg-color");
        document.getElementById("box-shadow").value="0";
        document.getElementById("box-shadow").disabled=false;
    }

    else if (opt==="1") {
        el_section.classList.add("bg-color");
        el_section.classList.add("col-padding");
        document.getElementById("dd_col_corners").disabled=false; 
        document.getElementById("dd_col_corners").value="0";
        document.getElementById("dd_col_borders").disabled=false;
        document.getElementById("box-shadow").value="0";
        document.getElementById("box-shadow").disabled=false;
    }
}

/*
//////////////// COLUMNS WIDTH ON MOBILES ///////////////
*/

document.querySelector("#dd_cols_mobile").addEventListener("change", doColMobileWidth);

function doColMobileWidth() {
    let opt = document.querySelector("#dd_cols_mobile").value;
    const el_section = document.querySelector('#HTML-Content .container-flex')

    if (opt==="0") {
        el_section.classList.remove("mobile-col-2");
    }

    else if (opt==="1") {
        el_section.classList.add("mobile-col-2");
    }
}

/*
//////////////// COLUMN SUB-HEADINGS ////////////////////
*/

document.querySelector("#dd_h3").addEventListener("change", doH3);

    function doH3() {
        let opt = document.querySelector("#dd_h3").value;
        // remove
        if (opt==="1") {
            removeH3();
        }
        
        else if (opt==="0") {
            removeH3();
            // Test for figures (images or icons)
            if (document.querySelector(col_no+" figure")) {
                i, col_count = doColsCount();
                for (i; i <= col_count; i++) {
                    const el_h3 = document.querySelector(col_no+":nth-child("+i+") figure");
                    el_h3.insertAdjacentHTML("afterend", content_h3);
                    console.log(el_h3);
                }  
            }
            
            // Test for paragraphs
            else if (document.querySelector(col_no+" p")) {
                console.log("h3: there are paragraphs")
                i, col_count = doColsCount();
                for (i; i <= col_count; i++) {
                    const el_paras = document.querySelector(col_no+":nth-child("+i+") p");
                    el_paras.insertAdjacentHTML("beforebegin", content_h3);
               }
            }

            // Test for lists
            else if (document.querySelector(col_no+" ul")) {
                console.log("h3: there are lists")
                i, col_count = doColsCount();            
                for (i; i <= col_count; i++) {
                    const el_ul = document.querySelector(col_no+':nth-child("+i+") ul');
                    el_ul.insertAdjacentHTML("beforebegin", content_list);
               }
            }

            // No pics, icons, paras, lists
            else {
                console.log("no pics, no icons: h3");
                i, col_count = doColsCount();
                for (i; i <= col_count; i++) {
                    const col_content = document.querySelector(col_no+":nth-child("+i+")");
                    col_content.innerHTML = content_h3;
                }
            }
        }
    }

    function removeH3() {
        if (document.querySelector(col_no+" h3")) {
            const elH3 = document.querySelectorAll(col_no+" h3");
            for (var i = 0 ; i < elH3.length ; i++) {
                elH3[i].remove();
            }
        }
    }

/*
//////////////// COLUMN PARAGRAPHS OR LISTS ////////////////////
*/

document.querySelector("#dd_text").addEventListener("change", doText);

function doText() {
    let opt = document.querySelector("#dd_text").value;
   
    // remove
    if (opt==="0") {
        removeText();
    }
    
    else if (opt==="1") {
        removeText();
        // Test for figures AND h3 column headings
        if ( (document.querySelector(col_no+" figure")) && (document.querySelector(col_no+" h3")) ) {
            // console.log("there are figures AND h3 column headings")
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_paras);
            }
        }
        
        // Test for figures (images or icons)
        else if (document.querySelector(col_no+" figure")) {
            console.log("there are figures");
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const el_pic = document.querySelector(col_no+":nth-child("+i+") figure");
                el_pic.insertAdjacentHTML("afterend", content_paras);
            }
        }

        // Test for h3 column headings
        else if (document.querySelector(col_no+" h3")) {
            console.log("there are h3 column headings");
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const el_pic = document.querySelector(col_no+":nth-child("+i+") h3");
                el_pic.insertAdjacentHTML("afterend", content_paras);
            }
        }

        // No pics, icons, h3 here
        else {
            console.log("no pics, no icons: one");
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const col_content = document.querySelector(col_no+":nth-child("+i+")");
                col_content.innerHTML = content_paras;
            }
        }
    }

    else if (opt==="2") {
        removeText();
        // Test for figures AND h3 column headings
        if ( (document.querySelector(col_no+" figure")) && (document.querySelector(col_no+" h3")) ) {
            // console.log("there are figures AND h3 column headings")
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_list);
            }
        }
        
        // Test for figures (images or icons)
        else if (document.querySelector(col_no+" figure")) {
            console.log("there are figures");
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const el_pic = document.querySelector(col_no+":nth-child("+i+") figure");
                el_pic.insertAdjacentHTML("afterend", content_list);
            }
        }

        // Test for h3 column headings
        else if (document.querySelector(col_no+" h3")) {
            console.log("there are h3 column headings");
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_list);
            }
        }

        // No pics, icons, h3 headings
        else {
            console.log("no pics, no icons: two");
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const col_content = document.querySelector(col_no+":nth-child("+i+")");
                col_content.innerHTML = content_list;
            }
        }
    }
}

function removeText() {
    const el_para = document.querySelectorAll(col_no+" p");
    for (var i = 0 ; i < el_para.length ; i++) {
      el_para[i].remove();
    }
    const el_bullet = document.querySelectorAll(col_no+" li");
    for (var i = 0 ; i < el_bullet.length ; i++) {
        el_bullet[i].remove();
    }
    const el_list = document.querySelectorAll(col_no+" ul");
    for (var i = 0 ; i < el_list.length ; i++) {
        el_list[i].remove();
    }
}


/*
//////////////// FAUX BUTTONS ////////////////////
*/
document.querySelector("#dd_buttons").addEventListener("change", doButtons);

    function doButtons() {
        console.log("Buttons");
        let opt = document.querySelector("#dd_buttons").value;
        // remove
        if (opt==="0") {
            removeButtons();
        }

        // solid
        else if (opt==="1") {
            removeButtons();
            btn_class="btn-solid";
            i, col_count = doColsCount();
            if (document.querySelector(".cols-2-split")) {
                for (i = 2; i <= col_count; i += 3) {
                    el_cols = document.querySelector(".cols-2-split .col-2:nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
            else {
                for (i; i <= col_count; i++) {
                    el_cols = document.querySelector(col_no+":nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
        }

        // ghost
        else if (opt==="2") {
            removeButtons();
            btn_class="btn-ghost";
            i, col_count = doColsCount();
            if (document.querySelector(".cols-2-split")) {
                for (i = 2; i <= col_count; i += 3) {
                    el_cols = document.querySelector(".cols-2-split .col-2:nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
            else {
                for (i; i <= col_count; i++) {
                    el_cols = document.querySelector(col_no+":nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
        }

        // gradient
        else if (opt==="3") {
            removeButtons();
            btn_class="btn-gradient";
            i, col_count = doColsCount();
            if (document.querySelector(".cols-2-split")) {
                for (i = 2; i <= col_count; i += 3) {
                    el_cols = document.querySelector(".cols-2-split .col-2:nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
            else {
                for (i; i <= col_count; i++) {
                    el_cols = document.querySelector(col_no+":nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
        }
    }

    function addButons(el_cols,btn_class) {
        console.log("Add buttons");
        console.log("el_cols:" +el_cols)
        const el_btn = document.createElement('a');
        el_btn.setAttribute("href", "#");
        el_btn.setAttribute("class", "btn "+btn_class);
        const el_icon = document.createElement('i');
        el_icon.setAttribute("class", "fas fa-shopping-cart");
        el_btn.append(el_icon);
        const btn_text = "Order Now";
        el_icon.insertAdjacentHTML('afterend', btn_text);;
        el_cols.append(el_btn);

        HTML_content = document.querySelector("#HTML-Content").innerHTML;
        HTML_content = HTML_content.replace("/n/t/t/t/", "");
        document.querySelector("#HTML-Content").innerHTML = HTML_content;
        
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_style").disabled=false;
    }

    function removeButtons() {
        console.log("remove buttons");
        i, col_count = doColsCount();

        if (document.querySelector(".cols-split")) {
            for (i = 1; i <= col_count; i += 3) {
                const elButtons = document.querySelector('a.btn');
                elButtons.remove();
            }
        }
        else {
            for (i; i <= col_count; i++) {
                if (document.querySelector('a.btn')) {
                    const elButtons = document.querySelector('a.btn');
                    elButtons.remove();
                }
            }
        }
        document.getElementById("dd_buttons_style").disabled=true;
        document.getElementById("dd_buttons_style").value="0";
    }

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
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const el_btn = document.querySelector(col_no+":nth-child("+i+") a");
                el_btn.classList.add("btn-soft");
            }
        }

        // rounded
        else if (opt==="2") {
            removeButtonsStyle();
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const el_btn = document.querySelector(col_no+":nth-child("+i+") a");
                el_btn.classList.add("btn-rounded");
            } 
        }
    }

    function removeButtonsStyle() {
        i, col_count = doColsCount();
        for (i; i <= col_count; i++) {
            const el_btn = document.querySelector(col_no+":nth-child("+i+") a");
            el_btn.classList.remove("btn-soft");
            el_btn.classList.remove("btn-rounded");
        }
    }


/*
//////////////// VISUALS  ///////////////
*/

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
  
    if (selectedValue==="none") {
        removeVisual();
        resetVisualEffects();
        document.getElementById("dd_icon_size").disabled=true;
        document.getElementById("dd_icon_align").disabled=true;
    }

    else if (selectedValue==="pictures") {
        removeVisual();
        resetVisualEffects();
        i, col_count = doColsCount();
        console.log("Get these number of pics: "+col_count);
        for (i; i <= col_count; i++) {
            const col_content = document.querySelector(col_no+":nth-child("+i+")");
            col_content.innerHTML = picArray[i-1] + col_content.innerHTML; 
        }
        document.getElementById("dd_image_corners").disabled=false;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=false;
        
        document.getElementById("dd_icon_size").disabled=true;
        document.getElementById("dd_icon_align").disabled=true;
    }

    else if (selectedValue==="transparent") {
        removeVisual();
        resetVisualEffects();
        i, col_count = doColsCount();
        for (i; i <= col_count; i++) {
            const col_content = document.querySelector(col_no+":nth-child("+i+")");
            col_content.innerHTML = transArray[i-1] + col_content.innerHTML;                
        }
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=true;

        document.getElementById("dd_icon_size").disabled=true;
        document.getElementById("dd_icon_align").disabled=true;
    }

    else if (selectedValue==="illustrations") {
        removeVisual();
        i, col_count = doColsCount();
        for (i; i <= col_count; i++) {
            const col_content = document.querySelector(col_no+":nth-child("+i+")");
            col_content.innerHTML = illusArray[i-1] + col_content.innerHTML;                
        }
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=true;

        document.getElementById("dd_icon_size").disabled=true;
        document.getElementById("dd_icon_align").disabled=true;
    }

    else if (selectedValue==="icons-fa") {
        console.log("Icons FA");
        removeVisual();
        resetVisualEffects();
        i, col_count = doColsCount();
        for (i; i <= col_count; i++) {
            const col_content = document.querySelector(col_no+":nth-child("+i+")");
            col_content.innerHTML = iconFAArray[i-1] + col_content.innerHTML;                
        }
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=true;
        document.getElementById("dd_image_borders").disabled=true;

        document.getElementById("dd_icon_size").disabled=false;
        document.getElementById("dd_icon_align").disabled=false;
    }

    else if (selectedValue==="icons-la") {
        console.log("Icons LA");
        removeVisual();
        resetVisualEffects();
        i, col_count = doColsCount();
        for (i; i <= col_count; i++) {
            const col_content = document.querySelector(col_no+":nth-child("+i+")");
            col_content.innerHTML = iconLAArray[i-1] + col_content.innerHTML;                
        }
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=true;
        document.getElementById("dd_image_borders").disabled=true;

        document.getElementById("dd_icon_size").disabled=false;
        document.getElementById("dd_icon_align").disabled=false;

    }

    else if (selectedValue==="icons-md") {
        console.log("Icons MD");
        removeVisual();
        resetVisualEffects();
        i, col_count = doColsCount();
        for (i; i <= col_count; i++) {
            const col_content = document.querySelector(col_no+":nth-child("+i+")");
            col_content.innerHTML = iconMDArray[i-1] + col_content.innerHTML;                
        }
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=true;
        document.getElementById("dd_image_borders").disabled=true;
        
        document.getElementById("dd_icon_size").disabled=false;
        document.getElementById("dd_icon_align").disabled=false;

    }
}

function removeVisual() {
    const parentNode = document.querySelector("#HTML-Content");
    var element_img = Array.prototype.slice.call(document.getElementsByTagName("figure"),0); 
    for (var index = 0, len = element_img.length; index < len; index++) {
        element_img[index].parentNode.removeChild(element_img[index]);
    }
    document.getElementById("dd_image_corners").disabled=true;
    document.getElementById("dd_image_shadows").disabled=true;
    document.getElementById("dd_image_borders").disabled=true;
  
}

function resetVisualEffects() {
    document.getElementById("dd_image_shadows").value="0";
    document.getElementById("dd_image_borders").value="0";
    document.getElementById("dd_image_corners").value="0";
    removeImageShadows();
    removeImageBorders();
}


/*
//////////////// VISUAL PROPERTIES ///////////////
*/

document.querySelector("#dd_image_corners").addEventListener("change", doImageCorners);

function doImageCorners() {
    console.log("Do image corners");
    let opt = document.querySelector("#dd_image_corners").value;

    if (opt==="0") {
        removeImageCorners();
    }

    else if (opt==="1") {
        const el_fig = document.querySelector('section');
        el_fig.classList.add("img-corners-soft");
    }
}

function removeImageCorners() {
    const el_fig = document.querySelector('section');
    el_fig.classList.remove("img-corners-soft");
}

document.querySelector("#dd_image_shadows").addEventListener("change", doImageShadows);

function doImageShadows() {
    console.log("Do image shadows");
    let opt = document.querySelector("#dd_image_shadows").value;
    // Remove image shadow
    if (opt==="0") {
        removeImageShadows();
    }

    // Add image shadow
    else if (opt==="1") {
        const el_fig = document.querySelector('section');
        el_fig.classList.add("img-shadow");b
    }
}

function removeImageShadows() {
    const el_fig = document.querySelector('section');
    el_fig.classList.remove("img-shadow");
}

document.querySelector("#dd_image_borders").addEventListener("change", doImageBorders);

function doImageBorders() {
    console.log("Do image borders");
    let opt = document.querySelector("#dd_image_borders").value;

    if (opt==="0") {
        removeImageBorders();
    }

    // Add image border
    else if (opt==="1") {
        const el_fig = document.querySelector('section');
        el_fig.classList.add("img-border");
    }
}

function removeImageBorders() {
    const el_fig = document.querySelector('section');
    el_fig.classList.remove("img-border");
}

/*
//////////////// ICON PROPERTIES ///////////////
*/

document.querySelector("#dd_icon_size").addEventListener("change", doIconSize);

function doIconSize() {
    let opt = document.querySelector("#dd_icon_size").value;
    i, col_count = doColsCount();
    //Restore normal size
    if (opt==="0") {
        const el_section = document.querySelector("section");
        el_section.classList.remove("icon-small");
    }
    //Left align
    else if (opt==="1") {
        const el_section = document.querySelector("section");
        el_section.classList.add("icon-small");
    }
}

document.querySelector("#dd_icon_align").addEventListener("change", doIconAlign);

function doIconAlign() {
    let opt = document.querySelector("#dd_icon_align").value;
    i, col_count = doColsCount();
    //Restore centre align
    if (opt==="0") {
        const el_section = document.querySelector("section");
        el_section.classList.remove("icon-left");
    }
    //Left align
    else if (opt==="1") {
        const el_section = document.querySelector("section");
        el_section.classList.add("icon-left");
    }
}




/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

document.querySelector("#btn-copy").addEventListener("click", copyHTML);

function copyHTML() {

    const HTML_Content = document.getElementById("HTML-Content").innerHTML;
    const el = document.createElement('textarea');
    el.value = HTML_Content;
    hideMenus();

    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
        
    console.log("copied");
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

