import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Dictionary() {
    const [word, setWord] = useState('');
    const navigate = useNavigate();

    return (
        <>
            <input
                type="text"
                onChange={(e) => {
                    setWord(e.target.value);
                }}
            />
            <button
                onClick={() => {
                    navigate('/definition/' + word, { replace: true });
                }}
            >
                Search
            </button>
        </>
    );
}
