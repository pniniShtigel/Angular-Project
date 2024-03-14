import { NgModule } from '@angular/core';
import { LoginComponent } from './component/user/login/login.component';
import { RegisterComponent } from './component/user/register/register.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { Route, RouterModule } from '@angular/router';
import { RecipeDetailsComponent } from './component/recipe/recipe-details/recipe-details.component';
import { EditRecipeComponent } from './component/recipe/edit-recipe/edit-recipe.component';
import { AddRecipeComponent } from './component/recipe/add-recipe/add-recipe.component';
import { AllRecipeComponent } from './component/recipe/all-recipe/all-recipe.component';
import { LogoutComponent } from './component/user/logout/logout.component';
import { HomeComponent } from './component/home/home.component';

export const routes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'all-recipes', component: AllRecipeComponent },
  { path: 'edit-recipe', component: EditRecipeComponent },
  { path: 'recipe-details', component: RecipeDetailsComponent },
  { path: 'add-recipe', component: AddRecipeComponent },
  { path: 'log-out', component: LogoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  


  { path: '**', component: NotFoundComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
