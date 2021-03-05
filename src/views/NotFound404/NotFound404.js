import './NotFound404.scss';
import { Link } from "react-router-dom";

function NotFound404() {
    <div className="NotFound404">
        <div className="NotFound404__title">
            404
        </div>
        <div className="NotFound404__info">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis facilis autem et inventore eius vel aut, repellat nisi sapiente minus! Praesentium error dolores in autem modi repellat rem vero assumenda.
        </div>
        <Link to="/">Перейти на главную страницу</Link>
    </div>
}

export default NotFound404;