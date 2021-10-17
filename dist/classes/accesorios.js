"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accesorios = void 0;
const armas_1 = require("./armas");
class accesorios extends armas_1.armas {
    constructor(tipo, precioBase, tipoAccesorio) {
        super(tipo, precioBase);
        this._tipoAccesorio = tipoAccesorio;
    }
    get tipoAccesorioA() {
        return this._tipoAccesorio;
    }
    get acceder() {
        return this._precioBase;
    }
    preciofinal() {
        let precio;
        precio = super.precio();
        if (this._tipoAccesorio == 'mirilla') {
            precio += 1.2 * precio;
        }
        if (this._tipoAccesorio == 'empuñadura') {
            precio += 1.2 * precio;
        }
        return precio;
    }
    resultado() {
        let resultado;
        resultado = `${super.resumen()}, accesorio: ${this._tipoAccesorio}`;
        return resultado;
    }
}
exports.accesorios = accesorios;
