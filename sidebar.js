function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

/*
// JavaScript to toggle the sidebar
const sidebar = document.querySelector('.sidebar');
const sidebarCollapseBtn = document.getElementById('sidebarCollapse');
const contentContainer = document.querySelector('.content-container');

sidebarCollapseBtn.addEventListener('click', () => {sidebar.classList.toggle('active');contentContainer.classList.toggle('content-shifted');});*/
