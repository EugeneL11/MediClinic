// // userRoles.js
// let currentUser = ''; // Initialize with an empty string

// const userRoles = {
//     RECEPTION: 'reception',
//     DOCTOR: 'doctor',
//     NURSE: 'nurse'
// };

// Call modifyNavbar() to dynamically modify the navbar
window.addEventListener('DOMContentLoaded', () => {
    modifyNavbar();
});

class User {
    constructor(){
        this.role = null;
    }
}

const currentUser = new User();

function modifyNavbar() {
    const paymentLink = document.getElementById('payID');
    let currentUserNum = localStorage.getItem("role");
    console.log(currentUserNum); 
    if (currentUserNum == 2 || currentUserNum == 3) {
        paymentLink.style.display = 'none'; // Hide payment link
    }
}

// export { currentUser, userRoles, modifyNavbar };
// export { currentUser, modifyNavbar };