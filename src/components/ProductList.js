import React, { Component } from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import store from  '../store';
import { addToCart } from '../actionCreators';
import axios from 'axios';
const styles = {
  products: {
    display: 'flex',
    alignItems: 'stretch',
    flexWrap: 'wrap'
  },
  product: {
    width: '220px',
    marginLeft: 10,
    marginRight: 10
  }
};


/*constructor() {
  super();
  this.addToCart = this.addToCart.bind(this);
  axios.get(`https://aquiandamios.000webhostapp.com/reactRedux/src/phones.json`)
   .then(res => {
     const cart = res.data;
     this.setState({ cart });
   })

*/
class ProductList extends Component {
  constructor() {
    super();
    this.state = {
      products: []
    }

    axios.get(`https://aquiandamios.000webhostapp.com/reactRedux/src/phones`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })



  }

  render() {
    return (
      <div style={styles.products}>
        {this.state.products.map(product =>
          <div className="thumbnail" style={styles.product} key={product.id}>
            <img src={product.image} alt={product.name} />
            <div className="caption">
              <h4>{product.name}</h4>
              <h4>{product.color}</h4>
              <h4>{product.batery}</h4>
              <h5>{product.description}</h5>
              <p>
                <Button bsStyle="primary" onClick={() => this.addToCart(product)} role="button" disabled={product.inventory <= 0}>${product.price} <Glyphicon glyph="shopping-cart" /></Button>
              </p>
            </div>
          </div>
        )}
      </div>
    );
  }

  addToCart(product) {
    store.dispatch(addToCart(product));
  }
}

export default ProductList;
