// *** Global variables
// Number of dropdown menus on Lunevery navbar
const uiUIenusLength = document.querySelectorAll("#ui-menus li").length;
// Used by color picker to identify section for copying to user's HTML file.
// values with be "section-selector-1", ... "section-selector-6".
let section_class ="section-selector-1"; 

// Used by color picker. Either 'theme-light' or 'theme-dark'.
let section_theme = "section.theme-light."+section_class;

// GLOBAL VARIABLES

// Class names of columns in grid: .col-2, .col-3 or .col-4

if ( (document.querySelector('.col-2')) || (document.querySelector('.col-3')) || (document.querySelector('.col-4')) ) {
    if (document.querySelector('.col-2')) { col_no = ".col-2" }
    else if (document.querySelector('.col-3')) { col_no = ".col-3" }
    else if (document.querySelector('.col-4')) { col_no = ".col-4" }

    // Number column blocks to loop through
    let col_count = document.querySelectorAll(col_no).length;
    console.log("col_no: "+col_no);
    console.log("col_count: "+col_count);
}

/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// Hide all menus - except currently selected one.
let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    for (let i = 1; i <= uiUIenusLength; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    // Get current menu id
    const strMenu = event.currentTarget.id.toString();
    const id = strMenu.charAt(strMenu.length-1);
    const elItem_show = document.querySelector("#content-"+id);
    // Unhide current menu
    elItem_show.classList.remove("dropdown-hidden"); 
    // Hide color picker

    if (document.querySelector('.col-3') || document.querySelector('.col-4') )  {
        if (id==="2") {
            window.scrollTo(0,0);
        }
        else if (id==="3") {
            let el = document.querySelector(col_no);
            el.scrollIntoView(true);
        }
        else if (id==="4") {
            window.scrollTo(0,document.body.scrollHeight);
        }
    }
    hideSidebar();
}));

// Hide all menus when user clicks on page.
document.querySelector("#HTML-Content").addEventListener("click", hideMenus);


function hideMenus() {
    for (let i = 1; i <= uiUIenusLength; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    hideSidebar();
}

// Hide menus when users presses Esc key.
document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        hideMenus()
    }
}

// Hide dialog box when user clicks X icon
for (let i = 1; i <= uiUIenusLength; i++) {
    document.querySelector(`#content-${[i]} .dialog-box-header span.close-x`).addEventListener("click", hideDialogBox);
}

function hideDialogBox() {
    for (let i = 1; i <= uiUIenusLength; i++) {
        document.querySelector(`#content-${[i]}`).classList.add("dropdown-hidden"); 
    }
    hideSidebar();
    disableTransColCode();
} 

/* Show/hide color picker */
function showSidebar() {
    document.querySelector("#myModal").classList.add("display-sidebar");
    document.querySelector("#myModal").classList.remove("hide-sidebar");
}

function hideSidebar() {
    document.querySelector("#myModal").classList.add("hide-sidebar");
    document.querySelector("#myModal").classList.remove("show-sidebar");
    document.querySelector("#myModal").scrollTo(0, 0); // scrolls to top of sidebar
}

/* ================ DIALOG BOXES =================== */

// Make dialog boxes element draggable:

for (let i = 1; i <= uiUIenusLength; i++) {
    dragElement(document.getElementById("content-"+[i]));
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

/*
//////////////// SECTION: THEME  ///////////////
*/

document.querySelector("#switch_section_theme").addEventListener("change", doSectionTheme);

function doSectionTheme() {
    hideMenus();
    const rbs = document.querySelectorAll("input[name='switch_section_light_dark']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    // Remove all styles
    var hs = document.querySelectorAll('style');
    for (var i=0, max = hs.length; i < max; i++) {
        hs[i].parentNode.removeChild(hs[i]);
    }

    if (selectedValue==="light") {
        document.querySelector("section").classList.remove("theme-dark"); 
        document.querySelector("section").classList.add("theme-light"); 
    }
    else if (selectedValue==="dark") {
        document.querySelector("section").classList.remove("theme-light"); 
        document.querySelector("section").classList.add("theme-dark"); 
    }

    // Check for outlines
    if (document.querySelector("#cb_outlines").checked) {
        const css_checked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = document.head || document.getElementsByTagName('head')[0],
        style_checked = document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(document.createTextNode(css_checked));
    }
    disableCSS();
}

/*
//////////////// SECTION: OUTLINES  ///////////////
*/

document.querySelector("#cb_outlines").addEventListener("change", toggleOutlines);

function toggleOutlines() {
    if (document.querySelector("#cb_outlines").checked) {
        const css_checked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = document.head || document.getElementsByTagName('head')[0],
        style_checked = document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(document.createTextNode(css_checked));
    }

    else {
        const css_unchecked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px transparent }";
        head_unchecked = document.head || document.getElementsByTagName('head')[0],
        style_unchecked = document.createElement('style');
        head_unchecked.appendChild(style_unchecked);
        style_unchecked.type = 'text/css';
        style_unchecked.appendChild(document.createTextNode(css_unchecked));
    }
}    

/*
//////////////// SECTION: CLASS NAMES ///////////////
*/

document.querySelector("#dd_className").addEventListener("change", doClassName);

function doClassName() {
    removeClassNames();
    let opt = 1 + parseInt(document.querySelector("#dd_className").value);
    section_class = "section-selector-"+opt;
    document.querySelector("section").classList.add("section-selector-"+opt);
}

function removeClassNames() {
    const el_section = document.querySelector("section");
    for (let i = 1; i <= uiUIenusLength; i++) {
        el_section.classList.remove("section-selector-"+[i]);
    }
}

/*
//////////////// GRID-0 AND GRID-2-SPLIT: SECTION WIDTH ///////////////
*/

document.querySelector("#dd_text_width").addEventListener("change", doWidthDesktopSection);

function doWidthDesktopSection() {

    let opt = document.querySelector("#dd_text_width").value;
    deleteSectionWidth();

    if (opt==="1") {
        document.querySelector("section").classList.add("section-width-960px");
    }
    else if (opt==="2") {
        document.querySelector("section").classList.add("section-width-1024px");
    }
    else if (opt==="3") {
        document.querySelector("section").classList.add("section-width-1140px");
    }
    else if (opt==="4") {
        document.querySelector("section").classList.add("section-width-1320px");
    }
    else if (opt==="5") {
        document.querySelector("section").classList.add("section-width-1536px");
    }
}

function deleteSectionWidth() {
    document.querySelector("section").classList.remove("section-width-960px");
    document.querySelector("section").classList.remove("section-width-1024px");
    document.querySelector("section").classList.remove("section-width-1140px");
    document.querySelector("section").classList.remove("section-width-1320px");
    document.querySelector("section").classList.remove("section-width-1536px");                
}

/*
//////////////// GRID-2, GRID-3 and GRID-4: UPPER COLUMN WIDTH ///////////////
*/
if (document.querySelector("#dd_upper_block_width")) {
    document.querySelector("#dd_upper_block_width").addEventListener("change", doUpperBlockWidth);
}

function doUpperBlockWidth() {
    let opt = document.querySelector("#dd_upper_block_width").value;

    if (opt==="0") {
        document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-960px");
        document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-1140px");
        document.querySelector("#HTML-Content section .col-1").classList.add("col-1-width-800px");

    }

    else if (opt==="1") {
        document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-800px");
        document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-1140px");
        document.querySelector("#HTML-Content section .col-1").classList.add("col-1-width-960px");
    }

    else if (opt==="2") {
        document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-800px");
        document.querySelector("#HTML-Content section .col-1").classList.remove("col-1-width-960px");
        document.querySelector("#HTML-Content section .col-1").classList.add("col-1-width-1140px");
    }    
}

/*
//////////////// GRID-0: ALIGN FOR ENTIRE SECTION ///////////////
*/

if (document.querySelector("#switch-horz-align-desktop")) {
    document.querySelector("#switch-horz-align-desktop").addEventListener("change", doAlignDesktopSection);
}

function doAlignDesktopSection() {
    const rbs = document.querySelectorAll("input[name='horz-align-desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        document.querySelector("#HTML-Content section").classList.remove("text-center-desktop");
        document.getElementById("dd_align_desktop_btns").disabled=false;
        document.getElementById("dd_align_desktop_btns").value="0";

    }
    else if (selectedValue==="center") {
        document.querySelector("#HTML-Content section").classList.add("text-center-desktop"); 
        document.getElementById("dd_align_desktop_btns").value="1";
        document.getElementById("dd_align_desktop_btns").disabled=true;
    }
}

if (document.querySelector("#switch-horz-align-mobile")) {
    document.querySelector("#switch-horz-align-mobile").addEventListener("change", doAlignMobileSection);
}

function doAlignMobileSection() {

    const rbs = document.querySelectorAll("input[name='horz-align-mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        document.querySelector("section").classList.remove("text-center-mobile");
        document.getElementById("dd_align_desktop_btns").disabled=false;
        document.getElementById("dd_align_desktop_btns").value="0";

    }
    else if (selectedValue==="center") {
        document.querySelector("section").classList.add("text-center-mobile"); 
        document.getElementById("dd_align_desktop_btns").value="1";
        document.getElementById("dd_align_desktop_btns").disabled=true;
    }
}

/*
//////////////// GRID-0, GRID-2, GRID-3 and GRID-4: UPPER COLUMN ALIGN ///////////////
*/

if (document.querySelector("#switch-upper-block-align")) {
    document.querySelector("#switch-upper-block-align").addEventListener("change", doUpperBlockAlign);
}

function doUpperBlockAlign() {
    const rbs = document.querySelectorAll("input[name='upper-block-align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        document.querySelector("section .col-1").classList.remove("text-center");
    }
    else if (selectedValue==="center") {
        document.querySelector("section .col-1").classList.add("text-center"); 
    }
}



/*
//////////////// ALL GRIDS: UPPER CATEGORY LABEL ABOVE H2 ///////////////
*/

document.querySelector("#cb_upperLabelOn").addEventListener("change", doUpperLabel);

function doUpperLabel() {

    // Single column
    if (document.querySelector("section > h2")) {
        if (!document.getElementById("cb_upperLabelOn").checked) {
            removeUpperLabel();
        }
        else {
            document.querySelector("section > h2").insertAdjacentHTML("beforebegin", "<div class=\"container-upper-label\"><span>10% off all week<\/span><\/div>\n\n\t");
            document.getElementById("btn_upper_label").disabled=false;
        }
    }

    // 2-Column split
    else if (document.querySelector("section.cols-2-split")) {
        if (!document.getElementById("cb_upperLabelOn").checked) {
            removeUpperLabel();
        }
        else {
            removeUpperLabel();
            document.querySelector(".cols-2-split .col-2 h2").insertAdjacentHTML("beforebegin", "<div class=\"container-upper-label\"><span>10% off all week<\/span><\/div>\n\n\t");
            document.getElementById("btn_upper_label").disabled=false;
        }
    }

    // 2, 3 or 4-Column
    else if (document.querySelector("section .col-1")) {
        if (!document.getElementById("cb_upperLabelOn").checked) {
            removeUpperLabel();
        }
        else {
            removeUpperLabel();
            const newUpperLabelDiv = document.createElement("div");
            const newUpperLabelSpan = document.createElement("span");
            newUpperLabelDiv.appendChild(newUpperLabelSpan);
            newUpperLabelDiv.classList.add("container-upper-label"); 
            document.querySelector("section .col-1").prepend(newUpperLabelDiv);
            document.querySelector("section .col-1 .container-upper-label span").innerText = "10% off all week";
            document.getElementById("btn_upper_label").disabled=false;
        }
    }
}

function removeUpperLabel() {
    if (document.querySelector('.container-upper-label')) {
    const upperLabel = document.querySelector('.container-upper-label');
        upperLabel.remove();
        document.querySelector('section').innerHTML = document.querySelector('section').innerHTML.replace("\t\n\n", "");
        document.getElementById("btn_upper_label").disabled=true;
    }
}


/*
//////////////// UPPER BLOCK GRID-3 AND GRID-4: MAIN HEADING H2 ///////////////
*/
if (document.querySelector("#cb_upperH2On")) {
    document.querySelector("#cb_upperH2On").addEventListener("change", doUpperH2);
}

function doUpperH2() {
    if (!document.getElementById("cb_upperH2On").checked) {
        removeUpperH2();
    }
    else {
        removeUpperH2();
        document.getElementById("btn_upper_head").disabled=false;
        const newH2 = document.createElement("h2");
        const newContent = document.createTextNode("Nice heading here");
        newH2.appendChild(newContent);
        const currentDiv = document.querySelector('.col-1');
        if (!document.querySelector('.container-upper-label')) {
            currentDiv.prepend(newH2);
        }
        else {
            document.querySelector(".container-upper-label").insertAdjacentHTML("afterend", "<h2>Nice heading here</h2>"); 
        }
    }
}

function removeUpperH2() {
    if (document.querySelector('.col-1 h2')) {
        document.getElementById("btn_upper_head").disabled=true;
        const elH2 = document.querySelector('.col-1 h2');
        elH2.remove();
    }
}

/*
//////////////// H3 SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_upperH3On").addEventListener("change", doUpperH3);

function doUpperH3() {

    // Single column
    if (document.querySelector("section > h2")) {
        if (!document.getElementById("cb_upperH3On").checked) {
            removeUpperH3();
        }
        else {
            removeUpperH3();
            // document.querySelector("label[for='cb_upperH3On']").style.color = "#fff";
            document.querySelector("section p").insertAdjacentHTML("afterend", assets_header_h3);
            document.getElementById("btn_subhead").disabled=false;
        }            
    }

    // 2-Column split
    else if (document.querySelector("section.cols-2-split")) {
        if (!document.getElementById("cb_upperH3On").checked) {
            removeUpperH3();
        }
        else {
            // document.querySelector("label[for='cb_upperH3On']").style.color = "#fff";
            if (!document.querySelector(".cols-2-split .col-2 h3")) {
                document.querySelector(".cols-2-split .col-2 > p:nth-of-type(1)").insertAdjacentHTML("afterend", assets_header_h3);
                document.getElementById("btn_subhead").disabled=false;
            }
            else {
                return
            }
        }
    }

    // 2, 3 or 4-Column
    else if (document.querySelector("section .col-1")) {
        if (!document.getElementById("cb_upperH3On").checked) {
            removeUpperH3();
        }
        else {
            removeUpperH3();
            const newSubHead = document.createElement("h3");
            const newContent = document.createTextNode("Leverage agile frameworks to provide a robust synopsis for high level overviews to foster collaborative thinking.");
            newSubHead.appendChild(newContent);
            const currentDiv = document.querySelector('.col-1');
            currentDiv.append(newSubHead);
            document.getElementById("btn_upper_subhead").disabled=false;
            // document.querySelector("label[for='cb_upperH3On']").style.color = "#fff";
        }
    }
}

function removeUpperH3() {
    // document.querySelector("label[for='cb_upperH3On']").style.color = "var(--gray-500)";
    if (document.querySelector("section > h3")) {
        document.querySelector("section > h3").remove();
        document.getElementById("btn_subhead").disabled=true;
    }

    else if (document.querySelector("section.cols-2-split")) {
        document.querySelector("section.cols-2-split .col-2 h3").remove();
        document.getElementById("btn_subhead").disabled=true;
    }
    else if (document.querySelector("section .col-1 h3")) {
        document.querySelector("section .col-1 h3").remove();
        document.getElementById("btn_upper_subhead").disabled=true;
    }
}

/*
//////////////// GRID-0: DECKHEAD / STANDFIRST ///////////////
*/

if (document.querySelector("#cb_standfirstOn")) {
    document.querySelector("#cb_standfirstOn").addEventListener("change", doStandFirst);
}

function doStandFirst() {
    if (!document.getElementById("cb_standfirstOn").checked) {
        // document.querySelector("label[for='cb_standfirstOn']").style.color = "var(--gray-500)";
        document.querySelector("section > p").classList.remove("standfirst");
    }
    else {
        document.querySelector("label[for='cb_standfirstOn']").style.color = "#fff";
        document.querySelector("section > p").classList.add("standfirst");
    }
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
    let HTML_Content = document.getElementById("HTML-Content").innerHTML;
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
    strCSS = strCSS.replace(/,section/g, "section");
    // strCSS = strCSS.replace(/..container/g, ".container");
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

