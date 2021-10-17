"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const armas_1 = require("./classes/armas");
const cargadores_1 = require("./classes/cargadores");
const accesorios_1 = require("./classes/accesorios");
let arma;
let cargador;
let accesorio;
let armasA = new Array();
armasA[0] = new armas_1.armas('escopeta', 1000);
armasA[1] = new armas_1.armas('fusil', 1400);
armasA[2] = new cargadores_1.cargadores('fusil', 1400, 'cinta');
armasA[3] = new accesorios_1.accesorios('escopeta', 1000, 'mirilla');
