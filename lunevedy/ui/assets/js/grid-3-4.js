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

    let objAllCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
    
    console.log("objAllCols: "+objAllCols.length);
    // Reduce to three
    if (selectedValue==="row-one") {
        // from six to three
        if (objAllCols.length === 6) {
            for (let i = 0; i < 3; i++) {
                objAllCols[i].remove();
            }
            document.getElementById("slider-gap-row").disabled = true;
        }

        // from nine to three
        else if (objAllCols.length === 9) {
            for (let i = 0; i < 6; i++) {
                objAllCols[i].remove();
            }
            document.getElementById("slider-gap-row").disabled = true;
        }

        // from eight to four
        else if (objAllCols.length === 8) {
            for (let i = 0; i < 4; i++) {
                objAllCols[i].remove();
            }
            document.getElementById("slider-gap-row").disabled = true;
        }
        
        // from 12 to 4 
        else if (objAllCols.length === 12) {
            for (let i = 0; i < 12; i++) {
                objAllCols[i].remove();
            }
            document.getElementById("slider-gap-row").disabled = true;
        }        
    }

    else if (selectedValue==="row-two") {
        // 3 to 6. Double current content
        if (objAllCols.length === 3) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML; 
            document.getElementById("slider-gap-row").disabled = false;
        }

        // 9 to 6. Remove 3.
        else if (objAllCols.length === 9) {
            objAllCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            for (let i = 0; i < 3; i++) {
                objAllCols[i].remove();
            }
            document.getElementById("slider-gap-row").disabled = false;            
        }

        // 4 to 8. Double current content
        if (objAllCols.length === 4) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML; 
            document.getElementById("slider-gap-row").disabled = false;            
        }

        // 12 to 8. Remove 4.
        else if (objAllCols.length === 12) {
            objAllCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
            for (let i = 0; i < 4; i++) {
                objAllCols[i].remove();
            }
            document.getElementById("slider-gap-row").disabled = false;            
        }
    }

    else if (selectedValue==="row-three") {
        // 3 to 9. Treble current content
        if (objAllCols.length === 3) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            document.getElementById("slider-gap-row").disabled = false;            
        }

        // 6 to 9. Double and remove 3.
        if (objAllCols.length === 6) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            for (let i = 0; i < 3; i++) {
                objRowOne.firstElementChild.remove();
            }
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            document.getElementById("slider-gap-row").disabled = false;            
        }

        // 4 to 12. Treble current content
        if (objAllCols.length === 4) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML + objRowOne.innerHTML;
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
            document.getElementById("slider-gap-row").disabled = false;            
        }

        // 8 to 12. Double and remove 4.
        if (objAllCols.length === 8) {
            let objRowOne = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
            objRowOne.innerHTML = objRowOne.innerHTML + objRowOne.innerHTML;
            for (let i = 0; i < 4; i++) {
                objRowOne.firstElementChild.remove();
            }
            iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = objRowOne.innerHTML;
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
    const objCols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
    
    for (let i = 0; i <= 10; i++) {
        objCols.classList.remove("cols-gap-"+i);
    }
    objCols.classList.add("cols-gap-"+selectedValue);
}

document.querySelector("#slider-gap-row").addEventListener("change", setRowGap);

function setRowGap() {
    let selectedValue = document.getElementById("slider-gap-row").value
    const objCols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");
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
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.remove("text-center");
    }
    else if (selectedValue==="center") {
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.add("text-center");
    }
}

/*
//////////////// COLUMNS WIDTH ON MOBILES ///////////////
*/

document.querySelector("#form_cols_mobile").addEventListener("change", doColsMobileWidth);

function doColsMobileWidth() {
    const rbs = document.querySelectorAll("input[name='switch_cols_mobile']");
    let selectedValue;

    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }

    if (selectedValue==="cols-one") {
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.remove("mobile-col-2");
        console.log("remove mobile-col-2");
    }

    if (selectedValue==="cols-two") {
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").classList.add("mobile-col-2");
        console.log("add mobile-col-2")
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
        const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
    
        let arrColBadgeLoop = [];

        if (objCols.length === 3) {
            for (let i = 0; i < (arrColBadge.length-1); i++) {
                arrColBadgeLoop[i] = arrColBadge[i];
            }
        }

        else if (objCols.length === 6) {
            const arrColBadgeTemp = [];
            for (let i = 0; i < (arrColBadge.length-1); i++) {
                arrColBadgeTemp[i] = arrColBadge[i];
            }
            arrColBadgeLoop = [].concat(...Array(2).fill(arrColBadgeTemp));
        }

        else if (objCols.length === 9) {
            const arrColBadgeTemp = [];
            for (let i = 0; i < (arrColBadge.length-1); i++) {
                arrColBadgeTemp[i] = arrColBadge[i];
            }
            arrColBadgeLoop = [].concat(...Array(3).fill(arrColBadgeTemp));
        }
    
        else if (objCols.length === 4) {
            for (let i = 0; i < (arrColBadge.length); i++) {
                arrColBadgeLoop[i] = arrColBadge[i];
            }
        }

        else if (objCols.length === 8) {
            const arrColBadgeTemp = [];
            for (let i = 0; i < (arrColBadge.length); i++) {
                arrColBadgeTemp[i] = arrColBadge[i];
            }
            arrColBadgeLoop = [].concat(...Array(2).fill(arrColBadgeTemp));
        }

        else if (objCols.length === 12) {
            const arrColBadgeTemp = [];
            for (let i = 0; i < (arrColBadge.length-1); i++) {
                arrColBadgeTemp[i] = arrColBadge[i];
            }
            arrColBadgeLoop = [].concat(...Array(4).fill(arrColBadgeTemp));
        }

        // Test for figures
        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] figure")) {
            const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] figure")
            let el_fig;
            // Loop through figures
            for (let i = 0; i < objFigs.length; i++) {
                el_fig = objFigs[i]; 
                el_fig.insertAdjacentHTML("afterend", arrColBadgeLoop[i]);
            }
            document.getElementById("show-cols-badge").style.display="flex";        
        } 

        // Test for sub-headings
        else if ( (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) || (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']") ))  {
            let objH3;
            if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) {
                objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] h3");
            }
            else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']")) {
                objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']");
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
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] p")) {
            const objParas = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] p");
            let el_para;
            // Loop through paragraphs
            for (let i = 0; i < objParas.length; i++) {
                el_para = objParas[i]; 
                el_para.insertAdjacentHTML("beforebegin", arrColBadgeLoop[i]);
            }
            document.getElementById("show-cols-badge").style.display="flex";
        }
    
        // Test for lists
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul")) {
            const objULs = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul")
            let el_li;
            // Loop through lists
            for (let i = 0; i < objULs.length; i++) {
                el_li = objULs[i]; 
                el_li.insertAdjacentHTML("beforebegin", arrColBadgeLoop[i]);
            }
            document.getElementById("show-cols-badge").style.display="flex";
        }
    
        else {
            const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
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

    const objBadges = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] .badge"); 
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
    if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] .badge")) {
        const colsBadge = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] .badge");
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
        const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
        let arrContent = [];

        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-3")) {
            for (let i = 0; i < content_h3_col_3.length; i++) {
                arrContent[i] = content_h3_col_3[i];
            }
        }
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
            for (let i = 0; i < content_h3_col_4.length; i++) {
                arrContent[i] = content_h3_col_4[i];
            }
        }

        let arrContentLoop = [];

        if (objCols.length === 3) {
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentLoop[i] = arrContent[i];
            }
        }

        else if (objCols.length === 6) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
        }

        else if (objCols.length === 9) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
        }

        else if (objCols.length === 4) {
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentLoop[i] = arrContent[i];
            }
        }

        else if (objCols.length === 8) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
        }

        else if (objCols.length === 12) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(4).fill(arrContentTemp));
        }

        // Test for figures (images or icons) and NO badge
        if ( (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] figure")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] .badge") ) ) {
            const objFigs = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] figure")
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
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] .badge")) {
            
            const objBadges = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] .badge");
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
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] p")) {
            const objParas = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] p");
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
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul")) {
            const objULs = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul")
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
            const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
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
    if ( (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) || (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']")) ) {
        document.getElementById("btn_cols_h3").disabled=true;
        let objH3;
        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) {
            objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] h3");
        }
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']")) {
            objH3 = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] a[class^='col-']");
        }
        else (objH3 = "");        
        
        // Loop through H3 sub-headings in columns
        for (let i = 0; i < objH3.length; i++) {
            objH3[i].remove();
        }
        iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']").innerHTML.replaceAll('</figure>\n\t\t\t', '</figure>'); 

        // If no H3 and no text or lists
        if ( (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] p")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul"))) {
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

    const objAllCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
    let target;
    let col_no;

    if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-3")) {
        col_no = "col-3-h3";
    }

    else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
        col_no = "col-4-h3";
    }

    console.log("col_no: " + col_no);
    if (!document.querySelector("#cb_cols_links_h3").checked) {
        document.getElementById("hyperlinks-h3").style.display="none";
        document.getElementById("hyperlinks-h3-underline").style.display="none";
        document.getElementById("btn_cols_h3").disabled=false;

        for (let i = 0; i < (objAllCols.length); i++) {
            target = objAllCols[i].innerHTML;

            if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-3")) {
                objAllCols[i].innerHTML = target.replace(/(<a class=\"col-3-h3\">)/igm, '<h3>').replace(/<\/a>/igm, '<\/h3>');
            }
            else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
                objAllCols[i].innerHTML = target.replace(/(<a class=\"col-4-h3\">)/igm, '<h3>').replace(/<\/a>/igm, '<\/h3>');
            }
        }
    }

    else {
        document.getElementById("hyperlinks-h3").style.display="flex";
        document.getElementById("hyperlinks-h3-underline").style.display="flex";
        document.getElementById("btn_cols_h3").disabled=true;
       
        for (let i = 0; i < (objAllCols.length); i++) {
            target = objAllCols[i].innerHTML;

            if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-3")) {
                objAllCols[i].innerHTML = target.replace(/(<h3>)/igm, '<a class=\"col-3-h3\">').replace(/<\/h3>/igm, '<\/a>');
            }

            else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
                objAllCols[i].innerHTML = target.replace(/(<h3>)/igm, '<a class=\"col-4-h3\">').replace(/<\/h3>/igm, '<\/a>');
            }
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
        const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");

        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-3")) {
            for (let i = 0; i < content_paras_col_3.length; i++) {
                arrContent[i] = content_paras_col_3[i];
            }
        }
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
            for (let i = 0; i < content_paras_col_4.length; i++) {
                arrContent[i] = content_paras_col_4[i];
            }
        }

        let arrContentLoop = [];

        if (objCols.length === 3) {
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentLoop[i] = arrContent[i];
            }
        }

        else if (objCols.length === 6) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
        }

        else if (objCols.length === 9) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
        }

        if (objCols.length === 4) {
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentLoop[i] = arrContent[i];
            }
        }

        else if (objCols.length === 8) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
        }

        else if (objCols.length === 12) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(4).fill(arrContentTemp));
        }

        // No bullets
        if (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a.btn")) {
            const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
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
            let objButtons = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] a.btn");
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
        const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");

        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-3")) {
            for (let i = 0; i < content_list_col_3.length; i++) {
                arrContent[i] = content_list_col_3[i];
            }
        }
        else if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] .col-4")) {
            for (let i = 0; i < content_list_col_4.length; i++) {
                arrContent[i] = content_list_col_4[i];
            }
        }

        let arrContentLoop = [];

        if (objCols.length === 3) {
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentLoop[i] = arrContent[i];
            }
        }

        else if (objCols.length === 6) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
        }

        else if (objCols.length === 9) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(3).fill(arrContentTemp));
        }

        if (objCols.length === 4) {
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentLoop[i] = arrContent[i];
            }
        }

        else if (objCols.length === 8) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(2).fill(arrContentTemp));
        }

        else if (objCols.length === 12) {
            const arrContentTemp = [];
            for (let i = 0; i < (arrContent.length); i++) {
                arrContentTemp[i] = arrContent[i];
            }
            arrContentLoop = [].concat(...Array(4).fill(arrContentTemp));
        }

        // No bullets
        if (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] a.btn")) {
            const objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
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
            let objButtons = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] a.btn");
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
    const el_para = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] p");
    for (var i = 0 ; i < el_para.length ; i++) {
      el_para[i].remove();
    }
    const el_bullet = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] li");
    for (var i = 0 ; i < el_bullet.length ; i++) {
        el_bullet[i].remove();
    }
    const el_list = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul");
    for (var i = 0 ; i < el_list.length ; i++) {
        el_list[i].remove();
    }
    enableColButtons();
    document.getElementById("dd_cols_list_marker").disabled=true;
    document.getElementById("dd_cols_list_marker").value="0";
    document.getElementById("btn_cols_list_marker").disabled=true;
    
    // If no H3 and no text
    if ( (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] h3")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] p")) && (!iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul"))) {
        document.getElementById("cb_cols_shadows").disabled=true; 
        document.getElementById("cb_cols_shadows").checked=false; 
    }

    const arg1 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] p { color:";
    const arg2 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] li { color:";
    const arg3 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] li::marker";
    removeCSSTagPairs(arg1,arg2,arg3);
}

/*
//////////////// COLUMN LIST MARKER TYPES ////////////////////
*/

document.querySelector("#dd_cols_list_marker").addEventListener("change", doListMarker);

function doListMarker() {

    let opt = document.querySelector("#dd_cols_list_marker").value;
    let objCols = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-']");
    let el_col;

    // Regular
    if (opt==="0") {
        // Test for Font Awesome
        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul.fa-ul") ) {
            // Loop through spans in list items and remove italic nodes
            let objListSpans = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul li span");

            for (let i = 0; i < objListSpans.length; i++) {
                objListSpans[i].firstChild.remove();
            }
            // Loop through list items and remove spans
            let objListItems = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul li");

            for (let i = 0; i < objListItems.length; i++) {
                objListItems[i].firstChild.remove();
            }

            let objAllCols = iframe.contentWindow.document.querySelector("div[class^='flex-cols-']");

            objAllCols.innerHTML = objAllCols.innerHTML.replaceAll("<ul class=\"fa-ul\">", "<ul>");
        }
        document.getElementById("fa-icons").style.display ="none";
        document.getElementById("fa-circle-check").checked=true;
    }

    // Font Awesome
    else if (opt==="1") {
        // Test for regular list
        if (iframe.contentWindow.document.querySelector("div[class^='flex-cols-'] div[class^='col-'] ul:not(.fa-ul)") ) {
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
//////////////// COLUMN LIST MARKER COLORS ////////////////////
*/

document.querySelector("#form_switch_fa_icons").addEventListener("change", chooseListMarker);

function chooseListMarker() {
    const rbs = document.querySelectorAll("input[name='switch_fa_icons']");
    let objIcons = iframe.contentWindow.document.querySelectorAll("div[class^='flex-cols-'] div[class^='col-'] ul li span");
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

        // remove padding if also no shadows AND no borders
        if ( (!document.getElementById("cb_cols_shadows").checked) && (!document.getElementById("cb_cols_borders").checked) ) {
            el_cols.classList.remove("cols-padding");
        }

        // remove soft corners if also no shadows AND no borders
        if ( (!document.getElementById("cb_cols_shadows").checked) && (!document.getElementById("cb_cols_borders").checked) ) {
            el_cols.classList.remove("cb_cols_corners_soft");
            document.getElementById("cb_cols_corners_soft").disabled=true;
            document.getElementById("cb_cols_corners_soft").checked=false;
        }
        const arg1 = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] { background-color:";
        removeCSSTagPairs(arg1);
    }

    else {
        el_cols.classList.add("cols-background");
        el_cols.classList.add("cols-padding");
        document.getElementById("btn_cols_bg").disabled=false;
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

        // Enable corner and border options
        // document.getElementById("cb_cols_borders").disabled=false;
        // document.getElementById("cb_cols_borders").checked=false;
        // document.getElementById("cb_cols_corners_soft").checked=false;
        // document.getElementById("cb_cols_shadows").checked=false; 

        // remove padding if also no background AND no borders
        if ( (!document.getElementById("cb_cols_bg").checked) && (!document.getElementById("cb_cols_borders").checked) ) {
            el_cols.classList.remove("cols-padding");
        }

        // remove soft corners if also no background AND no borders
        if ( (!document.getElementById("cb_cols_bg").checked) && (!document.getElementById("cb_cols_borders").checked) ) {
            el_cols.classList.remove("cb_cols_corners_soft");
            document.getElementById("cb_cols_corners_soft").disabled=true;
            document.getElementById("cb_cols_corners_soft").checked=false;
        }
    }

    else {
        el_cols.classList.add("cols-padding");
        el_cols.classList.add("cols-shadows");
        el_cols.classList.add("cols-corners-soft");
        document.getElementById("cb_cols_borders").disabled=false;
        document.getElementById("cb_cols_borders").checked=false;

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

        // remove padding if also no background AND no shadows
        if ( (!document.getElementById("cb_cols_bg").checked) && (!document.getElementById("cb_cols_shadows").checked) ) {
            el_cols.classList.remove("cols-padding");
        }

        // remove soft corners if also no background AND no shadows
        if ( (!document.getElementById("cb_cols_bg").checked) && (!document.getElementById("cb_cols_shadows").checked) ) {
            el_cols.classList.remove("cb_cols_corners_soft");
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
        document.getElementById("cb_cols_shadows").disabled=true; 
        document.getElementById("cb_cols_shadows").checked=false; 
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

    console.log("selectedValue:" +selectedValue);
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