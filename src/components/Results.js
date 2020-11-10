import React from 'react';
import Table from 'react-bootstrap/Table';

/////////////   Table   //////////////

function mapToRow(time, idx, times) {
  const lastTime = times[idx - 1];

  const timeFormatter = new Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    fractionalSecondDigits: 2,
    hour12: false
  });

  return (
    <tr key={idx}>
      <td>{idx+1}</td>
      <td>{timeFormatter.format(time)}</td>
      <td>{idx > 0 ? (time - lastTime).toLocaleString() : "-"}</td>
    </tr>
  )
}

function ResultsTable(props) {
  return (
    <Table bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Time clicked</th>
          <th>Time from last click (milliseconds)</th>
        </tr>
      </thead>
      <tbody>
        {props.times.map(mapToRow)}
      </tbody>
    </Table>
  )
}

/////////////   Text   //////////////

function ResultsText(props) {
  // copy start time and round down to full minute
  const times = props.times;

  var startTime = new Date(times[0]);
  startTime.setSeconds(0,0);
  const averageTime = (times[times.length - 1] - startTime) / times.length;

  const timeFormatter = new Intl.DateTimeFormat("en", {
    timeStyle: "short"
  });

  return (
    <p className="col">
        If you started clicking at {timeFormatter.format(startTime)} your average time per page was {Math.round(averageTime)} ms.
    </p>
  )
}

function Results(props) {
  if (props.times.length < 0) {
    return null;
  }
  // else
  if (props.donationsLeft === 0) {
    return (
      <div className="col">
        <h5 className="text-center">Results</h5>
        <ResultsTable times={props.times} />
        <ResultsText times={props.times} />
      </div>
    )
  } else {
    return (
      <p className="col">
        There are {props.donationsLeft} donations left to make.
      </p>
    )
  }
}

export default Results;
