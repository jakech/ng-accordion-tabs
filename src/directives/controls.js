var _ = require('underscore');

module.exports = function () {
  return {
    restrict: 'E',
    scope: {},
    transclude: true,
    replace: true,
    template: require('./controls.html'),
    controllerAs: 'tabs',
    controller: function ($scope, $element, $attrs) {
      var vm = this;
      vm.panes = [];
      vm.currentPane = getCurrentPane;

      function getCurrentPane() {
        return _(vm.panes).findWhere({ selected: true });
      }

      vm.select = function (pane) {
        angular.forEach(vm.panes, function (eachPane) {
          eachPane.selected = false;
        });
        pane.selected = true;
      };

      vm.addPane = function (pane) {
        if (pane.isSelected === undefined) {
          if (pane.isDefault || vm.panes.length === 0) {
            pane.selectPane();
          }
        }
        vm.panes.push(pane);
        return vm.panes.length;
      };
    }
  };
};
