define('forum/adapters/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _activeModelAdapter.default.extend({
    host: 'http://localhost:3000'
  });
});