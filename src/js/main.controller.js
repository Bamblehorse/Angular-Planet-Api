"use strict";
export default class Main {
  /* @ngInject */
  constructor(Swapi) {
    this.title = "Planets";

    this.page = 0;
    this.pages = 0;
    this.column = 'population';
    this.markerOne = 1;
    this.markerTwo = 2;
    this.markerThree = '...';

    this.data = [];
    this.planets = [];
    this.count = 0;

    this.swapi = Swapi;
    this.getPlanets();
  }

  getPlanets (url='https://swapi.co/api/planets/?page=' + (this.page + 1)) {
    console.log(url);
    this.swapi.getPlanets(url)
      .then((res) => {
        console.log(res);
        this.count = res.count;
        let approxPages = this.count / 10;
        if (approxPages > Math.floor(approxPages)) {
          this.pages = Math.floor(approxPages + 1);
        } else { this.pages = approxPages; }

        this.planets[this.page] = res.results;
        this.data[this.page] = res;
      })
      .then((err) => {
        if (err) { console.log(err); }
      });
  }

  setColumn (column) {
    if (column === this.column) {
      this.column = "-" + this.column;
    }
    else {
      if (column !== 'name') {
        this.planets[this.page].forEach( function(planet) {
          if (planet[column] !== 'unknown') {
            planet[column] = parseInt(planet[column]);
          }
        });
      }
      this.column = column;
    }
  }

  disabled(page, marker) {
    return this.pageIs(page) || this.isDots(marker);
  }

  pageIs(page) {
    return this.page + 1 === page;
  }

  isDots(marker) {
    return marker === '...';
  }

  setPage (page) {
    this.page = page - 1;
    this.setMarker();
    if (!this.planets[this.page]) {
      this.getPlanets();
    }
  }

  nextPage () {
    this.setPage(this.page + 2);
  }

  prevPage () {
    this.setPage(this.page);
  }

  setMarker () {
    if (this.page > this.pages - 2) {
      this.markerOne = '...';
      this.markerTwo = this.page;
      this.markerThree = this.page + 1;
      if (this.page === this.pages) {
        this.markerTwo = this.page - 1;
        this.markerThree = this.page;
      }
    }
    if (this.page < this.pages - 2) {
      this.markerOne = this.page + 1;
      this.markerTwo = this.page + 2;
      this.markerThree = '...';
    }
  }
}
