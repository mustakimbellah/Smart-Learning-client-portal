import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { checkout } = useContext(AuthContext);
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-10 col-md-8 col-ld-6 mx-auto">
                        <Card className='text-dark'>
                            <h3 className='text-center'>My Checkout</h3>
                            <Card.Body className='text-center'>
                                <Card.Title>{checkout.title}</Card.Title>
                                <Card.Text>
                                    Course ID: {checkout._id}
                                </Card.Text>
                                <Link to='/' className='btn btn-warning'>Go Course Page</Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Checkout;