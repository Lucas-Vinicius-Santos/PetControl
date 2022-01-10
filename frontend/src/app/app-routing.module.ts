import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './views/landing/landing.component';
import { CostHistoryComponent } from './views/cost-history/cost-history.component';
import { CreateCostComponent } from './views/create-cost/create-cost.component';
import { CreatePetComponent } from './views/create-pet/create-pet.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'cost-history', component: CostHistoryComponent },
  { path: 'new-cost', component: CreateCostComponent },
  { path: 'new-pet', component: CreatePetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
