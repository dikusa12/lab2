import React from 'react';
import CarouselBoxHk from "../../components/Carousel/index.js";
import { Container } from "react-bootstrap";
import { teams } from "../../utils/teams.js";
import TeamCard from "./components/TeamCard/index.js";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <CarouselBoxHk />

      <Container>
        <h2 className="text-center m-4">{t("our-team")}</h2>
        <div className="row">
          {teams.map(team =>
            <TeamCard team={team} key={team.id} />
          )}
        </div>
      </Container>
    </>
  );
};

export default Home;