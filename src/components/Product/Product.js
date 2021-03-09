import './Product.scss';
import { Link } from "react-router-dom";
import React from 'react';

var FavProd = []
var cart = []
var prods = [FavProd, cart]

class Product extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      inCart: false,
      isFav: false
    }
  }

  addInCart = () => {
    this.setState({inCart: true})
    cart.push({
      id: this.props.product.id,
      name: this.props.product.title,
      info: this.props.product.info,
      price: this.props.product.price,
      imgSrc: this.props.product.imgSrc
    })
    console.log(cart)
    console.log(this)
  }
  deleteFromCart = () => {
    this.setState({inCart: false})
    const index = FavProd.indexOf(this)
    cart.splice(index, 1)
    console.log(cart)
    console.log(this)
  }
  addInFav = () => {
    this.setState({isFav: true})
    FavProd.push({
      id: this.props.product.id,
      name: this.props.product.title,
      info: this.props.product.info,
      price: this.props.product.price,
      imgSrc: this.props.product.imgSrc
    })
    console.log(FavProd)
    console.log(this)
  }
  deleteFromFav = () =>{
    this.setState({isFav: false})
    const index = FavProd.indexOf(this)
    FavProd.splice(index, 1)
    console.log(FavProd)
    console.log(this)
  }
  
  render(){
    return (
      <div className="Product">
        <div className="Product__fav">
          <label htmlFor={this.props.product.id} className="Product__fav--btn">
            {this.state.isFav ? '★' : '☆'}
          </label>
          <input type="checkbox" className="checkbox" onInput={this.state.isFav ? () => this.deleteFromFav() : () => this.addInFav()} id={this.props.product.id}/>
        </div>
        <div className="Product__image">
          <img src={this.props.product.imgSrc} alt=""/>
        </div>
        <div className="Product__about">
          <div className="Product__about--title">{this.props.product.title}</div>
          <div className="Product__about--info">{this.props.product.info}</div>
          <div className="Product__about--price">{this.props.product.price}</div>
        </div>
        <Link className="Product__btn" to={'/products/' + this.props.product.id}>Подробнее</Link>
        <label className="Product__btn" htmlFor={this.props.product.id + '0'}>{this.state.inCart ? 'В корзине' : 'В корзину'}</label>
        <input type="checkbox" id={this.props.product.id + '0'} className='checkbox' onInput={ this.state.inCart ? () => this.deleteFromCart() : () => this.addInCart()}/>
      </div>
    );
  }
  
}

export default Product;
// export default prods;