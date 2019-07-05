import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { LinguagensComponent } from './linguagens/linguagens.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { AddLanguageComponent } from './add-language/add-language.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: 'exercicio1', component: ContadorComponent },
  { path: 'exercicio2', component: LinguagensComponent },
  { path: 'exercicio3', component: AddLanguageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    LinguagensComponent,
    AddLanguageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
