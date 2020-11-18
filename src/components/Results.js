import React from 'react';
import Table from 'react-bootstrap/Table';

import TimePicker from 'react-time-picker';

import { DateTime, Duration } from 'luxon';

import { formatDuration, formatTime } from '../utils';

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
        <td>{formatTime(time)}</td>
        <td>{formatDuration(time.diff(this.props.startTime))}</td>
        <td>{idx > 0 ? formatDuration(time.diff(lastTime)) : "-"}</td>
      </tr>
    )
  }

  render() {
    return (
      <Table bordered hover className="text-left">
        <thead>
          <tr>
            <th>#</th>
            <th>Time clicked</th>
            <th>Time after start (s)</th>
            <th>Time after last click (s)</th>
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
      <div id="results-start-time">
        Results assuming you attempted to start clicking at &nbsp;
        <TimePicker
          format="hh:mm:ssa"
          clearIcon={null}
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
  render() {
    const numTimes = this.props.times.length;
    const endTime = this.props.times[numTimes - 1];
    const totalTime = endTime.diff(this.props.startTime, "milliseconds");
    const avgTime = Duration.fromMillis(Math.round(totalTime.milliseconds / numTimes));
    return (
      <p>
        You finished clicking after {formatDuration(totalTime)} seconds,
        giving an average time per page of {formatDuration(avgTime)} seconds.
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
      <div>
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
      return (
        <p>Waiting for donations...</p>
      );
    } else if (this.props.donationsLeft < 0) {
      return (
        <p>Invalid try: did you donate multiple times per tab? Please try again!</p>
      );
    } else if (this.props.donationsLeft > 0) {
      return (
        <p>There {
            this.props.donationsLeft === 1
              ? "is 1 donation"
              : "are " + this.props.donationsLeft + " donations"
          } left to make.</p>
      );
    } else {
      return (
        <ResultsDisplay times={times} />
      );
    }
  }
}

export default Results;
