// import { User } from './User';
// import { Company } from './Company';

// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };

  markerContent(): string;
  color: string;
}

export class CustomMap {
  // private so it cant be accessed outside
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        // able to use mappable.location.lat/lng because they exist in both user and company
        lat: mappable.location.lat,
        lng: mappable.location.lat,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }

  // addCompanyMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lat,
  //     },
  //   });
  // }
}
