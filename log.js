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
  if (age < 18) {
    alert("Your are under age");
    return;
    //age--;
  }
  const voterId = Math.floor(100000 + Math.random() * 900000);
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("username", user);
  localStorage.setItem("userAge", age);
  localStorage.setItem("voterId", voterId);
  localStorage.setItem("username", user);
  window.location.href = "home1.html";
}
