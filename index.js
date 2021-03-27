function buscaDados() {
  const cep = document.getElementById("cep").value;

  //   axios.get("https://viacep.com.br/ws/" + cep + "/json/").then(console.log);
  axios
    .get(`https://viacep.com.br/ws/${cep}/json/`)
    .then(function (resposta) {
        const data = resposta.data
        const resutaldo = document.getElementById('resultado');
        let complemento = ""
        if (resposta.data.complemento !== ""){
            complemento = `Complemento: ${resposta.data.complemento}<br/>`
        }

        resutaldo.innerHTML = `
            <strong>Resultado</strong> <br/>
            <br/>
            Bairro: ${resposta.data.bairro}<br/>
            ${complemento}
            DDD: ${resposta.data.ddd}<br/>
            Código IBGE: ${resposta.data.ibge}<br/>
            Cidade: ${resposta.data.localidade}<br/>
            Rua: ${resposta.data.logradouro}<br/>
            Estado: ${resposta.data.uf}<br/>
        `
    });
}
