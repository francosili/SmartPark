import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GoogleMaps,GoogleMap,GoogleMapsEvent,GoogleMapOptions,CameraPosition} from '@ionic-native/google-maps';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  map: GoogleMap;
  mapElement: HTMLElement; 

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps){}

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.mapElement = document.getElementById('map');
    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };
    this.map = new GoogleMap(this.mapElement, mapOptions);
    this.map.one(GoogleMapsEvent.MAP_READY)
    .then(() => {
      this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
        .then(marker => {
          marker.on(GoogleMapsEvent.MARKER_CLICK)
            .subscribe(() => {
              alert('clicked');
            });
        });
    });
  }
}
