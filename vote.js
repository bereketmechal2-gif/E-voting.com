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
  };

  if (candidate.value === "A") votes.A++;
  if (candidate.value === "B") votes.B++;
  if (candidate.value === "C") votes.C++;

  localStorage.setItem("votes", JSON.stringify(votes));

  alert("Vote submitted successfully!");
});
