import React from 'react';

export default class ProductListItem extends React.Component {
  render() {

    var total = (this.props.product.price / 100).toFixed(2);
    return <>
      <div className="col mb-4">
        <div className="card" style={{ width: '20rem' }}>
          <img src={this.props.product.image} className="card-img-top"></img>
          <div className="card-body">
            <h5 className="card-title">{this.props.product.name}</h5>
            <p className="card-text">${total}</p>
            <p className="card-text">{this.props.product.shortDescription}</p>
          </div>
        </div>
      </div>
    </>;
  }
}
