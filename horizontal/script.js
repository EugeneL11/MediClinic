// script.js
function init() {
    // Call the function to generate time slots after the document has loaded
    
    function generateTimeSlots(d, i) {
        var table = document.getElementById("scheduleTable");
        
        var timeRow = document.createElement("tr");
        var timeTitleCell = document.createElement("td");
            if(d == "")
                timeTitleCell.classList.add("emptyBlock");
            else
                timeTitleCell.classList.add("timeTitle");
            
            timeTitleCell.textContent = d;
            timeRow.appendChild(timeTitleCell);
        
        for (var day = 0; day < 7; day++) {
            timeBlock = document.createElement("td");
            if(d == "")
                timeBlock.classList.add("emptyBlock");
            else
            {
                timeBlock.classList.add("timeBlock");
                timeBlock.classList.add("green");
            }
            
            idName = "cell" + (day+1) + "" + i;
            timeBlock.setAttribute("id", idName);
            timeBlock.addEventListener("mouseover", highlightRowCell((day+1), i));
            timeBlock.addEventListener("mouseout", unhighlightRowCell((day+1), i));
            timeRow.appendChild(timeBlock);
        }
    
        table.appendChild(timeRow);
    }

    //Generating 1 empty rows for spacing
    generateTimeSlots("");
    // for(var i=9; i<18; i++)
    // {   var m;
    //     if(i < 12)
    //         m = i + ":00 AM";
    //     else if (i == 12)
    //         m = i + ":00 PM";
    //     else
    //         m = (i - 12) + ":00 PM";

    //     generateTimeSlots(m, i);
    // }

    createCSS();
    // createAvailability();
}

window.onload = init;

function createCSS() {
    var element = document.getElementById("style");
    for (var d = 1; d <= 7; d++) {
        for (var t = 9; t < 18; t++) {
            if (d == 7 && t == 18)
                element.innerHTML += '#cell' + d + '' + t + ":hover ";
            else
                element.innerHTML += '#cell' + d + '' + t + ":hover, ";
        }
    }
    element.innerHTML += '{background-color: #C9D1F8; cursor: pointer;}';
}

function hoverIn(day, time) {
    cellID = "cell" + day + "" + time;
    document.getElementById("cell412").classList.add("cellHover");;
}

function hoverOut(day, time) {
    cellID = "cell" + day + "" + time;
    document.getElementById("cell412").classList.remove("cellHover");;
}

function highlightRowCell(day, time) {
    //divide 1st letter and the rest
    cellID = "cell" + day + "" + time;
    var element = document.getElementById(cellID);
    if(element == null)
        return;
    element.classList.add("cellHover");
}

function unhighlightRowCell(day, time) {
    //divide 1st letter and the rest
    cellID = "cell" + day + "" + time;
    var element = document.getElementById(cellID);
    if(element == null)
        return;
    element.classList.remove("cellHover");
}

//ARCHIVE code:
// function generateTimeSlots(d, i) {
//     var table = document.getElementById("scheduleTable");
    
//         if(d == "")
//             table.innerHTML+= '<tr><td class="emptyBlock"></td>';
//         else
//             table.innerHTML+= '<tr><td class="timeTitle">'+ d +'</td>';
    
//     for (var day = 0; day < 7; day++) {
//         idName = "cell" + (day+1) + "" + i;
//         if(d == "")
//             table.innerHTML+= '<td class="emptyBlock" id="'+idName+'" onmouseover="highlightRowCell('+(day+1)+','+ i+') onmouseout="unhighlightRowCell('+(day+1)+','+ i+')"></td>';
//         else
//             table.innerHTML+= '<td class="timeBlock" id="'+idName+'" onmouseover="highlightRowCell('+(day+1)+','+ i+') onmouseout="unhighlightRowCell('+(day+1)+','+ i+')"></td>';
//         table.innerHTML+= '</tr>';
//     }
// }