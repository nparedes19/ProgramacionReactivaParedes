import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DatosService } from './services/datos.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatListModule} from '@angular/material/list';
import { MatCardModule} from '@angular/material/card';
import { FiltradoComponent } from './components/filtrado/filtrado.component';


@NgModule({
  declarations: [
    AppComponent,
    FiltradoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule
  ],
  providers: [
    DatosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
