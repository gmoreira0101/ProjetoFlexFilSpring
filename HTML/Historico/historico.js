document.addEventListener("DOMContentLoaded", function() {
    fetch("http://localhost:8080/cadastrar")
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok: " + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const tableBody = document.querySelector("table tbody");
            tableBody.innerHTML = ''; // Limpa o conteúdo atual da tabela
            if (data.length === 0) {
                tableBody.innerHTML = '<tr><td colspan="6">Nenhum dado disponível</td></tr>';
                return;
            }
            data.forEach(prensa => {
                const row = document.createElement("tr");

                row.innerHTML = `
                    <td>${prensa.numPrensa || 'N/A'}</td>
                    <td>${prensa.prensadas || 'N/A'}</td>
                    <td>${prensa.numCavidade || 'N/A'}</td>
                    <td>${prensa.numPecas || 'N/A'}</td>
                    <td>${prensa.idPeca || 'N/A'}</td>
                    <td>${formatDate(prensa.data) || 'N/A'}</td>
                `;

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Erro ao buscar dados:", error));
});

/**
 * @param {string} dateString
 * @returns {string}
 */
function formatDate(dateString) {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
}
