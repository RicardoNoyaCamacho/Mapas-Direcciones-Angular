import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlacesService {
  public userLocation?: [number, number];

  get isUserLocationReady(): boolean {
    //? '!!' significa que SÍ hay un valor y retorna un true
    return !!this.userLocation;
  }

  constructor() {
    this.getUSerLocation();
  }

  public async getUSerLocation(): Promise<[number, number]> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          this.userLocation = [coords.longitude, coords.latitude];
          resolve(this.userLocation);
        },
        (err) => {
          alert('No se pudo obtener la geolocalización');
          console.log(err);
          reject();
        }
      );
    });
  }
}
