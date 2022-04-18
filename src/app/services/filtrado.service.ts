import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class FiltradoService {
  datos: Item[] =[
    {
      id:1,
      nombre:"Natalia",
      edad:28
    },
    {
      id:2,
      nombre:"Alejandra",
      edad:26
    },
    {
      id:3,
      nombre:"Esperanza",
      edad:30
    }
  ]
  datos$!: Observable<Item[]>
  constructor() {
    this.datos$=of(this.datos)
    this.datosPromise = new Promise ((resolve,reject)=>{
      if(this.datos.length > 0){
        resolve(this.datos)
      }else{
        reject(this.datos)
      }
    })
   }
   obtenerDatosPromise(){
    return this.datosPromise
   }

   obtenerDatosFiltrados(): Observable<Item[]>{
     return this.datos$.pipe(
       map(datos => datos.filter(dato => dato.edad >26))
     )
   }

   datosPromise!: Promise<any>
}
