function gerarHistoria() {
  const tipo = document.getElementById("tipo").value;
  const objetivo = document.getElementById("objetivo").value;
  const beneficiario = document.getElementById("beneficiario").value;
  const impacto = document.getElementById("impacto").value.trim();

  let impactoFrase;
  if (impacto) {
    impactoFrase = impacto;
  } else if (tipo === "correção") {
    impactoFrase = "corrigir falhas existentes e melhorar o fluxo atual";
  } else if (tipo === "técnica") {
    impactoFrase = "melhorar aspectos técnicos do sistema";
  } else {
    impactoFrase = "entregar valor funcional aos usuários";
  }

  const historiaIA = `Como ${beneficiario},\nQuero ${objetivo},\nPara ${impactoFrase}.`;
  const criteriosIA = [
    "Dado que estou autenticado no sistema,\nQuando acesso a funcionalidade,\nEntão devo conseguir realizar a ação desejada sem erros.",
    "Dado que preencho todos os campos obrigatórios,\nQuando clico em salvar,\nEntão a informação deve ser armazenada com sucesso.",
    "Dado que uma história esteja completa,\nQuando submetida para planning,\nEntão deve estar clara e validada pela squad."
  ];

  document.getElementById("historiaGerada").textContent = historiaIA;

  const ul = document.getElementById("criterios");
  ul.innerHTML = "";
  criteriosIA.forEach(c => {
    const li = document.createElement("li");
    li.textContent = c;
    ul.appendChild(li);
  });

  document.getElementById("resultado").style.display = "block";

  // Salva conteúdo temporário para edição/exportação simulada
  window.historiaAtual = {
    texto: historiaIA,
    criterios: criteriosIA
  };
}

function editarHistoria() {
  const novaHistoria = prompt("Edite a história gerada:", window.historiaAtual?.texto || "");
  if (novaHistoria !== null) {
    document.getElementById("historiaGerada").textContent = novaHistoria;
    window.historiaAtual.texto = novaHistoria;
  }
}

function validarHistoria() {
  alert("✅ História validada com sucesso!\nPronta para entrar na planning.");
}

function exportarParaJira() {
  alert("🚀 História exportada para o Jira (simulação).");
}