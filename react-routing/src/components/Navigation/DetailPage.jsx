import { Link, useParams } from "react-router-dom";
import s from "../../App.module.css";
import uuid from 'react-uuid';


export const DetailPage = ({ items }) => {
    const { itemID } = useParams();
    const item = items.find(item => item.id === parseInt(itemID, 10));

    return (
        <div className={s.textBox}>
            <Link className={`${s.itemLink} ${s.goBack}`} to="/items">Вернуться к анекдотам</Link>
            <ul>{(item.content).map(joke => <li key={uuid()} className={s.content}>{joke}</li>)}</ul>
        </div>
    )
}

/**
 * В данном примере возврат к темам анекдотов реализовала с помощью useNavigate().
 */
// import { useParams, useNavigate } from "react-router-dom";
// import s from "../../App.module.css";
// import uuid from 'react-uuid';


// export const DetailPage = ({ items }) => {
//     const { itemID } = useParams();
//     const navigate = useNavigate();
//     const item = items.find(item => item.id === parseInt(itemID, 10));

//     const goBack = () => {
//         navigate('/items'); 
//     };


//     return (
//         <div className={s.textBox}>
//             <button className={s.button} onClick={goBack}>Вернуться к анекдотам</button>
//             <ul>{(item.content).map(joke => <li key={uuid()} className={s.content}>{joke}</li>)}</ul>
//         </div>
//     )
// }