let currentUserNum = localStorage.getItem("role");

// Call modifyNavbar() to dynamically modify the navbar
window.addEventListener('DOMContentLoaded', () => {
    currentUserNum = localStorage.getItem("role");
    modifyNavbar();
    bookApptRoles();
    patientRecordsRoles();
});

function modifyNavbar() {
    const paymentLink = document.getElementById('payID');
    console.log(currentUserNum); 
    if (currentUserNum == 2 || currentUserNum == 3) {
        paymentLink.style.display = 'none'; // Hide payment link
    }
}

function bookApptRoles() {
    const bookBtn = document.getElementById('book');
    const editAppt = document.getElementById('editAppointment');
    const cancelAppt = document.getElementById('cancelAppointment');
    if (currentUserNum == 2 || currentUserNum == 3) {
        bookBtn.style.visibility = 'hidden';
        editAppt.style.visibility = 'hidden';
        cancelAppt.style.visibility = 'hidden';
    }
}

function patientRecordsRoles() {
    const createPrBtn = document.getElementById('createPrBtn');
    const deletePrBtn = document.getElementById('deletePrBtn');
    const editBtn = document.getElementById('editSaveB');
    if (currentUserNum == 2 || currentUserNum == 3) {
        createPrBtn.style.visibility = 'hidden';
        deletePrBtn.style.visibility = 'hidden';
    }
    if (currentUserNum == 3) {
        editBtn.style.visibility = 'hidden';
    }
}