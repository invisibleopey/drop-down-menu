const dropBtn = document.querySelector('.dropbtn');
function toggleDropDown() {
  document.querySelector('#myDropdown').classList.toggle('visible');
}
dropBtn.addEventListener('click', toggleDropDown);
