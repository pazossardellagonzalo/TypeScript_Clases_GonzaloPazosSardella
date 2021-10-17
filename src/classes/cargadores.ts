import { armas } from "./armas"

export class cargadores extends armas{

   private _tipoCargador: string

      constructor(tipo:string, precioBase:number, tipoCargador:string){
         super(tipo, precioBase)
         this._tipoCargador = tipoCargador
      }

      get tipoCargadorA(){
         return this._tipoCargador
      }

      get acceder(){
         return this._precioBase
       }

      precio(): number {
         let precio: number;
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

      resumen(){
         let resumen: string
         resumen = `${super.resumen()}, cargador: ${this._tipoCargador}`
         return resumen
       }
}