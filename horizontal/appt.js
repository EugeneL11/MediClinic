window.onload = function() {
    loadWeek(new Date());
};

// exit popup on current page
function returnPage() {
    window.location.href = '#';
}

function changeWeek() {

}

function loadWeek(passed) {
    element = document.getElementById("dateTable");
    var currentDate = new Date(passed);

    var currentDay = currentDate.getDay(); // 0 for Sunday, 1 for Monday, ..., 6 for Saturday
    var monday = new Date(currentDate); // Copy current date
    var difference = currentDay - 1; // Calculate difference to Monday (assuming Sunday is the first day)
    if (difference < 0)
        difference = 6; // If it's Sunday, set the difference to 6 days
    monday.setDate(monday.getDate() - difference); // Set date to Monday

    var string = `<td class="emptyBlock"></td>`;
    for(var i=0; i<7 ; i++)
    {
        var monText = monday.toLocaleString('default', { month: 'short' });
        var monDate = monday.getDate();

        if(i==0)
            string+=`<td class="date" id="monday">`+ monText + ` ` + monDate + `</td>`;
        else
            string+=`<td class="date">`+ monText + ` ` + monDate + `</td>`;

        monday.setDate(monday.getDate() + 1);
    }

    element.innerHTML = string;
    changeSchedule();
}

function changeWeek(val) {
    var element = document.getElementById("monday").textContent;
    var parts = element.split(' ');
    var month = parts[0]; // Month part (e.g., "Mar")
    var date = parseInt(parts[1], 10); // Date part (e.g., 4)

    var monthMap = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };

    var dateObject = new Date(2024, monthMap[month], date);

    if(val == "back")
        loadWeek(dateObject.setDate(dateObject.getDate() - 7));
    else if(val == "next")
        loadWeek(dateObject.setDate(dateObject.getDate() + 7));
}

function changeSchedule()
{
    for (var i = 1; i <= 6; i++)
        for (var j = 9; j <= 17; j++)
        {
            var val = "cell"+i+""+j;
            var cell = document.getElementById(val);
            var randomNumber = Math.random(); // Generate a random number between 0 and 1
            
            cell.classList.remove('green');
            cell.classList.remove('red');

            if (randomNumber < 0.6)
                cell.classList.add('green');
            else
                cell.classList.add('red');
        }
}
