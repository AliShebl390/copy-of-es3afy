
const passwordInput = document.querySelectorAll(".password-input");
const showPasswordIcon = document.getElementById("show-password-icon");

for (let i = 0; i <passwordInput.length; i++) {
    showPasswordIcon.addEventListener("click", function () {
      if (passwordInput[i].type === "password") {
        passwordInput[i].type = "text";
      } else {
        passwordInput[i].type = "password";
      }
    });

    
}
