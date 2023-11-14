import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor( private graficaService: GraficasService ) { }

  colors: string[]=['#F075A2','#E16FF7','#9570E0','#6F86F7','#7AC7F0'];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels:   [],
    datasets: []
  };
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.graficaService.getUsuariosRedesSocialesInfo()
      .subscribe( ({labels, values}) => 
      this.doughnutChartData={
        labels: labels,
        datasets:[ {data:values, backgroundColor: this.colors} ]
    });

  }
  
}



// this.graficaService.getUsuariosRedesSociales()
//   .subscribe(data=>{
//     this.doughnutChartData={
//       labels: Object.keys(data),
//       datasets:[ {data:Object.values(data), backgroundColor: this.colors} ]
//     }
//   });
