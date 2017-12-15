define('forum/components/materialize-date-input', ['exports', 'forum/components/md-input-date'], function (exports, _mdInputDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdInputDate.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-date-input}} has been deprecated. Please use {{md-input-date}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});