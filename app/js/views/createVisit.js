define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var backbone = require("backbone");
  var template = require("template");
  var bootstrap = require("bootstrap");
  var createVisitTpl = require("template!createVisit");

  var CreateVisitView = backbone.View.extend({
    el: '#main',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(createVisitTpl());
    }
  });

  module.exports = CreateVisitView;
});