import { armas} from './classes/armas';
import { cargadores } from './classes/cargadores';
import { accesorios } from './classes/accesorios';
import { menu } from './util/menu';
import { leer } from './util/consolePrint'
import { stringify } from 'querystring';

let armasA: Array<armas> = new Array<armas>();

const nuevo = async () =>  {
   let armasF: Array<armas> = new Array<armas>();
   armasF[0] = new armas('escopeta', 1000)
   armasF[1] = new armas('fusil', 1400)
   armasF[2] = new cargadores('fusil', 1400, 'cinta')
   armasF[3] = new accesorios('escopeta', 1000, 'mirilla')
   return armasF
}

// Menu con opciones
const main = async () => {
   let n: number
   let arma: armas | undefined

do {
  n = await menu()
  switch(n){
  case 1:
         armasA = await nuevo()
         console.log(armasA)
         break
  case 2:
         console.log(armasA)
         break
  case 3:
         armasA[0]._precioBase = 1100
         console.log(armasA)
         break
  case 4:
         delete armasA[3]
         console.log(armasA)
  case 5:
         console.log(armasA[0])
  case 0:
console.log('\nAdios')
}
}while (n != 0)
}
main()