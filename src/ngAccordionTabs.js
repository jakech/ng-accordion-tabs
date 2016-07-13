var app = angular.module('ng-accordion-tabs', []);

app.directive('ngATab', require('./directives/pane.js'));
app.directive('ngATabs', require('./directives/controls.js'));

// style
require('./style.less');
