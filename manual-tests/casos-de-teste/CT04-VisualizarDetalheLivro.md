# Casos de Teste – Funcionalidade Visualizar Detalhes do Livro

## Caso de Teste 01
* **ID do Caso de Teste:** CT01  
* **Módulo:** Detalhes do Livro  
* **Título do Caso de Teste:** Visualização de detalhes de livro existente por administrador  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Livro existente cadastrado no sistema.  
- Usuário autenticado como administrador.  

### Passos de Execução
1. Acessar a lista de livros.  
2. Selecionar um livro.  
3. Clicar em “Detalhes”.  

### Resultado Esperado
- O sistema exibe corretamente todas as informações do livro: título, autor, ISBN, editora, categoria, ano de publicação, estoque e imagem da capa.  

---

## Caso de Teste 02
* **ID do Caso de Teste:** CT02  
* **Módulo:** Detalhes do Livro  
* **Título do Caso de Teste:** Visualização sem imagem de capa cadastrada (admin)  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Livro cadastrado sem imagem de capa.  
- Usuário autenticado como administrador.  

### Passos de Execução
1. Acessar a lista de livros.  
2. Selecionar um livro sem imagem de capa.  
3. Clicar em “Detalhes”.  

### Resultado Esperado
- O sistema exibe uma imagem padrão no lugar da capa.  

---

## Caso de Teste 03
* **ID do Caso de Teste:** CT03  
* **Módulo:** Detalhes do Livro  
* **Título do Caso de Teste:** Visualização de estoque atualizado (admin)  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Livro com exemplares emprestados.  
- Usuário autenticado como administrador.  

### Passos de Execução
1. Acessar a lista de livros.  
2. Selecionar o livro com exemplares emprestados.  
3. Clicar em “Detalhes”.  

### Resultado Esperado
- O sistema exibe corretamente o estoque no formato “X de Y” (ex.: 2 de 6).  

---


## Caso de Teste 04
* **ID do Caso de Teste:** CT04  
* **Módulo:** Detalhes do Livro  
* **Título do Caso de Teste:** Fechar janela de detalhes (admin)  
* **Prioridade:** Baixa  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Livro existente cadastrado no sistema.  
- Usuário autenticado como administrador.  

### Passos de Execução
1. Acessar a lista de livros.  
2. Selecionar um livro.  
3. Clicar em “Detalhes”.  
4. Clicar no botão “Fechar”.  

### Resultado Esperado
- O sistema fecha a janela de detalhes sem erros.  

---

## Caso de Teste 05
* **ID do Caso de Teste:** CT05  
* **Módulo:** Detalhes do Livro  
* **Título do Caso de Teste:** Visualização de caracteres especiais na descrição (admin)  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Livro cadastrado com caracteres especiais na descrição (ex.: acentos, símbolos).  
- Usuário autenticado como administrador.  

### Passos de Execução
1. Acessar a lista de livros.  
2. Selecionar o livro.  
3. Clicar em “Detalhes”.  

### Resultado Esperado
- O sistema exibe corretamente os caracteres especiais da descrição.  
