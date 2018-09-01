import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DetailPane from '../../components/DetailPane/DetailPane';
import NavBar from '../../components/NavBar/NavBar';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.scss';
import { getRedditPosts } from '../../redux/actions/redditActions';


class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: {}
    }
  }

  componentDidMount() {
    this.props.onLoad();
    /*
    fetch(`//api.reddit.com/top?limit=50`)
    .then(response => response.json())
    .then(json => {
      this.setState({
        posts: json.data.children
      })
    })
    */
  }

  render() {
    console.log(this.state.posts);

    return (
      <div className="App">
        <NavBar />
        <DetailPane />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state
})

const mapDispatchToProps = (dispatch) => ({
  onLoad: () => {
    dispatch(getRedditPosts())
  }
})

App.propTypes = {
  getRedditPosts: PropTypes.func
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
