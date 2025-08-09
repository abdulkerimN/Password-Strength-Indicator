var pass = document.getElementById("password");
var msg = document.getElementById("message");
var str = document.getElementById("strength");
var showHide = document.getElementById("show-hide");



pass.addEventListener('input', function() {
    if (pass.value.length > 0) {
        msg.style.display = "block";
    } else {
        msg.style.display = "none";
        pass.style.borderColor = "#ccc";
    }

    if (pass.value.length < 4) {
        str.innerHTML = "weak";
        pass.style.borderColor = "red";

        msg.style.color = "red";
    } else if (pass.value.length >= 4 && pass.value.length < 8) {
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    } else if (pass.value.length >= 8) {
        str.innerHTML = "strong";
        pass.style.borderColor = "green";
        msg.style.color = "green";
    }

});

// password show and hide function

showHide.onclick = function() {
    if (pass.type == "password") {
        pass.type = "text";
    } else {
        pass.type = "password";
    }
}