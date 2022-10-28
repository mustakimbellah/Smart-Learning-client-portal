import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const CartPart = ({ news }) => {
    const { _id, title, details, image } = news;
    return (
        <div className=''>
            <Card className="mb-5">

                <Card.Body >
                    <Card.Title className=' text-dark'>{title}</Card.Title>
                    {
                        details.length > 60 ?
                            <small className=' text-info '>{details.slice(0, 50) + '...'}</small>
                            :
                            <small>{details}</small>
                    }
                </Card.Body>
                <Card.Img variant="top" src={image}
                    className='p-2' style={{ 'alignContent': 'center' }} />
                <Card.Footer className="d-flex justify-content-between fw-bold">
                    <Link to={`course/${_id}`} className='text-light btn btn-dark w-100'>Course Details</Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CartPart;