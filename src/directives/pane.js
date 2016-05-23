module.exports = function () {
  return {
    require: '^ngATabs',
    restrict: 'E',
    transclude: true,
    replace: true,
    scope: {
      title: '@',
      onSelect: '&',
      isDefault: '=default',
      isSelected: '=selected'
    },
    template: require('./pane.html'),
    link: function (scope, element, attrs, accCtrl) {
      scope.selectPane = function () {
        if (attrs.selected === undefined) {
          accCtrl.select(scope);
        } else {
          scope.onSelect();
        }
      };

      if (attrs.selected !== undefined) {
        scope.$watch('isSelected', paneListener);
      }

      function paneListener(newVal, oldVal) {
        scope.selected = scope.isSelected;

        if (oldVal !== newVal && newVal === true) {
          if (typeof scope.onSelect === 'function') {
            scope.onSelect();
          }
        }
      }

      scope.paneId = scope.$id + 'pane' + accCtrl.addPane(scope);

      // if(scope.isDefault) scope.selectPane();
    }
  };
};
