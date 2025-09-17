# Portfólio de Qualidade de Software - Hub de Leitura

## Introdução

Este portfólio documenta minha jornada de aprendizado e aplicação de práticas de Qualidade de Software (QA) em uma aplicação web fictícia, o **Hub de Leitura**. O objetivo é demonstrar a evolução das minhas habilidades em QA, desde o planejamento inicial e testes manuais até a automação, testes de performance e integração contínua. Cada seção representa uma fase de desenvolvimento e aprendizado, com exemplos práticos e reflexões sobre os desafios e lições aprendidas.

## Sumário

1. [Planejamento Inicial](#planejamento-inicial)
2. [Testes Manuais](#testes-manuais)
3. [Testes Automatizados E2E e API](#testes-automatizados-e2e-e-api)
4. [Testes de Performance e Carga](#testes-de-performance-e-carga)
5. [Integração Contínua (CI/CD)](#integracao-continua-ci/cd)
6. [Métricas e KPIs de QA](#metricas-e-kpis-de-qa)
7. [Reflexões Pessoais e Jornada de Aprendizado](#reflexoes-pessoais-e-jornada-de-aprendizado)
8. [Conecte-se Comigo](#conecte-se-comigo)

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

### 2.2. Evidências dos Testes Executados

Para cada caso de teste executado, são coletadas evidências visuais (prints de tela) e relatórios que comprovam a execução e o resultado. Isso é fundamental para a rastreabilidade e para a comunicação de status do teste. As evidências são organizadas por caso de teste e data de execução.

[Link para Evidências de Testes (em breve)]

### 2.3. Registro e Documentação de Defeitos Encontrados

Defeitos são registrados de forma detalhada, incluindo passos para reprodução, severidade, prioridade e informações do ambiente. O processo de registro de defeitos segue um fluxo claro para garantir que os problemas sejam comunicados eficazmente à equipe de desenvolvimento e acompanhados até a resolução.

[Link para Registro de Defeitos (em breve)]

---

## 3. Testes Automatizados E2E e API

A automação de testes é crucial para garantir a qualidade contínua em ciclos de desenvolvimento ágeis. Nesta seção, demonstro a implementação de testes automatizados End-to-End (E2E) e de API para o Hub de Leitura, incluindo a escolha das ferramentas, a estrutura do projeto e exemplos práticos.

### 3.1. Escolha e Justificativa das Ferramentas

Para testes E2E e de API, escolhi **Cypress**, uma ferramenta moderna e completa que permite testar tudo o que roda em um navegador. Sua arquitetura única oferece uma experiência de desenvolvimento rápida, confiável e com excelente capacidade de depuração. O Cypress será utilizado tanto para os testes de interface (E2E) quanto para os testes de API, aproveitando sua capacidade de fazer requisições HTTP diretamente, o que centraliza as ferramentas e simplifica o projeto.

### 3.2. Estrutura do Projeto de Automação no GitHub

O projeto de automação será estruturado de forma modular e escalável, facilitando a manutenção e a adição de novos testes. A estrutura incluirá:

*   `e2e-tests/`: Contém os testes E2E (Playwright).
    *   `tests/`: Arquivos de teste.
    *   `pages/`: Page Object Model (POM).
    *   `utils/`: Funções utilitárias.
*   `api-tests/`: Contém os testes de API (Rest-Assured).
    *   `src/main/java/`: Código fonte dos testes.
    *   `src/test/java/`: Testes de API.
*   `reports/`: Relatórios de execução dos testes automatizados.

[Link para o Repositório de Automação (em breve)]

### 3.3. Exemplos Práticos de Testes Automatizados

**Exemplo de Teste E2E (Playwright - Login de Usuário):**

```javascript
// e2e-tests/tests/login.spec.js
const { test, expect } = require('@playwright/test');

test('should allow a user to login', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('input[name="email"]', 'teste@example.com');
  await page.fill('input[name="password"]', 'senha123');
  await page.click('button[type="submit"]');
  await expect(page).toHaveURL('http://localhost:3000/dashboard');
  await expect(page.locator('.welcome-message')).toContainText('Bem-vindo, teste@example.com');
});
```

**Exemplo de Teste de API (Rest-Assured - Obter Detalhes de Livro):**

```java
// api-tests/src/test/java/com/hubleitura/api/BookApiTest.java
package com.hubleitura.api;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.*;

public class BookApiTest {

    @BeforeAll
    public static void setup() {
        RestAssured.baseURI = "http://localhost:8080/api";
    }

    @Test
    public void getBookDetailsById() {
        Response response = given()
            .pathParam("id", "123")
        .when()
            .get("/books/{id}");

        response.then()
            .statusCode(200)
            .body("id", equalTo("123"))
            .body("title", notNullValue())
            .body("author", notNullValue());
    }
}
```

### 3.4. Relatórios de Execução

Os relatórios de execução fornecem uma visão clara do status dos testes automatizados, incluindo o número de testes passados, falhados e ignorados. Para Playwright, o HTML Reporter será utilizado, e para Rest-Assured, relatórios gerados por frameworks como Allure ou JUnit.

[Link para Relatórios de Testes Automatizados (em breve)]

---

## 4. Testes de Performance e Carga

Testes de performance e carga são essenciais para garantir que o Hub de Leitura seja escalável e responsivo sob diferentes níveis de tráfego. Nesta seção, detalho a abordagem para esses testes, os scripts utilizados e a análise dos resultados.

### 4.1. Definição de Cenários de Carga Relevantes

Os cenários de carga são baseados no comportamento esperado dos usuários do Hub de Leitura. Exemplos incluem:

*   **Cenário 1: Picos de Login:** Simular 500 usuários tentando logar simultaneamente.
*   **Cenário 2: Busca Concorrente:** Simular 1000 usuários realizando buscas de livros ao mesmo tempo.
*   **Cenário 3: Adição de Livros à Lista:** Simular 200 usuários adicionando livros às suas listas de leitura.

### 4.2. Scripts de Testes (ex: JMeter, k6)

Para a criação dos scripts de teste de performance, utilizarei **Apache JMeter** devido à sua interface gráfica intuitiva e capacidade de simular diversos tipos de requisições. Alternativamente, **k6** pode ser usado para cenários mais complexos e integração com código.

**Exemplo de Script JMeter (Requisição HTTP para Login):**

```xml
<!-- Exemplo simplificado de um Test Plan no JMeter para login -->
<jmeterTestPlan version="1.2" properties="5.0" jmeter="5.4.1">
  <hashTree>
    <TestPlan guiclass="TestPlanGui" testclass="TestPlan" testname="Login Test Plan" enabled="true">
      <stringProp name="TestPlan.comments"></stringProp>
      <boolProp name="TestPlan.functional_mode">false</boolProp>
      <boolProp name="TestPlan.tearDown_on_shutdown">true</boolProp>
      <boolProp name="TestPlan.serialize_threadgroups">false</boolProp>
      <elementProp name="TestPlan.user_defined_variables" elementType="Arguments" guiclass="ArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
        <collectionProp name="Arguments.arguments"/>
      </elementProp>
      <stringProp name="TestPlan.user_define_classpath"></stringProp>
    </TestPlan>
    <hashTree>
      <ThreadGroup guiclass="ThreadGroupChildPanel" testclass="ThreadGroup" testname="Users Login" enabled="true">
        <stringProp name="ThreadGroup.on_sample_error">continue</stringProp>
        <elementProp name="ThreadGroup.main_controller" elementType="LoopController" guiclass="LoopControlPanel" testclass="LoopController" testname="Loop Controller" enabled="true">
          <boolProp name="LoopController.continue_forever">false</boolProp>
          <stringProp name="LoopController.loops">1</stringProp>
        </elementProp>
        <stringProp name="ThreadGroup.num_threads">100</stringProp>
        <stringProp name="ThreadGroup.ramp_time">10</stringProp>
        <boolProp name="ThreadGroup.scheduler">false</boolProp>
        <stringProp name="ThreadGroup.duration"></stringProp>
        <stringProp name="ThreadGroup.delay"></stringProp>
        <boolProp name="ThreadGroup.same_user_on_next_iteration">true</boolProp>
      </ThreadGroup>
      <hashTree>
        <HTTPSamplerProxy guiclass="HttpTestSampleGui" testclass="HTTPSamplerProxy" testname="Login Request" enabled="true">
          <elementProp name="HTTPsampler.Arguments" elementType="Arguments" guiclass="HTTPArgumentsPanel" testclass="Arguments" testname="User Defined Variables" enabled="true">
            <collectionProp name="Arguments.arguments">
              <elementProp name="email" elementType="HTTPArgument">
                <boolProp name="HTTPArgument.always_encode">false</boolProp>
                <stringProp name="Argument.value">user${__threadNum}@example.com</stringProp>
                <stringProp name="Argument.metadata">=</stringProp>
                <boolProp name="HTTPArgument.use_equals">true</boolProp>
                <stringProp name="Argument.name">email</stringProp>
              </elementProp>
              <elementProp name="password" elementType="HTTPArgument">
                <boolProp name="HTTPArgument.always_encode">false</boolProp>
                <stringProp name="Argument.value">password123</stringProp>
                <stringProp name="Argument.metadata">=</stringProp>
                <boolProp name="HTTPArgument.use_equals">true</boolProp>
                <stringProp name="Argument.name">password</stringProp>
              </elementProp>
            </collectionProp>
          </elementProp>
          <stringProp name="HTTPSampler.domain">localhost</stringProp>
          <stringProp name="HTTPSampler.port">8080</stringProp>
          <stringProp name="HTTPSampler.protocol">http</stringProp>
          <stringProp name="HTTPSampler.contentEncoding"></stringProp>
          <stringProp name="HTTPSampler.path">/login</stringProp>
          <stringProp name="HTTPSampler.method">POST</stringProp>
          <boolProp name="HTTPSampler.follow_redirects">true</boolProp>
          <boolProp name="HTTPSampler.auto_redirects">false</boolProp>
          <boolProp name="HTTPSampler.use_keepalive">true</boolProp>
          <boolProp name="HTTPSampler.DO_MULTIPART_POST">false</boolProp>
          <stringProp name="HTTPSampler.embedded_url_allow_RE"></stringProp>
          <stringProp name="HTTPSampler.embedded_url_exclude_RE"></stringProp>
          <stringProp name="HTTPSampler.connect_timeout"></stringProp>
          <stringProp name="HTTPSampler.response_timeout"></stringProp>
        </HTTPSamplerProxy>
        <hashTree/>
      </hashTree>
    </hashTree>
  </hashTree>
</jmeterTestPlan>
```

[Link para Scripts de Testes de Performance (em breve)]

### 4.3. Relatórios e Análise dos Resultados

Após a execução dos testes de carga, os resultados são analisados para identificar gargalos, medir o tempo de resposta, a taxa de erros e a utilização de recursos do sistema. Relatórios detalhados, incluindo gráficos de throughput, latência e erros, serão gerados para visualização e tomada de decisão.

[Link para Relatórios de Performance (em breve)]

---

## 5. Integração Contínua (CI/CD)

A integração contínua é fundamental para a entrega rápida e confiável de software de alta qualidade. Nesta seção, demonstro como os testes automatizados são integrados a um pipeline de CI/CD, garantindo que cada alteração no código seja validada automaticamente.

### 5.1. Configuração de Pipelines para Execução Automatizada de Testes

Utilizarei **GitHub Actions** para configurar pipelines de CI/CD que serão acionados em cada push ou Pull Request (PR) para o repositório principal. O pipeline incluirá etapas para:

1.  **Build do Projeto:** Compilação da aplicação (se aplicável).
2.  **Execução de Testes Unitários:** (Se existirem na aplicação).
3.  **Execução de Testes E2E:** Execução dos testes Playwright.
4.  **Execução de Testes de API:** Execução dos testes Rest-Assured.
5.  **Geração de Relatórios:** Publicação dos relatórios de teste.

**Exemplo de Configuração GitHub Actions (`.github/workflows/main.yml`):**

```yaml
# .github/workflows/main.yml
name: CI/CD Pipeline - QA Portfolio

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  build-and-test:
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code
      uses: actions/checkout@v2

    - name: Setup Node.js for Playwright
      uses: actions/setup-node@v2
      with:
        node-version: '16'

    - name: Install Playwright dependencies
      run: | 
        npm install -g playwright
        playwright install --with-deps

    - name: Run E2E tests with Playwright
      run: npm test --workspace=e2e-tests

    - name: Setup Java for API tests
      uses: actions/setup-java@v2
      with:
        distribution: 'temurin'
        java-version: '11'

    - name: Run API tests with Maven
      run: mvn test --batch-mode --file api-tests/pom.xml

    - name: Upload Playwright Test Results
      uses: actions/upload-artifact@v2
      if: always()
      with:
        name: playwright-report
        path: e2e-tests/playwright-report/

    - name: Upload API Test Results
      uses: actions/upload-artifact@v2
      if: always()
      with:
        name: api-test-results
        path: api-tests/target/surefire-reports/
```

### 5.2. Demonstração de Execução em PRs ou Commits

Serão fornecidos links para exemplos de execuções de pipeline no GitHub, mostrando o status dos testes diretamente nas Pull Requests ou nos commits, evidenciando a integração contínua e a qualidade do código.

[Link para Exemplos de Execução CI/CD (em breve)]

### 5.3. Boas Práticas de Integração em Times Ágeis

Esta seção abordará como as práticas de QA se integram em um ambiente ágil, incluindo a colaboração com desenvolvedores, a participação em cerimônias ágeis e a importância do feedback contínuo para a melhoria do processo de desenvolvimento.

---

## 6. Métricas e KPIs de QA

Métricas e Key Performance Indicators (KPIs) são cruciais para medir a eficácia do processo de QA e a qualidade do produto. Nesta seção, defino métricas relevantes para o Hub de Leitura e apresento como elas seriam monitoradas e visualizadas.

### 6.1. Definição de Métricas Relevantes

*   **Taxa de Falhas de Teste:** Percentual de testes automatizados que falham em relação ao total de testes executados. Indica a estabilidade do código e a eficácia dos testes.
*   **Cobertura de Testes:** Percentual de código coberto por testes automatizados. Ajuda a identificar áreas com baixo risco de regressão.
*   **Tempo Médio para Correção de Defeitos (MTTR):** Tempo médio desde a detecção de um defeito até sua correção e validação. Indica a eficiência da equipe em resolver problemas.
*   **Densidade de Defeitos:** Número de defeitos por unidade de funcionalidade ou linha de código. Ajuda a avaliar a qualidade geral do software.
*   **Número de Defeitos Abertos vs. Fechados:** Acompanhamento do backlog de defeitos.

### 6.2. Relatórios Visuais para Acompanhamento da Evolução

Serão apresentados exemplos de dashboards ou relatórios visuais (utilizando ferramentas como Grafana, Power BI ou mesmo gráficos simples) que demonstram a evolução das métricas de QA ao longo do tempo, permitindo uma análise rápida e eficaz da qualidade do produto.

[Link para Relatórios de Métricas (em breve)]

---

## 7. Reflexões Pessoais e Jornada de Aprendizado

Esta seção é dedicada à minha jornada pessoal de aprendizado em QA, destacando os desafios enfrentados, as lições aprendidas e o impacto das práticas de QA na qualidade do software e na minha carreira.

### 7.1. Principais Desafios Enfrentados em Cada Fase

*   **Planejamento Inicial:** O desafio foi equilibrar a granularidade do plano de teste com a agilidade necessária em um projeto dinâmico. A solução foi focar nos cenários de alto risco e nas funcionalidades críticas primeiro.
*   **Testes Manuais:** Garantir a completude dos casos de teste e a padronização das evidências foi um desafio. A criação de templates detalhados e a revisão por pares ajudaram a mitigar isso.
*   **Testes Automatizados:** A curva de aprendizado das ferramentas (Playwright, Rest-Assured) e a manutenção dos testes (lidar com elementos dinâmicos, mudanças de API) foram os maiores desafios. A adoção de Page Object Model e a refatoração contínua foram essenciais.
*   **Testes de Performance:** Definir cenários de carga realistas e interpretar os resultados complexos do JMeter exigiu prática e pesquisa. A colaboração com a equipe de desenvolvimento foi fundamental para otimizar o desempenho.
*   **Integração Contínua:** Configurar pipelines robustos e garantir que os testes fossem executados de forma consistente e rápida foi um desafio técnico. A automação da geração de relatórios foi um ganho significativo.

### 7.2. Lições Aprendidas

*   **A importância da comunicação:** QA não é apenas sobre encontrar bugs, mas sobre comunicar efetivamente os riscos e colaborar com a equipe.
*   **Automação é um investimento:** Embora exija esforço inicial, a automação de testes economiza tempo e recursos a longo prazo, além de aumentar a confiança nas entregas.
*   **Métricas direcionam a melhoria:** Medir a qualidade é o primeiro passo para melhorá-la. As métricas fornecem insights acionáveis.
*   **Adaptação é chave:** O mundo do software está em constante mudança, e a capacidade de aprender novas ferramentas e abordagens é vital para um profissional de QA.

### 7.3. Impacto das Práticas de QA na Qualidade do Sistema

Através da aplicação dessas práticas de QA, o Hub de Leitura se tornou uma aplicação mais estável, confiável e com uma melhor experiência para o usuário. A detecção precoce de defeitos, a garantia de performance e a validação contínua através da CI/CD contribuíram significativamente para a qualidade geral do produto.

### 7.4. Próximos Passos para Evolução na Carreira

Meus próximos passos incluem aprofundar conhecimentos em:

*   **Testes de Segurança:** Explorar ferramentas e metodologias para identificar vulnerabilidades.
*   **Testes de Usabilidade:** Focar na experiência do usuário e na facilidade de uso da aplicação.
*   **Machine Learning em QA:** Investigar como ML pode otimizar a criação e execução de testes.
*   **DevOps e SRE:** Entender mais sobre a operação e confiabilidade de sistemas em produção.

---

## Agradecimentos e Créditos

Este portfólio de QA foi construído utilizando a aplicação **Hub de Leitura**, um projeto de código aberto desenvolvido por **Fábio Araújo**, com o propósito de ensinar e praticar conceitos de Qualidade de Software.

Todo o trabalho de teste, planejamento, automação e análise apresentado neste repositório foi realizado por mim, mas a aplicação base que serviu como objeto de teste é de autoria de Fábio Araújo.

- **Repositório da Aplicação Hub de Leitura:** [Repositório no GitHub](https://github.com/fabioaraujoqa/hub-de-leitura?tab=readme-ov-file)
- **Autor/Contato:** [Perfil GitHub](https://github.com/fabioaraujoqa), [Perfil Linkedin](https://www.linkedin.com/in/fabio10/)

Agradeço imensamente pela disponibilização deste excelente recurso para a comunidade de QA!

---




## 8. Conecte-se Comigo

Se você se interessou pelo meu trabalho e gostaria de discutir mais sobre Qualidade de Software, automação de testes ou oportunidades de carreira, sinta-se à vontade para se conectar comigo no LinkedIn:

[Meu Perfil no LinkedIn (em breve)]

Obrigado por visitar meu portfólio!

