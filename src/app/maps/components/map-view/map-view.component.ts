import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { PlacesService } from '../../services';
import { Map } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(private placesServices: PlacesService) {}

  ngAfterViewInit(): void {
    if (!this.placesServices.userLocation)
      throw new Error('No hay placesService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesServices.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });
  }
}
