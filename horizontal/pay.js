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
    { name: "Donald Duck", id: "403-982-1486"},
    { name: "Fredrick Feet", id: "123-456-7891"},
    { name: "Jimmy Jones", id: "123-456-7892"},
    { name: "Karl Kones", id: "123-456-7893"},
    { name: "Rachel Ruthers", id: "123-456-7894"},
    { name: "Steven Seal", ide: "123-456-7895"},
    { name: "Eugene Eel", id: "123-456-7896"},
    { name: "Zainab Zeal", id: "123-456-7897"},
  ];

const searchInput = document.getElementById("searchInput");
const dropdown = document.getElementById("dropdown");

// filter patients based on search input
function filterPatients(input) {
  return patients.filter((patient) =>
    patient.name.toLowerCase().includes(input.toLowerCase())
  );
}

// update dropdown list with filtered patients
function updateDropdown(input) {
  dropdown.innerHTML = "";
  const filteredPatients = filterPatients(input);
  filteredPatients.forEach((patient) => {
    const option = document.createElement("span");
    option.textContent = patient.name;
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

// Hide dropdown when clicked outside
document.addEventListener("click", (event) => {
  if (!dropdown.contains(event.target) && event.target !== searchInput) {
    dropdown.style.display = "none";
  }
});
