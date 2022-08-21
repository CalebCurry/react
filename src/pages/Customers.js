import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AddCustomer from '../components/AddCustomer';
import { baseUrl } from '../shared';

export default function Customers() {
    const [customers, setCustomers] = useState();
    const [show, setShow] = useState(false);

    function toggleShow() {
        setShow(!show);
    }

    useEffect(() => {
        const url = baseUrl + 'api/customers/';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCustomers(data.customers);
            });
    }, []);
    function newCustomer(name, industry) {
        const data = { name: name, industry: industry };
        const url = baseUrl + 'api/customers/';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then((data) => {
                toggleShow();
                console.log(data);
                setCustomers([...customers, data.customer]);
                //make sure the list is updated appropriately
            })
            .catch((e) => {
                console.log(e);
            });
    }
    return (
        <>
            <h1>Here are our customers:</h1>
            <ul>
                {customers
                    ? customers.map((customer) => {
                          return (
                              <li key={customer.id}>
                                  <Link to={'/customers/' + customer.id}>
                                      {customer.name}
                                  </Link>
                              </li>
                          );
                      })
                    : null}
            </ul>
            <AddCustomer
                newCustomer={newCustomer}
                show={show}
                toggleShow={toggleShow}
            />
        </>
    );
}
