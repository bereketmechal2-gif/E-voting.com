function goHome() {
  const user = document.getElementById("user").value.trim();
  const dob = document.getElementById("Dt").value;
  const terms = document.getElementById("terms").checked;
  if (!user || !dob) {
    alert("Please fill in all fields.");
    return;
  }

  if (!terms) {
    alert("You must agree to the Terms and Conditions.");
    return;
  }

  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("username", user);
  localStorage.setItem("userAge", age);
  window.location.href = "home1.html";
}
