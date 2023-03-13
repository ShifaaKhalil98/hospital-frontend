const signup_btn = document.getElementById("signup");
signup_btn.addEventListener("click", submit_signup);
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});
function submit_signup() {
  let name = document.getElementById("name").value;
  let dob = document.getElementById("dob").value;
  let phone_number = document.getElementById("phone_number").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;

  if (password != confirm_password) {
    alert("Passwords don't match!");
    console.log("no match");
  } else {
    let data = new FormData();
    data.append("name", name);
    data.append("dob", dob);
    data.append("phone_number", phone_number);
    data.append("email", email);
    data.append("password", password);
    console.log(data);
    axios({
      method: "post",
      url: "http://localhost/Hospital/back-end/signup.php",
      data: data,
    }).then((result) => {
      console.log(result);
      if (result.data.status == "user added successfully") {
        alert("user added successfully, try signing in now");
        window.location.href = "login.html";
      } else if (result.data.status == "password is not valid") {
        alert("Password is not valid");
      } else if (result.data.status == "email already exists") {
        alert("Email already exists, try signing in instead");
      }
    });
  }
}
