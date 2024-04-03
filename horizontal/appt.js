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
    reset();
    redBlockCSS();
    //Values to avoid, so red at all times.
    // var array = [111, 115, 212, 214, 311, 316, 49, 414, 415, 512, 517, 610, 613, 616];

    for (var i = 1; i <= 6; i++)
        for (var j = 9; j <= 17; j++)
        {
            var val = "cell"+i+""+j;
            var cell = document.getElementById(val);
            var randomNumber = Math.random(); // Generate a random number between 0 and 1
            
            cell.classList.remove('green');
            cell.classList.remove('red');
            var concat = i+""+j;

            // if (array.includes(parseInt(concat)))
            //     cell.classList.add('red');
            // else
            // {
                if (randomNumber < 0.5)
                    cell.classList.add('green');
                else
                    cell.classList.add('red');
            // }
        }
    
    
}

function reset() {
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

    document.getElementById('patientInput').value = '';
    document.getElementById('reasonInput').value = '';
    document.getElementById("appDate").innerHTML = "Select a time on the calendar!";
    document.getElementById('editAppointment').style.display = "none";
    document.getElementById('cancelAppointment').style.display = "none";
    document.getElementById('book').style.display = "block";
}

//Changing schedule everytime a different doctor is selected
document.getElementById("doctorSelect").addEventListener("change", changeSchedule);

//Calling functions according to which type of cell was selected.
var timeCells = document.querySelectorAll('.timeBlock');
timeCells.forEach(function(cell) {
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

    var redFlag = false;
    var activeBusys = document.querySelectorAll('.timeBlock.activeBusy');
    activeBusys.forEach(function (cell) {
        cell.classList.remove('activeBusy');
        cell.classList.add('red');
        redFlag = true;
    });

    var time = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM" ]
    var day = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    var date = document.getElementById(day[dayNumber-1]).textContent;

    var string = time[timeNumber-9] +" on "+ day[dayNumber-1] + ", " + date;
    
    document.getElementById("cell"+dayNumber+""+timeNumber).classList.remove('green');
    document.getElementById("cell"+dayNumber+""+timeNumber).classList.add('activeDate');

    if(redFlag) //Won't reset if patient and reason inputs have information.
        redBlockCSS();

    document.getElementById("appDate").innerHTML = string;

    
    // if (length(document.getElementById('patientInput').value) == 0
    //     || length(document.getElementById('reasonInput').value) == 0)
    //     redBlockCSS();
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
    var reasons = ["Stomach flu", "Follow up", "Cold and Flu", "Vaccination", "Skin rash", "Check-up", "Stomach ache", "X-Ray", "Blood test", "Fever and cough"];
    
    greenBlockCSS();

    document.getElementById('patientDisplay').innerHTML = patientNames[Math.floor(Math.random() * patientNames.length)];
    document.getElementById('reasonDisplay').innerHTML = reasons[Math.floor(Math.random() * reasons.length)];
    document.getElementById("appDate").innerHTML = string;
}

function greenBlockCSS() {
    //Hiding the green relevant blocks.
    document.getElementById('patientTextbox').style.display = "none";
    document.getElementById('patientDisplay').style.display = "block";
    document.getElementById('reasonTextbox').style.display = "none";
    document.getElementById('reasonDisplay').style.display = "block";
    //Hiding green relevant buttons
    document.getElementById('editAppointment').style.display = "block";
    document.getElementById('cancelAppointment').style.display = "block";
    document.getElementById('book').style.display = "none";
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

//Adding this function to all greyCells.
var greyCells = document.querySelectorAll('.grey');
greyCells.forEach(function(cell) {
    cell.addEventListener('click', function() {
        // reset();
        // redBlockCSS();

        var anchor = document.querySelector('a[href="#greyPopup"]');
        if (anchor) {
            anchor.click();
        }
    });
});

const book_pop = document.getElementById("bookPopup");
function book_return(){
    //Value found in CSS
    document.getElementById("bookPopup").style.width = "32vw";
    book_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="book_return()">&times;</a>
        <p style="font-size: 20px;">Are you sure you want to book the appointment?</p>
        <div class="confirmRow">
            <a href="#" class="noBtn" onclick="book_return()">No</a>
            <a class="yesBtn" onclick="book_check()">Yes</a>
        </div>
    `;
}

function book_check() {
    var patientInput = document.getElementById("patientInput");
    var reasonInput = document.getElementById("reasonInput");
    var appDate = document.getElementById("appDate");

    if(patientInput.value === "" || reasonInput.value === ""
        || appDate.innerHTML === "Select a time on the calendar!")
        book_empty();
    else
        book_yes();
}

function book_empty() {
    document.getElementById("bookPopup").style.width = "25vw";
    book_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="book_return()">&times;</a>
        <p>Error! Make sure Date, Patient Name,</p>
        <p style="margin-top: -10px;">and Reason are filled out</p>
        <div class="confirmRow" style="margin-top: 0px;">
            <a href="#" class="aButton" onclick="book_return()">Close</a>
        </div>
    `;
}

function book_yes() {
    bookAppointment();

    document.getElementById("bookPopup").style.width = "24vw";
    book_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="book_return()">&times;</a>
        <p>Appointment successfully booked!</p>
        <div class="confirmRow">
            <a href="#" class="aButton" onclick="book_return()">Close</a>
        </div>
    `;
}

function bookAppointment() {
    //Need to check if these values are not null.
    var patientInput = document.getElementById("patientInput");
    var reasonInput = document.getElementById("reasonInput");

    //Converting the selected green cell to a red cell.
    var activeDates = document.querySelectorAll('.timeBlock.activeDate');
    activeDates.forEach(function (cell) {
        cell.classList.remove('activeDate');
        // cell.classList.add('red');
        cell.classList.add('activeBusy');
    });

    greenBlockCSS();
    var patientDisplay = document.getElementById("patientDisplay");
    patientDisplay.innerHTML = patientInput.value;

    var reasonDisplay = document.getElementById("reasonDisplay");
    reasonDisplay.innerHTML = reasonInput.value;

    return true;
}


function editAppointment(){

    var date = document.getElementById('appDate').innerHTML;
    redBlockCSS();
    
    var activeDates = document.querySelectorAll('.activeBusy');
    activeDates.forEach(function (cell) {
        cell.classList.remove('activeBusy');
        cell.classList.remove('red');
        cell.classList.add('activeDate');
    });
    
    document.getElementById('appDate').innerHTML = date;
    document.getElementById('patientInput').value = document.getElementById('patientDisplay').innerHTML;
    document.getElementById('reasonInput').value = document.getElementById('reasonDisplay').innerHTML;
}

// dynamic search
const patients = [
    { name: "Donald Duck", phone: "403-982-1486"},
    { name: "Fredrick Feet", phone: "587-156-7891"},
    { name: "Jimmy Jones", phone: "587-256-7892"},
    { name: "Karl Kones", phone: "403-356-7893"},
    { name: "Rachel Ruthers", phone: "403-456-7894"},
    { name: "Derek Deer", phone: "587-777-9999"},
    { name: "Yichen Year", phone: "403-101-0101"},
    { name: "Steven Seal", phone: "587-556-7895"},
    { name: "Eugene Eel", phone: "403-656-7896"},
    { name: "Zainab Zeal", phone: "587-756-7897"},
  ];

const searchInput = document.getElementById("patientInput");
const dropdown = document.getElementById("dropdown");

// filter patients based on search input
function filterPatients(input) {
  return patients.filter((patient) =>
    patient.name.toLowerCase().includes(input.toLowerCase()) || patient.phone.split('-').join('').includes(input)
  );
}

// update dropdown list with filtered patients
function updateDropdown(input) {
  dropdown.innerHTML = "";
  const filteredPatients = filterPatients(input);
  filteredPatients.forEach((patient) => {
    const option = document.createElement("span");
    option.textContent = `${patient.name} (${patient.phone})`;
    option.addEventListener("click", () => {
      searchInput.value = patient.name;
      dropdown.style.display = "none";
    });
    dropdown.appendChild(option);
  });
  dropdown.style.display = filteredPatients.length ? "block" : "none";
}

// Event listener for input changes
searchInput.addEventListener("input", (event) => {
  updateDropdown(event.target.value);
});

// Hide dropdown when clicked outside
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target) && event.target !== searchInput) {
    dropdown.style.display = "none";
  }
});


