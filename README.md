# TaskFlow

API para gerenciamento de tarefas, em que cada usuário poderá criar uma conta, fazer login e organizar as próprias tarefas. Projeto full stack criado para estudo, com back-end em Node.js e TypeScript.

> 🚧 Projeto em desenvolvimento.

## Tecnologias

**Em uso:** Node.js, Express, TypeScript, Prettier

**Planejado:** PostgreSQL, Prisma, JWT, bcrypt, Zod, React

## Funcionalidades

- [x] Rota de health check para verificar se a API está no ar
- [x] Respostas de erro 404 em JSON para rotas inexistentes
- [ ] Cadastro e login de usuários com JWT
- [ ] Criar, listar, editar, concluir e excluir tarefas
- [ ] Cada usuário vê apenas as próprias tarefas
- [ ] Front-end em React

## Como rodar localmente

**Pré-requisitos:** Node.js 24 ou superior, npm e Git.

```bash
git clone https://github.com/DEVpazoti/taskflow.git
cd taskflow/backend
npm install
npm run dev
```

A API sobe em `http://localhost:3333`.

## Rotas disponíveis

| Método | Rota | Descrição |
|---|---|---|
| GET | `/health` | Verifica se a API está no ar. Retorna `status: "ok"` e a data e hora atual |
| GET | `/ola?nome=Ana` | Rota de exemplo que lê um parâmetro da URL. Retorna `Olá, Ana!`, ou `Olá, Visitante!` se o nome não for enviado |

Qualquer rota inexistente retorna **404** com `{ "erro": "Rota não encontrada" }`.

## Scripts

Execute dentro da pasta `backend`:

| Comando | O que faz |
|---|---|
| `npm run dev` | Inicia a API em modo de desenvolvimento, reiniciando sozinha a cada alteração no código |
| `npm run build` | Compila o TypeScript para JavaScript na pasta `dist/` |
| `npm start` | Inicia a versão compilada da API, como em produção (rode o `build` antes) |
| `npm run typecheck` | Verifica os erros de tipo do TypeScript, sem gerar arquivos |
| `npm run format` | Formata todo o código com o Prettier |
| `npm run format:check` | Apenas verifica se o código está formatado, sem alterar nada |

## Autor

Guilherme Pazoti — [LinkedIn](https://www.linkedin.com/in/guilherme-pazoti/) · [GitHub](https://github.com/DEVpazoti)