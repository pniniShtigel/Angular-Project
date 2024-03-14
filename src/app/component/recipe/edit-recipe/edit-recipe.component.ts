
  import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { ActivatedRoute, Router } from '@angular/router';
import { Recipe } from '../../../classes/recipe';
import { RecipeService } from '../../../services/recipe-service.service';
import { Category } from '../../../classes/category';
  
  
  @Component({
    selector: 'app-edit-recipe',
    templateUrl: './edit-recipe.component.html',
    styleUrls: ['./edit-recipe.component.css'],
    standalone: true,
    imports: [FormsModule, ReactiveFormsModule,CommonModule],
  
  })
  export class EditRecipeComponent implements OnInit {
    recipe: Recipe = new Recipe(0, '', 0, 0, 0, [], [], 0, '');
  
    constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }
  
    ngOnInit(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.recipeService.getRecipeById(id).subscribe(recipe => {
        this.recipe = recipe;
      });
    }
  
    saveChanges(): void {
      this.recipeService.updateRecipe(this.recipe).subscribe(() => {
        this.router.navigate(['/all-recipes']); 
      });
    }
  
    cancel(): void {
      this.router.navigate(['/all-recipes']); 
    }
   
  addIngredient(): void {
    if (this.recipe.ingredients == null) {
      this.recipe.ingredients = [];
    }
    this.recipe.ingredients.push('');
  }

  addInstruction(): void {
    if (this.recipe.instructions == null) {
      this.recipe.instructions = [];
    }
    this.recipe.instructions.push('');
  }

  }  
