const dl_pop = document.getElementById("dlPop");
function dl_yesClick() {
    dl_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="dl_return()">&times;</a>
        <p>Thank you for downloading the file!</p>
        <div class="confirmRow">
            <a href="#" class="aButton" onclick="dl_return()">Close</a>
        </div>
    `;
}

function dl_return() {
    dl_pop.innerHTML = `
        <a href="#" class="close-btn" onclick="dl_return()">&times;</a>
        <p id="dlTitle">Are you sure you want to download this file?</p>
        <div class="confirmRow">
            <a class="yesBtn aButton" onclick="dl_yesClick()">Yes</a>
            <a href="#" class="noBtn aButton" onclick="dl_return()">No</a>
        </div>
    `;
}