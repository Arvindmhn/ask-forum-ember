define('forum/components/materialize-select', ['exports', 'forum/components/md-select'], function (exports, _mdSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdSelect.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-select}} has been deprecated. Please use {{md-select}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});