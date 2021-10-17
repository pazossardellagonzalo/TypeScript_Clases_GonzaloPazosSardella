"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.armas = void 0;
class armas {
    constructor(tipo, precioBase) {
        this._tipo = tipo,
            this._precioBase = precioBase;
    }
    get tipoA() {
        return this._tipo;
    }
    precio() {
        let precio = this._precioBase;
        if (this._tipo == 'subfusil') {
            precio = this._precioBase * 1.8;
        }
        if (this._tipo == 'fusil') {
            precio = this._precioBase * 1.4;
        }
        if (this._tipo == 'escopeta') {
            precio = this._precioBase * 1.2;
        }
        return precio;
    }
    resumen() {
        return `El precio base es: ${this._precioBase} y el arma es: ${this._tipo}`;
    }
}
exports.armas = armas;
