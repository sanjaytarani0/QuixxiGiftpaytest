import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { HomeComponent } from "./components/home/home.component";
import { FormsModule } from "@angular/forms";
import { User } from "./user";
import { CountriesComponent } from "./components/countries/countries.component";
import { AppRoutingModule } from ".//app-routing.module";
import { PagenotfoundComponent } from "./components/pagenotfound/pagenotfound.component";
import { UserService } from "./services/user.service";
import { HttpClientModule } from "@angular/common/http";
import { GiftcardsComponent } from "./components/giftcards/giftcards.component";
import { HttpModule } from "@angular/http";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    CountriesComponent,
    PagenotfoundComponent,
    GiftcardsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
