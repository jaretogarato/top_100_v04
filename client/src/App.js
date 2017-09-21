import React, { Component } from 'react';
import SongForm from './components/SongForm';
import SongList from './components/SongList';

class App extends Component {
  state = { songs: [] }
  // --------^^^ is this where we define 'songs'?

  componentDidMount() {
    //TODO make a call to our rails server to get Songs
  }

  addSong = (name) => {
    //TODO make api call to rails server to add song
    //TODO update state
  }

  updateSong = (id) => {
    //TODO make api call to update todo
    //TODO update state
  }

  deleteSong = (id) => {
    //TODO make api call to delete todo
    //TODO remove it from state
  }

  render() {
    return (
      <div className="container">
        <SongForm addSong={this.addSong} />
        <SongList
          songs={this.state.songs}
          updateSong={this.updateSong}
          deleteSong={this.deleteSong}
        />
      </div>
    );
  }
}

export default App;
