import React from "react";
import { FormattedMessage } from "react-intl";
import styled from "styled-components";
import { Button } from "../components/Button";
import { PALETTE } from "../App";

let URL_INSCRIPCION = ""; 

const InscripcionButton = () => {
  return (
    <StyledButton
      color={PALETTE.PINK}
      href={URL_INSCRIPCION}
      target="_blank"
      onClick={() => window.open(URL_INSCRIPCION, "_blank")}
    >
      <FormattedMessage id="honduras.apply.speaker" children={"Inscribirse ahora"} />
    </StyledButton>
  );
};

const HackathonBanner = () => {
  return (
    <StyledBanner>
      <h1 style={styles.title}>
        <span style={styles.titlePart1}>HACKATON</span>
        <br />
        <span style={styles.titlePart2}>ETH LATAM</span>
      </h1>
      <h2 style={styles.subtitle}>13 Y 14 DE MARZO</h2>
      <h3 style={styles.location}>SAN PEDRO SULA</h3>
      <InscripcionButton />
    </StyledBanner>
  );
};

const StyledBanner = styled.div`
  width: 100%;
  height: 280px;
  background-color: #0f0f0f;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

const StyledButton = styled(Button)`
  padding: 10px 15px;
  margin: 10px;
  font-size: 16px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    text-align: center;
  }
  color: #ffffff;
`;

const styles = {
  title: {
    fontSize: "3em",
    fontWeight: "bold",
    color: PALETTE.CYAN, 
  },
  titlePart1: {
    marginBottom: "15px",
    fontFamily: "HelveticaNeueLTstd-Bold",
    color: PALETTE.CYAN,
  },
  titlePart2: {
    textTransform: "uppercase",
    letterSpacing: "2px",
    color: "#ffffff", 
  },
  subtitle: {
    fontSize: "2em",
    color: "#f0f0f0", 
    marginBottom: "10px",
  },
  location: {
    fontSize: "1.5em",
    color: PALETTE.CYAN_DARK, 
    marginBottom: "0",
  },
};

export default HackathonBanner;
