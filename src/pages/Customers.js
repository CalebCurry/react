import { useEffect, useState } from 'react';
export default function Customers() {
    const [customers, setCustomers] = useState();
    useEffect(() => {
        console.log('Fetching...');
        fetch('http://localhost:8000/api/customers/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCustomers(data.customers);
            });
    }, []);
    return (
        <>
            <h1>Here are our customer:</h1>
            {customers
                ? customers.map((customer) => {
                      return <p>{customer.name}</p>;
                  })
                : null}
        </>
    );
}
