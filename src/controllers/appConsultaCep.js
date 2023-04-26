/*
 *** Este App tem a função de consultar o Cep em base dados e inserir o conteúdo no form
 *** Esta disponibilizado para toda a aplicação em tempo de execução
 */

/*Capturando o cep do form*/

const cep = document.querySelector("#cep");
const showData = (result) => {
  for (const campo in result) {
    if (document.querySelector("#" + campo)) {
      document.querySelector("#" + campo).value = result[campo];
    }
  }
};
cep.addEventListener("blur", (e) => {
  let search = cep.value.replace("-", "");
  const options = {
    method: "GET",
    mode: "cors",
    cache: "default",
  };
  fetch(`https://viacep.com.br/ws/${search}/json/`, options)
    .then((response) => {
      response.json().then((data) => showData(data));
    })
    .catch((e) => console.log("Deu erro" + e, message));
});
