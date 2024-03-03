// script.js
function init() {
    // Call the function to generate time slots after the document has loaded
    function generateTimeSlots(time) {
        var table = document.getElementById("scheduleTable");
        
        var timeRow = document.createElement("tr");
        var timeTitleCell = document.createElement("td");
            if(time == "")
                timeTitleCell.classList.add("emptyBlock");
            else
                timeTitleCell.classList.add("timeTitle");
            
            timeTitleCell.textContent = time;
            timeRow.appendChild(timeTitleCell);
        
        for (var hour = 0; hour < 7; hour++) {
            timeBlock = document.createElement("td");
            if(time == "")
                timeBlock.classList.add("emptyBlock");
            else
                timeBlock.classList.add("timeBlock");
            timeRow.appendChild(timeBlock);
        }
    
        table.appendChild(timeRow);
    }
    
    //Generating 2 empty rows for spacing
    generateTimeSlots("");
    generateTimeSlots("");
    for(var i=8; i<18; i++)
    {   var m;
        if(i < 12)
            m = i + ":00 AM";
        else if (i == 12)
            m = i + ":00 PM";
        else
            m = (i - 12) + ":00 PM";

        generateTimeSlots(m);
    }
}
window.onload = init;
