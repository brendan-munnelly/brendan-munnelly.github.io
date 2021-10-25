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
//////////////// SECTION: CLASS NAMES ///////////////
*/

// Get current section class

let section_class = "style-one";
document.querySelector("#dd_className").addEventListener("change", doClassName);

function doClassName() {

    let opt = document.querySelector("#dd_className").value;
    const el_section = document.querySelector("section");

    if ( opt==="0") {
        removeClassNames();
        el_section.classList.add("style-one");
        section_class = "style-one";
    }
    
    else if ( opt==="1") {
        removeClassNames();
        el_section.classList.add("style-two");
        section_class = "style-two";
    }

    else if ( opt==="2") {
        removeClassNames();
        el_section.classList.add("style-three");
        section_class = "style-three";
    }

    else if ( opt==="3") {
        removeClassNames();
        el_section.classList.add("style-four");
        section_class = "style-four";
    }
}

function removeClassNames() {
    const el_section = document.querySelector("section");
    el_section.classList.remove("style-one");
    el_section.classList.remove("style-two");
    el_section.classList.remove("style-three");
    el_section.classList.remove("style-four");
}


/*
//////////////// SECTIONS: BACKGROUND COLOUR ///////////////
*/
    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // On click style button 
    let all_btns = document.querySelectorAll('.btn_style');
    all_btns.forEach(el => el.addEventListener('click', event => {
        // get button id
        btn_id = event.target.id.toString();
        modal.style.display = "block";
    }));

    document.querySelector("#picker-box").addEventListener("click", getColorID);
      
    function getColorID() {
        if (event.target.id.toString() !="") {
            console.log("id not nothing");
            let newStyle;
            if (btn_id === "btn_bg") {
                newStyle = "."+section_class+" { background-color: var("+event.target.id+") }";
            }
            else if (btn_id === "btn_subhead") {
                newStyle = "."+section_class+" h2 { color: var("+event.target.id+") } \n." +section_class+" h3 { color: var("+event.target.id+") } \n."+section_class+" .upper-label { color: var("+event.target.id+") }"; 
            }

            else if (btn_id === "btn_text") {
                newStyle = "."+section_class+" p { color: var("+event.target.id+") } \n." +section_class+" li { color: var("+event.target.id+") }"; 

            }
            style = document.createElement('style');
            document.head.appendChild(style);
            // style.type = 'text/css';
            style.appendChild(document.createTextNode(newStyle));
            
        }
    }
/*
//////////////// SECTIONS: PARAGRAPHS ///////////////
*/

document.querySelector("#dd_paraNos").addEventListener("change", doParaNos);

function doParaNos() {
    let opt = document.querySelector("#dd_paraNos").value;
    para_nos = parseInt(opt) + 1;
    console.log("Para Nos: "+para_nos);
    removeH3();
    reduceParas();
    removeImage();
    removeVideo();
    resetImageEffects();
    removeLists();
    document.getElementById("vis_type_0").checked=true;
    document.getElementById("vid_type_0").checked=true;
    document.getElementById("dd_image_shadows").disabled=true;
    document.getElementById("dd_image_borders").disabled=true;
    document.getElementById("dd_image_corners").disabled=true;
    document.getElementById("dd_image_rotate").disabled=true;

    for (let i=1; i <= opt; i++) {
        document.querySelector("section p").insertAdjacentHTML("afterend", content_paras);
    }
    if (para_nos === 1) {
        document.getElementById("dd_h3").disabled=true;
    }
    else {
        document.getElementById("dd_h3").disabled=false;
    }
}

function reduceParas() {
    if (document.querySelector("p")) {
        const el_para = document.querySelectorAll("p");
        for (var i = 0 ; i < el_para.length ; i++) {
            el_para[i].remove();
        }
    }
    //Add one para
    document.querySelector("section h2").insertAdjacentHTML("afterend",content_paras);
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
        document.getElementById("dd_upperLabel_align").disabled=true;
    }
    // add
    else if (opt==="1") {
        removeUpperLabel();
        document.getElementById("dd_upperLabel_align").disabled=false;
        document.querySelector("h2").insertAdjacentHTML("beforebegin", "<div class=\"upper-label\">Category Label<\/div>\n");
    }
}

function removeUpperLabel() {
    if (document.querySelector('.upper-label')) {
        const upperLabel = document.querySelector('.upper-label');
        upperLabel.remove();
        document.getElementById("dd_upperLabel_align").value="0";
    } 
}

/*
//////////////// TEXT: UPPER CATEGORY LABEL ALIGN ABOVE H2 ///////////////
*/

document.querySelector("#dd_upperLabel_align").addEventListener("change", doUpperLabelAlign);

function doUpperLabelAlign() {
    let opt = document.querySelector("#dd_upperLabel_align").value;
    const el_upperlabel = document.querySelector('.upper-label')

    if (opt==="0") {
        el_upperlabel.classList.remove("text-center");
    }

    else if (opt==="1") {
        el_upperlabel.classList.add("text-center");
    }
}

/*
//////////////// TEXT: STANDFIRST ///////////////
*/

document.querySelector("#dd_standfirst").addEventListener("change", doStandFirst);

function doStandFirst() {
    let opt = document.querySelector("#dd_standfirst").value;
    const el_sf = document.querySelector('section p:nth-of-type(1)');
    if (opt==="0") {
       el_sf.classList.remove("standfirst");
    }

    else if (opt==="1") {
       el_sf.classList.add("standfirst");
    }
}

/*
//////////////// TEXT: H3 SUB-HEADINGS ////////////////////
*/

document.querySelector("#dd_h3").addEventListener("change", doH3);

    function doH3() {
        let opt = document.querySelector("#dd_h3").value;

        if (opt==="0") {
            removeH3();
        }
       
        else {
            removeH3();
            for (let i=2; i <= (para_nos); i++) {
                document.querySelector("section p:nth-of-type("+i+")").insertAdjacentHTML("beforebegin", content_h3);
            }
        }    
    }

    function removeH3() {
        if (document.querySelector("section h3")) {
            const elH3 = document.querySelectorAll("section h3");
            for (var i = 0 ; i < elH3.length ; i++) {
                elH3[i].remove();
            }
        }
    }

/*
//////////////// TEXT: LISTS  ///////////////
*/

document.querySelector("#dd_lists").addEventListener("change", doLists);

    function doLists() {
        let opt = document.querySelector("#dd_lists").value;

        if (opt==="0") {
            removeLists();
        }

        else if (opt==="1") {
            removeLists();
            document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", content_ul_short);
        }

        else if (opt==="2") {
            removeLists();
            document.querySelector("section p:last-of-type").insertAdjacentHTML("afterend", content_ul_long);
        }
    }

    function removeLists() {
        if (document.querySelector("section ul")) {
            const elUL = document.querySelectorAll("section ul");
            for (var i = 0 ; i < elUL.length ; i++) {
                elUL[i].remove();
            }
        }
    }

/*
//////////////// FAUX BUTTONS ////////////////////
*/
document.querySelector("#dd_buttons").addEventListener("change", doButtons);

    function doButtons() {
        // console.log("Buttons");
        let opt = document.querySelector("#dd_buttons").value;
        // remove
        if (opt==="0") {
            removeButtons();
        }

        // solid
        else if (opt==="1") {
            removeButtons();
            btn_class="btn-solid";
            i, col_count = doColsCount();
            if (document.querySelector(".cols-2-split")) {
                for (i = 2; i <= col_count; i += 3) {
                    el_cols = document.querySelector(".cols-2-split .col-2:nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
            else {
                for (i; i <= col_count; i++) {
                    el_cols = document.querySelector(col_no+":nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
        }

        // ghost
        else if (opt==="2") {
            removeButtons();
            btn_class="btn-ghost";
            i, col_count = doColsCount();
            if (document.querySelector(".cols-2-split")) {
                for (i = 2; i <= col_count; i += 3) {
                    el_cols = document.querySelector(".cols-2-split .col-2:nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
            else {
                for (i; i <= col_count; i++) {
                    el_cols = document.querySelector(col_no+":nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
        }

        // gradient
        else if (opt==="3") {
            removeButtons();
            btn_class="btn-gradient";
            i, col_count = doColsCount();
            if (document.querySelector(".cols-2-split")) {
                for (i = 2; i <= col_count; i += 3) {
                    el_cols = document.querySelector(".cols-2-split .col-2:nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
            else {
                for (i; i <= col_count; i++) {
                    el_cols = document.querySelector(col_no+":nth-child("+i+")");
                    addButons(el_cols,btn_class);
                }
            }
        }
    }

    function addButons(el_cols,btn_class) {
        console.log("Add buttons");
        console.log("el_cols:" +el_cols)
        const el_btn = document.createElement('a');
        el_btn.setAttribute("href", "#");
        el_btn.setAttribute("class", "btn "+btn_class);
        const el_icon = document.createElement('i');
        el_icon.setAttribute("class", "fas fa-shopping-cart");
        el_btn.append(el_icon);
        const btn_text = "Order Now";
        el_icon.insertAdjacentHTML('afterend', btn_text);;
        el_cols.append(el_btn);

        HTML_content = document.querySelector("#HTML-Content").innerHTML;
        HTML_content = HTML_content.replace("/n/t/t/t/", "");
        document.querySelector("#HTML-Content").innerHTML = HTML_content;
        
        document.getElementById("dd_buttons_style").value="0";
        document.getElementById("dd_buttons_style").disabled=false;
    }

    function removeButtons() {
        console.log("remove buttons");
        i, col_count = doColsCount();

        if (document.querySelector(".cols-split")) {
            for (i = 1; i <= col_count; i += 3) {
                const elButtons = document.querySelector('a.btn');
                elButtons.remove();
            }
        }
        else {
            for (i; i <= col_count; i++) {
                if (document.querySelector('a.btn')) {
                    const elButtons = document.querySelector('a.btn');
                    elButtons.remove();
                }
            }
        }
        document.getElementById("dd_buttons_style").disabled=true;
        document.getElementById("dd_buttons_style").value="0";
    }

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
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const el_btn = document.querySelector(col_no+":nth-child("+i+") a");
                el_btn.classList.add("btn-soft");
            }
        }

        // rounded
        else if (opt==="2") {
            removeButtonsStyle();
            i, col_count = doColsCount();
            for (i; i <= col_count; i++) {
                const el_btn = document.querySelector(col_no+":nth-child("+i+") a");
                el_btn.classList.add("btn-rounded");
            } 
        }
    }

    function removeButtonsStyle() {
        i, col_count = doColsCount();
        for (i; i <= col_count; i++) {
            const el_btn = document.querySelector(col_no+":nth-child("+i+") a");
            el_btn.classList.remove("btn-soft");
            el_btn.classList.remove("btn-rounded");
        }
    }

/*
//////////////// VISUALS: IMAGES  ///////////////
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
        removeImage();
        resetImageEffects();
    }

    else if (selectedValue==="pictures") {
        removeImage();
        resetImageEffects();
        document.querySelector("section p:nth-of-type(1)").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\//800x480-business-group.jpg\" alt=\"Business group\">\n\t<\/figure>\n");
        document.getElementById("dd_image_corners").disabled=false;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=false;
        document.getElementById("dd_image_rotate").disabled=false;
    }

    else if (selectedValue==="transparent") {
        removeImage();
        resetImageEffects();
        document.querySelector("section p").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\//800x480-product-sneaker.png\" alt=\"Product Sneaker\">\n\t<\/figure>\n");
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=true;
        document.getElementById("dd_image_rotate").disabled=false;
    }

    else if (selectedValue==="illustrations") {
        removeImage();
        resetImageEffects();
        document.querySelector("section p").insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<img src=\"assets\/img\//800x480-drawing.png\" alt=\"Product Sneaker\">\n\t<\/figure>\n");
        document.getElementById("dd_image_corners").disabled=true;
        document.getElementById("dd_image_shadows").disabled=false;
        document.getElementById("dd_image_borders").disabled=true;
        document.getElementById("dd_image_rotate").disabled=false;
    }
}

function removeImage() {
    if (document.querySelector('section figure img')) {
        const figureVis = document.querySelector('section figure img');
        figureVis.remove();
        HTML_Content = document.getElementById("HTML-Content").innerHTML;
        HTML_Content = HTML_Content.replace(/<figure><\/figure>/g,'');
        document.getElementById("HTML-Content").innerHTML = HTML_Content;
    } 
    document.getElementById("dd_image_corners").disabled=true;
    document.getElementById("dd_image_shadows").disabled=true;
    document.getElementById("dd_image_borders").disabled=true;
    document.getElementById("dd_image_rotate").disabled=true;
}

function resetImageEffects() {
    document.getElementById("dd_image_shadows").value="0";
    document.getElementById("dd_image_borders").value="0";
    document.getElementById("dd_image_corners").value="0";
    document.getElementById("dd_image_rotate").value="0";
    removeImageShadows();
    removeImageBorders();
}



/*
//////////////// VISUAL PROPERTIES ///////////////
*/

/* Image Drop Shadow */

document.querySelector("#dd_image_shadows").addEventListener("change", doImageShadows);

function doImageShadows() {
    console.log("Do image shadows");
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


/* Image Borders */

document.querySelector("#dd_image_borders").addEventListener("change", doImageBorders);

function doImageBorders() {
    console.log("Do image borders");
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

/* Image Corners */

document.querySelector("#dd_image_corners").addEventListener("change", doImageCorners);

function doImageCorners() {
    console.log("Do image corners");
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

/* Image Rotate */
document.querySelector("#dd_image_rotate").addEventListener("change", doImageRotate);

function doImageRotate() {
    console.log("Do image rotate");
    let opt = document.querySelector("#dd_image_rotate").value;

    if (opt==="0") {
        removeImageRotate();
    }

    else if (opt==="1") {
        const el_fig = document.querySelector('section');
        el_fig.classList.add("img-rotate-clock");
    }

    else if (opt==="2") {
        const el_fig = document.querySelector('section');
        el_fig.classList.add("img-rotate-cclock");
    }
}

function removeImageRotate() {
    const el_fig = document.querySelector('section');
    el_fig.classList.remove("img-rotate-clock");
    el_fig.classList.remove("img-rotate-cclock");
}

function resetImageEffects() {
    document.getElementById("dd_image_shadows").value="0";
    document.getElementById("dd_image_borders").value="0";
    document.getElementById("dd_image_corners").value="0";
    document.getElementById("dd_image_rotate").value="0";
    removeImageShadows();
    removeImageBorders();
}


/*
//////////////// VISUALS: VIDEOS  ///////////////
*/

document.querySelector("#vid-types-all").addEventListener("click", doVidType);

function doVidType() { 
    const rbs = document.querySelectorAll("#vid-types-all input[name='dd_vid']");
    let selectedValue;
    
    for (const rb of rbs) {
        if (rb.checked) {
            selectedValue = rb.value;
            break;
        }
    }
  
    if (selectedValue==="none") {
        removeVideo();
    }

    else if (selectedValue==="file") {
        removeVideo();
        if (document.querySelector("section p:nth-of-type(2)")) {
            document.querySelector('section p:nth-of-type(2)').insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<div class=\"container-video-file\">\n\t\t\t<video controls>\n\t\t\t\t<source src=\"assets\/videos\/whiteboard.mp4\" type=\"video\/mp4\">\n\t\t\t<\/video>\n\t\t</div>\n\t<\/figure>");
        }
        else {
            document.querySelector('section p:nth-of-type(1)').insertAdjacentHTML("afterend", "\n\n\t<figure><div class=\"container-video-file\">\n\t\t<video controls>\n\t\t\t\t<source src=\"assets\/videos\/whiteboard.mp4\" type=\"video\/mp4\">\n\t\t\t<\/video>\n\t\t</div>\n\t<\/figure>");
        }
    }

    else if (selectedValue==="yt") {
        removeVideo();
        if (document.querySelector("section p:nth-of-type(2)")) {
            document.querySelector('section p:nth-of-type(2)').insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<div class=\"container-video-yt\">\n\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t<\/iframe>\n\t\t<\/div>\n\t<\/figure>");
        }
        else {
            document.querySelector('section p:nth-of-type(1)').insertAdjacentHTML("afterend", "\n\n\t<figure>\n\t\t<div class=\"container-video-yt\">\n\t\t\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/RNKWoqDlbxc\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen>\n\t\t\t<\/iframe>\n\t\t\<\/div>\n\t\<\/figure>");
        }
    }
}

function removeVideo() {
    if (document.querySelector('section figure .container-video-file video')) {
        const figureVid = document.querySelector('figure .container-video-file video');
        figureVid.remove();
        HTML_Content = document.getElementById("HTML-Content").innerHTML;
HTML_Content = HTML_Content.replace(/<figure><div class=\"container-video-file\"><\/div><\/figure>/g,'');
        document.getElementById("HTML-Content").innerHTML = HTML_Content;
        console.log("remove video");
    } 

    else if (document.querySelector('figure .container-video-yt')) {
        const videoYT = document.querySelector('.container-video-yt');
        videoYT.remove();
        HTML_Content = document.getElementById("HTML-Content").innerHTML;
        HTML_Content = HTML_Content.replace(/<figure><div class=\"container-video-file\"><\/div><\/figure>/g,'');
        document.getElementById("HTML-Content").innerHTML = HTML_Content;
        console.log("remove video");
    } 
}


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
        
    console.log("copied");
}

function copyCSS() {
    var css = "", styletags = document.getElementsByTagName("style");
    for(var i = 0; i < styletags.length; i++) {
    css += "\n"+styletags[i].innerHTML }
    console.log(css);
    const el_css = document.createElement('textarea');
    el_css.value = css;
    hideMenus();

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

