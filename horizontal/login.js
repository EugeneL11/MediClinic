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

  current = 1;
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

  current = 2;
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

  current = 3;
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


