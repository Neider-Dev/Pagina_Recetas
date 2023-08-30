import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class RecetasService {
    API_URL = 'https://apirecetas-production.up.railway.app/api';
    constructor(private http: HttpClient) {}

    getRecipes() {
        return this.http.get(`${this.API_URL}/recipes`);
    }
}
