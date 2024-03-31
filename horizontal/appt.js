window.onload = function() {
    loadWeek(new Date());
};

// exit popup on current page
function returnPage() {
    window.location.href = '#';
}

function loadWeek(passed) {
    element = document.getElementById("dateTable");
    var currentDate = new Date(passed);

    var currentDay = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    var monday = new Date(currentDate); // Copy current date
    var difference = currentDay - 1; // Calculate difference to Monday (assuming Sunday is the first day)
    if (difference < 0)
        difference = 6; // If it's Sunday, set the difference to 6 days
    monday.setDate(monday.getDate() - difference); // Set date to Monday

    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    var string = `<td class="emptyBlock"></td>`;
    for(var i=0; i<7 ; i++)
    {
        var monText = monday.toLocaleString('default', { month: 'short' });
        var monDate = monday.getDate();

        string+=`<td class="date" id="` + days[i] + `">`+ monText + ` ` + monDate + `</td>`;

        monday.setDate(monday.getDate() + 1);
    }

    element.innerHTML = string;
    changeSchedule();
}

function changeWeek(val) {
    var element = document.getElementById("Monday").textContent;
    var parts = element.split(' ');
    var month = parts[0]; // Month part (e.g., "Mar")
    var date = parseInt(parts[1], 10); // Date part (e.g., 4)

    var monthMap = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };

    var dateObject = new Date(2024, monthMap[month], date);

    if(val == "back")
        loadWeek(dateObject.setDate(dateObject.getDate() - 7));
    else if(val == "next")
        loadWeek(dateObject.setDate(dateObject.getDate() + 7));
}

function changeSchedule()
{
    var activeDates = document.querySelectorAll('.timeBlock.activeDate');
    activeDates.forEach(function (cell) {
        cell.classList.remove('activeDate');
        cell.classList.add('green');
    });

    var activeBusys = document.querySelectorAll('.timeBlock.activeBusy');
    activeBusys.forEach(function (cell) {
        cell.classList.remove('activeBusy');
        cell.classList.add('red');
    });

    //Values to avoid, so red at all times.
    var array = [111, 115, 212, 214, 311, 316, 49, 414, 415, 512, 517, 610, 613, 616];

    for (var i = 1; i <= 6; i++)
        for (var j = 9; j <= 17; j++)
        {
            var val = "cell"+i+""+j;
            var cell = document.getElementById(val);
            var randomNumber = Math.random(); // Generate a random number between 0 and 1
            
            cell.classList.remove('green');
            cell.classList.remove('red');
            var concat = i+""+j;

            if (array.includes(parseInt(concat)))
                cell.classList.add('red');
            else
            {
                if (randomNumber < 0.6)
                    cell.classList.add('green');
                else
                    cell.classList.add('red');
            }
        }
    
    document.getElementById('patientInput').value = '';
    document.getElementById('reasonInput').value = '';
    document.getElementById("appDate").innerHTML = "Select a time on the calendar!";
    document.getElementById('editAppointment').style.display = "none";
    document.getElementById('cancelAppointment').style.display = "none";
    document.getElementById('book').style.display = "block";
}

//Changing schedule everytime a different doctor is selected
document.getElementById("doctorSelect").addEventListener("change", changeSchedule);


var greenCells = document.querySelectorAll('.green');
greenCells.forEach(function(cell) {
    cell.addEventListener('click', function() {
        var cellPrefix = cell.id.substring(0, 4); //cell
        var dayNumber = cell.id.substring(4, 5); //7, column
        var timeNumber = cell.id.substring(5); //10, row
        
        // console.log(cellPrefix + ", "  + dayNumber + ", " + timeNumber);
        if(document.getElementById(cell.id).classList.contains('green'))
            updateDate(dayNumber, timeNumber);
        if(document.getElementById(cell.id).classList.contains('red'))
            randomInfo(dayNumber, timeNumber);
    });
});

//Selecting a green block.
function updateDate(dayNumber, timeNumber) {

    //Removing active date class from selected timeblocks, and adding a green class there.
    var activeDates = document.querySelectorAll('.timeBlock.activeDate');
    activeDates.forEach(function (cell) {
        cell.classList.remove('activeDate');
        cell.classList.add('green');
    });

    var activeBusys = document.querySelectorAll('.timeBlock.activeBusy');
    activeBusys.forEach(function (cell) {
        cell.classList.remove('activeBusy');
        cell.classList.add('red');
    });

    var time = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM" ]
    var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var date = document.getElementById(day[dayNumber-1]).textContent;

    var string = time[timeNumber-9] +" on "+ day[dayNumber-1] + ", " + date;
    
    document.getElementById("cell"+dayNumber+""+timeNumber).classList.remove('green');
    document.getElementById("cell"+dayNumber+""+timeNumber).classList.add('activeDate');
    
    redBlockCSS();
    document.getElementById("appDate").innerHTML = string;
}

function redBlockCSS() {
    //Hiding the red relevant blocks.
    document.getElementById('patientTextbox').style.display = "block";
    document.getElementById('patientDisplay').style.display = "none";
    document.getElementById('reasonTextbox').style.display = "block";
    document.getElementById('reasonDisplay').style.display = "none";
    //Hiding red relevant buttons
    document.getElementById('editAppointment').style.display = "none";
    document.getElementById('cancelAppointment').style.display = "none";
    document.getElementById('book').style.display = "block";

    document.getElementById('patientInput').value = '';
    document.getElementById('reasonInput').value = '';
    document.getElementById("appDate").innerHTML = "Select a time on the calendar!";
}

//Selecting a red block.
function randomInfo(dayNumber, timeNumber) {

    //Removing active date class from selected timeblocks, and adding a green class there.
    var activeBusys = document.querySelectorAll('.timeBlock.activeBusy');
    activeBusys.forEach(function (cell) {
        cell.classList.remove('activeBusy');
        cell.classList.add('red');
    });

    var activeDates = document.querySelectorAll('.timeBlock.activeDate');
    activeDates.forEach(function (cell) {
        cell.classList.remove('activeDate');
        cell.classList.add('green');
    });

    var time = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM" ]
    var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var date = document.getElementById(day[dayNumber-1]).textContent;

    var string = time[timeNumber-9] +" on "+ day[dayNumber-1] + ", " + date;
    
    document.getElementById("cell"+dayNumber+""+timeNumber).classList.remove('red');
    document.getElementById("cell"+dayNumber+""+timeNumber).classList.add('activeBusy');
    
    var patientNames = ["Donald Duck", "Frederick Feet", "Jimmy Jones", "Karl Kones", "Rachel Ruthers"];
    var reasons = ["Stomach flu", "Follow up", "Cold & Flue", "Vaccination", "Skin rash", "Check-up", "Stomach ache", "X-Ray", "Blood test", "Fever and cough"];
    
    //Hiding the green relevant blocks.
    document.getElementById('patientTextbox').style.display = "none";
    document.getElementById('patientDisplay').style.display = "block";
    document.getElementById('reasonTextbox').style.display = "none";
    document.getElementById('reasonDisplay').style.display = "block";
    //Hiding green relevant buttons
    document.getElementById('editAppointment').style.display = "block";
    document.getElementById('cancelAppointment').style.display = "block";
    document.getElementById('book').style.display = "none";

    document.getElementById('patientDisplay').innerHTML = patientNames[Math.floor(Math.random() * patientNames.length)];
    document.getElementById('reasonDisplay').innerHTML = reasons[Math.floor(Math.random() * reasons.length)];
    document.getElementById("appDate").innerHTML = string;
}

//Cancel appointment but need a popup
function cancelAppointment() {
    redBlockCSS();
    
    var activeDates = document.querySelectorAll('.timeBlock.activeBusy');
    activeDates.forEach(function (cell) {
        cell.classList.remove('activeBusy');
        cell.classList.remove('red');
        cell.classList.add('green');
    });
}

//Cancel appointment pop-up.
const cancel_pop = document.getElementById("canPop");
function cancel_yes() {
    cancelAppointment();
    document.getElementById("cancelPopup").style.width = "25vw";
    cancel_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="cancel_return()">&times;</a>
        <p>Appointment successfully cancelled!</p>
        <div class="confirmRow">
            <a href="#" class="aButton" onclick="cancel_return()">Close</a>
        </div>
    `;
}

function cancel_return(){
    //Value found in CSS.
    document.getElementById("cancelPopup").style.width = "32vw";
    cancel_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="cancel_return()">&times;</a>
        <p>Are you sure you want to cancel the appointment?</p>
        <div class="confirmRow">
            <a href="#" class="noBtn" onclick="cancel_return()">No</a>
            <a class="yesBtn" onclick="cancel_yes()">Yes</a>
        </div>
    `;
}