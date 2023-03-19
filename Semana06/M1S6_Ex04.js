const express = require('express');
const app = express();

app.get('/list/:name', (req, res) => {
    res.send(`API route created by ${req.params.name}`);
});

app.listen(3331, () => {
    console.log('Server online at 3331!');
});