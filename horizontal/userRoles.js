// Call modifyNavbar() to dynamically modify the navbar
window.addEventListener('DOMContentLoaded', () => {
    modifyNavbar();
});

function modifyNavbar() {
    const paymentLink = document.getElementById('payID');
    let currentUserNum = localStorage.getItem("role");
    console.log(currentUserNum); 
    if (currentUserNum == 2 || currentUserNum == 3) {
        paymentLink.style.display = 'none'; // Hide payment link
    }
}