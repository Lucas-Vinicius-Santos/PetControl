import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { Outlay } from 'src/app/models/outlay.model';
import { Pet } from 'src/app/models/pet.model';
import { OutlayService } from 'src/app/services/outlay.service';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-update-cost',
  templateUrl: './update-cost.component.html',
  styleUrls: ['./update-cost.component.scss'],
})
export class UpdateCostComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faDollarSign = faDollarSign;
  faPaw = faPaw;

  isDisabled = false;

  pets: Pet[] = [];
  options: string[] = [];
  outlay: Outlay = {
    id: 0,
    title: '',
    price: 0,
    pet_id: 0,
    pet: {
      id: 0,
      name: '',
      breed: '',
    },
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private outlayService: OutlayService,
    private petService: PetService
  ) {}

  ngOnInit(): void {
    this.petService.getAllPets().subscribe((pets) => {
      this.pets = pets;
      this.options = this.getAllPetName();
    });
    this.getOutlay();
  }

  getAllPetName() {
    return this.pets.map((pet) => pet.name);
  }
  getOutlay() {
    let id: string | null;
    id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.router.navigate(['/cost-history']);
      return;
    }

    this.outlayService.getOutlayById(id).subscribe((outlay) => {
      this.outlay = outlay;
      this.outlay.price = outlay.price / 100;
    });
  }

  onSubmit() {
    if (!this.outlay.id) {
      this.router.navigate(['/cost-history']);
      return;
    }

    this.outlayService.updateOutlay({
      id: this.outlay.id,

      title: this.outlay.title,
      price: this.outlay.price * 100,
      pet_id: this.outlay.pet.id,
      pet: this.outlay.pet,
    });

    this.isDisabled = true;
    setTimeout(() => {
      this.router.navigateByUrl('/cost-history');
    }, 1000);
  }

  cancel() {
    this.router.navigateByUrl('/cost-history');
  }
}
