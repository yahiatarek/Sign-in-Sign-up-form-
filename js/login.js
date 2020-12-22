var loginButton = document.getElementById("loginButton");
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var alertRequired = document.getElementById("alertRequired");
var alertNoPassword = document.getElementById("alertNoPassword");
var alertNoEmail = document.getElementById("alertNoEmail");
var foundEmail;
var foundPassword;
var notFound = true;
if (localStorage.getItem("myInfo") == null) {
  var info = [];
} else {
  info = JSON.parse(localStorage.getItem("myInfo"));
}
loginButton.addEventListener("click", function () {
  if (emailInput.value == "" || passwordInput.value == "") {
    alertRequired.style.display = "flex";
    alertRequired.innerHTML = "All Inputs required";
  } else {
    for (var i = 0; i < info.length; i++) {
      if (
        emailInput.value == info[i].email &&
        passwordInput.value == info[i].password
      ) {
        foundEmail = info[i].email;
        foundPassword = info[i].password;
        location.href = "food/ajaxFetchMethod.html";
      } else {
        notFound = false;
      }
    }
    if (
      emailInput.value != foundEmail &&
      passwordInput.value != foundPassword
    ) {
      alertNoEmail.style.display = "flex";
      alertNoEmail.innerHTML =
        "Wrong email or password try again or sign up if you donot have one!!";
      alertNoPassword.style.display = "flex";
    }
  }
});
