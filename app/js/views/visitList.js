define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var backbone = require("backbone");
  var template = require("template");
  var bootstrap = require("bootstrap");
  var visitListTpl = require("template!visitList");

  var VisitListView = backbone.View.extend({
    el: '#main',

    initialize: function() {
      this.render();
    },

    render: function() {
      this.$el.html(visitListTpl());
    }
  });

  module.exports = VisitListView;
});