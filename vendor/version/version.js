'use strict';

angular.module('TimesApp.version', [
  'TimesApp.version.interpolate-filter',
  'TimesApp.version.version-directive'
])

.value('version', '0.1');
