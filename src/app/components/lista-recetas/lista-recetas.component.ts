import { Component } from '@angular/core';
import { RecetasService } from 'src/app/services/recetas.service';
import { Receta } from 'src/app/models/recipes';

@Component({
    selector: 'app-lista-recetas',
    templateUrl: './lista-recetas.component.html',
    styleUrls: ['./lista-recetas.component.css'],
})
export class ListaRecetasComponent {
    constructor(private recetasService: RecetasService) {}
    response: any = [];
    recetas: Receta[] = [];

    ngOnInit() {
        this.getRecetas();
    }

    getRecetas() {
        this.recetasService.getRecipes().subscribe({
            next: (res) => {
                this.response = res;
                console.log(res);
                for (let i = 0; i < this.response.length; i++) {
                    this.recetas.push(this.response[i]);
                }
            },
            error: (err) => {
                console.error(err);
            },
            complete: () => {},
        });
    }
}
