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



class ProductList extends Component {
  constructor() {
    super();

  /*
  AXIOS

  this.state = {
      products: []
    }

    axios.get(`https://aquiandamios.000webhostapp.com/reactRedux/src/phones`)
      .then(res => {
        const products = res.data;
        this.setState({ products });
      })
*/

super();
  this.addToCart = this.addToCart.bind(this);

  this.state = {
    products: [
      {
        "id": 1,
        "name": "Iphone X",
        "price": 1.159,
        "color": "Gris Espacial",
        "batery": "2.716 mAh",
        "description": "Tamaño Pantalla (in): 14,73 cm - 5,8 Resolución cámara trasera:12 Mpx Resolución cámara delantera:7 Mpx",
        "image": "https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/827546_00_1.jpg",
      },
      {
        "id": 2,
        "name": "Samsung Galaxy",
        "price": 499,
        "color": "Orhidey Grey",
        "batery": "3.000mAh",
        "description": "Tamaño Pantalla (in): 14,73 cm - 5,8' Resolución cámara trasera:12 Mpx Resolución cámara delantera:8 Mpx Procesador (núcleos):8 Núcleos",
        "image": "https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/221127_00_1.jpg",
      },
      {
        "id": 3,
        "name": "Iphone X",
        "price": 1.159,
        "color": "Gris Espacial",
        "batery": "2.716 mAh",
        "description": "Tamaño Pantalla (in): 14,73 cm - 5,8 Resolución cámara trasera:12 Mpx Resolución cámara delantera:7 Mpx",
        "image": "https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/827546_00_1.jpg",
      },
      {
        "id": 4,
        "name": "Iphone X",
        "price": 1.159,
        "color": "Gris Espacial",
        "batery": "2.716 mAh",
        "description": "Tamaño Pantalla (in): 14,73 cm - 5,8 Resolución cámara trasera:12 Mpx Resolución cámara delantera:7 Mpx",
        "image": "https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/827546_00_1.jpg",
      },
      {
        "id": 5,
        "name": "Samsung Galaxy",
        "price": 499,
        "color": "Orhidey Grey",
        "batery": "3.000mAh",
        "description": "Tamaño Pantalla (in): 14,73 cm - 5,8' Resolución cámara trasera:12 Mpx Resolución cámara delantera:8 Mpx Procesador (núcleos):8 Núcleos",
        "image": "https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/221127_00_1.jpg",
      },
      {
        "id": 6,
        "name": "Iphone X",
        "price": 1.159,
        "color": "Gris Espacial",
        "batery": "2.716 mAh",
        "description": "Tamaño Pantalla (in): 14,73 cm - 5,8 Resolución cámara trasera:12 Mpx Resolución cámara delantera:7 Mpx",
        "image": "https://static.carrefour.es/hd_510x_/crs/cdn_static/catalog/hd/827546_00_1.jpg",
      },

    ]

  }
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
