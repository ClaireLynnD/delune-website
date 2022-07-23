//Declare variables

let commissionsOpen;
let commissionsArray = [];
let submitButton = document.getElementById("submit-commission-button");

//Check commissionsArray length

if (commissionsArray.length <= 5) {
    commissionsOpen = true;
} else {
    commissionsOpen = false;
}

//Disable Submit Commission Request Button on click

submitButton.addEventListener("click", () => {
    submitButton.setAttribute("disabled", true);
    console.log('disabled');
});