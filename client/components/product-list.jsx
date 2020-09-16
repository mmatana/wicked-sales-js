import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: []

    };
  }

  getProducts() {
    fetch('/api/products')
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      .catch(error => {
        console.error('There was a problem with GET: ', error);
      });
  }

  componentDidMount() {
    this.getProducts();
  }

  render() {
    return (

      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 mt-5">
          <div className="card-deck">
            {
              this.state.products.map(product => {
                return < ProductListItem key={product.id} product={product} name={product.name} />;
              })
            }
          </div>
        </div>
      </div>

    );

  }
}
