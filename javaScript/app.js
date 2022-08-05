let fname = document.querySelector(".fname");
let lname = document.querySelector(".lname");
let email = document.querySelector(".email");
let btn = document.querySelector(".sendBTN");
let message = document.querySelector(".message");
let formInputs = [fname, lname, email];
const regex = /\d/;

btn.addEventListener("click", () => {
	validationInputs();
});

function validationInputs() {
	let fnameStr = fname.value;
	let lnameStr = lname.value;
	let emailStr = email.value;
	let messageStr = message.value;
	let passTest = 0
	let info = {
		name: `${fnameStr} ${lnameStr}`,
		email: emailStr,
		userMessage : messageStr
	}
	if (!regex.test(fnameStr) && fnameStr.length >= 2) {
		fname.style.border = "5px solid green";
		passTest++
	} else {
		alert("❌ First Name should contain only letters and should be at least 2 characters ❌");
		fname.style.border = "5px solid red";
	}

	if (!regex.test(lnameStr) && lnameStr.length >= 2) {
		lname.style.border = "5px solid green";
		passTest++
	} else {
        alert("❌ Last Name should contain only letters and should be at least 2 characters ❌");
		lname.style.border = "5px solid red";
	}

	if (emailStr.includes("@") && emailStr.includes(".")) {
		email.style.border = "5px solid green";
		passTest++
	} else {
        alert("❌ The Email must include one \"@\" and at least one \".\" ❌");
		email.style.border = "5px solid red";
	}
	if(passTest === 3){
		alert("✅Your Message as been sent, We Will Be in Touch Soon...✅")
		console.log(info)
	}
}
