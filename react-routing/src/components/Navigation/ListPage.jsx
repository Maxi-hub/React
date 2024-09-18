import { Link } from "react-router-dom";
import s from "../../App.module.css";

export const ListPage = ({ items }) => {

    return (
        <div className={s.textBox}>
            <h2>Темы анекдотов</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <Link className={s.itemLink} to={`/items/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}
