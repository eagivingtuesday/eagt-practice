import React from 'react';
import Table from 'react-bootstrap/Table';

class PressResults extends React.Component {
  render() {
    var rows = []
    const times = this.props.times

    for (let i = 0; i < times.length; i++) {
      const time = times[i]
      const row = (
        <tr key={i}>
          <td>{i+1}</td>
          <td>{time.getSeconds()}.{time.getMilliseconds()}</td>
          <td>{i>0 ? time - times[i-1] : 0}</td>
        </tr>
      );
      rows.push(row)
    }

    return (
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Time clicked</th>
            <th>Difference (ms)</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </Table>
    )
  }
}

export default PressResults;
