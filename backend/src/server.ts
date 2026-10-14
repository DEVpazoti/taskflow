import express from "express";

const app = express();

const PORT = Number(process.env.PORT ?? 3333);

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

app.get("/ola", (req, res) => {
  const nome = req.query.nome || "Visitante";

  res.status(200).json({ mensagem: `Olá, ${nome}!` });
});

// Deve ficar depois de todas as rotas: responde 404 a qualquer requisição
// que chegue até aqui, ou seja, que nenhuma rota acima respondeu.
app.use((req, res) => {
  res.status(404).json({ erro: "Rota não encontrada" });
});

app.listen(PORT, () => {
  console.log(`Servidor no ar na porta ${PORT}`);
});
