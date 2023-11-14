import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal : boolean = false;
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
  };
  public barChartType: ChartType = 'bar';

  @Input() barChartData: ChartData = {
    labels: [],
    datasets: []
  };

  constructor() { }

  ngOnInit(): void {
    if(this.horizontal){
      this.barChartOptions!.indexAxis='y';
    }
  }

}


// ngOnInit(): void {
//   if (this.horizontal) {
//     this.barChartOptions!.indexAxis = 'y'; // angular confía en mí siempre vas a tener algo ahí!
//   }

//   this.barChartData.datasets = this.inputDatasets;
//   this.barChartData.labels = this.inputLabels;
// }