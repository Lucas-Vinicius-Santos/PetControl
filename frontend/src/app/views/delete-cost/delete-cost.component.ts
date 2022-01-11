import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faPaw } from '@fortawesome/free-solid-svg-icons';

import { Outlay } from 'src/app/models/outlay.model';
import { OutlayService } from 'src/app/services/outlay.service';

@Component({
  selector: 'app-delete-cost',
  templateUrl: './delete-cost.component.html',
  styleUrls: ['./delete-cost.component.scss'],
})
export class DeleteCostComponent implements OnInit {
  faPencilAlt = faPencilAlt;
  faDollarSign = faDollarSign;
  faPaw = faPaw;

  isDisabled = false;

  outlay: Outlay = {
    title: '',
    price: 0,
    pet: {
      id: 0,
      name: '',
      breed: '',
    },
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private outlayService: OutlayService
  ) {}

  ngOnInit(): void {
    this.getOutlay();
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
    });
  }

  onSubmit() {
    if (!this.outlay.id) {
      this.router.navigate(['/cost-history']);
      return;
    }

    this.outlayService.deleteOutlay(this.outlay.id.toString());

    this.isDisabled = true;
    setTimeout(() => {
      this.router.navigateByUrl('/cost-history');
    }, 1000);
  }

  cancel() {
    this.router.navigateByUrl('/cost-history');
  }
}
