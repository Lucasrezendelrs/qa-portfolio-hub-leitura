# Casos de Teste – Funcionalidade Editar Livro

## Caso de Teste 01
* **ID do Caso de Teste:** CT01  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Edição válida com usuário administrador  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Usuário autenciticado como administrador
- A tela de Edição de Livro deve estar carregada.  

### Passos de Execução
1. Abrir o registro do livro para edição.
2. Alterar Título, Autor, Categoria, ISBN (para um ISBN válido diferente), Nº de Exemplares e Descrição.
3. Clicar em “Salvar”.

### Resultado Esperado
- O sistema atualiza os dados do livro e exibe mensagem de sucesso: "Livro atualizado com sucesso".
- As alterações são refletidas na listagem e detalhes do livro.

---

## Caso de Teste 02
* **ID do Caso de Teste:** CT02  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Acesso negado à Edição para usuário não administrador  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado com perfil de usuário comum.  

### Passos de Execução
1. Acessar o sistema com usuário comum.  
2. Verificar se o botão/menu “Editar Livro” está disponível.  
3. Tentar acessar diretamente a URL de Edição de Livro.  

### Resultado Esperado
- O sistema não exibe a opção de editar livro.  
- Se o usuário tentar acessar diretamente a URL, o sistema exibe mensagem de erro: “Acesso negado. Apenas administradoristradores podem acessar esta página.”.  


## Caso de Teste 03
* **ID do Caso de Teste:** CT03  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Editar e remover Título obrigatório (campo em branco)  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas

### Pré-condições
- Usuário autenticado como administrador.
- A tela de Edição de Livro deve estar carregada.  


### Passos de Execução
1. Deixar o campo Título em branco.  
2. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Título é obrigatório”.  

---

## Caso de Teste 04
* **ID do Caso de Teste:** CT04  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Editar e remover Autor obrigatório (campo em branco)
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado como administrador.
- A tela de Edição de Livro deve estar carregada. 

### Passos de Execução
1. Deixar o campo Autor em branco.  
2. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Autor é obrigatório”.  

---

## Caso de Teste 05
* **ID do Caso de Teste:** CT05  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Editar com ISBN inválido 
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas

### Pré-condições
- Usuário autenticado como administrador.
- A tela de Edição de Livro deve estar carregada. 

### Passos de Execução
1. Informar ISBN inválido (ex.: menos de 13 dígitos ou caracteres não numéricos).
2. Clicar em “Salvar Livro”.  


### Resultado Esperado
- O sistema exibe mensagem de erro: “ISBN inválido”.
- O registro não é salvo.

---

## Caso de Teste 06
* **ID do Caso de Teste:** CT06 
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Editar Exemplares para 0 ou negativo  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Usuário autenticado como administrador.
- A tela de Edição de Livro deve estar carregada.   

### Passos de Execução
1. Informar 0 (ou número negativo) no campo Exemplares. 
2. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Exemplares deve ser maior ou igual a 1”.
- O registro não é salvo.

---

## Caso de Teste 07
* **ID do Caso de Teste:** CT07  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Editar Páginas para 0 ou negativo
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado como administrador.
- A tela de Edição de Livro deve estar carregada.

### Passos de Execução
1. Informar 0 ou número negativo no campo Páginas.
2. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Número de páginas deve ser maior ou igual a 1”.
- O registro não é salvo. 

---

## Caso de Teste 08
* **ID do Caso de Teste:** CT08  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Edição sem alterar campos opcionais (manter nulos)
* **Prioridade:** Baixa  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Usuário autenticado como administrador.
- Livro com alguns campos opcionais vazios.
- A tela de Edição de Livro deve estar carregada.

### Passos de Execução
1. Alterar apenas campos obrigatórios (ex.: Título).
2. Deixar ISBN, Imagem da Capa e Descrição em branco.
3. Clicar em “Salvar Livro”.

### Resultado Esperado
- O sistema salva as alterações com sucesso.
- Campos opcionais permanecem em branco. 

---

## Caso de Teste 09
* **ID do Caso de Teste:** CT09  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Cancelar edição (não salvar alterações) 
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado como administrador.
- A tela de Edição de Livro deve estar carregada.

### Passos de Execução
1. Alterar alguns campos no formulário de edição.
2. Clicar em “Cancelar”.

### Resultado Esperado
- A tela retorna à listagem sem salvar alterações.
- O registro permanece com os dados anteriores.  

---

## Caso de Teste 10
* **ID do Caso de Teste:** CT10  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Subir imagem da capa inexistente
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado como administrador.
- A tela de Edição de Livro deve estar carregada.

### Passos de Execução
1. Informar nome de arquivo inexistente no campo Imagem da Capa.  
2. Clicar em “Salvar Livro”.  

### Resultado Esperado
- O sistema exibe mensagem de erro: “Imagem da capa não encontrada no diretório images/books/”. 
- O registro não é salvo (ou salva sem atualizar imagem, conforme regra do sistema).

---

## Caso de Teste 11
* **ID do Caso de Teste:** CT11  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Edição concorrente (dois usuários editando ao mesmo tempo) 
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Dois usuários autenticados (A e B).
- Ambos com permissão de edição (administrador).
- O mesmo livro aberto para edição por ambos.

### Passos de Execução
1. Usuário A abre o formulário de edição (não salva ainda).
2. Usuário B abre e salva alterações no mesmo livro.
3. Usuário A tenta salvar as alterações após a modificação de B.

### Resultado Esperado
- O sistema detecta conflito e exibe mensagem informando que “Registro foi alterado por outro usuário em [timestamp]. Deseja sobrescrever ou recarregar?” 

---
## Caso de Teste 12
* **ID do Caso de Teste:** CT12 
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Reduzir número de exemplares abaixo dos exemplares
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Livro com X exemplares e Y exemplares atualmente emprestados (Y > 0).
- Usuário autenticado como administrador.
- A tela de edição do livro deve estar carregada.

### Passos de Execução
1. Verificar número de exemplares emprestados (Y).
2. Tentar salvar o livro com Exemplares < Y.
3. Clicar em “Salvar Livros”.

### Resultado Esperado
- O sistema exibe mensagem de erro: “Não é possível definir Exemplares < número de exemplares atualmente emprestados (Y).”
- O registro não é salvo. 

---

## Caso de Teste 11
* **ID do Caso de Teste:** CT11  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Edição concorrente (dois usuários editando ao mesmo tempo) 
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Dois usuários autenticados (A e B).
- Ambos com permissão de edição (administrador).
- O mesmo livro aberto para edição por ambos.

### Passos de Execução
1. Usuário A abre o formulário de edição (não salva ainda).
2. Usuário B abre e salva alterações no mesmo livro.
3. Usuário A tenta salvar as alterações após a modificação de B.

### Resultado Esperado
- O sistema detecta conflito e exibe mensagem informando que “Registro foi alterado por outro usuário em [timestamp]. Deseja sobrescrever ou recarregar?” 

---
## Caso de Teste 12
* **ID do Caso de Teste:** CT12 
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Reduzir número de exemplares abaixo dos exemplares
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Livro com X exemplares e Y exemplares atualmente emprestados (Y > 0).
- Usuário autenticado como administrador.
- A tela de edição do livro deve estar carregada.

### Passos de Execução
1. Verificar número de exemplares emprestados (Y).
2. Tentar salvar o livro com Exemplares < Y.
3. Clicar em “Salvar Livros”.

### Resultado Esperado
- O sistema exibe mensagem de erro: “Não é possível definir Exemplares < número de exemplares atualmente emprestados (Y).”
- O registro não é salvo. 

---
## Caso de Teste 13
* **ID do Caso de Teste:** CT13  
* **Módulo:** Edição de Livro  
* **Título do Caso de Teste:** Editar ISBN para um ISBN que já existe em outro livro
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas 

### Pré-condições
- Existe outro livro cadastrado com ISBN Z.
- Usuário autenticado como administrador.
- A tela de edição do livro deve estar carregada.

### Passos de Execução
1. Atualizar o ISBN do livro atual para Z (ISBN já existente em outro registro).
2. Clicar em “Salvar Livro”.

### Resultado Esperado
- O sistema exibe mensagem de erro: “ISBN já existente”.
- O registro não é salvo.

