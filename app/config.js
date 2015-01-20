require.config({
  paths: {
    "underscore": "../bower_components/lodash/dist/lodash.underscore",
    "lodash": "../bower_components/lodash/dist/lodash",
    "template": "../bower_components/lodash-template-loader/loader",
    "jquery": "../bower_components/jquery/dist/jquery",
    "backbone": "../bower_components/backbone/backbone",
    "bootstrap": "../bower_components/bootstrap/dist/js/bootstrap",
    "views": "./js/views"
  },

  deps: ["main"],

  lodashLoader: {
    ext: ".html",
    root: "templates/",
    templateSettings: {}
  },

  shim: {
    "bootstrap": {
      deps: ["jquery"]
    }
  }
});