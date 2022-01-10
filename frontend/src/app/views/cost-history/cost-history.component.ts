import { Component, OnInit } from '@angular/core';

import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

import { Outlay } from 'src/app/models/outlay.model';
import { OutlayService } from 'src/app/services/outlay.service';

@Component({
  selector: 'app-cost-history',
  templateUrl: './cost-history.component.html',
  styleUrls: ['./cost-history.component.scss'],
})
export class CostHistoryComponent implements OnInit {
  faTrash = faTrash;
  faEdit = faEdit;

  public outlays: Outlay[] = [];

  formatePrice(price: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }

  constructor(private outlayService: OutlayService) {}

  ngOnInit(): void {
    this.outlayService.getAllOutlays().subscribe((outlays) => {
      this.outlays = outlays;
    });
  }
}
