var signUpButton = document.getElementById("signUpButton");
var nameInput = document.getElementById("nameInput");
var emailInput = document.getElementById("emailInput");
var passwordInput = document.getElementById("passwordInput");
var alertRequired = document.getElementById("alertRequired");
var doneDiv = document.getElementById("doneDiv");
if (localStorage.getItem("myInfo") == null) {
  var info = [];
} else {
  info = JSON.parse(localStorage.getItem("myInfo"));
}
function exists() {
  for (let i = 0; i < info.length; i++) {
    if (info[i].email == emailInput.value) {
      i = info.length;
      return true;
    } else {
      continue;
    }
  }
}
signUpButton.addEventListener("click", function () {
  var infoObject = {
    name: nameInput.value,
    email: emailInput.value,
    password: passwordInput.value,
  };
  if (
    nameInput.value == "" ||
    emailInput.value == "" ||
    passwordInput.value == ""
  ) {
    alertRequired.style.display = "flex";
  } else {
    exists();
    if (exists() != true) {
      info.push(infoObject);
      localStorage.setItem("myInfo", JSON.stringify(info));
      nameInput.value = "";
      emailInput.value = "";
      passwordInput.value = "";
      doneDiv.style.display = "flex";
    } else {
      alertRequired2.style.display = "flex";
    }
  }
});
