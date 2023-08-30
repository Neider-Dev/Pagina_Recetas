import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ListaRecetasComponent } from './components/lista-recetas/lista-recetas.component';
import { RecetasService } from './services/recetas.service';

@NgModule({
    declarations: [AppComponent, ListaRecetasComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatCardModule,
        HttpClientModule,
    ],
    providers: [RecetasService],
    bootstrap: [AppComponent],
})
export class AppModule {}
