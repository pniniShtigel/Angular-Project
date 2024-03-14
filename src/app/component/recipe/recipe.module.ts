import { CommonModule } from '@angular/common';
// import { AllRecipesComponent } from './add-recipe-component/all-recipes-component/all-recipes-component.component';

import { NgModule } from '@angular/core';
import { EditRecipeComponent } from './edit-recipe/edit-recipe.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { RecipeService } from '../../services/recipe-service.service';
import { AllRecipeComponent } from './all-recipe/all-recipe.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [EditRecipeComponent,
    RecipeDetailsComponent, AllRecipeComponent],
  imports: [
    CommonModule,

    NgModule,

    HttpClientModule


  ],
  providers: [
    RecipeService,

  ]
})
export class RecipeModule { }
