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
    if (!submitButton.hasAttribute("disabled")) {
    submitButton.setAttribute("disabled", true);
    submitSuccess.innerHTML = "Thank you for your submission, we will get in touch with you soon!"
    console.log('disabled');
    }
});

// Disable until fields are filled

let checkForm = () => {
    let canSubmit = false;

    for (let i = 0; i < formArray.length; i++) {
        if (formArray[i].value.length != 0 ) {
            canSubmit = true;
        }

        if (canSubmit) {
            submitButton.removeAttribute("disabled");
            console.log("enabled");
        }
    }
}

commissionCheck.addEventListener("click", checkForm);

// Post Form as JSON

let url;

let postFormDataAsJson = async ({ url, formData }) => {
	const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

	const fetchOptions = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: formDataJsonString,
	};

	const response = await fetch(url, fetchOptions);

	if (!response.ok) {
		const errorMessage = await response.text();
		throw new Error(errorMessage);
	}

	return response.json();
}

let handleFormSubmit = async (event) => {
	event.preventDefault();

	const form = event.currentTarget;
	const url = form.action;

	try {
		const formData = new FormData(form);
		const responseData = await postFormDataAsJson({ url, formData });

		console.log({ responseData });
	} catch (error) {
		console.error(error);
	}
}

const commissionForm = document.getElementById("commission-form");
commissionForm.addEventListener("submit", handleFormSubmit);