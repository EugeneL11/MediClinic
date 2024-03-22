// for popup interaction
function random_chance() {
    var randomNum = Math.random();
    if (randomNum > 0.5) {
        return true;
    } else {
        return false;
    }
}

const pay_pop = document.getElementById("payPop");
function pay_yes() {
    const chance = random_chance();
    if (chance) {
        pay_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="pay_return()">&times;</a>
            <p>Payment successfully sent to the card machine!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="pay_return()">Close</a>
            </div>
        `;
    } else {
        pay_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="pay_return()">&times;</a>
            <p>Payment failed to send to the card machine!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="pay_return()">Close</a>
            </div>
        `;
    }
}
function pay_return() {
    pay_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="pay_return()">&times;</a>
        <p>Are you sure you want to make a payment?</p>
        <div class="confirmRow">
            <a class="yesBtn aButton" onclick="pay_yes()">Yes</a>
            <a href="#" class="noBtn aButton" onclick="pay_return()">No</a>
        </div>
    `;
}

const print_pop = document.getElementById("printPop");
function print_yes() {
    const chance = random_chance();
    if (chance) {
        print_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="print_return()">&times;</a>
            <p>Inovice printed successfully!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="print_return()">Close</a>
            </div>
        `;
    } else {
        print_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="print_return()">&times;</a>
            <p>Inovice failed to print!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="print_return()">Close</a>
            </div>
        `;
    }
}
function print_return() {
    print_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="print_return()">&times;</a>
        <p>Are you sure you want to print the invoice?</p>
        <div class="confirmRow">
            <a class="yesBtn aButton" onclick="print_yes()">Yes</a>
            <a href="#" class="noBtn aButton" onclick="print_return()">No</a>
        </div>
    `;
}

const email_pop = document.getElementById("emailPop");
function email_yes() {
    const chance = random_chance();
    if (chance) {
        email_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="email_return()">&times;</a>
            <p>Email invoice sent successfully!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="email_return()">No</a>
            </div>
        `;
    } else {
        email_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="email_return()">&times;</a>
            <p>Email invoice failed to send!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="email_return()">No</a>
            </div>
        `;  
    }
}
function email_return() {
    email_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="email_return()">&times;</a>
        <p>Are you sure you want to email the invoice?</p>
        <div class="confirmRow">
            <a class="yesBtn aButton" onclick="email_yes()">Yes</a>
            <a href="#" class="noBtn aButton" onclick="email_return()">No</a>
        </div>
    `;
}

// for the checkbox (select all / none)
function allCB(checkbox) {
    var checkboxes = document.querySelectorAll('.outstandingCheck');
    checkboxes.forEach(function(item) {
        item.checked = checkbox.checked;
    });
    updateTotal();
}

const totalDisplay = document.querySelector(".total");
function updateTotal() {
    var checkboxes = document.querySelectorAll('.outstandingCheck');
    var total = 0;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            var costSpan = checkbox.previousElementSibling.querySelector('.cost');
            var cost = parseFloat(costSpan.textContent);
            total += cost;
        }
    });
    totalDisplay.textContent = "Total: $" + total.toFixed(2);
}