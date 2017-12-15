define('ember-composability/mixins/parent-component-support', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var A = Ember.A,
      computed = Ember.computed,
      Mixin = Ember.Mixin,
      OrderedSet = Ember.OrderedSet,
      debounce = Ember.run.debounce;
  exports.default = Mixin.create({
    _childComponents: null,
    composableChildrenDebounceTime: 0,

    init: function init() {
      this._super.apply(this, arguments);
      this.set('_childComponents', new OrderedSet());
    },


    composableChildren: computed(function () {
      return this.getComposableChildren();
    }).readOnly(),

    getComposableChildren: function getComposableChildren() {
      var comps = this.get('_childComponents');
      return new A(comps && comps.size ? this.get('_childComponents').list : []);
    },
    _fireComposableChildrenChanged: function _fireComposableChildrenChanged() {
      this.propertyDidChange('composableChildren');
    },
    _notifyComposableChildrenChanged: function _notifyComposableChildrenChanged() {
      if (this.get('composableChildrenDebounceTime')) {
        debounce(this, this._fireComposableChildrenChanged, this.get('composableChildrenDebounceTime'));
      } else {
        this._fireComposableChildrenChanged();
      }
    },
    registerChildComponent: function registerChildComponent(childComponent) {
      this.get('_childComponents').add(childComponent);
      this._notifyComposableChildrenChanged();
    },
    unregisterChildComponent: function unregisterChildComponent(childComponent) {
      this.get('_childComponents').delete(childComponent);
      this._notifyComposableChildrenChanged();
    }
  });
});