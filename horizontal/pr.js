// for popup interaction
function random_chance() {
    var randomNum = Math.random();
    if (randomNum > 0.5) {
        return true;
    } else {
        return false;
    }
}

const dl_pop = document.getElementById("dlPop");
function dl_yes() {
    const chance = random_chance();
    if (chance) {
        dl_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="dl_return()">&times;</a>
            <p>File downloaded successfully!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="dl_return()">Close</a>
            </div>
        `;
    } else {
        dl_pop.innerHTML = `
            <a href="#" class="close-btn" onclick="dl_return()">&times;</a>
            <p>File download failed!</p>
            <div class="confirmRow">
                <a href="#" class="aButton" onclick="dl_return()">Close</a>
            </div>
        `;
    }
}
function dl_return() {
    dl_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="dl_return()">&times;</a>
        <p>Are you sure you want to download this file?</p>
        <div class="confirmRow">
            <a class="yesBtn aButton" onclick="dl_yes()">Yes</a>
            <a href="#" class="noBtn aButton" onclick="dl_return()">No</a>
        </div>
    `;
}

// for the sorting dropdown
const history_field = document.getElementById("historyField");
function ddOptions() {
    const dd_select = document.getElementById("ddSelect");
    const selected_option = dd_select.value;
    if (selected_option === "Most Recent") {
        history_field.innerHTML = `
            <div class="field">December 10th 11:00 AM 2023, Check-up</div>
            <div class="field">July 2nd, 1:15 PM 2023, Stomach flu</div>
            <div class="field">May 23rd, 3:50 PM 2023, Flu shot</div>
            <div class="field">November 27th, 2:00 PM 2022, X-ray</div>
            <div class="field">January 21st, 1:00 PM 2022, Check-up</div>
            <div class="field">June 19th, 2:30 PM 2021, Skin rash</div>
            <div class="field">March 2nd, 12:00 PM 2021, Check-up</div>
            <div class="field">May 5th, 10:00 AM 2020, Flu shot</div>
        `;
    } else if (selected_option === "Oldest") {
        history_field.innerHTML = `
            <div class="field">May 5th, 10:00 AM 2020, Flu shot</div>
            <div class="field">March 2nd, 12:00 PM 2021, Check-up</div>
            <div class="field">June 19th, 2:30 PM 2021, Skin rash</div>
            <div class="field">January 21st, 1:00 PM 2022, Check-up</div>
            <div class="field">November 27th, 2:00 PM 2022, X-ray</div>
            <div class="field">May 23rd, 3:50 PM 2023, Flu shot</div>
            <div class="field">July 2nd, 1:15 PM 2023, Stomach flu</div>
            <div class="field">December 10th 11:00 AM 2023, Check-up</div> 
        `;
    }
}