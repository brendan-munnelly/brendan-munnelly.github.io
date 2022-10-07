// Number of dropdown menus on Lunevery navbar
let uiMenusLength = document.querySelectorAll("#ui-menus li").length;
let sectionClassName = ".section-selector-1";
let sectionTheme = ".theme-light";
let btn_id; // item to be coloured
let newStyle; // full selector and style rule
let sub_string; // style rule excerpt for arrCSS
let color_code;
const arrCSS = []; // array for style rules to copy

/*
//////////////// MENUS AND DROPDOWNS ///////////////
*/

// Hide all menus - except currently selected one.
let divs = document.querySelectorAll('.dropbtn');
divs.forEach(el => el.addEventListener('click', event => {
    for (let i = 1; i <= uiMenusLength; i++) {
        document.getElementById("content-"+i).classList.add("dropdown-hidden");
    }
    // Get current menu id
    const strMenu = event.currentTarget.id.toString();
    const menuId = strMenu.charAt(strMenu.length-1);
    const elItem_show = document.getElementById("content-"+menuId);
    // Unhide current menu
    elItem_show.classList.remove("dropdown-hidden"); 
    
    if (iframe.contentWindow.document.querySelector('.col-1') ) {
        // Work with upper block
        if (menuId==="2") {
            window.scrollTo(0,0);
        }
        // Work with columns
        else if (menuId==="3") {
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").scrollIntoView(true);
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
    iframe.contentWindow.document.getElementById('HTML-Content').addEventListener('click',hideMenus,false);
}

function hideMenus() {
    for (let i = 1; i <= uiMenusLength; i++) {
        document.getElementById("content-"+i).classList.add("dropdown-hidden");
    }
    hideSidebar();
    document.getElementById("ui-admin-select").style.display ="none";
    document.getElementById("btn_gears").classList.remove('btn-lower-left-active');
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
} 

/* Show/hide color picker */
function showSidebar() {
    document.getElementById("myModal").classList.add("display-sidebar");
    document.getElementById("myModal").classList.remove("hide-sidebar");
}

function hideSidebar() {
    document.getElementById("myModal").classList.add("hide-sidebar");
    document.getElementById("myModal").classList.remove("show-sidebar");
    document.getElementById("myModal").scrollTo(0, 0); // scrolls to top of sidebar
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

        const elSliderColumn = document.getElementById("slider-gap-column");
        const elSliderRow = document.getElementById("slider-gap-row");

        if((e.target == elSliderColumn) || (e.target == elSliderRow) ) {
            // Do nothing
            elmnt.draggable = false; 
        }
        else {
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
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

/*
//////////////// COLOR PICKER ////////////////////
*/

// Get the modal
const modal = document.getElementById("myModal");
const span = document.querySelector('#myModal .close-modal')
span.onclick = function() {
    hideSidebar();
}
    
// When the user clicks anywhere outside the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        hideSidebar();
    }
}

// On click style button 
let all_btns = document.querySelectorAll('.btn_style');
all_btns.forEach(el => el.addEventListener('click', event => {
    event.preventDefault();
    // get button id
    btn_id = event.target.id.toString();
    console.log("Button ID: "+btn_id);
    displayModal();
}));

function displayModal() {
    showSidebar();
    event.preventDefault();
}

/*
//////////////// SECTION: THEME  ///////////////
*/

document.getElementById("form_switch_section_theme").addEventListener("change", doSectionTheme);

function doSectionTheme() {
    const rbs = document.querySelectorAll("input[name='switch_section_light_dark']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="light") {
        iframe.contentWindow.document.querySelector("section").classList.remove("theme-dark"); 
    }
        
    else if (selectedValue==="dark") {
        iframe.contentWindow.document.querySelector("section").classList.add("theme-dark"); 
    }
    clearCSSTags();
}

/*
//////////////// SECTION: CLASS NAMES ///////////////
*/

document.getElementById("dd_class_name").addEventListener("change", doClassName);

function doClassName() {
    removeClassNames();
    let opt = document.querySelector("#dd_class_name").value;
    iframe.contentWindow.document.querySelector("section").classList.add("section-selector-"+opt);
    // Update global variable;
    sectionClassName = ".section-selector-"+opt;
}

function removeClassNames() {
    const el_section = iframe.contentWindow.document.querySelector("section");
    for (let i = 1; i <= 6; i++) {
        el_section.classList.remove("section-selector-"+[i]);
    }
}

/*
//////////////// ALIGN SECTION ///////////////
*/

if (document.getElementById("form_align_desktop")) { 
    document.getElementById("form_align_desktop").addEventListener("change", doAlignSectionDesktop);
}
    
function doAlignSectionDesktop() {
    const rbs = document.querySelectorAll("input[name='align_desktop']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("section").classList.remove("text-center-desktop");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("section").classList.add("text-center-desktop"); 
    }
}

if (document.getElementById("form_align_mobile")) { 
    document.getElementById("form_align_mobile").addEventListener("change", doAlignSectionMobile);
}

function doAlignSectionMobile() {

    const rbs = document.querySelectorAll("input[name='align_mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector("section").classList.remove("text-center-mobile");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("section").classList.add("text-center-mobile"); 
    }
}

/*
//////////////// SECTION WIDTH ///////////////
*/

document.getElementById("dd_section_width").addEventListener("change", doWidthSectionDesktop);

function doWidthSectionDesktop() {
    console.log("clicked section width");

    let opt = document.getElementById("dd_section_width").value;
    deleteWidthSectionDesktop();

    if (opt==="0") {
        iframe.contentWindow.document.querySelector("section").classList.add("w-800px");
    }

    else if (opt==="1") {
        iframe.contentWindow.document.querySelector("section").classList.add("w-960px");
    }
    else if (opt==="2") {
        iframe.contentWindow.document.querySelector("section").classList.add("w-1024px");
    }
    else if (opt==="3") {
        iframe.contentWindow.document.querySelector("section").classList.add("w-1140px");
    }
    else if (opt==="4") {
        iframe.contentWindow.document.querySelector("section").classList.add("w-1320px");
    }
    else if (opt==="5") {
        iframe.contentWindow.document.querySelector("section").classList.add("w-1536px");
    }
}

function deleteWidthSectionDesktop() {
    iframe.contentWindow.document.querySelector("section").classList.remove("w-800px");
    iframe.contentWindow.document.querySelector("section").classList.remove("w-960px");
    iframe.contentWindow.document.querySelector("section").classList.remove("w-1024px");
    iframe.contentWindow.document.querySelector("section").classList.remove("w-1140px");
    iframe.contentWindow.document.querySelector("section").classList.remove("w-1320px");
    iframe.contentWindow.document.querySelector("section").classList.remove("w-1536px");                
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
    updateCSSTagPair();
}

function updateCSSTagPair() {
    let strCSS = arrCSS.toString();
    strCSS = strCSS.replaceAll(",.theme", ".theme");
    strCSS = strCSS.replaceAll(",.section", ".section");
    if (iframe.contentWindow.document.head.innerHTML.includes("<style>")) {
        var st = iframe.contentWindow.document.getElementsByTagName('style');            
        for(let i = 0 ; i < st.length ; i++){
            st[i].parentNode.removeChild(st[i]);
        }
    }
    styleTagPair = iframe.contentWindow.document.createElement("style");
    iframe.contentWindow.document.head.appendChild(styleTagPair);
    styleTagPair.append(strCSS);
    if (arrCSS.length > 0) {
        enableCSS();
    }
    else {
        disableCSS();
    }
}

// Remove all style rules
function clearCSSTags() {
    if (iframe.contentWindow.document.head.innerHTML.includes("<style>")) {
        var st = iframe.contentWindow.document.getElementsByTagName('style');            
        for(let i = 0 ; i < st.length ; i++){
            st[i].parentNode.removeChild(st[i]);
        }
    }
    disableCSS();
}

// Remove selected style rules only
function removeCSSTagPairs(...args) {

    console.log(`number of args: ${args.length}`);

    // remove from CSS array
    for (const arg of args) {
        console.log("An arg content: "+arg);
        const arrPos = arrCSS.findIndex(e => e.includes(arg)); 
        console.log("arrPos: "+arrPos);
        if (arrPos != "-1") {
            // remove from CSS array
            arrCSS.splice(arrPos, 1);
        }
    }

    // remove current <style> from head
    let strCSS = arrCSS.toString();
    strCSS = strCSS.replaceAll(",.theme", ".theme");
    strCSS = strCSS.replaceAll(",.section", ".section");
    var st = iframe.contentWindow.document.getElementsByTagName('style');            
    for(let i = 0 ; i < st.length ; i++){
        st[i].parentNode.removeChild(st[i]);
    }
    // recreate new <style> in head
    styleTagPair = iframe.contentWindow.document.createElement("style");
    iframe.contentWindow.document.head.appendChild(styleTagPair);
    // Add CSS rules without deleted rules to <style> in head
    styleTagPair.append(strCSS);

    if (arrCSS.length > 0) {
        enableCSS();
    }
    else {
        disableCSS();
    }
}

/*
//////////////// UI THEME SELECTOR  ///////////////
*/

document.querySelector("#btn_gears").addEventListener("click", doUIThemeBtn);

function doUIThemeBtn() {
    const eleBtn = document.getElementById("btn_gears");

    if (eleBtn.classList.contains('btn-lower-left-active')) {
        eleBtn.classList.remove('btn-lower-left-active');
        document.getElementById("ui-admin-select").style.display ="none";
    }
    else {
        eleBtn.classList.add('btn-lower-left-active');
        document.getElementById("ui-admin-select").style.display ="block";
    }
}

document.querySelector("#dd_ui_theme").addEventListener("click", doUIThemeSelect);

function doUIThemeSelect() {
    deleteUITheme();

    let opt = document.querySelector("#dd_ui_theme").value;
    const elControl = document.getElementById("controls-top");
    const elLowerLeft = document.getElementById("lower-left");
    const elLowerRight = document.getElementById("copy-code-btns");

    if (opt==="1") {
        elControl.classList.add("theme-ui-dark-contrast");
        elLowerLeft.classList.add("theme-ui-dark-contrast"); 
        elLowerRight.classList.add("theme-ui-dark-contrast"); 
        sessionStorage.setItem('ui-theme', 'theme-ui-dark-contrast'); 
    }
    else if (opt==="2") {
        elControl.classList.add("theme-ui-dark-blue");
        elLowerLeft.classList.add("theme-ui-dark-blue"); 
        elLowerRight.classList.add("theme-ui-dark-blue"); 
        sessionStorage.setItem('ui-theme', 'theme-ui-dark-blue'); 
    }
    else if (opt==="3") {
        elControl.classList.add("theme-ui-dark-green");
        elLowerLeft.classList.add("theme-ui-dark-green"); 
        elLowerRight.classList.add("theme-ui-dark-green"); 
        sessionStorage.setItem('ui-theme', 'theme-ui-dark-green'); 
    }
    else if (opt==="4") {
        elControl.classList.add("theme-ui-dark-pink");
        elLowerLeft.classList.add("theme-ui-dark-pink"); 
        elLowerRight.classList.add("theme-ui-dark-pink"); 
        sessionStorage.setItem('ui-theme', 'theme-ui-dark-pink'); 
    }

    else if (opt==="5") {
        elControl.classList.add("theme-ui-light");
        elLowerLeft.classList.add("theme-ui-light"); 
        elLowerRight.classList.add("theme-ui-light"); 
        sessionStorage.setItem('ui-theme', 'theme-ui-light'); 
    }
    else if (opt==="6") {
        elControl.classList.add("theme-ui-tiffany");
        elLowerLeft.classList.add("theme-ui-tiffany"); 
        elLowerRight.classList.add("theme-ui-tiffany"); 
        sessionStorage.setItem('ui-theme', 'theme-ui-tiffany'); 
    }
    else if (opt==="7") {
        elControl.classList.add("theme-ui-pistachio");
        elLowerLeft.classList.add("theme-ui-pistachio"); 
        elLowerRight.classList.add("theme-ui-pistachio"); 
        sessionStorage.setItem('ui-theme', 'theme-ui-pistachio'); 
    }
    else if (opt==="8") {
        elControl.classList.add("theme-ui-girlboss");
        elLowerLeft.classList.add("theme-ui-girlboss"); 
        elLowerRight.classList.add("theme-ui-girlboss"); 
        sessionStorage.setItem('ui-theme', 'theme-ui-girlboss'); 
    }
}

function deleteUITheme() {
    const elControl = document.getElementById("controls-top");
    const elLowerLeft = document.getElementById("lower-left");
    const elLowerRight = document.getElementById("copy-code-btns");

    elControl.classList.remove("theme-ui-dark-contrast");
    elLowerLeft.classList.remove("theme-ui-dark-contrast"); 
    elLowerRight.classList.remove("theme-ui-dark-contrast"); 

    elControl.classList.remove("theme-ui-dark-blue");
    elLowerLeft.classList.remove("theme-ui-dark-blue");
    elLowerRight.classList.remove("theme-ui-dark-blue"); 

    elControl.classList.remove("theme-ui-dark-green");
    elLowerLeft.classList.remove("theme-ui-dark-green"); 
    elLowerRight.classList.remove("theme-ui-dark-green"); 

    elControl.classList.remove("theme-ui-dark-pink");
    elLowerLeft.classList.remove("theme-ui-dark-pink"); 
    elLowerRight.classList.remove("theme-ui-dark-pink"); 

    elControl.classList.remove("theme-ui-light");
    elLowerLeft.classList.remove("theme-ui-light"); 
    elLowerRight.classList.remove("theme-ui-light"); 

    elControl.classList.remove("theme-ui-tiffany");
    elLowerLeft.classList.remove("theme-ui-tiffany"); 
    elLowerRight.classList.remove("theme-ui-tiffany"); 

    elControl.classList.remove("theme-ui-pistachio");
    elLowerLeft.classList.remove("theme-ui-pistachio"); 
    elLowerRight.classList.remove("theme-ui-pistachio"); 

    elControl.classList.remove("theme-ui-girlboss");
    elLowerLeft.classList.remove("theme-ui-girlboss"); 
    elLowerRight.classList.remove("theme-ui-girlboss"); 
}

/*
//////////////// UI GRID OUTLINES ///////////////
*/

document.querySelector("#btn_outlines").addEventListener("click", doOutlines);

function doOutlines() {
    document.getElementById("ui-admin-select").style.display ="none";
    document.getElementById("btn_gears").classList.remove('btn-lower-left-active');

    const eleBtn = document.getElementById("btn_outlines");

    if (eleBtn.classList.contains('btn-lower-left-active')) {
        eleBtn.classList.remove('btn-lower-left-active');
        const css_unchecked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px transparent }";
        head_unchecked = iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_unchecked = iframe.contentWindow.document.createElement('style');
        head_unchecked.appendChild(style_unchecked);
        style_unchecked.type = 'text/css';
        style_unchecked.appendChild(iframe.contentWindow.document.createTextNode(css_unchecked));
    }
    else {
        eleBtn.classList.add('btn-lower-left-active');
        const css_checked = "#HTML-Content section, #HTML-Content div, #HTML-Content figure, #HTML-Content img, #HTML-Content h2, #HTML-Content h3, #HTML-Content h2, #HTML-Content p, #HTML-Content h2, #HTML-Content ul { outline: solid 1px red }";
        head_checked = iframe.contentWindow.document.getElementsByTagName('head')[0],
        style_checked = iframe.contentWindow.document.createElement('style');
        head_checked.appendChild(style_checked);
        style_checked.type = 'text/css';
        style_checked.appendChild(iframe.contentWindow.document.createTextNode(css_checked));
    }
}

/* Resize frame width */
document.querySelector("#btn_resize_width").addEventListener("click", resizeWidth);

function resizeWidth() {

    document.getElementById("ui-admin-select").style.display ="none";
    document.getElementById("btn_gears").classList.remove('btn-lower-left-active');
    const eleBtn = document.getElementById("btn_resize_width");

    if (document.getElementById("btn_resize_width").classList.contains('btn-lower-left-active')) {
        eleBtn.classList.remove('btn-lower-left-active');
        document.getElementById('page-preview-options').classList.remove("show-options");
        document.getElementById('page-preview-options').classList.add("hide-options");
    }

    else {
        eleBtn.classList.add('btn-lower-left-active');
        document.getElementById('page-preview-options').classList.add("show-options");
        document.getElementById('page-preview-options').classList.remove("hide-options");
    }
}

function showRespIcons() {
    document.getElementById('page-preview-options').classList.add("show-options");
}

function hideRespIcons() {
    document.getElementById('#page-preview-options').classList.remove("show-options");
}

/*
//////////////// Responsive resizing icons in navbar ///////////////
*/

document.querySelector("#container-icon-resize-width").addEventListener("click", doResizeWidth);

function doResizeWidth() {
    let img = document.getElementById('img-icon-resize-width').src;

    // Not currently selected
    if (img.indexOf('assets/img/icons/icon-resize-unselected.png')!=-1) {
        document.getElementById('img-icon-resize-width').src = '../../ui/assets/img/icons/icon-resize-selected.png';
        showRespIcons();
    }

    // Is currently selected
    else {
    document.getElementById('img-icon-resize-width').src = '../../ui/assets/img/icons/icon-resize-unselected.png';
    hideRespIcons();
    }
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
            document.querySelector("#respDesktopLarge img").src = "../../ui/assets/img/icons/icon-resize-desktop-large.png";
        }

        else if (iconId==="respDesktopSmall") {
            document.getElementById("page-preview-body").classList.add("resp-desktop-small");
            document.querySelector("#respDesktopSmall img").src = "../../ui/assets/img/icons/icon-resize-desktop-small.png";
        }

        else if (iconId==="respTabletLandscape") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-landscape");
            document.querySelector("#respTabletLandscape img").src = "../../ui/assets/img/icons/icon-resize-tablet-landscape.png";
        }
        else if (iconId==="respTabletPortrait") {
            document.getElementById("page-preview-body").classList.add("resp-tablet-portrait");
            document.querySelector("#respTabletPortrait img").src = "../../ui/assets/img/icons/icon-resize-tablet-portrait.png";
        }        
        
        else if (iconId==="respMobileLarge") {
            document.getElementById("page-preview-body").classList.add("resp-mobile-large");
            document.querySelector("#respMobileLarge img").src = "../../ui/assets/img/icons/icon-resize-mobile-large.png";
        }        

        else if (iconId==="respMobileSmall") {
            document.getElementById("page-preview-body").classList.add("resp-mobile-small")
            document.querySelector("#respMobileSmall img").src = "../../ui/assets/img/icons/icon-resize-mobile-small.png";           
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

    document.querySelector("#respDesktopLarge img").src = "../../ui/assets/img/icons/icon-resize-desktop-large-selected.png";
    document.querySelector("#respDesktopSmall img").src = "../../ui/assets/img/icons/icon-resize-desktop-small-selected.png";
    document.querySelector("#respTabletLandscape img").src = "../../ui/assets/img/icons/icon-resize-tablet-landscape-selected.png";
    document.querySelector("#respTabletPortrait img").src = "../../ui/assets/img/icons/icon-resize-tablet-portrait-selected.png";
    document.querySelector("#respMobileLarge img").src = "../../ui/assets/img/icons/icon-resize-mobile-large-selected.png";  
    document.querySelector("#respMobileSmall img").src = "../../ui/assets/img/icons/icon-resize-mobile-small-selected.png";  
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
    let strCSS  = arrCSS.join(",");
    strCSS = strCSS.replaceAll(",.theme", ".theme");
    strCSS = strCSS.replaceAll(",.header", ".header");
    strCSS = strCSS.replaceAll(",.section", ".section");
    strCSS = strCSS.replaceAll(",.footer", ".footer");
    el_css.value = strCSS;
    document.body.appendChild(el_css);
    el_css.select();
    document.execCommand('copy');
    document.body.removeChild(el_css);  
}

