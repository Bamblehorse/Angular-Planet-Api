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

    this.planets = [];
    this.count = 0;

    this.search = '';
    this.swapi = Swapi;
    this.getPlanets();
  }
  checkString () {
    this.search = this.search.replace(/[^\w\s]|[\d]/gi, "");
  }

  searchUrl() {
    this.getPlanets(
      'http://swapi.co/api/planets/?search=' +
      this.search + '&page=' + (this.page + 1));
  }

  searchApi () {
    this.checkString();
    if (this.search !== '') {
        this.searchMode = true;
        this.page = 0;
        this.searchUrl();
        this.setMarker();
    }
    else {
      this.searchMode = false;
      this.getPlanets();
    }
  }

  getPlanets (url='https://swapi.co/api/planets/?page=' + (this.page + 1)) {
    this.swapi.getPlanets(url)
      .then((res) => {
        this.count = res.count;
        let approxPages = this.count / 10;
        if (approxPages > Math.floor(approxPages)) {
          this.pages = Math.floor(approxPages + 1);
        } else { this.pages = approxPages; }

        this.planets[this.page] = res.results;
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
    if (marker === this.markerTwo && this.pages === 1) {
      return true;
    }
    return this.pageIs(page) || this.isDots(marker);
  }

  isSelected(marker) {
    return this.pageIs(marker) && !this.isDots(marker);
  }

  pageIs(page) {
    if (this.pages === 0) {
      return true;
    }
    return this.page + 1 === page;
  }

  isDots(marker) {
    return marker === '...';
  }

  setPage (page) {
    this.page = page - 1;
    this.setMarker();
    if (this.searchMode === true) {
        this.searchUrl();
    } else {
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
    const dots = '...';
    if (this.page + 1 >= this.pages - 1) {
        this.markerOne = dots;
        this.markerTwo = this.pages - 1;
        this.markerThree = this.pages;
    }
    if (this.page < this.pages - 2) {
      this.markerOne = this.page + 1;
      this.markerTwo = this.page + 2;
      this.markerThree = dots;
    }
    if (this.pages < 2) {
      this.markerOne = dots;
      this.markerTwo = dots;
      this.markerThree = dots;
    }
  }
}
