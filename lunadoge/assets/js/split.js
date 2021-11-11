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
            /* Section background */
            if (btn_id === "btn_bg") {
                newStyle = "."+section_class+" { background-color: var("+color_code+") }\n";
                sub_string = "."+section_class+" { background-color";
                doUpdateArray(sub_string,newStyle)
            }

            /* Section upper label */
            else if (btn_id === "btn_upper_label") {
                newStyle = "."+section_class+" .col-2 .upper-label { color: var("+color_code+") }\n";
                sub_string = ".upper-label";
                doUpdateArray(sub_string,newStyle);
            }
                    
            /* Section heading */
            else if (btn_id === "btn_col_head") {
                newStyle = "."+section_class+" .col-2 h2 { color: var("+color_code+") }\n";
                sub_string = "h2";
                doUpdateArray(sub_string,newStyle);
            }

            /* Section sub-heading */
            else if (btn_id === "btn_col_subhead") {
                newStyle = "."+section_class+" .col-2 h3 { color: var("+color_code+") }\n";
                sub_string = "h3";
                doUpdateArray(sub_string,newStyle);
            }

            /* Section text */
            else if (btn_id === "btn_col_text") {
                newStyle = "."+section_class+" .col-2 p { color: var("+color_code+") }\n." +section_class+" .col-2 li { color: var("+color_code+") }\n";
                sub_string = ".col-2 p";
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
//////////////// SECTIONS: COLUMNS ORDER  ///////////////
*/

document.querySelector("#dd_colOrder").addEventListener("change", doColOrder);

function doColOrder() {

    let opt = document.querySelector("#dd_colOrder").value;
    const el_section = document.querySelector('section')
    if (opt==="0") {
        el_section.classList.add("split-image-right");
        el_section.classList.remove("split-image-left");
    }

    else if (opt==="1") {
        el_section.classList.remove("split-image-right");
        el_section.classList.add("split-image-left");
    }
}


/*
//////////////// COLUMN LABEL ABOVE H2 ///////////////
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
        el_parent = document.querySelector("#HTML-Content section .col-2:nth-of-type(1)");
        el_parent.prepend(newUpperLabel);
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
//////////////// COLUMN MAIN HEADING H2 ///////////////
*/

document.querySelector("#dd_head").addEventListener("change", doH2);

function doH2() {
    let opt = document.querySelector("#dd_head").value;

    // remove
    if (opt==="1") {
        removeH2();
    }

    // add short
    else if (opt==="0") {
        removeH2();
        document.querySelector("#HTML-Content section .col-2:nth-of-type(1) p").insertAdjacentHTML("beforebegin", "<h2>Lorem Malesuada Dolor</h2>\n");
        document.getElementById("btn_col_head").disabled=false;
    }
}

function removeH2() {
    if (document.querySelector('section h2')) {
        document.getElementById("btn_col_head").disabled=true;
        const elH2 = document.querySelector('section h2');
        elH2.remove();
    }
}

/*
//////////////// COLUMN SUB-HEADING H3 ///////////////
*/

document.querySelector("#dd_subhead").addEventListener("change", doSubHead);

function doSubHead() {
    let opt = document.querySelector("#dd_subhead").value;
    // remove
    if (opt==="0") {
        removeSubHead();
    }
    // add
    else if (opt==="1") {
        document.querySelector("#HTML-Content section .col-2:nth-of-type(1) p").insertAdjacentHTML("afterend", content_h3);
        document.getElementById("btn_col_subhead").disabled=false;
    }
}

function removeSubHead() {
    const elH3 = document.querySelector('section h3');
    elH3.remove();
    document.getElementById("btn_col_subhead").disabled=true;
    document.getElementById("dd_subhead").value="0";	
}

/*
//////////////// COLUMN PARAGRAPHS OR LISTS ////////////////////
*/

document.querySelector("#dd_paralist").addEventListener("change", doParaList);

function doParaList() {
    let opt = document.querySelector("#dd_paralist").value;
   
    // Paragraphs
    if (opt==="0") {
        removeParaList();
        document.querySelector("section .col-2:nth-of-type(1) p").insertAdjacentHTML("afterend", content_paras);
    }

    // Lists
    else if (opt==="1") {
        removeParaList();
        document.querySelector("section .col-2:nth-of-type(1) p").insertAdjacentHTML("afterend", content_list);
    }
}

function removeParaList() {
    if (document.querySelector("section .col-2:nth-of-type(1) p:nth-of-type(2)")) {
        const el_para = document.querySelector("section .col-2:nth-of-type(1) p:nth-of-type(2)");
        el_para.remove();
        HTML_content = document.querySelector("#HTML-Content").innerHTML;
        HTML_content = HTML_content.replace("/n/t/t/t/n/n/t/t/t/n/n", "/n");
        document.querySelector("#HTML-Content").innerHTML = HTML_content;
    }

    if (document.querySelector("section .col-2:nth-of-type(1) h3")) {
        const el_h3 = document.querySelector("section .col-2:nth-of-type(1) h3");
        el_h3.remove();
        document.getElementById("btn_col_subhead").disabled=true;
        document.getElementById("dd_subhead").value="0";	
    }

    const el_bullet = document.querySelectorAll("section li");
    for (var i = 0 ; i < el_bullet.length ; i++) {
        el_bullet[i].remove();
    }
    const el_list = document.querySelectorAll("section ul");
    for (var i = 0 ; i < el_list.length ; i++) {
        el_list[i].remove();
    }
}

/*
//////////////// BUTTONS: SPLIT TEXT AND IMAGE ////////////////////
*/

document.querySelector("#dd_buttons_split").addEventListener("change", doButtonsSplit);

    function doButtonsSplit() {
        let opt = document.querySelector("#dd_buttons_split").value;

        if (opt==="0") {
            removeButtonsSplit();
            disableAllButtons();
        }
       
        // one button
        else if (opt==="1") {
            removeButtonsSplit();
            enablePrimaryButtons();
            disableSecondaryButtons();
            if (document.querySelector(".col-2:nth-child(1) ul")) {
                document.querySelector(".col-2:nth-child(1) ul").insertAdjacentHTML("afterend", content_button_one);            
            }
            else {
                document.querySelector(".col-2:nth-child(1) p:last-of-type").insertAdjacentHTML("afterend", content_button_one);
            }
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=false;
            document.getElementById("dd_buttons_icon").disabled=false;
        }
        // two buttons
        else if (opt==="2") {
            removeButtonsSplit();
            enableAllButtons();

            if (document.querySelector(".col-2:nth-child(1) ul")) {
                document.querySelector(".col-2:nth-child(1) ul").insertAdjacentHTML("afterend", content_button_two);            
            }
            else {
                document.querySelector(".col-2:nth-child(1) p:last-of-type").insertAdjacentHTML("afterend", content_button_two);
            }
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=false;
            document.getElementById("dd_buttons_icon").disabled=false;
        }
    }

    function removeButtonsSplit() {
        if (document.querySelector("section .container-btn")) {
            const elBtn = document.querySelector("section .container-btn");
            elBtn.remove();
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=true;
            document.getElementById("dd_buttons_icon").value="0";
            document.getElementById("dd_buttons_icon").disabled=true;
        }
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

            if (!document.querySelector('.cols-2-split')) { 
                const obj_btns = document.querySelectorAll("a.btn");
                let el_btns;
                for (let i=2 ; i <= obj_btns.length+1; i++) {
                    el_btns = document.querySelector(col_no+":nth-child("+i+") a.btn");
                    el_btns.classList.add("btn-soft");
                }
            }

            else if (document.querySelector('.cols-2-split')) { 
                const obj_btns = document.querySelectorAll("a.btn");
                let el_btns;
                for (let i=1 ; i <= obj_btns.length; i++) {
                    el_btns = document.querySelector("a.btn:nth-child("+i+")");
                    el_btns.classList.add("btn-soft");
                }
            }
        }

        // rounded
        else if (opt==="2") {
            removeButtonsStyle();

            if (!document.querySelector('.cols-2-split')) { 
                const obj_btns = document.querySelectorAll("a.btn");
                let el_btns;
                for (let i=2 ; i <= obj_btns.length+1; i++) {
                    el_btns = document.querySelector(col_no+":nth-child("+i+") a.btn");
                    el_btns.classList.add("btn-rounded");
                }
            }

            else if (document.querySelector('.cols-2-split')) { 
                const obj_btns = document.querySelectorAll("a.btn");
                let el_btns;
                for (let i=1 ; i <= obj_btns.length; i++) {
                    el_btns = document.querySelector("a.btn:nth-child("+i+")");
                    el_btns.classList.add("btn-rounded");
                }
            }
        }
    }

    function removeButtonsStyle() {
        const obj_btns = document.querySelectorAll("a.btn");

        if (!document.querySelector('.cols-2-split')) { 
            let el_btns;
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = document.querySelector(col_no+":nth-child("+i+") a.btn");
                el_btns.classList.remove("btn-soft");
                el_btns.classList.remove("btn-rounded");
            }
        }

        else if (document.querySelector('.cols-2-split')) { 
            const obj_btns = document.querySelectorAll("a.btn");
            let el_btns;
            for (let i=1 ; i <= obj_btns.length; i++) {
                el_btns = document.querySelector("a.btn:nth-child("+i+")");
                el_btns.classList.remove("btn-soft");
                el_btns.classList.remove("btn-rounded");
            }
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


    function enableAllButtons() {
        document.getElementById("btn_a_primary_passive_text").disabled=false;
        document.getElementById("btn_a_primary_active_text").disabled=false;
        document.getElementById("btn_a_primary_passive_bg").disabled=false;
        document.getElementById("btn_a_primary_active_bg").disabled=false;
        document.getElementById("btn_a_primary_passive_border").disabled=false;
        document.getElementById("btn_a_primary_active_border").disabled=false;
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
//////////////// COLOURS: ENABLE/DISABLE UPPER LABEL ///////////////
*/

function disableLabelColor() {
    document.getElementById("btn_upper_label").disabled=true;
}

function enableLabelColor() {
    document.getElementById("btn_upper_label").disabled=false;
}



/*
//////////////// VISUALS: COLS SPLIT TWO  ///////////////
*/

document.querySelector("#vis-types-all").addEventListener("click", doVisTypeSplit);


function doVisTypeSplit() { 
    const rbs = document.querySelectorAll("#vis-types-all input[name='dd_visual']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    let col_fig = document.querySelector('#HTML-Content section .col-2:nth-of-type(2)');

    if (selectedValue==="pictures") {
        removeVisual();
        resetVisualEffects();
        let child_obj = document.createElement("figure");
        child_obj.innerHTML = "<img src=\"assets/img/800x800-food-mobile.jpg\" alt=\"Commerce\">";
        col_fig.appendChild(child_obj);
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=false;
        document.getElementById("dd_image_corners").disabled=false;
    }

    else if (selectedValue==="transparent") {
        removeVisual();
        resetVisualEffects();
        let child_obj = document.createElement("figure");
        child_obj.innerHTML = "<img src=\"assets/img/800x800-shopkeeper.png\" alt=\"Commerce\">";
        col_fig.appendChild(child_obj);
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=false;
        document.getElementById("dd_image_corners").disabled=false;
    }

    else if (selectedValue==="illustrations") {
        removeVisual();
        resetVisualEffects();
        let child_obj = document.createElement("figure");
        child_obj.innerHTML = "\n\t\t\t<img src=\"assets/img/800x800-mobile-pink.png\" alt=\"Commerce\">\n\t\t";
        col_fig.appendChild(child_obj);
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=false;
        document.getElementById("dd_image_corners").disabled=false;
    }

    else if (selectedValue==="vid-file") {
        removeVisual();
        resetVisualEffects();

        let child_obj = document.createElement("figure");
        child_obj.innerHTML = "\n\t\t<div class=\"container-video-file\">\n\t\t\t<video controls>\n\t\t\t\t<source src=\"assets\/videos\/whiteboard.mp4\" type=\"video\/mp4\">\n\t\t\t<\/video>\n\t\t</div>\n\t";
        col_fig.appendChild(child_obj);
        document.getElementById("dd_image_shadows").disabled=true;
        document.getElementById("dd_image_borders").disabled=true;
        document.getElementById("dd_image_corners").disabled=true;
    }

    else if (selectedValue==="vid-yt") {
        // console.log("vid-yt");
        removeVisual();
        resetVisualEffects();
        let child_obj = document.createElement("figure");

        child_obj.innerHTML = "\n\t\t<div class=\"container-video-yt\">\n\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t<\/iframe>\n\t\t<\/div>\n\t";
        col_fig.appendChild(child_obj);
        document.getElementById("dd_image_shadows").disabled=true;
        document.getElementById("dd_image_borders").disabled=true;
        document.getElementById("dd_image_corners").disabled=true;
    }
}

function removeVisual() {
    const el_col_figure = document.querySelector('section figure');
    el_col_figure.remove();
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

