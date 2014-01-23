// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',
  className: 'queueEntry',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  events: {
    'click': function() {
      this.model.dequeue();
      this.render();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
