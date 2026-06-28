async function carregarClima() {
  const lat = -25.57;
  const lon = -52.03;
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;

  try {
    const resposta = await fetch(apiUrl);

    if (!resposta.ok) {
      throw new Error("Falha na comunicação com a API de clima.");
    }

    const dados = await resposta.json();
    const climaAtual = dados.current_weather;

    const tempElement = document.getElementById("clima-temperatura");
    const iconeElement = document.getElementById("clima-icone");
    const descElement = document.getElementById("clima-descricao");

    if (tempElement) {
      tempElement.innerText = `${Math.round(climaAtual.temperature)}°C`;
    }

    const codigoClima = climaAtual.weathercode;
    if (descElement && iconeElement) {
      if (codigoClima === 0) {
        iconeElement.innerText = "☀️";
        descElement.innerText = "Céu limpo ideal para a partida.";
      } else if (codigoClima >= 1 && codigoClima <= 3) {
        iconeElement.innerText = "⛅";
        descElement.innerText = "Parcialmente nublado, clima agradável.";
      } else if (codigoClima >= 51 && codigoClima <= 67) {
        iconeElement.innerText = "🌧️";
        descElement.innerText = "Chuva leve. Relvado escorregadio!";
      } else if (codigoClima >= 71 && codigoClima <= 99) {
        iconeElement.innerText = "⛈️";
        descElement.innerText = "Condições severas. Atenção ao jogo!";
      } else {
        iconeElement.innerText = "☁️";
        descElement.innerText = "Tempo instável.";
      }
    }
  } catch (erro) {
    console.error("Erro ao buscar o clima:", erro);
    const tempElement = document.getElementById("clima-temperatura");
    const iconeElement = document.getElementById("clima-icone");
    const descElement = document.getElementById("clima-descricao");

    if (tempElement) tempElement.innerText = "--°C";
    if (iconeElement) iconeElement.innerText = "❌";
    if (descElement) descElement.innerText = "Indisponível no momento.";
  }
}

$(document).ready(function () {
  if ($("#dashboard").length > 0) {
    carregarTabelaClassificacao();
  }

  if ($("#cpf").length > 0) {
    $("#cpf").mask("000.000.000-00", { reverse: true });
    $("#telefone").mask("(00) 00000-0000");
    $("#cep").mask("00000-000");
  }

  $("#cep").on("blur", async function () {
    const cepDigitado = $(this).val().replace(/\D/g, "");

    if (cepDigitado.length === 8) {
      $("#logradouro").val("A buscar...");
      $("#bairro").val("A buscar...");
      $("#cidade").val("A buscar...");

      try {
        const resposta = await fetch(
          `https://viacep.com.br/ws/${cepDigitado}/json/`,
        );
        const dados = await resposta.json();

        if (dados.erro) {
          throw new Error("CEP não encontrado");
        }

        $("#logradouro").val(dados.logradouro);
        $("#bairro").val(dados.bairro);
        $("#cidade").val(dados.localidade);
      } catch (erro) {
        console.error(erro);
        alert("CEP inválido ou não encontrado. Por favor, verifique.");
        $("#logradouro").val("");
        $("#bairro").val("");
        $("#cidade").val("");
      }
    }
  });

  const rascunho = localStorage.getItem("rascunhoAEC");
  if (rascunho && $("#formCadastro").length > 0) {
    const dadosGuardados = JSON.parse(rascunho);
    $("#nome").val(dadosGuardados.nome);
    $("#email").val(dadosGuardados.email);
    $("#telefone").val(dadosGuardados.telefone);
    $("#cpf").val(dadosGuardados.cpf);
  }

  $("#formCadastro input").on("keyup change", function () {
    if ($("#formCadastro").length > 0) {
      const formData = {
        nome: $("#nome").val(),
        email: $("#email").val(),
        telefone: $("#telefone").val(),
        cpf: $("#cpf").val(),
      };
      localStorage.setItem("rascunhoAEC", JSON.stringify(formData));
    }
  });

  $("#formCadastro").on("submit", async function (evento) {
    evento.preventDefault();

    const telefone = $("#telefone").val();
    const regexTelefone = /^\(\d{2}\)\s\d{5}-\d{4}$/;

    if (!regexTelefone.test(telefone)) {
      alert(
        "ATENÇÃO: O telefone inserido é inválido. Siga o formato (XX) XXXXX-XXXX",
      );
      $("#telefone").focus();
      return;
    }

    const atleta = {
      nome: $("#nome").val(),
      email: $("#email").val(),
      telefone: telefone,
      cpf: $("#cpf").val(),
      posicao: $("#posicao").val(),
      cep: $("#cep").val(),
      logradouro: $("#logradouro").val(),
      bairro: $("#bairro").val(),
      cidade: $("#cidade").val(),
      categoria: $('input[name="categoria"]:checked').val(),
    };

    try {
      await $.ajax({
        url: "http://localhost:3000/atletas",
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(atleta),
      });

      alert(
        "Inscrição efetuada com sucesso! Os seus dados foram salvos no servidor local.",
      );

      $("#formCadastro")[0].reset();
      localStorage.removeItem("rascunhoAEC");
    } catch (erro) {
      console.error("Erro ao guardar dados do atleta:", erro);
      alert(
        "Erro ao ligar ao servidor de dados. Confirme se o json-server está ativo.",
      );
    }
  });
});

async function carregarTabelaClassificacao() {
  try {
    const dadosClassificacao = await $.getJSON(
      "http://localhost:3000/classificacao",
    );

    const $tbody = $("#dashboard table tbody");
    $tbody.empty();

    dadosClassificacao.forEach(function (equipa) {
      const linhaHtml = `
                <tr class="border-bottom">
                    <td class="py-3"><strong class="fs-4 font-heading text-dark">${equipa.posicao}</strong></td>
                    <td class="py-3">
                        <div class="d-flex align-items-center">
                            <div class="team-badge ${equipa.classeBadge} me-3">${equipa.sigla}</div>
                            <strong class="text-dark">${equipa.nome}</strong>
                        </div>
                    </td>
                    <td class="py-3 text-center"><strong class="fs-4 font-heading text-dark">${equipa.pontos}</strong></td>
                    <td class="py-3 text-center text-muted">${equipa.vitorias}</td>
                    <td class="py-3 text-center text-muted">${equipa.gols}</td>
                </tr>
            `;
      $tbody.append(linhaHtml);
    });
  } catch (erro) {
    console.error("Erro ao carregar os dados de classificação:", erro);
  }
}

document.addEventListener("DOMContentLoaded", carregarClima);
