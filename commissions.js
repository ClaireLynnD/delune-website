//Declare variables

let commissionsOpen;
let commissionsArray = [];
let submitButton = document.getElementById("submit-commission-button");

// Form Variables

let email = document.getElementById("commissionFormEmail");
let commissionType = document.getElementById("commissionType");
let commissionInfo = document.getElementById("submissionInfo");
let commissionCheck = document.getElementById("check");
let submitSuccess = document.getElementById("submitSuccess");
let formArray = [email, commissionType, commissionInfo];

submitButton.setAttribute("disabled", true);

//Check commissionsArray length

if (commissionsArray.length <= 5) {
    commissionsOpen = true;
} else {
    commissionsOpen = false;
}

//Disable Submit Commission Request Button on click

submitButton.addEventListener("click", () => {
    if (!submitButton.hasAttribute("disabled"))
    submitButton.setAttribute("disabled", true);
    submitSuccess.innerHTML = "Thank you for your submission, we will get in touch with you soon!"
    console.log('disabled');
});

// Disable until fields are filled

let checkForm = () => {
    let canSubmit = false;

    for (let i = 0; i < formArray.length; i++) {
        if (formArray[i].value.length != 0) {
            canSubmit = true;
        }

        if (canSubmit) {
            submitButton.removeAttribute("disabled");
            console.log("enabled");
        }
    }
}

commissionCheck.addEventListener("click", checkForm);