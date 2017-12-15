define('forum/components/materialize-input', ['exports', 'forum/components/md-input'], function (exports, _mdInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdInput.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-input}} has been deprecated. Please use {{md-input}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});