import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cost-history',
  templateUrl: './cost-history.component.html',
  styleUrls: ['./cost-history.component.scss'],
})
export class CostHistoryComponent implements OnInit {
  products = [
    {
      title: 'Brinquedo',
      price: this.formatePrice(3.99),
      pet: {
        name: 'Rex',
      },
    },
    {
      title: 'ração',
      price: this.formatePrice(23.99),
      pet: {
        name: 'Nina',
      },
    },
    {
      title: 'Areia',
      price: this.formatePrice(13.99),
      pet: {
        name: 'Nina',
      },
    },
  ];

  formatePrice(price: number): string {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price);
  }

  ngOnInit(): void {}
}
