import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./component/user/login/login.component";
import { NotFoundComponent } from "./component/not-found/not-found.component";
import { RegisterComponent } from "./component/user/register/register.component";
import { AppRoutingModule } from "./app.routes";
import { UserModule } from "./component/user/user.module";
import { RecipeModule } from "./component/recipe/recipe.module";


@NgModule({
    declarations: [AppComponent, LoginComponent, NotFoundComponent, RegisterComponent,],
    imports: [BrowserModule, NgModule, FormsModule, HttpClientModule, AppRoutingModule, UserModule, RecipeModule, ReactiveFormsModule],
    bootstrap: [AppComponent],

})
export class AppModule {
}

