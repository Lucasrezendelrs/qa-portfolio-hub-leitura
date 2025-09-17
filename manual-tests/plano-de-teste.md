
# Plano de Teste (Resumo didático) — *Hub de Leitura*

**Formato:** Estrutura facilitada conforme ISO 29119-3 (adaptada para contexto ágil)  
**Versão:** 1.0.0 — atualizado em 10/09/2025

---

# Objetivo
- Fornecer um plano de teste curto, objetivo e apresentável para portfólio de QA.
- Cobrir estratégias manuais e automatizadas (E2E e API) e incluir um exemplo inicial de performance.
- Alinhar exemplos com as funcionalidades críticas do projeto.

---

# Versão
- `1.0.0` — 10/09/2025

---

# Escopo
## Itens a Serem Testados
- **Sistema Web** (frontend + backend) em `http://localhost:3000`
- **Gestão de Usuários**
  - Cadastro de usuário
  - Autenticação (login/logout) com JWT
- **Catálogo de Livros**
  - Listagem de livros
  - Filtros e busca
  - Detalhe do livro
  - CRUD (Admin: incluir, editar, excluir)
- **Reservas**
  - Listagem de reservas
  - Criar reserva
  - Retirar livro
  - Devolver livro
  - Histórico de empréstimos
- **Endpoints REST Prioritários**
  - `/api/users`
  - `/api/login`
  - `/api/books`
  - `/api/reservations`

## Itens Fora de Escopo

| Área | Funcionalidade | Justificativa |
|------|----------------|---------------|
| **Catálogo de Livros** | Upload de capas, categorização de livros | Funcionalidades complementares que não afetam diretamente o fluxo principal de reservas. |
| **Catálogo de Livros** | Controle de estoque detalhado | Teste adiado para reduzir escopo inicial; foco é validar fluxo de empréstimo básico. |
| **Painel Administrativo** | Dashboard, relatórios e logs do sistema | Itens administrativos não são essenciais para a primeira entrega e podem ser testados em iteração futura. |
| **Reservas** | Alertas de atraso/notificações automáticas | Requerem cenários de tempo e agendamento mais complexos, não essenciais para validação inicial. |
| **Mobile** | Testes mobile nativos | Escopo atual cobre apenas aplicação web; validação mobile pode ser realizada posteriormente. |
---


# Riscos (prioritizados) & Mitigações
- **Token JWT com expiração curta**
  - Impacto: scripts longos E2E podem expirar.
  - Mitigação: obter token via API e setar `localStorage`/cookies; re-autenticar programaticamente quando necessário.
- **Banco SQLite local**
  - Impacto: inconsistência/estado entre execuções.
  - Mitigação: scripts de seed/reset antes de cada pipeline/execução local.
- **Porta 3000 em uso**
  - Impacto: ambiente local bloqueado.
  - Mitigação: parametrizar porta via variável de ambiente; documentar porta alternativa.


---

# Estratégias de Testes

## Testes manuais exploratórios
- Abordagem: Session-Based Test Management (charters de 30–60 min).
- Charters exemplares:
  - Autenticação: fluxos positivos/negativos, expiração.
  - Catálogo: busca, filtros, paginação, navegação ao detalhe do livro.
  - Reservas: reservar livro disponível, sem estoque, cancelamento, histórico.
  - Admin: CRUD de livros, upload de capa e validações.
- Artefatos: notas de sessão, lista de issues, checklist de regressão.

---

## Testes automatizados E2E com Cypress
- Objetivo: cobrir fluxos críticos (smoke) e regressão em CI.
- Estrutura sugerida:
  - `cypress/e2e/auth.spec.js`
  - `cypress/e2e/books.spec.js`
  - `cypress/e2e/admin.spec.js` (com tag @admin)
- Boas práticas:
  - Isolar testes (reset/seed entre cenários).
  - Preferir API para setup (criar dados), manter ao menos 1 fluxo via UI por área crítica.
  - Evitar tempos fixos (usar waits por elementos/requests).
- Exemplos de cenários (trechos):

```javascript
// cypress/e2e/auth.spec.js
describe('Auth — Hub de Leitura', () => {
  it('login com credenciais válidas (usuário)', () => {
    cy.visit('/login');
    cy.get('input[name=email]').type('usuario@teste.com');
    cy.get('input[name=password]').type('user123');
    cy.get('button[type=submit]').click();
    cy.url().should('not.include', '/login');
    cy.get('#user-menu').should('contain', 'usuario@teste.com');
  });

  it('cadastro básico (fluxo de UI)', () => {
    cy.visit('/register');
    cy.get('input[name=name]').type('QA Tester');
    cy.get('input[name=email]').type(`qa+${Date.now()}@teste.com`);
    cy.get('input[name=password]').type('SenhaForte1!');
    cy.get('button[type=submit]').click();
    cy.contains('Registro realizado').should('exist');
  });
});
```

---

## Testes de API com Cypress
- Objetivo: validar contratos, códigos HTTP, campos obrigatórios e autorizações.
- Estratégia:
  - Cobertura para GETs principais, criação via POST, autenticação e fluxos de erro.
  - Usar fixtures para payloads e limpar dados criados.
- Exemplos (GET e POST):

```javascript
// cypress/e2e/api.spec.js
describe('API — Hub de Leitura', () => {
  it('GET /api/books — listar livros', () => {
    cy.request('GET', 'http://localhost:3000/api/books')
      .its('status').should('eq', 200);
  });

  it('POST /api/login — autenticação', () => {
    cy.request({
      method: 'POST',
      url: 'http://localhost:3000/api/login',
      body: { email: 'admin@biblioteca.com', password: 'admin123' }
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.have.property('token');
    });
  });
});
```

---

## Introdução a testes de performance com K6
- Objetivo: teste inicial de carga no endpoint crítico: `GET /api/books`.
- Script exemplo (`books-load-test.js`):

```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 20,
  duration: '30s',
  thresholds: { 'http_req_duration': ['p(95)<500'] }
};

export default function () {
  const res = http.get('http://localhost:3000/api/books');
  check(res, { 'status 200': (r) => r.status === 200 });
  sleep(1);
}
```

- Métricas iniciais a observar: latência p95, taxa de erro, throughput.
- Recomendação: executar em ambiente isolado de teste (não em dev local com UI concorrente).

---

# Atividades (pipeline ágil — sprint-ready)
- **Sprint 0 — setup**
  - Configurar ambiente local/CI; instalar Cypress e K6.
  - Criar scripts de seed/reset do banco.
  - Adicionar scripts NPM para execução de testes.
- **Por sprint**
  - Mapear e priorizar casos críticos (8–12).
  - Automatizar 3–5 E2E smoke + 5–10 testes API.
  - 2 sessões exploratórias por release.
  - Rodar script K6 para endpoint crítico quando houver mudanças de backend.
- **CI**
  - Em PRs: rodar testes de API + smoke E2E.
  - Em release: rodar suíte completa + K6 (opcional em ambiente isolado).
- **Relatórios**
  - Dashboard: pass rate, flaky tests, tempo de execução.
  - Bug report com passos, ambiente, evidências (screenshots, logs, HAR).

---

# Execução rápida local — comandos essenciais
- Preparar projeto:
  ```bash
  git clone <repo>
  npm install
  npm start         # app em http://localhost:3000
  ```
- Scripts sugestão (exemplo `package.json`):
  ```json
  {
    "scripts": {
      "start": "node server.js",
      "test:e2e": "cypress run",
      "test:api": "cypress run --spec 'cypress/e2e/api.spec.js'",
      "perf": "k6 run k6/books-load-test.js",
      "seed": "node scripts/seed.js",
      "reset-db": "node scripts/reset-db.js"
    }
  }
  ```
- Credenciais úteis (exemplos para testes locais):
  - **Admin:** `admin@biblioteca.com` / `admin123`  
  - **Usuário:** `usuario@teste.com` / `user123`

---

# Artefatos para portfólio (o que anexar)
- Trechos de automação (Cypress specs mostrados acima).  
- Script K6 e relatório de execução (gráficos de latência p95).  
- Checklist de sessões exploratórias + exemplos de bug reports.  
- README com instruções para executar testes (comandos NPM e pré-requisitos).

---

# Observações finais (direcionadas a recrutadores)
- Documento enxuto e prático, pronto para inclusão em portfólio técnico.  
- Pode ser expandido em artefatos executáveis: arquivos Cypress, scripts K6, arquivos de seed e workflow CI (GitHub Actions).  
- Posso gerar os arquivos de teste (Cypress specs + K6 script + `package.json` scripts + exemplo de GitHub Action) caso queira que eu produza esses artefatos prontos para commit.
