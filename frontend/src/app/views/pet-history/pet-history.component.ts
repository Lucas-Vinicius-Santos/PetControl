import { Component, OnInit } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

import compareByName from 'src/utils/sortPetByName';


@Component({
  selector: 'app-pet-history',
  templateUrl: './pet-history.component.html',
  styleUrls: ['./pet-history.component.scss'],
})
export class PetHistoryComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;

  pets: Pet[] = [];

  constructor(private petService: PetService) {}

  ngOnInit(): void {
    this.petService.getAllPets().subscribe((pets) => {
      this.pets = pets.sort(compareByName);
    });
  }
}
