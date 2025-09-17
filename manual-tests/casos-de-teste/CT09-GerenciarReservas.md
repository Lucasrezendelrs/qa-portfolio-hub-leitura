# Casos de Teste – Funcionalidade Gerenciamento de Reservas (Administrador)

## Caso de Teste 01
* **ID do Caso de Teste:** CT01  
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Acesso permitido apenas para administradores  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário comum autenticado.  

### Passos de Execução
1. Tentar acessar a lista de reservas.  

### Resultado Esperado
- O sistema bloqueia o acesso e exibe mensagem: “Acesso restrito a administradores”.  

---

## Caso de Teste 02
* **ID do Caso de Teste:** CT02  
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Exibir lista de reservas para administrador  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Usuário autenticado como administrador.  
- Existem reservas cadastradas.  

### Passos de Execução
1. Acessar a tela de gerenciamento de reservas.  

### Resultado Esperado
- O sistema exibe corretamente a lista de reservas com colunas Livro, Usuário, Status, Data da Reserva, Prazo e Ações.  

---

## Caso de Teste 03
* **ID do Caso de Teste:** CT03  
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Exibir data de devolução quando status for Livro Retirado  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva existente com status “Livro Retirado”.  

### Passos de Execução
1. Acessar a lista de reservas como administrador.  

### Resultado Esperado
- A coluna Prazo exibe corretamente a data de devolução.  
- O usuário que realizou a reserva também visualiza o status atualizado com a data de devolução.  

---

## Caso de Teste 04
* **ID do Caso de Teste:** CT04  
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Exibir prazo de retirada quando status for Aguardando retirada  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva existente com status “Aguardando retirada”.  

### Passos de Execução
1. Acessar a lista de reservas como administrador.  

### Resultado Esperado
- A coluna Prazo exibe corretamente a data limite para retirada.  
- O usuário que realizou a reserva também visualiza o prazo de retirada.  

---

## Caso de Teste 05
* **ID do Caso de Teste:** CT05  
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Exibir label VENCIDO em vermelho quando prazo de retirada estiver vencido  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva existente com status “Aguardando retirada” e prazo expirado.  

### Passos de Execução
1. Acessar a lista de reservas como administrador.  

### Resultado Esperado
- A coluna Prazo exibe a data limite vencida acompanhada do texto em vermelho “VENCIDO”.  
- O usuário que realizou a reserva também visualiza a informação de prazo vencido.  

---

## Caso de Teste 06
* **ID do Caso de Teste:** CT06  
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Marcar retirada com confirmação positiva  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva existente com status “Aguardando retirada”.  

### Passos de Execução
1. Acessar a lista de reservas.  
2. Clicar em “Marcar Retirada”.  
3. Confirmar a ação no modal.  

### Resultado Esperado
- Status da reserva muda para “Livro Retirado”.  
- Botão “Marcar Retirada” muda para “Marcar Devolução”.  
- Botão “Cancelar” muda para “Estender”.  
- O usuário que realizou a reserva visualiza a atualização do status e a data de devolução.  

---

## Caso de Teste 07
* **ID do Caso de Teste:** CT07  
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Cancelar modal de Marcar Retirada  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva existente com status “Aguardando retirada”.  

### Passos de Execução
1. Acessar a lista de reservas.  
2. Clicar em “Marcar Retirada”.  
3. Cancelar a ação no modal.  

### Resultado Esperado
- Nenhuma alteração é realizada na reserva.  

---

## Caso de Teste 08
* **ID do Caso de Teste:** CT08  
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Marcar devolução com confirmação positiva  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva existente com status “Livro Retirado”.  

### Passos de Execução
1. Acessar a lista de reservas.  
2. Clicar em “Marcar Devolução”.  
3. Confirmar a ação no modal.  

### Resultado Esperado
- Status da reserva muda para “Devolvido”.  
- Coluna Prazo exibe a data de devolução.  
- O usuário que realizou a reserva também visualiza o status atualizado como “Devolvido”.  

---

## Caso de Teste 09
* **ID do Caso de Teste:** CT09  
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Cancelar modal de Marcar Devolução  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva existente com status “Livro Retirado”.  

### Passos de Execução
1. Acessar a lista de reservas.  
2. Clicar em “Marcar Devolução”.  
3. Cancelar a ação no modal.  

### Resultado Esperado
- Nenhuma alteração é realizada na reserva.  

---

## Caso de Teste 10
* **ID do Caso de Teste:** CT10  
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Estender prazo com confirmação positiva  
* **Prioridade:** Alta  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva existente com status “Livro Retirado”.  

### Passos de Execução
1. Acessar a lista de reservas.  
2. Clicar em “Estender”.  
3. Confirmar a ação no modal.  

### Resultado Esperado
- O sistema atualiza a coluna Prazo para a nova data (+7 dias).  
- Os botões “Marcar Devolução” e “Estender” permanecem disponíveis.  
- O usuário que realizou a reserva visualiza o novo prazo atualizado.  

---

## Caso de Teste 11
* **ID do Caso de Teste:** CT11  
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Cancelar modal de Estender Prazo  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva existente com status “Livro Retirado”.  

### Passos de Execução
1. Acessar a lista de reservas.  
2. Clicar em “Estender”.  
3. Cancelar a ação no modal.  

### Resultado Esperado
- Nenhuma alteração é realizada na reserva.  
- O usuário que realizou a reserva continua visualizando o prazo anterior.  

## Caso de Teste 12
* **ID do Caso de Teste:** CT12 
* **Módulo:** Gerenciamento de Reservas  
* **Título do Caso de Teste:** Cancelar reserva  
* **Prioridade:** Média  
* **Status:** Pendente  
* **Data de Criação:** 2025-09-13  
* **Última Atualização:** 2025-09-13  
* **Responsável:** Lucas  

### Pré-condições
- Reserva existente com status “Aguardando retirada”.  

### Passos de Execução
1. Acessar a lista de reservas.  
2. Clicar em “Cancelar”.  
3. Confirmar a ação no modal.  

### Resultado Esperado
- Status da reserva muda para “Devolvido”.  
- Os botões da coluna Ações desaparecem.  
- O usuário que realizou a reserva também visualiza o status atualizado como “Cancelado”.  