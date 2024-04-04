// // userRoles.js
// let currentUser = ''; // Initialize with an empty string

// const userRoles = {
//     RECEPTION: 'reception',
//     DOCTOR: 'doctor',
//     NURSE: 'nurse'
// };

class User {
    constructor(){
        this.role = null;
    }
}

const currentUser = new User();

function modifyNavbar() {
    const paymentLink = document.getElementsByClassName('payID');
    if (currentUser.role === "doctor" || currentUser.role === "nurse") {
        paymentLink.style.display = 'none'; // Hide payment link
    }
}

// export { currentUser, userRoles, modifyNavbar };
// export { currentUser, modifyNavbar };