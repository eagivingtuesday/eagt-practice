import React from 'react';
import Table from 'react-bootstrap/Table';

import TimePicker from 'react-time-picker';

import { DateTime, Duration } from 'luxon';

/////////////   Table   //////////////

class ResultsTable extends React.Component {
  constructor(props) {
    super(props);
    this.mapToRow = this.mapToRow.bind(this);
  }


  mapToRow(time, idx, times) {
    const lastTime = times[idx - 1];
    return (
      <tr key={idx}>
        <td>{idx+1}</td>
        <td>{time.toLocaleString(DateTime.TIME_WITH_SECONDS)}</td>
        <td>{time.diff(this.props.startTime, "milliseconds").toFormat("s.SS")}</td>
        <td>{idx > 0 ? time.diff(lastTime, "milliseconds").toFormat("s.SS") : "-"}</td>
      </tr>
    )
  }

  render() {
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
    // This function also handles parsing the time string from the timepicker
    // in order to call the upstream onChange in props with the new datetime obj
    const newTime = this.props.startTime.set({
      hour: time.slice(0,2),
      minute: time.slice(3,5),
      second: time.slice(6,8)
    });
    this.props.onChange(newTime);
  }

  render() {
    return (
      <div>
        Results assuming you started clicking at &nbsp;
        <TimePicker
          format="HH:mm:ss"
          onChange={this.onChange}
          value={this.props.startTime.toJSDate()}
          disableClock={true}
          maxDetail="second"
        />
      </div>
    );
  }
}

class ResultsText extends React.Component {
  getAvgTime() {
    const numTimes = this.props.times.length;
    const endTime = this.props.times[numTimes - 1];
    const diff = endTime.diff(this.props.startTime, "milliseconds");
    const avg = Duration.fromMillis(Math.round(diff.milliseconds / numTimes));
    return avg;
  }

  render() {
    return (
      <p className="col">
          Your average time per page was {this.getAvgTime().toFormat("s.SS")} seconds.
      </p>
    );
  }
}

class ResultsDisplay extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      startTime: this.getDefaultStartTime()
    };

    this.onChange = this.onChange.bind(this);
  }

  getDefaultStartTime() {
    const firstTime = this.props.times[0];
    return firstTime.set({second:0, millisecond:0});
  }

  onChange(time) {
    this.setState(
      {startTime: time}
    );
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
    );
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
