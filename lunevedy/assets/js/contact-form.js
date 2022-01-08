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
//////////////// FORM COLOURS ///////////////
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
                newStyle = ".container-contact-form { background-color: var("+color_code+") }\n";
                sub_string = ".container-contact-form { background-color";
                doUpdateArray(sub_string,newStyle)
            }

            if (btn_id === "btn_form") {
                newStyle = "#contact-form { background-color: var("+color_code+") }\n";
                sub_string = "#contact-form { background-color";
                doUpdateArray(sub_string,newStyle)
            }

            /* Section upper label */
            else if (btn_id === "btn_upper_label") {
                newStyle = "#contact-form .upper-label { color: var("+color_code+") }\n";
                sub_string = ".upper-label";
                doUpdateArray(sub_string,newStyle);
            }
                        
            /* Form heading */
            else if (btn_id === "btn_head") {
                newStyle = "#contact-form h2 { color: var("+color_code+") }\n." 
                sub_string = "h2";
                doUpdateArray(sub_string,newStyle);
            }

            /* Paragraph text */
            else if (btn_id === "btn_text") {
                newStyle = "#contact-form p { color: var("+color_code+") }\n" 
                sub_string = "p { color";
                doUpdateArray(sub_string,newStyle);
            }

            /* Hyperlink text colour: passive */
            else if (btn_id === "btn_passive_text") {
                newStyle = "#contact-form p a:link { color: var("+color_code+") }\n#contact-form p a:visited { color: var("+color_code+") }\n";
                sub_string = "#contact-form p a:link { color";
                doUpdateArray(sub_string,newStyle);
            }            

            /* Hyperlink text colour: active */
            else if (btn_id === "btn_active_text") {
                newStyle = "#contact-form p a:focus { color: var("+color_code+") }\n#contact-form p a:hover { color: var("+color_code+") }\n#contact-form p:active { color: var("+color_code+") }\n";
                sub_string = "#contact-form p a:focus { color";
                doUpdateArray(sub_string,newStyle);
           }

            /* Hyperlink background colour: passive */
            else if (btn_id === "btn_passive_bg") {
                newStyle = "#contact-form p a:link { background-color: var("+color_code+") }\n#contact-form p a:visited { background-color: var("+color_code+") }\n";
                sub_string = "#contact-form p a:link { background-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* Hyperlink background colour: active */
            else if (btn_id === "btn_active_bg") {
                newStyle = "#contact-form p a:focus { background-color: var("+color_code+") } \n#contact-form p a:hover { background-color: var("+color_code+") }\n#contact-form p a:active { background-color: var("+color_code+") }\n";
                sub_string = "#contact-form p a:focus { background-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* Form labels colour */
            else if (btn_id === "btn_field_label_colour") {
                newStyle = "#contact-form label { color: var("+color_code+") }\n";
                sub_string = "#contact-form label { color";
                doUpdateArray(sub_string,newStyle);
            }

            /* Form fields border colour */
            else if (btn_id === "btn_field_border_colour") {
                newStyle = "#contact-form [type=\"text\"] { border-color: var("+color_code+") }\n#contact-form [type=\"email\"] { border-color: var("+color_code+") }\n#contact-form textarea { border-color: var("+color_code+") }\n";
                sub_string = "#contact-form [type=\"text\"] { border-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* Form fields background_colour */
            else if (btn_id === "btn_field_bg_colour") {
                newStyle = "#contact-form [type=\"text\"] { background-color: var("+color_code+") }\n#contact-form [type=\"email\"] { background-color: var("+color_code+") }\n#contact-form textarea { background-color: var("+color_code+") }\n";
                sub_string = "#contact-form [type=\"text\"] { border-color";
                doUpdateArray(sub_string,newStyle);
            }            

            /* Form button text colour: passive */
            else if (btn_id === "btn_form_text_passive") {
                newStyle = "#contact-form #btn-submit { color: var("+color_code+") }\n";
                sub_string = "#contact-form #btn-submit { color";
                doUpdateArray(sub_string,newStyle);
            }
            /* Form button text colour: active */
           else if (btn_id === "btn_form_text_active") {
                newStyle = "#contact-form #btn-submit:focus { color: var("+color_code+") }\n#contact-form #btn-submit:hover { color: var("+color_code+") }\n";
                sub_string = "#contact-form #btn-submit:focus { color";
                doUpdateArray(sub_string,newStyle);
            } 
            /* Form button background colour: passive */
            else if (btn_id === "btn_form_passive_bg") {
                newStyle = "#contact-form #btn-submit { background-color: var("+color_code+") }\n";
                sub_string = "a.btn-primary:link { background-color";
                doUpdateArray(sub_string,newStyle);
            }
            /* Form button background colour: active */
            else if (btn_id === "btn_form_active_bg") {
                newStyle = "#contact-form #btn-submit:focus { background-color: var("+color_code+") }\n#contact-form #btn-submit:hover { background-color: var("+color_code+") }\n";
                sub_string = "#contact-form #btn-submit:focus { background-color";
                doUpdateArray(sub_string,newStyle);
            }
            /* Form button border colour: passive */
            else if (btn_id === "btn_form_passive_border") {
                newStyle = "#contact-form #btn-submit { border-color: var("+color_code+") }\n"; ;
                sub_string = "#contact-form #btn-submit { border-color";
                doUpdateArray(sub_string,newStyle);
            }

            /* Form button border colour: active */
            else if (btn_id === "btn_form_active_border") {
                newStyle = "#contact-form #btn-submit:focus { border-color: var("+color_code+") }\n#contact-form #btn-submit:hover { border-color: var("+color_code+") }\n"; 
                sub_string = "#contact-form #btn-submit:focus { border-color";
                doUpdateArray(sub_string,newStyle);
            }
            
            style = document.createElement('style');
            document.head.appendChild(style);
            style.appendChild(document.createTextNode(newStyle));
            document.getElementById("btn-copy-css").disabled=false;
            // console.log("Button ID: "+btn_id);
            console.log("newStyle: "+newStyle);
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
        const newUpperLabel = document.createElement("div");
        const newContent = document.createTextNode("Upper Label Text");
        newUpperLabel.appendChild(newContent);
        newUpperLabel.classList.add("upper-label"); 
        el_parent = document.querySelector("#contact-form .contact-form-upper");
        el_parent.prepend(newUpperLabel);
        document.getElementById("btn_upper_label").disabled=false;
    }
}

function removeUpperLabel() {
    if (document.querySelector('.upper-label')) {
        const upperLabel = document.querySelector('.upper-label');
        upperLabel.remove();
        document.getElementById("dd_upperLabel").value="0";
        document.getElementById("btn_upper_label").disabled=true;
    } 
}


/*
//////////////// TEXT: H2 SUB-HEADING ////////////////////
*/

document.querySelector("#dd_h2").addEventListener("change", doH2);

function doH2() {
    let opt = document.querySelector("#dd_h2").value;

    // remove
    if (opt==="1") {
        document.getElementById("btn_head").disabled=true;
        removeH2();
    }

    // add heading
    else if (opt==="0") {
        removeH2();
        document.getElementById("btn_head").disabled=false;
        const newH2 = document.createElement("h2");
        const newContent = document.createTextNode("Lorem Ipsum");
        newH2.appendChild(newContent);
        const currentDiv = document.querySelector('#contact-form .contact-form-upper');
        if (!document.querySelector('.upper-label')) {
            currentDiv.prepend(newH2);
        }
        else {
            document.querySelector(".upper-label").insertAdjacentHTML("afterend", "<h2>Lorem Ipsum</h2>"); 
        }
    }
}

function removeH2() {
    if (document.querySelector('#contact-form .contact-form-upper h2')) {
        document.getElementById("btn_head").disabled=true;
        const elH2 = document.querySelector('#contact-form .contact-form-upper h2');
        elH2.remove();
    }
}

/*
//////////////// TEXT: PARAGRAPH ////////////////////
*/

document.querySelector("#dd_para").addEventListener("change", doPara);

function doPara() {
    let opt = document.querySelector("#dd_para").value;

    if (opt==="0") {
        removePara();
        document.getElementById("btn_text").disabled=false;
        const newP = document.createElement("p");
        newP.innerHTML = "Vivamus malesuada, nibh a <a href=\"#\">tempor convallis<\/a>, enim urna bibendum enim, eu ultrices leo libero proin.";
        const currentDiv = document.querySelector('#contact-form .contact-form-upper');
        currentDiv.appendChild(newP);
        document.getElementById("btn_text").disabled=false;
    }
   
    else if (opt==="1") { 
        removePara();
    }    
}

function removePara() {
    if (document.querySelector("#contact-form .contact-form-upper p")) {
        const elPara = document.querySelector("#contact-form .contact-form-upper p");
        elPara.remove();
        document.getElementById("btn_text").disabled=true;
    }
}


/*
//////////////// UPER BLOCK: ALIGN ///////////////
*/

document.querySelector("#dd_section_align").addEventListener("change", doSectionAlign);

function doSectionAlign() {
    let opt = document.querySelector("#dd_section_align").value;
    const el_upperlabel = document.querySelector('section')

    if (opt==="0") {
        if (document.querySelector("#contact-form .contact-form-upper")) {
            const el_upper = document.querySelector('#contact-form .contact-form-upper')
            el_upper.classList.add("text-center");
        }
    }

    else if (opt==="1") {
        if (document.querySelector("#contact-form .contact-form-upper")) {
            const el_upper = document.querySelector('#contact-form .contact-form-upper')
            el_upper.classList.remove("text-center");
        }
    }
}

/*
//////////////// BUTTON: CORNER STYLE ////////////////////
*/

    document.querySelector("#dd_button_style").addEventListener("change", doButtonStyle);

    function doButtonStyle() {
        let opt = document.querySelector("#dd_button_style").value;
        // remove
        if (opt==="0") {
            removeButtonStyle();
        }
        // soft
        else if (opt==="1") {
            removeButtonStyle();
            const el_btn = document.querySelector("#btn-submit");
            el_btn.classList.add("btn-soft");
        }

        // rounded
        else if (opt==="2") {
            removeButtonStyle();
            const el_btn = document.querySelector("#btn-submit");
            el_btn.classList.add("btn-rounded");
        }
    }

    function removeButtonStyle() {
        const el_btn = document.querySelector("#btn-submit");
        el_btn.classList.remove("btn-soft");
        el_btn.classList.remove("btn-rounded");
    }

/*
//////////////// BUTTON: ICON POSITION ////////////////////
*/

document.querySelector("#dd_button_icon").addEventListener("change", swapButtonIcons);

function swapButtonIcons() {
    console.log("here here");
    let opt = document.querySelector("#dd_button_icon").value;
    console.log("Opt: "+opt);
    let el_btn;
    const icon_right ="<span>Send<\/span><i class=\"fas fa-arrow-circle-right\"><\/i>";
    const icon_left  ="<i class=\"fas fa-arrow-circle-right\"><\/i><span>Send<\/span>";

    // icon right
    if (opt==="0") {
        console.log("0");
        const el_btn = document.querySelector("#btn-submit");
        btn_content = el_btn.innerHTML;
        btn_content = btn_content.replace(icon_left,icon_right);
        el_btn.innerHTML = btn_content;
    }

    // icon left
    if (opt==="1") {
        console.log("1");
        const el_btn = document.querySelector("#btn-submit");
        btn_content = el_btn.innerHTML;
        btn_content = btn_content.replace(icon_right,icon_left);
        el_btn.innerHTML = btn_content;
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
    strCSS = strCSS.replace(/.#contact-form/g, "#contact-form");

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

