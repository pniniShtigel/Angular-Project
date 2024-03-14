import { Component, Input } from '@angular/core';
import { Recipe } from '../../../classes/recipe';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ZmanPipe } from "../../../zman.pipe";
import { Router } from '@angular/router';
import { UserService } from '../../../services/user-service.service';

@Component({
    selector: 'app-small-recipe',
    standalone: true,
    templateUrl: './small-recipe.component.html',
    styleUrl: './small-recipe.component.css',
    imports: [CommonModule, FormsModule, ZmanPipe]
})
export class SmallRecipeComponent {
  
  @Input() recipe?: Recipe; // משתנה אופציונלי
 


  constructor(private userService: UserService, private router: Router) {}

  // viewRecipeDetails(recipe?: Recipe) {
  //   if (recipe && recipe.id) {
  //     this.router.navigate(['/recipe-details', { id: recipe.id }]);
  //   }
  // }



  viewRecipeDetails(recipe?: Recipe) {
    const currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
    if (currentUser && currentUser.name) {
      if (recipe && recipe.id) {
        this.router.navigate(['/recipe-details', { id: recipe.id }]);
      }
    } else {
      // המשתמש לא קיים ב-sessionlStorage, מפנים אותו לעמוד ההתחברות או לעמוד ההרשמה
      this.router.navigate(['/login']);
      // או
      // this.router.navigate(['/register']);
    }
  }



  editRecipe(recipe?: Recipe) {
    if(recipe && recipe.id)
    {
      this.router.navigate(['/edit-recipe', { id: recipe.id }]);

  }
    // הוסף את הלוגיקה כאן לנווט לעמוד המתאים לעריכת המתכון, כמו לדוגמה:
    // this.router.navigate(['/edit-recipe', recipe.id]);
  }
      range(n: number | undefined) {
    if (n === undefined) {
      return [];
    }
    return Array(n).fill(0).map((x, i) => i);
  }
  
}
