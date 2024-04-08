# MediClinic

Course: CPSC 481 Winter 2024
Instructor: Ehud Sharlin
TA: Yichen Lian
Group: T05-3
Members: Eugene Lee, Steven Nguyen, Zainab Syeda
Title: MediClinic Software System

Our project was developed by using just pure HTML, CSS, and JavaScript. 
To access our MediClinic software, the user first needs to access it in this link: https://eugenel11.github.io/MediClinic/horizontal/login.html , will take you to the login page.

Login Page: 
- There are 3 pre-set user types that the user can choose, which are receptionist, doctor, and nurse.
    - The password for receptionist is "123456"
    - The password for doctor is "123321"
    - The password for nurse is "654321"
- Logging in will take the user to the homepage. Different users will have different privileges in the system.

Navbar: 
- The navbar is present on all pages once logged in. 
    - Selected user role is visible on the right side, and the user can also log out from any page using the logout button on the right side. 
    - The user can visit any of the other pages by clicking accordingly on the navbar. 

Homepage: 
- All of the individual boxes under 'Today's Appointments' are clickable, and clicking on it will take the user straight to the Check-In page, with the selected information loaded in. 
- The times displayed are dynamic, but the doctor statuses are static.

Patient Records Page: 
- This page will always start with Donald Duck's information loaded in, as that is the default value. 
    - From the search bar, the only valid search that will actually update the page is Fredrick Feet. Every other search will not update the page. 
- The sorting of the Visit History only works correctly for Donald Duck's information. 
- Downloading a file from Test Results does not actually download anything. 
- The 'Create New' and 'Delete' buttons will only be visible for a receptionist, as they are the only ones that need to deal with managing these records. 
- Doctors and Nurses will still be able to view and access all the information. 
- The editing of patient information will only be possible for the receptionist and the doctor. 

Check-In Page: 
- The patient info section can be filled out by clicking the upcoming appointments box from either the Homepage or the Check-In page. 
    - All of the boxes are clickable. 
- For any of the patients, the only valid Health Care Number will be "12345678".
    - Can only check a patient in when the verification is successful. 
- Only the receptionist can check patients in, the verification and check-in components will not be visible to doctors or nurses. 

Appointments Page: 
- The appointment calendar is dynamic, but it doesn't store any actual data. All of the 'stored' data is randomly generated each time. 
    - Although the information is specific to a certain doctor at a certain week, every time it is refreshed, it will be a new set of data. It is only temporary.
    - When clicking a green/available box to book an appointment, once booked, the box will turn red and display the correct information. However, if any other box is clicked or the user leaves the page and then returns, the information will have been replaced by a randomly generated information. It is only temporary.
    - When clicking a red/full box to edit an appointment, can change the saved information and the time, but it will also only be temporary. When cancelling the appointment, this action is also only temporary.
- The book, edit, and cancel actions are only available to the receptionist. The doctor and nurse can only view appointments. 

Payments Page: 
- This page will always start with Donald Duck's information loaded in, as that is the default value. 
    - From the search bar, the only valid searches that will actually update the page is Fredrick Feet and Jimmy Jones. Every other search will not update the page. 
- The checkboxes in 'Outstanding Payments' are fully functional and update the total accordingly on the bottom. The very top checkbox is a select all/none. 
    - Making a payment will reset the checkboxes, but a payment is not actually made. 
- 'Make payment', 'Email Invoice', and 'Print Invoice' all have a random 50% chance of success/fail rate. 
    - When successful, the indicated action is not actually performed. 
- This whole page is only visible to the receptionist. For the doctor or nurse, the Payment page will not be visible on the navbar. 