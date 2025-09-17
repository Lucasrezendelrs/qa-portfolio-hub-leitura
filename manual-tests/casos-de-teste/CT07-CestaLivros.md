# Casos de Teste – Funcionalidade Cesta de Livros

## Caso de Teste 01
* **ID do Caso de Teste:** CT01  
* **Módulo:** Cesta de Livros  
* **Título do Caso de Teste:** Adicionar livro à cesta com sucesso  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado ou não autenticado.  
- Livro disponível no catálogo.  

### Passos de Execução
1. Acessar o catálogo de livros.  
2. Selecionar um livro.  
3. Clicar no botão “Adicionar à cesta”.  

### Resultado Esperado
- O livro é exibido na cesta.  
- O resumo da reserva é atualizado (total de livros, prazo de retirada, período de empréstimo).  

---

## Caso de Teste 02
* **ID do Caso de Teste:** CT02  
* **Módulo:** Cesta de Livros  
* **Título do Caso de Teste:** Visualizar detalhes de livro na cesta  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Pelo menos um livro adicionado à cesta.  

### Passos de Execução
1. Acessar a cesta de livros.  
2. Selecionar o botão “Detalhes” de um livro adicionado.  

### Resultado Esperado
- O sistema exibe corretamente as informações do livro.  

---

## Caso de Teste 03
* **ID do Caso de Teste:** CT03  
* **Módulo:** Cesta de Livros  
* **Título do Caso de Teste:** Remover livro da cesta  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Pelo menos um livro adicionado à cesta.  

### Passos de Execução
1. Acessar a cesta de livros.  
2. Selecionar o botão “Remover” de um livro.  

### Resultado Esperado
- O livro é removido da cesta.  
- O resumo da reserva é atualizado com o novo total de livros.  

---

## Caso de Teste 04
* **ID do Caso de Teste:** CT04  
* **Módulo:** Cesta de Livros  
* **Título do Caso de Teste:** Limpar cesta de livros  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Pelo menos um livro adicionado à cesta.  

### Passos de Execução
1. Acessar a cesta de livros.  
2. Clicar no botão “Limpar Cesta”.  

### Resultado Esperado
- Todos os livros são removidos da cesta.  
- O resumo da reserva é zerado.  

---

## Caso de Teste 05
* **ID do Caso de Teste:** CT05  
* **Módulo:** Cesta de Livros  
* **Título do Caso de Teste:** Finalizar reservas com usuário autenticado  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  
- Pelo menos um livro adicionado à cesta.  

### Passos de Execução
1. Acessar a cesta de livros.  
2. Clicar no botão “Finalizar Reservas”.  

### Resultado Esperado
- O sistema direciona para a página de checkout.  
- O usuário consegue finalizar a reserva.  

---

## Caso de Teste 06
* **ID do Caso de Teste:** CT06  
* **Módulo:** Cesta de Livros  
* **Título do Caso de Teste:** Finalizar reservas com usuário não autenticado  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário não autenticado.  
- Pelo menos um livro adicionado à cesta.  

### Passos de Execução
1. Acessar a cesta de livros.  
2. Clicar no botão “Finalizar Reservas”.  

### Resultado Esperado
- O sistema redireciona para a página com opções: “Fazer Login”, “Criar Conta” e “Voltar à Cesta”.  

---

## Caso de Teste 07
* **ID do Caso de Teste:** CT07  
* **Módulo:** Cesta de Livros  
* **Título do Caso de Teste:** Fazer login a partir da finalização da reserva  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário não autenticado.  
- Pelo menos um livro adicionado à cesta.  

### Passos de Execução
1. Acessar a cesta de livros.  
2. Clicar em “Finalizar Reservas”.  
3. Selecionar a opção “Fazer Login”.  
4. Autenticar-se com credenciais válidas.  

### Resultado Esperado
- O sistema redireciona o usuário para a tela de checkout.  
- A reserva é concluída após login.  

---

## Caso de Teste 08
* **ID do Caso de Teste:** CT08  
* **Módulo:** Cesta de Livros  
* **Título do Caso de Teste:** Criar conta a partir da finalização da reserva  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário não autenticado.  
- Pelo menos um livro adicionado à cesta.  

### Passos de Execução
1. Acessar a cesta de livros.  
2. Clicar em “Finalizar Reservas”.  
3. Selecionar a opção “Criar Conta”.  
4. Criar conta com dados válidos.  

### Resultado Esperado
- O sistema direciona o usuário para a tela de checkout após criação da conta.  
- A reserva é concluída com sucesso.  

---

## Caso de Teste 09
* **ID do Caso de Teste:** CT09  
* **Módulo:** Cesta de Livros  
* **Título do Caso de Teste:** Voltar à cesta após tentativa de finalizar sem login  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário não autenticado.  
- Pelo menos um livro adicionado à cesta.  

### Passos de Execução
1. Acessar a cesta de livros.  
2. Clicar em “Finalizar Reservas”.  
3. Selecionar a opção “Voltar à Cesta”.  

### Resultado Esperado
- O sistema retorna para a tela da cesta mantendo os livros já adicionados.  

---

## Caso de Teste 10
* **ID do Caso de Teste:** CT10  
* **Módulo:** Cesta de Livros  
* **Título do Caso de Teste:** Acessar cesta vazia  
* **Prioridade:** Baixa  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Nenhum livro adicionado à cesta.  

### Passos de Execução
1. Acessar a cesta de livros.  

### Resultado Esperado
- O sistema exibe mensagem de cesta vazia.  
- O botão “Explorar Catálogo” é exibido.  
- Ao clicar no botão, o sistema direciona o usuário para o catálogo de livros.  
