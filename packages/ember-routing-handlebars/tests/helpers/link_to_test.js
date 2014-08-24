import run from "ember-metal/run_loop";

import EmberHandlebars from "ember-handlebars";
import EmberView from "ember-views/views/view";

var view;

var appendView = function(view) {
  run(function() { view.appendTo('#qunit-fixture'); });
};

var compile = EmberHandlebars.compile;


QUnit.module("Handlebars {{link-to}} helper", {
  setup: function() {

  },

  teardown: function() {
    run(function() {
      if (view) { view.destroy(); }
    });
  }
});


test("should be able to be inserted in DOM when the router is not present", function() {

  var template = "{{#link-to 'index'}}Go to Index{{/link-to}}";
  view = EmberView.create({
    template: compile(template)
  });

  appendView(view);

  equal(view.$().text(), 'Go to Index');

});
