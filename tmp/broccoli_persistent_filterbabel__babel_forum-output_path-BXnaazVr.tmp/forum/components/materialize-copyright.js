define('forum/components/materialize-copyright', ['exports', 'forum/components/md-copyright'], function (exports, _mdCopyright) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCopyright.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-copyright}} has been deprecated. Please use {{md-copyright}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});