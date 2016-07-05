const angular = require('angular');

import { ngDateTime } from './ngDateTime.component.ts';

export const ngApp = angular.module('ngApp', [])
    .component('ngDateTime', ngDateTime);
