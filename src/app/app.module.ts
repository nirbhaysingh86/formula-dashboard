import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormulaColumn1Module } from 'formula-column1';
import { FormulaColumn2Module } from 'formula-column2';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FormulaDashboardComponent } from './formula-dashboard/formula-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    FormulaDashboardComponent,
  
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    FormulaColumn1Module,
    FormulaColumn2Module,
    RouterModule.forRoot([
      { path: '', component: FormulaDashboardComponent, pathMatch: 'full' },
      { path: 'formula-dashboard', component: FormulaDashboardComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
