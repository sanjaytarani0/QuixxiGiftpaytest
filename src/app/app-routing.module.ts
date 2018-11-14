import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { GiftcardsComponent } from './components/giftcards/giftcards.component';

const routes: Routes = [
  { path: 'userdetails', component: HomeComponent },
  { path: '', component: CountriesComponent },
  {path:'giftcards', component:GiftcardsComponent},
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  
exports: [RouterModule]
})

export class AppRoutingModule { }
