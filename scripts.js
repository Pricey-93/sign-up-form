const passwordField = document.getElementById("password");
const confirmPasswordField = document.getElementById("confirm-password");

function comparePasswords() {
    const password = document.getElementById("password").value.trim();
    const confirmPassword = document.getElementById("confirm-password").value.trim();
    if (password === confirmPassword) {
        return true;
    }
    else {
        return false;
    }   
}

// if password strings match -> value is valid, else invalid.
// function validate() {
//     let confirmPasswordField = document.getElementById("confirm-password");
//     if (comparePasswords()) {
//         confirmPasswordField.setCustomValidity("");
//     } else {
//         confirmPasswordField.setCustomValidity("passwords must match");
//     }
//     confirmPasswordField.reportValidity();
// }

// event listeners ---------------------------------------------------------
// confirmPasswordField.addEventListener("blur", (e) => {
//     validate();
// });

function validate() {
    if (!comparePasswords()) {
      alert("Error: Passwords do not match.");
      return false;
    }
    return true;
  }