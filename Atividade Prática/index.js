const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

// Rota para sortear os pares
app.post('/draw', (req, res) => {
    const { participants } = req.body;

    if (!participants || participants.length < 2) {
        return res.json({ error: 'Número insuficiente de participantes.' });
    }

    const shuffled = [...participants].sort(() => Math.random() - 0.5);
    const pairs = shuffled.map((giver, index) => ({
        giver,
        receiver: shuffled[(index + 1) % shuffled.length],
    }));

    res.json({ pairs });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
