import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { OutlayService } from 'src/app/services/outlay.service';

@Component({
  selector: 'app-cost-chart',
  templateUrl: './cost-chart.component.html',
  styleUrls: ['./cost-chart.component.scss'],
})
export class CostChartComponent implements OnInit {
  @ViewChild('chart', { static: true }) chartElement!: ElementRef;
  name: string[] = [];
  prices: number[] = [];

  constructor(private outlayService: OutlayService) {}

  ngOnInit(): void {
    Chart.register(...registerables);

    this.name = this.getAllPetName();
    this.prices = this.getAllPrice();

    setTimeout(() => {
      Chart.defaults.font.size = 24;
      Chart.defaults.color = '#ede7e3';
      new Chart(this.chartElement.nativeElement, {
        type: 'bar',
        data: {
          labels: this.name,
          datasets: [
            {
              data: this.prices,
              backgroundColor: ['#005f99'],
            },
          ],
        },
        options: {
          layout: {
            padding: 20,
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
              labels: {
                font: {
                  size: 34,
                },
              },
            },
          },
        },
      });
    }, 1000);
  }

  getAllPetName(): string[] {
    let outlayPet: string[] = [];

    this.outlayService.getAllOutlays().subscribe((outlays) => {
      outlays.map((outlay) => outlayPet.push(outlay.pet.name));
    });

    setTimeout(() => {
      console.log(outlayPet);
    }, 400);

    return outlayPet;
  }
  getAllPrice(): number[] {
    let outlayPrices: number[] = [];
    this.outlayService.getAllOutlays().subscribe((outlays) => {
      outlays.map((outlay) => outlayPrices.push(outlay.price / 100));
    });

    setTimeout(() => {
      console.log(outlayPrices);
    }, 400);

    return outlayPrices;
  }
}
