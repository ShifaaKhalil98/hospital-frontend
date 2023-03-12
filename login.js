const login_btn = document.getElementById("login");
login_btn.addEventListener("click", submit_login);
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

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
        alert("Welcome" + result.data.name);
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
