const botaoMenu = document.querySelector(".menu-hamburguer");
const menuLinks = document.querySelector(".menu-links");

if (botaoMenu && menuLinks) {
    botaoMenu.addEventListener("click", function () {
        menuLinks.classList.toggle("ativo");
    });
}


// FORMULÁRIO
const formulario = document.querySelector("form");

if (formulario) {

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


    cep.addEventListener("blur", function () {
        const cepLimpo = this.value.replace(/\D/g, "");

        if (cepLimpo.length !== 8) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
            .then(response => response.json())
            .then(dados => {

                if (dados.erro) {
                    alert("CEP não encontrado.");
                    return;
                }

                document.getElementById("endereco").value = dados.logradouro;
                document.getElementById("cidade").value = dados.localidade;
                document.getElementById("estado").value = dados.uf;
            })
            .catch(() => {
                alert("Não foi possível consultar o CEP.");
            });
    });


    formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const mensagem = document.getElementById("mensagem-sucesso");

    mensagem.textContent =
        "Cadastro concluído com sucesso! Nossa equipe entrará em contato em breve.";

    mensagem.style.display = "block";

    setTimeout(function () {
        mensagem.style.display = "none";
    }, 4000);

    formulario.reset();
    });
}
