var A = Ember.A;
var computed = Ember.computed;
var MapWithDefault = Ember.MapWithDefault;
var Map = Ember.Map;

import { typeForRelationshipMeta, relationshipFromMeta } from "../relationship-meta";

export var relationshipsDescriptor = computed(function () {
  if (Ember.testing === true && relationshipsDescriptor._cacheable === true) {
    relationshipsDescriptor._cacheable = false;
  }

  var map = new MapWithDefault({
    defaultValue: function defaultValue() {
      return [];
    }
  });

  // Loop through each computed property on the class
  this.eachComputedProperty(function (name, meta) {
    // If the computed property is a relationship, add
    // it to the map.
    if (meta.isRelationship) {
      meta.key = name;
      var relationshipsForType = map.get(typeForRelationshipMeta(meta));

      relationshipsForType.push({
        name: name,
        kind: meta.kind
      });
    }
  });

  return map;
}).readOnly();

export var relatedTypesDescriptor = computed(function () {
  var _this = this;

  if (Ember.testing === true && relatedTypesDescriptor._cacheable === true) {
    relatedTypesDescriptor._cacheable = false;
  }

  var modelName = void 0;
  var types = A();

  // Loop through each computed property on the class,
  // and create an array of the unique types involved
  // in relationships
  this.eachComputedProperty(function (name, meta) {
    if (meta.isRelationship) {
      meta.key = name;
      modelName = typeForRelationshipMeta(meta);

      (true && !(modelName) && Ember.assert('You specified a hasMany (' + meta.type + ') on ' + meta.parentType + ' but ' + meta.type + ' was not found.', modelName));


      if (!types.includes(modelName)) {
        (true && !(!!modelName) && Ember.assert('Trying to sideload ' + name + ' on ' + _this.toString() + ' but the type doesn\'t exist.', !!modelName));

        types.push(modelName);
      }
    }
  });

  return types;
}).readOnly();

export var relationshipsByNameDescriptor = computed(function () {
  var map = Map.create();

  this.eachComputedProperty(function (name, meta) {
    if (meta.isRelationship) {
      meta.key = name;
      var relationship = relationshipFromMeta(meta);
      relationship.type = typeForRelationshipMeta(meta);
      map.set(name, relationship);
    }
  });

  return map;
}).readOnly();