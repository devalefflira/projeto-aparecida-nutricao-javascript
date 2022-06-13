var pacientes = document.querySelectorAll('.paciente');

var tabela = document.querySelector('table');

// Remove linha da tabela após duplo clique
tabela.addEventListener('dblclick', function (event) {
  event.target.parentNode.classList.add('fadeOut');
  setTimeout(function () {
    event.target.parentNode.remove();
  }, 500);
});
