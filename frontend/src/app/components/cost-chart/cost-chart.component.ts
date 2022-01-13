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

  data: dataProps = {
    names: [],
    prices: [],
  };

  constructor(private outlayService: OutlayService) {}

  ngOnInit(): void {
    Chart.register(...registerables);
    this.data = this.getData();

    setTimeout(() => {
      Chart.defaults.font.size = 24;
      Chart.defaults.color = '#ede7e3';
      new Chart(this.chartElement.nativeElement, {
        type: 'bar',
        data: {
          labels: this.data.names,
          datasets: [
            {
              data: this.data.prices,
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
    }, 500);
  }

  getData(): dataProps {
    let data: dataProps = {
      names: [],
      prices: [],
    };
    this.outlayService.getAllOutlays().subscribe((outlays) => {
      outlays.forEach((outlay) => {
        if (!data.names.includes(outlay.pet.name)) {
          data.names.push(outlay.pet.name);
        }
      });
    });

    this.outlayService.getAllOutlays().subscribe((outlays) => {
      data.names = data.names.sort();

      outlays.forEach((outlay) => {
        let index = data.names.indexOf(outlay.pet.name);
        if (!data.prices[index]) data.prices[index] = 0;

        data.prices[index] += outlay.price / 100;
        console.log('> data prices:', data.prices);
      });
    });

    setTimeout(() => {
      console.log('debugging');
    }, 400);

    return data;
  }
}

interface dataProps {
  names: string[];
  prices: number[];
}
