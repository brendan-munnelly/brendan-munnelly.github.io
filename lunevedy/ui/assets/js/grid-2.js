import {content_h3_col_3, content_h3_col_4, content_paras_col_3, content_paras_col_4, content_list_col_3, content_list_col_4, arrColBadge} from '../js/arr-content.js';

/*
//////////////// COLUMNS BLOCKS ///////////////
*/

document.querySelector("#form_switch_col_blocks").addEventListener("change", setColumnBlocks);

function setColumnBlocks() {
    const rbs = document.querySelectorAll("input[name='switch_col_blocks']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    let objAllCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
    
    if (selectedValue==="row-one") {
        // reduce from 4 to 2
        if (objAllCols.length === 4) {
            for (let i = 0; i < 2; i++) {
                objAllCols[i].remove();
            }
            document.getElementById("slider-gap-row").disabled = true;
        }

        // reduce from 6 to 2
        else if (objAllCols.length === 6) {
            for (let i = 0; i < 4; i++) {
                objAllCols[i].remove();
            }
            document.getElementById("slider-gap-row").disabled = true;
        }
    }

    else if (selectedValue==="row-two") {
        // increase from 2 to 4
        if (objAllCols.length === 2) {
            let objRowOne = iframe.contentWindow.document.querySelector(".flex-cols-2");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector(".flex-cols-2").innerHTML = objRowOne.innerHTML; 
            document.getElementById("slider-gap-row").disabled = false;
        }

        // reduce from 6 to 4.
        else if (objAllCols.length === 6) {
            objAllCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
            for (let i = 0; i < 2; i++) {
                objAllCols[i].remove();
            }
            document.getElementById("slider-gap-row").disabled = false;
        }
    }

    else if (selectedValue==="row-three") {
        // increase from 2 to 6
        if (objAllCols.length === 2) {
            let objRowOne = iframe.contentWindow.document.querySelector(".flex-cols-2");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector(".flex-cols-2").innerHTML = objRowOne.innerHTML;
            document.getElementById("slider-gap-row").disabled = false;
        }

        // increase from 4 to 6. 
        // Double and remove 2.
        if (objAllCols.length === 4) {
            let objRowOne = iframe.contentWindow.document.querySelector(".flex-cols-2");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            for (let i = 0; i < 2; i++) {
                objRowOne.firstElementChild.remove();
            }
            iframe.contentWindow.document.querySelector(".flex-cols-2").innerHTML = objRowOne.innerHTML;
            document.getElementById("slider-gap-row").disabled = false;
        }
    }
}

/*
//////////////// COLUMNS AND ROWS GAP ///////////////
*/

document.querySelector("#slider-gap-column").addEventListener("change", setColumnGap);

function setColumnGap() {
    let selectedValue = document.getElementById("slider-gap-column").value
    const objCols = iframe.contentWindow.document.querySelector(".flex-cols-2");
    
    for (let i = 0; i <= 10; i++) {
        objCols.classList.remove("cols-gap-"+i);
    }
    objCols.classList.add("cols-gap-"+selectedValue);
}

document.querySelector("#slider-gap-row").addEventListener("change", setRowGap);

function setRowGap() {
    let selectedValue = document.getElementById("slider-gap-row").value
    const objCols = iframe.contentWindow.document.querySelector(".flex-cols-2");
    for (let i = 0; i <= 90; i+= 10) {
        objCols.classList.remove("row-gap-"+i);
    }
    objCols.classList.add("row-gap-"+selectedValue);
}

/*
//////////////// COLUMNS ALIGN ///////////////
*/

document.querySelector("#form-cols-align").addEventListener("change", doColsAlign);

function doColsAlign() {
    const rbs = document.querySelectorAll("input[name='cols-align']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
    if (selectedValue==="left") {
        iframe.contentWindow.document.querySelector(".flex-cols-2").classList.remove("text-center");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector(".flex-cols-2").classList.add("text-center");
    }
}


/*
//////////////// COLUMN BADGES ////////////////////
*/

document.querySelector("#cb_cols_badge").addEventListener("change", doColsBadge);

function doColsBadge() {

    if (!document.getElementById("cb_cols_badge").checked) {
        removeColsBadge();
    }

    else {
        // count column blocks
        const objCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
    
        let arrColBadgeLoop = [];

        if (objCols.length === 2) {
            for (let i = 0; i < (arrColBadge.length-2); i++) {
                arrColBadgeLoop[i] = arrColBadge[i];
            }
        }

        else if (objCols.length === 4) {
            const arrColBadgeTemp = [];
            for (let i = 0; i < (arrColBadge.length-2); i++) {
                arrColBadgeTemp[i] = arrColBadge[i];
            }
            arrColBadgeLoop = [].concat(...Array(2).fill(arrColBadgeTemp));
        }

        else if (objCols.length === 6) {
            const arrColBadgeTemp = [];
            for (let i = 0; i < (arrColBadge.length-2); i++) {
                arrColBadgeTemp[i] = arrColBadge[i];
            }
            arrColBadgeLoop = [].concat(...Array(3).fill(arrColBadgeTemp));
        }
    

        // Test for figures
        if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 figure")) {
            const objFigs = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 figure")
            let el_fig;
            // Loop through figures
            for (let i = 0; i < objFigs.length; i++) {
                el_fig = objFigs[i]; 
                el_fig.insertAdjacentHTML("afterend", arrColBadgeLoop[i]);
            }
            document.getElementById("show-cols-badge").style.display="flex";        
        } 

        // Test for sub-headings
        else if ( (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 h3")) || (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 a[class^='col-']") ))  {
            let objH3;
            if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 h3")) {
                objH3 = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 h3");
            }
            else if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 a[class^='col-']")) {
                objH3 = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 a[class^='col-']");
            }
            let el_h3;
            // Loop through h3 sub-headings
            for (let i = 0; i < objH3.length; i++) {
                el_h3 = objH3[i]; 
                el_h3.insertAdjacentHTML("beforebegin", arrColBadgeLoop[i]);
            }
            document.getElementById("show-cols-badge").style.display="flex";
        }

        // Test for paragraphs
        else if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 p")) {
            const objParas = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 p");
            let el_para;
            // Loop through paragraphs
            for (let i = 0; i < objParas.length; i++) {
                el_para = objParas[i]; 
                el_para.insertAdjacentHTML("beforebegin", arrColBadgeLoop[i]);
            }
            document.getElementById("show-cols-badge").style.display="flex";
        }
    
        // Test for lists
        else if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 ul")) {
            const objULs = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 ul")
            let el_li;
            // Loop through lists
            for (let i = 0; i < objULs.length; i++) {
                el_li = objULs[i]; 
                el_li.insertAdjacentHTML("beforebegin", arrColBadgeLoop[i]);
            }
            document.getElementById("show-cols-badge").style.display="flex";
        }
    
        else {
            const objCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
            let el_col;
            // Loop through columns
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i]; 
                el_col.innerHTML = arrColBadgeLoop[i];
            }
        }
    }
}

document.querySelector("#form_cols_badge_shape").addEventListener("change", doColsBadgeShape);

function doColsBadgeShape() {

    const objBadges = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .badge"); 
    let elBadge
    const rbs = document.querySelectorAll("input[name='switch_cols_badge_shape']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="square") {
        for (elBadge of objBadges) { 
            elBadge.classList.remove("corners-soft");
        }
    }
        
    else if (selectedValue==="soft") {
        for (elBadge of objBadges) { 
            elBadge.classList.add("corners-soft");
        }
    }
}

function removeColsBadge() {
    if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 .badge")) {
        const colsBadge = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 .badge");
        for (let i = 0; i < colsBadge.length; i++) {
            colsBadge[i].remove();
        }
        document.getElementById("show-cols-badge").style.display="none";
        const arg1 = sectionClassName+ " .badge { color:";
        const arg2 = sectionClassName+ " .badge { background-color:";
        removeCSSTagPairs(arg1,arg2);     
    }
}

/*
//////////////// COLUMN SUB-HEADINGS ////////////////////
*/

document.querySelector("#cb_cols_h3").addEventListener("change", doColH3);

function doColH3() {

    if (!document.getElementById("cb_cols_h3").checked) {
        removeColH3();
    }

    else {
        removeColH3();
        document.getElementById("btn_cols_h3").disabled=false;
        // count column blocks
        const objCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
        let arrContent = [];

        for (let i = 0; i < (content_h3_col_3.length-1); i++) {
            arrContent[i] = content_h3_col_3[i];
        }

        let arrContentLoop = [];

        if (objCols.length === 2) {
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentLoop[i] = arrContent[i];
            }
        }

        else if (objCols.length === 4) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
        }

        else if (objCols.length === 6) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
        }

        // Test for figures (images or icons) and NO badge
        if ( (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 figure")) && (!iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 .badge") ) ) {
            const objFigs = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 figure")
            let el_fig;
            // Loop through figures
            for (let i = 0; i < objFigs.length; i++) {
                el_fig = objFigs[i]; 
                el_fig.insertAdjacentHTML("afterend", arrContentLoop[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false; 
            document.getElementById("cb_cols_shadows").checked=false; 
        }       

        // Test for column badges
        else if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 .badge")) {
            
            const objBadges = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 .badge");
            let el_badge;
            // Loop through badges
            for (let i = 0; i < objBadges.length; i++) {
                el_badge = objBadges[i]; 
                el_badge.insertAdjacentHTML("afterend", arrContentLoop[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false; 
            document.getElementById("cb_cols_shadows").checked=false; 
        }

        // Test for paragraphs
        else if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 p")) {
            const objParas = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 p");
            let el_para;
            // Loop through paragraphs
            for (let i = 0; i < objParas.length; i++) {
                el_para = objParas[i]; 
                el_para.insertAdjacentHTML("beforebegin", arrContentLoop[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false; 
            document.getElementById("cb_cols_shadows").checked=false; 
        }

        // Test for lists
        else if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 ul")) {
            const objULs = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 ul")
            let el_li;
            // Loop through lists
            for (let i = 0; i < objULs.length; i++) {
                el_li = objULs[i]; 
                el_li.insertAdjacentHTML("beforebegin", arrContentLoop[i]);
            }
            document.getElementById("cb_cols_shadows").disabled=false; 
            document.getElementById("cb_cols_shadows").checked=false; 
        }

        // No pics, icons, paras, lists
        else {
            const objCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
            let el_col;
            // Loop through columns
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i]; 
                el_col.innerHTML = arrContentLoop[i];
            }
        }
        document.getElementById("cb_cols_shadows").disabled=false; 
        document.getElementById("cb_cols_shadows").checked=false; 
        document.getElementById("cb_cols_links_h3").disabled=false;
        document.getElementById("cb_cols_links_h3").checked=false;
    }
}

function removeColH3() {
    if ( (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 h3")) || (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 a[class^='col-']")) ) {
        document.getElementById("btn_cols_h3").disabled=true;
        let objH3;
        if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 h3")) {
            objH3 = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 h3");
        }
        else if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 a[class^='col-']")) {
            objH3 = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 a[class^='col-']");
        }
        else (objH3 = "");        
        
        // Loop through H3 sub-headings in columns
        for (let i = 0; i < objH3.length; i++) {
            objH3[i].remove();
        }
        iframe.contentWindow.document.querySelector(".flex-cols-2").innerHTML = iframe.contentWindow.document.querySelector(".flex-cols-2").innerHTML.replaceAll('</figure>\n\t\t\t', '</figure>'); 

        // If no H3 and no text or lists
        if ( (!iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 h3")) && (!iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 p")) && (!iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 ul"))) {
            document.getElementById("cb_cols_shadows").disabled=true; 
            document.getElementById("cb_cols_shadows").checked=false; 
        }
        document.getElementById("hyperlinks-h3").style.display="none";
        document.getElementById("hyperlinks-h3-underline").style.display="none";
        document.getElementById("cb_cols_links_h3").disabled=true;
        document.getElementById("cb_cols_links_h3").checked=false;

        const arg1 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] h3 { color:";
        removeCSSTagPairs(arg1);
    }
}

/*
//////////////// COLUMN H3 HYPERLINKS ////////////////////
*/

document.querySelector("#cb_cols_links_h3").addEventListener("change", doColH3Hyperlink);

function doColH3Hyperlink() {

    const objAllCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
    let target;
    let col_no = "col-2-h3";

    // console.log("col_no: " + col_no);
    if (!document.querySelector("#cb_cols_links_h3").checked) {
        document.getElementById("hyperlinks-h3").style.display="none";
        document.getElementById("hyperlinks-h3-underline").style.display="none";
        document.getElementById("btn_cols_h3").disabled=false;

        for (let i = 0; i < (objAllCols.length); i++) {
            target = objAllCols[i].innerHTML;
            objAllCols[i].innerHTML = target.replace(/(<a href=\"#\" class=\"col-2-h3\">)/igm, '<h3>').replace(/<\/a>/igm, '<\/h3>');
        }
    }

    else {
        document.getElementById("hyperlinks-h3").style.display="flex";
        document.getElementById("hyperlinks-h3-underline").style.display="flex";
        document.getElementById("btn_cols_h3").disabled=true;
       
        for (let i = 0; i < (objAllCols.length); i++) {
            target = objAllCols[i].innerHTML;
            objAllCols[i].innerHTML = target.replace(/(<h3>)/igm, '<a href=\"#\" class=\"col-2-h3\">').replace(/<\/h3>/igm, '<\/a>');
        }
    }
}

/*
//////////////// COLUMN PARAGRAPHS OR LISTS ////////////////////
*/

document.querySelector("#dd_cols_text").addEventListener("change", doColsText);

function doColsText() {

    let opt = document.querySelector("#dd_cols_text").value;
    const arrContent = []; 
    
    // remove
    if (opt==="0") {
        document.querySelector("#btn_cols_text").disabled=true;
        document.getElementById("not-paragraphs").style.display ="none";
        document.getElementById("fa-icons").style.display ="none";
        document.getElementById("dd_cols_list_marker").value="0";
        document.getElementById("fa-circle-check").checked=true;
        removeText();
    }
    
    // paragraphs
    else if (opt==="1") {
        document.querySelector("#btn_cols_text").disabled=false;
        removeText();

        // count column blocks
        const objCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");

        for (let i = 0; i < content_paras_col_3.length; i++) {
            arrContent[i] = content_paras_col_3[i];
        }

        let arrContentLoop = [];

        if (objCols.length === 2) {
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentLoop[i] = arrContent[i];
            }
        }

        else if (objCols.length === 4) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
        }

        else if (objCols.length === 6) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
        }


        // No bullets
        if (!iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 .container-btn")) {
            const objCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
            let el_col;
            let el_col_temp;
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i]; 
                el_col_temp = arrContentLoop[i];
                el_col.innerHTML = el_col.innerHTML + el_col_temp;
            }
        }
        else {
        // Bullets
            let objButtons = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 .container-btn");
            let el_button;
            for (let i = 0; i < objButtons.length; i++) {
                el_button = objButtons[i]; 
                el_button.insertAdjacentHTML("beforebegin", arrContentLoop[i]);
            }
        }

        document.getElementById("cb_cols_shadows").disabled=false; 
        document.getElementById("cb_cols_shadows").checked=false; 
        document.getElementById("not-paragraphs").style.display ="none";
        document.getElementById("fa-icons").style.display ="none";
        document.getElementById("dd_cols_list_marker").value="0";
        document.getElementById("fa-circle-check").checked=true;
    }

    // lists
    else if (opt==="2") {
        removeText();
        document.querySelector("#btn_cols_text").disabled=false;

        // count column blocks
        const objCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");

        for (let i = 0; i < content_list_col_3.length; i++) {
            arrContent[i] = content_list_col_3[i];
        }
        let arrContentLoop = [];

        if (objCols.length === 2) {
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentLoop[i] = arrContent[i];
            }
        }

        else if (objCols.length === 4) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
        }

        else if (objCols.length === 6) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
        }

        // No bullets
        if (!iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 .container-btn")) {
            const objCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
            let el_col;
            let el_col_temp;
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i]; 
                el_col_temp = arrContentLoop[i];
                el_col.innerHTML = el_col.innerHTML + el_col_temp;
            }
        }
        else {
        // Bullets
            let objButtons = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 .container-btn");
            let el_button;
            for (let i = 0; i < objButtons.length; i++) {
                el_button = objButtons[i]; 
                el_button.insertAdjacentHTML("beforebegin", arrContentLoop[i]);
            }
        }

        document.getElementById("dd_cols_list_marker").disabled=false;
        document.getElementById("dd_cols_list_marker").value="0";
        document.getElementById("btn_cols_list_marker").disabled=false;
        document.getElementById("cb_cols_shadows").disabled=false; 
        document.getElementById("cb_cols_shadows").checked=false; 
        document.getElementById("not-paragraphs").style.display ="flex";
        document.getElementById("fa-icons").style.display ="none";
        document.getElementById("fa-circle-check").checked=true;
    }
}

function removeText() {
    const el_para = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 p");
    for (var i = 0 ; i < el_para.length ; i++) {
      el_para[i].remove();
    }
    const el_bullet = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 li");
    for (var i = 0 ; i < el_bullet.length ; i++) {
        el_bullet[i].remove();
    }
    const el_list = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 ul");
    for (var i = 0 ; i < el_list.length ; i++) {
        el_list[i].remove();
    }
    // enableColButtons();
    document.getElementById("dd_cols_list_marker").disabled=true;
    document.getElementById("dd_cols_list_marker").value="0";
    document.getElementById("btn_cols_list_marker").disabled=true;
    
    // If no H3 and no text
    if ( (!iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 h3")) && (!iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 p")) && (!iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 ul"))) {
        document.getElementById("cb_cols_shadows").disabled=true; 
        document.getElementById("cb_cols_shadows").checked=false; 
    }
    const arg1 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] p { color:";
    const arg2 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] li { color:";
    const arg3 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] li::marker";
    removeCSSTagPairs(arg1,arg2,arg3);
}

/*
//////////////// COLUMN LIST MARKERS ////////////////////
*/

document.querySelector("#dd_cols_list_marker").addEventListener("change", doListMarker);

function doListMarker() {

    let opt = document.querySelector("#dd_cols_list_marker").value;
    let objCols = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2");
    let el_col;

    // Regular
    if (opt==="0") {
        // Test for Font Awesome
        if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 ul.fa-ul") ) {
            // Loop through spans in list items and remove italic nodes
            let objListSpans = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 ul li span");

            for (let i = 0; i < objListSpans.length; i++) {
                objListSpans[i].firstChild.remove();
            }
            // Loop through list items and remove spans
            let objListItems = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 ul li");

            for (let i = 0; i < objListItems.length; i++) {
                objListItems[i].firstChild.remove();
            }

            let objAllCols = iframe.contentWindow.document.querySelector(".flex-cols-2");

            objAllCols.innerHTML = objAllCols.innerHTML.replaceAll("<ul class=\"fa-ul\">", "<ul>");
        }
        document.getElementById("fa-icons").style.display ="none";
        document.getElementById("fa-circle-check").checked=true;
    }

    // Font Awesome
    else if (opt==="1") {
        // Test for regular list
        if (iframe.contentWindow.document.querySelector(".flex-cols-2 .col-2 ul:not(.fa-ul)") ) {
            // Loop through columns
            for (let i = 0; i < objCols.length; i++) {
                el_col = objCols[i];
                el_col.innerHTML = el_col.innerHTML.replaceAll("<ul>", "<ul class=\"fa-ul\">");
                el_col.innerHTML = el_col.innerHTML.replaceAll("<li>", "<li><span class=\"fa-li\"><i class=\"fa-solid fa-circle-check\"><\/i><\/span>");
            }
        }
        document.getElementById("fa-icons").style.display ="flex";
        document.getElementById("fa-circle-check").checked=true;
    }
}

/*
//////////////// COLUMN LIST MARKERS ////////////////////
*/

document.querySelector("#form_switch_fa_icons").addEventListener("change", chooseListMarker);

function chooseListMarker() {
    const rbs = document.querySelectorAll("input[name='switch_fa_icons']");
    let objIcons = iframe.contentWindow.document.querySelectorAll(".flex-cols-2 .col-2 ul li span");
    let node;   
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    for (let i = 0; i < objIcons.length; i++) {
        objIcons[i].firstChild.remove();
        node = document.createElement("i");
        node.classList.add("fa-solid");
        node.classList.add(selectedValue);
        objIcons[i].appendChild(node);
    }
}


/*
//////////////// COLUMNS BACKGROUND ///////////////
*/

document.querySelector("#cb_cols_bg").addEventListener("change", doColBg);

function doColBg() {

    const el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']")

    if (!document.getElementById("cb_cols_bg").checked) {
        el_cols.classList.remove("cols-background");
        document.getElementById("btn_cols_bg").disabled=true;

        // if no shadows AND also border
        if ( (!document.getElementById("cb_cols_shadows").checked) && (!document.getElementById("cb_cols_borders").checked) ) {
            // remove padding 
            el_cols.classList.remove("cols-padding");
            // remove and disable soft corners
            el_cols.classList.remove("cols-corners-soft");
            document.getElementById("cb_cols_corners_soft").disabled=true;
            document.getElementById("cb_cols_corners_soft").checked=false;
        }
        const arg1 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] { background-color:";
        removeCSSTagPairs(arg1);
    }

    else {
        el_cols.classList.add("cols-background");
        el_cols.classList.add("cols-padding");
        // background color paintbrush button enabled
        document.getElementById("btn_cols_bg").disabled=false;
        // soft corners enabled
        document.getElementById("cb_cols_corners_soft").disabled=false;
    }
}

/*
//////////////// COLUMNS SHADOWS ///////////////
*/

document.querySelector("#cb_cols_shadows").addEventListener("change", doColShadows);

function doColShadows() {

    const el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']")

    if (!document.getElementById("cb_cols_shadows").checked) {
        el_cols.classList.remove("cols-shadows");
        document.getElementById("btn_cols_shadows_color").disabled=true;
        document.getElementById("btn_cols_shadows_color").checked=false;

        // if no background AND also no border
        
        if ( (!document.getElementById("cb_cols_bg").checked) && (!document.getElementById("cb_cols_borders").checked) ) {
            // remove padding
            el_cols.classList.remove("cols-padding");
            // remove and disable soft corners
            el_cols.classList.remove("cols-corners-soft");
            document.getElementById("cb_cols_corners_soft").disabled=true;
            document.getElementById("cb_cols_corners_soft").checked=false;
        }
    }

    else {
        el_cols.classList.add("cols-padding");
        el_cols.classList.add("cols-shadows");
        el_cols.classList.add("cols-corners-soft");
        document.getElementById("cb_cols_corners_soft").disabled=false; 
        document.getElementById("cb_cols_corners_soft").checked=true;
        document.getElementById("btn_cols_shadows_color").disabled=false;
    }
}

/*
//////////////// COLUMNS BORDERS ///////////////
*/

document.querySelector("#cb_cols_borders").addEventListener("change", doColBorders);

function doColBorders() {
    const el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']")

    if (!document.getElementById("cb_cols_borders").checked) {
        document.getElementById("btn_cols_borders_color").disabled=true; 
        el_cols.classList.remove("cols-borders-width-1");
        el_cols.classList.remove("cols-borders-width-2");
        el_cols.classList.remove("cols-borders-width-3");
        el_cols.classList.remove("cols-borders-width-4");
        document.getElementById("cols-borders-width-1").disabled=true; 
        document.getElementById("cols-borders-width-2").disabled=true; 
        document.getElementById("cols-borders-width-3").disabled=true; 
        document.getElementById("cols-borders-width-4").disabled=true; 
        document.getElementById("cols-borders-width-1").checked=false; 
        document.getElementById("cols-borders-width-2").checked=false; 
        document.getElementById("cols-borders-width-3").checked=false; 
        document.getElementById("cols-borders-width-4").checked=false; 

        // if no background AND also no shadows
        if ( (!document.getElementById("cb_cols_bg").checked) && (!document.getElementById("cb_cols_shadows").checked) ) {
            // remove padding 
            el_cols.classList.remove("cols-padding");
            // remove and disable soft corners
            el_cols.classList.remove("cols-corners-soft");
            document.getElementById("cb_cols_corners_soft").disabled=true;
            document.getElementById("cb_cols_corners_soft").checked=false;
        }
    }

    else {
        el_cols.classList.add("cols-padding");
        el_cols.classList.add("cols-borders-width-1");
        document.getElementById("cb_cols_corners_soft").disabled=false; 
        document.getElementById("cb_cols_corners_soft").checked;
        document.getElementById("cb_cols_borders").disabled=false;
        document.getElementById("cols-borders-width-1").disabled=false; 
        document.getElementById("cols-borders-width-1").checked=true; 
        document.getElementById("cols-borders-width-2").disabled=false; 
        document.getElementById("cols-borders-width-3").disabled=false; 
        document.getElementById("cols-borders-width-4").disabled=false; 
        document.getElementById("btn_cols_borders_color").disabled=false; 
    }
}

/*
//////////////// COLUMNS BORDERS WIDTH ///////////////
*/

document.querySelector("#form-cols-borders-width").addEventListener("change", doColBordersWidth);

function doColBordersWidth() {

    const rbs = document.querySelectorAll("input[name='cols-borders-width']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    // console.log("selectedValue:" +selectedValue);
    const objAllCols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");

    objAllCols.classList.remove("cols-borders-width-1");
    objAllCols.classList.remove("cols-borders-width-2");
    objAllCols.classList.remove("cols-borders-width-3");
    objAllCols.classList.remove("cols-borders-width-4");
    
    if (selectedValue==="1") {
        objAllCols.classList.add("cols-borders-width-1");
    }

    else if (selectedValue==="2") {
        objAllCols.classList.add("cols-borders-width-2");
    }

    else if (selectedValue==="3") {
        objAllCols.classList.add("cols-borders-width-3");
    }
    
    else if (selectedValue==="4") {
        objAllCols.classList.add("cols-borders-width-4");
    }
}

/*
//////////////// COLUMNS BORDER CORNERS ///////////////
*/

document.querySelector("#cb_cols_corners_soft").addEventListener("change", doColCorners);

function doColCorners() {
    const el_cols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']")

    if (!document.getElementById("cb_cols_corners_soft").checked) {
        el_cols.classList.remove("cols-corners-soft");
    }

    else {
        el_cols.classList.add("cols-corners-soft");
    }
}

function enableColButtons() {
    document.getElementById("btn_cols_text_passive").disabled=false;
    document.getElementById("btn_cols_text_active").disabled=false;
    document.getElementById("btn_cols_bg_passive").disabled=false;
    document.getElementById("btn_cols_bg_active").disabled=false;
    document.getElementById("btn_cols_border_passive").disabled=false;
    document.getElementById("btn_cols_border_active").disabled=false;
    document.getElementById("dd_buttons_type").disabled=false;
    document.getElementById("dd_buttons_type").value="0";
    document.getElementById("dd_buttons_shape").value="0";
    document.getElementById("dd_buttons_shape").disabled=false;
    document.getElementById("dd_buttons_size").disabled=false;
    if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
        document.getElementById("dd_buttons_size").value="0";
    }
    else {
        document.getElementById("dd_buttons_size").value="1";
    }
    document.getElementById("rb_btns_icons_right").checked=true;
    document.getElementById("rb_btns_icons_left").disabled=false;
    document.getElementById("rb_btns_icons_right").disabled=false;
    document.getElementById("rd-btns-icons-none").disabled=false;
    document.getElementById("cb_buttons_width").disabled=false;
    document.getElementById("cb_buttons_width").checked=false;
    document.getElementById("cb_buttons_shadow").disabled=false;
    document.getElementById("cb_buttons_shadow").checked=false;
    document.getElementById("cb_buttons_uppercase").disabled=false;
    document.getElementById("cb_buttons_uppercase").checked=false;
}

function disableColButtons() {
    document.getElementById("btn_cols_text_passive").disabled=true;
    document.getElementById("btn_cols_text_active").disabled=true;
    document.getElementById("btn_cols_bg_passive").disabled=true;
    document.getElementById("btn_cols_bg_active").disabled=true;
    document.getElementById("btn_cols_border_passive").disabled=true;
    document.getElementById("btn_cols_border_active").disabled=true;
    document.getElementById("rb_btns_icons_left").checked=false;
    document.getElementById("rb_btns_icons_right").checked=false;
    document.getElementById("rd-btns-icons-none").checked=false;
    document.getElementById("rb_btns_icons_left").disabled=true;
    document.getElementById("rb_btns_icons_right").disabled=true;
    document.getElementById("rd-btns-icons-none").disabled=true;
    document.getElementById("dd_buttons_type").disabled=true;
    document.getElementById("dd_buttons_type").value="0";
    document.getElementById("dd_buttons_shape").value="0";
    document.getElementById("dd_buttons_shape").disabled=true;
    document.getElementById("dd_buttons_size").value="1";
    document.getElementById("dd_buttons_size").disabled=true;
    document.getElementById("cb_buttons_width").disabled=true;
    document.getElementById("cb_buttons_width").checked=false;
    document.getElementById("cb_buttons_shadow").disabled=true;
    document.getElementById("cb_buttons_shadow").checked=false;
    document.getElementById("cb_buttons_uppercase").disabled=true;
    document.getElementById("cb_buttons_uppercase").checked=false;
}


