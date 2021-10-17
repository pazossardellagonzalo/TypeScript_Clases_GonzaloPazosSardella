"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cargadores = void 0;
const armas_1 = require("./armas");
class cargadores extends armas_1.armas {
    constructor(tipo, precioBase, tipoCargador) {
        super(tipo, precioBase);
        this._tipoCargador = tipoCargador;
    }
    get tipoCargadorA() {
        return this._tipoCargador;
    }
    get acceder() {
        return this._precioBase;
    }
    preciofinal() {
        let precio;
        precio = super.precio();
        if (this._tipoCargador == 'extendido') {
            precio += 0.2 * precio;
        }
        if (this._tipoCargador == 'cinta') {
            precio += 0.2 * precio;
        }
        if (this._tipoCargador == 'rotativo') {
            precio += 0.2 * precio;
        }
        if (this._tipoCargador == 'tambor') {
            precio += 0.2 * precio;
        }
        return precio;
    }
    resultado() {
        let resultado;
        resultado = `${super.resumen()}, cargador: ${this._tipoCargador}`;
        return resultado;
    }
}
exports.cargadores = cargadores;
