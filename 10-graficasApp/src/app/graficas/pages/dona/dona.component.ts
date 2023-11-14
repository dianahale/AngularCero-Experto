import { Component } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: []
})
export class DonaComponent {

  public doughnutChartLabels: string[] = [ '2022', '2021', '2020', '2019' ];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350,200,450,40 ], backgroundColor:['#472478','#BF95F9','#924AF7','#5C4878'] },
    ]
  };

  public doughnutChartType: ChartType = 'doughnut';

}
