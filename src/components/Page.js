import React, { Component } from 'react';

/* 
 * Component which serves the purpose of a "root route component".
 * Taken from this SO:
 * https://stackoverflow.com/questions/52447828/is-there-a-way-to-modify
 * -the-page-title-with-react-router-v4 
 */
class Page extends Component {

  // changes title
  componentDidMount() {
    document.title = this.state.title;
  }

}

export default Page;