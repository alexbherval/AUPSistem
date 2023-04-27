const frmPessoa = document.getElementById("frmPessoa");

frmPessoa.addEventListener("submit", function (ev) {
  ev.preventDefault();
  const beneficioSocial = document.getElementById("beneficioSocial").value;
  const CPF = document.getElementById("CPF").value;
  const RG = document.getElementById("RG").value;
  const NIS = document.getElementById("NIS").value;
  const email = document.getElementById("email").value;
  const nome = document.getElementById("nome").value;
  const sobreNome = document.getElementById("sobreNome").value;
  const dataNasc = document.getElementById("dataNasc").value;
  const cor = document.getElementById("cor").value;
  const PCD = document.getElementById("PCD").value;
  const genero = document.getElementById("genero").value;
  const estadoCivil = document.getElementById("estadoCivil").value;
  const profissao = document.getElementById("profissao").value;
  const statusOcupacional = document.getElementById("statusOcupacional").value;
  const celular = document.getElementById("celular").value;
  const fixo = document.getElementById("fixo").value;
  const nomePai = document.getElementById("nomePai").value;
  const nomeMae = document.getElementById("nomeMae").value;
  const cep = document.getElementById("cep").value;
  const logradouro = document.getElementById("logradouro").value;
  const numero = document.getElementById("numero").value;
  const bairro = document.getElementById("bairro").value;
  const municipio = document.getElementById("municipio").value;
  const uf = document.getElementById("uf").value;
});

/*const axios = require("axios");

const cpf = "08066273797"; // Substitua pelo CPF que deseja consultar

axios
  .get(`https://www.receitaws.com.br/v1/cpf/${cpf}`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.log(error);
  });
*/
