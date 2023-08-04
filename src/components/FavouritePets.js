import React from 'react'
import { Card, Container, Row, Col } from 'react-bootstrap'

const FavouritePets = ({ favourites }) => {
  return (
    <Container>
      <h2>My Favourites</h2>
      <Row className="favourites-list">
        {favourites.map((pet) => (
          <Col key={pet.id} xs={12} md={6} lg={4}>
            <Card className="pet-card">
              <Card.Img variant="top" src={pet.image} alt={pet.name} />
              <Card.Body>
                <Card.Title>{pet.name}</Card.Title>
                <Card.Text>Breed: {pet.breed}</Card.Text>
                <Card.Text>Age: {pet.age}</Card.Text>
                <Card.Text>Size: {pet.size}</Card.Text>
                <Card.Text>Description: {pet.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FavouritePets;
