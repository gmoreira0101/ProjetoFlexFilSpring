function cadastrar(formularioId) {
    const formulario = document.getElementById(formularioId);
    console.log(formulario);
    if (!formulario) {
        console.error(`Formulário com ID ${formularioId} não encontrado.`);
        return;
    }

    const Inrprensa = formulario.querySelector('input[name="numeroPrensa"]:not([type="hidden"])');
    console.log("Inrprensa encontrado:", Inrprensa!== null);

    const Inrprensada = formulario.querySelector('input[name="nrprensada"]');
    console.log("Inrprensada encontrado:", Inrprensada !== null);

    const Inrcavidade = formulario.querySelector('input[name="nrcavidade"]');
    console.log("Inrcavidade encontrado:", Inrcavidade !== null);

    const Iidpeca = formulario.querySelector('input[name="idpeca"]');
    console.log("Iidpeca encontrado:", Iidpeca !== null);

    const Inrpeca = formulario.querySelector('input[name="nrpeca"]');
    console.log("Inrpeca encontrado:", Inrpeca !== null);

    if (!Inrprensa || !Inrprensada || !Inrcavidade || !Iidpeca || !Inrpeca) {
        console.error("Um ou mais campos do formulário não foram encontrados.");
        return;
    }

    const hoje = new Date().toISOString().split('T')[0];

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
    .then(function (res) { 
        console.log(res);
        limpar(formulario); 
    })
    .catch(function (res) { 
        console.log(res); 
    });
}
