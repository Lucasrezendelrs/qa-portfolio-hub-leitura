# Casos de Teste – Funcionalidade Cadastro de Usuário

## Caso de Teste 01
* **ID do Caso de Teste:** CT01  
* **Módulo:** Cadastro de Usuário  
* **Título do Caso de Teste:** Cadastro válido com todos os campos preenchidos corretamente  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- A tela de cadastro deve estar carregada.  

### Passos de Execução
1. Informar Nome Completo com pelo menos 2 caracteres.  
2. Informar um e-mail válido.  
3. Informar um telefone válido (opcional).  
4. Informar senha com números, letras maiúsculas, minúsculas e símbolos.  
5. Confirmar a senha corretamente.  
6. Marcar o checkbox “Li e concordo com os termos”.  
7. Clicar no botão “Criar Conta”.  

### Resultado Esperado
- O sistema cria a conta com sucesso e redereciona para a página inicial.  

---

## Caso de Teste 02
* **ID do Caso de Teste:** CT02  
* **Módulo:** Cadastro de Usuário  
* **Título do Caso de Teste:** Cadastro sem preencher Nome Completo  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- A tela de cadastro deve estar carregada.  

### Passos de Execução
1. Deixar o campo Nome Completo em branco.  
2. Preencher os demais campos corretamente.  
3. Clicar no botão “Criar Conta”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Nome deve ter pelo menos 2 caracteres”.  

---

## Caso de Teste 03
* **ID do Caso de Teste:** CT03  
* **Módulo:** Cadastro de Usuário  
* **Título do Caso de Teste:** Cadastro com Nome Completo menor que 2 caracteres  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas

### Pré-condições
- A tela de cadastro deve estar carregada.  

### Passos de Execução
1. Informar apenas 1 caractere no campo Nome Completo.  
2. Preencher os demais campos corretamente.  
3. Clicar no botão “Criar Conta”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Nome deve ter pelo menos 2 caracteres”.  

---

## Caso de Teste 04
* **ID do Caso de Teste:** CT04  
* **Módulo:** Cadastro de Usuário  
* **Título do Caso de Teste:** Cadastro sem preencher Email  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- A tela de cadastro deve estar carregada.  

### Passos de Execução
1. Deixar o campo Email em branco.  
2. Preencher os demais campos corretamente.  
3. Clicar no botão “Criar Conta”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Email válido é obrigatório”.  

---

## Caso de Teste 05
* **ID do Caso de Teste:** CT05  
* **Módulo:** Cadastro de Usuário  
* **Título do Caso de Teste:** Cadastro com formato inválido de E-mail  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas

### Pré-condições
- A tela de cadastro deve estar carregada.  

### Passos de Execução
1. Informar no campo E-mail o valor `usuariosemarroba.com`.  
2. Preencher os demais campos corretamente.  
3. Clicar no botão “Criar Conta”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: "Email válido é obrigatório”.  

---

## Caso de Teste 06
* **ID do Caso de Teste:** CT06  
* **Módulo:** Cadastro de Usuário  
* **Título do Caso de Teste:** Cadastro sem preencher Senha  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas

### Pré-condições
- A tela de cadastro deve estar carregada.  

### Passos de Execução
1. Deixar o campo Senha em branco.  
2. Preencher os demais campos corretamente.  
3. Clicar no botão “Criar Conta”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Por favor, crie uma senha com pelo menos 6 caracteres."  

---

## Caso de Teste 07
* **ID do Caso de Teste:** CT07
* **Módulo:** Cadastro de Usuário
* **Título do Caso de Teste:** Cadastro com senha fraca (menos complexa, mas com 6 ou mais caracteres)
* **Prioridade:** Média
* **Status:** Pendente
* **Data de Criação:** 2025-09-13
* **Última Atualização:** 2025-09-13
* **Responsável:** Lucas


### Pré-condições
- A tela de cadastro deve estar carregada.


### Passos de Execução
1. Informar uma senha com pelo menos 6 caracteres, mas sem números, letras maiúsculas ou símbolos.
2. Preencher os demais campos corretamente.
3. Clicar no botão “Criar Conta”.


### Resultado Esperado
- O sistema exibe aviso de senha fraca, mas permite a criação da conta.

---

## Caso de Teste 08
* **ID do Caso de Teste:** CT08  
* **Módulo:** Cadastro de Usuário  
* **Título do Caso de Teste:** Cadastro com Senha e Confirmação diferentes  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- A tela de cadastro deve estar carregada.  

### Passos de Execução
1. Informar uma senha válida.  
2. Informar uma confirmação de senha diferente.  
3. Preencher os demais campos corretamente.  
4. Clicar no botão “Criar Conta”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Senhas não coincidem”.  

---

## Caso de Teste 09
* **ID do Caso de Teste:** CT09  
* **Módulo:** Cadastro de Usuário  
* **Título do Caso de Teste:** Cadastro sem marcar checkbox de aceite dos termos  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- A tela de cadastro deve estar carregada.  

### Passos de Execução
1. Preencher todos os campos corretamente.  
2. Não marcar o checkbox “Li e concordo com os termos”.  
3. Clicar no botão “Criar Conta”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “É necessário aceitar os termos para continuar”.  

---

## Caso de Teste 10
* **ID do Caso de Teste:** CT10  
* **Módulo:** Cadastro de Usuário  
* **Título do Caso de Teste:** Cadastro válido sem preencher telefone (campo opcional)  
* **Prioridade:** Baixa  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas

### Pré-condições
- A tela de cadastro deve estar carregada.  

### Passos de Execução
1. Informar Nome Completo válido.  
2. Informar e-mail válido.  
3. Deixar o campo Telefone em branco.  
4. Informar senha válida e confirmação igual.  
5. Marcar o checkbox “Li e concordo com os termos”.  
6. Clicar no botão “Criar Conta”.  

### Resultado Esperado
- O sistema cria a conta com sucesso, mesmo sem o preenchimento do campo Telefone.  

--
## Caso de Teste 11
* **ID do Caso de Teste:** CT11
* **Módulo:** Cadastro de Usuário
* **Título do Caso de Teste:** Cadastro com senha menor que 6 caracteres
* **Prioridade:** Alta
* **Status:** Pendente
* **Data de Criação:** 2025-09-13
* **Última Atualização:** 2025-09-13
* **Responsável:** Lucas


### Pré-condições
- A tela de cadastro deve estar carregada.


### Passos de Execução
1. Informar uma senha com menos de 6 caracteres.
2. Preencher os demais campos corretamente.
3. Clicar no botão “Criar Conta”.


### Resultado Esperado
- O sistema exibe mensagem de erro: “Por favor, crie uma senha com pelo menos 6 caracteres.”.
