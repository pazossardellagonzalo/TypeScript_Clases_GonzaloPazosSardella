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
const armas_1 = require("./classes/armas");
const cargadores_1 = require("./classes/cargadores");
const accesorios_1 = require("./classes/accesorios");
const menu_1 = require("./util/menu");
let armasA = new Array();
const nuevo = () => __awaiter(void 0, void 0, void 0, function* () {
    let armasF = new Array();
    armasF[0] = new armas_1.armas('escopeta', 1000);
    armasF[1] = new armas_1.armas('fusil', 1400);
    armasF[2] = new cargadores_1.cargadores('fusil', 1400, 'cinta');
    armasF[3] = new accesorios_1.accesorios('escopeta', 1000, 'mirilla');
    return armasF;
});
// Menu con opciones
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let n;
    let arma;
    do {
        n = yield (0, menu_1.menu)();
        switch (n) {
            case 1:
                armasA = yield nuevo();
                console.log(armasA);
                break;
            case 2:
                console.log(armasA);
                break;
            case 3:
                armasA[0]._precioBase = 1100;
                console.log(armasA);
                break;
            case 4:
                delete armasA[3];
                console.log(armasA);
            case 5:
                console.log(armasA[0]);
            case 0:
                console.log('\nAdios');
        }
    } while (n != 0);
});
main();
