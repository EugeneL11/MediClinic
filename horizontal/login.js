// Flag variables
let receptionistFlag = false;
let doctorFlag = false;
let nurseFlag = false;

// 1 for receptionist, 2 for doctor, 3 for nurse
let current;

function clickReceptionist() {
  receptionistFlag = !receptionistFlag;
  doctorFlag = false;
  nurseFlag = false;

  if (receptionistFlag) {
    current = 1;
  } else {
    current = 0;
  }

  update();

  // Toggle selected border class
  document.getElementById("receptionistBtn").classList.toggle("selectedBorder");
  // Remove selected border from other buttons
  document.getElementById("doctorBtn").classList.remove("selectedBorder");
  document.getElementById("nurseBtn").classList.remove("selectedBorder");
}

function clickDoctor() {
  doctorFlag = !doctorFlag;
  receptionistFlag = false;
  nurseFlag = false;

  if (doctorFlag) {
    current = 2;
  } else {
    current = 0;
  }

  update();

  // Toggle selected border class
  document.getElementById("doctorBtn").classList.toggle("selectedBorder");
  // Remove selected border from other buttons
  document.getElementById("receptionistBtn").classList.remove("selectedBorder");
  document.getElementById("nurseBtn").classList.remove("selectedBorder");
}

function clickNurse() {
  nurseFlag = !nurseFlag;
  receptionistFlag = false;
  doctorFlag = false;

  if (nurseFlag) {
    current = 3;
  } else {
    current = 0;
  }

  update();

  // Toggle selected border class
  document.getElementById("nurseBtn").classList.toggle("selectedBorder");
  // Remove selected border from other buttons
  document.getElementById("receptionistBtn").classList.remove("selectedBorder");
  document.getElementById("doctorBtn").classList.remove("selectedBorder");
}

function update() {
  let receptionistImg = document.getElementById("receptionistImg");
  let doctorImg = document.getElementById("doctorImg");
  let nurseImg = document.getElementById("nurseImg");

  if (receptionistFlag) {
    receptionistImg.src = "images/receptionist.png";
  } else {
    receptionistImg.src = "images/receptionistGray.png";
  }

  if (doctorFlag) {
    doctorImg.src = "images/doctor.png";
  } else {
    doctorImg.src = "images/doctorGray.png";
  }

  if (nurseFlag) {
    nurseImg.src = "images/nurse.png";
  } else {
    nurseImg.src = "images/nurseGray.png";
  }
}

function toggleVisibility() {
  let pwBox = document.getElementById("pwBox");
  let visibilityIcon = document.querySelector(".material-symbols-outlined");
  console.log(pwBox.type);
  if (pwBox.type == "password") {
    pwBox.type = "text";
    visibilityIcon.textContent = "visibility";
  } else {
    pwBox.type = "password";
    visibilityIcon.textContent = "visibility_off";
  }
}

function clickLogin() {
  recepPW = 123456;
  docPW = 123321;
  nursePW = 654321;

  let pwBox = document.getElementById("pwBox");
  let pwVal = pwBox.value;

  let chosenPW;

  if (current == 1) {
    chosenPW = recepPW;
  } else if (current == 2) {
    chosenPW = docPW;
  } else if (current == 3) {
    chosenPW = nursePW;
  }

  localStorage.removeItem("role");
  localStorage.setItem("role", current);

  console.log(current);

  let mismatchMsg = document.getElementById("mismatchMsg");

  if (parseInt(pwVal) == chosenPW) {
    window.location.href = "./homepage.html";
  } else {
    mismatchMsg.style.display = "block";
    pwBox.classList.add("error");
    pwBox.value = "";
  }
}