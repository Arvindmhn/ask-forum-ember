define('ember-modal-dialog/components/basic-dialog', ['exports', 'ember-modal-dialog/templates/components/basic-dialog'], function (exports, _basicDialog) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var on = Ember.on;
  var Component = Ember.Component;
  var $ = Ember.$;
  var computed = Ember.computed;
  var guidFor = Ember.guidFor;
  var isEmpty = Ember.isEmpty;
  var service = Ember.inject.service;
  exports.default = Component.extend({
    tagName: '',
    layout: _basicDialog.default,

    containerClassNames: null,
    overlayClassNames: null,
    wrapperClassNames: null,

    modalService: service('modal-dialog'),
    destinationElementId: computed.oneWay('modalService.destinationElementId'),

    variantWrapperClass: 'emd-static',
    containerClassNamesString: computed('containerClassNames.[]', 'targetAttachmentClass', 'attachmentClass', 'containerClass', function () {
      return [this.get('containerClassNames').join(' '), this.get('targetAttachmentClass'), this.get('attachmentClass'), this.get('containerClass')].filter(function (className) {
        return !isEmpty(className);
      }).join(' ');
    }),
    overlayClassNamesString: computed('overlayClassNames.[]', 'overlayClass', 'translucentOverlay', function () {
      return [this.get('overlayClassNames').join(' '), this.get('translucentOverlay') ? 'translucent' : null, this.get('overlayClass')].filter(function (className) {
        return !isEmpty(className);
      }).join(' ');
    }),
    wrapperClassNamesString: computed('wrapperClassNames.[]', 'targetAttachmentClass', 'variantWrapperClass', 'wrapperClass', function () {
      return [this.get('wrapperClassNames').join(' '), this.get('targetAttachmentClass').replace('emd-', 'emd-wrapper-'), this.get('variantWrapperClass'), this.get('wrapperClass')].filter(function (className) {
        return !isEmpty(className);
      }).join(' ');
    }),

    concatenatedProperties: ['containerClassNames', 'overlayClassNames', 'wrapperClassNames'],

    translucentOverlay: false,
    clickOutsideToClose: false,
    hasOverlay: true,
    isCentered: true,
    overlayPosition: null,
    isOverlaySibling: computed('overlayPosition', function () {
      return this.get('overlayPosition') === 'sibling';
    }),

    isIOS: computed(function () {
      return (/iPad|iPhone|iPod/.test(navigator.userAgent)
      );
    }),

    makeOverlayClickableOnIOS: on('didInsertElement', function () {
      if (this.get('isIOS')) {
        $('div[data-ember-modal-dialog-overlay]').css('cursor', 'pointer');
      }
    }),

    didInsertElement: function didInsertElement() {
      var _this = this;

      if (!this.get('clickOutsideToClose')) {
        return;
      }

      var handleClick = function handleClick(event) {
        var $eventTarget = $(event.target);

        // if the click has already resulted in the target
        // being removed or hidden, do nothing
        if (!$eventTarget.is(':visible')) {
          return;
        }

        // if the click is within the dialog, do nothing
        if ($eventTarget.closest('.ember-modal-dialog').length) {
          return;
        }

        _this.sendAction('onClose');
      };
      var registerClick = function registerClick() {
        return $(window.document).on('click.ember-modal-dialog-' + guidFor(_this), handleClick);
      };

      // setTimeout needed or else the click handler will catch the click that spawned this modal dialog
      setTimeout(registerClick);

      if (this.get('isIOS')) {
        var registerTouch = function registerTouch() {
          return $(window.document).on('touchend.ember-modal-dialog-' + guidFor(_this), handleClick);
        };
        setTimeout(registerTouch);
      }
      this._super.apply(this, arguments);
    },
    willDestroyElement: function willDestroyElement() {
      $(window.document).off('click.ember-modal-dialog-' + guidFor(this));
      if (this.get('isIOS')) {
        $(window.document).off('touchend.ember-modal-dialog-' + guidFor(this));
      }
      this._super.apply(this, arguments);
    }
  });
});