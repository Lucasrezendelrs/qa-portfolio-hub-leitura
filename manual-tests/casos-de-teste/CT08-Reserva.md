# Casos de Teste – Funcionalidade Reservar Livro

## Caso de Teste 01
* **ID do Caso de Teste:** CT01  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Redirecionamento automático para checkout ao finalizar reservas  
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
- O sistema redireciona automaticamente para a tela de checkout exibindo o resumo da reserva.  

---

## Caso de Teste 02
* **ID do Caso de Teste:** CT02  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Exibir resumo da reserva na tela de checkout  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  
- Pelo menos um livro adicionado à cesta.  

### Passos de Execução
1. Estar na tela de checkout.

### Resultado Esperado
- O sistema exibe corretamente o resumo da reserva com total de livros, prazo de retirada e período de empréstimo.  

---

## Caso de Teste 03
* **ID do Caso de Teste:** CT03  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Exibição dos dados pessoais não editáveis  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  
  
### Passos de Execução
1. Estar na tela de checkout. 

### Resultado Esperado
- O sistema exibe corretamente Nome Completo e E-mail como não editáveis.  

---

## Caso de Teste 04
* **ID do Caso de Teste:** CT04  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Edição de telefone e observações  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  

### Passos de Execução
1. Estar na tela de checkout.
2. Preencher telefone no campo correspondente.
3. Adicionar texto no campo observações.

### Resultado Esperado
- O sistema aceita os dados informados e mantém Nome e E-mail bloqueados.  

---

## Caso de Teste 05
* **ID do Caso de Teste:** CT05  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Seleção da preferência de retirada  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  

### Passos de Execução
1. Estar na tela de checkout.
2. Selecionar uma opção da lista suspensa de preferência de retirada (Manhã, Tarde, Qualquer Horário).  

### Resultado Esperado
- O sistema registra corretamente a opção escolhida.  

---

## Caso de Teste 06
* **ID do Caso de Teste:** CT06  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Exibir termos e condições com checkbox de aceite  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  

### Passos de Execução
1. Estar na tela de checkout.

### Resultado Esperado
- O sistema exibe corretamente os termos e disponibiliza checkbox para aceite obrigatório.  

---

## Caso de Teste 07
* **ID do Caso de Teste:** CT07  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Botão Confirmar Reservas desabilitado sem aceite dos termos  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  

### Passos de Execução
1. Estar na tela de checkout.  
2. Não marcar o checkbox de aceite dos termos.  

### Resultado Esperado
- O botão “Confirmar Reservas” permanece desabilitado.  

---

## Caso de Teste 08
* **ID do Caso de Teste:** CT08  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Confirmar reserva com sucesso  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  
- Checkbox de aceite marcado.  

### Passos de Execução
1. Estar na tela de checkout.  
2. Marcar o checkbox de aceite dos termos.  
3. Clicar no botão “Confirmar Reservas”.  

### Resultado Esperado
- O sistema confirma a reserva e redireciona para a página de reservas confirmadas.  

---

## Caso de Teste 09
* **ID do Caso de Teste:** CT09  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Exibição de opções após reserva confirmada  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva confirmada.  

### Passos de Execução
1. Confirmar reserva de livros.  

### Resultado Esperado
- O sistema exibe tela de confirmação com botões “Ver Minhas Reservas” e “Buscar mais livros”.  

---

## Caso de Teste 10
* **ID do Caso de Teste:** CT10  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Acessar minhas reservas após confirmação  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva confirmada.  

### Passos de Execução
1. Na tela de confirmação de reserva, clicar em “Ver Minhas Reservas”.  

### Resultado Esperado
- O sistema direciona o usuário para a página de reservas.  
- A última reserva aparece listada com seu status.  
- As atividades recentes(históricos de reservas) aparece com seu status.

---

## Caso de Teste 11
* **ID do Caso de Teste:** CT11  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Buscar mais livros após confirmação de reserva  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva confirmada.  

### Passos de Execução
1. Na tela de confirmação de reserva, clicar em “Buscar mais livros”.  

### Resultado Esperado
- O sistema direciona o usuário para o catálogo de livros.  

---

## Caso de Teste 12
* **ID do Caso de Teste:** CT12  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Tentativa de acessar checkout diretamente sem sessão ativa  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário não autenticado.  

### Passos de Execução
1. Acessar a URL do checkout diretamente.  

### Resultado Esperado
- O sistema redireciona para a tela de cesta vazia.  

---

## Caso de Teste 13
* **ID do Caso de Teste:** CT13  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Falha no redirecionamento da cesta para checkout  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  
- Pelo menos um livro adicionado à cesta.  

### Passos de Execução
1. Clicar em “Finalizar Reservas”.  

### Resultado Esperado
- O sistema deve redirecionar corretamente para o checkout.  
- Se ocorrer falha, exibir mensagem de erro clara: “Não foi possível carregar a tela de checkout, tente novamente.”  

---

## Caso de Teste 14
* **ID do Caso de Teste:** CT14  
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Confirmar reserva sem marcar termos  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  
- Pelo menos um livro adicionado à cesta.  

### Passos de Execução
1. Estar na tela de checkout.  
2. Não marcar o checkbox de aceite dos termos.  
3. Tentar clicar no botão “Confirmar Reservas”.  

### Resultado Esperado
- O sistema deve manter o botão "Confirmar Rezervar" desabilitado.

---


## Caso de Teste 15
* **ID do Caso de Teste:** CT15 
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Realizar 5 reservas simultâneas com sucesso  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  
- Usuário não possui reservas ativas.  

### Passos de Execução
1. Realizar 5 reservas consecutivas de livros disponíveis.  

### Resultado Esperado
- O sistema permite a criação de até 5 reservas ativas.  
- Todas as reservas aparecem na página de reservas do usuário.  

---

## Caso de Teste 16
* **ID do Caso de Teste:** CT16
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Tentativa de realizar 6ª reserva com limite atingido  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  
- Usuário já possui 5 reservas simultâneas ativas.  

### Passos de Execução
1. Tentar reservar um 6º livro.  

### Resultado Esperado
- O sistema bloqueia a ação e exibe mensagem clara: “Você já possui o limite de 5 reservas ativas. Finalize ou devolva um empréstimo antes de reservar novamente.”  

---

## Caso de Teste 17
* **ID do Caso de Teste:** CT17 
* **Módulo:** Reservar Livro  
* **Título do Caso de Teste:** Realizar nova reserva após devolução de livro  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado.  
- Usuário já possui 5 reservas ativas.  
- Um dos livros foi devolvido, restando 4 reservas ativas.  

### Passos de Execução
1. Tentar reservar um novo livro.  

### Resultado Esperado
- O sistema permite a nova reserva normalmente, respeitando o limite de 5 ativas.  
