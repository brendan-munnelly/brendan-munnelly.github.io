/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// Deselect all

let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    // hide all
    let i;
    for (i = 1; i < 6; i++) {
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
    for (i = 1; i < 6; i++) {
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
//////////////// SECTIONS: BACKGROUND COLOUR ///////////////
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

    // On click style button 
    let all_btns = document.querySelectorAll('.btn_style');
    all_btns.forEach(el => el.addEventListener('click', event => {
        // get button id
        btn_id = event.target.id.toString();
        console.log("Button ID: "+btn_id);
        displayModal();
    }));

    function displayModal() {
        modal.style.display = "block";
        event.preventDefault();
    }

    var radios = document.querySelectorAll('input[type=radio][name="picker-radio"]');
    radios.forEach(radio => radio.addEventListener('change', () => getColorID(radio.value)));

    function getColorID(color_code) {

            let newStyle; 
            /* Section background */
            if (btn_id === "btn_bg") {
                newStyle = "."+section_class+" { background-color: var("+color_code+") }";
            }

            /* Section upper label */
            else if (btn_id === "btn_upper_label") {
                newStyle = "."+section_class+" .upper-label { color: var("+color_code+") }";
            }

            /* Section upper heading */
            else if (btn_id === "btn_upper_head") {
                newStyle = "."+section_class+" .col-1 h2 { color: var("+color_code+") }";
            }

            /* Section upper subheading */
            else if (btn_id === "btn_upper_subhead") {
                newStyle = "."+section_class+" .col-1 h3 { color: var("+color_code+") }"; 
            }

            /* Section upper subheading */
            else if (btn_id === "btn_col_subhead") {
                newStyle = "."+section_class+" "+col_no+" h3 { color: var("+color_code+") }"; 
            }

            /* Section text */
            else if (btn_id === "btn_col_text") {
                newStyle = "."+section_class+" "+col_no+" p { color: var("+color_code+") }\n" + "."+section_class+" "+col_no+" li { color: var("+color_code+") }"; 
            }

            /* Column background */
            else if (btn_id === "btn_col_background") {
                newStyle = "."+section_class+" "+col_no+" { background-color: var("+color_code+") }";
            }

            /* Column borders colour */
            else if (btn_id === "btn_col_border_color") {
                newStyle = "."+section_class+".col-borders "+col_no+" { border-color: var("+color_code+") }";
            }            

            /* Primary button text colour: passive */
            else if (btn_id === "btn_a_primary_passive_text") {
                newStyle = "."+section_class+" a.btn-primary:link { color: var("+color_code+") }\n." +section_class+ " a.btn-primary:visited { color: var("+color_code+") }";
            }

            /* Primary button text colour: active */
            else if (btn_id === "btn_a_primary_active_text") {
                newStyle = "."+section_class+" a.btn-primary:focus { color: var("+color_code+") }\n."+section_class+ " a.btn-primary:hover { color: var("+color_code+") }\n." +section_class+ " a.btn-primary:active { color: var("+color_code+") }";
            }

            /* Primary button background colour: passive */
            else if (btn_id === "btn_a_primary_passive_bg") {
                newStyle = "."+section_class+" a.btn-primary:link { background-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:visited { background-color: var("+color_code+") }";
            }

            /* Primary button background colour: active */
            else if (btn_id === "btn_a_primary_active_bg") {
                newStyle = "."+section_class+" a.btn-primary:focus { background-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:hover { background-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:active { background-color: var("+color_code+") }";
            }
            /* Primary button border colour: passive */
            else if (btn_id === "btn_a_primary_passive_border") {
                newStyle = "."+section_class+" a.btn-primary:link { border-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:visited { border-color: var("+color_code+") }";
            }
            /* Primary button border colour: active */
            else if (btn_id === "btn_a_primary_active_border") {
                newStyle = "."+section_class+" a.btn-primary:focus { border-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:hover { border-color: var("+color_code+") }\n." +section_class+ " a.btn-primary:active { border-color: var("+color_code+") }";
            }

            /* ghost button text colour: passive */
            else if (btn_id === "btn_a_ghost_passive_text") {
                newStyle = "."+section_class+" a.btn-ghost:link { color: var("+color_code+") } \n." +section_class+ " a.btn-ghost:visited { color: var("+color_code+") }";
            }

            /* ghost button text colour: active */
            else if (btn_id === "btn_a_ghost_active_text") {
                newStyle = "."+section_class+" a.btn-ghost:focus { color: var("+color_code+") } \n." +section_class+ " a.btn-ghost:hover { color: var("+color_code+") }\n." +section_class+ " a.btn-ghost:active { color: var("+color_code+") }";
            }
 
            /* ghost button border colour: passive */
            else if (btn_id === "btn_a_ghost_passive_border") {
                newStyle = "."+section_class+" a.btn-ghost:link { border-color: var("+color_code+") }\n." +section_class+ " a.btn-ghost:visited { border-color: var("+color_code+") }";
            }
            /* ghost button border colour: active */
            else if (btn_id === "btn_a_ghost_active_border") {
                newStyle = "."+section_class+" a.btn-ghost:focus { border-color: var("+color_code+") }\n." +section_class+ " a.btn-ghost:hover { border-color: var("+color_code+") }\n." +section_class+ " a.btn-ghost:active { border-color: var("+color_code+") }";
            }

            /* ghost button background colour: active */
            else if (btn_id === "btn_a_ghost_active_bg") {
                newStyle = "."+section_class+" a.btn-ghost:focus { background-color: var("+color_code+") }\n." +section_class+ " a.btn-ghost:hover { background-color: var("+color_code+") }\n." +section_class+ " a.btn-ghost:active { background-color: var("+color_code+") }";
            }

            /* secondary button text colour: passive */
            else if (btn_id === "btn_a_secondary_passive_text") {
                newStyle = "."+section_class+" a.btn-secondary:link { color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:visited { color: var("+color_code+") }";
            }
            /* secondary button text colour: active */
            else if (btn_id === "btn_a_secondary_active_text") {
                newStyle = "."+section_class+" a.btn-secondary:focus { color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:hover { color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:active { color: var("+color_code+") }";
            }
            /* secondary button background colour: passive */
            else if (btn_id === "btn_a_secondary_passive_bg") {
                newStyle = "."+section_class+" a.btn-secondary:link { background-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:visited { background-color: var("+color_code+") }";
            }
            /* secondary button background colour: active */
            else if (btn_id === "btn_a_secondary_active_bg") {
                newStyle = "."+section_class+" a.btn-secondary:focus { background-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:hover { background-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:active { background-color: var("+color_code+") }";
            }
            /* secondary button border colour: passive */
            else if (btn_id === "btn_a_secondary_passive_border") {
                newStyle = "."+section_class+" a.btn-secondary:link { border-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:visited { border-color: var("+color_code+") }";
            }
            /* secondary button border colour: active */
            else if (btn_id === "btn_a_secondary_active_border") {
                newStyle = "."+section_class+" a.btn-secondary:focus { border-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:hover { border-color: var("+color_code+") }\n." +section_class+ " a.btn-secondary:active { border-color: var("+color_code+") }";
            }

            /* Icons colour */
            else if (btn_id === "btn_icon_color") {
                newStyle = "."+section_class+" "+col_no+" figure.icon { color: var("+color_code+") }";
            }

            style = document.createElement('style');
            document.head.appendChild(style);
            style.appendChild(document.createTextNode(newStyle));
            document.getElementById("btn-copy-css").disabled=false;
    }

/*
//////////////// COLOURS: ENABLE/DISABLE UPPER LABEL ///////////////
*/

function disableLabelColor() {
    document.getElementById("btn_upper_label").disabled=true;
}

function enableLabelColor() {
    document.getElementById("btn_upper_label").disabled=false;
}

/*
//////////////// SECTIONS: PARAGRAPHS ///////////////
*/
document.querySelector("#dd_colNos").addEventListener("change", doColumnNos);

function doColumnNos() {
    let opt = document.querySelector("#dd_colNos").value;
    // remove
    if (opt==="0") {
        reduceCols();
    }
    else if (opt==="1") {
        if (col_no == ".col-2") {
            document.querySelector(col_no+":nth-child(3)").insertAdjacentHTML("afterend", content_paras); 
        }

        else if (col_no == ".col-3") {
            document.querySelector(col_no+":nth-child(4)").insertAdjacentHTML("afterend", content_paras);
            col_blocks = 6;
            // console.log(col_blocks = 6);
        }

        else if (col_no == ".col-4") {
            document.querySelector(col_no+":nth-child(5)").insertAdjacentHTML("afterend", content_paras); 
        }
    }
}

function reduceCols() {
    let i, upper_limit;
    if (col_no == ".col-2") { i = 2; upper_limit = 3; col_blocks = 2; }
    else if (col_no == ".col-3") { i = 2; upper_limit = 4; col_blocks = 3; }
    else if (col_no == ".col-4") { i = 2; upper_limit = 5; col_blocks = 4; }
    const obj_col = document.querySelectorAll(col_no);
    let el_col;
    for (i ; i <= upper_limit; i++) { 
        el_col = document.querySelector(col_no+":nth-child("+i+")");
        el_col.remove();
    }
}


/*
//////////////// UPPER BLOCK: MAIN HEADING H2 ///////////////
*/

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
        document.getElementById("btn_col_subhead").disabled=false;
        const newH2 = document.createElement("h2");
        const newContent = document.createTextNode("Lorem Malesuada Dolor");
        newH2.appendChild(newContent);
        const currentDiv = document.querySelector('.col-1');
        currentDiv.classList.remove("h2-long-text"); 
        if (!document.querySelector('.upper-label')) {
            currentDiv.prepend(newH2);
        }
        else {
            document.querySelector(".upper-label").insertAdjacentHTML("afterend", "<h2>Lorem Malesuada Dolor</h2>"); 
        }
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
        if (!document.querySelector('.upper-label')) {
            currentDiv.prepend(newH2);
        }
        else {
            document.querySelector(".upper-label").insertAdjacentHTML("afterend", "<h2>Etiam tincidunt risus nec odio non blandit ipsum facilisis</h2>"); 
        }     
        doColUpperAlignStatus();
    }
}

function removeH2() {
    if (document.querySelector('.col-1 h2')) {
        document.getElementById("btn_col_subhead").disabled=true;
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
//////////////// UPPER CATEGORY LABEL ABOVE H2 ///////////////
*/

document.querySelector("#dd_upperLabel").addEventListener("change", doUpperLabel);

function doUpperLabel() {
    const opt = document.querySelector("#dd_upperLabel").value;
    // remove
    if (opt==="0") {
        removeUpperLabel();
    }
    // regular
    else if (opt==="1") {
        const newUpperLabel = document.createElement("div");
        const newContent = document.createTextNode("Upper Label Text");
        newUpperLabel.appendChild(newContent);
        newUpperLabel.classList.add("upper-label"); 
        el_parent = document.querySelector(".col-1");
        el_parent.prepend(newUpperLabel);
        enableLabelColor();
    }
}

function removeUpperLabel() {
    if (document.querySelector('.upper-label')) {
        const upperLabel = document.querySelector('.col-1 .upper-label');
        upperLabel.remove();
        doColUpperAlignStatus();
        disableLabelColor();
        document.getElementById("dd_upperLabel").value="0";
    }
}

function removeUpperLabelSplit() {
    if (document.querySelector('.upper-label')) {
        const upperLabel = document.querySelector('.col-2 .upper-label');
        upperLabel.remove();
        disableLabelColor();
        document.getElementById("dd_upperLabel").value="0";
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
        el_section.classList.remove("col-shadows");
        el_section.classList.remove("corners-soft");
        // Enable corner and border options
        document.getElementById("dd_col_borders").disabled=false;
        document.getElementById("dd_col_borders").value="0";
        document.getElementById("dd_col_corners").disabled=false; 
        document.getElementById("dd_col_corners").value="0";
    }

    else if (opt==="1") {
        el_section.classList.add("col-shadows");
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
        el_section.classList.remove("col-borders");
        el_section.classList.remove("corners-soft");
        document.getElementById("dd_col_corners").disabled=true; 
        document.getElementById("dd_col_corners").value="0";
        document.getElementById("dd_col_borders").disabled=false;
        document.getElementById("btn_col_border_color").disabled=true;
    }

    else if (opt==="1") {
        el_section.classList.add("col-borders");
        document.getElementById("dd_col_corners").disabled=false; 
        document.getElementById("dd_col_corners").value="0";
        document.getElementById("dd_col_borders").disabled=false;
        document.getElementById("btn_col_border_color").disabled=false;
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
            document.getElementById("btn_col_subhead").disabled=false;
            // Test for figures (images or icons)
            if (document.querySelector(col_no+" figure")) {
                const obj_fig = document.querySelectorAll('figure');
                let el_fig;
                for (let i=2 ; i <= obj_fig.length+1 ; i++) {
                    el_fig = document.querySelector(col_no+":nth-child("+i+") figure" );
                    el_fig.insertAdjacentHTML("afterend", content_h3);
               }
            }
            
            // Test for paragraphs
            else if (document.querySelector(col_no+" p")) {
                const obj_para = document.querySelectorAll(col_no+" p");
                let el_para;
                for (let i=2 ; i <= obj_para.length+1 ; i++) {
                    el_para = document.querySelector(col_no+":nth-child("+i+") p");
                    el_paras.insertAdjacentHTML("beforebegin", content_h3);
               }
            }

            // Test for lists
            else if (document.querySelector(col_no+" ul")) {
                const obj_ul = document.querySelectorAll(col_no+" ul");
                let el_ul;
                for (let i=2 ; i <= obj_ul.length+1 ; i++) {
                    el_ul = document.querySelector(col_no+":nth-child("+i+") ul");
                    el_ul.insertAdjacentHTML("beforebegin", content_list);
               }
            }

            // No pics, icons, paras, lists
            else {
                const obj_col = document.querySelectorAll(col_no);
                let el_col;
                for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
                    el_col = document.querySelector(col_no+":nth-child("+i+")");
                    el_col.innerHTML = content_h3;
                }
            }
        }
    }

    function removeH3() {
        if (document.querySelector(col_no+" h3")) {
            document.getElementById("btn_col_subhead").disabled=true;
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
        // Do Paragraphs
        removeText();
        // Test for figures AND h3 column headings
        if ( (document.querySelector(col_no+" figure")) && (document.querySelector(col_no+" h3")) ) {
            const obj_h3 = document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_paras);
           }
        }
        
        // Test for figures (images or icons) and NO h3 column headings
        else if ( (document.querySelector(col_no+" figure")) && (!document.querySelector(col_no+" h3")) ) {
            const obj_fig = document.querySelectorAll(col_no+" figure");
            let el_fig;
            for (let i=2 ; i <= obj_fig.length+1 ; i++) {
                el_fig = document.querySelector(col_no+":nth-child("+i+") figure");
                el_fig.insertAdjacentHTML("afterend", content_list);
           }
        }

        // Test for h3 column headings and NO figures
        else if ( (!document.querySelector(col_no+" figure")) && (document.querySelector(col_no+" h3")) ) {
            const obj_h3 = document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_paras);
           }
        }

        // No figures AND no column headings
        else if ( (!document.querySelector(col_no+" figure")) && (!document.querySelector(col_no+" h3")) ) {
            const obj_col = document.querySelectorAll(col_no);
            let el_col;
            for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
                el_col = document.querySelector(col_no+":nth-child("+i+")");
                el_col.innerHTML = content_paras;
            }
        }
    }

    else if (opt==="2") {
        removeText();
        // Test for figures AND h3 column headings
        if ( (document.querySelector(col_no+" figure")) && (document.querySelector(col_no+" h3")) ) {
            const obj_h3 = document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_list);
           }
        }
        
        // Test for figures (images or icons)
        else if (document.querySelector(col_no+" figure")) {
            const obj_fig = document.querySelectorAll(col_no+" figure");
            let el_fig;
            for (let i=2 ; i <= obj_fig.length+1 ; i++) {
                el_fig =  document.querySelector(col_no+":nth-child("+i+") figure");
                el_fig.insertAdjacentHTML("afterend", content_list);
           }
        }

        // Test for h3 column headings
        else if (document.querySelector(col_no+" h3")) {
            const obj_h3 = document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_list);
           }
        }

        // No pics, icons, h3 headings
        else {
            const obj_col = document.querySelectorAll(col_no);
            let el_col;
            for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
                el_col = document.querySelector(col_no+":nth-child("+i+")");
                el_col.innerHTML =  content_list;
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
//////////////// BUTTONS ////////////////////
*/

document.querySelector("#dd_buttons").addEventListener("change", doButtons);

    function doButtons() {
        let opt = document.querySelector("#dd_buttons").value;
        // remove
        if (opt==="0") {
            removeButtons();
            disableAllButtons();
        }

        // primary
        else if (opt==="1") {
            removeButtons();
            enablePrimaryButtons();
            disableGhostButtons();
            btn_class="btn-primary";

            const obj_col = document.querySelectorAll(col_no);
            let el_cols;
            for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
                el_cols = document.querySelector(col_no+":nth-child("+i+")");
                addButons(el_cols,btn_class);
            }
        }
        // ghost
        else if (opt==="2") {
            removeButtons();
            disablePrimaryButtons();
            enableGhostButtons();

            btn_class="btn-ghost";

            const obj_col = document.querySelectorAll(col_no);
            let el_cols;
            for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
                el_cols = document.querySelector(col_no+":nth-child("+i+")");
                addButons(el_cols,btn_class);
            }
        } 
        
    }

    function addButons(el_cols,btn_class) {
        const el_btn = document.createElement('a');
        el_btn.setAttribute("href", "#");
        el_btn.setAttribute("class", "btn "+btn_class);
        const el_icon = document.createElement('i');
        el_icon.setAttribute("class", "fas fa-shopping-cart");
        el_btn.append(el_icon);
        const btn_text = "Order Now";
        el_icon.insertAdjacentHTML('afterend', btn_text);
        el_cols.append(el_btn);

        HTML_content = document.querySelector("#HTML-Content").innerHTML;
        HTML_content = HTML_content.replace("/n/t/t/t/", "");
        document.querySelector("#HTML-Content").innerHTML = HTML_content;
        
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_style").disabled=false;
    }

    function removeButtons() {
        const obj_btns = document.querySelectorAll("a.btn");
        let el_btns;
        for (let i=2 ; i <= obj_btns.length+1; i++) {
            el_btns = document.querySelector("a.btn");
            el_btns.remove();
        }
        document.getElementById("dd_buttons_style").disabled=true;
        document.getElementById("dd_buttons_style").value="0";
    }


/*
//////////////// BUTTONS: STYLE ////////////////////
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
            const obj_btns = document.querySelectorAll("a.btn");
            let el_btns;
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = document.querySelector(col_no+":nth-child("+i+") a.btn");
                el_btns.classList.add("btn-soft");
            }
        }

        // rounded
        else if (opt==="2") {
            removeButtonsStyle();
            const obj_btns = document.querySelectorAll("a.btn");
            let el_btns;
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = document.querySelector(col_no+":nth-child("+i+") a.btn");
                el_btns.classList.add("btn-rounded");
            }
        }
    }

    function removeButtonsStyle() {
        const obj_btns = document.querySelectorAll("a.btn");

        let el_btns;
        for (let i=2 ; i <= obj_btns.length+1; i++) {
            el_btns = document.querySelector(col_no+":nth-child("+i+") a.btn");
            el_btns.classList.remove("btn-soft");
            el_btns.classList.remove("btn-rounded");
        }
    }

    function enableAllButtons() {
        document.getElementById("btn_a_primary_passive_text").disabled=false;
        document.getElementById("btn_a_primary_active_text").disabled=false;
        document.getElementById("btn_a_primary_passive_bg").disabled=false;
        document.getElementById("btn_a_primary_active_bg").disabled=false;
        document.getElementById("btn_a_primary_passive_border").disabled=false;
        document.getElementById("btn_a_primary_active_border").disabled=false;

        document.getElementById("btn_a_ghost_passive_text").disabled=false;
        document.getElementById("btn_a_ghost_passive_border").disabled=false;
        document.getElementById("btn_a_ghost_active_text").disabled=false;
        document.getElementById("btn_a_ghost_active_bg").disabled=false;
        document.getElementById("btn_a_ghost_active_border").disabled=false;
    }

    function enablePrimaryButtons() {
        document.getElementById("btn_a_primary_passive_text").disabled=false;
        document.getElementById("btn_a_primary_active_text").disabled=false;
        document.getElementById("btn_a_primary_passive_bg").disabled=false;
        document.getElementById("btn_a_primary_active_bg").disabled=false;
        document.getElementById("btn_a_primary_passive_border").disabled=false;
        document.getElementById("btn_a_primary_active_border").disabled=false;
    }

    function enableGhostButtons() {
        document.getElementById("btn_a_ghost_passive_text").disabled=false;
        document.getElementById("btn_a_ghost_passive_border").disabled=false;
        document.getElementById("btn_a_ghost_active_text").disabled=false;
        document.getElementById("btn_a_ghost_active_bg").disabled=false;
        document.getElementById("btn_a_ghost_active_border").disabled=false;        
    }

    function disableAllButtons() {
        document.getElementById("btn_a_primary_passive_text").disabled=true;
        document.getElementById("btn_a_primary_active_text").disabled=true;
        document.getElementById("btn_a_primary_passive_bg").disabled=true;
        document.getElementById("btn_a_primary_active_bg").disabled=true;
        document.getElementById("btn_a_primary_passive_border").disabled=true;
        document.getElementById("btn_a_primary_active_border").disabled=true;

        document.getElementById("btn_a_ghost_passive_text").disabled=true;
        document.getElementById("btn_a_ghost_passive_border").disabled=true;
        document.getElementById("btn_a_ghost_active_text").disabled=true;
        document.getElementById("btn_a_ghost_active_bg").disabled=true;
        document.getElementById("btn_a_ghost_active_border").disabled=true;
    }

    function disablePrimaryButtons() {
        document.getElementById("btn_a_primary_passive_text").disabled=true;
        document.getElementById("btn_a_primary_active_text").disabled=true;
        document.getElementById("btn_a_primary_passive_bg").disabled=true;
        document.getElementById("btn_a_primary_active_bg").disabled=true;
        document.getElementById("btn_a_primary_passive_border").disabled=true;
        document.getElementById("btn_a_primary_active_border").disabled=true;
    }

    function disableGhostButtons() {
        document.getElementById("btn_a_ghost_passive_text").disabled=true;
        document.getElementById("btn_a_ghost_passive_border").disabled=true;
        document.getElementById("btn_a_ghost_active_text").disabled=true;
        document.getElementById("btn_a_ghost_active_bg").disabled=true;
        document.getElementById("btn_a_ghost_active_border").disabled=true;        
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
        document.getElementById("btn_icon_color").disabled=true;
    }

    else if (selectedValue==="pictures") {
        removeVisual();
        resetVisualEffects();
        const obj_col = document.querySelectorAll(col_no);
        let el_cols;
        for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
            el_cols = document.querySelector(col_no+":nth-child("+i+")");
            el_cols.innerHTML = picArray[i-1] + el_cols.innerHTML; 
        }
        document.getElementById("dd_image_corners").disabled=false;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=false;
        document.getElementById("dd_icon_size").disabled=true;
        document.getElementById("dd_icon_align").disabled=true;
        document.getElementById("btn_icon_color").disabled=true;
    }

    else if (selectedValue==="transparent") {
        removeVisual();
        resetVisualEffects();
        const obj_col = document.querySelectorAll(col_no);
        let el_cols;
        for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
            el_cols = document.querySelector(col_no+":nth-child("+i+")");
            el_cols.innerHTML = transArray[i-1] + el_cols.innerHTML; 
        }
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=true;
        document.getElementById("dd_icon_size").disabled=true;
        document.getElementById("dd_icon_align").disabled=true;
        document.getElementById("btn_icon_color").disabled=true;
    }

    else if (selectedValue==="illustrations") {
        removeVisual();
        const obj_col = document.querySelectorAll(col_no);
        let el_cols;
        for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
            el_cols = document.querySelector(col_no+":nth-child("+i+")");
            el_cols.innerHTML = illusArray[i-1] + el_cols.innerHTML; 
        }

        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=true;
        document.getElementById("dd_icon_size").disabled=true;
        document.getElementById("dd_icon_align").disabled=true;
        document.getElementById("btn_icon_color").disabled=true;
    }

    else if (selectedValue==="icons-fa") {
        removeVisual();
        resetVisualEffects();
        const obj_col = document.querySelectorAll(col_no);
        let el_cols;
        for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
            el_cols = document.querySelector(col_no+":nth-child("+i+")");
            el_cols.innerHTML = iconFAArray[i-1] + el_cols.innerHTML; 
        }

        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=true;
        document.getElementById("dd_image_borders").disabled=true;

        document.getElementById("dd_icon_size").disabled=false;
        document.getElementById("dd_icon_align").disabled=false;
        document.getElementById("btn_icon_color").disabled=false;
    }

    else if (selectedValue==="icons-la") {
        removeVisual();
        resetVisualEffects();

        const obj_col = document.querySelectorAll(col_no);
        let el_cols;
        for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
            el_cols = document.querySelector(col_no+":nth-child("+i+")");
            el_cols.innerHTML = iconLAArray[i-1] + el_cols.innerHTML; 
        }

        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=true;
        document.getElementById("dd_image_borders").disabled=true;

        document.getElementById("dd_icon_size").disabled=false;
        document.getElementById("dd_icon_align").disabled=false;
        document.getElementById("btn_icon_color").disabled=false;
    }

    else if (selectedValue==="icons-md") {
        removeVisual();
        resetVisualEffects();

        const obj_col = document.querySelectorAll(col_no);
        let el_cols;
        for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
            el_cols = document.querySelector(col_no+":nth-child("+i+")");
            el_cols.innerHTML = iconMDArray[i-1] + el_cols.innerHTML; 
        }

        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=true;
        document.getElementById("dd_image_borders").disabled=true;
        
        document.getElementById("dd_icon_size").disabled=false;
        document.getElementById("dd_icon_align").disabled=false;
        document.getElementById("btn_icon_color").disabled=false;
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

/*
//////////////// ICON PROPERTIES ///////////////
*/

document.querySelector("#dd_icon_size").addEventListener("change", doIconSize);


function doIconSize() {
    let opt = document.querySelector("#dd_icon_size").value;
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

/*
//////////////// COPY TO CLIPBOARD ///////////////
*/

document.querySelector("#btn-copy").addEventListener("click", copyHTML);

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
    var css = "", styletags = document.getElementsByTagName("style");
    for(var i = 0; i < styletags.length; i++) {
    css += "\n"+styletags[i].innerHTML }
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

