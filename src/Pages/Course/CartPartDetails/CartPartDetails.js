import React from 'react';
import { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider'

const CartPartDetails = () => {

    const { setCheckout } = useContext(AuthContext);

    const CartPartDetails = useLoaderData();

    const { title, details, image } = CartPartDetails;

    return (
        <div className="container my-3" style={{ "maxWidth": "900px" }} >
            <div className="mx-auto">
                <h2 className='text-success'>{title}</h2>
                <img src={image} alt="" className='w-100' height="300" style={{ 'alignContent': 'center' }} />
                <p className='text-success fw-bolder'> {details}</p>
                <Link to={'/checkout'} className='btn btn-primary' onClick={() => setCheckout(CartPartDetails)}>Get Premium Access</Link>
            </div>
        </div>
    );
};

export default CartPartDetails;