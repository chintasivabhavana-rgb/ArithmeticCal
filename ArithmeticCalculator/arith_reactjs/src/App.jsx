import { useState } from 'react';
import { NODE_URL } from './data';
import { callAPI } from './callapi';

function App() {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [result, setResult] = useState(null);

    // Addition
    const handleAdd = () => {
        if (value1 === '' || value2 === '') {
            alert('Please enter both numbers');
            return;
        }

        const data = {
            value1: value1,
            value2: value2
        };

        callAPI(
            'POST',
            `${NODE_URL}/add`,
            data,
            (response) => {
                if (response.status === 'success') {
                    setResult(response.result);
                }
            }
        );
    };

    // Subtraction
    const handleSubtract = () => {
        if (value1 === '' || value2 === '') {
            alert('Please enter both numbers');
            return;
        }

        callAPI(
            'GET',
            `${NODE_URL}/subtract/${value1}/${value2}`,
            null,
            (response) => {
                if (response.status === 'success') {
                    setResult(response.result);
                }
            }
        );
    };

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '100px',
            fontFamily: 'Arial'
        }}>
            <h1>Arithmetic Calculator</h1>

            <div>
                <label>Value 1: </label>
                <input
                    type="number"
                    value={value1}
                    onChange={(e) => setValue1(e.target.value)}
                />
            </div>

            <br />

            <div>
                <label>Value 2: </label>
                <input
                    type="number"
                    value={value2}
                    onChange={(e) => setValue2(e.target.value)}
                />
            </div>

            <br />

            <button onClick={handleAdd}>
                Add (POST)
            </button>

            {' '}

            <button onClick={handleSubtract}>
                Subtract (GET)
            </button>

            <h2>
                Result: {result !== null ? result : 'N/A'}
            </h2>
        </div>
    );
}

export default App;