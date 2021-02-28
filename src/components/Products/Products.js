import './Products.scss';

function Products(props) {
  return (
    <div className="Products">
        <div className="Products__image">
            <img src={props.img} alt=""/>
        </div>
        <div className="Products__title">{props.title}</div>
        <div className="Products__info">{props.info}</div>
        <button className="Products__btn">Подробнее</button>
    </div>
  );
}

export default Products;