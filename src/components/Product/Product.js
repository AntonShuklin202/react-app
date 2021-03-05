import './Product.scss';
import { Link } from "react-router-dom";

function Product(props) {
  let {product} = props;
  return (
    <div className="Product">
      <div className="Product__image">
        <img src={product.imgSrc} alt=""/>
      </div>
      <div className="Product__about">
        <div className="Product__about--title">{product.title}</div>
        <div className="Product__about--info">{product.info}</div>
        <div className="Product__about--price">{product.price}</div>
      </div>
      <Link className="Product__btn" to={'/products/' + product.id}>Подробнее</Link>
    </div>
  );
}

export default Product;