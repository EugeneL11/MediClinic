// const apps = document.querySelectorAll('.apps');

// apps.forEach(app => {
//     app.addEventListener('click', function() {
//         const patientName = this.querySelector('.patientName').textContent;
//         const patientTime = this.querySelector('.patientTime').textContent;
//         const doctorName = this.querySelector('.doctorName').textContent;

//         document.getElementById('pName').textContent = patientName;
//         document.getElementById('pTime').textContent = patientTime;
//         document.getElementById('dName').textContent = doctorName;
//     });
// });


// JavaScript code for handling clicks on appointment boxes
document.addEventListener('DOMContentLoaded', function() {
    // Handle click on appointment box on the home screen
    document.querySelectorAll('.apps').forEach(app => {
        app.addEventListener('click', function() {
            // Extract information from the clicked apps box
            const patientName = this.querySelector('.patientName').textContent;
            const patientTime = this.querySelector('.patientTime').textContent;
            const doctorName = this.querySelector('.doctorName').textContent;

            // Store appointment details in localStorage
            localStorage.setItem('selectedAppointment', JSON.stringify({
                p_Name: patientName,
                p_Time: patientTime,
                d_Name: doctorName
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
    }
});
