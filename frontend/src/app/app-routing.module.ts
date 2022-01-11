import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from './views/landing/landing.component';

import { CostHistoryComponent } from './views/cost-history/cost-history.component';
import { CreateCostComponent } from './views/create-cost/create-cost.component';
import { UpdateCostComponent } from './views/update-cost/update-cost.component';
import { DeleteCostComponent } from './views/delete-cost/delete-cost.component';

import { PetHistoryComponent } from './views/pet-history/pet-history.component';
import { CreatePetComponent } from './views/create-pet/create-pet.component';
import { UpdatePetComponent } from './views/update-pet/update-pet.component';
import { DeletePetComponent } from './views/delete-pet/delete-pet.component';

const routes: Routes = [
  { path: '', component: LandingComponent },

  { path: 'cost-history', component: CostHistoryComponent },
  { path: 'new-cost', component: CreateCostComponent },
  { path: 'update-cost/:id', component: UpdateCostComponent },
  { path: 'update-cost', redirectTo: 'cost-history' },
  { path: 'delete-cost/:id', component: DeleteCostComponent },
  { path: 'delete-cost', redirectTo: 'cost-history' },

  { path: 'pet-history', component: PetHistoryComponent },
  { path: 'new-pet', component: CreatePetComponent },
  { path: 'update-pet/:id', component: UpdatePetComponent },
  { path: 'update-pet', redirectTo: 'pet-history' },
  { path: 'delete-pet/:id', component: DeletePetComponent },
  { path: 'delete-pet', redirectTo: 'pet-history' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
