let patientName;
let patientTime;
let doctorName;
// JavaScript code for handling clicks on appointment boxes
document.addEventListener('DOMContentLoaded', function() {
    // Handle click on appointment box on the home screen
    document.querySelectorAll('.apps').forEach(app => {
        app.addEventListener('click', function() {
            // Extract information from the clicked apps box
            patientName = this.querySelector('.patientName').textContent;
            patientTime = this.querySelector('.patientTime').textContent;
            doctorName = this.querySelector('.doctorName').textContent;
            //Randomly generating a reason for the check-in.
            var reasons = ["Stomach flu", "Follow up", "Cold and Flu", "Vaccination", "Skin rash", "Check-up", "Stomach ache", "X-Ray", "Blood test", "Fever and cough"];
            var rReason = reasons[Math.floor(Math.random() * reasons.length)];

            // Store appointment details in localStorage
            localStorage.setItem('selectedAppointment', JSON.stringify({
                p_Name: patientName,
                p_Time: patientTime,
                d_Name: doctorName,
                r_Reason: rReason
            }));

            // Redirect to the check-in screen
            window.location.href = 'checkIn.html';
        });
    });

    // Handle displaying appointment details on the check-in screen
    const selectedAppointment = JSON.parse(localStorage.getItem('selectedAppointment'));
    if (selectedAppointment) {
        document.getElementById('pName').textContent = selectedAppointment.p_Name;
        document.getElementById('pTime').textContent = selectedAppointment.p_Time;
        document.getElementById('dName').textContent = selectedAppointment.d_Name;
        document.getElementById('rReason').textContent = selectedAppointment.r_Reason;
    }
});


// handling health care number verification
let verFlag = false;
const ver_msg = document.getElementById("verMsg");
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('verifyNum').addEventListener('click', function() {
        let healthCare_Num = document.getElementById('healthCareNum').value;
        if (healthCare_Num === '12345678') {
            verFlag = true;
            ver_msg.innerHTML = "Verification successful!";
        } else {
            verFlag = false;
            ver_msg.innerHTML = "Verification failed. Please try again."
        }
    });
});

// handling checking in
const checkIn_pop = document.getElementById("checkInPop");
function checkIn_yes() {
    if (verFlag === true) {
        checkIn_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="checkIn_return()">&times;</a>
            <p>Patient Successfully checked in!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="checkIn_return()">Close</a>
            </div>
        `;
    } else {
        checkIn_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="checkIn_return()">&times;</a>
            <p>Patient check in falied. Please enter a valid health care number.</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="checkIn_return()">Close</a>
            </div>
        `;
    }
}
function checkIn_return() {
    checkIn_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="checkIn_return()">&times;</a>
        <p>Are you sure you want to check the patient in?</p>
        <div class="confirmRow">
            <a href="#" class="noBtn" onclick="checkIn_return()">No</a>
            <a class="yesBtn" onclick="checkIn_yes()">Yes</a>
        </div>
    `;
}