import './index.css';
import Employee from './components/Employee';
import { useState } from 'react';

function App() {
    const [role, setRole] = useState('dev');
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
                        <Employee
                            name="Caleb"
                            role="Intern"
                            img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
                        />
                        <Employee
                            name="Abby"
                            role={role}
                            img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
                        />
                        <Employee
                            name="John"
                            img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
                        />
                        <Employee
                            name="Caleb"
                            role="Intern"
                            img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
                        />
                        <Employee
                            name="Abby"
                            role={role}
                            img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
                        />
                        <Employee
                            name="John"
                            img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
                        />
                        <Employee
                            name="Caleb"
                            role="Intern"
                            img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
                        />
                        <Employee
                            name="Abby"
                            role={role}
                            img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
                        />
                        <Employee
                            name="John"
                            img="https://images.pexels.com/photos/3831645/pexels-photo-3831645.jpeg"
                        />
                    </div>
                </>
            ) : (
                <p>You cannot see the employees</p>
            )}
        </div>
    );
}

export default App;
