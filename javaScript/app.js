let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let email = document.querySelector(".email");
let btn = document.querySelector(".sendBTN");
let formInputs = [fname, lname, email];
const regex = /\d/;

btn.addEventListener("click", () => {
	console.log("Click");
	validationInputs();
});

function validationInputs() {
	let fnameStr = fname.value;
	let lnameStr = lname.value;
	let emailStr = email.value;
	if (!regex.test(fnameStr)) {
		fname.style.border = "5px solid green";
	} else {
		alert("❌ First Name should contain only letters and should be at least 2 characters ❌");
		fname.style.border = "5px solid red";
	}

	if (!regex.test(lnameStr)) {
		lname.style.border = "5px solid green";
	} else {
        alert("❌ Last Name should contain only letters and should be at least 2 characters ❌");
		lname.style.border = "5px solid red";
	}

	if (emailStr.includes("@") && emailStr.includes(".")) {
		email.style.border = "5px solid green";
	} else {
        alert("❌ The Email must include one \"@\" and at least one \".\" ❌");
		email.style.border = "5px solid red";
	}
}
