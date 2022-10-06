
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

        /* .col-1 badge text */
        else if (btn_id === "btn_col_1_badge_text") {
            newStyle = sectionClassName+ " .col-1-badge { color: var("+color_code+") }\n";
            sub_string = "col-1-badge { color";
        }

        /* .col-1 badge background */
        else if (btn_id === "btn_col_1_badge_bg") {
            newStyle = sectionClassName+ " .col-1-badge { background-color: var("+color_code+") }\n";
            sub_string = "col-1-badge { background-color";
        }        

        /* .col-1 h2 main heading */
        else if (btn_id === "btn_col_1_h2_text") {
            newStyle = sectionClassName+ " .col-1 h2 { color: var("+color_code+") }\n";
            sub_string = "col-1 h2 { color:"
        }

        /* .col-1 h2 main heading highlight text */
        else if (btn_id === "btn_col_1_h2_highlight") {
            newStyle = sectionClassName+ " .col-1 h2 span.highlight { color: var("+color_code+") }\n";
            sub_string = "col-1 h2 span.highlight";
        }

        /* .col-1 h2 main heading bottom border */
        else if (btn_id === "btn_col_1_h2_border") {
            newStyle = sectionClassName+ " .col-1 h2.heading-underline::after { background-color: var("+color_code+") }\n";
            sub_string = "heading-underline";
        }

        /* .col-1 h3 sub heading */
        else if (btn_id === "btn_col_1_h3_text") {
            newStyle = sectionClassName+ " .col-1 h3 { color: var("+color_code+") }\n";
            sub_string = "col-1 h3";
        }

        /* Columns badges: text */
        else if (btn_id === "btn_cols_badge_text") {
            newStyle = sectionClassName+ " .badge { color: var("+color_code+") }\n";
            sub_string = ".badge { color: ";
        }
        
        /* Columns badges: background */
        else if (btn_id === "btn_cols_badge_bg") {
            newStyle = sectionClassName+ " .badge { background-color: var("+color_code+") }\n";
            sub_string = ".badge { background-color: ";
        }
        
        /* Columns subheading */
        else if (btn_id === "btn_cols_h3") {
            newStyle = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] h3 { color: var("+color_code+") }\n";
            sub_string = sectionClassName+" div[class^='flex-cols-'] div[class^='col-'] h3";
        }
        
        /* Column text */
        else if (btn_id === "btn_cols_text") {
            newStyle = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] p { color: var("+color_code+") }\n" +sectionClassName+" div[class^='flex-cols-'] div[class^='col-'] li { color: var("+color_code+") }\n"; 
            sub_string = "div[class^='flex-cols-'] div[class^='col-'] p {";
        }

        /* List marker */
        else if (btn_id === "btn_cols_list_marker") {
            newStyle = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] li::marker,\n"+sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] ul.fa-ul li span.fa-li i { color: var("+color_code+") }\n"; 
            sub_string = "li::marker";
        }
        
        /* Column background */
        else if (btn_id === "btn_cols_bg") {
            newStyle = sectionClassName+ " div[class^='flex-cols-'] div[class^='col-'] { background-color: var("+color_code+") }\n";
            sub_string = "div[class^='flex-cols-'] div[class^='col-'] { background-color";
        }
        
        /* Column borders: colour */
        else if (btn_id === "btn_cols_borders_color") { 
            newStyle = sectionTheme+sectionClassName+" div[class^='flex-cols-'] div[class^='col-'] { border-color: var("+color_code+") }\n";
            console.log("newStyle: "+newStyle);
            sub_string = "cols-borders { border-color:"
        }            
        
        /* Column shadows: colour */
        else if (btn_id === "btn_cols_shadows_color") { 
            // get value of color code
            const styles = getComputedStyle(document.documentElement);
            const colorValue = styles.getPropertyValue(color_code);
            sub_string = "cols-shadows";
            let strRGB;
            if (color_code ==="--black-000") {
                strRGB = "rgba(0,0,0,0.4)";
            }
            else if (color_code ==="--white-000") {
                strRGB = "rgba(255,255,255,0.4)";
            }

            else {
                const hex2rgba = (hex, alpha = 1) => {
                    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
                    return `rgba(${r},${g},${b},${alpha})`;
                };
                strRGB = hex2rgba(colorValue, .4);
            }
        }

        /* === Buttons === */

        /* Text colour: passive */
        else if (btn_id === "btn_cols_text_passive") {
            // Get class of buttons
            newStyle = sectionClassName+" a.btn:link,\n"+sectionClassName+" a.btn:visited { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:visited { color";
        }

        /* Text colour: active */
        else if (btn_id === "btn_cols_text_active") {
            newStyle = sectionClassName+" a.btn:focus,\n"+sectionClassName+" a.btn:hover,\n"+sectionClassName+" a.btn:active { color: var("+color_code+") }\n\n";
            sub_string = "a.btn:active { color";
        }

        /* Background colour: passive */
        else if (btn_id === "btn_cols_bg_passive") {
            newStyle = sectionClassName+" a.btn:link,\n"+sectionClassName+" a.btn:visited { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:visited { background-color";
        }

        /* Background colour: active */
        else if (btn_id === "btn_cols_bg_active") {
            newStyle = sectionClassName+" a.btn:focus,\n"+sectionClassName+" a.btn:hover,\n"+sectionClassName+" a.btn:active { background-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:active { background-color";
        }

        /* Border colour: passive */
        else if (btn_id === "btn_cols_border_passive") {
            newStyle = sectionClassName+" a.btn:link,\n"+sectionClassName+" a.btn:visited { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:visited { border-color";
        }

        /* Border colour: active */
        else if (btn_id === "btn_cols_border_active") {
            newStyle = sectionClassName+" a.btn:focus,\n"+sectionClassName+" a.btn:hover,\n"+sectionClassName+" a.btn:active { border-color: var("+color_code+") }\n\n";
            sub_string = "a.btn:active { border-color";
        }

        /* Icons colour */
        else if (btn_id === "btn_icon_color") {
            newStyle = sectionClassName+" div[class^='flex-cols-'] div[class^='col-'] figure.icon { color: var("+color_code+") }\n";
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
        doUpdateArray(sub_string,newStyle);      
    }