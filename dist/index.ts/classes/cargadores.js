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
    precio() {
        let precio;
        precio = super.precio();
        if (this._tipoCargador == 'extendido') {
            precio += 20;
        }
        if (this._tipoCargador == 'cinta') {
            precio += 40;
        }
        if (this._tipoCargador == 'rotativo') {
            precio += 59;
        }
        if (this._tipoCargador == 'tambor') {
            precio += 10;
        }
        return precio;
    }
    resumen() {
        let resumen;
        resumen = `${super.resumen()}, cargador: ${this._tipoCargador}`;
        return resumen;
    }
}
exports.cargadores = cargadores;
