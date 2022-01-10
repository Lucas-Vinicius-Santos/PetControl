import { Component, OnInit } from '@angular/core';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { OutlayRequest } from 'src/app/models/outlay.model';

import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';
import { OutlayService } from 'src/app/services/outlay.service';

@Component({
  selector: 'app-create-cost',
  templateUrl: './create-cost.component.html',
  styleUrls: ['./create-cost.component.scss'],
})
export class CreateCostComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faPaw = faPaw;
  faDollarSign = faDollarSign;

  pets: Pet[] = [];
  options: string[] = [];

  outlay: OutlayRequest = {
    title: '',
    price: null,
    pet: 'default',
  };

  constructor(
    private petService: PetService,
    private outlayService: OutlayService
  ) {}

  ngOnInit(): void {
    this.petService.getAllPets().subscribe((pets) => {
      this.pets = pets;
      this.options = this.getAllPetName();
    });
  }

  getAllPetName() {
    return this.pets.map((pet) => pet.name);
  }

  onSubmit() {
    if (this.outlay.pet === 'default') {
      return alert('Selecione um pet');
    }

    this.outlayService.createOutlay(this.outlay);
  }
}
