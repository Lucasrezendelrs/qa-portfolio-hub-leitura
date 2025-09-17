# Casos de Teste – Funcionalidade Adicionar Novo Livro

## Caso de Teste 01
* **ID do Caso de Teste:** CT01  
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Cadastro válido com usuário administrador  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Usuário autenciticado como administrador
- A tela de cadastro de livro deve estar carregada.  

### Passos de Execução
1. Preencher todos os campos obrigatórios corretamente (Título, Autor, Categoria, ISBN válido, Exemplares, etc.).
2. Clicar em Salvar Livro.

### Resultado Esperado
- O sistema salva o livro e exibe mensagem de sucesso.  

---

## Caso de Teste 02
* **ID do Caso de Teste:** CT02  
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Acesso negado ao cadastro de livro para usuário não administrador  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado com perfil de usuário comum.  

### Passos de Execução
1. Acessar o sistema com usuário comum.  
2. Verificar se o botão/menu “Novo Livro” está disponível.  
3. Tentar acessar diretamente a URL de cadastro de livro.  

### Resultado Esperado
- O sistema não exibe a opção de adicionar livro.  
- Se o usuário tentar acessar diretamente a URL, o sistema exibe mensagem de erro: “Acesso negado. Apenas administradoristradores podem acessar esta página.”.  


## Caso de Teste 03
* **ID do Caso de Teste:** CT03  
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Cadastro sem preencher Título (campo obrigatório)  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas

### Pré-condições
- Usuário autenticado como administrador.
- A tela de cadastro de livro deve estar carregada.  


### Passos de Execução
1. Deixar o campo Título em branco.  
2. Preencher os demais campos obrigatórios.  
3. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Título é obrigatório”.  

---

## Caso de Teste 04
* **ID do Caso de Teste:** CT04  
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Cadastro sem preencher Autor (campo obrigatório)  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado como administrador.
- A tela de cadastro de livro deve estar carregada. 

### Passos de Execução
1. Deixar o campo Autor em branco.  
2. Preencher os demais campos obrigatórios.  
3. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Autor é obrigatório”.  

---

## Caso de Teste 05
* **ID do Caso de Teste:** CT05  
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Cadastro sem selecionar Categoria (campo obrigatório)  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas

### Pré-condições
- Usuário autenticado como administrador.
- A tela de cadastro de livro deve estar carregada. 

### Passos de Execução
1. Não selecionar nenhuma Categoria.  
2. Preencher os demais campos obrigatórios.  
3. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Categoria é obrigatória”.  

---

## Caso de Teste 06
* **ID do Caso de Teste:** CT06 
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Cadastro sem informar Exemplares (campo obrigatório)  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Usuário autenticado como administrador.
- A tela de cadastro de livro deve estar carregada.   

### Passos de Execução
1. Deixar o campo Exemplares em branco.  
2. Preencher os demais campos obrigatórios.  
3. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Exemplares é obrigatório”.  

---

## Caso de Teste 07
* **ID do Caso de Teste:** CT07  
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Cadastro com ISBN inválido 
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado como administrador.
- A tela de cadastro de livro deve estar carregada.

### Passos de Execução
1. Informar um ISBN inválido (menos de 13 dígitos ou caracteres não numéricos).
2. Preencher os demais campos obrigatórios.  
3. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “ISBN inválido”.  

---

## Caso de Teste 08
* **ID do Caso de Teste:** CT08  
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Cadastro com número de páginas inválido (zero ou negativo)  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Usuário autenticado como administrador.
- A tela de cadastro de livro deve estar carregada.

### Passos de Execução
1. Informar valor 0 ou negativo no campo Páginas.  
2. Preencher os demais campos obrigatórios.  
3. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Número de páginas deve ser maior ou igual a 1.  

---

## Caso de Teste 09
* **ID do Caso de Teste:** CT09  
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Cadastro com número de exemplares inválido (zero ou negativo) 
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado como administrador.
- A tela de cadastro de livro deve estar carregada.

### Passos de Execução
1. Informar o valor 0 no campo Exemplares.  
2. Preencher os demais campos obrigatórios.  
3. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Exemplares deve ser maior ou igual a 1”.  

---

## Caso de Teste 10
* **ID do Caso de Teste:** CT10  
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Cadastro sem preencher campos opcionais  
* **Prioridade:** Baixa  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado como administrador.
- A tela de cadastro de livro deve estar carregada.

### Passos de Execução
1. Preencher apenas os campos obrigatórios (Título, Autor, Categoria, Exemplares).  
2. Deixar ISBN, Editora, Ano de Publicação, Páginas, Idioma, Descrição e Imagem da Capa em branco.  
3. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema salva o livro com sucesso.  

---

## Caso de Teste 11
* **ID do Caso de Teste:** CT11  
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Cancelar cadastro de livro  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Usuário autenticado como administrador.
- A tela de cadastro de livro deve estar carregada.

### Passos de Execução
1. Preencher alguns campos.  
2. Clicar em “Cancelar”.  

### Resultado Esperado
- O sistema fecha a tela de cadastro sem salvar o livro.  

---

## Caso de Teste 12
* **ID do Caso de Teste:** CT12  
* **Módulo:** Cadastro de Livro  
* **Título do Caso de Teste:** Cadastro com nome de imagem inválido  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado como administrador.
- A tela de cadastro de livro deve estar carregada.

### Passos de Execução
1. Informar nome de arquivo inexistente no campo Imagem da Capa.  
2. Preencher os demais campos obrigatórios.  
3. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Imagem da capa não encontrada no diretório images/books/”.  

---



