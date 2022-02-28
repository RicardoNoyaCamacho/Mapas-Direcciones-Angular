import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MapService, PlacesService } from '../../services';
import { Map, Popup, Marker } from 'mapbox-gl';

@Component({
  selector: 'app-map-view',
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css'],
})
export class MapViewComponent implements AfterViewInit {
  @ViewChild('mapDiv') mapDivElement!: ElementRef;

  constructor(
    private placesServices: PlacesService,
    private mapService: MapService
  ) {}

  ngAfterViewInit(): void {
    if (!this.placesServices.userLocation)
      throw new Error('No hay placesService.userLocation');

    const map = new Map({
      container: this.mapDivElement.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: this.placesServices.userLocation, // starting position [lng, lat]
      zoom: 14, // starting zoom
    });

    const popup = new Popup().setHTML(`
    <h6>Aquí estoy</h6>
    <span>Estoy en este lugar del mundo</span>
    `);

    new Marker({ color: 'red' })
      .setLngLat(this.placesServices.userLocation)
      .setPopup(popup)
      .addTo(map);

    this.mapService.setMap(map);
  }
}
