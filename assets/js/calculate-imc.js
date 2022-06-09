var pacientes = document.querySelectorAll('.paciente');

// Loop
for (var i = 0; i < pacientes.length; i++) {
  //Variáveis
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;

  var tdImc = paciente.querySelector('.info-imc');

  var pesoEhValido = true;
  var alturaEhValida = true;

  // Condicionais
  if (peso <= 0 || peso >= 1000) {
    console.log('Peso inválido!');
    pesoEhValido = false;
    tdImc.textContent = 'Peso inválido';
    paciente.classList.add('dado-invalido');
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log('Altura inválida!');
    alturaEhValida = false;
    tdImc.textContent = 'Altura inválida';
    paciente.classList.add('dado-invalido');
  }

  if (alturaEhValida && pesoEhValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
}

function validaPeso() {
  
}

function calculaImc(peso, altura) {
  var imc = 0;
  imc = peso / (altura * altura);
  return imc.toFixed(2);
}


