// for popup interaction
function random_chance() {
    var randomNum = Math.random();
    if (randomNum > 0.5) {
        return true;
    } else {
        return false;
    }
}

const dl_pop = document.getElementById("dlPop");
function dl_yes() {
    document.getElementById("download").style.width = "19vw";
    const chance = random_chance();
    if (chance) {
        dl_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="dl_return()">&times;</a>
            <p>File downloaded successfully!</p>
            <div class="confirmRow">
            <a href="#" class="aButton" onclick="dl_return()" style="padding: 5px 20px;">Close</a>
            </div>
        `;
    } else {
        dl_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="dl_return()">&times;</a>
            <p>File download failed!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="dl_return()" style="padding: 5px 20px;">Close</a>
            </div>
        `;
    }
}
function dl_return() {
    document.getElementById("download").style.width = "29vw";
    dl_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="dl_return()">&times;</a>
        <p>Are you sure you want to download this file?</p>
        <div class="confirmRow">
            <a href="#" class="noBtn" onclick="dl_return()" style="line-height: 17px;">No</a>
            <a class="yesBtn" onclick="dl_yes()" style="line-height: 17px;">Yes</a>
            </div>
    `;
}

// for the sorting dropdown
const history_field = document.getElementById("historyField");
function ddOptions() {
    const dd_select = document.getElementById("ddSelect");
    const selected_option = dd_select.value;
    if (selected_option === "Most Recent") {
        history_field.innerHTML = `
        <table style="width: 100%;">
        <tr>
          <th>Date & Time</th><th>Doctor Name</th><th>Reason</th>
        </tr>
        <tr> <td>December 10th, 11:00 AM 2023</td><td>Dr. Reese Rogers</td><td>Check-up</td> </tr>
        <tr> <td>July 2nd, 1:15 PM 2023</td><td>Dr. Andrew Apple</td><td>Stomach flu</td> </tr>
        <tr> <td>May 23rd, 3:50 PM 2023</td><td>Dr. Penny Pepper</td><td>Flu shot</td> </tr>
        <tr> <td>November 27th, 2:00 PM 2022</td><td>Dr. Reese Rogers</td><td>X-ray</td> </tr>
        <tr> <td>January 21st, 1:00 PM 2022</td><td>Dr. Donald Duck</td><td>Check-up</td> </tr>
        <tr> <td>June 19th, 2:30 PM 2021</td><td>Dr. Donald Duck</td><td>Skin rash</td> </tr>
        <tr> <td>March 2nd, 12:00 PM 2021</td><td>Dr. Penny Pepper</td><td>Check-up</td> </tr>
        <tr> <td>May 5th, 10:00 AM 2020</td><td>Dr. Penny Pepper</td><td>Flu shot</td> </tr>
        
      </table>
        `;
    } else if (selected_option === "Oldest") {
        history_field.innerHTML = `
        <table style="width: 100%;">
        <tr>
          <th>Date & Time</th><th>Doctor Name</th><th>Reason</th>
        </tr>
        <tr> <td>May 5th, 10:00 AM 2020</td><td>Dr. Penny Pepper</td><td>Flu shot</td> </tr>
        <tr> <td>March 2nd, 12:00 PM 2021</td><td>Dr. Penny Pepper</td><td>Check-up</td> </tr>
        <tr> <td>June 19th, 2:30 PM 2021</td><td>Dr. Donald Duck</td><td>Skin rash</td> </tr>
        <tr> <td>January 21st, 1:00 PM 2022</td><td>Dr. Donald Duck</td><td>Check-up</td> </tr>
        <tr> <td>November 27th, 2:00 PM 2022</td><td>Dr. Reese Rogers</td><td>X-ray</td> </tr>
        <tr> <td>May 23rd, 3:50 PM 2023</td><td>Dr. Penny Pepper</td><td>Flu shot</td> </tr>
        <tr> <td>July 2nd, 1:15 PM 2023</td><td>Dr. Andrew Apple</td><td>Stomach flu</td> </tr>
        <tr> <td>December 10th, 11:00 AM 2023</td><td>Dr. Reese Rogers</td><td>Check-up</td> </tr>
        
      </table>
        `;
    }
}

const editSaveB = document.getElementById("editSaveB");
const displayInfo = document.getElementById('displayInfo');
const editForm = document.getElementById('editForm');

let fullName1 = document.getElementById("fullName1");
let gender1 = document.getElementById("gender1");
let dob1 = document.getElementById("dob1");
let phoneNum1 = document.getElementById("phoneNum1");
let email1 = document.getElementById("email1");
let healthNum1 = document.getElementById("healthNum1");
let cond1 = document.getElementById("cond1");

let fullName2 = document.getElementById("fullName2");
let gender2 = document.getElementById("gender2");
let dob2 = document.getElementById("dob2");
let phoneNum2 = document.getElementById("phoneNum2");
let email2 = document.getElementById("email2");
let healthNum2 = document.getElementById("healthNum2");
let cond2 = document.getElementById("cond2");

function edit() {
    // this is switching to edit mode
    if (editSaveB.textContent === 'Edit') {
        editSaveB.textContent = 'Save';
        editForm.style.display = 'block';
        displayInfo.style.display = 'none';

        // Fill input fields with the content of static lines
        fullName2.value = fullName1.textContent.trim();
        gender2.value = gender1.textContent.trim();
        dob2.value = dob1.textContent.trim();
        phoneNum2.value = phoneNum1.textContent.trim();
        email2.value = email1.textContent.trim();
        healthNum2.value = healthNum1.textContent.trim();
        cond2.value = cond1.textContent.trim();
    } 
    // this is switching to save mode (display)
    else {
        editSaveB.textContent = 'Edit';
        editForm.style.display = 'none';
        displayInfo.style.display = 'block';
        displayInfo.style.gap = '20px';

        // Update static lines with the content of input fields
        fullName1.textContent = fullName2.value.trim();
        gender1.textContent = gender2.value.trim();
        dob1.textContent = dob2.value.trim();
        phoneNum1.textContent = phoneNum2.value.trim();
        email1.textContent = email2.value.trim();
        healthNum1.textContent = healthNum2.value.trim();
        cond1.textContent = cond2.value.trim();

        // Select all <li> elements within displayInfo
        const displayItems = displayInfo.querySelectorAll('li');
        // Loop through each <li> element and adjust the margin
        displayItems.forEach(item => {
            item.style.marginBottom = '15px';
        });
    }
}

// handle deleting a patient record
const del_pop = document.getElementById("delPop");
function del_yes() {
    document.getElementById("deletePopup").style.width = "25vw";
    del_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="del_return()">&times;</a>
        <p>Patient record successfully deleted!</p>
        <div class="confirmRow">
            <a href="#" class="aButton" onclick="del_return()">Close</a>
        </div>
    `;

    fullName1.textContent = "";
    gender1.textContent = "";
    dob1.textContent = "";
    phoneNum1.textContent = "";
    email1.textContent = "";
    healthNum1.textContent = "";
    cond1.textContent = "";

    const historyField = document.getElementById('historyField');
    const fields = historyField.querySelectorAll('.field');
    // Loop through each field element and set its content to an empty string
    fields.forEach(field => {
        field.textContent = '';
    });
    const historyField2 = document.getElementById('historyField2');
    const fields2 = historyField2.querySelectorAll('.field');
    // Loop through each field element and set its content to an empty string
    fields2.forEach(field2 => {
        field2.textContent = '';
    });

    const testResults1 = document.getElementById('testResults1');
    testResults1.style.display = "none";
    
    historyField.innerHTML = "";
    historyField2.innerHTML = "";

    // Select all elements with the class testRes
    const testResElements = document.querySelectorAll('.testRes');

    // Loop through each testRes element and set its HTML content to an empty string
    testResElements.forEach(element => {
        element.innerHTML = '';
    });
}
function del_return() {
    document.getElementById("deletePopup").style.width = "30vw";
    del_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="del_return()">&times;</a>
        <p>Are you sure you want to delete the record?</p>
        <div class="confirmRow">
            <a href="#" class="noBtn" onclick="del_return()">No</a>
            <a class="yesBtn" onclick="del_yes()">Yes</a>
        </div>
    `;
}

// handle creating a new patient record
const create_pop = document.getElementById("createPop");
function create_yes() {
    document.getElementById("createPopup").style.width = "26vw";
    create_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="create_return()">&times;</a>
        <p>New patient record successfully created!</p>
        <div class="confirmRow">
            <a href="#" class="aButton" onclick="create_return()">Close</a>
        </div>
    `;

    fullName1.textContent = "";
    gender1.textContent = "";
    dob1.textContent = "";
    phoneNum1.textContent = "";
    email1.textContent = "";
    healthNum1.textContent = "";
    cond1.textContent = "";

    const historyField = document.getElementById('historyField');
    const fields = historyField.querySelectorAll('.field');
    // Loop through each field element and set its content to an empty string
    fields.forEach(field => {
        field.textContent = '';
    });
    const historyField2 = document.getElementById('historyField2');
    const fields2 = historyField2.querySelectorAll('.field');
    // Loop through each field element and set its content to an empty string
    fields2.forEach(field2 => {
        field2.textContent = '';
    });

    const testResults1 = document.getElementById('testResults1');
    testResults1.style.display = "none";

    historyField.innerHTML = "";
    historyField2.innerHTML = "";

    // Select all elements with the class testRes
    const testResElements = document.querySelectorAll('.testRes');

    // Loop through each testRes element and set its HTML content to an empty string
    testResElements.forEach(element => {
        element.innerHTML = '';
    });

    // start on edit mode
    editSaveB.textContent = 'Edit';
    edit();
}
function create_return() {
    //Value found in CSS.
    document.getElementById("createPopup").style.width = "30vw";
    create_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="create_return()">&times;</a>
        <p>Are you sure you want to create a new record?</p>
        <div class="confirmRow">
            <a href="#" class="noBtn" onclick="create_return()">No</a>
            <a class="yesBtn" onclick="create_yes()">Yes</a>
        </div>
    `;
}

//To togggle visit history and upcoming appointments
function viewAppointment(val) {
    var vH = document.getElementById("vHistory");
    var uA = document.getElementById("uAppointments");
    if (val=='vHistory') {
        vH.style.display = "block";
        uA.style.display = "none";
    } else {
        vH.style.display = "none";
        uA.style.display = "block";
    }
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

const searchInput = document.getElementById("searchBox");
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
