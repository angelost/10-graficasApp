import { Component, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent {

  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
 
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {},
      y: {
        min: 10,
      },
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end',
      },
    },
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [DataLabelsPlugin];
 
  public barChartData: ChartData<'bar'> = {
    labels: ['2020', '2021', '2022', '2023', '2024', '2025', '2026'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#F64F68', hoverBackgroundColor: 'red'},
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#D444A2', hoverBackgroundColor: 'red'},
      { data: [82, 33, 25, 56, 34, 87, 67], label: 'Series C', backgroundColor: '#DF56EB', hoverBackgroundColor: 'red'}
    ],
  };

}
