document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let candidate = document.querySelector('input[name="candidate"]:checked');
  if (!candidate) {
    alert("Please select a candidate");
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

  alert("Vote submitted successfully!");
});
const username = localStorage.getItem("username");
const hasVoted = localStorage.getItem("voted_" + username);

if (hasVoted === "true") {
    let form = document.getElementById("voteForm");
    form.style.pointerEvents = "none";
    form.style.opacity = "0.4";
    let msg = document.createElement("p");
    msg.textContent = "You have already voted. Thank you!";
    msg.style.color = "lime";
    form.before(msg);
}
