
/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// deselect all

let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    // hide all
    let i;
    for (i = 0; i < 4; i++) {
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
    for (i = 0; i < 4; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
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
        document.querySelector("section > h1").insertAdjacentHTML("beforebegin", "\n\t\t\t\t<div class=\"upper-label\">Category Label<\/div>\n");
    }
    // reversed
    else if (opt==="2") {
        removeUpperLabel();
        document.querySelector("section > h1").insertAdjacentHTML("beforebegin", "\n\t\t\t\t<div class=\"upper-label-reversed\">Category Label<\/div>\n");
    }
}

function removeUpperLabel() {
    let HTML_content = document.getElementById("HTML-Content").innerHTML; 
    HTML_content = HTML_content.replace("\n\t\t\t\t<div class=\"upper-label\">Category Label<\/div>\n", "");
    HTML_content = HTML_content.replace("\n\t\t\t\t<div class=\"upper-label-reversed\">Category Label<\/div>\n", "");
    document.getElementById("HTML-Content").innerHTML = HTML_content;
    return;
}

/*
//////////////// MAIN HEADING H1 ///////////////
*/

document.getElementById("dd_h1").value="0";

document.querySelector("#dd_h1").addEventListener("change", doLengthH1);

function doLengthH1() {
    let opt = document.querySelector("#dd_h1").value;

    // Short
    if (opt==="0") {
        console.log("Go short");
        document.querySelector("section > h1").innerText = "Lorem Malesuada Dolor";
    }
    // Long
    else if (opt==="1") {
        console.log("Go long");
        document.querySelector("section > h1").innerText = "Etiam tincidunt risus nec odio non blandit ipsum facilisis";
    }
}

/*
//////////////// H2 SUB HEADING UNDER H1 ///////////////
*/

document.querySelector("#dd_h2").addEventListener("change", doH2);
document.getElementById("dd_h2").value="0";

function doH2() {
    let opt = document.querySelector("#dd_h2").value;
    // remove
    if (opt==="0") {
        removeH2();
    }
    // regular
    else if (opt==="1") {
        removeH2();
        const elH2 = document.querySelector("section > h1");
        elH2.insertAdjacentHTML("afterend", "\n\t\t\t\t<h2>Etiam tincidunt risus nec odio sollicitudin, non blandit ipsum facilisis class aptent.<\/h2>\n");
    }
    // border-top
    else if (opt==="2") {
        removeH2();
        const elH2 = document.querySelector("section > h1");
        elH2.insertAdjacentHTML("afterend", "\n\t\t\t\t<hr><h2>Etiam tincidunt risus nec odio sollicitudin, non blandit ipsum facilisis class aptent.<\/h2>\n");
    }
    // border-bottom
    else if (opt==="3") {
        removeH2();
        const elH2 = document.querySelector("section > h1");
        elH2.insertAdjacentHTML("afterend", "\n\t\t\t\t<h2>Etiam tincidunt risus nec odio sollicitudin, non blandit ipsum facilisis class aptent.<\/h2>\n<hr class=\"hr-bottom\">");             
    }
}

function removeH2() {
    const parentNode = document.querySelector("#HTML-Content");
    let element_h2 = Array.prototype.slice.call(document.getElementsByTagName("h2"),0); 
    for (var index = 0, len = element_h2.length; index < len; index++) {
        element_h2[index].parentNode.removeChild(element_h2[index]);
    }
    let element_hr = Array.prototype.slice.call(document.getElementsByTagName("hr"),0); 
    for (var index = 0, len = element_hr.length; index < len; index++) {
        element_hr[index].parentNode.removeChild(element_hr[index]);
    }
}

document.querySelector("#dd_full_width_column_width").addEventListener("change", doUpperWidth);

function doUpperWidth() {
    const opt = document.querySelector("#dd_full_width_column_width").value;
    const elCol_1 = document.querySelector("section");
    // remove
    if (opt==="0") {
        elCol_1.classList.remove("section-narrow");
        elCol_1.classList.remove("section-narrower");
    }

    else if (opt==="1") {
        elCol_1.classList.add("section-narrow");
        elCol_1.classList.remove("section-narrower");
    }

    else if (opt==="2") {
        elCol_1.classList.add("section-narrower");
        elCol_1.classList.remove("section-narrow");
    }
}

/*
//////////////// ALIGNMENT: FULL-WIDTH COLUMN  ///////////////
*/

document.querySelector("#dd_align_full_width_column").addEventListener("change", doAlignFullWidthColumn);
    
function doAlignFullWidthColumn() {
    let opt = document.querySelector("#dd_align_full_width_column").value;
    if (opt==="0") {
        document.querySelector("section").classList.remove("text-center");
    }
    else if (opt==="1") {
        document.querySelector("section").classList.add("text-center");
    }
}

/*
//////////////// WIDTH: GRID OF COLUMNS  ///////////////
*/

if (col_no === ".col-2") {
    document.getElementById("dd_grid_width").value="1";
    document.querySelector("#dd_grid_width").addEventListener("change", doGridWidth);
}
else if (col_no === ".col-3" || col_no === ".col-4" ) {
    document.getElementById("dd_grid_width").value="0";
    document.querySelector("#dd_grid_width").addEventListener("change", doGridWidth);
}


function doGridWidth(){

    let opt = document.querySelector("#dd_grid_width").value;
    
    if (opt==="0") {
        const el = document.querySelector('.container-flex');
        console.log("Grid Width to: 100%");
        el.classList.remove("container-narrow");
    }

    else if (opt==="1") {
        const el = document.querySelector('.container-flex');
        console.log("Grid Width to: 85%");
        el.classList.add("container-narrow");
    }
}

/*
//////////////// COLUMN CONTENT ///////////////
*/

    document.querySelector("#dd_text").addEventListener("change", doText);
    document.querySelector("#dd_h3").addEventListener("change", doH3);
    document.querySelector("#dd_buttons").addEventListener("change", doButtons);
    document.querySelector("#dd_buttons_style").addEventListener("change", doButtonsStyle);


    function doText() {
        let opt = document.querySelector("#dd_text").value;
        // remove
        if (opt==="0") {
            // console.log("do remove text, it said")
            removeText();
        }
        
        else if (opt==="1") {
            removeText();
            // Test for figures AND h3 column headings
            if ( (document.querySelector(col_no+" figure")) && (document.querySelector(col_no+" h3")) ) {
                // console.log("there are figures AND h3 column headings")
                for (i = 1; i <= col_count; i++) {
                    const el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                    el_h3.insertAdjacentHTML("afterend", content_paras);
                }
            }
            
            // Test for figures (images or icons)
            else if (document.querySelector(col_no+" figure")) {
                console.log("there are figures")
                for (i = 1; i <= col_count; i++) {
                    const el_pic = document.querySelector(col_no+":nth-child("+i+") figure");
                    el_pic.insertAdjacentHTML("afterend", content_paras);
                }
            }

            // Test for h3 column headings
            else if (document.querySelector(col_no+" h3")) {
                console.log("there are h3 column headings")
                for (i = 1; i <= col_count; i++) {
                    const el_pic = document.querySelector(col_no+":nth-child("+i+") h3");
                    el_pic.insertAdjacentHTML("afterend", content_paras);
                }
            }

            // No pics, icons, h3 here
            else {
                console.log("no pics, no icons: one");
                for (i = 1; i <= col_count; i++) {
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
                for (i = 1; i <= col_count; i++) {
                    const el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                    el_h3.insertAdjacentHTML("afterend", content_list);
                }
            }
            
            // Test for figures (images or icons)
            else if (document.querySelector(col_no+" figure")) {
                console.log("there are figures")
                for (i = 1; i <= col_count; i++) {
                    const el_pic = document.querySelector(col_no+":nth-child("+i+") figure");
                    el_pic.insertAdjacentHTML("afterend", content_list);
                }
            }

            // Test for h3 column headings
            else if (document.querySelector(col_no+" h3")) {
                console.log("there are h3 column headings")
                for (i = 1; i <= col_count; i++) {
                    const el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                    el_h3.insertAdjacentHTML("afterend", content_list);
                }
            }

            // No pics, icons, h3 headings
            else {
                console.log("no pics, no icons: two");
                for (i = 1; i <= col_count; i++) {
                    const col_content = document.querySelector(col_no+":nth-child("+i+")");
                    col_content.innerHTML = content_list;
                }
            }
        }

        else if (opt==="3") {
            removeText();
            // Test for figures AND h3 column headings
            if ( (document.querySelector(col_no+" figure")) && (document.querySelector(col_no+" h3")) ) {
                console.log("there are figures AND h3 column headings")
                for (i = 1; i <= col_count; i++) {
                    const el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                    el_h3.insertAdjacentHTML("afterend", content_list_fa);
                }
            }

            // Test for figures (images or icons) 
            else if (document.querySelector(col_no+" figure")) {
                console.log("there are figures")
                for (i = 1; i <= col_count; i++) {
                    const el_pic = document.querySelector(col_no+":nth-child("+i+") figure");
                    el_pic.insertAdjacentHTML("afterend", content_list_fa);
                }
            }

            // Test for h3 column headings
            else if (document.querySelector(col_no+" h3")) {
                console.log("there are h3 column headings")
                for (i = 1; i <= col_count; i++) {
                    const el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                    el_h3.insertAdjacentHTML("afterend", content_list_fa);
                }
            }

            // No pics, icons, h3 column headings
            else {
                console.log("no pics, no icons: three");
                for (i = 1; i <= col_count; i++) {
                    const col_content = document.querySelector(""+col_no+":nth-child("+i+")");
                    col_content.innerHTML = content_list_fa;
                }
            }
        }

        else if (opt==="4") {
            removeText();
            // Test for figures AND h3 column headings
            if ( (document.querySelector(col_no+" figure")) && (document.querySelector(col_no+" h3")) ) {
                console.log("there are figures AND h3 column headings")
                for (i = 1; i <= col_count; i++) {
                    const el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                    el_h3.insertAdjacentHTML("afterend", content_list_la);
                }
            }
            // Test for figures (images or icons)
            else if (document.querySelector(col_no+" figure")) {
                console.log("there are figures")
                for (i = 1; i <= col_count; i++) {
                    const el_pic = document.querySelector(col_no+":nth-child("+i+") figure");
                    el_pic.insertAdjacentHTML("afterend", content_list_la);
                }
            }

            // Test for h3 column headings
            else if (document.querySelector(col_no+" h3")) {
                console.log("there are h3 column headings")
                for (i = 1; i <= col_count; i++) {
                    const el_h3 = document.querySelector(col_no+":nth-child("+i+") h3");
                    el_h3.insertAdjacentHTML("afterend", content_list_la);
                }
            }

            // No pics, icons, h3 column headings
            else {
                console.log("no pics, no icons: four");
                for (i = 1; i <= col_count; i++) {
                    const col_content = document.querySelector(col_no+":nth-child("+i+")");
                    col_content.innerHTML = content_list_la;
                }
            }
        }
    }

    function removeText() {
        const el_para = document.querySelectorAll("#HTML-Content "+col_no+" p");
        for (var i = 0 ; i < el_para.length ; i++) {
          el_para[i].remove();
        }
        const el_bullet = document.querySelectorAll("#HTML-Content "+col_no+" li");
        for (var i = 0 ; i < el_bullet.length ; i++) {
            el_bullet[i].remove();
        }
        const el_list = document.querySelectorAll("#HTML-Content "+col_no+" li");
        for (var i = 0 ; i < el_list.length ; i++) {
            el_list[i].remove();
        }
    }

     /*
    //////////////// COLUMN SUB-HEADINGS ////////////////////
    */
   
    function doH3() {
        let opt = document.querySelector("#dd_h3").value;
        // remove
        if (opt==="0") {
            removeH3();
        }
        
        else if (opt==="1") {
            removeH3();
            // Test for figures (images or icons)
            if (document.querySelector(col_no+" figure")) {
                console.log("h3: there are figures")
                for (i = 1; i <= col_count; i++) {
                    const el_pics = document.querySelector(col_no+":nth-child("+i+") figure");
                    el_pics.insertAdjacentHTML("afterend", content_h3);
                }
            }

            // Test for paragraphs
            else if (document.querySelector(col_no+" p")) {
                console.log("h3: there are paragraphs")
                for (i = 1; i <= col_count; i++) {
                    const el_paras = document.querySelector(col_no+":nth-child("+i+") p");
                    el_paras.insertAdjacentHTML("beforebegin", content_h3);
               }
            }

            // Test for lists
            else if (document.querySelector(col_no+" ul")) {
                console.log("h3: there are lists")
                for (i = 1; i <= col_count; i++) {
                    const el_ul = document.querySelector(col_no+":nth-child("+i+") ul");
                    el_ul.insertAdjacentHTML("beforebegin", content_h3);
               }
            }

            // No pics, icons, paras, lists
            else {
                console.log("no pics, no icons: h3");
                for (i = 1; i <= col_count; i++) {
                    const col_content = document.querySelector(""+col_no+":nth-child("+i+")");
                    col_content.innerHTML = content_h3;
                }
            }
        }

    }

    function removeH3() {
        console.log("remove h3");
        const parentNode = document.querySelector("#HTML-Content");
        var element_h3 = Array.prototype.slice.call(document.getElementsByTagName("h3"),0); 
        for (var index = 0, len = element_h3.length; index < len; index++) {
            element_h3[index].parentNode.removeChild(element_h3[index]);
        }
    }

    /*
    //////////////// FAUX BUTTONS ////////////////////
    */

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
            for (i = 1; i <= col_count; i++) {
                const el_cols = document.querySelector(col_no+":nth-child("+i+")");
                const el_btn = document.createElement('a');
                el_btn.setAttribute("href", "#");
                el_btn.setAttribute("class", "btn-solid");
                const el_icon = document.createElement('i');
                el_icon.setAttribute("class", "fas fa-shopping-cart");
                el_btn.append(el_icon);
                const btn_text = "Order Now";
                el_icon.insertAdjacentHTML('afterend', btn_text);;
                el_cols.append(el_btn);
            }
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=false;
        }

        // ghost
        else if (opt==="2") {
            removeButtons();
            for (i = 1; i <= col_count; i++) {
                const el_cols = document.querySelector(col_no+":nth-child("+i+")");
                const el_btn = document.createElement('a');
                el_btn.setAttribute("href", "#");
                el_btn.setAttribute("class", "btn-ghost");
                const el_icon = document.createElement('i');
                el_icon.setAttribute("class", "fas fa-shopping-cart");
                el_btn.append(el_icon);
                const btn_text = "Order Now";
                el_icon.insertAdjacentHTML('afterend', btn_text);;
                el_cols.append(el_btn);
                
            }
            document.getElementById("dd_buttons_style").value="0";
            document.getElementById("dd_buttons_style").disabled=false;
        }
    }

    function removeButtons() {
        console.log("remove");
        const parentNode = document.querySelector("#HTML-Content");
        var element = Array.prototype.slice.call(document.getElementsByTagName("a"),0); 
        for (var index = 0, len = element.length; index < len; index++) {
            element[index].parentNode.removeChild(element[index]);
        }
        document.getElementById("dd_buttons_style").disabled=true;
        document.getElementById("dd_buttons_style").value="0";
    }

    function doButtonsStyle() {
        let opt = document.querySelector("#dd_buttons_style").value;
        // remove
        if (opt==="0") {
            removeButtonsStyle();
        }
        // soft
        else if (opt==="1") {
            removeButtonsStyle();
            for (i = 1; i <= col_count; i++) {
                const el_btn = document.querySelector(col_no+":nth-child("+i+") a");
                el_btn.classList.add("btn-soft");
            }
        }

        // rounded
        else if (opt==="2") {
            removeButtonsStyle();
            for (i = 1; i <= col_count; i++) {
                const el_btn = document.querySelector(col_no+":nth-child("+i+") a");
                el_btn.classList.add("btn-rounded");
            } 
        }
    }

    function removeButtonsStyle() {
        for (i = 1; i <= col_count; i++) {
            const el_btn = document.querySelector(col_no+":nth-child("+i+") a");
            el_btn.classList.remove("btn-soft");
            el_btn.classList.remove("btn-rounded");
        }
    }

/*
//////////////// COLUMN PROPERTIES ///////////////
*/

if (col_no != ".col-0") {
    document.querySelector("#dd_col_shadows").addEventListener("change", doColShadows);
}

function doColShadows() {
    let opt = document.querySelector("#dd_col_shadows").value;

    if (opt==="0") {
        for (i = 1; i <= col_count; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i);
            removeColShadows();
        }
    }
    // Faint Shadows
    else if (opt==="1") {
        removeColShadows();
        for (i = 1; i <= col_count; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i);
            el_col.classList.add("col-padding");
            el_col.classList.add("drop-shadow-faint");
        }
        document.getElementById("dd_col_corners").disabled=false;
        document.getElementById("dd_col_corners").value="0";
        document.getElementById("dd_col_borders").disabled=true; 
    }

    // Heavy Shadows
    else if (opt==="2") {
        removeColShadows();
        for (i = 1; i <= col_count; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i);
            el_col.classList.add("col-padding");
            el_col.classList.add("drop-shadow-heavy");
        }
        document.getElementById("dd_col_corners").disabled=false; 
        document.getElementById("dd_col_corners").value="0";
        document.getElementById("dd_col_borders").disabled=true; 
    }

    // Solid
    else if (opt==="3") {
        removeColShadows();
        for (i = 1; i <= col_count; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i);
            el_col.classList.add("col-padding");
            el_col.classList.add("drop-shadow-solid"); 
        }
        document.getElementById("dd_col_corners").disabled=true; 
        document.getElementById("dd_col_corners").value="0";
        document.getElementById("dd_col_borders").disabled=true;
    }
}

function removeColShadows() {
    for (i = 1; i <= col_count; i++) {
        const el_col = document.querySelector(col_no+":nth-child("+i);
        el_col.classList.remove("drop-shadow-faint");
        el_col.classList.remove("drop-shadow-heavy");
        el_col.classList.remove("drop-shadow-solid");
        el_col.classList.remove("col-padding");
    }
    document.getElementById("dd_col_corners").value="0";
    document.getElementById("dd_col_corners").disabled=true; 
    document.getElementById("dd_col_borders").value="0";
    document.getElementById("dd_col_borders").disabled=false;
}

if (col_no != ".col-0") {
    document.querySelector("#dd_col_borders").addEventListener("change", doColBorders);
}

function doColBorders() {
    let opt = document.querySelector("#dd_col_borders").value;

    if (opt==="0") {
        for (i = 1; i <= col_count; i++) {
            removeColBorders();
        }
    }
    // Thin
    else if (opt==="1") {
        removeColBorders();
        for (i = 1; i <= col_count; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i);
            el_col.classList.add("col-padding");
            console.log("thin border");
            el_col.classList.add("border-thin"); 
        }
        document.getElementById("dd_col_corners").disabled=false;
        document.getElementById("dd_col_shadows").value="0";
        document.getElementById("dd_col_shadows").disabled=true;
    }
    // Thick
    else if (opt==="2") {
        for (i = 1; i <= col_count; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i);
            el_col.classList.add("col-padding");
            el_col.classList.add("border-thick");
        }
        document.getElementById("dd_col_corners").disabled=false;
        document.getElementById("dd_col_shadows").value="0";
        document.getElementById("dd_col_shadows").disabled=true; 
    }

    function removeColBorders() {
        for (i = 1; i <= col_count; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i);
            el_col.classList.remove("border-thin");
            el_col.classList.remove("border-thick");
            el_col.classList.remove("col-padding");
        }
        document.getElementById("dd_col_borders").disabled=false;
        document.getElementById("dd_col_shadows").value="0";
        document.getElementById("dd_col_shadows").disabled=false; 
        document.getElementById("dd_col_corners").disabled=true;
        document.getElementById("dd_col_corners").value="0";
    }
}

if (col_no != ".col-0") {
    document.querySelector("#dd_col_corners").addEventListener("change", doColCorners);
}

function doColCorners() {
    let opt = document.querySelector("#dd_col_corners").value;

    if (opt==="0") {
        for (i = 1; i <= col_count; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i);
            el_col.classList.add("col-padding");
            el_col.classList.remove("corner-soft");
        }
    }

    else if (opt==="1") {
        for (i = 1; i <= col_count; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i);
            el_col.classList.add("corner-soft");
            el_col.classList.add("col-padding");
        }
    }
}

if (col_no != ".col-0") {
    document.querySelector("#dd_col_align").addEventListener("change", doColAlign);
}

function doColAlign() {

    let opt = document.querySelector("#dd_col_align").value;

    if (opt==="0") {
        for (i = 1; i <= col_count; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i);
            el_col.classList.remove("text-center");
        }
    }

    else if (opt==="1") {
        for (i = 1; i <= col_count; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i);
            el_col.classList.add("text-center");
        }
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
    }

    else if (selectedValue==="pictures") {
        removeVisual();
        resetVisualEffects();
        for (i = 1; i <= col_count; i++) {
            const col_content = document.querySelector(col_no+":nth-child("+i+")");
            col_content.innerHTML = picArray[i] + col_content.innerHTML; 
            console.log( picArray[i]);     
        }
        document.getElementById("dd_image_corners").disabled=false;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=false;
    }

    else if (selectedValue==="transparent") {
        removeVisual();
        resetVisualEffects();
        for (i = 1; i <= col_count; i++) {
            const col_content = document.querySelector(col_no+":nth-child("+i+")");
            col_content.innerHTML = transArray[i] + col_content.innerHTML;                
        }
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=true;
    }

    else if (selectedValue==="illustrations") {
        removeVisual();
        
        for (i = 1; i <= col_count; i++) {
            const col_content = document.querySelector(col_no+":nth-child("+i+")");
            col_content.innerHTML = illusArray[i] + col_content.innerHTML;                
        }
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=true;
    }

    else if (selectedValue==="icons-fa") {
        removeVisual();
        resetVisualEffects();
        for (i = 1; i <= col_count; i++) {
            const col_content = document.querySelector(col_no+":nth-child("+i+")");
            col_content.innerHTML = iconLFArray[i] + col_content.innerHTML;                
        }
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=true;
        document.getElementById("dd_image_borders").disabled=true;
    }

    else if (selectedValue==="icons-la") {
        removeVisual(); 
        resetVisualEffects();
        for (i = 1; i <= col_count; i++) {
            const col_content = document.querySelector(col_no+":nth-child("+i+")");
            col_content.innerHTML = iconLAArray[i] + col_content.innerHTML;                
        }
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=true;
        document.getElementById("dd_image_borders").disabled=true;
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
}

/*
//////////////// VISUAL PROPERTIES ///////////////
*/

document.querySelector("#dd_image_corners").addEventListener("change", doImageCorners);

function doImageCorners() {
    let opt = document.querySelector("#dd_image_corners").value;

    if (opt==="0") {
        for (i = 1; i <= col_count; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.remove("corner-soft");
        }
    }

    else if (opt==="1") {
        for (i = 1; i <= col_count; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.add("corner-soft");
        }
    }
}

document.querySelector("#dd_image_shadows").addEventListener("change", doImageShadows);

function doImageShadows() {
    let opt = document.querySelector("#dd_image_shadows").value;

    if (opt==="0") {
        for (i = 1; i <= col_count; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            removeImageShadows();
        }
    }

    else if (opt==="1") {
        removeImageShadows();
        for (i = 1; i <= col_count; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.add("drop-shadow-faint");
        }
    }

    else if (opt==="2") {
        removeImageShadows();
        for (i = 1; i <= col_count; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.add("drop-shadow-heavy");
        }
    }
    else if (opt==="3") {
        removeImageShadows();
        for (i = 1; i <= col_count; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.add("drop-shadow-solid");
        }
    }
}

function removeImageShadows() {
    for (i = 1; i <= col_count; i++) {
        const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
        el_fig.classList.remove("drop-shadow-faint");
        el_fig.classList.remove("drop-shadow-heavy");
        el_fig.classList.remove("drop-shadow-solid");
    }
}

document.querySelector("#dd_image_borders").addEventListener("change", doImageBorders);

function doImageBorders() {
    let opt = document.querySelector("#dd_image_borders").value;

    if (opt==="0") {
        for (i = 1; i <= col_count; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.remove("border-thin");
            el_fig.classList.remove("border-thick");
        }
    }

    else if (opt==="1") {
        for (i = 1; i <= col_count; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.add("border-thin");
            el_fig.classList.remove("border-thick");
        }
    }

    else if (opt==="2") {
        for (i = 1; i <= col_count; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.remove("border-thin");
            el_fig.classList.add("border-thick");
        }
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

/*
//////////////// WEB PAGE THEMES  ///////////////
*/

document.getElementById("theme-dark").checked=true;

document.querySelector("#theme-light").addEventListener("click", darkTheme);
document.querySelector("#theme-dark").addEventListener("click", lightTheme);

function darkTheme() {
    const firstChild = document.querySelector("#HTML-Content").firstElementChild;
    firstChild.classList.remove("theme-light");
    firstChild.classList.add("theme-dark");
}

function lightTheme() {
    const firstChild = document.querySelector("#HTML-Content").firstElementChild;
    firstChild.classList.remove("theme-dark");
    firstChild.classList.add("theme-light");
}

/*
//////////////// ASSETS  ///////////////
*/

let picArray = [];
picArray[assetsArray[0]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/landscape\/design.jpg\" alt=\"Design\"><\/figure>";
picArray[assetsArray[1]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/landscape\/food.jpg\" alt=\"Food\"><\/figure>";
picArray[assetsArray[2]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/landscape\/yellow-van.jpg\" alt=\"Yellow van\"><\/figure>";
picArray[assetsArray[3]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/landscape\/woman-pink.jpg\" alt=\"Woman pink\"><\/figure>";
picArray[assetsArray[4]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/landscape\/laptop-window.jpg\" alt=\"Laptop window\"><\/figure>";
picArray[assetsArray[5]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/landscape\/gap-of-dunloe.jpg\" alt=\"Gap of Dunloe\"><\/figure>";
picArray[assetsArray[6]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/landscape\/shop.jpg\" alt=\"Shop\"><\/figure>"; 
picArray[assetsArray[7]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/landscape\/kitchen.jpg\" alt=\"Kitchen\"><\/figure>";

let transArray = [];
transArray[assetsArray[0]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/transparent\/web-dev.png\" alt=\"Man laptop\"><\/figure>";
transArray[assetsArray[1]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/transparent\/woman-smiling.png\" alt=\"Woman smiling\"><\/figure>";
transArray[assetsArray[2]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/transparent\/woman-spectacles.png\" alt=\"Woman Spectacles\"><\/figure>";
transArray[assetsArray[3]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/transparent\/man-coffee.png\" alt=\"Man Coffee\"><\/figure>";
transArray[assetsArray[4]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/transparent\/woman-business.png\" alt=\"Woman business\"><\/figure>";
transArray[assetsArray[5]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/transparent\/woman-planning.png\" alt=\"Woman working\"><\/figure>";
transArray[assetsArray[6]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/transparent\/woman-smiling.png\" alt=\"Woman Smiling\"><\/figure>";
transArray[assetsArray[7]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/transparent\/woman-looking-right.png\" alt=\"Woman looking right\"><\/figure>";

let illusArray = [];  
illusArray[assetsArray[0]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/drawings\/building.png\" alt=\"Building\"><\/figure>";
illusArray[assetsArray[1]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/drawings\/resume.png\" alt=\"Resume\"><\/figure>";
illusArray[assetsArray[2]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/drawings\/gift.png\" alt=\"Gift\"><\/figure>";
illusArray[assetsArray[3]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/drawings\/work-chat.png\" alt=\"Work chat\"><\/figure>";
illusArray[assetsArray[4]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/drawings\/travel.png\" alt=\"Travel\"><\/figure>";
illusArray[assetsArray[5]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/drawings\/metrics.png\" alt=\"Metrics\"><\/figure>"; 
illusArray[assetsArray[6]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/drawings\/landscape.png\" alt=\"Landscape\"><\/figure>";
illusArray[assetsArray[7]]="\n\t\t\t\t\t<figure><img src=\"https:\/\/munnelly.com/lunadoge\/\assets\/img\/drawings\/chat-bot.png\" alt=\"Chat bot\"><\/figure>";   

let iconLFArray = [];             
iconLFArray[assetsArray[0]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"fas fa-user-friends\"><\/i><\/figure>";
iconLFArray[assetsArray[1]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"far fa-comments\"><\/i><\/figure>";
iconLFArray[assetsArray[2]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"far fa-lightbulb\"><\/i><\/figure>";
iconLFArray[assetsArray[3]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"fas fa-globe\"><\/i><\/figure>";
iconLFArray[assetsArray[4]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"fas fa-rocket\"><\/i><\/figure>";
iconLFArray[assetsArray[5]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"fas fa-shopping-cart\"><\/i><\/figure>";
iconLFArray[assetsArray[6]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"fas fa-briefcase\"><\/i><\/figure>";   
iconLFArray[assetsArray[7]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"fas fa-book-reader\"><\/i><\/figure>";  

let iconLAArray = [];             
iconLAArray[assetsArray[0]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"las la-truck\"><\/i><\/figure>";
iconLAArray[assetsArray[1]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"las la-edit\"><\/i><\/figure>";
iconLAArray[assetsArray[2]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"las la-university\"><\/i><\/figure>";
iconLAArray[assetsArray[3]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"las la-globe\"><\/i><\/figure>";
iconLAArray[assetsArray[4]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"las la-rocket\"><\/i><\/figure>";
iconLAArray[assetsArray[5]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"las la-shopping-cart\"><\/i><\/figure>";   
iconLAArray[assetsArray[6]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"las la-shopping-cart\"><\/i><\/figure>";
iconLAArray[assetsArray[7]]="\n\t\t\t\t\t<figure class=\"icon\"><i class=\"las la-book-reader\"><\/i><\/figure>"; 