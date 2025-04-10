// GLOBAL VARIABLES

// Class names of columns in grid: .col-2, .col-3 or .col-4
let col_no;
if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

// Number column blocks to loop through
let col_count = iframe.contentWindow.document.querySelectorAll(col_no).length;

// console.log("col_no 99: "+col_no);
// console.log("col_count 99: "+col_count);

/*
//////////////// HEADER COLOURS ///////////////
*/
    // Get the modal
    const modal = document.getElementById("myModal");
    const span = document.querySelector('#myModal .close-modal')
    span.onclick = function() {
        // modal.style.display = "none";
        hideSidebar();
        disableTransColCode();
    }
    
    // When the user clicks anywhere outside the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            // modal.style.display = "none";
            hideSidebar();
            disableTransColCode();
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
        if ((btn_id === "btn_a_primary_passive_bg") || (btn_id === "btn_a_primary_active_bg") ||(btn_id === "btn_a_primary_passive_border") || (btn_id === "btn_a_primary_active_border") || (btn_id === "btn_a_secondary_passive_bg") || (btn_id === "btn_a_secondary_active_bg") ||(btn_id === "btn_a_secondary_passive_border") || (btn_id === "btn_a_secondary_active_border") ) {
            enableTransColCode();
        }
        showSidebar();
        event.preventDefault();
    }

    document.querySelector("#picker-box").addEventListener('click', handleLabelClick);
    
    function handleLabelClick(event) {
        event.stopPropagation();
        const label = event.target.closest("label");
        if (label && this.contains(label)) {
            // Ignore this click
            return;
        }
        // console.log('Label click detected');
        const span = event.target.closest("span");
        if (span && this.contains(span)) {
            // Ignore this click
            return;
        }
        // console.log('Span click detected');
    }

    function getColorID(color_code) {
        let col_no;
        if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
        else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
        else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

        if (iframe.contentWindow.document.querySelector("section.theme-light")) {
            section_theme = "section.theme-light."+section_class;
        }
        else if (iframe.contentWindow.document.querySelector("section.theme-dark")) {
            section_theme = "section.theme-dark."+section_class;
        }

        /* Section background */
        if (btn_id === "btn_bg") {
            newStyle = section_theme+ " { background-color: var("+color_code+") }\n";
            sub_string = section_theme+ " { background-color: ";
            doUpdateArray(sub_string,newStyle);
        }

        /* Section upper label */
        else if (btn_id === "btn_upper_label") {
            newStyle = section_theme+ " .container-upper-label { color: var("+color_code+") }\n";
            sub_string = ".container-upper-label";
            doUpdateArray(sub_string,newStyle);
        }

        /* Section upper heading */
        else if (btn_id === "btn_upper_head") {
            newStyle = section_theme+ " .col-1 h2 { color: var("+color_code+") }\n";
            sub_string = "h2";
            doUpdateArray(sub_string,newStyle);
        }

        /* Section upper subheading */
        else if (btn_id === "btn_upper_subhead") {
            newStyle = section_theme+ " .col-1 h3 { color: var("+color_code+") }\n";
            sub_string = "col-1 h3";
            doUpdateArray(sub_string,newStyle); 
        }
        
        /* Column subheading */
        else if (btn_id === "btn_col_subhead") {
            newStyle = section_theme+ " "+col_no+" h3 { color: var("+color_code+") }\n";
            sub_string = section_class+" "+col_no+" h3";
            doUpdateArray(sub_string,newStyle);  
        }
        
        /* Column text */
        else if (btn_id === "btn_col_text") {
            newStyle = section_theme+ " "+col_no+" p { color: var("+color_code+") }\n." +section_class+" "+col_no+" li { color: var("+color_code+") }\n"; 
            sub_string = col_no+" p {";
            doUpdateArray(sub_string,newStyle); 
        }
        
        /* Column background */
        else if (btn_id === "btn_col_background") {
            newStyle = section_theme+ " "+col_no+" { background-color: var("+color_code+") }\n";
            sub_string = col_no+" { background-color";
            doUpdateArray(sub_string,newStyle);
        }
        
        /* Column borders colour */
        else if (btn_id === "btn_col_border_color") {
            newStyle = section_theme+ ".col-borders "+col_no+" { border-color: var("+color_code+") }\n";
            sub_string = "col-borders";
            doUpdateArray(sub_string,newStyle);
        }            
        
        /* === Buttons === */        
        /* Text colour: passive */
        else if (btn_id === "btn_a_primary_passive_text") {
            newStyle = section_theme+" a.btn-primary:link,\n"+section_theme+" a.btn-primary:visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: active */
        else if (btn_id === "btn_a_primary_active_text") {
            newStyle = section_theme+" a.btn-primary:focus,\n"+section_theme+" a.btn-primary:hover,\n"+section_theme+" a.btn-primary:active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: passive */
        else if (btn_id === "btn_a_primary_passive_bg") {
            newStyle = section_theme+" a.btn-primary:link,\n"+section_theme+" a.btn-primary:visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: active */
        else if (btn_id === "btn_a_primary_active_bg") {
            newStyle = section_theme+" a.btn-primary:focus,\n"+section_theme+" a.btn-primary:hover,\n"+section_theme+" a.btn-primary:active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn-primary:active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: passive */
        else if (btn_id === "btn_a_primary_passive_border") {
            newStyle = section_theme+" a.btn-primary:link,\n"+section_theme+" a.btn-primary:visited { border-color: var("+color_code+") }\n\n";
            sub_string = ".btn-primary:visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: active */
        else if (btn_id === "btn_a_primary_active_border") {
            newStyle = section_theme+" a.btn-primary:focus,\n"+section_theme+" a.btn-primary:hover,\n"+section_theme+" a.btn-primary:active { border-color: var("+color_code+") }\n\n";
            sub_string = "btn-primary:active { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Icons colour */
        else if (btn_id === "btn_icon_color") {
            newStyle =  section_theme+" "+col_no+" figure.icon { color: var("+color_code+") }\n";
            sub_string = "figure.icon";
            doUpdateArray(sub_string,newStyle);
        }
        
        style = document.createElement('style');
        iframe.contentWindow.document.head.appendChild(style);
        style.appendChild(document.createTextNode(newStyle));
        enableCSS();
    }

    function doUpdateArray(sub_string,newStyle) {
        if ( arrCSS.some(e => e.includes(sub_string)) ) {
            const arrPos =arrCSS.findIndex(e => e.includes(sub_string));
            arrCSS.splice(arrPos, 1);
            arrCSS.push(newStyle);
            // console.log("Includes background-color sub-string")
        }
        else {
            arrCSS.push(newStyle);
        }
    }

/*
//////////////// COLORS: TRANSPARENT OPTION ////////////////////
*/

function enableTransColCode() {
    document.getElementById("color-transparent").style.display="block";
}

function disableTransColCode() {
    document.getElementById("color-transparent").style.display="none";
}

/*
//////////////// COLUMNS ALIGN ///////////////
*/

document.querySelector("#switch-col-align").addEventListener("change", doColAlign);

function doColAlign() {
    const rbs = document.querySelectorAll("input[name='col-align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector(".container-flex").classList.remove("text-center");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector(".container-flex").classList.add("text-center"); 
    }
}


/*
//////////////// COLUMNS SHADOWS ///////////////
*/

document.querySelector("#dd_col_shadows").addEventListener("change", doColShadows);

function doColShadows() {
    let opt = document.querySelector("#dd_col_shadows").value;
    const el_section = iframe.contentWindow.document.querySelector('#HTML-Content .container-flex')

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
    const el_section = iframe.contentWindow.document.querySelector('#HTML-Content .container-flex')

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
    const el_section = iframe.contentWindow.document.querySelector('#HTML-Content .container-flex')

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
    const el_section = iframe.contentWindow.document.querySelector('#HTML-Content .container-flex')

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

        if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
        else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
        else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

        let opt = document.querySelector("#dd_h3").value;
        // remove
        if (opt==="1") {
            removeH3();
        }
        
        else if (opt==="0") {
            removeH3();
            document.getElementById("btn_col_subhead").disabled=false;
            // Test for figures (images or icons)


            if (iframe.contentWindow.document.querySelector(col_no+" figure")) {
                const obj_fig = iframe.contentWindow.document.querySelectorAll('figure');
                for (let i=2 ; i <= obj_fig.length+1 ; i++) {
                    el_fig = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") figure");
                    el_fig.insertAdjacentHTML("afterend", content_h3[i]);
               }
            }
            
            // Test for paragraphs
            else if (iframe.contentWindow.document.querySelector(col_no+" p")) {
                const obj_para = iframe.contentWindow.document.querySelectorAll(col_no+" p");
                let el_para;
                for (let i=2 ; i <= obj_para.length+1 ; i++) {
                    el_para = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") p");
                    el_para.insertAdjacentHTML("beforebegin", content_h3[i]);
               }
            }

            // Test for lists
            else if (iframe.contentWindow.document.querySelector(col_no+" ul")) {
                const obj_ul = iframe.contentWindow.document.querySelectorAll(col_no+" ul");
                let el_ul;
                for (let i=2 ; i <= obj_ul.length+1 ; i++) {
                    el_ul = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") ul");
                    el_ul.insertAdjacentHTML("beforebegin", content_h3[i]);
               }
            }

            // No pics, icons, paras, lists
            else {
                const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
                let el_col;
                for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
                    el_col = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
                    el_col.innerHTML = content_h3[i];
                }
            }
        }
    }

    function removeH3() {
        if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
        else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
        else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

        if (iframe.contentWindow.document.querySelector(col_no+" h3")) {
            document.getElementById("btn_col_subhead").disabled=true;
            const elH3 = iframe.contentWindow.document.querySelectorAll(col_no+" h3");
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
    if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
    else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
    else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

    let opt = document.querySelector("#dd_text").value;
   
    // remove
    if (opt==="0") {
        document.querySelector("#btn_col_text").disabled=true;
        removeText();
    }
    
    else if (opt==="1") {
        document.querySelector("#btn_col_text").disabled=false;
        // Do Paragraphs
        removeText();
        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector(col_no+" figure")) && (iframe.contentWindow.document.querySelector(col_no+" h3")) ) {
            const obj_h3 = iframe.contentWindow.document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_paras[i]);
           }
        }
        
        // Test for figures (images or icons) and NO h3 column headings
        else if ( (iframe.contentWindow.document.querySelector(col_no+" figure")) && (!iframe.contentWindow.document.querySelector(col_no+" h3")) ) {
            const obj_fig = iframe.contentWindow.document.querySelectorAll(col_no+" figure");
            let el_fig;
            for (let i=2 ; i <= obj_fig.length+1 ; i++) {
                el_fig = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") figure");
                el_fig.insertAdjacentHTML("afterend", content_paras[i]);
           }
        }

        // Test for h3 column headings and NO figures
        else if ( (!iframe.contentWindow.document.querySelector(col_no+" figure")) && (iframe.contentWindow.document.querySelector(col_no+" h3")) ) {
            const obj_h3 = iframe.contentWindow.document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_paras[i]);
           }
        }

        // No figures AND no column headings
        else if ( (!iframe.contentWindow.document.querySelector(col_no+" figure")) && (!iframe.contentWindow.document.querySelector(col_no+" h3")) ) {
            const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
            let el_col;
            for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
                el_col = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
                el_col.innerHTML = content_paras[i];
            }
        }
    }

    else if (opt==="2") {
        removeText();
        document.querySelector("#btn_col_text").disabled=false;
        // Test for figures AND h3 column headings
        if ( (iframe.contentWindow.document.querySelector(col_no+" figure")) && (iframe.contentWindow.document.querySelector(col_no+" h3")) ) {
            const obj_h3 = iframe.contentWindow.document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_list[i]);
           }
        }
        
        // Test for figures (images or icons)
        else if (iframe.contentWindow.document.querySelector(col_no+" figure")) {
            const obj_fig = iframe.contentWindow.document.querySelectorAll(col_no+" figure");
            let el_fig;
            for (let i=2 ; i <= obj_fig.length+1 ; i++) {
                el_fig =  iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") figure");
                el_fig.insertAdjacentHTML("afterend", content_list[i]);
           }
        }

        // Test for h3 column headings
        else if (iframe.contentWindow.document.querySelector(col_no+" h3")) {
            const obj_h3 = iframe.contentWindow.document.querySelectorAll(col_no+" h3");
            let el_h3;
            for (let i=2 ; i <= obj_h3.length+1 ; i++) {
                el_h3 = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") h3");
                el_h3.insertAdjacentHTML("afterend", content_list[i]);
           }
        }

        // No pics, icons, h3 headings
        else {
            const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
            let el_col;
            for (let i=2 ; i <= parseInt(obj_col.length)+1 ; i++) {
                el_col = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
                el_col.innerHTML =  content_list;
            }
        }
    }
}

function removeText() {
    if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
    else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
    else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

    const el_para = iframe.contentWindow.document.querySelectorAll(col_no+" p");
    for (var i = 0 ; i < el_para.length ; i++) {
      el_para[i].remove();
    }
    const el_bullet = iframe.contentWindow.document.querySelectorAll(col_no+" li");
    for (var i = 0 ; i < el_bullet.length ; i++) {
        el_bullet[i].remove();
    }
    const el_list = iframe.contentWindow.document.querySelectorAll(col_no+" ul");
    for (var i = 0 ; i < el_list.length ; i++) {
        el_list[i].remove();
    }
}

/*
//////////////// BUTTONS ////////////////////
*/

document.querySelector("#cb_colButtonsOn").addEventListener("change", doColButtons);

function doColButtons() {
    if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
    else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
    else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

    // console.log("col_no is: "+col_no)
    if (!document.getElementById("cb_colButtonsOn").checked) {
        removeColButtons();
        disableColButtons();
    }
    else {
        let btn_class="btn-primary";
        const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
        let el_cols; // each child column block

        for (let i = 2; i <= obj_col.length+1; i++) {            
            el_cols = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
            addColButtons(el_cols,btn_class);
        }
        enableColButtons();
    }
}

function addColButtons(el_cols,btn_class) {
    const el_btn = document.createElement('a');
    el_btn.setAttribute("href", "#");
    el_btn.setAttribute("class", "btn "+btn_class);
    const el_icon = document.createElement('i');
    el_icon.setAttribute("class", "fas fa-shopping-cart");
    el_btn.append(el_icon);
    const btn_text = "<span>Order Now</span>";
    el_icon.insertAdjacentHTML('afterend', btn_text);
    el_cols.append(el_btn);
    window.scrollTo(0,iframe.contentWindow.document.querySelector("#HTML-Content").scrollHeight);
}

function removeColButtons() {
    const obj_btns = iframe.contentWindow.document.querySelectorAll("a.btn");
    let el_btns;
    for (let i=2 ; i <= obj_btns.length+1; i++) {
        el_btns = iframe.contentWindow.document.querySelector("a.btn");
        el_btns.remove();
    }
    document.getElementById("dd_buttons_style").disabled=true;
    document.getElementById("dd_buttons_style").value="0";
    disableColButtons();
}

/*
//////////////// BUTTONS: ICONS POSITION ////////////////////
*/

document.querySelector("#switch-btns-icons-position").addEventListener("change", swapButtonIcons);

function swapButtonIcons() {
    if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
    else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
    else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

    const rbs = document.querySelectorAll("input[name='btns-icons-position']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (iframe.contentWindow.document.querySelector("a.btn")) {
            
        let el_btns;
        const obj_btns = iframe.contentWindow.document.querySelectorAll("a.btn");
        const icon_left  ="<i class=\"fas fa-shopping-cart\"><\/i><span>Order Now<\/span>";
        const icon_right ="<span>Order Now<\/span><i class=\"fas fa-arrow-circle-right\"><\/i>";

        if (selectedValue==="btns-icons-left") {
        // move text to right, icon to left
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
                btn_content = el_btns.innerHTML;

                if (( btn_content = icon_right) || (btn_content = icon_right)) {
                    btn_content = btn_content.replace(icon_right, icon_left);
                    el_btns.innerHTML = btn_content;
                }
            }
        }
    
        else if (selectedValue==="btns-icons-right") {
            // move text to left, icon to right
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
                btn_content = el_btns.innerHTML;

                if (( btn_content = icon_right) || (btn_content = icon_right)) {
                    btn_content = btn_content.replace(icon_left, icon_right);
                    el_btns.innerHTML = btn_content;
                }
            }
        }
    
        else if (selectedValue==="btns-icons-none") {
            // Only text, No icons.
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
                btn_content = el_btns.innerHTML;
                btn_content = "<span>Order now</span>";
                el_btns.innerHTML = btn_content;
            }
        }

    }
}

/*
//////////////// BUTTONS: STYLE ////////////////////
*/

document.querySelector("#dd_buttons_style").addEventListener("change", doButtonsStyle);

    function doButtonsStyle() {
        if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
        else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
        else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

        let opt = document.querySelector("#dd_buttons_style").value;
        // remove
        if (opt==="0") {
            removeButtonsStyle();
        }
        // soft
        else if (opt==="1") {
            removeButtonsStyle();
            const obj_btns = iframe.contentWindow.document.querySelectorAll("a.btn");
            let el_btns;
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
                el_btns.classList.add("btn-soft");
            }
        }

        // rounded
        else if (opt==="2") {
            removeButtonsStyle();
            const obj_btns = iframe.contentWindow.document.querySelectorAll("a.btn");
            let el_btns;
            // loop through columns.
            // nth-child cols begin at 2.
            // So first column updated has loop index [i] of 2, second has [i] of 3, etc.
            for (let i=2 ; i <= obj_btns.length+1; i++) {
                el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
                el_btns.classList.add("btn-rounded");
            }
        }
    }

    function removeButtonsStyle() {
        if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
        else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
        else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

        const obj_btns = iframe.contentWindow.document.querySelectorAll("a.btn");

        let el_btns;
        for (let i=2 ; i <= obj_btns.length+1; i++) {
            el_btns = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+") a.btn");
            el_btns.classList.remove("btn-soft");
            el_btns.classList.remove("btn-rounded");
        }
    }

    function enableColButtons() {
        document.getElementById("btn_a_primary_passive_text").disabled=false;
        document.getElementById("btn_a_primary_active_text").disabled=false;
        document.getElementById("btn_a_primary_passive_bg").disabled=false;
        document.getElementById("btn_a_primary_active_bg").disabled=false;
        document.getElementById("btn_a_primary_passive_border").disabled=false;
        document.getElementById("btn_a_primary_active_border").disabled=false;
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_style").disabled=false;
        document.getElementById("rd-btns-icons-left").checked=true;
        document.getElementById("rd-btns-icons-left").disabled=false;
        document.getElementById("rd-btns-icons-right").disabled=false;
        document.getElementById("rd-btns-icons-none").disabled=false;
    }

    function disableColButtons() {
        document.getElementById("btn_a_primary_passive_text").disabled=true;
        document.getElementById("btn_a_primary_active_text").disabled=true;
        document.getElementById("btn_a_primary_passive_bg").disabled=true;
        document.getElementById("btn_a_primary_active_bg").disabled=true;
        document.getElementById("btn_a_primary_passive_border").disabled=true;
        document.getElementById("btn_a_primary_active_border").disabled=true;
        document.getElementById("rd-btns-icons-left").checked=false;
        document.getElementById("rd-btns-icons-right").checked=false;
        document.getElementById("rd-btns-icons-none").checked=false;
        document.getElementById("rd-btns-icons-left").disabled=true;
        document.getElementById("rd-btns-icons-right").disabled=true;
        document.getElementById("rd-btns-icons-none").disabled=true;

    }

/*
////////////////////// VISUALS  ///////////////////////
*/

document.querySelector("#vis-types-all").addEventListener("click", doVisType);

function doVisType() { 
    if (iframe.contentWindow.document.querySelector('.col-2')) { col_no = ".col-2" }
    else if (iframe.contentWindow.document.querySelector('.col-3')) { col_no = ".col-3" }
    else if (iframe.contentWindow.document.querySelector('.col-4')) { col_no = ".col-4" }

    const rbs = document.querySelectorAll("#vis-types-all input[name='visual_options']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
  
    if (selectedValue==="none") {
        removeVisual();
    }

    else if ( (selectedValue==="pictures") || (selectedValue==="transparent") || (selectedValue==="illustrations") ) {
        removeVisual();
        const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
        let el_cols; // each child column block
        // loop through columns.
        // nth-child cols begin at 2.
        // So first column updated has loop index [i] of 2, second has [i] of 3, etc.
        for (let i = 2; i <= obj_col.length+1; i++) {
            // Current content of each column block
            el_cols = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
            // Add figure at end of current content
            if (selectedValue==="pictures") {
                el_cols.innerHTML = arrPic[i-2] + el_cols.innerHTML; 
            }
            else if (selectedValue==="transparent") {
                el_cols.innerHTML = arrTrans[i-2] + el_cols.innerHTML; 
            }
            else if (selectedValue==="illustrations") {
                el_cols.innerHTML = arrIllus[i-2] + el_cols.innerHTML; 
            }
        }
        // Enable image properties
        enableImgProps();
    }

    else if ( (selectedValue==="icons-fa") || (selectedValue==="icons-la") || (selectedValue==="icons-md") ) {
        removeVisual();
        const obj_col = iframe.contentWindow.document.querySelectorAll(col_no);
        for (let i = 2; i <= parseInt(obj_col.length)+1; i++) {
            el_cols = iframe.contentWindow.document.querySelector(col_no+":nth-child("+i+")");
            if (selectedValue==="icons-fa") {
                el_cols.innerHTML = arrIconFA[i-2] + el_cols.innerHTML; 
            }
            else if (selectedValue==="icons-la") {
                el_cols.innerHTML = arrIconLA[i-2] + el_cols.innerHTML; 
            }
            else if (selectedValue==="icons-md") {
                el_cols.innerHTML = arrIconMD[i-2] + el_cols.innerHTML; 
            }
        }
        // Enables icon properties
        document.getElementById("dd_icon_size").disabled=false;
        document.getElementById("radio-icon-align-left").disabled=false;
        document.getElementById("radio-icon-align-center").disabled=false;
        document.getElementById("radio-icon-align-left").checked=false;
        document.getElementById("radio-icon-align-center").checked=true;        
        document.getElementById("btn_icon_color").disabled=false;
    }
}


/*
//////////////// VISUAL PROPERTIES: IMAGE CORNERS ///////////////
*/

document.querySelector("#cb_img_cornersOn").addEventListener("change", doImgCorners);

function doImgCorners() {

    if (!document.getElementById("cb_img_cornersOn").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-corners-soft");
       
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-corners-soft");
    }
}


/*
//////////////// VISUAL PROPERTIES: IMAGE SHADOWS ///////////////
*/

/* Enable image shadows */
document.querySelector("#cb_img_shadowsOn").addEventListener("change", doImgShadows);


function doImgShadows() {
    if (!document.getElementById("cb_img_shadowsOn").checked) {
        iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    }
    else {
        iframe.contentWindow.document.querySelector('section').classList.add("fig-shadow");
    }
}


// Image properties with labels
function enableImgProps() {
    document.getElementById("cb_img_cornersOn").disabled=false;
    document.getElementById("cb_img_cornersOn").checked=false;
    document.getElementById("cb_img_shadowsOn").disabled=false;
    document.getElementById("cb_img_shadowsOn").checked=false;
    document.querySelector("label[for='cb_img_cornersOn']").style.color = "#fff";
    document.querySelector("label[for='cb_img_shadowsOn']").style.color = "#fff";
}

function disableImgProps() {
    document.getElementById("cb_img_cornersOn").disabled=true;
    document.getElementById("cb_img_cornersOn").checked=false;
    document.getElementById("cb_img_shadowsOn").disabled=true;
    document.getElementById("cb_img_shadowsOn").checked=false;
    document.querySelector("label[for='cb_img_cornersOn']").style.color = "var(--gray-500)";
    document.querySelector("label[for='cb_img_shadowsOn']").style.color = "var(--gray-500)";
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-corners-soft");
}


/*
//////////////// ICON PROPERTIES: SIZE ///////////////
*/

document.querySelector("#dd_icon_size").addEventListener("change", doIconSize);


function doIconSize() {
    let opt = document.querySelector("#dd_icon_size").value;
    //Restore normal size
    if (opt==="0") {
        const el_section = iframe.contentWindow.document.querySelector("section");
        el_section.classList.remove("icon-small");
    }
    //Left align
    else if (opt==="1") {
        const el_section = iframe.contentWindow.document.querySelector("section");
        el_section.classList.add("icon-small");
    }
}

/*
//////////////// ICON PROPERTIES: ALIGN ///////////////
*/

document.querySelector("#switch-icon-align").addEventListener("change", doIconAlign);

function doIconAlign() {

    const rbs = document.querySelectorAll("input[name='radio-icon-align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    const el_section = document.querySelector("section");

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
    // Remove any corner or shadow properties
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-corners-soft");
    iframe.contentWindow.document.querySelector('section').classList.remove("fig-shadow");
    // Disable image properties
    disableImgProps();
    // Disable icon properties
    document.getElementById("dd_icon_size").disabled=true;
    document.getElementById("radio-icon-align-left").disabled=true;
    document.getElementById("radio-icon-align-center").disabled=true;
    document.getElementById("radio-icon-align-left").checked=false;
    document.getElementById("radio-icon-align-center").checked=false;        
    document.getElementById("btn_icon_color").disabled=true;
}
