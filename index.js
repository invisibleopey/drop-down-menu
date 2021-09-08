const dropBtn = document.querySelector('.dropbtn');
function toggleDropDown() {
  document.querySelector('#myDropdown').classList.toggle('visible');
}
dropBtn.addEventListener('click', toggleDropDown);
// Close the dropdown if user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    let dropdowns = document.querySelectorAll('.dropdown-content');
    for (let i = 0; i < dropdowns.length; i += 1) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('visible')) {
        openDropdown.classList.remove('visible');
      }
    }
  }
};
