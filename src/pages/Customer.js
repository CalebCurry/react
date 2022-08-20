import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Customer() {
    const { id } = useParams();
    const [customer, setCustomer] = useState();
    useEffect(() => {
        const url = 'http://localhost:8000/api/customers/' + id;
        fetch(url)
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCustomer(data.customer);
            });
    }, []);
    return (
        <>
            {customer ? (
                <div>
                    <p>{customer.id}</p>
                    <p>{customer.name}</p>
                    <p>{customer.industry}</p>
                </div>
            ) : null}
            <Link to="/customers">Go back</Link>
        </>
    );
}
