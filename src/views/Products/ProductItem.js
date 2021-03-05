import './Products.scss';
// import Product from '../../components/Product/Product'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function ProductItem() {
    let { id } = useParams();
    return(
        <div className="ProductItem">
            <div className="ProductItem__controls">
                <Link className="back" to="/products">&#8592; Назад</Link>
            </div>
            <div className="ProductItem__info">
                Это страница продукта с ID: {id}
            </div>            
        </div>
    )
}

export default ProductItem;