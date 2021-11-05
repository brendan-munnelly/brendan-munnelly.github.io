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
    let i;
    for (i = 1; i < 5; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
}

/*
//////////////// SECTION: CLASS NAMES ///////////////
*/

// Get current section class

let section_class = "theme-one";
document.querySelector("#dd_className").addEventListener("change", doClassName);

function doClassName() {

    let opt = document.querySelector("#dd_className").value;
    const el_section = document.querySelector("section");

    if ( opt==="0") {
        removeClassNames();
        el_section.classList.add("theme-one");
        section_class = "theme-one";
    }
    
    else if ( opt==="1") {
        removeClassNames();
        el_section.classList.add("theme-two");
        section_class = "theme-two";
    }

    else if ( opt==="2") {
        removeClassNames();
        el_section.classList.add("theme-three");
        section_class = "theme-three";
    }

    else if ( opt==="3") {
        removeClassNames();
        el_section.classList.add("theme-four");
        section_class = "theme-four";
    }

    else if ( opt==="4") {
        removeClassNames();
        el_section.classList.add("theme-four");
        section_class = "theme-four";
    }
    else if ( opt==="5") {
        removeClassNames();
        el_section.classList.add("theme-four");
        section_class = "theme-four";
    }
    else if ( opt==="6") {
        removeClassNames();
        el_section.classList.add("theme-four");
        section_class = "theme-four";
    }
}

function removeClassNames() {
    const el_section = document.querySelector("section");
    el_section.classList.remove("theme-one");
    el_section.classList.remove("theme-two");
    el_section.classList.remove("theme-three");
    el_section.classList.remove("theme-four");
}

/*
//////////////// SECTION: ALIGN ///////////////
*/

document.querySelector("#dd_section_align").addEventListener("change", doSectionAlign);

function doSectionAlign() {
    let opt = document.querySelector("#dd_section_align").value;
    const el_upperlabel = document.querySelector('section')

    if (opt==="0") {
        el_upperlabel.classList.remove("text-center");
    }

    else if (opt==="1") {
        el_upperlabel.classList.add("text-center");
    }
}


/*
//////////////// SECTIONS: BACKGROUND COLOUR ///////////////
*/

    // On click style button 
    let all_btns = document.querySelectorAll('.btn_style');
    all_btns.forEach(el => el.addEventListener('click', event => {
        // get button id
        btn_id = event.target.id.toString();
        console.log("Button ID: "+btn_id);
        displayOffCanvas();
    }));

    function displayOffCanvas() {
        const el_offCanvas = document.querySelector("#off-canvas-block");
        el_offCanvas.classList.remove("is-hidden");
        el_offCanvas.classList.add("is-visible");
    }

    document.querySelector("#btn_close").addEventListener("click", hideOffCanvas);

    function hideOffCanvas() {
        var el_offCanvas = document.getElementById("off-canvas-block");
        el_offCanvas.classList.remove("is-visible");
        el_offCanvas.classList.add("is-hidden");
    }

    document.querySelector("#picker-box").addEventListener("click", getColorID);
      
    function getColorID(event) {
        if ( event.target.id === "")  {
            return;
        }
            let newStyle; 
       
            if (btn_id === "btn_bg") {
                newStyle = "."+section_class+" { background-color: var("+event.target.id+") }";
            }

            /* Section upper label */
            else if (btn_id === "btn_upper_label") {
                newStyle = "."+section_class+" .upper-label { color: var("+event.target.id+") }";
            }
                        
            /* Section headings */
            else if (btn_id === "btn_subhead") {
                newStyle = "."+section_class+" h2 { color: var("+event.target.id+") } \n." +section_class+" h3 { color: var("+event.target.id+") } \n."+section_class+" .upper-label { color: var("+event.target.id+") }"; 
            }

            /* Section text */
            else if (btn_id === "btn_text") {
                newStyle = "."+section_class+" p { color: var("+event.target.id+") }\n." +section_class+" li { color: var("+event.target.id+") }"; 
            }

            /* Hyperlink text colour: passive */
            else if (btn_id === "btn_a_passive") {
                newStyle = "."+section_class+" a:link { color: var("+event.target.id+") }\n." +section_class+ " a:visited { color: var("+event.target.id+") }";
            }

            /* Hyperlink text colour: active */
            else if (btn_id === "btn_a_active") {
                newStyle = "."+section_class+" a:focus { color: var("+event.target.id+") }\n." +section_class+ " a:hover { color: var("+event.target.id+") } \n." +section_class+ " a:active { color: var("+event.target.id+") }";
           }

           /* Hyperlink background colour: passive */
           else if (btn_id === "btn_a_passive_bg") {
            newStyle = "."+section_class+" a:link { background-color: var("+event.target.id+") }\n." +section_class+ " a:visited { background-color: var("+event.target.id+") }";
            }

           /* Hyperlink background colour: active */
            else if (btn_id === "btn_a_active_bg") {
                newStyle = "."+section_class+" a:focus { background-color: var("+event.target.id+") } \n." +section_class+ " a:hover { background-color: var("+event.target.id+") }\n." +section_class+ " a:active { background-color: var("+event.target.id+") }";
            }

            /* Primary button text colour: passive */
            else if (btn_id === "btn_a_primary_passive_text") {
                newStyle = "."+section_class+" a.btn-primary:link { color: var("+event.target.id+") } \n." +section_class+ " a.btn-primary:visited { color: var("+event.target.id+") }";
            }
            /* Primary button text colour: active */
           else if (btn_id === "btn_a_primary_active_text") {
                newStyle = "."+section_class+" a.btn-primary:focus { color: var("+event.target.id+") }\n." +section_class+ " a.btn-primary:hover { color: var("+event.target.id+") }\n." +section_class+ " a.btn-primary:active { color: var("+event.target.id+") }";
            } 
            /* Primary button background colour: passive */
            else if (btn_id === "btn_a_primary_passive_bg") {
                newStyle = "."+section_class+" a.btn-primary:link { background-color: var("+event.target.id+") }\n." +section_class+ " a.btn-primary:visited { background-color: var("+event.target.id+") }";
            }
            /* Primary button background colour: active */
            else if (btn_id === "btn_a_primary_active_bg") {
                newStyle = "."+section_class+" a.btn-primary:focus { background-color: var("+event.target.id+") }\n." +section_class+ " a.btn-primary:hover { background-color: var("+event.target.id+") }\n." +section_class+ " a.btn-primary:active { background-color: var("+event.target.id+") }";
            }
            /* Primary button border colour: passive */
            else if (btn_id === "btn_a_primary_passive_border") {
                newStyle = "."+section_class+" a.btn-primary:link { border-color: var("+event.target.id+") }\n." +section_class+ " a.btn-primary:visited { border-color: var("+event.target.id+") }";
            }
            /* Primary button border colour: active */
            else if (btn_id === "btn_a_primary_active_border") {
                newStyle = "."+section_class+" a.btn-primary:focus { border-color: var("+event.target.id+") }\n." +section_class+ " a.btn-primary:hover { border-color: var("+event.target.id+") }\n." +section_class+ " a.btn-primary:active { border-color: var("+event.target.id+") }";
            }

            /* secondary button text colour: passive */
            else if (btn_id === "btn_a_secondary_passive_text") {
                newStyle = "."+section_class+" a.btn-secondary:link { color: var("+event.target.id+") }\n." +section_class+ " a.btn-secondary:visited { color: var("+event.target.id+") }";
            }
            /* secondary button text colour: active */
            else if (btn_id === "btn_a_secondary_active_text") {
                newStyle = "."+section_class+" a.btn-secondary:focus { color: var("+event.target.id+") }\n." +section_class+ " a.btn-secondary:hover { color: var("+event.target.id+") }\n." +section_class+ " a.btn-secondary:active { color: var("+event.target.id+") }";
            }
            /* secondary button background colour: passive */
            else if (btn_id === "btn_a_secondary_passive_bg") {
                newStyle = "."+section_class+" a.btn-secondary:link { background-color: var("+event.target.id+") }\n." +section_class+ " a.btn-secondary:visited { background-color: var("+event.target.id+") }";
            }
            /* secondary button background colour: active */
            else if (btn_id === "btn_a_secondary_active_bg") {
                newStyle = "."+section_class+" a.btn-secondary:focus { background-color: var("+event.target.id+") }\n." +section_class+ " a.btn-secondary:hover { background-color: var("+event.target.id+") }\n." +section_class+ " a.btn-secondary:active { background-color: var("+event.target.id+") }";
            }
            /* secondary button border colour: passive */
            else if (btn_id === "btn_a_secondary_passive_border") {
                newStyle = "."+section_class+" a.btn-secondary:link { border-color: var("+event.target.id+") }\n." +section_class+ " a.btn-secondary:visited { border-color: var("+event.target.id+") }";
            }
            /* secondary button border colour: active */
            else if (btn_id === "btn_a_secondary_active_border") {
                newStyle = "."+section_class+" a.btn-secondary:focus { border-color: var("+event.target.id+") }\n." +section_class+ " a.btn-secondary:hover { border-color: var("+event.target.id+") }\n." +section_class+ " a.btn-secondary:active { border-color: var("+event.target.id+") }";
            }

            /* Icons colour */
            else if (btn_id === "btn_icon_color") {
                newStyle = "."+section_class+" figure.icon var("+event.target.id+") }";
            }
            
            style = document.createElement('style');
            document.head.appendChild(style);
            // style.type = 'text/css';
            style.appendChild(document.createTextNode(newStyle));
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
//////////////// COLOURS: ENABLE/DISABLE BACKGROUND ///////////////
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
//////////////// SECTIONS: PARAGRAPHS ///////////////
*/

document.querySelector("#dd_paraNos").addEventListener("change", doParaNos);

function doParaNos() {
    let opt = document.querySelector("#dd_paraNos").value;
    para_nos = parseInt(opt) + 1;
    console.log("Para Nos: "+para_nos);
    removeH3();
    reduceParas();
    removeImage();
    removeVideo();
    resetImageEffects();
    removeLists();
    document.getElementById("vis_type_0").checked=true;
    document.getElementById("vid_type_0").checked=true;
    document.getElementById("dd_image_shadows").disabled=true;
    document.getElementById("dd_image_borders").disabled=true;
    document.getElementById("dd_image_corners").disabled=true;
    document.getElementById("dd_image_rotate").disabled=true;

    for (let i=1; i <= opt; i++) {
        document.querySelector("section p").insertAdjacentHTML("afterend", content_paras);
    }
    if (para_nos === 1) {
        document.getElementById("dd_h3").disabled=true;
    }
    else {
        document.getElementById("dd_h3").disabled=false;
    }
}

function reduceParas() {
    if (document.querySelector("p")) {
        const el_para = document.querySelectorAll("p");
        for (var i = 0 ; i < el_para.length ; i++) {
            el_para[i].remove();
        }
    }

    //Add one para
    document.querySelector("section h2").insertAdjacentHTML("afterend",content_paras);
}

/*
//////////////// TEXT: UPPER CATEGORY LABEL ABOVE H2 ///////////////
*/

document.getElementById("dd_upperLabel").value="0";
document.querySelector("#dd_upperLabel").addEventListener("change", doUpperLabel);

function doUpperLabel() {
    const opt = document.querySelector("#dd_upperLabel").value;
    // remove
    if (opt==="0") {
        removeUpperLabel();
    }
    // add
    else if (opt==="1") {
        removeUpperLabel();
        document.querySelector("h2").insertAdjacentHTML("beforebegin", "<div class=\"upper-label\">Upper Label Text<\/div>\n");
        enableLabelColor();
    }
}

function removeUpperLabel() {
    if (document.querySelector('.upper-label')) {
        const upperLabel = document.querySelector('.upper-label');
        upperLabel.remove();
        disableLabelColor();
        document.getElementById("dd_upperLabel").value="0";
    } 
}


/*
//////////////// TEXT: STANDFIRST ///////////////
*/

document.querySelector("#dd_standfirst").addEventListener("change", doStandFirst);

function doStandFirst() {
    let opt = document.querySelector("#dd_standfirst").value;
    const el_sf = document.querySelector('section p:nth-of-type(1)');
    if (opt==="0") {
       el_sf.classList.remove("standfirst");
    }

    else if (opt==="1") {
       el_sf.classList.add("standfirst");
    }
}

/*
//////////////// TEXT: H3 SUB-HEADINGS ////////////////////
*/

document.querySelector("#dd_h3").addEventListener("change", doH3);

    function doH3() {
        let opt = document.querySelector("#dd_h3").value;

        if (opt==="0") {
            removeH3();
        }
       
        else {
            removeH3();
            for (let i=2; i <= (para_nos); i++) {
                document.querySelector("section p:nth-of-type("+i+")").insertAdjacentHTML("beforebegin", content_h3);
            }
        }    
    }

    function removeH3() {
        if (document.querySelector("section h3")) {
            const elH3 = document.querySelectorAll("section h3");
            for (var i = 0 ; i < elH3.length ; i++) {
                elH3[i].remove();
            }
        }
    }

/*
//////////////// TEXT: LISTS  ///////////////
*/

document.querySelector("#dd_lists").addEventListener("change", doLists);

    function doLists() {
        let opt = document.querySelector("#dd_lists").value;

        if (opt==="0") {
            removeLists();
        }

        else if (opt==="1") {
            removeLists();
            document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", content_ul_short);
        }

        else if (opt==="2") {
            removeLists();
            document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", content_ul_long);
        }
    }

    function removeLists() {
        if (document.querySelector("section ul")) {
            const elUL = document.querySelectorAll("section ul");
            for (var i = 0 ; i < elUL.length ; i++) {
                elUL[i].remove();
            }
        }
    }

/*
//////////////// FAUX BUTTONS ////////////////////
*/

document.querySelector("#dd_buttons").addEventListener("change", doButtons);

    function doButtons() {
        let opt = document.querySelector("#dd_buttons").value;

        if (opt==="0") {
            removeButtons();
            disableAllButtons();
        }
       
        else if (opt==="1") {
            removeButtons();
            enablePrimaryButtons();
            disableSecondaryButtons();
            document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", content_button_one);
            document.getElementById("dd_buttons_align").disabled=false;
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=false;
        }

        else if (opt==="2") {
            removeButtons();
            enableAllButtons();
            document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", content_button_two);
            document.getElementById("dd_buttons_align").value="0";
            document.getElementById("dd_buttons_align").disabled=false;
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=false;
        }
    }

    function removeButtons() {
        if (document.querySelector("section .container-btn")) {
            const elBtn = document.querySelector("section .container-btn");
            elBtn.remove();
            document.getElementById("dd_buttons_align").value="0";
            document.getElementById("dd_buttons_align").disabled=true;
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=true;
        }
    }

/*
//////////////// FAUX BUTTONS: BUTTONS ALIGN ////////////////////
*/

document.querySelector("#dd_buttons_align").addEventListener("change", doButtonsAlign);

    function doButtonsAlign() {
        let opt = document.querySelector("#dd_buttons_align").value;
        // remove (left)
        if (opt==="0") {
            const el_btn = document.querySelector("section .container-btn");
            el_btn.classList.remove("text-center");
        }
        // add (centre)
        else if (opt==="1") {
            const el_btn = document.querySelector("section .container-btn");
            el_btn.classList.add("text-center");
        }
    }


/*
//////////////// FAUX BUTTONS: BUTTONS CORNER STYLE ////////////////////
*/

    document.querySelector("#dd_buttons_style").addEventListener("change", doButtonsStyle);

    function doButtonsStyle() {
        console.log("Do buttons style");
        let opt = document.querySelector("#dd_buttons_style").value;
        // remove
        if (opt==="0") {
            removeButtonsStyle();
        }
        // soft
        else if (opt==="1") {
            console.log("Add soft");
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
            console.log("Add rounded");
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
//////////////// VISUALS: IMAGES  ///////////////
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
        removeImage();
        resetImageEffects();
    }

    else if (selectedValue==="pictures") {
        removeImage();
        resetImageEffects();
        document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\/800x480-business-group.jpg\" alt=\"Business group\">\n\t<\/figure>\n");
        document.getElementById("dd_image_corners").disabled=false;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=false;
        document.getElementById("dd_image_rotate").disabled=false;
    }

    else if (selectedValue==="transparent") {
        removeImage();
        resetImageEffects();
        document.querySelector("section p").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\//800x480-product-sneaker.png\" alt=\"Product Sneaker\">\n\t<\/figure>\n");
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=true;
        document.getElementById("dd_image_rotate").disabled=false;
    }

    else if (selectedValue==="illustrations") {
        removeImage();
        resetImageEffects();
        document.querySelector("section p").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\//800x480-drawing.png\" alt=\"Product Sneaker\">\n\t<\/figure>\n");
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=true;
        document.getElementById("dd_image_rotate").disabled=false;
    }
}

function removeImage() {
    if (document.querySelector('section figure img')) {
        const figureVis = document.querySelector('section figure img');
        figureVis.remove();
        HTML_Content = document.getElementById("HTML-Content").innerHTML;
        HTML_Content = HTML_Content.replace(/<figure><\/figure>/g,'');
        document.getElementById("HTML-Content").innerHTML = HTML_Content;
    } 
    document.getElementById("dd_image_corners").disabled=true;
    document.getElementById("dd_image_shadows").disabled=true;
    document.getElementById("dd_image_borders").disabled=true;
    document.getElementById("dd_image_rotate").disabled=true;
}

function resetImageEffects() {
    document.getElementById("dd_image_shadows").value="0";
    document.getElementById("dd_image_borders").value="0";
    document.getElementById("dd_image_corners").value="0";
    document.getElementById("dd_image_rotate").value="0";
    removeImageShadows();
    removeImageBorders();
}

/*
//////////////// VISUAL PROPERTIES ///////////////
*/

/* Image Drop Shadow */

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
        el_fig.classList.add("img-shadow");
    }
}

function removeImageShadows() {
    const el_fig = document.querySelector('section');
    el_fig.classList.remove("img-shadow");
}


/* Image Borders */

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

/* Image Corners */

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

/* Image Rotate */
document.querySelector("#dd_image_rotate").addEventListener("change", doImageRotate);

function doImageRotate() {
    console.log("Do image rotate");
    let opt = document.querySelector("#dd_image_rotate").value;

    if (opt==="0") {
        removeImageRotate();
    }

    else if (opt==="1") {
        const el_fig = document.querySelector('section');
        el_fig.classList.add("img-rotate-clock");
    }

    else if (opt==="2") {
        const el_fig = document.querySelector('section');
        el_fig.classList.add("img-rotate-cclock");
    }
}

function removeImageRotate() {
    const el_fig = document.querySelector('section');
    el_fig.classList.remove("img-rotate-clock");
    el_fig.classList.remove("img-rotate-cclock");
}

function resetImageEffects() {
    document.getElementById("dd_image_shadows").value="0";
    document.getElementById("dd_image_borders").value="0";
    document.getElementById("dd_image_corners").value="0";
    document.getElementById("dd_image_rotate").value="0";
    removeImageShadows();
    removeImageBorders();
}

/* Figure caption */

document.querySelector("#dd_caption").addEventListener("change", doCaption);

function doCaption() {
    let opt = document.querySelector("#dd_caption").value;

    if (opt==="0") {
        // removeCaption();
    }

    else if (opt==="1") {
        const el_fig = document.querySelectorAll("figure");
        console.log("Add caption")
        HTML_Content = document.getElementById("HTML-Content").innerHTML;
        HTML_Content = HTML_Content.replace(/<\/figure>/g,'<figcaption><i>Above<\/i>: Some text describing the image or video.</figcaption><\/figure>');
        document.getElementById("HTML-Content").innerHTML = HTML_Content;
    }
}

function removeCaption() {
    if (document.querySelector("figcaption")) {
        const el_figcap = document.querySelectorAll("figcaption");
        for (let i = 0 ; i < el_figcap.length ; i++) {
            el_figcap[i].remove();
        }
    }
}


/*
//////////////// VISUALS: VIDEOS  ///////////////
*/

document.querySelector("#vid-types-all").addEventListener("click", doVidType);

function doVidType() { 
    const rbs = document.querySelectorAll("#vid-types-all input[name='dd_vid']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
  
    if (selectedValue==="none") {
        removeVideo();
    }

    else if (selectedValue==="file") {
        removeVideo();
        if (document.querySelector("section p:nth-of-type(2)")) {
            document.querySelector('section p:nth-of-type(2)').insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<div class=\"container-video-file\">\n\t\t\t<video controls>\n\t\t\t\t<source src=\"assets\/videos\/whiteboard.mp4\" type=\"video\/mp4\">\n\t\t\t<\/video>\n\t\t</div>\n\t<\/figure>");
        }
        else {
            document.querySelector('section p:nth-of-type(1)').insertAdjacentHTML("afterend", "\n\n\t<figure><div class=\"container-video-file\">\n\t\t<video controls>\n\t\t\t\t<source src=\"assets\/videos\/whiteboard.mp4\" type=\"video\/mp4\">\n\t\t\t<\/video>\n\t\t</div>\n\t<\/figure>");
        }
    }

    else if (selectedValue==="yt") {
        removeVideo();
        if (document.querySelector("section p:nth-of-type(2)")) {
            document.querySelector('section p:nth-of-type(2)').insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<div class=\"container-video-yt\">\n\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t<\/iframe>\n\t\t<\/div>\n\t<\/figure>");
        }
        else {
            document.querySelector('section p:nth-of-type(1)').insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<div class=\"container-video-yt\">\n\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t<\/iframe>\n\t\t\<\/div>\n\t\<\/figure>");
        }
    }
}

function removeVideo() {
    if (document.querySelector('section figure .container-video-file video')) {
        const figureVid = document.querySelector('figure .container-video-file video');
        figureVid.remove();
        HTML_Content = document.getElementById("HTML-Content").innerHTML;
        HTML_Content = HTML_Content.replace(/\n\n\t<figure>\n\t\t<div class=\"container-video-file\">/g,'');
        HTML_Content = HTML_Content.replace(/\n\n{3}/g, '\n');
        document.getElementById("HTML-Content").innerHTML = HTML_Content;
        console.log("remove video");
    } 

    else if (document.querySelector('figure .container-video-yt')) {
        const videoYT = document.querySelector('.container-video-yt');
        videoYT.remove();
        HTML_Content = document.getElementById("HTML-Content").innerHTML;
        HTML_Content = HTML_Content.replace(/<figure>/g, '');
        HTML_Content = HTML_Content.replace(/<\/figure>/g, '');
        HTML_Content = HTML_Content.replace(/\n\n{6}/g, '\n');
        document.getElementById("HTML-Content").innerHTML = HTML_Content;
    } 
}


/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

document.querySelector("#btn-copy").addEventListener("click", copyHTML);

function copyHTML() {
    // removeEmptyNodes();
    let HTML_Content = document.getElementById("HTML-Content").innerHTML;
    
    HTML_Content = HTML_Content.replace(/\t/g, '');
    HTML_Content = HTML_Content.replace(/\n\n{8}/g, '\n');

    const el = document.createElement('textarea');
    el.value = HTML_Content;
    hideMenus();

    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
        
    console.log("copied");
}

function copyCSS() {
    var css = "", styletags = document.getElementsByTagName("style");
    for(var i = 0; i < styletags.length; i++) {
    css += "\n"+styletags[i].innerHTML }
    console.log(css);
    const el_css = document.createElement('textarea');
    el_css.value = css;
    hideMenus();

    document.body.appendChild(el_css);
    el_css.select();
    document.execCommand('copy');
    document.body.removeChild(el_css);        
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

