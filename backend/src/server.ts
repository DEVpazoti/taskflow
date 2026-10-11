// 1. traz a biblioteca express para este arquivo
import express from "express";          

// 2. fabrica o servidor e guarda em "app"
const app = express();
// 3. a "porta" onde o servidor vai escutar
const PORT = 3333;

// 4. middleware: entende JSON em todas as requisições
app.use(express.json());                  

// 5. quando chegar GET em /health, execute esta função
app.get("/health", (req, res) => {           
// 6. responda com status 200 e este objeto em JSON
  res.status(200).json({ 
    status: "ok", 
    timestamp: new Date().toISOString() 
});
});
// 7. fecha a função e a chamada do app.get

app.get("/ola", (req, res) => {
  let nome = req.query.nome || "Visitante";       // let, porque o valor pode mudar logo abaixo

  res.status(200).json({ mensagem: `Olá, ${nome}!` });   // uma resposta só
});

// 8. começa a escutar na porta; quando estiver pronto...
app.listen(PORT, () => {                  
// 9. ...mostra a mensagem no terminal
  console.log(`Servidor no ar na porta ${PORT}`); 
});