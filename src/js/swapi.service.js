"use strict";
export default class Swapi {
  /* @ngInject */
  constructor($http) {
      this.$http = $http;
  }

  get(url) {
    url = url.replace('http:', 'https:');
    return this.$http.get(url);
  }

  getPlanets(url) {
    let data;
    return this.get(url)
      .then((res) => {
        data = res.data;
        const results = data.results;
        for (let i = 0; i < results.length; i++) {
          results[i].terrain = results[i].terrain.split(', ');
          for (let j = 0; j < results[i].films.length; j++) {
            this.get(results[i].films[j]).then((res) =>{
              results[i].films[j] = res.data.title;
            });
          }
          if (results[i].films.length > results[i].terrain.length) {
            results[i].biggest = 'films';
            results[i].smallest = 'terrain';
          } else {
            results[i].biggest = 'terrain';
            results[i].smallest = 'films';
          }
        }
      return data;
      });

  }
}
