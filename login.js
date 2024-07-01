document.getElementById("show-pwd").addEventListener("change", function() {
	if (this.checked) {
		document.getElementById("pwd").type = "text";
	} else {
		document.getElementById("pwd").type = "password";
	}
});