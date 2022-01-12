import { Component, OnInit } from '@angular/core';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { PetService } from 'src/app/services/pet.service';

import { Pet } from '../../models/pet.model';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss'],
})
export class CreatePetComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faPaw = faPaw;

  pet: Pet = {
    name: '',
    breed: '',
  };

  constructor(private petService: PetService) {}

  ngOnInit(): void {}

  onSubmit() {
    const result = this.petService.createPet(this.pet);

    if (result instanceof Error) {
      alert(result);
      return;
    }

    this.pet = {
      name: '',
      breed: '',
    };
  }
}
