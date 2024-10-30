class NotasMem {
    constructor() {
        this.notas = [];
    }

    async agregarNota(nota) {
        this.notas.push(nota);
        return nota;
    }

    async obtenerNotas() {
        return this.notas;
    }
}

export default NotasMem;
