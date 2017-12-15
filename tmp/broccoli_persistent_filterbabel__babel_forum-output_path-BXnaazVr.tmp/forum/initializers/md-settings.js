define('forum/initializers/md-settings', ['exports', 'forum/config/environment', 'ember-cli-materialize/services/md-settings'], function (exports, _environment, _mdSettings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var materializeDefaults = _environment.default.materializeDefaults;

    var application = arguments[1] || arguments[0];

    if (window && window.validate_field) {
      window.validate_field = function () {};
    }

    application.register('config:materialize', materializeDefaults, { instantiate: false });
    application.register('service:materialize-settings', _mdSettings.default);
    application.inject('service:materialize-settings', 'materializeDefaults', 'config:materialize');
  }

  exports.default = {
    name: 'md-settings',
    initialize: initialize
  };
});