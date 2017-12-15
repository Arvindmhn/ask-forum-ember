define('ember-wormhole/components/ember-wormhole', ['exports', 'ember-wormhole/templates/components/ember-wormhole', 'ember-wormhole/utils/dom'], function (exports, _emberWormhole, _dom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var alias = Ember.computed.alias;
  var Component = Ember.Component;
  var observer = Ember.observer;
  var computed = Ember.computed;
  var run = Ember.run;
  exports.default = Component.extend({
    layout: _emberWormhole.default,

    /*
     * Attrs
     */
    to: alias('destinationElementId'),
    destinationElementId: null,
    destinationElement: computed('destinationElementId', 'renderInPlace', function () {
      var renderInPlace = this.get('renderInPlace');
      if (renderInPlace) {
        return this._element;
      }
      var id = this.get('destinationElementId');
      if (!id) {
        return null;
      }
      return (0, _dom.findElementById)(this._dom, id);
    }),
    renderInPlace: false,

    /*
     * Lifecycle
     */
    init: function init() {
      var _this = this;

      this._super.apply(this, arguments);

      this._dom = (0, _dom.getDOM)(this);

      // Create text nodes used for the head, tail
      this._wormholeHeadNode = this._dom.createTextNode('');
      this._wormholeTailNode = this._dom.createTextNode('');

      /*
       * didInsertElement does not fire in Fastboot, so we schedule this in
       * init to be run after render. Importantly, we want to run
       * appendToDestination after the child nodes have rendered.
       */
      run.schedule('afterRender', function () {
        if (_this.isDestroyed) {
          return;
        }
        _this._element = _this._wormholeHeadNode.parentNode;
        if (!_this._element) {
          throw new Error('The head node of a wormhole must be attached to the DOM');
        }
        _this._appendToDestination();
      });
    },


    willDestroyElement: function willDestroyElement() {
      var _this2 = this;

      // not called in fastboot
      this._super.apply(this, arguments);
      var _wormholeHeadNode = this._wormholeHeadNode,
          _wormholeTailNode = this._wormholeTailNode;

      run.schedule('render', function () {
        _this2._removeRange(_wormholeHeadNode, _wormholeTailNode);
      });
    },

    _destinationDidChange: observer('destinationElement', function () {
      var destinationElement = this._getDestinationElement();
      if (destinationElement !== this._wormholeHeadNode.parentNode) {
        run.schedule('render', this, '_appendToDestination');
      }
    }),

    _appendToDestination: function _appendToDestination() {
      var destinationElement = this._getDestinationElement();
      if (!destinationElement) {
        var destinationElementId = this.get('destinationElementId');
        if (destinationElementId) {
          throw new Error('ember-wormhole failed to render into \'#' + destinationElementId + '\' because the element is not in the DOM');
        }
        throw new Error('ember-wormhole failed to render content because the destinationElementId was set to an undefined or falsy value.');
      }

      var startingActiveElement = (0, _dom.getActiveElement)();
      this._appendRange(destinationElement, this._wormholeHeadNode, this._wormholeTailNode);
      var resultingActiveElement = (0, _dom.getActiveElement)();
      if (startingActiveElement && resultingActiveElement !== startingActiveElement) {
        startingActiveElement.focus();
      }
    },
    _appendRange: function _appendRange(destinationElement, firstNode, lastNode) {
      while (firstNode) {
        destinationElement.insertBefore(firstNode, null);
        firstNode = firstNode !== lastNode ? lastNode.parentNode.firstChild : null;
      }
    },
    _removeRange: function _removeRange(firstNode, lastNode) {
      var node = lastNode;
      do {
        var next = node.previousSibling;
        if (node.parentNode) {
          node.parentNode.removeChild(node);
          if (node === firstNode) {
            break;
          }
        }
        node = next;
      } while (node);
    },
    _getDestinationElement: function _getDestinationElement() {
      var renderInPlace = this.get('renderInPlace');
      if (renderInPlace) {
        return this._element;
      }
      return this.get('destinationElement');
    }
  });
});