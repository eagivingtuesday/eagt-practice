import React from 'react';

class PressResults extends React.Component {
  render() {
    const listItems = this.props.times.map((time, index) =>
      <li key={index}>
        {time.getSeconds()}.{time.getMilliseconds()}
      </li>
    )

    return (
      <ul> {listItems} </ul>
    )
  }
}

export default PressResults;
