import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './style.css';

function TemperatureConverter() {
    const [degreeCelsius, setDegreeCelsius] = useState('');
    const [degreeFahrenheit, setDegreeFahrenheit] = useState('');
    const [text, setText] = useState('');

    const updatedegreeCelsius = (event) => {
        setDegreeCelsius(event.target.value);
        setText('');
    };

    const updatedegreeFahrenheit = (event) => {
        setDegreeFahrenheit(event.target.value);
        setText('');
    };

    const convertToFahrenheit = () => {
        const celsiusValue = parseFloat(degreeCelsius);
        if (!isNaN(celsiusValue)) {
            const fahrenheitValue = ((celsiusValue * 1.8) + 32).toFixed(1);
            setDegreeFahrenheit(fahrenheitValue);
            setText(`${celsiusValue} градусов Цельсия равно ${fahrenheitValue} градусов Фаренгейта`);
        }
    };

    const convertToCelsius = () => {
        const fahrenheitValue = parseFloat(degreeFahrenheit);
        if (!isNaN(fahrenheitValue)) {
            const celsiusValue = ((fahrenheitValue - 32) * 5 / 9).toFixed(1);
            setDegreeCelsius(celsiusValue);
            setText(`${fahrenheitValue} градусов Фаренгейта равно ${celsiusValue} градусов Цельсия`);
        }
    };

    return (
        <div className="temterature-block">
            <div className="input-box">
                <TextField
                    label="Цельсий"
                    variant="outlined"
                    value={degreeCelsius}
                    onChange={updatedegreeCelsius}
                />
                <Button variant="contained" color="success" className="buttons" onClick={convertToFahrenheit}>
                    Convert to Fahrenheit
                </Button>
            </div>
            <div className="input-box">
                <TextField
                    label="Фаренгейт"
                    variant="outlined"
                    value={degreeFahrenheit}
                    onChange={updatedegreeFahrenheit}
                />
                <Button variant="outlined" color="success" className="buttons" onClick={convertToCelsius}>
                    Convert to Celsius
                </Button>
            </div>
            <p>{text}</p>
        </div>
    );
}

export default TemperatureConverter;


// Изначальный вариант:
/**
 * @description изначально было только одно поле ввода Input
 */

// function TemperatureConverter() {
//     const [degree, setDegree] = useState('');
//     const [result, setResult] = useState('');
//     const [text, setText] = useState('');

//     const updatedegree = (event) => {
//         setDegree(event.target.value);
//     };

//     const ConvertToFahrenheit = () => {
//         setResult((degree * 1.8) + 32);
//         setText("по Фаренгейту");
//     };

//     const ConvertToCelsius = () => {
//         setResult(((degree - 32) * 5 / 9).toFixed(1));
//         setText("по Цельсию");
//     };

//     return (
//         <div className="temterature-block"  >
//             <TextFields updatedegree={updatedegree} />
//             <div className="buttons">
//                 <Button variant="contained" color="success" onClick={ConvertToFahrenheit}>Converter to Fahrenheit</Button>
//                 <Button variant="outlined" color="success" onClick={ConvertToCelsius}>Converter to Celsius</Button>
//             </div>
//             <p>Температура {degree ? result : degree} градусов {text}</p>
//         </div>
//     );
// }

// const TextFields = ({ updatedegree }) => {
//     return (
//         <div className="input-box">
//             {/* <Input label="Filled" color="success" variant="soft" type="text" onChange={updatedegree} /> */}
//             <TextField
//                 label="Celsius"
//                 id="standard-size-small"
//                 defaultValue=""
//                 size="small"
//                 variant="standard"
//                 onChange={updatedegree}
//             />
//             <TextField
//                 label="Fahrenheit"
//                 id="standard-size-small"
//                 defaultValue=""
//                 size="small"
//                 variant="standard"
//                 onChange={updatedegree}
//             />
//         </div>
//     );
// }

// export default TemperatureConverter;

// Коментарий от преподавателя по улучшению: Два поля для ввода (Celsius и Fahrenheit) обновляют одну и ту же переменную degree, что вызывает путаницу при конвертации. Может сделать две переменных и два useEffect Один следит за целсием, другой для фаренгейт