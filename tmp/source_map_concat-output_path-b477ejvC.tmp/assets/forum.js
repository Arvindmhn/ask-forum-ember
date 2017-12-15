"use strict";



define('forum/adapters/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _activeModelAdapter.default.extend({
    host: 'http://localhost:3000'
  });
});
define('forum/app', ['exports', 'forum/resolver', 'ember-load-initializers', 'forum/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
define('forum/components/answer-home', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		store: Ember.inject.service(),
		actions: {
			addUp: function addUp(answer_id) {
				this.sendAction('upVotesClicked', answer_id);
			},
			addDown: function addDown(answer_id) {
				this.sendAction('downVotesClicked', answer_id);
			},
			isEdit: function isEdit(answer) {
				answer.toggleProperty('editor');
			},
			submitAnswer: function submitAnswer(answer) {
				var self = this;
				this.get('store').findRecord('answer', answer.id).then(function (ans) {
					ans.set('answwer', answer.answer);
					ans.save();
					answer.toggleProperty('editor');
				});
			}
		}
	});
});
define('forum/components/answer-new', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({});
});
define('forum/components/ember-modal-dialog-positioned-container', ['exports', 'ember-modal-dialog/components/positioned-container'], function (exports, _positionedContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _positionedContainer.default;
    }
  });
});
define('forum/components/ember-modal-dialog/-basic-dialog', ['exports', 'ember-modal-dialog/components/basic-dialog'], function (exports, _basicDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _basicDialog.default;
    }
  });
});
define('forum/components/ember-modal-dialog/-in-place-dialog', ['exports', 'ember-modal-dialog/components/in-place-dialog'], function (exports, _inPlaceDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _inPlaceDialog.default;
    }
  });
});
define('forum/components/ember-modal-dialog/-liquid-dialog', ['exports', 'ember-modal-dialog/components/liquid-dialog'], function (exports, _liquidDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidDialog.default;
    }
  });
});
define('forum/components/ember-modal-dialog/-liquid-tether-dialog', ['exports', 'ember-modal-dialog/components/liquid-tether-dialog'], function (exports, _liquidTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _liquidTetherDialog.default;
    }
  });
});
define('forum/components/ember-modal-dialog/-tether-dialog', ['exports', 'ember-modal-dialog/components/tether-dialog'], function (exports, _tetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _tetherDialog.default;
    }
  });
});
define('forum/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormhole) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberWormhole.default;
    }
  });
});
define('forum/components/intro-home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var Component = Ember.Component;
  exports.default = Component.extend({});
});
define('forum/components/labeled-radio-button', ['exports', 'ember-radio-button/components/labeled-radio-button'], function (exports, _labeledRadioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _labeledRadioButton.default;
});
define('forum/components/materialize-badge', ['exports', 'forum/components/md-badge'], function (exports, _mdBadge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdBadge.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-badge}} has been deprecated. Please use {{md-badge}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-button-submit', ['exports', 'forum/components/md-btn-submit'], function (exports, _mdBtnSubmit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdBtnSubmit.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-button-submit}} has been deprecated. Please use {{md-btn-submit}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-button', ['exports', 'forum/components/md-btn'], function (exports, _mdBtn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdBtn.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-button}} has been deprecated. Please use {{md-btn}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-card-action', ['exports', 'forum/components/md-card-action'], function (exports, _mdCardAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCardAction.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-card-action}} has been deprecated. Please use {{md-card-action}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-card-content', ['exports', 'forum/components/md-card-content'], function (exports, _mdCardContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCardContent.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-card-content}} has been deprecated. Please use {{md-card-content}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-card-panel', ['exports', 'forum/components/md-card-panel'], function (exports, _mdCardPanel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCardPanel.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-card-panel}} has been deprecated. Please use {{md-card-panel}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-card-reveal', ['exports', 'forum/components/md-card-reveal'], function (exports, _mdCardReveal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCardReveal.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-card-reveal}} has been deprecated. Please use {{md-card-reveal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-card', ['exports', 'forum/components/md-card'], function (exports, _mdCard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCard.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-card}} has been deprecated. Please use {{md-card}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-checkbox', ['exports', 'forum/components/md-check'], function (exports, _mdCheck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCheck.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-checkbox}} has been deprecated. Please use {{md-check}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-checkboxes', ['exports', 'forum/components/md-checks'], function (exports, _mdChecks) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdChecks.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-checkboxes}} has been deprecated. Please use {{md-checks}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-collapsible-card', ['exports', 'forum/components/md-card-collapsible'], function (exports, _mdCardCollapsible) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCardCollapsible.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-collapsible-card}} has been deprecated. Please use {{md-card-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-collapsible', ['exports', 'forum/components/md-collapsible'], function (exports, _mdCollapsible) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCollapsible.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-collapsible}} has been deprecated. Please use {{md-collapsible}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
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
define('forum/components/materialize-input-field', ['exports', 'forum/components/md-input-field'], function (exports, _mdInputField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdInputField.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-input-field}} has been deprecated. Please use {{md-input-field}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
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
define('forum/components/materialize-loader', ['exports', 'forum/components/md-loader'], function (exports, _mdLoader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdLoader.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-loader}} has been deprecated. Please use {{md-loader}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-modal', ['exports', 'forum/components/md-modal'], function (exports, _mdModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdModal.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-modal}} has been deprecated. Please use {{md-modal}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-navbar', ['exports', 'forum/components/md-navbar'], function (exports, _mdNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdNavbar.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-navbar}} has been deprecated. Please use {{md-navbar}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-pagination', ['exports', 'forum/components/md-pagination'], function (exports, _mdPagination) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdPagination.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-pagination}} has been deprecated. Please use {{md-pagination}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-parallax', ['exports', 'forum/components/md-parallax'], function (exports, _mdParallax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdParallax.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-parallax}} has been deprecated. Please use {{md-parallax}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-radio', ['exports', 'forum/components/md-radio'], function (exports, _mdRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdRadio.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-radio}} has been deprecated. Please use {{md-radio}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-radios', ['exports', 'forum/components/md-radios'], function (exports, _mdRadios) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdRadios.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-radios}} has been deprecated. Please use {{md-radios}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-range', ['exports', 'forum/components/md-range'], function (exports, _mdRange) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdRange.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-range}} has been deprecated. Please use {{md-range}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
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
define('forum/components/materialize-switch', ['exports', 'forum/components/md-switch'], function (exports, _mdSwitch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdSwitch.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-switch}} has been deprecated. Please use {{md-switch}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-switches', ['exports', 'forum/components/md-switches'], function (exports, _mdSwitches) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdSwitches.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-switches}} has been deprecated. Please use {{md-switches}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-tabs-tab', ['exports', 'forum/components/md-tab'], function (exports, _mdTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdTab.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-tabs-tab}} has been deprecated. Please use {{md-tab}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-tabs', ['exports', 'forum/components/md-tabs'], function (exports, _mdTabs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdTabs.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-tabs}} has been deprecated. Please use {{md-tabs}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/materialize-textarea', ['exports', 'forum/components/md-textarea'], function (exports, _mdTextarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdTextarea.default.extend({
    init: function init() {
      this._super.apply(this, arguments);
      Ember.deprecate("{{materialize-textarea}} has been deprecated. Please use {{md-textarea}} instead", false, { url: "https://github.com/sgasser/ember-cli-materialize/issues/67" });
    }
  });
});
define('forum/components/md-badge', ['exports', 'ember-cli-materialize/components/md-badge'], function (exports, _mdBadge) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdBadge.default;
});
define('forum/components/md-btn-dropdown', ['exports', 'ember-cli-materialize/components/md-btn-dropdown'], function (exports, _mdBtnDropdown) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdBtnDropdown.default;
});
define('forum/components/md-btn-submit', ['exports', 'ember-cli-materialize/components/md-btn-submit'], function (exports, _mdBtnSubmit) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdBtnSubmit.default;
});
define('forum/components/md-btn', ['exports', 'ember-cli-materialize/components/md-btn'], function (exports, _mdBtn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdBtn.default;
});
define('forum/components/md-card-action', ['exports', 'ember-cli-materialize/components/md-card-action'], function (exports, _mdCardAction) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCardAction.default;
});
define('forum/components/md-card-collapsible', ['exports', 'ember-cli-materialize/components/md-card-collapsible'], function (exports, _mdCardCollapsible) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCardCollapsible.default;
});
define('forum/components/md-card-content', ['exports', 'ember-cli-materialize/components/md-card-content'], function (exports, _mdCardContent) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCardContent.default;
});
define('forum/components/md-card-panel', ['exports', 'ember-cli-materialize/components/md-card-panel'], function (exports, _mdCardPanel) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCardPanel.default;
});
define('forum/components/md-card-reveal', ['exports', 'ember-cli-materialize/components/md-card-reveal'], function (exports, _mdCardReveal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCardReveal.default;
});
define('forum/components/md-card', ['exports', 'ember-cli-materialize/components/md-card'], function (exports, _mdCard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCard.default;
});
define('forum/components/md-check', ['exports', 'ember-cli-materialize/components/md-check'], function (exports, _mdCheck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCheck.default;
});
define('forum/components/md-checks-check', ['exports', 'ember-cli-materialize/components/md-checks-check'], function (exports, _mdChecksCheck) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mdChecksCheck.default;
    }
  });
});
define('forum/components/md-checks', ['exports', 'ember-cli-materialize/components/md-checks'], function (exports, _mdChecks) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdChecks.default;
});
define('forum/components/md-collapsible', ['exports', 'ember-cli-materialize/components/md-collapsible'], function (exports, _mdCollapsible) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCollapsible.default;
});
define('forum/components/md-collection', ['exports', 'ember-cli-materialize/components/md-collection'], function (exports, _mdCollection) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mdCollection.default;
    }
  });
});
define('forum/components/md-copyright', ['exports', 'ember-cli-materialize/components/md-copyright'], function (exports, _mdCopyright) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdCopyright.default;
});
define('forum/components/md-default-collection-header', ['exports', 'ember-cli-materialize/components/md-default-collection-header'], function (exports, _mdDefaultCollectionHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mdDefaultCollectionHeader.default;
    }
  });
});
define('forum/components/md-default-column-header', ['exports', 'ember-cli-materialize/components/md-default-column-header'], function (exports, _mdDefaultColumnHeader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mdDefaultColumnHeader.default;
    }
  });
});
define('forum/components/md-fixed-btn', ['exports', 'ember-cli-materialize/components/md-fixed-btn'], function (exports, _mdFixedBtn) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mdFixedBtn.default;
    }
  });
});
define('forum/components/md-fixed-btns', ['exports', 'ember-cli-materialize/components/md-fixed-btns'], function (exports, _mdFixedBtns) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mdFixedBtns.default;
    }
  });
});
define('forum/components/md-input-date', ['exports', 'ember-cli-materialize/components/md-input-date'], function (exports, _mdInputDate) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdInputDate.default;
});
define('forum/components/md-input-field', ['exports', 'ember-cli-materialize/components/md-input-field'], function (exports, _mdInputField) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdInputField.default;
});
define('forum/components/md-input', ['exports', 'ember-cli-materialize/components/md-input'], function (exports, _mdInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdInput.default;
});
define('forum/components/md-loader', ['exports', 'ember-cli-materialize/components/md-loader'], function (exports, _mdLoader) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdLoader.default;
});
define('forum/components/md-modal-container', ['exports', 'ember-cli-materialize/components/md-modal-container'], function (exports, _mdModalContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdModalContainer.default;
});
define('forum/components/md-modal', ['exports', 'ember-cli-materialize/components/md-modal'], function (exports, _mdModal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdModal.default;
});
define('forum/components/md-navbar', ['exports', 'ember-cli-materialize/components/md-navbar'], function (exports, _mdNavbar) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdNavbar.default;
});
define('forum/components/md-pagination', ['exports', 'ember-cli-materialize/components/md-pagination'], function (exports, _mdPagination) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdPagination.default;
});
define('forum/components/md-parallax', ['exports', 'ember-cli-materialize/components/md-parallax'], function (exports, _mdParallax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdParallax.default;
});
define('forum/components/md-radio', ['exports', 'ember-cli-materialize/components/md-radio'], function (exports, _mdRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdRadio.default;
});
define('forum/components/md-radios-radio', ['exports', 'ember-cli-materialize/components/md-radios-radio'], function (exports, _mdRadiosRadio) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mdRadiosRadio.default;
    }
  });
});
define('forum/components/md-radios', ['exports', 'ember-cli-materialize/components/md-radios'], function (exports, _mdRadios) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdRadios.default;
});
define('forum/components/md-range', ['exports', 'ember-cli-materialize/components/md-range'], function (exports, _mdRange) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdRange.default;
});
define('forum/components/md-select', ['exports', 'ember-cli-materialize/components/md-select'], function (exports, _mdSelect) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdSelect.default;
});
define('forum/components/md-switch', ['exports', 'ember-cli-materialize/components/md-switch'], function (exports, _mdSwitch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdSwitch.default;
});
define('forum/components/md-switches-switch', ['exports', 'ember-cli-materialize/components/md-switches-switch'], function (exports, _mdSwitchesSwitch) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mdSwitchesSwitch.default;
    }
  });
});
define('forum/components/md-switches', ['exports', 'ember-cli-materialize/components/md-switches'], function (exports, _mdSwitches) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdSwitches.default;
});
define('forum/components/md-tab', ['exports', 'ember-cli-materialize/components/md-tab'], function (exports, _mdTab) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdTab.default;
});
define('forum/components/md-table-col', ['exports', 'ember-cli-materialize/components/md-table-col'], function (exports, _mdTableCol) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mdTableCol.default;
    }
  });
});
define('forum/components/md-table', ['exports', 'ember-cli-materialize/components/md-table'], function (exports, _mdTable) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mdTable.default;
    }
  });
});
define('forum/components/md-tabs', ['exports', 'ember-cli-materialize/components/md-tabs'], function (exports, _mdTabs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdTabs.default;
});
define('forum/components/md-textarea', ['exports', 'ember-cli-materialize/components/md-textarea'], function (exports, _mdTextarea) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _mdTextarea.default;
});
define('forum/components/modal-dialog-overlay', ['exports', 'ember-modal-dialog/components/modal-dialog-overlay'], function (exports, _modalDialogOverlay) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialogOverlay.default;
    }
  });
});
define('forum/components/modal-dialog', ['exports', 'ember-modal-dialog/components/modal-dialog'], function (exports, _modalDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _modalDialog.default;
    }
  });
});
define('forum/components/question-home', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Component.extend({});
});
define('forum/components/question-new', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		actions: {}
	});
});
define('forum/components/question-qpage', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		store: Ember.inject.service(),
		actions: {
			setInappropriate: function setInappropriate(questionId) {
				var self = this;
				console.log(questionId);
				this.get('store').findRecord('question', questionId).then(function (quesRecord) {
					if (quesRecord.get('inappropriate') >= 10) {
						quesRecord.destroyRecord().then(function () {
							Materialize.toast('Question deleted due to feedback', 4000);
							Ember.getOwner(self).lookup('router:main').transitionTo('index');
						});
					} else {
						quesRecord.incrementProperty('inappropriate');
						quesRecord.save();
						Materialize.toast('Question marked as inappropriate! Will be taken down after review', 500);
					}
				});
			}
		}
	});
});
define('forum/components/radio-button-input', ['exports', 'ember-radio-button/components/radio-button-input'], function (exports, _radioButtonInput) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _radioButtonInput.default;
});
define('forum/components/radio-button', ['exports', 'ember-radio-button/components/radio-button'], function (exports, _radioButton) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _radioButton.default;
});
define('forum/components/tether-dialog', ['exports', 'ember-modal-dialog/components/deprecated-tether-dialog'], function (exports, _deprecatedTetherDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _deprecatedTetherDialog.default;
    }
  });
});
define('forum/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
define('forum/helpers/and', ['exports', 'ember-truth-helpers/helpers/and'], function (exports, _and) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _and.default;
    }
  });
  Object.defineProperty(exports, 'and', {
    enumerable: true,
    get: function () {
      return _and.and;
    }
  });
});
define('forum/helpers/app-version', ['exports', 'forum/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  var version = _environment.default.APP.version;
  function appVersion(_) {
    var hash = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    if (hash.hideSha) {
      return version.match(_regexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_regexp.shaRegExp)[0];
    }

    return version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
define('forum/helpers/bw-compat-icon', ['exports', 'ember-cli-materialize/helpers/bw-compat-icon'], function (exports, _bwCompatIcon) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _bwCompatIcon.default;
    }
  });
  Object.defineProperty(exports, 'bwCompatIcon', {
    enumerable: true,
    get: function () {
      return _bwCompatIcon.bwCompatIcon;
    }
  });
});
define('forum/helpers/eq', ['exports', 'ember-truth-helpers/helpers/equal'], function (exports, _equal) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _equal.default;
    }
  });
  Object.defineProperty(exports, 'equal', {
    enumerable: true,
    get: function () {
      return _equal.equal;
    }
  });
});
define('forum/helpers/gt', ['exports', 'ember-truth-helpers/helpers/gt'], function (exports, _gt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gt.default;
    }
  });
  Object.defineProperty(exports, 'gt', {
    enumerable: true,
    get: function () {
      return _gt.gt;
    }
  });
});
define('forum/helpers/gte', ['exports', 'ember-truth-helpers/helpers/gte'], function (exports, _gte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _gte.default;
    }
  });
  Object.defineProperty(exports, 'gte', {
    enumerable: true,
    get: function () {
      return _gte.gte;
    }
  });
});
define('forum/helpers/ignore-children', ['exports', 'ember-ignore-children-helper/helpers/ignore-children'], function (exports, _ignoreChildren) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.default;
    }
  });
  Object.defineProperty(exports, 'ignoreChildren', {
    enumerable: true,
    get: function () {
      return _ignoreChildren.ignoreChildren;
    }
  });
});
define('forum/helpers/is-array', ['exports', 'ember-truth-helpers/helpers/is-array'], function (exports, _isArray) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isArray.default;
    }
  });
  Object.defineProperty(exports, 'isArray', {
    enumerable: true,
    get: function () {
      return _isArray.isArray;
    }
  });
});
define('forum/helpers/is-equal', ['exports', 'ember-truth-helpers/helpers/is-equal'], function (exports, _isEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isEqual.default;
    }
  });
  Object.defineProperty(exports, 'isEqual', {
    enumerable: true,
    get: function () {
      return _isEqual.isEqual;
    }
  });
});
define('forum/helpers/lt', ['exports', 'ember-truth-helpers/helpers/lt'], function (exports, _lt) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lt.default;
    }
  });
  Object.defineProperty(exports, 'lt', {
    enumerable: true,
    get: function () {
      return _lt.lt;
    }
  });
});
define('forum/helpers/lte', ['exports', 'ember-truth-helpers/helpers/lte'], function (exports, _lte) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _lte.default;
    }
  });
  Object.defineProperty(exports, 'lte', {
    enumerable: true,
    get: function () {
      return _lte.lte;
    }
  });
});
define('forum/helpers/not-eq', ['exports', 'ember-truth-helpers/helpers/not-equal'], function (exports, _notEqual) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _notEqual.default;
    }
  });
  Object.defineProperty(exports, 'notEq', {
    enumerable: true,
    get: function () {
      return _notEqual.notEq;
    }
  });
});
define('forum/helpers/not', ['exports', 'ember-truth-helpers/helpers/not'], function (exports, _not) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _not.default;
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function () {
      return _not.not;
    }
  });
});
define('forum/helpers/or', ['exports', 'ember-truth-helpers/helpers/or'], function (exports, _or) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _or.default;
    }
  });
  Object.defineProperty(exports, 'or', {
    enumerable: true,
    get: function () {
      return _or.or;
    }
  });
});
define('forum/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
define('forum/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
define('forum/helpers/xor', ['exports', 'ember-truth-helpers/helpers/xor'], function (exports, _xor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _xor.default;
    }
  });
  Object.defineProperty(exports, 'xor', {
    enumerable: true,
    get: function () {
      return _xor.xor;
    }
  });
});
define("forum/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelSerializer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter.default);
      application.register('serializer:-active-model', _activeModelSerializer.default);
    }
  };
});
define('forum/initializers/add-modals-container', ['exports', 'ember-modal-dialog/initializers/add-modals-container'], function (exports, _addModalsContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'add-modals-container',
    initialize: _addModalsContainer.default
  };
});
define('forum/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'forum/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  var name = void 0,
      version = void 0;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
define('forum/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('forum/initializers/data-adapter', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('forum/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
define('forum/initializers/ember-keyboard-first-responder-inputs', ['exports', 'ember-keyboard/initializers/ember-keyboard-first-responder-inputs'], function (exports, _emberKeyboardFirstResponderInputs) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.default;
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function () {
      return _emberKeyboardFirstResponderInputs.initialize;
    }
  });
});
define('forum/initializers/export-application-global', ['exports', 'forum/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('forum/initializers/injectStore', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
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
define('forum/initializers/store', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('forum/initializers/transforms', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("forum/instance-initializers/ember-data", ["exports", "ember-data/instance-initializers/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
define('forum/models/answer', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		qid: _emberData.default.attr('number'),
		answer: _emberData.default.attr('string'),
		created_at: _emberData.default.attr('date'),
		upvotes: _emberData.default.attr('number'),
		downvotes: _emberData.default.attr('number')
	});
});
define('forum/models/question', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		question: _emberData.default.attr('string'),
		asked_by: _emberData.default.attr('string'),
		created_at: _emberData.default.attr('date'),
		inappropriate: _emberData.default.attr('number')
	});
});
define('forum/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
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
define('forum/routes/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		// beforeModel() {
		// 	this.replaceWith('questions');
		// }
		model: function model() {
			return this.store.findAll('question');
		}
	});
});
define('forum/routes/questions', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model: function model() {
			return this.store.findAll('question');
		}
	});
});
define('forum/routes/questions/answers', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var RSVP = Ember.RSVP;
	exports.default = Ember.Route.extend({
		model: function model(params) {
			console.log(params);
			return RSVP.hash({
				question: this.store.findRecord('question', params["qid"]),
				answers: this.store.query('answer', { filter: { qid: params["qid"] } }),
				newAnswer: { "qid": params["qid"], "upvotes": 0, "downvotes": 0 }
			});
		},

		actions: {
			addUpVotes: function addUpVotes(answer_id) {
				this.store.findRecord('answer', answer_id).then(function (ansRecord) {
					ansRecord.incrementProperty('upvotes');
					ansRecord.save();
					Materialize.toast('Answer upvoted!', 4000);
				});
			},
			addDownVotes: function addDownVotes(answer_id) {
				this.store.findRecord('answer', answer_id).then(function (ansRecord) {
					ansRecord.incrementProperty('downvotes');
					ansRecord.save();
					Materialize.toast('Answer downvoted!', 4000);
				});
			},
			submitAnswer: function submitAnswer() {
				var _this = this;

				console.log(this.currentModel.newAnswer);
				var newAns = this.get('store').createRecord('answer', this.currentModel.newAnswer);
				newAns.save().then(function (answer) {
					Materialize.toast('Answer submitted successfully', 4000);
					_this.refresh();
				});
			}

		}
	});
});
define("forum/routes/questions/answers/new", ["exports"], function (exports) {
	"use strict";

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model: function model(params) {
			return { "qid": params["qid"] };
		},

		actions: {
			submitAnswer: function submitAnswer() {
				console.log(this.currentModel);
				// const newAns = this.get('store').createRecord('answer',this.currentModel);
				// newAns.save().then((place) => {
				// 	Materialize.toast('Answer submitted successfully', 4000)
				// });
			}
		}
	});
});
define('forum/routes/questions/new', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model: function model() {
			return {};
		},

		actions: {
			submitQuestion: function submitQuestion() {
				var _this = this;

				var newQues = this.get('store').createRecord('question', this.currentModel);
				newQues.save().then(function (place) {
					Materialize.toast('Question submitted successfully', 4000);
					_this.transitionTo('index');
				});
			}
		}
	});
});
define('forum/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
define('forum/services/keyboard', ['exports', 'ember-keyboard/services/keyboard'], function (exports, _keyboard) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _keyboard.default;
    }
  });
});
define('forum/services/md-settings', ['exports', 'ember-cli-materialize/services/md-settings'], function (exports, _mdSettings) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _mdSettings.default;
    }
  });
});
define('forum/services/modal-dialog', ['exports', 'forum/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var computed = Ember.computed,
      Service = Ember.Service;


  function computedFromConfig(prop) {
    return computed(function () {
      return _environment.default['ember-modal-dialog'] && _environment.default['ember-modal-dialog'][prop];
    });
  }

  exports.default = Service.extend({
    hasEmberTether: computedFromConfig('hasEmberTether'),
    hasLiquidWormhole: computedFromConfig('hasLiquidWormhole'),
    hasLiquidTether: computedFromConfig('hasLiquidTether'),
    destinationElementId: computed(function () {
      /*
        everywhere except test, this property will be overwritten
        by the initializer that appends the modal container div
        to the DOM. because initializers don't run in unit/integration
        tests, this is a nice fallback.
      */
      if (_environment.default.environment === 'test') {
        return 'ember-testing';
      }
    })
  });
});
define("forum/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "3I3GOccS", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"navbar-fixed z-depth-1\"],[7],[0,\"\\n\\t\"],[6,\"nav\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"nav-wrapper\"],[7],[0,\"\\n\\t\\t\\t\"],[4,\"link-to\",[\"index\"],null,{\"statements\":[[6,\"a\"],[9,\"class\",\"brand-logo center\"],[7],[0,\"Ask!\"],[8]],\"parameters\":[]},null],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"body\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n\\t\\t\"],[6,\"br\"],[7],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\t\\t\\t\"],[1,[18,\"outlet\"],false],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[6,\"footer\"],[9,\"class\",\"page-footer\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"container\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"a\"],[9,\"class\",\"grey-text text-lighten-4\"],[9,\"href\",\"#\"],[7],[0,\"Back to top\"],[8],[0,\"\\n\\t\\t\\t\"],[6,\"a\"],[9,\"class\",\"grey-text text-lighten-4 right\"],[7],[0,\"An experiment by Arvind\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/application.hbs" } });
});
define("forum/templates/components/answer-home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "pOpEIyXN", "block": "{\"symbols\":[\"answer\"],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\t\"],[6,\"table\"],[9,\"class\",\"striped\"],[7],[0,\"\\n\\t\\t\"],[6,\"tbody\"],[7],[0,\"\\n\"],[4,\"each\",[[20,[\"answers\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\"],[6,\"tr\"],[7],[0,\"\\t\\t\\t\\t\\t\\n\"],[4,\"if\",[[19,1,[\"editor\"]]],null,{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"chip right\"],[9,\"style\",\"cursor:pointer;\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"isEdit\",[19,1,[]]],null],null],[7],[0,\"Take me back\"],[6,\"a\"],[7],[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"arrow_back\"],[8],[8],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"form\"],[3,\"action\",[[19,0,[]],\"submitAnswer\",[19,1,[]]],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"input-field col s12\"],[7],[0,\"\\n\\t\\t\\t\\t\\t\\t    \\t\"],[1,[25,\"textarea\",null,[[\"id\",\"type\",\"class\",\"value\"],[[25,\"concat\",[\"edit-answer\",[19,1,[\"id\"]]],null],\"text\",\"materialize-textarea edit\",[19,1,[\"answer\"]]]]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn waves-effect waves-light grey\"],[7],[0,\"Done editing!\"],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"chip right\"],[9,\"style\",\"cursor:pointer;\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"isEdit\",[19,1,[]]],null],null],[7],[0,\"edit\"],[6,\"a\"],[7],[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"create\"],[8],[8],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"h6\"],[7],[1,[19,1,[\"answer\"]],false],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[7],[8],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"chip\"],[9,\"style\",\"cursor: pointer;\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"addUp\",[19,1,[\"id\"]]],null],null],[7],[0,\"\\n\\t\\t\\t\\t\\t\\t    \"],[6,\"label\"],[7],[0,\"Upvotes : \"],[8],[1,[19,1,[\"upvotes\"]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[8],[0,\"\\t\\n\\t\\t\\t\\t\\t\\t\"],[6,\"div\"],[9,\"class\",\"chip\"],[9,\"style\",\"cursor: pointer;\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"addDown\",[19,1,[\"id\"]]],null],null],[7],[0,\"\\n\\t\\t\\t\\t\\t\\t\\t\"],[6,\"label\"],[7],[0,\"Downvotes : \"],[8],[1,[19,1,[\"downvotes\"]],false],[0,\"\\n\\t\\t\\t\\t\\t\\t\"],[8],[0,\"\\t\\n\\t\\t\\t\\t\\t\\t\"],[6,\"p\"],[7],[8],[0,\"\\n\"]],\"parameters\":[]}],[0,\"\\t\\t\\t\\t\"],[8],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/components/answer-home.hbs" } });
});
define("forum/templates/components/answer-new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "9SFJy4gN", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"input-field col s12\"],[7],[0,\"\\n    \\t\"],[1,[25,\"textarea\",null,[[\"id\",\"type\",\"class\",\"value\"],[\"place1\",\"text\",\"materialize-textarea\",[20,[\"model\",\"answer\"]]]]],false],[0,\"\\n    \\t\"],[6,\"label\"],[9,\"for\",\"place1\"],[7],[0,\"Can you answer the question?\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n \\t\"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn-large waves-effect waves-light red\"],[3,\"action\",[[19,0,[]],\"submitAnswer\"]],[7],[0,\"Submit\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/components/answer-new.hbs" } });
});
define("forum/templates/components/intro-home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "syXWgDza", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"card-panel z-depth-1 intro-card\"],[7],[0,\"\\n\\t\\t\"],[6,\"center\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"img\"],[10,\"src\",[18,\"image\"],null],[9,\"alt\",\"\"],[9,\"class\",\"circle responsive-img\"],[9,\"width\",\"100\"],[9,\"height\",\"100\"],[7],[8],[0,\" \\n\\t\\t\\t\"],[6,\"h5\"],[7],[1,[18,\"heading\"],false],[8],[0,\"\\n\\t\\t\\t\"],[6,\"p\"],[7],[1,[18,\"description\"],false],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/components/intro-home.hbs" } });
});
define("forum/templates/components/labeled-radio-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VxbRJlqZ", "block": "{\"symbols\":[\"&default\"],\"statements\":[[1,[25,\"radio-button\",null,[[\"radioClass\",\"radioId\",\"changed\",\"disabled\",\"groupValue\",\"name\",\"required\",\"value\"],[[20,[\"radioClass\"]],[20,[\"radioId\"]],\"innerRadioChanged\",[20,[\"disabled\"]],[20,[\"groupValue\"]],[20,[\"name\"]],[20,[\"required\"]],[20,[\"value\"]]]]],false],[0,\"\\n\\n\"],[11,1],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/components/labeled-radio-button.hbs" } });
});
define("forum/templates/components/question-home", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "VUxs+fKG", "block": "{\"symbols\":[\"question\"],\"statements\":[[4,\"each\",[[20,[\"question\"]]],null,{\"statements\":[[4,\"link-to\",[\"questions.answers\",[19,1,[\"id\"]]],[[\"class\"],[\"q-home\"]],{\"statements\":[[0,\"\\t\"],[6,\"div\"],[9,\"id\",\"question-div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"card-panel white z-depth-1\"],[7],[0,\"\\n\\t\\t\\t\"],[6,\"h6\"],[9,\"class\",\"question-home\"],[7],[1,[19,1,[\"question\"]],false],[8],[0,\"\\n\\t\\t\\t\"],[6,\"p\"],[9,\"class\",\"minute-details\"],[7],[0,\"Asked by : \"],[1,[19,1,[\"asked_by\"]],false],[8],[0,\"\\n\\t\\t\\t\"],[6,\"p\"],[9,\"class\",\"minute-details\"],[7],[1,[19,1,[\"created_at\"]],false],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"]],\"parameters\":[]},null]],\"parameters\":[1]},null],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/components/question-home.hbs" } });
});
define("forum/templates/components/question-new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "qzCiLZJY", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"input-field col s12\"],[7],[0,\"\\n\\t\\t\"],[1,[25,\"input\",null,[[\"id\",\"type\",\"class\",\"value\"],[\"email1\",\"email\",\"form-control\",[20,[\"model\",\"asked_by\"]]]]],false],[0,\"\\n\\t\\t\"],[6,\"label\"],[9,\"for\",\"email1\"],[7],[0,\"Give us your name\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"input-field col s12\"],[7],[0,\"\\n    \\t\"],[1,[25,\"input\",null,[[\"id\",\"type\",\"class\",\"value\"],[\"place1\",\"text\",\"form-control\",[20,[\"model\",\"question\"]]]]],false],[0,\"\\n    \\t\"],[6,\"label\"],[9,\"for\",\"place1\"],[7],[0,\"Whats the question?\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n \\t\"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn-large waves-effect waves-light red\"],[3,\"action\",[[19,0,[]],\"submitQuestion\"]],[7],[0,\"Submit\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/components/question-new.hbs" } });
});
define("forum/templates/components/question-qpage", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "hEREh4mx", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"card-panel white z-depth-1\"],[7],[0,\"\\n\\t\\t\"],[6,\"h5\"],[9,\"class\",\"q-home\"],[7],[1,[20,[\"question\",\"question\"]],false],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"chip right\"],[9,\"style\",\"cursor:pointer;\"],[10,\"onclick\",[25,\"action\",[[19,0,[]],\"setInappropriate\",[20,[\"question\",\"id\"]]],null],null],[7],[0,\"Inappropriate\"],[6,\"a\"],[7],[6,\"i\"],[9,\"class\",\"material-icons\"],[7],[0,\"flag\"],[8],[8],[8],[0,\"\\n\\t\\t\"],[6,\"p\"],[9,\"class\",\"minute-details\"],[7],[1,[20,[\"question\",\"asked_by\"]],false],[8],[0,\"\\n\\t\\t\"],[6,\"p\"],[9,\"class\",\"minute-details\"],[7],[1,[20,[\"question\",\"created_at\"]],false],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/components/question-qpage.hbs" } });
});
define("forum/templates/components/radio-button", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "eOXrdYR0", "block": "{\"symbols\":[\"&default\"],\"statements\":[[4,\"if\",[[22,1]],null,{\"statements\":[[0,\"  \"],[6,\"label\"],[10,\"class\",[26,[\"ember-radio-button \",[25,\"if\",[[20,[\"checked\"]],\"checked\"],null],\" \",[18,\"joinedClassNames\"]]]],[10,\"for\",[18,\"radioId\"],null],[7],[0,\"\\n    \"],[1,[25,\"radio-button-input\",null,[[\"class\",\"id\",\"disabled\",\"name\",\"required\",\"groupValue\",\"value\",\"changed\"],[[20,[\"radioClass\"]],[20,[\"radioId\"]],[20,[\"disabled\"]],[20,[\"name\"]],[20,[\"required\"]],[20,[\"groupValue\"]],[20,[\"value\"]],\"changed\"]]],false],[0,\"\\n\\n    \"],[11,1],[0,\"\\n  \"],[8],[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[0,\"  \"],[1,[25,\"radio-button-input\",null,[[\"class\",\"id\",\"disabled\",\"name\",\"required\",\"groupValue\",\"value\",\"changed\"],[[20,[\"radioClass\"]],[20,[\"radioId\"]],[20,[\"disabled\"]],[20,[\"name\"]],[20,[\"required\"]],[20,[\"groupValue\"]],[20,[\"value\"]],\"changed\"]]],false],[0,\"\\n\"]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/components/radio-button.hbs" } });
});
define("forum/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "DPaqfrG5", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"col s4\"],[7],[0,\"\\n\\t\"],[1,[25,\"intro-home\",null,[[\"image\",\"heading\",\"description\"],[\"https://orig00.deviantart.net/7636/f/2014/096/d/f/question_of_time___conceptual_logo_1_by_playground011-d7d9ojr.jpg\",\"Find questions here\",\"Interesting, offbeat, just what you wanted. You can find all these here\"]]],false],[0,\"\\n\\t\"],[6,\"center\"],[7],[4,\"link-to\",[\"questions.new\"],null,{\"statements\":[[6,\"a\"],[9,\"class\",\"waves-effect cyan darken-4 btn\"],[7],[0,\"Have a question to ask?\"],[8]],\"parameters\":[]},null],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"col s7 offset-s1\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\t\\t\"],[6,\"h5\"],[9,\"class\",\"left\"],[7],[0,\"Recent questions - \"],[1,[20,[\"model\",\"length\"]],false],[0,\" questions asked\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\\t\"],[1,[25,\"question-home\",null,[[\"question\"],[[20,[\"model\"]]]]],false],[0,\"\\n\\t\"],[1,[18,\"outlet\"],false],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/index.hbs" } });
});
define("forum/templates/questions", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "Xg6/NtCQ", "block": "{\"symbols\":[],\"statements\":[[1,[18,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/questions.hbs" } });
});
define("forum/templates/questions/answers", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "0sXlILco", "block": "{\"symbols\":[],\"statements\":[[1,[25,\"question-qpage\",null,[[\"question\"],[[20,[\"model\",\"question\"]]]]],false],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"row\"],[7],[0,\"\\n\\t\"],[6,\"p\"],[7],[6,\"b\"],[7],[0,\"There are \"],[1,[20,[\"model\",\"answers\",\"length\"]],false],[0,\" answers to this question\"],[8],[8],[0,\"\\n\"],[8],[0,\"\\n\"],[1,[25,\"answer-home\",null,[[\"answers\",\"upVotesClicked\",\"downVotesClicked\"],[[20,[\"model\",\"answers\"]],\"addUpVotes\",\"addDownVotes\"]]],false],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"divider\"],[7],[8],[0,\"\\n\"],[6,\"form\"],[3,\"action\",[[19,0,[]],\"submitAnswer\"],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"input-field col s12\"],[7],[0,\"\\n    \\t\"],[1,[25,\"textarea\",null,[[\"id\",\"type\",\"class\",\"required\",\"value\"],[\"place1\",\"text\",\"materialize-textarea\",true,[20,[\"model\",\"newAnswer\",\"answer\"]]]]],false],[0,\"\\n    \\t\"],[6,\"label\"],[9,\"for\",\"place1\"],[7],[0,\"Can you answer the question?\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n \\t\"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn-large waves-effect waves-light red\"],[7],[0,\"Submit\"],[8],[0,\"\\n\"],[8],[0,\"\\n\\n\"],[1,[18,\"outlet\"],false],[0,\"\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/questions/answers.hbs" } });
});
define("forum/templates/questions/answers/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "UNllDvhh", "block": "{\"symbols\":[],\"statements\":[[6,\"form\"],[7],[0,\"\\n\\t\"],[6,\"div\"],[9,\"class\",\"input-field col s12\"],[7],[0,\"\\n    \\t\"],[1,[25,\"textarea\",null,[[\"id\",\"type\",\"class\",\"value\"],[\"place1\",\"text\",\"materialize-textarea\",[20,[\"model\",\"answer\"]]]]],false],[0,\"\\n    \\t\"],[6,\"label\"],[9,\"for\",\"place1\"],[7],[0,\"Can you answer the question?\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n \\t\"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn-large waves-effect waves-light red\"],[3,\"action\",[[19,0,[]],\"submitAnswer\"]],[7],[0,\"Submit\"],[8],[0,\"\\n\"],[8],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/questions/answers/new.hbs" } });
});
define("forum/templates/questions/new", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fh2LOZ1j", "block": "{\"symbols\":[],\"statements\":[[6,\"div\"],[9,\"class\",\"col s4\"],[7],[0,\"\\n\\t\"],[1,[25,\"intro-home\",null,[[\"image\",\"heading\",\"description\"],[\"https://cdn.dribbble.com/users/1117273/screenshots/3787264/chicken_leg_bulb_idea-01.png\",\"Ask your questions here\",\"Be clear in the way you frame questions. This will make getting answers easier\"]]],false],[0,\"\\n\"],[8],[0,\"\\n\"],[6,\"div\"],[9,\"class\",\"col s7 offset-s1\"],[7],[0,\"\\n\\t\"],[6,\"form\"],[3,\"action\",[[19,0,[]],\"submitQuestion\"],[[\"on\"],[\"submit\"]]],[7],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"input-field col s12\"],[7],[0,\"\\n\\t\\t\\t\"],[1,[25,\"input\",null,[[\"id\",\"type\",\"class\",\"required\",\"value\"],[\"askedBy\",\"text\",\"form-control\",true,[20,[\"model\",\"asked_by\"]]]]],false],[0,\"\\n\\t\\t\\t\"],[6,\"label\"],[9,\"for\",\"askedBy\"],[7],[0,\"Give us your name\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t\\t\"],[6,\"div\"],[9,\"class\",\"input-field col s12\"],[7],[0,\"\\n\\t    \\t\"],[1,[25,\"input\",null,[[\"id\",\"type\",\"class\",\"required\",\"value\"],[\"question\",\"text\",\"form-control\",true,[20,[\"model\",\"question\"]]]]],false],[0,\"\\n\\t    \\t\"],[6,\"label\"],[9,\"for\",\"question\"],[7],[0,\"Whats the question?\"],[8],[0,\"\\n\\t\\t\"],[8],[0,\"\\n\\t \\t\"],[6,\"button\"],[9,\"type\",\"submit\"],[9,\"class\",\"btn-large waves-effect waves-light red\"],[7],[0,\"Submit\"],[8],[0,\"\\n\\t\"],[8],[0,\"\\n\"],[8]],\"hasEval\":false}", "meta": { "moduleName": "forum/templates/questions/new.hbs" } });
});
define('forum/utils/get-cmd-key', ['exports', 'ember-keyboard/utils/get-cmd-key'], function (exports, _getCmdKey) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _getCmdKey.default;
    }
  });
});
define('forum/utils/listener-name', ['exports', 'ember-keyboard/utils/listener-name'], function (exports, _listenerName) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _listenerName.default;
    }
  });
});


define('forum/config/environment', [], function() {
  var prefix = 'forum';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("forum/app")["default"].create({"name":"forum","version":"0.0.0+7bb4706b"});
}
//# sourceMappingURL=forum.map
