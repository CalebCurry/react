import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
    const [role, setRole] = useState('dev');
    const [employees, setEmployees] = useState([
        {
            name: 'Caleb',
            role: 'YouTube Sensation',
            img: 'https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg',
        },
        {
            name: 'Sal',
            role: 'Manager',
            img: 'https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg',
        },
        {
            name: 'John',
            role: 'Director of Eng.',
            img: 'https://images.pexels.com/photos/2095582/pexels-photo-2095582.jpeg',
        },
        {
            name: 'Melanie',
            role: 'Software Engineer',
            img: 'https://images.pexels.com/photos/3760583/pexels-photo-3760583.jpeg',
        },
        {
            name: 'Corey',
            role: 'The Devops Guy',
            img: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg',
        },
        {
            name: 'Jake',
            role: 'Senior',
            img: 'https://images.pexels.com/photos/2225298/pexels-photo-2225298.jpeg',
        },
    ]);

    const showEmployees = true;
    return (
        <div className="App">
            {showEmployees ? (
                <>
                    <input
                        type="text"
                        onChange={(e) => {
                            console.log(e.target.value);
                            setRole(e.target.value);
                        }}
                    />
                    <div className="flex flex-wrap justify-center">
                        {employees.map((employee) => {
                            console.log(uuidv4());
                            return (
                                <Employee
                                    key={uuidv4()}
                                    name={employee.name}
                                    role={employee.role}
                                    img={employee.img}
                                />
                            );
                        })}
                    </div>
                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </div>
    );
}

export default App;
