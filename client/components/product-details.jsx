import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.setView = this.setView.bind(this);
  }

  componentDidMount() {
    fetch(`/api/products/${this.props.viewParams.productId}`)
      .then(res => res.json())
      .then(data => this.setState({ product: data }))
      .catch(err => {
        console.error('There was a problem with your fetch GET operation: ', err);
      });
  }

  setView(e) {
    this.props.view('catalog', {});
  }

  render() {
    if (!this.state.product) return null;
    return (
      <div className="container">
        <div className="hover text-muted my-3 px-0 btn d-flex justify-content-start" onClick={this.setView} style={{ cursor: 'pointer' }}>&lt; Back to catalog</div>
        <div className="row">
          <div className="col-4">
            <img src={this.state.product.image} />
          </div>
          <div className="col-8">
            <h2>{this.state.product.name}</h2>
            <h3 className="text-muted">${(this.state.product.price / 100).toFixed(2)}</h3>
            <p>{this.state.product.shortDescription}</p>
          </div>
        </div>
        <div className="row mt-4">
          <p>{this.state.product.longDescription}</p>
        </div>
      </div>
    );
  }
}
