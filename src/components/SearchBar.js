import React from 'react';

class SearchBar extends React.Component {
  onInputChange(event) {
    console.log(event.target.value);
  }

  onInputClick(event) {
    console.log('input was clicked')
  }

  // The 'event' object is a normal JS object that contains a bunch of info about the event that just occurred

  render () {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
          <label>Image Search</label>
          <input type="text" onChange={this.onInputChange} onClick={this.onInputClick}/>
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
