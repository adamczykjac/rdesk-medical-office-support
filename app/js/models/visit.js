define(function(require, exports, module) {
  "use strict";

  // External dependencies
  var Backbone = require("backbone");
  var _ = require("lodash");

  // Visit Model
  var VisitModel = Backbone.Model.extend({});
 
  // Book Collection
  var VisitCollection = Backbone.Collection.extend({
    model: VisitModel
  });

  module.exports = {
    VisitModel: VisitModel,
    VisitCollection: VisitCollection
  };
});
