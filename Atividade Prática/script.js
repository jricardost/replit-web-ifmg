document.addEventListener('DOMContentLoaded', () => {
    const participants = [];
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const addButton = document.getElementById('add');
    const participantsList = document.getElementById('participants');
    const drawButton = document.getElementById('draw');
    const resultsDiv = document.getElementById('results');
    const pairsList = document.getElementById('pairs');
    const resetButton = document.getElementById('reset');

    // Adicionar participante
    addButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        if (name && !participants.includes(name)) {
            participants.push(name);
            const li = document.createElement('li');
            li.textContent = name;
            participantsList.appendChild(li);
            nameInput.value = '';
        } else {
            alert('Nome inválido ou já adicionado!');
        }
    });

    // Sortear pares
    drawButton.addEventListener('click', async () => {
        if (participants.length < 2) {
            alert('É necessário pelo menos dois participantes para o sorteio.');
            return;
        }
        const response = await fetch('/draw', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ participants }),
        });
        const data = await response.json();
        if (data.error) {
            alert(data.error);
            return;
        }
        pairsList.innerHTML = '';
        data.pairs.forEach(pair => {
            const li = document.createElement('li');
            li.textContent = `${pair.giver} → ${pair.receiver}`;
            pairsList.appendChild(li);
        });
        resultsDiv.classList.remove('hidden');
    });

    // Resetar sorteio
    resetButton.addEventListener('click', () => {
        resultsDiv.classList.add('hidden');
        pairsList.innerHTML = '';
    });
});
