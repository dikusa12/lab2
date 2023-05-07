import React from 'react';
import { useParams } from "react-router-dom";
import { teams } from "../../utils/teams.js";
import { Container } from "react-bootstrap";

const SingleTeam = () => {
  const { id } = useParams();
  const team = teams.filter(team => team.id === +id)[0]

  return (
    <Container className="mt-5 pt-5">
      <img src={team.img} alt="" />
      <h1>{team.name}</h1>
      <p>{team.team}</p>
    </Container>
  );
};

export default SingleTeam;