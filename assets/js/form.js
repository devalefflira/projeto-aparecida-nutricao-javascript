// Botão que adiciona os dados dos pacientes na tabela
var botaoAdicionar = document.querySelector('#adicionar-paciente');
botaoAdicionar.addEventListener('click', function (event) {
  event.preventDefault();

  var form = document.querySelector('#form-adiciona');
  var paciente = obtemPacienteDoFormulario(form);
  var pacienteTr = montaTr(paciente);
  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensagensDeErro(erros);
    return;
  }

  // Adiciona o paciente na tabela
  var tabela = document.querySelector('#tabela-pacientes');

  tabela.appendChild(pacienteTr);
  // Apaga os dados após a inserção válida dos dados na tabela
  form.reset();
  var mensagensErro = document.querySelector('#mensagens-erro');
  mensagensErro.innerHTML = '';
});

// Exibir mensagem de erro. Cria uma <li>, dentro da <ul id="mensagens-erro"> no index.html, com a mensagem de erro
function exibeMensagensDeErro(erros) {
  var ul = document.querySelector('#mensagens-erro');
  ul.innerHTML = '';
  erros.forEach(function (erro) {
    var li = document.createElement('li');
    li.textContent = erro;
    ul.appendChild(li);
  });
}

// Obtém os dados dos pacientes do formulário
function obtemPacienteDoFormulario(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  };
  return paciente;
}

// Cria uma tr na tabela
function montaTr(paciente) {
  var pacienteTr = document.createElement('tr');
  pacienteTr.classList.add('paciente');

  pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
  pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
  pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
  pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
  pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

  return pacienteTr;
}

// Cria um td na tabela
function montaTd(dado, classe) {
  var td = document.createElement('td');
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}

// Função para validar os dados inseridos no formulário
function validaPaciente(paciente) {
  var erros = [];

  if (paciente.nome.length == 0) {
    erros.push(`Campo "Nome" não pode ser em branco.`);
  }

  if (paciente.peso.length == 0) {
    erros.push(`Campo "Peso" deve ser preenchido.`);
  }

  if (!validaPeso(paciente.peso)) {
    erros.push('Peso é inválido!');
  }

  if (paciente.altura.length == 0) {
    erros.push(`Campo "Altura" deve ser preenchido.`);
  }

  if (!validaAltura(paciente.altura)) {
    erros.push('Altura inválida!');
  }

  if (paciente.gordura.length == 0) {
    erros.push(`Campo "Gordura" deve ser preenchido.`);
  }

  return erros;
}
