const express = require("express"); // importa o módulo
const app = express(); // atribui para conseguir usar o express como função
const routers = require("./routes/M1S6_Ex06-route.js");

app.use(express.json());

// MIDDLEWARE
app.post("/createNewUser", (req, res, next) => {
    const user = req.body;
    if (user.cargo == "líder") {
        next();
    } else {
        return res.send({"message": "Cargo must be equals 'líder'"})
    }
});

app.use(routers);

app.listen(3334, () => {
    console.log('Servidor online na porta 3334!');
});