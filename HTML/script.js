document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("mainForm");
    const tableBody = form.querySelector("tbody");

    // Função para criar uma linha na tabela
    function createRow(index) {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index}</td>
            <td><input type="number" name="nrprensada${index}" required></td>
            <td><input type="number" name="nrcavidade${index}" required></td>
            <td><input type="number" name="nrpeca${index}" required></td>
            <td><input type="text" name="idpeca${index}" required></td>
            <td><button type="button" onclick="cadastrar(${index})">Enviar</button></td>
        `;
        tableBody.appendChild(row);
    }

    // Criação de 3 linhas para o exemplo
    for (let i = 1; i <= 12; i++) {
        createRow(i);
    }

    // Botão para visualizar histórico
    const historicoButton = document.getElementById("historicoButton");
    historicoButton.addEventListener("click", () => {
        window.location.href = './Historico/historico.html';
    });
});

// Função para cadastrar dados
function cadastrar(index) {
    const form = document.getElementById("mainForm");
    const nrprensada = form.querySelector(`input[name="nrprensada${index}"]`);
    const nrcavidade = form.querySelector(`input[name="nrcavidade${index}"]`);
    const nrpeca = form.querySelector(`input[name="nrpeca${index}"]`);
    const idpeca = form.querySelector(`input[name="idpeca${index}"]`);
    const button = form.querySelector(`button[onclick="cadastrar(${index})"]`);

    // Validação básica dos dados
    if (!nrprensada.value || !nrcavidade.value || !nrpeca.value || !idpeca.value) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Desabilita o botão para evitar cliques duplos
    button.disabled = true;

    const hoje = new Date().toISOString().split('T')[0];

    fetch("http://localhost:8080/cadastrar", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            numPrensa: index,
            prensadas: nrprensada.value,
            numCavidade: nrcavidade.value,
            numPecas: nrpeca.value,
            idPeca: idpeca.value,
            data: hoje
        })
    })
    .then(response => response.ok ? response.json() : Promise.reject('Erro ao cadastrar os dados.'))
    .then(data => {
        console.log('Dados cadastrados com sucesso:', data);
        alert("Dados cadastrados com sucesso!");
        // Limpa os campos do formulário
        nrprensada.value = '';
        nrcavidade.value = '';
        nrpeca.value = '';
        idpeca.value = '';
    })
    .catch(error => {
        console.error('Erro:', error);
        alert("Ocorreu um erro ao cadastrar os dados. Por favor, tente novamente.");
    })
    .finally(() => {
        button.disabled = false; // Habilita o botão após a requisição
    });
}
