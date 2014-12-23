function openFreeConsult() {
	document.getElementById('freeConsultant').style.display = "block";
	cancelPaidConsult();
}

function cancelFreeConsult() {
	document.getElementById('freeConsultant').style.display = "none";
}

function cancelPaidConsult() {
	document.getElementById('paidConsultant').style.display = "none";
}

function specialConsult() {
	document.getElementById('paidConsultant').style.display = "block";
	cancelFreeConsult();
}