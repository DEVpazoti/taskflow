# Modelagem do banco de dados

Banco relacional PostgreSQL com duas tabelas: `users` (usuários) e `tasks` (tarefas).
Cada usuário pode ter várias tarefas, e cada tarefa pertence a um único usuário (relação 1:N).

## Tabela `users`

| Coluna | Tipo | Regras |
|---|---|---|
| `id` | UUID | Chave primária, gerado automaticamente |
| `name` | texto | Obrigatório |
| `email` | texto | Obrigatório e único |
| `password_hash` | texto | Obrigatório |
| `created_at` | data e hora | Obrigatório, padrão: momento da criação |
| `updated_at` | data e hora | Obrigatório, atualizado a cada edição |

## Tabela `tasks`

| Coluna | Tipo | Regras |
|---|---|---|
| `id` | UUID | Chave primária, gerado automaticamente |
| `title` | texto | Obrigatório |
| `description` | texto | Opcional |
| `completed` | boolean | Obrigatório, padrão: `false` |
| `completed_at` | data e hora | Opcional, preenchido ao concluir a tarefa |
| `user_id` | UUID | Obrigatório, chave estrangeira para `users.id` |
| `created_at` | data e hora | Obrigatório, padrão: momento da criação |
| `updated_at` | data e hora | Obrigatório, atualizado a cada edição |

## Decisões

- **UUID como id:** [escreva com suas palavras por que não usamos número sequencial]
- **E-mail único:** [por que o e-mail não pode repetir e o nome pode]
- **Senha em hash:** [por que não guardar a senha como foi digitada]
- **`user_id` na tabela de tarefas:** [por que a referência fica na tarefa e não no usuário]
- **Se um usuário for excluído, as tarefas dele também são excluídas**, para não ficarem tarefas sem dono.
- **Não guardamos "há quanto tempo a tarefa está ativa":** [por que esse valor é calculado e não guardado]