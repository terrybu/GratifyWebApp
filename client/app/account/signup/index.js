'use strict';

import angular from 'angular';
import SignupController from './signup.controller';

export default angular.module('gratifyApp.signup', [])
  .controller('SignupController', SignupController)
  .name;
