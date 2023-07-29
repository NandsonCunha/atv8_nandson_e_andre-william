const pacientes = [];

function adicionarPaciente(nome, urgencia) {
    pacientes.push({ nome, urgencia });
    atualizarListaEspera();
}

function adicionarNormal() {
    const nome = document.getElementById('nome').value;
    adicionarPaciente(nome, false);
}

function adicionarUrgencia() {
    const nome = document.getElementById('nome').value;
    adicionarPaciente(nome, true);
}

function atenderProximo() {
    if (pacientes.length === 0) {
        document.getElementById('pacienteAtendimento').textContent = 'Nenhum paciente em atendimento no momento.';
    } else {
        const proximoPaciente = pacientes.shift();
        document.getElementById('pacienteAtendimento').textContent = `Atendendo: ${proximoPaciente.nome}${proximoPaciente.urgencia ? ' (Urgência)' : ''}`;
        atualizarListaEspera();
    }
}

function atualizarListaEspera() {
    const listaEsperaElement = document.getElementById('listaEspera');
    listaEsperaElement.innerHTML = '';
    pacientes.forEach(paciente => {
        const listItem = document.createElement('li');
        listItem.textContent = `${paciente.nome}${paciente.urgencia ? ' (Urgência)' : ''}`;
        listaEsperaElement.appendChild(listItem);
    });
}