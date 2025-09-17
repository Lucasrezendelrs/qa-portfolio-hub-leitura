# Casos de Teste – Funcionalidade Exclusão de Livros

## Caso de Teste 01
* **ID do Caso de Teste:** CT01  
* **Módulo:** Exclusão de Livro  
* **Título do Caso de Teste:** Exclusão bem-sucedida de livro existente  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado com perfil admin.  
- Livro existente cadastrado no sistema.  

### Passos de Execução
1. Acessar a lista de livros.  
2. Selecionar um livro existente.  
3. Clicar em “Excluir”.  
4. Confirmar a exclusão na janela de confirmação.  

### Resultado Esperado
- O sistema remove o livro do acervo e exibe mensagem de sucesso.  

---

## Caso de Teste 02
* **ID do Caso de Teste:** CT02  
* **Módulo:** Exclusão de Livro  
* **Título do Caso de Teste:** Cancelar exclusão de livro  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado com perfil admin.  
- Livro existente cadastrado no sistema.  

### Passos de Execução
1. Acessar a lista de livros.  
2. Selecionar um livro existente.  
3. Clicar em “Excluir”.  
4. Cancelar a exclusão na janela de confirmação.  

### Resultado Esperado
- O sistema mantém o livro no acervo e não realiza exclusão.  

---

## Caso de Teste 03
* **ID do Caso de Teste:** CT03  
* **Módulo:** Exclusão de Livro  
* **Título do Caso de Teste:** Tentativa de exclusão por usuário não admin  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado com perfil comum.  
- Livro existente cadastrado no sistema.  

### Passos de Execução
1. Acessar a lista de livros.  
2. Verificar disponibilidade da opção “Excluir”.  
3. Caso tente acessar a exclusão via URL direta.  

### Resultado Esperado
- O sistema não exibe a opção de exclusão para usuários comuns.  
- Tentativa via URL retorna mensagem de “Acesso negado”.  

---


## Caso de Teste 04
* **ID do Caso de Teste:** CT04  
* **Módulo:** Exclusão de Livro  
* **Título do Caso de Teste:** Exclusão de livro emprestado  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado com perfil admin.  
- Livro em estado “Emprestado”.  

### Passos de Execução
1. Acessar a lista de livros.  
2. Selecionar um livro que esteja emprestado.  
3. Clicar em “Excluir”.  
4. Confirmar a exclusão.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Não é possível excluir livro emprestado”.  

---

## Caso de Teste 08
* **ID do Caso de Teste:** CT08
* **Módulo:** Exclusão de Livro
* **Título do Caso de Teste:** Exclusão de livro com dependências (histórico de empréstimos)
* **Prioridade:** Média
* **Status:** Pendente
* **Data de Criação:** 2025-09-13
* **Última Atualização:** 2025-09-13
* **Responsável:** Lucas


### Pré-condições
- Usuário autenticado com perfil admin.
- Livro já utilizado em históricos de empréstimos anteriores.


### Passos de Execução
1. Selecionar o livro.
2. Clicar em “Excluir”.
3. Confirmar exclusão.


### Resultado Esperado
- O sistema pode manter o registro no histórico, mas remove o livro do acervo atual.
- Mensagem: “Livro removido do acervo, mantido no histórico”.


---