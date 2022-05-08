function changeAboutMeText() {
  var x = document.getElementById("about-text");
  changeTitleName();
      if (x.innerHTML === "Oi, eu sou Ana Carolina") {
          x.innerHTML = "Sou graduanda em Sistemas de Informação na Universidade Federal da Bahia (UFBA), Certified Tester Foundation Level (CTFL), entusiasta da Engenharia de Software, e tenho um especial interesse pela área de Testes e Qualidade de Software. Possuo quase 3 anos de experiência na área de testes e ao longo desse tempo tive a oportunidade de acompanhar e apoiar equipes ágeis (utilizando Scrum e Kanban) durante todo o Ciclo de Vida de Desenvolvimento de Software (SDLC), desde a definição de Requisitos e/ou Histórias de usuário, até a homologação com clientes. Possuo experiência com Planejamento, Execução e Controle de Testes Funcionais (Manuais) em Sistemas Web e Mobile, tanto baseados em Casos de Teste, quanto Exploratórios, aplicando técnicas e estratégias para Garantia de qualidade do Software; além de experiência com Gestão de Defeitos. Atualmente estou aprofundando os meus conhecimentos em Automação de testes e em Testes de API REST, no contexto da linguagem Java. Possuo conhecimentos em Testes Automatizados de Interface/UI com Selenium WebDriver, JUnit e Cucumber. No nível de API, possuo conhecimento em Insomnia e Postman. Para além disso, há várias outras ferramentas, práticas e tecnologias que tenho curiosidade em aprender, para melhorar as minhas habilidades enquanto QA. Ocasionalmente compartilho meus projetos no GitHub :) Outros Conhecimentos: Jira, Confluence, Redmine, BDD, Gherkin, Testes Ágeis, Testes end-to-end (e2e), Documentação de Software, Report, Práticas de DevOps, Banco de Dados (SQL, MySQL), JSON, Controle de versionamento (Git e GitHub), HTML, CSS, JavaScript.";
      } else {
           x.innerHTML = "Oi, eu sou Ana Carolina";
      }
}

function changeTitleName() {
  var y = document.getElementById("button-text");
      if (y.innerHTML === "Ler Textinho") {
          y.innerHTML = "Ler Textão";
      } else {
           y.innerHTML = "Ler Textinho";
      }
}