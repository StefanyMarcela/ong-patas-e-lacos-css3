const cpf = document.getElementById("cpf");

cpf.addEventListener("input", function () {
    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    this.value = valor;
});

const telefone = document.getElementById("telefone");

telefone.addEventListener("input", function () {
    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    this.value = valor;
});

const cep = document.getElementById("cep");

cep.addEventListener("input", function () {
    let valor = this.value.replace(/\D/g, "");

    valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

    this.value = valor;
});

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    alert("Cadastro concluído com sucesso! Nossa equipe de voluntários entrará em contato com você em breve.");

    formulario.reset();
});