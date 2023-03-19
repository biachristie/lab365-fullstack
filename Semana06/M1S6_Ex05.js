const express = require('express');
const app = express();
// Use o bodyParser para analisar o corpo da requisição em JSON
app.use(express.json());

app.post('/sendObject', (req, res) => {
    const object = req.body;
    res.json(object);
    console.log(`Sent successfully ${JSON.stringify(object)}`);
});

app.listen(3332, () => {
    console.log('Servidor online na porta 3332!');
});