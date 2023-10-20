import React, { Component } from 'react';
import '/media/ahmedshaaban/01D9BDB66ADBAF60/iti/react/lab/src/components/Products/Product.css';
import CountNum from '../CountNum/CountNum';

class Products extends Component {
  render() {
    const { img,name, price, description } = this.props.product;
    return (
      <div className="card">
        <img src={img} className="product-image" />
        <div className="product-title">{name}</div>
        <div className="product-price">Price: ${price}</div>
        <CountNum></CountNum>
      </div>
    );
  }
}

export default Products;
