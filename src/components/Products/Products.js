import './Products.scss';

function Products(props) {
  let {product} = props
  return (
    <div className="Products">
        <div className="Products__image">
            <img src={props.img} alt=""/>
        </div>
        <div className="Products__title">{product.title}</div>
        <div className="Products__info">{product.info}</div>
        <div className="Products__price">{product.price}</div>
        <button className="Products__btn">Подробнее</button>
    </div>
  );
}

export default Products;