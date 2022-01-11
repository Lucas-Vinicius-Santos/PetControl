import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { Pet } from 'src/app/models/pet.model';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-delete-pet',
  templateUrl: './delete-pet.component.html',
  styleUrls: ['./delete-pet.component.scss'],
})
export class DeletePetComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faPaw = faPaw;

  isDisabled = false;

  pet: Pet = {
    id: 0,
    name: '',
    breed: '',
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private petService: PetService
  ) {}

  ngOnInit(): void {
    this.getPet();
  }

  getPet() {
    let id: string | null;
    id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.router.navigate(['/pet-history']);
      return;
    }

    this.petService.getPetById(id).subscribe((pet) => {
      this.pet = pet;
    });
  }

  onSubmit() {
    if (!this.pet.id) {
      this.router.navigate(['/pet-history']);
      return;
    }

    this.petService.deletePet(this.pet.id.toString());

    this.isDisabled = true;
    setTimeout(() => {
      this.router.navigateByUrl('/pet-history');
    }, 1000);
  }

  cancel() {
    this.router.navigateByUrl('/pet-history');
  }
}
