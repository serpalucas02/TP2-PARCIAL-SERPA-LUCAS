document.getElementById('formNota').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nota = document.getElementById('nota').value;
    const response = await fetch('/notas/ingreso', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nota: parseFloat(nota) })
    });
    const result = await response.json();
    alert(result ? 'Nota guardada' : 'Error al guardar la nota');

    document.getElementById('nota').value = '';
});
