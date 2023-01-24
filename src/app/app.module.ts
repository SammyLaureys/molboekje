import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MolboekjeComponent } from './molboekje/molboekje.component';
import { NotitiesComponent } from './molboekje/notities/notities.component';
import { InfoComponent } from './home/info/info.component';
import { EuroPipe } from './pipes/euro.pipe';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'molboekje', component: MolboekjeComponent,
  children:[
    { path: 'notities/:id', component: NotitiesComponent }
  ] },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MolboekjeComponent,
    NotitiesComponent,
    InfoComponent,
    EuroPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
