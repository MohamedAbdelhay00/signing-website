var userName = document.getElementById("userName");
var emailAddress = document.getElementById("emailAddress");
var password = document.getElementById("password");
var semailAddress = document.getElementById("semailAddress");
var spassword = document.getElementById("spassword");
var signUpD = document.querySelector("#signUp");
var signInD = document.querySelector("#signIn");
var sin = document.getElementById("in");
var sup = document.getElementById("up");
var home = document.querySelector("#home");
var loginMailValidate = document.querySelector("#loginMailValidate");
var loginPassValidate = document.querySelector("#loginPassValidate");
var uName = document.querySelector("#uName");
var main = document.querySelector("#main");

var users = [];

if (localStorage.getItem("users") !== null) {
  users = JSON.parse(localStorage.getItem("users"));
}

function addUser() {
  var user = {
    username: userName.value,
    email: emailAddress.value,
    password: password.value,
  };
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  console.log(users);
}

function signUp() {
  if (
    validateUserName() == true &&
    validateMail(emailAddress) == true &&
    validatePassword(password) == true
  ) {
    var indexOfU = 0;
    for (var i = 0; i < users.length; i++) {
      indexOfU = i;
    }
    if (emailAddress.value == users[indexOfU].email) {
      console.log("mail does exsist");
    } else {
      addUser();
      switchToIn();
    }
  }
}

function signIn() {
  var indexOfU = 0;
  for (var i = 0; i < users.length; i++) {
    indexOfU = i;
    if (validateMail(semailAddress) == true && validatePassword(spassword) == true) {
      if (
        semailAddress.value == users[indexOfU].mail &&
        spassword.value == users[indexOfU].password
      ) {
        signInD.classList.add("d-none");
        signInD.classList.remove("d-flex");
        home.classList.remove("d-none");
        home.classList.add("d-flex");
        uName.innerHTML = `Welcome, ${users[i].username}`;
      } else if (spassword.value != users[indexOfU].password || semailAddress.value != users[indexOfU].mail) {
        spassword.classList.remove("is-valid");
        spassword.classList.add("is-invalid");
        semailAddress.classList.remove("is-valid");
        semailAddress.classList.add("is-invalid");
      }
    }
  }
}

function logout() {
  home.classList.remove("d-flex");
  home.classList.add("d-none");
  signInD.classList.add("d-flex");
  signInD.classList.remove("d-none");
  emailAddress.value = "";
  password.value = "";
  semailAddress.value = "";
  spassword.value = "";
  window.location.reload();
}

function switchToIn() {
  signUpD.classList.add("d-none");
  signUpD.classList.remove("d-flex");
  signInD.classList.add("d-flex");
  signInD.classList.remove("d-none");
  main.classList.remove("d-flex")
  main.classList.add("d-none")
}

function switchToUp() {
  signUpD.classList.add("d-flex");
  signUpD.classList.remove("d-none");
  signInD.classList.add("d-none");
  signInD.classList.remove("d-flex");
  main.classList.add("d-none")
  main.classList.remove("d-flex")
}

sin.addEventListener("click", switchToUp);
sup.addEventListener("click", switchToIn);

function validateUserName() {
  var nameRegex = /^[A-Za-z]{4,14}$/;
  if (nameRegex.test(userName.value) == true) {
    userName.classList.add("is-valid");
    userName.classList.remove("is-invalid");
    return true;
  } else {
    userName.classList.add("is-invalid");
    userName.classList.remove("is-valid");
    return false;
  }
}

function validateMail(m) {
  var mailRegex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (mailRegex.test(m.value) == true) {
    m.classList.add("is-valid");
    m.classList.remove("is-invalid");
    return true;
  } else {
    m.classList.add("is-invalid");
    m.classList.remove("is-valid");
    return false;
  }
}

function validatePassword(pass) {
  var temp = "";
  var passRegex =
    /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
  if (passRegex.test(pass.value) == true) {
    pass.classList.add("is-valid");
    pass.classList.remove("is-invalid");
    temp = "";
    document.getElementById("passReq").innerHTML = temp;
    return true;
  } else {
    pass.classList.add("is-invalid");
    pass.classList.remove("is-valid");

    temp = `<li>The minimum number of characters must be 8.</li>
        <li>The string must have at least one digit.</li>
        <li>The string must have at least one uppercase character.</li>
        <li>The string must have at least one lowercase character.</li>
        <li>The string must have at least one special character.</li>`;
    document.getElementById("passReq").innerHTML = temp;
    return false;
  }
}

semailAddress.addEventListener("blur", function(){
  validateMail(semailAddress)
});

spassword.addEventListener("blur", function(){
  validatePassword(spassword)
});

emailAddress.addEventListener("blur", function(){
  validateMail(emailAddress)
});

password.addEventListener("blur", function(){
  validatePassword(password)
});

userName.addEventListener("blur", validateUserName);

var form = document.getElementById("myForm");
var form2 = document.getElementById("mFrom")
function handleForm(event) {
  event.preventDefault();
}
form.addEventListener("submit", handleForm);
form2.addEventListener("submit", handleForm)