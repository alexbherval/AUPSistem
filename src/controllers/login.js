const frmLogin = document.getElementById("frmLogin");
const alertLogin = document.getElementById("alertLogin");
const checkboxLogin = document.getElementById("checkboxLogin");

frmLogin.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputEmail = document.getElementById("inputEmail").value;
  const inputPassword = document.getElementById("inputPassword").value;
  const checkboxLogin = document.getElementById("checkboxLogin").value;

  if (inputEmail === "admin" && inputPassword === "123") {
    window.location.href = "http://127.0.0.1:5500/src/views/frmCadPessoa.html";
    // redirect to dashboard or do something else
  } else {
    alertLogin.className = "alert alert-danger";
  }
});
