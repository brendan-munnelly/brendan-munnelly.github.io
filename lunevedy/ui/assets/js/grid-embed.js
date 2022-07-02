// GLOBAL VARIABLES

// Class names of columns in grid: .col-2, .col-3 or .col-4
let col_no;
if (document.querySelector('.col-2')) { col_no = ".col-2" }
else if (document.querySelector('.col-3')) { col_no = ".col-3" }
else if (document.querySelector('.col-4')) { col_no = ".col-4" }

// Number column blocks to loop through
let col_count = document.querySelectorAll(col_no).length;

console.log("col_no: "+col_no);
console.log("col_count: "+col_count);



