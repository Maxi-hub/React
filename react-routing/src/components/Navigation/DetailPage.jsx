import { Link, useParams } from "react-router-dom";
// import { Link, useNavigate, useParams } from "react-router-dom";
import s from "../../App.module.css";
import uuid from 'react-uuid';


export const DetailPage = ({ items }) => {
    const { itemID } = useParams();
    // const navigate = useNavigate();
    const item = items.find(item => item.id === parseInt(itemID, 10));

    // const goBack = () => {
    //     navigate('/items'); 
    // };

    // В DetailPage для кнопки возврата можно использовать стандартную ссылку (<Link>), чтобы использовать функционал маршрутизации, встроенный в react-router, вместо вызова navigate().

    return (
        <div className={s.textBox}>
            <Link className={s.itemLink} to="/items">Вернуться к анекдотам</Link>
            {/* <button className={s.button} onClick={goBack()}>Вернуться к анекдотам</button> */}
            <ul>{(item.content).map(joke => <li key={uuid()} className={s.content}>{joke}</li>)}</ul>
        </div>
    )
}
