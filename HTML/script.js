const formulario = document.querySelector("form");
const Inrprensa = document.querySelector(".numprensa");
const Inrprensada = document.querySelector(".nrprensada");
const Inrcavidade = document.querySelector(".nrcavidade");
const Iidpeca = document.querySelector(".idpeca");
const Inrpeca = document.querySelector(".nrpeca");
const hoje = new Date().toISOString().split('T')[0];

function cadastrar() {
    fetch("http://localhost:8080/cadastrar", {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
            numPrensa: Inrprensa.value,
            prensadas: Inrprensada.value,
            numCavidade: Inrcavidade.value,
            numPecas: Inrpeca.value,
            idPeca: Iidpeca.value,
            data: hoje
        })
    })
    .then(function (res) { console.log(res) })
    .catch(function (res) { console.log(res) })
}

function limpar() {
    Inrprensada.value = "";
    Inrcavidade.value = "";
    Iidpeca.value = "";
    Inrpeca.value = "";
}

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log(Inrprensa.value)
    console.log(Inrprensada.value)
    console.log(Inrcavidade.value)
    console.log(Inrpeca.value)
    console.log(Iidpeca.value)
    cadastrar();
    limpar();
})