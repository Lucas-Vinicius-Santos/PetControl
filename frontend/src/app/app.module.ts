import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxMaskModule } from 'ngx-mask';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CostHistoryComponent } from './views/cost-history/cost-history.component';
import { LandingComponent } from './views/landing/landing.component';
import { CreateCostComponent } from './views/create-cost/create-cost.component';
import { CreatePetComponent } from './views/create-pet/create-pet.component';
import { DeleteCostComponent } from './views/delete-cost/delete-cost.component';
import { UpdateCostComponent } from './views/update-cost/update-cost.component';
import { PetHistoryComponent } from './views/pet-history/pet-history.component';
import { DeletePetComponent } from './views/delete-pet/delete-pet.component';
import { UpdatePetComponent } from './views/update-pet/update-pet.component';

import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
import { CostChartComponent } from './components/cost-chart/cost-chart.component';
registerLocaleData(ptBr);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CostHistoryComponent,
    LandingComponent,
    CreateCostComponent,
    CreatePetComponent,
    DeleteCostComponent,
    UpdateCostComponent,
    PetHistoryComponent,
    DeletePetComponent,
    UpdatePetComponent,
    CostChartComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
