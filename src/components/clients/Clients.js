import React, {Component} from "react";
import {Link} from "react-router-dom";


class Clients extends Component {

    render() {
        const clients = [
            {
                id: '123123',
                firstName: 'Rhioda Muthie',
                lastName: 'Muthie',
                email: 'rhioda.muthie@gmail.com',
                phone: '12312313',
                balance: '10000000'
            },
            {
                id: '123123',
                firstName: 'Rhioda Muthie',
                lastName: 'Muthie',
                email: 'rhioda.muthie@gmail.com',
                phone: '12312313',
                balance: '1000000'
            },
        ];

        if (clients) {
            return (
                <div>
                    <div className="row">
                        <div className="col-md-6">

                            <h2>
                                {' '}
                                <i className="fas fa-users"/>{' '} Clients {' '}</h2>
                        </div>
                        <div className="col-md-6">

                            {/*add total*/}
                        </div>

                    </div>

                    <table className="table table-striped">
                        <thead className="thead-inverse">
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Balance</th>
                            <th/>
                        </tr>
                        </thead>
                        <tbody>
                        {clients.map(client => (
                            <tr key={client.id}>
                                <td>{client.firstName} {client.lastName}</td>
                                <td>{client.email}</td>
                                <td>{client.phone}</td>
                                <td>${' '}{parseFloat(client.balance).toFixed(2)}</td>
                                <td>
                                    <Link to={`/client/${client.id}`} className="btn btn-secondary btn-sn">
                                        <i className="fas fa-arrow-circle-right"></i>Details
                                    </Link>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>

                </div>
            )
        } else {
            return (
                <h1>Loading...</h1>
            )
        }


    }
}

export default Clients;