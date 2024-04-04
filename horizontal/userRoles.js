let currentUserNum = localStorage.getItem("role");

//Nav bar
window.addEventListener('DOMContentLoaded', () => {
    const paymentLink = document.getElementById('payID');
    console.log(currentUserNum); 
    if (currentUserNum == 2 || currentUserNum == 3) {
        paymentLink.style.display = 'none'; // Hide payment link
    }
});

//Appointments
window.addEventListener('DOMContentLoaded', () => {
    const bookBtn = document.getElementById('book');
    const editAppt = document.getElementById('editAppointment');
    const cancelAppt = document.getElementById('cancelAppointment');
    if (currentUserNum == 2 || currentUserNum == 3) {
        bookBtn.classList.add("hiddenElement");
        editAppt.classList.add("hiddenElement");
        cancelAppt.classList.add("hiddenElement");
    }
});

//Patient Records
window.addEventListener('DOMContentLoaded', () => {
    let currentUserNum = localStorage.getItem("role");
    const createPrBtn = document.getElementById('createPrBtn');
    const deletePrBtn = document.getElementById('deletePrBtn');
    const editBtn = document.getElementById('editSaveB');

    if (currentUserNum == 2 || currentUserNum == 3) {
        createPrBtn.classList.add("hiddenElement");
        deletePrBtn.classList.add("hiddenElement");
    }
    if (currentUserNum == 3) {
        editBtn.style.display = 'none';
        editBtn.classList.add("hiddenElement");
    }
});

//Check-in
window.addEventListener('DOMContentLoaded', () => {
    const hcTitle = document.getElementById('hcTitle');
    const hcTextbox = document.getElementById('healthCareNum');
    const verifyBtn = document.getElementById('verifyNum');
    const checkInBtn = document.getElementById('checkInBtn');

    if (currentUserNum == 2 || currentUserNum == 3) {
        console.log("doctor or nurse");
        hcTitle.style.visibility = 'hidden';
        hcTextbox.style.visibility = 'hidden';
        verifyBtn.style.visibility = 'hidden';
        checkInBtn.style.visibility = 'hidden';
    }
});