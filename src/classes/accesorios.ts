import { armas } from "./armas";

export class accesorios extends armas {

   private _tipoAccesorio: string

   constructor(tipo:string, precioBase:number, tipoAccesorio:string){
      super(tipo, precioBase)
      this._tipoAccesorio = tipoAccesorio
   }

   get tipoAccesorioA(){
      return this._tipoAccesorio
   }

   get acceder(){
      return this._precioBase
   }

   precio(): number {
   let precio: number;
   precio = super.precio();
   if (this._tipoAccesorio == 'mirilla') {
      precio += 10;
   }
   if (this._tipoAccesorio == 'empuñadura') {
      precio += 15;
   }
   return precio;
   }

   resumen(){
   let resumen: string
   resumen = `${super.resumen()}, accesorio: ${this._tipoAccesorio}`
   return resumen
   }
            
}