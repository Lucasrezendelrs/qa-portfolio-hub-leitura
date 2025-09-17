# Caso de Testes Manuais

## Casos de Teste – Funcionalidade Login

## Caso de Teste 01
* **ID do Caso de Teste:** CT01  
* **Módulo:** Login  
* **Título do Caso de Teste:** Login válido com credenciais corretas  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-12  
* **Última Atualização:** 2025-09-12  
* **Responsável:** Lucas 

### Pré-condições
- Usuário cadastrado com e-mail válido e senha ativa.  

### Passos de Execução
1. Acessar a tela de login.  
2. Informar e-mail válido cadastrado.  
3. Informar senha correta.  
4. Clicar no botão “Entrar”.  

### Resultado Esperado
- O sistema autentica o usuário e redireciona para a página inicial.  

---

## Caso de Teste 02
* **ID do Caso de Teste:** CT02
* **Módulo:** Login  
* **Título do Caso de Teste:** Login válido com e-mail em letras maiúsculas  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-12  
* **Última Atualização:** 2025-09-12  
* **Responsável:** Lucas 

### Pré-condições
- Usuário cadastrado com e-mail válido.  

### Passos de Execução
1. Acessar a tela de login.  
2. Informar o e-mail cadastrado em letras maiúsculas.  
3. Informar senha correta.  
4. Clicar no botão “Entrar”.  

### Resultado Esperado
- O sistema autentica normalmente (login case-insensitive).  

---

## Caso de Teste 03
* **ID do Caso de Teste:** CT03  
* **Módulo:** Login  
* **Título do Caso de Teste:** Login inválido com senha incorreta  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-12  
* **Última Atualização:** 2025-09-12  
* **Responsável:** Lucas 

### Pré-condições
- Usuário cadastrado com e-mail válido.  

### Passos de Execução
1. Acessar a tela de login.  
2. Informar e-mail válido.  
3. Informar senha incorreta.  
4. Clicar no botão “Entrar”.  

### Resultado Esperado
- O sistema exibe mensagem de erro “Email ou senha incorretos" e nega o acesso.  

---

## Caso de Teste 04
* **ID do Caso de Teste:** CT04  
* **Módulo:** Login  
* **Título do Caso de Teste:** Login inválido com e-mail não cadastrado  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-12  
* **Última Atualização:** 2025-09-12  
* **Responsável:** Lucas 

### Pré-condições
- Nenhuma conta registrada com o e-mail informado.  

### Passos de Execução
1. Acessar a tela de login.  
2. Informar um e-mail inexistente.  
3. Informar senha qualquer.  
4. Clicar no botão “Entrar”.  

### Resultado Esperado
- O sistema exibe mensagem “Email ou senha incorretos” e nega o acesso.  

---

## Caso de Teste 05
* **ID do Caso de Teste:** CT05  
* **Módulo:** Login  
* **Título do Caso de Teste:** Tentativa de login com campos em branco  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-12  
* **Última Atualização:** 2025-09-12  
* **Responsável:** Lucas  

### Pré-condições
- Tela de login aberta.  

### Passos de Execução
1. Clicar no botão “Entrar” sem preencher e-mail e senha.  

### Resultado Esperado
- O sistema exibe mensagens de validação:  
  - "Por favor, insira um email válido”  
  - “Por favor, insira uma Senha”  

---

## Caso de Teste 06
* **ID do Caso de Teste:** CT06  
* **Módulo:** Login  
* **Título do Caso de Teste:** Tentativa de login com formato inválido de e-mail  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-12  
* **Última Atualização:** 2025-09-12  
* **Responsável:** Lucas 

### Pré-condições
- Tela de login aberta.  

### Passos de Execução
1. Informar o e-mail `usuariosemarroba.com`.  
2. Informar senha válida.  
3. Clicar em “Entrar”.  

### Resultado Esperado
- O sistema exibe mensagem “Por favor, insira um email válido”.  

---

## Caso de Teste 10
**ID do Caso de Teste:** CT10  
**Módulo:** Login  
**Título do Caso de Teste:** Expiração de sessão por inatividade  
**Prioridade:** Média  
**Status:** Pendente  
**Data de Criação:** 2025-09-12  
**Última Atualização:** 2025-09-12  
**Responsável:** Lucas 

### Pré-condições
- Usuário autenticado no sistema.  

### Passos de Execução
1. Realizar login válido.  
2. Permanecer inativo por mais tempo que o configurado para expiração da sessão.  

### Resultado Esperado
- O sistema encerra a sessão automaticamente e redireciona o usuário para a tela de login.  


