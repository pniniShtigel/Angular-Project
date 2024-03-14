import { RouterModule, RouterOutlet } from "@angular/router";
import { RegisterComponent } from "./component/user/register/register.component";
import { HomeComponent } from "./component/home/home.component";
import { CommonModule } from "@angular/common";
import { ZmanPipe } from "./zman.pipe";
import { NotFoundComponent } from "./component/not-found/not-found.component";
import { Component } from "@angular/core";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
      RouterOutlet,
      // AllRecipesComponent,
      RegisterComponent,
      HomeComponent,
      // SmallRecipeComponent,
      CommonModule,
      RouterOutlet,
      RouterModule,
      ZmanPipe,
      NotFoundComponent
  ]
})
export class AppComponent {
title = 'project';
}

