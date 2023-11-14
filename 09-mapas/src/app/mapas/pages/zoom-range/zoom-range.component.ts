import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-zoom-range',
  templateUrl: './zoom-range.component.html',
  styles: [`
    .mapa-container{
      width: 100%;
      height: 100%;
    }

    .row{
      background-color: white;
      border-radius: 5px;
      bottom: 50px;
      left: 50px;
      padding: 10px;
      position: fixed;
      z-index: 999;
      width: 400px;
    }
  `]
})
export class ZoomRangeComponent implements AfterViewInit, OnDestroy {
  
  @ViewChild('mapa') divMap!: ElementRef;
  mapa!: mapboxgl.Map;
  zoomLevel: number =14;
  center : [number, number] =  [ -98.2275765024331,21.35157143921041 ];

  constructor() { }

  ngOnDestroy(): void {
    this.mapa.off( 'zoom',    () => {} );
    this.mapa.off( 'zoomend', () => {} );
    this.mapa.off( 'move',    () => {} );
  }
  
  ngAfterViewInit(): void {
    this.mapa = new mapboxgl.Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: this.center,
      zoom: this.zoomLevel
    });

    this.mapa.on('zoom', (ev) => {
      this.zoomLevel = this.mapa.getZoom();
    });

    this.mapa.on('zoomend', (ev) => {
      if(this.mapa.getZoom() > 18 ){
        this.mapa.zoomTo(18);
      }
    });

    //Movimiento del mapa
    this.mapa.on('move', (event) => {
      const target = event.target;
      const { lng, lat } = target.getCenter();
      this.center = [lng, lat];
    })

  }

  zoomIn(){
    this.mapa.zoomIn();
  }
  
  zoomOut(){
    this.mapa.zoomOut();
  }

  zoomCambio( valor : string ){
    this.mapa.zoomTo( Number(valor) );
  }

}