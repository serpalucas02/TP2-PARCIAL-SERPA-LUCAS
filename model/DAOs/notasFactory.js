import NotasMem from './notasMem.js';
import NotasFile from './notasFile.js';
import config from '../../config.js';

class NotasFactory {
    static get() {
        switch (config.MODO_PERSISTENCIA) {
            case 'MEM':
                console.log('*** Persistiendo en Memoria ***');
                return new NotasMem();
            case 'FILE':
                console.log('*** Persistiendo en File System ***');
                return new NotasFile('notas.json');
            default:
                console.log('*** Persistiendo en Memoria (default) ***');
                return new NotasMem();
        }
    }
}

export default NotasFactory;
