"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.menu = void 0;
const consolePrint_1 = require("../util/consolePrint");
const menu = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    console.log('\n');
    console.log('1.- Crear objetos de distinto tipo y añadirlos al array.');
    console.log('2.- Listar el contenido del array');
    console.log('3.- Modificar información de un objeto del array');
    console.log('4.- Borrar algún objeto del array');
    console.log('4.- Ver la información de un objeto concreto');
    console.log('0.- Salir');
    n = parseInt(yield (0, consolePrint_1.leer)('opción: '));
    return n;
});
exports.menu = menu;
