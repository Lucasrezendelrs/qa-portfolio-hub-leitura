# Portfólio de Qualidade de Software - Hub de Leitura

## Introdução

Este portfólio documenta minha jornada de aprendizado e aplicação de práticas de Qualidade de Software (QA) em uma aplicação web fictícia, o **Hub de Leitura**. O objetivo é demonstrar a evolução das minhas habilidades em QA, desde o planejamento inicial e testes manuais até a automação, testes de performance e integração contínua. Cada seção representa uma fase de desenvolvimento e aprendizado, com exemplos práticos e reflexões sobre os desafios e lições aprendidas.

## Sumário

1. [Planejamento Inicial](#1-planejamento-inicial)
2. [Testes Manuais](#2-testes-manuais)


---

## 1. Planejamento Inicial

Nesta fase, o foco é estabelecer as bases para um processo de QA ágil e eficiente. Para isso, foi desenvolvido um plano de testes facilitado, alinhado à ISO 29119-3, que valoriza a documentação mínima necessária, flexibilidade e integração contínua com o desenvolvimento. O planejamento prioriza a adaptação às mudanças rápidas, execução iterativa dos testes, mantendo o controle dos riscos e garantindo a qualidade de forma leve e alinhada aos ciclos curtos de entrega do projeto.

### 1.1. Criação do Plano de Teste

O plano de teste é o documento central que guia todas as atividades de QA. Ele detalha o que será testado, como será testado, quem será responsável e quais recursos serão necessários. Para o Hub de Leitura, o plano de teste aborda funcionalidades como cadastro de usuários, busca de livros, adição de livros à lista de leitura e marcação de progresso de leitura.

[Link para o Plano de Teste (em breve)]

### 1.2. Definição do Escopo e Objetivos

O escopo define os limites do que será testado, enquanto os objetivos especificam o que se espera alcançar com os testes. Para o Hub de Leitura, o escopo inicial foca nas funcionalidades críticas do usuário, como autenticação, gerenciamento de perfil e interações básicas com o catálogo de livros. Os objetivos incluem garantir a funcionalidade correta, a usabilidade e a segurança dos dados do usuário.

### 1.3. Estrutura de Documentação

A organização da documentação é crucial para a rastreabilidade e a manutenção do projeto de QA. Este repositório do GitHub serve como o ponto central para toda a documentação, com links claros para cada registro. A estrutura de pastas será organizada para refletir as fases do portfólio, facilitando a navegação e o acesso às informações.

---

## 2. Testes Manuais

Os testes manuais são a base de qualquer estratégia de QA, permitindo uma exploração aprofundada da aplicação e a identificação de defeitos que podem ser difíceis de capturar com testes automatizados. Nesta seção, apresento os casos de teste manuais desenvolvidos para o Hub de Leitura, as evidências dos testes executados e o processo de registro de defeitos.

### 2.1. Casos de Teste Manuais

Os casos de teste são descrições detalhadas de cenários de teste, incluindo pré-condições, passos de execução e resultados esperados. Eles são projetados para cobrir as funcionalidades do Hub de Leitura, garantindo que cada aspecto da aplicação seja validado. Exemplos incluem:

*   **CT001: Cadastro de Novo Usuário**
    *   **Pré-condições:** Acesso à página de cadastro.
    *   **Passos:**
        1.  Acessar a URL de cadastro.
        2.  Preencher todos os campos obrigatórios (Email, Senha).
        3.  Clicar no botão 'Cadastrar'.
    *   **Resultado Esperado:** Usuário é redirecionado para a página inicial logado.

*   **CT002: Busca de Livro por Título**
    *   **Pré-condições:** Usuário logado na plataforma.
    *   **Passos:**
        1.  Navegar para a barra de busca.
        2.  Digitar um título de livro existente (ex: 'O Senhor dos Anéis').
        3.  Pressionar Enter ou clicar no ícone de busca.
    *   **Resultado Esperado:** Lista de livros filtrada exibindo 'O Senhor dos Anéis' e obras relacionadas.

[Link para Casos de Teste Manuais (em breve)]



