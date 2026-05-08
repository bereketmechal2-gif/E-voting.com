const storedId = localStorage.getItem("voterId");
const username = localStorage.getItem("username");
const hasVoted = localStorage.getItem("voted_" + username);

window.onload = function () {
  if (hasVoted === "true") {
    let form = document.getElementById("voteForm");
    form.style.pointerEvents = "none";
    form.style.opacity = "0.4";

    let msg = document.createElement("p");
    msg.textContent = "✅ You have already voted. Thank you!";
    msg.style.color = "lime";
    msg.style.fontSize = "20px";
    form.before(msg);
  }
};
const storedId = localStorage.getItem("voterId");
const username = localStorage.getItem("username");
const hasVoted = localStorage.getItem("voted_" + username);

window.onload = function () {
  if (hasVoted === "true") {
    let form = document.getElementById("voteForm");
    form.style.pointerEvents = "none";
    form.style.opacity = "0.4";

    let msg = document.createElement("p");
    msg.textContent = "✅ You have already voted. Thank you!";
    msg.style.color = "lime";
    msg.style.fontSize = "20px";
    form.before(msg);
  }
};
const storedId = localStorage.getItem("voterId");
const username = localStorage.getItem("username");
const hasVoted = localStorage.getItem("voted_" + username);

window.onload = function () {
  if (hasVoted === "true") {
    let form = document.getElementById("voteForm");
    form.style.pointerEvents = "none";
    form.style.opacity = "0.4";

    let msg = document.createElement("p");
    msg.textContent = "✅ You have already voted. Thank you!";
    msg.style.color = "lime";
    msg.style.fontSize = "20px";
    form.before(msg);
  }
};
const storedId = localStorage.getItem("voterId");
const username = localStorage.getItem("username");
const hasVoted = localStorage.getItem("voted_" + username);

window.onload = function () {
  if (hasVoted === "true") {
    let form = document.getElementById("voteForm");
    form.style.pointerEvents = "none";
    form.style.opacity = "0.4";

    let msg = document.createElement("p");
    msg.textContent = "✅ You have already voted. Thank you!";
    msg.style.color = "lime";
    msg.style.fontSize = "20px";
    form.before(msg);
  }
};
document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  if (!username || !storedId) {
    alert("Please log in first!");
    window.location.href = "log.html";
    return;
  }
  const enteredId = document.getElementById("voterId").value.trim();
  if (enteredId !== storedId) {
    alert("❌ Wrong Voter ID! Check your ID on the home page.");
    return;
  }
  let candidate = document.querySelector('input[name="candidate"]:checked');
  if (!candidate) {
    alert("Please select a candidate.");
    return;
  }
  let votes = JSON.parse(localStorage.getItem("votes")) || {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
  };
  if (candidate.value === "A") votes.A++;
  if (candidate.value === "B") votes.B++;
  if (candidate.value === "C") votes.C++;
  if (candidate.value === "D") votes.D++;

  localStorage.setItem("votes", JSON.stringify(votes));
  localStorage.setItem("voted_" + username, "true");

  alert("✅ Vote submitted successfully! Thank you.");
  window.location.href = "result.html";
});
