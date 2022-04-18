import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, Observable, of } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  constructor(private http: HttpClient) {}

  obtenerDatosObservable(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/')
  }

}
