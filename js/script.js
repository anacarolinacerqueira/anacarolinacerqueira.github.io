/* function changeAboutMeText() {
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
} */
const shortTextCompass = "Alocada no cliente Cooperativa Central Ailos (setor financeiro), atuando como QA em uma squad ágil. Minhas principais atividades são planejamento e execução de testes de back-end e front-end nos produtos desenvolvidos pela squad. ";
const longTextCompass = "Alocada no cliente Cooperativa Central Ailos (setor financeiro), atuando como QA em uma squad ágil. Minhas principais atividades são planejamento e execução de testes de back-end e front-end nos produtos desenvolvidos pela squad. Principalmente, testes de Microsserviços (APIs Rest), testes de UI e testes mobile (Android e iOS). Principais ferramentas e tecnologias utilizadas: Postman, BrowserStack, Microsoft Azure DevOps";
const shortTextAcp = "Alocada no cliente Cooperativa Central Ailos (setor financeiro), atuando como QA em uma squad ágil. Minhas principais atividades são planejamento e execução de testes de back-end e front-end nos produtos desenvolvidos pela squad. ";
const longTextAcp = "Alocada no cliente Cooperativa Central Ailos (setor financeiro), atuando como QA em uma squad ágil. Minhas principais atividades são planejamento e execução de testes de back-end e front-end nos produtos desenvolvidos pela squad. Principalmente, testes de Microsserviços (APIs Rest), testes de UI e testes mobile (Android e iOS). Principais ferramentas e tecnologias utilizadas: Postman, BrowserStack, Microsoft Azure DevOps";
const shortTextCw = "Alocada no cliente Cooperativa Central Ailos (setor financeiro), atuando como QA em uma squad ágil. Minhas principais atividades são planejamento e execução de testes de back-end e front-end nos produtos desenvolvidos pela squad.";
const longTextCw = "Alocada no cliente Cooperativa Central Ailos (setor financeiro), atuando como QA em uma squad ágil. Minhas principais atividades são planejamento e execução de testes de back-end e front-end nos produtos desenvolvidos pela squad. Principalmente, testes de Microsserviços (APIs Rest), testes de UI e testes mobile (Android e iOS). Principais ferramentas e tecnologias utilizadas: Postman, BrowserStack, Microsoft Azure DevOps";
const shortTextSti = "Alocada no cliente Cooperativa Central Ailos (setor financeiro), atuando como QA em uma squad ágil. Minhas principais atividades são planejamento e execução de testes de back-end e front-end nos produtos desenvolvidos pela squad.";
const longTextSti = "Esta foi a minha primeira experiência profissional atuando na área de testes de software. atuando como QA em uma squad ágil. Minhas principais atividades são planejamento e execução de testes de back-end e front-end nos produtos desenvolvidos pela squad. Principalmente, testes de Microsserviços (APIs Rest), testes de UI e testes mobile (Android e iOS). Principais ferramentas e tecnologias utilizadas: Postman, BrowserStack, Microsoft Azure DevOps";
const footerText = "Ana Carolina Cerqueira, 2022. Desenvolvido com HTML, CSS e JavaScript <3"

function changeLongShortTextCompass() {
  var x = document.getElementById("compass");
      if (x.innerHTML === shortTextCompass) {
          x.innerHTML = longTextCompass;
      } else {
        if (x.innerHTML === longTextCompass){
            x.innerHTML = shortTextCompass;
        }
      }
}

function changeLongShortTextAcp() {
    var x = document.getElementById("acp");
        if (x.innerHTML === shortTextAcp) {
            x.innerHTML = longTextAcp;
        } else {
          if (x.innerHTML === longTextAcp){
              x.innerHTML = shortTextAcp;
          }
        }
  }

function changeLongShortTextCw() {
    var x = document.getElementById("cw");
        if (x.innerHTML === shortTextCw) {
            x.innerHTML = longTextCw;
        } else {
          if (x.innerHTML === longTextCw){
              x.innerHTML = shortTextCw;
          }
        }
}

function changeLongShortTextSti() {
    var x = document.getElementById("sti");
        if (x.innerHTML === shortTextSti) {
            x.innerHTML = longTextSti;
        } else {
          if (x.innerHTML === longTextSti){
              x.innerHTML = shortTextSti;
          }
        }
}


function changeViewMoreCompass() {
  var y = document.getElementById("more-compass");
    if (y.innerHTML === "ver mais detalhes") {
        changeLongShortTextCompass();  
        y.innerHTML = "ver menos detalhes";
          
    } else {
        if (y.innerHTML === "ver menos detalhes") {
        changeLongShortTextCompass();  
        y.innerHTML = "ver mais detalhes";
    }
}}

function changeViewMoreAcp() {
    var y = document.getElementById("more-acp");
      if (y.innerHTML === "ver mais detalhes") {
          changeLongShortTextAcp();  
          y.innerHTML = "ver menos detalhes";
            
      } else {
          if (y.innerHTML === "ver menos detalhes") {
          changeLongShortTextAcp();  
          y.innerHTML = "ver mais detalhes";
      }
}}

function changeViewMoreCw() {
    var y = document.getElementById("more-cw");
      if (y.innerHTML === "ver mais detalhes") {
          changeLongShortTextCw();  
          y.innerHTML = "ver menos detalhes";
            
      } else {
          if (y.innerHTML === "ver menos detalhes") {
          changeLongShortTextCw();  
          y.innerHTML = "ver mais detalhes";
      }
}}

function changeViewMoreSti() {
    var y = document.getElementById("more-sti");
      if (y.innerHTML === "ver mais detalhes") {
          changeLongShortTextSti();  
          y.innerHTML = "ver menos detalhes";
            
      } else {
          if (y.innerHTML === "ver menos detalhes") {
          changeLongShortTextSti();  
          y.innerHTML = "ver mais detalhes";
      }
}}

function showMailText() {
    const mail = document.getElementById('email-text');
    mail.style.color = '#A33100';
};

function hideMailText() {
    const mail = document.getElementById('email-text');
    mail.style.color = 'transparent';
};

function showShortTextCompass() {
    var x = document.getElementById("compass");
    x.innerHTML = shortTextCompass;
}

function showShortTextAcp() {
    var x = document.getElementById("acp");
    x.innerHTML = shortTextAcp;
}

function showShortTextCw() {
    var x = document.getElementById("cw");
    x.innerHTML = shortTextCw;
}

function showShortTextSti() {
    var x = document.getElementById("sti");
    x.innerHTML = shortTextSti;
}


function showFooterText() {
    var x = document.getElementById("footer");
    x.innerHTML = footerText;
}

function getContent(){
    showShortTextCompass();
    showShortTextAcp();
    showShortTextCw();
    showShortTextSti();
    showFooterText();
}

function simpleFade() {
    const textmore = document.getElementsByClassName('more');
    textmore.style.animation = 'fadeIn 1s';
};
