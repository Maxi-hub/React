import { useState } from "react";
// import Input from '@mui/joy/Input';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import './style.css';

/**
 * @description изначально было только одно поле ввода Input 
 */

function TemperatureConverter() {
    const [degree, setDegree] = useState('');
    const [result, setResult] = useState('');
    const [text, setText] = useState('');

    const updatedegree = (event) => {
        setDegree(event.target.value);
    }

    const ConvertToFahrenheit = () => {
        setResult((degree * 1.8) + 32);
        setText("по Фаренгейту");
    }

    const ConvertToCelsius = () => {
        setResult(((degree - 32) * 5 / 9).toFixed(1));
        setText("по Цельсию");
    }

    return (
        <div className="temterature-block"  >
            <TextFields updatedegree={updatedegree} />
            <div className="buttons">
                <Button variant="contained" color="success" onClick={ConvertToFahrenheit}>Converter to Fahrenheit</Button>
                <Button variant="outlined" color="success" onClick={ConvertToCelsius}>Converter to Celsius</Button>
            </div>
            <p>Температура {degree ? result : degree} градусов {text}</p>
        </div>
    );
}

const TextFields = ({ updatedegree }) => {
    return (
        <div className="input-box">
            {/* <Input label="Filled" color="success" variant="soft" type="text" onChange={updatedegree} /> */}
            <TextField
                label="Celsius"
                id="standard-size-small"
                defaultValue=""
                size="small"
                variant="standard"
                onChange={updatedegree}
            />
            <TextField
                label="Fahrenheit"
                id="standard-size-small"
                defaultValue=""
                size="small"
                variant="standard"
                onChange={updatedegree}
            />
        </div>
    );
}
export default TemperatureConverter;
