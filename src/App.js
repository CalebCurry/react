import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
    const [role, setRole] = useState('dev');
    const showEmployees = true;
    return (
        <div className="App bg-red-300">
            {showEmployees ? (
                <>
                    <input
                        type="text"
                        onChange={(e) => {
                            console.log(e.target.value);
                            setRole(e.target.value);
                        }}
                    />
                    <Employee name="Caleb" role="Intern" />
                    <Employee name="Abby" role={role} />
                    <Employee name="John" />
                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </div>
    );
}

export default App;
