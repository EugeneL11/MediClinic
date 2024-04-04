function modifyNavbar() {
    const paymentLink = document.getElementsByClassName('payID');
    let currentUserNum = localStorage.getItem("role");
    console.log(currentUserNum); 
    if (currentUserNum == 2 || currentUserNum == 3) {
        paymentLink.style.display = 'none'; // Hide payment link
    }
}