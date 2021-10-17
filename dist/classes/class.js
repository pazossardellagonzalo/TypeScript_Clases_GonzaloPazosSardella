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
    get precioBaseA() {
        let precio = this._precioBase;
        if (this._tipo == 'subfusil') {
            precio = this._precioBase * 1, 8;
        }
        if (this._tipo == 'fusil') {
            precio = this._precioBase * 1, 4;
        }
        if (this._tipo == 'escopeta') {
            precio = this._precioBase * 1, 2;
        }
        return precio;
    }
}
exports.armas = armas;
