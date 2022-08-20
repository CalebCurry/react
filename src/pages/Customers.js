import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { baseUrl } from '../shared';

export default function Customers() {
    const [customers, setCustomers] = useState();
    useEffect(() => {
        const url = baseUrl + 'api/customers/';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setCustomers(data.customers);
            });
    }, []);
    return (
        <>
            <h1>Here are our customer:</h1>
            {customers
                ? customers.map((customer) => {
                      return (
                          <ul>
                              <li>
                                  <Link
                                      id={customer.id}
                                      to={'/customers/' + customer.id}
                                  >
                                      {customer.name}
                                  </Link>
                              </li>
                          </ul>
                      );
                  })
                : null}
        </>
    );
}
