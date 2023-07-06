function validate() {
  var email = document.getElementById("emailField").value;
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var message = document.getElementById("message");

  if (!emailRegex.test(email)) {
    message.innerText = "Invalid email address";
    message.style.color = "red";
  } else {
    message.innerText = "Email submitted successfully";
    message.style.color = "green";
  }
  message.style.display = "block";
}
