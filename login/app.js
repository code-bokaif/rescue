const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
	$("#otp").hide();
	container.classList.add("sign-up-mode");
});


sign_in_btn.addEventListener("click", () => {
	container.classList.remove("sign-up-mode");
});




function signupsub() {

	$("#phonesu").hide();
	$("#emailsu").hide();
	$("#passwordsu").hide();
	$("#bs").hide();
	$("#otp").show();
	$('#signup').val('Verify'); 
}



function login_usr() {

	alert("working");
}
