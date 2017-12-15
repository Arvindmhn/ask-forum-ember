define('ember-cli-materialize/components/md-badge', ['exports', 'ember', 'ember-cli-materialize/templates/components/md-badge'], function (exports, _ember, _emberCliMaterializeTemplatesComponentsMdBadge) {
  var Component = _ember['default'].Component;
  exports['default'] = Component.extend({
    layout: _emberCliMaterializeTemplatesComponentsMdBadge['default'],
    tagName: 'span',
    text: null,
    classNames: ['badge']
  });
});