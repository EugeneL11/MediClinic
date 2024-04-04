// import {currentUser} from './login.js';

document.getElementById("special").innerHTML = currentUser.role;
console.log(currentUser.role)

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
            <p>Payment failed to send to the card machine.</p>
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
            <a href="#" class="noBtn" onclick="pay_return()">No</a>
            <a class="yesBtn" onclick="pay_yes()">Yes</a>
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
            <p>Inovice failed to print.</p>
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
            <a href="#" class="noBtn" onclick="print_return()">No</a>
            <a class="yesBtn" onclick="print_yes()">Yes</a>
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
                <a href="#" class="aButton" onclick="email_return()">Close</a>
            </div>
        `;
  } else {
    email_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="email_return()">&times;</a>
            <p>Email invoice failed to send.</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="email_return()">Close</a>
            </div>
        `;
  }
}
function email_return() {
  email_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="email_return()">&times;</a>
        <p>Are you sure you want to email the invoice?</p>
        <div class="confirmRow">
            <a href="#" class="noBtn" onclick="email_return()">No</a>
            <a class="yesBtn" onclick="email_yes()">Yes</a>
            </div>
    `;
}

// for the checkbox (select all / none)
function allCB(checkbox) {
  var checkboxes = document.querySelectorAll(".outstandingCheck");
  checkboxes.forEach(function (item) {
    item.checked = checkbox.checked;
  });
  updateTotal();
}

function clearCB() {
  var topCB = document.getElementById("topCB");
  topCB.checked = false;
  var checkboxes = document.querySelectorAll(".outstandingCheck");
  checkboxes.forEach(function (item) {
    item.checked = false;
  });
  updateTotal();
}

const totalDisplay = document.querySelector(".total");
function updateTotal() {
  var checkboxes = document.querySelectorAll(".outstandingCheck");
  var total = 0;
  checkboxes.forEach(function (checkbox) {
    if (checkbox.checked) {
      var costSpan = checkbox.previousElementSibling.querySelector(".cost");
      var cost = parseFloat(costSpan.textContent);
      total += cost;
    }
  });
  totalDisplay.textContent = "Total: $" + total.toFixed(2);
}

// dynamic search
const patients = [
    { name: "Donald Duck", phone: "403-982-1486", email: "donalduck00@gmail.com"},
    { name: "Fredrick Feet", phone: "587-156-7891", email: "freddyfeet@gmail.com"},
    { name: "Jimmy Jones", phone: "587-256-7892", email: "jimmyjones@gmail.com"},
    { name: "Karl Kones", phone: "403-356-7893", email: "karkones@gmail.com"},
    { name: "Rachel Ruthers", phone: "403-456-7894", email: "ruthersrachel@gmail.com"},
    { name: "Derek Deer", phone: "587-777-9999", email: "derek.lian@ucalgary.ca"},
    { name: "Yichen Year", phone: "403-101-0101", email: "yichenlian63@gmail.com"},
    { name: "Steven Seal", phone: "587-556-7895", email: "stevenseal@gmail.com"},
    { name: "Eugene Eel", phone: "403-656-7896", email: "eugeneel@gmail.com"},
    { name: "Zainab Zeal", phone: "587-756-7897", email: "zainabzeal@gmail.com"},
  ];

const searchInput = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");
// filter patients based on search input
function filterPatients(input) {
  
  return patients.filter((patient) =>
    patient.name.toLowerCase().includes(input.toLowerCase()) || patient.phone.split('-').join('').includes(input)
  );
}

// update dropdown list with filtered patients
function updateDropdown(input) {
  dropdown.innerHTML = "";
  const filteredPatients = filterPatients(input);
  filteredPatients.forEach((patient) => {
    const option = document.createElement("span");
    option.textContent = `${patient.name} (${patient.phone})`;
    option.addEventListener("click", () => {
      searchInput.value = patient.name;
      dropdown.style.display = "none";
    });
    dropdown.appendChild(option);
  });
  dropdown.style.display = filteredPatients.length ? "block" : "none";
}

// Event listener for input changes
searchInput.addEventListener("input", (event) => {
  updateDropdown(event.target.value);
});

// Event listener for dropdown item selection
dropdown.addEventListener('click', (event) => {
  const selectedText = event.target.textContent;
  const selectedPatient = patients.find(patient => {
    const [name, phone] = selectedText.split(' ('); // Extract name from the selected text
    return patient.name == name.trim(); // Compare with the name in the patient data
  });

  if (selectedPatient) {
    // Update the displayed information with the selected patient's details
    document.getElementById('fullName').textContent = `Full name: ${selectedPatient.name}`;
    document.getElementById('phoneNum').textContent = `Phone: ${selectedPatient.phone}`;
    document.getElementById('emailAddress').textContent = `Email: ${selectedPatient.email}`;
  }

  // Jimmy hard coded values
  if (selectedPatient.name == "Jimmy Jones") {
    // payment history hard recode
    const paymentHistory = document.querySelector('.scrollingDisplay.left2'); 
    
    paymentHistory.innerHTML = '';

    const paymentHistoryData = [
      { item: "Hand sanitizer", cost: 3.05 },
      { item: "Face masks", cost: 6.99 },
      { item: "Flu medicine", cost: 6.72 },
      { item: "Cough drops", cost: 5.11 },
      { item: "Sports tape", cost: 4.32 },
      { item: "Advil", cost: 5.41 },
      { item: "Melatonin", cost: 16.12 }
    ];

    paymentHistoryData.forEach(payment => {
      const span = document.createElement('span');
      span.textContent = `${payment.item}, $${payment.cost.toFixed(2)}`;
      span.style.marginLeft = '25px';
      paymentHistory.appendChild(span);
    });

    // outstanding payments hard recode
    const outstandingPayments = document.getElementById('outstandingPaymentsDisplay');

    outstandingPayments.querySelector('.outstandingRow:nth-child(1) span').innerHTML = 'Medical gloves, $<span class="cost">14.39</span>';
    outstandingPayments.querySelector('.outstandingRow:nth-child(2) span').innerHTML = 'First aid kit, $<span class="cost">49.99</span>';
    outstandingPayments.querySelector('.outstandingRow:nth-child(3) span').innerHTML = 'Allergy medication, $<span class="cost">5.99</span>';
    outstandingPayments.querySelector('.outstandingRow:nth-child(4) span').innerHTML = 'Ibuprofen, $<span class="cost">10.99</span>';
    updateTotal();
  }

  // fred feet hard coded values
  // Jimmy hard coded values
  if (selectedPatient.name == "Fredrick Feet") {
    // payment history hard recode
    const paymentHistory = document.querySelector('.scrollingDisplay.left2'); 
    
    paymentHistory.innerHTML = '';

    const paymentHistoryData = [
      { item: "Antiseptic ointment", cost: 6.25 },
      { item: "Cough syrup", cost: 5.99 },
      { item: "Elastic bandage roll", cost: 6.99 },
      { item: "Wheelchair", cost: 129.99 },
      { item: "Ankle brace", cost: 39.99 },
    ];

    paymentHistoryData.forEach(payment => {
      const span = document.createElement('span');
      span.textContent = `${payment.item}, $${payment.cost.toFixed(2)}`;
      span.style.marginLeft = '25px';
      paymentHistory.appendChild(span);
    });

    // outstanding payments hard recode
    const outstandingPayments = document.getElementById('outstandingPaymentsDisplay');

    outstandingPayments.querySelector('.outstandingRow:nth-child(1) span').innerHTML = 'Crutches, $<span class="cost">44.39</span>';
    outstandingPayments.querySelector('.outstandingRow:nth-child(2) span').innerHTML = 'Foot cream, $<span class="cost">9.99</span>';
    outstandingPayments.querySelector('.outstandingRow:nth-child(3) span').innerHTML = 'Callus remover, $<span class="cost">8.99</span>';
    outstandingPayments.querySelector('.outstandingRow:nth-child(4) span').innerHTML = 'Foot odor spray, $<span class="cost">15.99</span>';
    updateTotal();
  }

});

// Hide dropdown when clicked outside
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target) && event.target !== searchInput) {
    dropdown.style.display = "none";
  }
});


