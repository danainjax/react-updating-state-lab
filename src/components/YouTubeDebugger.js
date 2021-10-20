// Code YouTubeDebugger Component Here
import React, { Component } from "react";

export class YouTubeDebugger extends Component {
  constructor() {
    super();

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: "1080p",
        },
      },
    };
    console.log(this.state);
  }

  handleBitrate = () => {
    console.log(...this.state.settings);
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
      },
    });
    console.log(this.state);
  };

  handleResolution = () => {
    console.log("ressy");
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: "720p",
        },
      },
    });
    console.log(this.state.settings.video);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleBitrate} className="bitrate">
          bitrate
        </button>
        <button onClick={this.handleResolution} className="resolution">
          resolution
        </button>
      </div>
    );
  }
}

export default YouTubeDebugger;
