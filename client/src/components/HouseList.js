import React from 'react';
import HouseCard from './HouseCard';
import { Container, Row, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function HouseList({ houseList, setHouseSearch, currentBuyer }) {
  const navigate = useNavigate();

  if (!currentBuyer) {
    navigate('/');
  }

  let renderHouses = houseList.map((house) => {
    return <HouseCard key={house.id} house={house} />;
  });

  return (
    <div className="list">
      <br></br>
      <div className="parent grid-parent">
        <h1 className="child">Houses:</h1>
        <Form.Group className="mb-3 search child">
          <Form.Control
            placeholder="Search..."
            onChange={(e) => setHouseSearch(e.target.value)}
          />
        </Form.Group>
      </div>
      <br></br>
      <br></br>
      <Container>
        <Row className="g-4">{renderHouses}</Row>
      </Container>
      <br></br>
    </div>
  );
}

export default HouseList;
