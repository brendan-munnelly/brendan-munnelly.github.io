// Number of dropdown menus on Lunevery navbar
let uiMenusLength = document.querySelectorAll("#ui-menus li").length;
// Used by color picker. Either 'theme-light' or 'theme-dark'.
section_class = sessionStorage.getItem('section-selector');
section_theme = sessionStorage.getItem('section-theme');
col_no = sessionStorage.getItem('col-no');
col_col_count = sessionStorage.getItem('col-count');

/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// Hide all menus - except currently selected one.
let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    for (let i = 1; i <= uiMenusLength; i++) {
        document.querySelector("#content-"+i).classList.add("dropdown-hidden");
    }
    // Get current menu id
    const strMenu = event.currentTarget.id.toString();
    const menuId = strMenu.charAt(strMenu.length-1);
    const elItem_show = document.querySelector("#content-"+menuId);
    // Unhide current menu
    elItem_show.classList.remove("dropdown-hidden"); 
    
    if (iframe.contentWindow.document.querySelector('.col-1') ) {
        // Work with upper block
        if (menuId==="2") {
            window.scrollTo(0,0);
        }
        // Work with columns
        else if (menuId==="3") {
            let el = iframe.contentWindow.document.querySelector('.col-2');
            el.scrollIntoView(true);
        }
        // Work with buttons
        else if (menuId==="4") {
            window.scrollTo(0,document.body.scrollHeight);
        }
    }
    // Hide color picker
    hideSidebar();
}));

// Hide all menus and color picker when user clicks on frame container.
window.onload=function(){
    iframe.contentWindow.document.querySelector('#HTML-Content').addEventListener('click',hideMenus,false);
}

function hideMenus() {
    for (let i = 1; i <= uiMenusLength; i++) {
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
for (let i = 1; i <= uiMenusLength; i++) {
    document.querySelector(`#content-${[i]} .dialog-box-header span.close-x`).addEventListener("click", hideDialogBox);
}

function hideDialogBox() {
    for (let i = 1; i <= uiMenusLength; i++) {
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

for (let i = 1; i <= uiMenusLength; i++) {
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
    var hs = iframe.contentWindow.document.querySelectorAll('style');
    for (var i=0, max = hs.length; i < max; i++) {
        hs[i].parentNode.removeChild(hs[i]);
    }

    if (selectedValue==="light") {
        iframe.contentWindow.document.querySelector("section").classList.remove("theme-dark"); 
        iframe.contentWindow.document.querySelector("section").classList.add("theme-light"); 
        // Update session storage;
        sessionStorage.setItem('section-theme', 'section.theme-light.'+section_class); 
    }
        
    else if (selectedValue==="dark") {
        iframe.contentWindow.document.querySelector("section").classList.remove("theme-light"); 
        iframe.contentWindow.document.querySelector("section").classList.add("theme-dark"); 
        // Update session storage;
        sessionStorage.setItem('section-theme', 'section.theme-dark.'+section_class); 
    }

    // Check for outlines
    if (document.querySelector("#cb_outlines").checked) {
        const css_checked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = document.head || iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_checked = iframe.contentWindow.document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(document.createTextNode(css_checked));
    }
    if (iframe.contentWindow.document.querySelector('.col-1') ) {
        document.getElementById("cb_cols_shadows").checked=false; 
        document.getElementById("cb_col_borders").disabled=false; 
        document.getElementById("cb_col_borders").checked=false; 
        document.getElementById("cb_cols_corners_soft").disabled=true; 
        document.getElementById("cb_cols_corners_soft").checked=false; 
    }
    const el_section = iframe.contentWindow.document.querySelector("section");
    if (iframe.contentWindow.document.querySelector('.col-1') ) {
        el_section.classList.remove("cols-padding");
        el_section.classList.remove("cols-shadows");
        el_section.classList.remove("col-corners");
    }
    disableCSS();
}

/*
//////////////// SECTION: CLASS NAMES ///////////////
*/

document.querySelector("#dd_class_name").addEventListener("change", doClassName);

function doClassName() {
    removeClassNames();
    let opt = 1 + parseInt(document.querySelector("#dd_class_name").value);
    section_class = "section-selector-"+opt;
    iframe.contentWindow.document.querySelector("section").classList.add("section-selector-"+opt);
    // Update session storage;
    sessionStorage.setItem('section-selector', 'section-selector-'+opt);
}

function removeClassNames() {
    const el_section = iframe.contentWindow.document.querySelector("section");
    for (let i = 1; i <= uiMenusLength; i++) {
        el_section.classList.remove("section-selector-"+[i]);
    }
}

function RemoveColsPadding() {
    // Test for no border, no shadow and not default theme
    if ((!iframe.contentWindow.document.querySelector("section.col-borders")) && (!iframe.contentWindow.document.querySelector("section.col-shadows") )  ) {
        if (sessionStorage.getItem('col-background')) {
            const sessData = sessionStorage.getItem('col-background');
            if (sessData==="default") {
                const el_section = iframe.contentWindow.document.querySelector("section");
                el_section.classList.remove("col-padding");
            }
        }
    }
}  

/*
//////////////// SECTION: OUTLINES  ///////////////
*/

document.querySelector("#cb_outlines").addEventListener("change", toggleOutlines);

function toggleOutlines() {
    
    if (document.querySelector("#cb_outlines").checked) {
        const css_checked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_checked = iframe.contentWindow.document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(iframe.contentWindow.document.createTextNode(css_checked));
    }

    else {
        const css_unchecked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px transparent }";
        head_unchecked = iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_unchecked = iframe.contentWindow.document.createElement('style');
        head_unchecked.appendChild(style_unchecked);
        style_unchecked.type = 'text/css';
        style_unchecked.appendChild(iframe.contentWindow.document.createTextNode(css_unchecked));
    }
}    

/*
//////////////// SECTION WIDTH ///////////////
*/

document.querySelector("#dd_section_width").addEventListener("change", doWidthSectionDesktop);

function doWidthSectionDesktop() {

    let opt = document.querySelector("#dd_section_width").value;
    deleteWidthSectionDesktop();

    if (opt==="1") {
        iframe.contentWindow.document.querySelector('.'+section_class).classList.add("w-960px");
    }
    else if (opt==="2") {
        iframe.contentWindow.document.querySelector('.'+section_class).classList.add("w-1024px");
    }
    else if (opt==="3") {
        iframe.contentWindow.document.querySelector('.'+section_class).classList.add("w-1140px");
    }
    else if (opt==="4") {
        iframe.contentWindow.document.querySelector('.'+section_class).classList.add("w-1320px");
    }
    else if (opt==="5") {
        iframe.contentWindow.document.querySelector('.'+section_class).classList.add("w-1536px");
    }
}

function deleteWidthSectionDesktop() {
    iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("w-960px");
    iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("w-1024px");
    iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("w-1140px");
    iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("w-1320px");
    iframe.contentWindow.document.querySelector('.'+section_class).classList.remove("w-1536px");                
}

/*
//////////////// COLOR PICKER ////////////////////
*/

// Get the modal
const modal = document.getElementById("myModal");
const span = document.querySelector('#myModal .close-modal')
span.onclick = function() {
    hideSidebar();
    disableTransColCode();
}
    
// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        hideSidebar();
        disableTransColCode();
    }
}

let btn_id; // item to be coloured
let newStyle; // full selector and style rule
let sub_string; // style rule excerpt

const arrCSS = []; // array for style rules to copy

// newStyle = 'section.theme-light.section-selector-1 { background-color: var(--yellow-200) }\n';

// arrCSS.push(newStyle);

// style = document.createElement('style');
// iframe.contentWindow.document.head.appendChild(style);
// style.appendChild(document.createTextNode(newStyle));
// enableCSS();


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

/* Color picker error */
document.querySelector(".close-box-msg").addEventListener('click', closeBoxMsg);

function closeBoxMsg() {
    document.querySelector("#box-msg").classList.remove("is-visible");
    document.querySelector("#box-msg").classList.add("is-hidden");
}

function displayModal() {
    if ((btn_id === "btn_solid_bg_passive") || (btn_id === "btn_solid_bg_active") ||(btn_id === "btn_solid_border_passive") || (btn_id === "btn_solid_border_active") || (btn_id === "btn_secondary_passive_bg") || (btn_id === "btn_secondary_bg_active") ||(btn_id === "btn_secondary_border_passive") || (btn_id === "btn_secondary_active_border") ) {
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
        const span = event.target.closest("span");
        if (span && this.contains(span)) {
            // Ignore this click
            return;
        }
        const rbs = document.querySelectorAll("input[name='picker-radio']");
        let color_code;
    
        for (const rb of rbs) {
            if (rb.checked) {
                color_code = rb.value;
                break;
            }
        }
        // Test checkbox instead, limits to UI elements rather than section
        if (iframe.contentWindow.document.querySelector("section.theme-light")) {
            section_theme = "section.theme-light."+section_class;
        }
        else if (iframe.contentWindow.document.querySelector("section.theme-dark")) {
            section_theme = "section.theme-dark."+section_class;
        }

        /* Section background */
        if (btn_id === "btn_section_bg") {
            newStyle = section_theme+ " { background-color: var("+color_code+") }\n";
            sub_string = section_theme+ " { background-color: ";
            doUpdateArray(sub_string,newStyle);
        }

        /* .col-2 label text */
        else if (btn_id === "btn_col_label_text") {
            newStyle = section_theme+ " .container-upper-label { color: var("+color_code+") }\n";
            sub_string = " .col-2 .container-upper-label";
            doUpdateArray(sub_string,newStyle);
        }

        /* .col-2 h2 main heading */
        else if (btn_id === "btn_col_h2_text") {
            newStyle = section_theme+ " .col-2 h2 { color: var("+color_code+") }\n";
            sub_string = ".col-2 h2";
            doUpdateArray(sub_string,newStyle);
        }

        /* .col-2 h3 main heading */
        else if (btn_id === "btn_col_h3_text") {
            newStyle = section_theme+ " .col-2 h3 { color: var("+color_code+") }\n";
            sub_string = ".col-2 h3";
            doUpdateArray(sub_string,newStyle);
        }

        /* .col-2 text */
        else if (btn_id === "btn_col_text") {
            newStyle = section_theme+ " .col-2 p { color: var("+color_code+") }\n." +section_class+" .col-2 li { color: var("+color_code+") }\n"; 
            sub_string = ".col-2 p {";
            doUpdateArray(sub_string,newStyle); 
        }

        /* List marker */
        else if (btn_id === "btn_col_list_marker") {
            newStyle = section_theme+ " .col-2 li::marker, "+section_theme+ " .col-2 ul.fa-ul li span.fa-li i { color: var("+color_code+") }\n"; 
            sub_string = "li::marker";
            doUpdateArray(sub_string,newStyle); 
        }
        
        /* === Buttons === */

        /* Text colour: passive */
        else if (btn_id === "btn_solid_text_passive") {
            newStyle = section_theme+" .btn-solid:link,\n"+section_theme+" .btn-solid:visited { color: var("+color_code+") }\n\n";
            sub_string = ".btn-solid:visited { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Text colour: active */
        else if (btn_id === "btn_solid_text_active") {
            newStyle = section_theme+" .btn-solid:focus,\n"+section_theme+" .btn-solid:hover,\n"+section_theme+" .btn-solid:active { color: var("+color_code+") }\n\n";
            sub_string = ".btn-solid:active { color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: passive */
        else if (btn_id === "btn_solid_bg_passive") {
            newStyle = section_theme+" .btn-solid:link,\n"+section_theme+" .btn-solid:visited { background-color: var("+color_code+") }\n\n";
            sub_string = ".btn-solid:visited { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Background colour: active */
        else if (btn_id === "btn_solid_bg_active") {
            newStyle = section_theme+" .btn-solid:focus,\n"+section_theme+" .btn-solid:hover,\n"+section_theme+" .btn-solid:active { background-color: var("+color_code+") }\n\n";
            sub_string = ".btn-solid:active { background-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: passive */
        else if (btn_id === "btn_solid_border_passive") {
            newStyle = section_theme+" .btn-solid:link,\n"+section_theme+" .btn-solid:visited { border-color: var("+color_code+") }\n\n";
            sub_string = ".btn-primary:visited { border-color";
            doUpdateArray(sub_string,newStyle);
        }

        /* Border colour: active */
        else if (btn_id === "btn_solid_border_active") {
            newStyle = section_theme+" .btn-solid:focus,\n"+section_theme+" .btn-solid:hover,\n"+section_theme+" .btn-solid:active { border-color: var("+color_code+") }\n\n";
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
    let HTML_Content = iframe.contentWindow.document.getElementById("HTML-Content").innerHTML;
    const el = document.createElement('textarea');
    el.value = HTML_Content;
    hideMenus();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el); 
}

document.querySelector("#btn-copy-css").addEventListener("click", copyCSS);

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
//////////////// Responsive resizing icons in navbar ///////////////
*/

document.querySelector("#container-icon-resize-width").addEventListener("click", doResizeWidth);

function doResizeWidth() {
    let img = document.getElementById('img-icon-resize-width').src;

    // Not currently selected
    if (img.indexOf('assets/img/icons/icon-resize-unselected.png')!=-1) {
        document.getElementById('img-icon-resize-width').src = 'assets/img/icons/icon-resize-selected.png';
        showRespIcons();
    }

    // Is currently selected
    else {
       document.getElementById('img-icon-resize-width').src = 'assets/img/icons/icon-resize-unselected.png';
       hideRespIcons();
   }
}

function showRespIcons() {
    document.querySelector('.page-preview-options').classList.add("show-options");
}

function hideRespIcons() {
    document.querySelector('.page-preview-options').classList.remove("show-options");
}

const iconsResponsive = document.querySelectorAll('.icon_resize_respon');

iconsResponsive.forEach(icon => {
    icon.addEventListener('click', (e) => {
        // Get current icon id
        const iconId = e.currentTarget.id.toString();
        document.getElementById(iconId).classList.add("selected");
        resetResponsive();

        if (iconId==="respDesktopLarge") {
            document.getElementById("page-preview-body").classList.add("resp-desktop-large");
            document.querySelector("#respDesktopLarge img").src = "assets/img/icons/icon-resize-desktop-large.png";
        }

        else if (iconId==="respDesktopSmall") {
            document.getElementById("page-preview-body").classList.add("resp-desktop-small");
            document.querySelector("#respDesktopSmall img").src = "assets/img/icons/icon-resize-desktop-small.png";
        }

        else if (iconId==="respTabletLandscape") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-landscape");
            document.querySelector("#respTabletLandscape img").src = "assets/img/icons/icon-resize-tablet-landscape.png";
        }
        else if (iconId==="respTabletPortrait") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-portrait");
            document.querySelector("#respTabletPortrait img").src = "assets/img/icons/icon-resize-tablet-portrait.png";
        }        
        
        else if (iconId==="respMobileLarge") {
            document.getElementById("page-preview-body").classList.add("resp-mobile-large");
            document.querySelector("#respMobileLarge img").src = "assets/img/icons/icon-resize-mobile-large.png";
        }        

        else if (iconId==="respMobileSmall") {
            document.getElementById("page-preview-body").classList.add("resp-mobile-small")
            document.querySelector("#respMobileSmall img").src = "assets/img/icons/icon-resize-mobile-small.png";           
        }        
    });
});

function resetResponsive() {
    document.getElementById("page-preview-body").classList.remove("resp-desktop-large");
    document.getElementById("page-preview-body").classList.remove("resp-desktop-small");
    document.getElementById("page-preview-body").classList.remove("resp-tablet-landscape");
    document.getElementById("page-preview-body").classList.remove("resp-tablet-portrait");
    document.getElementById("page-preview-body").classList.remove("resp-mobile-large");
    document.getElementById("page-preview-body").classList.remove("resp-mobile-small");

    document.querySelector("#respDesktopLarge img").src = "assets/img/icons/icon-resize-desktop-large-selected.png";
    document.querySelector("#respDesktopSmall img").src = "assets/img/icons/icon-resize-desktop-small-selected.png";
    document.querySelector("#respTabletLandscape img").src = "assets/img/icons/icon-resize-tablet-landscape-selected.png";
    document.querySelector("#respTabletPortrait img").src = "assets/img/icons/icon-resize-tablet-portrait-selected.png";
    document.querySelector("#respMobileLarge img").src = "assets/img/icons/icon-resize-mobile-large-selected.png";  
    document.querySelector("#respMobileSmall img").src = "assets/img/icons/icon-resize-mobile-small-selected.png";  
}

