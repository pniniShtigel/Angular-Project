



import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../../../services/recipe-service.service';
import { Recipe } from '../../../classes/recipe';
import { SmallRecipeComponent } from '../small-recipe/small-recipe.component';
import { CommonModule } from '@angular/common';
import { Category } from '../../../classes/category';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-recipe',
  standalone: true,
  imports: [SmallRecipeComponent,CommonModule,FormsModule],
  templateUrl: './all-recipe.component.html',
  styleUrl: './all-recipe.component.css'
})
export class AllRecipeComponent implements OnInit {
  recipes: Recipe[] = []; // רשימת המתכונים
  categories: Category[] = []; // רשימת הקטגוריות
  selectedCategory: number | 'all' = 'all'; // הקטגוריה שנבחרה בתיבת הבחירה
  selectedTime: string | 'all' = 'all'; // הזמן שנבחר בתיבת הבחירה

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    // הבאת רשימת המתכונים מהשירות
    this.recipeService.getAllRecipes().subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });

    // קביעת רשימת הקטגוריות
    this.categories = [
      new Category(0, 'desserts', '🧁'),
      new Category(1, 'cakes & cookies', '🍩'),
      new Category(2, 'health', '🥗'),
      new Category(3, 'fish', '🍴'),
      new Category(4, 'soup', '🍟'),
    ];
  }

  // פונקציה לסינון המתכונים לפי הקטגוריה שנבחרה
  get filteredRecipes(): Recipe[] {
    let filteredRecipes = this.recipes;

    // סינון לפי הקטגוריה שנבחרה
    if (this.selectedCategory !== 'all') {
      filteredRecipes = filteredRecipes.filter(recipe => recipe.categoryId == this.selectedCategory);
    }

    // סינון לפי הזמן שנבחר
    if (this.selectedTime !== 'all') {
      const [min, max] = this.selectedTime.split('-').map(Number);
      filteredRecipes = filteredRecipes.filter(recipe => recipe.preparationTime >= min && recipe.preparationTime <= max);
    }

    return filteredRecipes;
  }
}