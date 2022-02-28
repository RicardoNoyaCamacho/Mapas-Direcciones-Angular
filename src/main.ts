import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import Mapboxgl from 'mapbox-gl'; // or "const Mapboxgl = require('mapbox-gl');"

Mapboxgl.accessToken =
  'pk.eyJ1IjoicmljYXJkb25veWEiLCJhIjoiY2tybnkyODFkMXN3bzJvcXI1MWppaHVyNSJ9.YoBoFemsH3iRu8AuCYAtnQ';

if (!navigator.geolocation) {
  alert('Navegador no soporta la Geolocalización');
  throw new Error('Navegador no soporta la Geolocalización');
}

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
