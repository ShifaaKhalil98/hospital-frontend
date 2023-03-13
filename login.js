const patient_btn = document.getElementById("patient");
const employee_btn = document.getElementById("employee");
const admin_btn = document.getElementById("admin");
const login_btn = document.getElementById("login");
const login_form = document.getElementsByClassName("login")[0];
const usertype_form = document.getElementsByClassName("usertype")[0];
const form = document.querySelector("form");
// var usertype = "";

patient_btn.addEventListener("click", function () {
  login_form.style.display = "block";
  usertype_form.style.display = "none";
  // usertype = "patient";
});
employee_btn.addEventListener("click", function () {
  login_form.style.display = "block";
  usertype_form.style.display = "none";
  // usertype = "employee";
});
admin_btn.addEventListener("click", function () {
  login_form.style.display = "block";
  usertype_form.style.display = "none";
  // usertype = "admin";
});
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
login_btn.addEventListener("click", submit_login);

function submit_login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let data = new FormData();
  data.append("email", email);
  data.append("password", password);

  axios({
    method: "post",
    url: "http://localhost/Hospital/back-end/login.php",
    data: data,
  })
    .then((result) => {
      // console.log(result.data);
      if (result.data.status == "logged in successfully") {
        alert("Welcome");
        window.location.href = "index.html";
      } else if (result.data.status == "password is incorrect") {
        alert("password is incorrect!");
      } else if (result.data.status == "user does not exist") {
        alert("This email does not exit, create acoount instead!");
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
// import axios from "axios";
