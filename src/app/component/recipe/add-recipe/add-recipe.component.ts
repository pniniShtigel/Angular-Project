import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user-service.service';
import { Recipe } from '../../../classes/recipe';
import { Categories, Category } from '../../../classes/category';
import { RecipeService } from '../../../services/recipe-service.service';



@Component({
  selector: 'app-add-recipe',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule,CommonModule],
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})

export class AddRecipeComponent implements OnInit {
  currentUser: string | null = sessionStorage.getItem('currentUser');
 
    


  recipe: Recipe = new Recipe(0, '', 0, 0, 0, [], [], 0, ''); // מתכון חדש ריק להתחלה
  categories: Category[] = Categories;
  ingredientInput: string = ''; // קלט חדש של מרכיב
  instructionInput: string = ''; // קלט חדש של הוראה

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    if(this.currentUser)
    {
      const parsedObject = JSON.parse(this.currentUser);
      const id = parsedObject.id;
      this.recipe.userId=id;
      console.log( "add -recipe",this.recipe.userId       )
    }

  }

  // הוספת מרכיב לרשימת המרכיבים
  addIngredient(): void {
    if (this.ingredientInput.trim()) {
      this.recipe.ingredients.push(this.ingredientInput);
      this.ingredientInput = ''; // איפוס קלט
    }
    
  }

  // הוספת הוראה לרשימת ההוראות
  addInstruction(): void {
    if (this.instructionInput.trim()) {
      this.recipe.instructions.push(this.instructionInput);
      this.instructionInput = ''; // איפוס קלט
    }
  }

  // שמירת המתכון החדש
  saveRecipe(): void {
    console.log(this.recipe)
    if (this.recipe.ingredients.length === 0 || this.recipe.instructions.length === 0||this.recipe.name==null) {
      Swal.fire({
        title: 'Error',
        text: 'Please provide ingredients, instructions, and a recipe name',
        icon: 'error',
        confirmButtonColor: '#f39c12',
        background: '#000000', 
        color:'#ffffff',
        iconColor:"#f39c12"
      });
      return; // אם אין מרכיבים או הוראות, לא לשמור
    }

    this.recipeService.addRecipe(this.recipe).subscribe(() => {
      Swal.fire({
        title: 'success',
        text: 'the recipe added successfully',
        icon: 'success',
        confirmButtonColor: '#f39c12', 
        background: '#000000', 
        color:'#ffffff',
        iconColor:"#f39c12"
      });
      this.router.navigate(['/all-recipes']); // מעבר לדף כל המתכונים
    });
  }
}

