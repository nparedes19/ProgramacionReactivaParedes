import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Item } from 'src/app/models/item';
import { FiltradoService } from 'src/app/services/filtrado.service';

@Component({
  selector: 'app-filtrado',
  templateUrl: './filtrado.component.html',
  styleUrls: ['./filtrado.component.css']
})
export class FiltradoComponent implements OnInit {
  personasFiltradas$!:Observable<Item[]>
  datosPromise!: Promise<Item[]>
  datos: Item[] = []
  constructor(
    private filtradoService: FiltradoService
  ) { }

  ngOnInit(): void {
    this.personasFiltradas$=this.filtradoService.obtenerDatosFiltrados();
    this.datosPromise = this.filtradoService.obtenerDatosPromise();
    this.datosPromise.then((dato)=>{
      this.datos = dato
    }).catch((error)=>{
      console.error(error)
    })
  }

}
