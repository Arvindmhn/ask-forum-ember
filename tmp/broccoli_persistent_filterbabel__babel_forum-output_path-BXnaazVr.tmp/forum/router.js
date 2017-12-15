define('forum/router', ['exports', 'forum/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });

  Router.map(function () {
    this.route('questions', function () {
      this.route('answers', { path: ":qid" }, function () {
        this.route('new');
      });
      this.route('new');
    });
  });

  exports.default = Router;
});