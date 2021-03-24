/*
//////////////// SET INITIAL PAGE WIDTH //////////////
*/

function setPageWidth() {
    if (document.querySelector("#HTML-content > .theme-light")) {
        document.querySelector(".theme-light:nth-child(1)").classList.remove("wrapper-narrow-flex");
        document.querySelector(".theme-light:nth-child(1)").classList.add("wrapper-wide-flex");
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
        document.querySelector(".col-1 > h1").insertAdjacentHTML("beforebegin", "\n\t\t\t\t<div class=\"upper-label\">Category Label<\/div>\n");
    }
    // reversed
    else if (opt==="2") {
        removeUpperLabel();
        document.querySelector(".col-1 > h1").insertAdjacentHTML("beforebegin", "\n\t\t\t\t<div class=\"upper-label-reversed\">Category Label<\/div>\n");
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
        document.querySelector(".col-1 > h1").innerText = "Lorem Malesuada Dolor";
    }
    // Long
    else if (opt==="1") {
        console.log("Go long");
        document.querySelector(".col-1 > h1").innerText = "Etiam tincidunt risus nec odio non blandit ipsum facilisis";
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
        const elH2 = document.querySelector(parentWrapper+" > .col-1 > h1");
        elH2.insertAdjacentHTML("afterend", "\n\t\t\t\t<h2>Etiam tincidunt risus nec odio sollicitudin, non blandit ipsum facilisis class aptent.<\/h2>\n");
    }
    // border-top
    else if (opt==="2") {
        removeH2();
        const elH2 = document.querySelector(parentWrapper+" > .col-1 > h1");
        elH2.insertAdjacentHTML("afterend", "\n\t\t\t\t<hr><h2>Etiam tincidunt risus nec odio sollicitudin, non blandit ipsum facilisis class aptent.<\/h2>\n");
    }
    // border-bottom
    else if (opt==="3") {
        removeH2();
        const elH2 = document.querySelector(parentWrapper+" > .col-1 > h1");
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

/*
//////////////// IMAGES  ///////////////
*/

document.querySelector("#dd_image_corners").addEventListener("change", doImageCorners);

document.getElementById("dd_image_corners").value="0";

function doImageCorners() {
    
    let opt = document.querySelector("#dd_image_corners").value;

    if (opt==="0") {
        for (i = 2; i <= col_count+1; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.remove("corner-soft");
        }
    }

    else if (opt==="1") {
        console.log("square corners")
        for (i = 2; i <= col_count+1; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.add("corner-soft");
        }
    }
}

document.querySelector("#dd_image_shadows").addEventListener("change", doImageShadows);

document.getElementById("dd_image_shadows").value="0";

function doImageShadows() {
    let opt = document.querySelector("#dd_image_shadows").value;

    if (opt==="0") {
        for (i = 2; i <= col_count+1; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            removeImageShadows();
        }
    }

    else if (opt==="1") {
        removeImageShadows();
        for (i = 2; i <= col_count+1; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.add("drop-shadow-faint");
        }
    }

    else if (opt==="2") {
        removeImageShadows();
        for (i = 2; i <= col_count+1; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.add("drop-shadow-heavy");
        }
    }
    else if (opt==="3") {
        removeImageShadows();
        for (i = 2; i <= col_count+1; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.add("drop-shadow-solid");
        }
    }
}

function removeImageShadows() {
    for (i = 2; i <= col_count+1; i++) {
        const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
        el_fig.classList.remove("drop-shadow-faint");
        el_fig.classList.remove("drop-shadow-heavy");
        el_fig.classList.remove("drop-shadow-solid");
    }
}

document.querySelector("#dd_image_borders").addEventListener("change", doImageBorders);

document.getElementById("dd_image_borders").value="0";

function doImageBorders() {
    let opt = document.querySelector("#dd_image_borders").value;

    if (opt==="0") {
        for (i = 2; i <= col_count+1; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.remove("border-thin");
            el_fig.classList.remove("border-thick");
        }
    }

    else if (opt==="1") {
        for (i = 2; i <= col_count+1; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.add("border-thin");
            el_fig.classList.remove("border-thick");
        }
    }

    else if (opt==="2") {
        for (i = 2; i <= col_count+1; i++) {
            const el_fig = document.querySelector(col_no+":nth-child("+i+") img");
            el_fig.classList.remove("border-thin");
            el_fig.classList.add("border-thick");
        }
    }
}


/*
//////////////// WEB PAGE ALIGNMENT  ///////////////
*/

document.querySelector("#align-center").addEventListener("click", centerAlignHTML);
document.querySelector("#align-left").addEventListener("click", leftAlignHTML);

function centerAlignHTML() {
    document.querySelector(".col-1:nth-child(1)").classList.add("text-center");
    console.log("centre align");
    for (i = 2; i <= col_count+1; i++) {
        const el = document.querySelector("#HTML-Content "+col_no+":nth-child("+i+")");
        el.classList.add("text-center");
    }
}

function leftAlignHTML() {
    document.querySelector(".col-1:nth-child(1)").classList.remove("text-center");
    for (i = 2; i <= col_count+1; i++) {
        const el = document.querySelector("#HTML-Content "+col_no+":nth-child("+i+")");
        el.classList.remove("text-center");
    }
}


/*
//////////////// ALIGNMENT: FULL-WIDTH COLUMN  ///////////////
*/

document.querySelector("#dd_align_full_width_column").addEventListener("change", doAlignFullWidthColumn);

document.getElementById("dd_align_full_width_column").value="0";
        
function doAlignFullWidthColumn() {
    let opt = document.querySelector("#dd_align_full_width_column").value;
    if (opt==="0") {
        console.log("Boo: "+opt);
        document.querySelector(".col-1").classList.remove("text-center");
    }
    else if (opt==="1") {
        console.log("Boo: "+opt);
        document.querySelector(".col-1").classList.add("text-center");
    }
}

/*
//////////////// WEB PAGE WIDTHS  ///////////////
*/

document.querySelector("#wide-cols").addEventListener("click", wideCols);
document.querySelector("#narrow-cols").addEventListener("click", narrowCols);

document.getElementById("wide-cols").checked=true;

function wideCols() {
    const firstChild = document.querySelector("#HTML-Content").firstElementChild;
    const secondChild = firstChild.firstElementChild;
    secondChild.classList.remove("wrapper-narrow-flex");
    secondChild.classList.add("wrapper-wide-flex");
    parentWrapper = ".wrapper-wide-flex";
}

function narrowCols() {
    const firstChild = document.querySelector("#HTML-Content").firstElementChild;
    const secondChild = firstChild.firstElementChild;
    secondChild.classList.remove("wrapper-wide-flex");
    secondChild.classList.add("wrapper-narrow-flex");
    parentWrapper = ".wrapper-narrow-flex";
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

// Fetch all the details element.
const details = document.querySelectorAll("details");

// Add the onclick listeners.
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    // Close all the details that are not targetDetail.
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});

document.querySelector("#btn_menu_one").addEventListener("click", closeMenuOne);
document.querySelector("#btn_menu_two").addEventListener("click", closeMenuTwo);
document.querySelector("#btn_menu_three").addEventListener("click", closeMenuThree);
document.querySelector("#btn_menu_four").addEventListener("click", closeMenuFour);
document.querySelector("#HTML-Content").addEventListener("click", closeMenuOne);
document.querySelector("#HTML-Content").addEventListener("click", closeMenuTwo);
document.querySelector("#HTML-Content").addEventListener("click", closeMenuThree);
document.querySelector("#HTML-Content").addEventListener("click", closeMenuFour);

function closeMenuOne() {
    const detail = document.querySelector("#details_one");
    detail.removeAttribute("open");
}

function closeMenuTwo() {
    const detail = document.querySelector("#details_two");
    detail.removeAttribute("open");
}

function closeMenuThree() {
    const detail = document.querySelector("#details_three");
    detail.removeAttribute("open");
}

function closeMenuFour() {
    const detail = document.querySelector("#details_four");
    detail.removeAttribute("open");
}

document.getElementById("dd_align_columns").value="0";

document.querySelector("#dd_align_columns").addEventListener("change", alignColumns);

function alignColumns() {

    let opt = document.querySelector("#dd_align_columns").value;

    if (opt==="0") {
        for (i = 2; i <= col_count+1; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i+")");
            el_col.classList.remove("text-center");
        }
    }

    else if (opt==="1") {
        for (i = 2; i <= col_count+1; i++) {
            const el_col = document.querySelector(col_no+":nth-child("+i+")");
            el_col.classList.add("text-center");
        }
    }

}


