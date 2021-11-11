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
//////////////// SECTION CLASS NAMES ///////////////
*/

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
        el_section.classList.add("theme-five");
        section_class = "theme-five";
    }
    else if ( opt==="5") {
        removeClassNames();
        el_section.classList.add("theme-six");
        section_class = "theme-six";
    }
}

function removeClassNames() {
    const el_section = document.querySelector("section");
    el_section.classList.remove("theme-one");
    el_section.classList.remove("theme-two");
    el_section.classList.remove("theme-three");
    el_section.classList.remove("theme-four");
    el_section.classList.remove("theme-five");
    el_section.classList.remove("theme-six");
}

/*
//////////////// HEADER COLOURS ///////////////
*/
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    let btn_id; // item to be coloured
    let newStyle; // full selector and style rule
    let sub_string; // style rule excerpt
    const arrCSS = []; // array for style rules to copy

    // On click style button 
    let all_btns = document.querySelectorAll('.btn_style');
    all_btns.forEach(el => el.addEventListener('click', event => {
        event.preventDefault();
        // get button id
        btn_id = event.target.id.toString();
        console.log("Button ID: "+btn_id);
        if (!btn_id) {
            // alert("btn_id problem");
            document.querySelector("#box-msg").classList.add("is-visible");
            document.querySelector("#box-msg").classList.remove("is-hidden");
        }
        else {
            document.querySelector("#box-msg").classList.remove("is-visible");
            document.querySelector("#box-msg").classList.add("is-hidden");
            displayModal();
        }
    }));

    document.querySelector(".close-box-msg").addEventListener('click', closeBoxMsg);

    function closeBoxMsg() {
        document.querySelector("#box-msg").classList.remove("is-visible");
        document.querySelector("#box-msg").classList.add("is-hidden");
    }

    function displayModal() {
        modal.style.display = "block";
        event.preventDefault();
    }

    document.querySelector("#picker-box").addEventListener('click', suppressBubblingClicks);
    
    function suppressBubblingClicks(event) {
        // event.preventDefault();
        event.stopPropagation();
        const label = event.target.closest("label");
        if (label && this.contains(label)) {
            event.stopPropagation();
            // Ignore this click
            return;
        }
        // console.log('Label click detected');
        const span = event.target.closest("span");
        if (span && this.contains(span)) {
            event.stopPropagation();
            // Ignore this click
            return;
        }
        // console.log('Span click detected');
    }

        function getColorID(color_code) {
            if (btn_id === "btn_bg") {
                newStyle = "."+section_class+" { background-color: var("+color_code+") }\n";
                sub_string = "."+section_class+" { background-color";
                doUpdateArray(sub_string,newStyle)
            }

            /* Section upper label */
            else if (btn_id === "btn_upper_label") {
                newStyle = "."+section_class+" .upper-label { color: var("+color_code+") }\n";
                sub_string = ".upper-label";
                doUpdateArray(sub_string,newStyle);
            }
                        
            /* Section headings */
            else if (btn_id === "btn_subhead") {
                newStyle = "."+section_class+" h2 { color: var("+color_code+") } \n." +section_class+" h3 { color: var("+color_code+") } \n."+section_class+" .upper-label { color: var("+color_code+") }\n"; 
                sub_string = "h2";
                doUpdateArray(sub_string,newStyle);
            }

            /* Section text */
            else if (btn_id === "btn_text") {
                newStyle = "."+section_class+" p { color: var("+color_code+") }\n." +section_class+" li { color: var("+color_code+") }\n"; 
                sub_string = "p { color";
                doUpdateArray(sub_string,newStyle);
            }

            /* Hyperlink text colour: passive */
            else if (btn_id === "btn_a_passive") {
                newStyle = "."+section_class+" a:not(.btn):link { color: var("+color_code+") }\n." +section_class+ " a:not(.btn):visited { color: var("+color_code+") }\n";
                sub_string = "a:not(.btn):link { color";
                doUpdateArray(sub_string,newStyle);
            }

            /* Hyperlink text colour: active */
            else if (btn_id === "btn_a_active") {
                newStyle = "."+section_class+" a:not(.btn):focus { color: var("+color_code+") }\n." +section_class+ " a:not(.btn):hover { color: var("+color_code+") } \n." +section_class+ " a:not(.btn):active { color: var("+color_code+") }\n";
                sub_string = "a:not(.btn):focus { color";
                doUpdateArray(sub_string,newStyle);
           }

            /* Hyperlink background colour: passive */
            else if (btn_id === "btn_a_passive_bg") {
                newStyle = "."+section_class+" a:not(.btn):link { background-color: var("+color_code+") }\n." +section_class+ " a:not(.btn):visited { background-color: var("+color_code+") }\n";
                sub_string = "a:not(.btn):link { background-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* Hyperlink background colour: active */
            else if (btn_id === "btn_a_active_bg") {
                newStyle = "."+section_class+" a:not(.btn):focus { background-color: var("+color_code+") } \n." +section_class+ " a:not(.btn):hover { background-color: var("+color_code+") }\n." +section_class+ " a:not(.btn):active { background-color: var("+color_code+") }\n";
                sub_string = "a:not(.btn):focus { background-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* Primary button text colour: passive */
            else if (btn_id === "btn_a_primary_passive_text") {
                newStyle = "."+section_class+" a.btn-primary:link { color: var("+color_code+") } \n." +section_class+ " a.btn-primary:visited { color: var("+color_code+") }\n";
                sub_string = "a.btn-primary:link { color";
                doUpdateArray(sub_string,newStyle);
            }
            /* Primary button text colour: active */
           else if (btn_id === "btn_a_primary_active_text") {
                newStyle = "."+section_class+" a.btn-primary:focus { color: var("+color_code+") }\n." +section_class+ " a.btn-primary:hover { color: var("+color_code+") }\n." +section_class+ " a.btn-primary:active { color: var("+color_code+") }\n";
                sub_string = "a.btn-primary:focus { color";
                doUpdateArray(sub_string,newStyle);
            } 
            /* Primary button background colour: passive */
            else if (btn_id === "btn_a_primary_passive_bg") {
                newStyle = "."+section_class+" a.btn-primary:link { background-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:visited { background-color: var("+color_code+") }\n";
                sub_string = "a.btn-primary:link { background-color";
                doUpdateArray(sub_string,newStyle);
            }
            /* Primary button background colour: active */
            else if (btn_id === "btn_a_primary_active_bg") {
                newStyle = "."+section_class+" a.btn-primary:focus { background-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:hover { background-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:active { background-color: var("+color_code+") }\n";
                sub_string = "header a.btn-primary:focus { background-color";
                doUpdateArray(sub_string,newStyle);
            }
            /* Primary button border colour: passive */
            else if (btn_id === "btn_a_primary_passive_border") {
                newStyle = "."+section_class+" a.btn-primary:link { border-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:visited { border-color: var("+color_code+") }\n";
                sub_string = ".btn-primary:link { border-color";
                doUpdateArray(sub_string,newStyle);
            }
            /* Primary button border colour: active */
            else if (btn_id === "btn_a_primary_active_border") {
                newStyle = "."+section_class+" a.btn-primary:focus { border-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:hover { border-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:active { border-color: var("+color_code+") }\n";
                sub_string = "header a.btn-primary:focus";
                doUpdateArray(sub_string,newStyle);
            }

            /* secondary button text colour: passive */
            else if (btn_id === "btn_a_secondary_passive_text") {
                newStyle = "."+section_class+" a.btn-secondary:link { color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:visited { color: var("+color_code+") }\n";
                sub_string = "a.btn-secondary:link { color";
                doUpdateArray(sub_string,newStyle);       
            }
            /* secondary button text colour: active */
            else if (btn_id === "btn_a_secondary_active_text") {
                newStyle = "."+section_class+" a.btn-secondary:focus { color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:hover { color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:active { color: var("+color_code+") }\n";
                sub_string = "a.btn-secondary:focus { color";
                doUpdateArray(sub_string,newStyle); 
            }
            /* secondary button background colour: passive */
            else if (btn_id === "btn_a_secondary_passive_bg") {
                newStyle = "."+section_class+" a.btn-secondary:link { background-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:visited { background-color: var("+color_code+") }\n";
                sub_string = "a.btn-secondary:link { background-color";
                doUpdateArray(sub_string,newStyle); 

            }
            /* secondary button background colour: active */
            else if (btn_id === "btn_a_secondary_active_bg") {
                newStyle = "."+section_class+" a.btn-secondary:focus { background-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:hover { background-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:active { background-color: var("+color_code+") }\n";
                sub_string = "a.btn-secondary:focus { background-color";
                doUpdateArray(sub_string,newStyle); 
            }
            /* secondary button border colour: passive */
            else if (btn_id === "btn_a_secondary_passive_border") {
                newStyle = "."+section_class+" a.btn-secondary:link { border-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:visited { border-color: var("+color_code+") }\n";
                sub_string = "a.btn-secondary:link { border-color";
                doUpdateArray(sub_string,newStyle); 
            }
            /* secondary button border colour: active */
            else if (btn_id === "btn_a_secondary_active_border") {
                newStyle = "."+section_class+" a.btn-secondary:focus { border-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:hover { border-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:active { border-color: var("+color_code+") }\n";
                sub_string = "a.btn-secondary:focus { border-color";
                doUpdateArray(sub_string,newStyle); 
            }

            /* Icons colour */
            else if (btn_id === "btn_icon_color") {
                newStyle = "."+section_class+" figure.icon var("+color_code+") }\n";
                sub_string = "icon";
                doUpdateArray(sub_string,newStyle); 
            }

            style = document.createElement('style');
            document.head.appendChild(style);
            style.appendChild(document.createTextNode(newStyle));
            document.getElementById("btn-copy-css").disabled=false;
            // console.log("Button ID: "+btn_id);
            // console.log("newStyle: "+newStyle);
    }

    function doUpdateArray(sub_string,newStyle) {
        if ( arrCSS.some(e => e.includes(sub_string)) ) {
            const arrPos =arrCSS.findIndex(e => e.includes(sub_string));
            arrCSS.splice(arrPos, 1);
            arrCSS.push(newStyle);
        }
        else {
            arrCSS.push(newStyle);
        }
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
    // console.log("Para Nos: "+para_nos);
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
//////////////// BUTTONS ////////////////////
*/

document.querySelector("#dd_buttons").addEventListener("change", doButtons);

    function doButtons() {
        let opt = document.querySelector("#dd_buttons").value;

        if (opt==="0") {
            removeButtons();
            disableAllButtons();
        }
        // one button
        else if (opt==="1") {
            removeButtons();
            enablePrimaryButtons();
            disableSecondaryButtons();
            document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", content_button_one);
            document.getElementById("dd_buttons_align").disabled=false;
            document.getElementById("dd_buttons_style").disabled=false;
            document.getElementById("dd_buttons_icon").disabled=false;
        }
        // two buttons
        else if (opt==="2") {
            removeButtons();
            enableAllButtons();
            document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", content_button_two);
            document.getElementById("dd_buttons_align").disabled=false;
            document.getElementById("dd_buttons_style").disabled=false;
            document.getElementById("dd_buttons_icon").disabled=false;
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
            document.getElementById("dd_buttons_icon").value="0";
            document.getElementById("dd_buttons_icon").disabled=false;
        }
    }

/*
//////////////// BUTTONS: BUTTONS ALIGN ////////////////////
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
//////////////// BUTTONS: BUTTONS CORNER STYLE ////////////////////
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
    if (document.querySelector("a.btn")) {      
        let el_btn;
        const icon_left_primary  ="<i class=\"fas fa-shopping-cart\"></i><span>Order now</span>";
        const icon_left_secondary  ="<i class=\"fas fa-arrow-right\"></i><span>Learn more</span>";
        const icon_right_primary ="<span>Order Now</span><i class=\"fas fa-shopping-cart\"></i>";
        const icon_right_secondary ="<span>Learn more</span><i class=\"fas fa-arrow-right\"></i>";

        if (opt==="0") {
            if (document.querySelector("a.btn-primary")) {
                const el_btn = document.querySelector("a.btn-primary");
                btn_content = el_btn.innerHTML;
                btn_content = btn_content.replace(icon_right_primary, icon_left_primary);
                el_btn.innerHTML = btn_content;
            }
    
            if (document.querySelector("a.btn-secondary")) {
                const el_btn = document.querySelector("a.btn-secondary");
                btn_content = el_btn.innerHTML;
                btn_content = btn_content.replace(icon_right_secondary, icon_left_secondary);
                el_btn.innerHTML = btn_content;
            }
        }

        // move text to left, icon to right
        if (opt==="1") {
            if (document.querySelector("a.btn-primary")) {
                const el_btn = document.querySelector("a.btn-primary");
                btn_content = el_btn.innerHTML;
                btn_content = btn_content.replace(icon_left_primary, icon_right_primary);
                el_btn.innerHTML = btn_content;
            }
    
            if (document.querySelector("a.btn-secondary")) {
                const el_btn = document.querySelector("a.btn-secondary");
                btn_content = el_btn.innerHTML;
                btn_content = btn_content.replace(icon_left_secondary, icon_right_secondary);
                el_btn.innerHTML = btn_content;
            }
        }
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
        document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"https://picsum.photos/800\/480\" alt=\"Placeholder image\">\n\t<\/figure>\n");
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

}

function copyCSS() {
    hideMenus();
    const el_css = document.createElement('textarea');
    let aLength = arrCSS.length;
    let strCSS  = arrCSS.join(",");
    strCSS = strCSS.replace(/,/g, ".");
    strCSS = strCSS.replace(/.header/g, "header");

    strCSS = strCSS.replace(/..theme/g, ".theme");
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

