"use strict";
import Swapi from './swapi.service';
import Main from './main.controller';

angular.module('planetApp', [])
  .service('Swapi', Swapi)
  .controller('Main', Main);
