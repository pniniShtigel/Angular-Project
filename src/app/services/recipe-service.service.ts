import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from '../classes/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {

  private apiUrl = 'https://localhost:7121/api/Recipe'; 

  constructor(private http: HttpClient) {}

  // אחזור כל המתכונים
  getAllRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.apiUrl);
  }

  // אחזור מתכון בודד לפי מזהה
  getRecipeById(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.apiUrl}/${id}`);
  }

  // הוספת מתכון חדש
  addRecipe(recipe: Recipe): Observable<Recipe> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Recipe>(this.apiUrl, recipe, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // עדכון מתכון קיים
  updateRecipe(recipe: Recipe): Observable<Recipe> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put<Recipe>(`${this.apiUrl}/${recipe.id}`, recipe, { headers }).pipe(
      catchError(this.handleError)
    );
  }

  // מחיקת מתכון
  deleteRecipe(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  // פונקציה לטיפול בשגיאות
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError('Something went wrong, please try again later.');
  }
}
