const loggedIn = localStorage.getItem("loggedIn");
const username = localStorage.getItem("username");
const authArea = document.getElementById("authArea");

if (loggedIn === "true" && username) {
  const voterId = localStorage.getItem("voterId");
  authArea.innerHTML = `
    <div style="position:relative; display:inline-block; margin:10px;">
      
      <div onclick="toggleMenu()" style="
        width:45px; height:45px; background:crimson; border-radius:50%;
        display:flex; align-items:center; justify-content:center;
        color:white; font-size:22px; font-weight:bold; cursor:pointer;
      ">${username[0].toUpperCase()}</div>


      <div id="dropMenu" style="
        display:none;
        position:absolute; top:55px; left:0;
        background:white; border-radius:10px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        min-width:160px; z-index:999;
        overflow:hidden;
      ">
        <p style="margin:0; padding:10px 15px; color:black; border-bottom:1px solid #eee;">
          👤 ${username}
        </p>
        <p style="margin:0; padding:10px 15px; color:gray; border-bottom:1px solid #eee;">
           ID: ${voterId}
        </p>
        
        <p onclick="logout()" style="
          margin:0; padding:10px 15px; color:crimson;
          cursor:pointer; font-weight:bold;
        ">📤 Log Out</p>
      </div>
    </div>
  `;
} else {
  authArea.innerHTML = `<a href="log.html" class="lodIn"><button>LOG IN</button></a>`;
}
function toggleMenu() {
  const menu = document.getElementById("dropMenu");
  menu.style.display = menu.style.display === "none" ? "block" : "none";
}
document.addEventListener("click", function (e) {
  const menu = document.getElementById("dropMenu");
  if (menu && !authArea.contains(e.target)) {
    menu.style.display = "none";
  }
});

function logout() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("username");
  localStorage.removeItem("voterId");
  localStorage.removeItem("userAge");
  window.location.href = "log.html";
}
