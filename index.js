document.getElementById('menuButton').addEventListener('click', function () {
  document.getElementById('mobileMenu').classList.toggle('hidden');
});

document.getElementById('closeButton').addEventListener('click', function () {
  document.getElementById('mobileMenu').classList.add('hidden');
});
