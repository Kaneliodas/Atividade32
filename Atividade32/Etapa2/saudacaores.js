let usuario = null;

function saudacao() {
  try {
    let nome = usuario.nome;
    console.log("Olá, " + nome);
  } catch (error) {
    console.error("Erro ao acessar o nome do usuário:", error.message);
    // Tratamento alternativo, como definir um nome padrão
    console.log("Olá, usuário anônimo");
  } finally {
    // Código que sempre executa, independente de erro
    console.log("Saudação concluída.");
  }
}

saudacao();