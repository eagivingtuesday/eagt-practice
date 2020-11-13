import React from 'react';
import Table from 'react-bootstrap/Table';

import TimePicker from 'react-time-picker';


/////////////   Table   //////////////

class ResultsTable extends React.Component {
  constructor(props) {
    super(props)
    this.mapToRow = this.mapToRow.bind(this)
  }


  mapToRow(time, idx, times) {

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
        <td>{time - this.props.startTime}</td>
        <td>{idx > 0 ? (time - lastTime).toLocaleString() : "-"}</td>
      </tr>
    )
  }

  render() {
    console.log(this.props.startTime)
    return (
      <Table bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Time clicked</th>
            <th>Time after start (s)</th>
            <th>Time from last click (s)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.times.map(this.mapToRow)}
        </tbody>
      </Table>
    );
  }
}

/////////////   Text   //////////////

class StartTime extends React.Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(time) {
    var newTime = new Date(this.props.startTime);
    newTime.setHours(time.slice(0,2), time.slice(3,5), time.slice(6,8));
    this.props.onChange(newTime);
  }

  render() {
    return (
      <div>
        Results assuming you started clicking at &nbsp;
        <TimePicker
          format="HH:mm:ss"
          onChange={this.onChange}
          value={this.props.startTime}
          disableClock={true}
          maxDetail="second"
        />
      </div>
    );
  }
}

class ResultsText extends React.Component {
  getAvgTime() {
    const times = this.props.times;
    return (
      (times[times.length - 1] - this.props.startTime) / times.length
    );
  }

  render() {
    return (
      <p className="col">
          Your average time per page was {Math.round(this.getAvgTime())} ms.
      </p>
    )
  };
}

class ResultsDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: this.getDefaultStartTime()
    }

    this.onChange = this.onChange.bind(this);
  }

  getDefaultStartTime() {
    var startTime = new Date(this.props.times[0]);
    startTime.setSeconds(0,0);
    return startTime;
  }

  onChange(time) {
    console.log("time from wrapped")
    console.log(time)
    this.setState(
      {startTime: time}
    )
  }

  render() {
    return (
      <div className="col">
        <h5 className="text-center">Results</h5>
        <StartTime
          startTime={this.state.startTime}
          onChange={this.onChange}
        />
        <ResultsTable
          times={this.props.times}
          startTime={this.state.startTime}
        />
        <ResultsText
          times={this.props.times}
          startTime={this.state.startTime}
        />
      </div>
    )
  }
}


class Results extends React.Component {

  render() {
    const times = this.props.times;

    if (times.length === 0) {
      return null;
    }
    if (this.props.donationsLeft === 0) {
      return (
        <ResultsDisplay
          times={times}
        />
      );
    } else {
      return (
        <p className="col">
          There are {this.props.donationsLeft} donations left to make.
        </p>
      );
    }
  }
}

export default Results;
