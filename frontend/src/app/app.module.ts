import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CostHistoryComponent } from './views/cost-history/cost-history.component';
import { LandingComponent } from './views/landing/landing.component';
import { CreateCostComponent } from './views/create-cost/create-cost.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CostHistoryComponent,
    LandingComponent,
    CreateCostComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
