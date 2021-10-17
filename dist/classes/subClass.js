"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargadores = void 0;
const class_1 = require("../classes/class");
class cargadores extends class_1.armas {
    constructor(t, p, tam, ex, r, c) {
        super(t, p);
        this.tambor = tam,
            this.extendido = ex,
            this.rotativo = r,
            this.cinta = c;
    }
    get tamborA() {
        return this.tambor;
    }
    get extendidoA() {
        return this.extendido;
    }
    get rotativoA() {
        return this.rotativo;
    }
    get cintaA() {
        return this.cinta;
    }
}
exports.cargadores = cargadores;
