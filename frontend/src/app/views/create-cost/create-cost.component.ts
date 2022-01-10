import { Component, OnInit } from '@angular/core';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-cost',
  templateUrl: './create-cost.component.html',
  styleUrls: ['./create-cost.component.scss'],
})
export class CreateCostComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faPaw = faPaw;
  faDollarSign = faDollarSign;

  opitions = ['Nina', 'Spike', 'Rex', 'Miau'];

  constructor() {}

  ngOnInit(): void {}
}
