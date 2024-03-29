// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params){
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});
    this.queueView = new SongQueueView({collection: this.model.get('songQueue')});
    this.playlistFormView = new PlaylistFormView();
    this.playlistsView = new PlayListsView({collection: this.model.get('playlists')});

    this.model.on('change:currentSong', function(model){
      this.playerView.setSong(model.get('currentSong'));
    }, this);

    var that = this;
    this.playlistFormView.$el.on("submit", function(e){
      e.preventDefault();
      that.model.addPlaylist($(this).find('input').val());
    });
  },

  render: function(){
    return this.$el.html([
      this.playerView.$el,
      this.playlistFormView.$el,
      this.libraryView.$el,
      this.queueView.$el,
      this.playlistsView.$el
    ]);
  }

});
