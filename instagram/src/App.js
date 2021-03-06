import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.setState({ data: dummyData });
  }

  render() {
    return (

      <div className="container">
        <div className="App">
          <SearchBar />
          {this.state.data.map(post => {
            return <PostContainer key={post.username} data={post} />
          })}
        </div>
      </div>
    );
  }
}

export default App;
