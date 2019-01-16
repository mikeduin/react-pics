import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component {
  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: { query: term },
      headers: {
        Authorization: 'Client-ID 0b4ca2c911b76d8eb6ed3f444903df06df4f8b02e76c659357e7ea89625fad92'
      }
    });
  }

  render () {
    return (
      <div className="ui container" style={{ marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    )
  }
}


export default App;
