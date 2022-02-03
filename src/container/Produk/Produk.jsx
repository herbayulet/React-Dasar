import React, { Component, Fragment } from "react";

export default class Produk extends Component {
  state = {
    price: 410000,
    kuantitas: 1,
  };

  handlePlus = () => {
    const harga = 410000;
    this.setState({
      kuantitas: this.state.kuantitas + 1,
      price: this.state.price + harga,
    });
  };

  handleMinus = () => {
    let harga = 410000;
    if (this.state.kuantitas > 0 && this.state.price > 410000) {
      this.setState({
        kuantitas: this.state.kuantitas - 1,
        price: this.state.price - harga,
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="logo">
            <img src="" alt="foto logo" />
          </div>
          <div className="troley"></div>
        </div>
        <div className="card">
          <div className="img-thumb-prod">
            <img src="https://hm-media-prod.s3.amazonaws.com/pub/media/catalog/product/medium/f9485114d5ed7226e865d75282e840d7cd8c129a_xxl-1.jpg" alt=""></img>
          </div>
          <p className="produk-title">Kaos Polos</p>
          <p className="produk-price">Rp {this.state.price}</p>
          <div className="counter">
            <button className="minus" onClick={() => this.handleMinus()}>
              -
            </button>
            <input type="text" value={this.state.kuantitas} />
            <button className="plus" onClick={() => this.handlePlus()}>
              +
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}
