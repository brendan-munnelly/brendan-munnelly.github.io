

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
    
        for (const rb of rbs) {
            if (rb.checked) {
                color_code = rb.value;
                break;
            }
        }

        /* Section background */
        if (btn_id === "btn_section_bg") {
            newStyle = sectionClassName+ " { background-color: var("+color_code+") }\n";
            sub_string = sectionClassName+ " { background-color: ";
        }

        /* badge text */
        else if (btn_id === "btn_badge_text") {
            newStyle = sectionClassName+ " .badge { color: var("+color_code+") }\n";
            sub_string = ".badge { color";
        }

        /* badge background */
        else if (btn_id === "btn_badge_bg") {
            newStyle = sectionClassName+ " .badge { background-color: var("+color_code+") }\n";
            sub_string = ".badge { background-color";
        }        

        /* h2 main heading */
        else if (btn_id === "btn_h2_text") {
            newStyle = sectionClassName+ " > h2 { color: var("+color_code+") }\n";
            sub_string = "h2 { color:"
        }

        /* h2 main heading highlight text */
        else if (btn_id === "btn_h2_highlight") {
            newStyle = sectionClassName+ " > h2 span.highlight { color: var("+color_code+") }\n";
            sub_string = "h2 span.highlight";
        }

        /* h2 main heading bottom border */
        else if (btn_id === "btn_h2_border") {
            newStyle = sectionClassName+ " > h2.heading-underline::after { background-color: var("+color_code+") }\n";
            sub_string = "h2.heading-underline";
        }

        /* h3 sub heading */
        else if (btn_id === "btn_h3_text") {
            newStyle = sectionClassName+ " h3 { color: var("+color_code+") }\n";
            sub_string = " h3 {";
        }

        /* Section paragraphs text */
        else if (btn_id === "btn_para_text") {
            newStyle = sectionClassName+ " p { color: var("+color_code+") }\n"; 
            sub_string = " p {";
        }

        /* Section paragraphs text */
        else if (btn_id === "btn_list_text") {
            newStyle = sectionClassName+ " ul li { color: var("+color_code+") }\n"; 
            sub_string = " ul li {";
        }

        /* List marker */
        else if (btn_id === "btn_list_marker") {
            newStyle = sectionClassName+ " li::marker, "+sectionClassName+ " ul.fa-ul li span.fa-li i { color: var("+color_code+") }\n"; 
            sub_string = "li::marker";
        }
        
        /* === Buttons === */

        /* Text colour: passive */
        else if (btn_id === "btn_cols_text_passive_1") {
            // Get class of buttons
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(1):link,\n"+sectionClassName+" .container-btn a.btn:nth-child(1):visited { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):visited { color";
        }

        /* Text colour: active */
        else if (btn_id === "btn_cols_text_active_1") {
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(1):focus,\n"+sectionClassName+" .container-btn a.btn:nth-child(1):hover,\n"+sectionClassName+" .container-btn a.btn:nth-child(1):active { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):active { color";
        }

        /* Background colour: passive */
        else if (btn_id === "btn_cols_bg_passive_1") {
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(1):link,\n"+sectionClassName+" .container-btn a.btn:nth-child(1):visited { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):visited { background-color";
        }

        /* Background colour: active */
        else if (btn_id === "btn_cols_bg_active_1") {
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(1):focus,\n"+sectionClassName+" .container-btn a.btn:nth-child(1):hover,\n"+sectionClassName+" .container-btn a.btn:nth-child(1):active { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):active { background-color";
        }

        /* Border colour: passive */
        else if (btn_id === "btn_cols_border_passive_1") {
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(1):link,\n"+sectionClassName+" .container-btn a.btn:nth-child(1):visited { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):visited { border-color";
        }

        /* Border colour: active */
        else if (btn_id === "btn_cols_border_active_1") {
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(1):focus,\n"+sectionClassName+" .container-btn a.btn:nth-child(1):hover,\n"+sectionClassName+" .container-btn a.btn:nth-child(1):active .container-btn { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(1):active { border-color";
        }

        /* Text colour: passive */
        else if (btn_id === "btn_cols_text_passive_2") {
            // Get class of buttons
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(2):link,\n"+sectionClassName+" .container-btn a.btn:nth-child(2):visited { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):visited { color";
        }

        /* Text colour: active */
        else if (btn_id === "btn_cols_text_active_2") {
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(2):focus,\n"+sectionClassName+" .container-btn a.btn:nth-child(2):hover,\n"+sectionClassName+" a.btn:nth-child(2):active { color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):active { color";
        }

        /* Background colour: passive */
        else if (btn_id === "btn_cols_bg_passive_2") {
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(2):link,\n"+sectionClassName+" .container-btn a.btn:nth-child(2):visited { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):visited { background-color";
        }

        /* Background colour: active */
        else if (btn_id === "btn_cols_bg_active_2") {
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(2):focus,\n"+sectionClassName+" .container-btn a.btn:nth-child(2):hover,\n"+sectionClassName+" .container-btn a.btn:nth-child(2):active { background-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):active { background-color";
        }

        /* Border colour: passive */
        else if (btn_id === "btn_cols_border_passive_2") {
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(2):link,\n"+sectionClassName+" .container-btn a.btn:nth-child(2):visited { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):visited { border-color";
        }

        /* Border colour: active */
        else if (btn_id === "btn_cols_border_active_2") {
            newStyle = sectionClassName+" .container-btn a.btn:nth-child(2):focus,\n"+sectionClassName+" .container-btn a.btn:nth-child(2):hover,\n"+sectionClassName+" a.btn:nth-child(2):active .container-btn { border-color: var("+color_code+") }\n\n";
            sub_string = ".container-btn a.btn:nth-child(2):active { border-color";
        }

        /* Icons colour */
        else if (btn_id === "btn_icon_color") {
            newStyle =  sectionClassName+" div[class^='flex-cols-'] div[class^='col-'] figure.icon { color: var("+color_code+") }\n";
            sub_string = "figure.icon";
        }

        /* Photos overlay textbox color */
        else if (btn_id === "btn_cols_img_overlay_color_text") {
            newStyle = sectionClassName+" div[class^='flex-cols-'] div[class^='col-'] figure .cols-img-textbox { color: var("+color_code+") }\n";
            sub_string = "figure.icon";
        }

        /* Photos overlay textbox background color */
        else if (btn_id === "btn_cols_img_overlay_color_bg") {
            newStyle = sectionClassName+" div[class^='flex-cols-'] div[class^='col-'] figure .cols-img-textbox { background-color: var("+color_code+") }\n";
            sub_string = "figure.icon";
        }
        // console.log(sub_string);
        console.log(newStyle);
        doUpdateArray(sub_string,newStyle);      
    }

