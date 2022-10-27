import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';

const NewsSummaryCard = () => {

    const news = useLoaderData();
    const { _id, title, details, image } = news;
    console.log(news)

    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{details}</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Link to="/details">Go to Course Details</Card.Link>
            </Card.Body>
        </Card>


    );
};

export default NewsSummaryCard;