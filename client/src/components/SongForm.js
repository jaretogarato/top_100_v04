import React from 'react';

class SongForm extends React.Component {
  state = { name: '', artist: '', rank: 0 }
  // ------^^^^ should this also have artist and rank?

  handleChange = (e) => {
    this.setState({ name: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addSong(this.state.name);
    this.setState({ name: '' })
  }

  render() {
    return (

      <form onSubmit={this.handleSubmit} >
        <input
          placeholder="New Song"
          required
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          placeholder="Artist"
          required
          value={this.state.artist}
          onChange={this.handleChange}
        />
        <input
          placeholder="Rank (1-100)"
          required
          value={this.state.rank}
          onChange={this.handleChange}
        />
        <input
          type="submit"
          value="Add Song"
        />
      </form>
    )
  }
}

export default SongForm;
