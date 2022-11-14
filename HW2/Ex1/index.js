const toggle = document.getElementById('toggle');
const items = document.getElementById('items');
toggle.onclick = function(){
  toggle.classList.toggle('activate')
  items.classList.toggle('activate')
}