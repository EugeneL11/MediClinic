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
    const chance = random_chance();
    if (chance) {
        dl_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="dl_return()">&times;</a>
            <p>File downloaded successfully!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="dl_return()">Close</a>
            </div>
        `;
    } else {
        dl_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="dl_return()">&times;</a>
            <p>File download failed!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="dl_return()">Close</a>
            </div>
        `;
    }
}
function dl_return() {
    dl_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="dl_return()">&times;</a>
        <p>Are you sure you want to download this file?</p>
        <div class="confirmRow">
            <a class="yesBtn aButton" onclick="dl_yes()">Yes</a>
            <a href="#" class="noBtn aButton" onclick="dl_return()">No</a>
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
            <div class="field">December 10th 11:00 AM 2023, Check-up</div>
            <div class="field">July 2nd, 1:15 PM 2023, Stomach flu</div>
            <div class="field">May 23rd, 3:50 PM 2023, Flu shot</div>
            <div class="field">November 27th, 2:00 PM 2022, X-ray</div>
            <div class="field">January 21st, 1:00 PM 2022, Check-up</div>
            <div class="field">June 19th, 2:30 PM 2021, Skin rash</div>
            <div class="field">March 2nd, 12:00 PM 2021, Check-up</div>
            <div class="field">May 5th, 10:00 AM 2020, Flu shot</div>
        `;
    } else if (selected_option === "Oldest") {
        history_field.innerHTML = `
            <div class="field">May 5th, 10:00 AM 2020, Flu shot</div>
            <div class="field">March 2nd, 12:00 PM 2021, Check-up</div>
            <div class="field">June 19th, 2:30 PM 2021, Skin rash</div>
            <div class="field">January 21st, 1:00 PM 2022, Check-up</div>
            <div class="field">November 27th, 2:00 PM 2022, X-ray</div>
            <div class="field">May 23rd, 3:50 PM 2023, Flu shot</div>
            <div class="field">July 2nd, 1:15 PM 2023, Stomach flu</div>
            <div class="field">December 10th 11:00 AM 2023, Check-up</div> 
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
    del_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="del_return()">&times;</a>
        <p>Patient record successfully deleted!</p>
        <div class="confirmRow">
            <a href="#" class="aButton" onclick="del_return()">Close</a>
        </div>
    `;

    
}
function del_return() {
    del_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="del_return()">&times;</a>
        <p>Are you sure you want to delete the record?</p>
        <div class="confirmRow">
            <a class="yesBtn aButton" onclick="del_yes()">Yes</a>
            <a href="#" class="noBtn aButton" onclick="del_return()">No</a>
        </div>
    `;
}