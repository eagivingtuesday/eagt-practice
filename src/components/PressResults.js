import React from 'react';
import Table from 'react-bootstrap/Table';


/////////////   Table   //////////////

function formatTime(time) {
  return (
    `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()}`
  )
}

function mapToRow(time, idx, times) {
  const last_time = times[idx - 1];

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
      <td>{idx>0 ? time - last_time : 0}</td>
    </tr>
  )
}

function ResultsTable(props) {
  return (
    <div className="col">
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Time clicked</th>
            <th>Difference (ms)</th>
          </tr>
        </thead>
        <tbody>
          {props.times.map(mapToRow)}
        </tbody>
      </Table>
    </div>
  )
}

/////////////   Text   //////////////

function ResultsText(props) {
  console.log(props);

  // copy start time and round down to full minute
  const times = props.times;

  var startTime = new Date(times[0]);
  startTime.setSeconds(0,0);
  const averageTime = (times[times.length - 1] - startTime) / times.length;

  console.log(averageTime);

  const timeFormatter = new Intl.DateTimeFormat("en", {
    timeStyle: "short"
  });

  return (
    <p className="col">
        If you started clicking at {timeFormatter.format(startTime)} your average time per page was {averageTime} ms.
    </p>
  )
}

function PressResults(props) {
  if (props.times.length) {
    return (
      <div className="col">
        <ResultsTable times={props.times} />
        <ResultsText times={props.times} />
      </div>
    )
  } else {
    return null
  }
}

export default PressResults;
