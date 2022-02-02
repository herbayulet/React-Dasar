import React, { Component } from "react";

export default class Parsing extends Component {
  render() {
    const { channel, gantiChannel } = this.props;
    return (
      <div>
        <h2>Parsingan state yang jadi props : {channel}</h2>
        <button onClick={() => gantiChannel("Pegawai Kupiku Coffee")}>Ganti channel</button>
      </div>
    );
  }
}
