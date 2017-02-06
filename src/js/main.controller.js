"use strict";
export default class Main {
  /* @ngInject */
  constructor(Swapi) {
    this.title = "Planets";

    this.page = 0;
    this.markerOne = 1;
    this.markerTwo = 2;
    this.markerThree = '...';

    this.data = [];
    this.planets = [];

    this.swapi = Swapi;
    this.getPlanets();
  }

  getPlanets (url='https://swapi.co/api/planets/?page=' + (this.page + 1)) {
    console.log(url);
    this.swapi.getPlanets(url)
      .then((res) => {
        this.planets[this.page] = res.results;
        this.data[this.page] = res;
      })
      .then((err) => {
        if (err) { console.log(err); }
      });
  }

  setPage (page = this.page + 1) {
    this.setMarker(page);
    if (!this.planets[this.page]) {
      this.getPlanets();
    }
  }

  nextPlanetSet () {
  this.page += 1;
    this.setPage();
  }

  prevPlanetSet () {
    this.page -= 1;
    this.setPage();
  }

  setMarker (page) {
    if (page > 5) {
      this.markerOne = '...';
      this.markerTwo = page;
      this.markerThree = page + 1;
      if (page === 7) {
        this.markerTwo = 6;
        this.markerThree = 7;
      }
    }
    else {
      this.markerOne = page;
      this.markerTwo = page + 1;
      this.markerThree = '...';
    }
  }
}
