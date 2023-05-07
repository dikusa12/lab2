import React from 'react';
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const TeamCard = ({ team }) => {
  const navigate = useNavigate();

  const navigateToSingleTeam = () => {
    navigate('/team/' + team.id)
  }

  return (
    <div className="col">
      <Card className="m-4 text-center" bg="light" border="primary">
        <Card.Img
          variant="top"
          src={team.img}
        />
        <Card.Body>
          <Card.Title>{team.name}</Card.Title>
          <Card.Text> {team.team} </Card.Text>
          <Button onClick={navigateToSingleTeam} variant="primary">About team</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default TeamCard;