window.onload = function () {
let votes = JSON.parse(localStorage.getItem("votes")) || {
A:0,
B:0,
C:0,
D:0
};

document.getElementById("a").innerText = votes.A;
document.getElementById("b").innerText = votes.B;
document.getElementById("c").innerText = votes.C;
document.getElementById("d").innerText = votes.D;
};