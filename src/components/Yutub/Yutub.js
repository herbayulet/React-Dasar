// import React from "react";
// import "./yutub.css";

// export const Yutub = (props) => {
//   return (
//     <div className="yutub-wrapper">
//       <p>Nama {props.nama}</p>
//     </div>
//   );
// };
import React, { Component } from "react";
import Parsing from "../Parsing/Parsing";

// State props dengan class component
export default class Yutub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      channel: "Aditya Siregar",
    };
  }

  gantiChannel = (channel_baru) => {
    this.setState({
      channel: channel_baru,
    });
  };

  render() {
    return (
      <div>
        <h2>{this.state.channel}</h2>
        <button onClick={() => this.gantiChannel("Pegawai Kupiku Coffee")}>Ganti channel</button>
        <Parsing channel={this.state.channel} gantiChannel={this.gantiChannel} />
      </div>
    );
  }
}
